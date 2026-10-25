/**
 * Muse Desktop — PI-Desktop plugin main process (embedded build).
 *
 * What this is
 * ------------
 * The muse-desktop renderer is embedded unmodified as a PI-Desktop view. In the
 * original app it talks to an Electron preload bridge (`window.muse`) whose main
 * process drives the Muse Code CLI through @muse-code/sdk. Inside PI-Desktop
 * there is no CLI: this file re-implements the same bridge contract (all 40
 * DesktopAPI methods plus the AppEvent stream) on top of PI-Desktop's own model
 * runtime, so conversations run on the models configured in PI-Desktop.
 *
 * Channel: view `pluginBridge.invoke("muse.<channel>", { args })` → onPanelInvoke.
 * Events: a plugin cannot push to its view, so every AppEvent is appended to a
 * sequenced ring that the view's shim drains with `muse.pollEvents`.
 *
 * Deliberate differences from the CLI build (nothing in the UI changes shape):
 *   - Model calls are one-shot (`pi.agent.complete`), so an assistant message
 *     appears complete instead of streaming deltas.
 *   - No tool execution: PI-Desktop's tools are not available to this backend,
 *     so no approval cards are ever raised. The transcript shows messages only.
 *   - No file picker for attachments and no microphone: the host exposes no
 *     such API to plugins, so both report that clearly instead of pretending.
 */

"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { execFile, spawn } = require("node:child_process");
const { randomUUID } = require("node:crypto");
const { promisify } = require("node:util");

const execute = promisify(execFile);

// ── limits ──────────────────────────────────────────────────────────────────

const EVENT_RING_LIMIT = 500;
const HISTORY_LIMIT = 40;
const MAX_MESSAGE_CHARS = 180000;
const MAX_COMPLETE_SYSTEM_CHARS = 30000;
const MAX_PREVIEW_BYTES = 512 * 1024;
const MAX_RECENT_PROJECTS = 30;
const MAX_LIST_ENTRIES = 4000;
const MAX_PERSISTED_ITEMS = 400;

// ── preferences (shape must satisfy muse-desktop's preferencesSchema) ───────

const EFFORTS = ["none", "minimal", "low", "medium", "high", "xhigh", "max", "ultra"];
const THEMES = ["muse", "daylight", "moonlight", "grove", "plush", "system"];
const FONT_SIZES = ["compact", "comfortable", "large"];

function defaultPreferences() {
  return {
    theme: "muse",
    backgroundIntensity: 70,
    cliPath: "",
    recentProjects: [],
    trustedProjects: [],
    archivedSessionIds: [],
    pinnedSessionIds: [],
    reasoningEffort: "high",
    fontSize: "comfortable",
    reduceMotion: false,
    notifyOnCompletion: false,
  };
}

function stringList(value, limit) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const entry of value) {
    if (typeof entry !== "string" || !entry) continue;
    if (out.includes(entry)) continue;
    out.push(entry);
    if (out.length >= limit) break;
  }
  return out;
}

function sanitizePreferences(raw) {
  const base = defaultPreferences();
  if (!raw || typeof raw !== "object") return base;
  if (THEMES.includes(raw.theme)) base.theme = raw.theme;
  const intensity = Number(raw.backgroundIntensity);
  if (Number.isFinite(intensity)) base.backgroundIntensity = Math.min(100, Math.max(0, intensity));
  if (typeof raw.cliPath === "string") base.cliPath = raw.cliPath.slice(0, 4096);
  base.recentProjects = stringList(raw.recentProjects, MAX_RECENT_PROJECTS);
  base.trustedProjects = stringList(raw.trustedProjects, MAX_RECENT_PROJECTS);
  base.archivedSessionIds = stringList(raw.archivedSessionIds, 500);
  base.pinnedSessionIds = stringList(raw.pinnedSessionIds, 500);
  if (EFFORTS.includes(raw.reasoningEffort)) base.reasoningEffort = raw.reasoningEffort;
  if (FONT_SIZES.includes(raw.fontSize)) base.fontSize = raw.fontSize;
  base.reduceMotion = raw.reduceMotion === true;
  base.notifyOnCompletion = raw.notifyOnCompletion === true;
  return base;
}

/** Only these may be changed from the view (mirrors muse's preferencesPatchSchema). */
const PATCHABLE = new Set([
  "theme",
  "backgroundIntensity",
  "cliPath",
  "reasoningEffort",
  "fontSize",
  "reduceMotion",
  "notifyOnCompletion",
]);

// ── state ───────────────────────────────────────────────────────────────────

let dataDir = "";
let prefs = defaultPreferences();
let prefsFile = "";
let sessionsFile = "";
let loaded = false;

/** sessionId -> { session, items, summary, summaryUpTo, error, usage, queue } */
const sessions = new Map();

let eventSeq = 0;
const eventRing = [];

let modelCache = null;
let settingsCache = {};
/** Whether the renderer layer should be covering the window right now. */
let layerWanted = false;

function nowIso() {
  return new Date().toISOString();
}

function messageOf(error) {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  return String(error.message ?? error);
}

function emit(event) {
  eventSeq += 1;
  eventRing.push({ seq: eventSeq, event });
  while (eventRing.length > EVENT_RING_LIMIT) eventRing.shift();
}

function statusSnapshot() {
  return {
    state: "ready",
    path: modelCache?.defaultKey ?? settingsCache.modelKey ?? "PI-Desktop models",
    version: "PI-Desktop",
  };
}

function emitSession(sessionId) {
  const live = sessions.get(sessionId);
  if (!live) return;
  emit({ type: "session", view: viewOf(sessionId) });
}

function viewOf(sessionId) {
  const live = sessions.get(sessionId);
  if (!live) throw new Error("Open this conversation before performing an action.");
  return {
    session: { ...live.session },
    items: live.items.map((item) => ({ ...item })),
    approvals: [],
    questions: [],
    ...(live.usage ? { usage: { ...live.usage } } : {}),
    ...(live.error ? { error: live.error } : {}),
  };
}

function requireSession(sessionId) {
  const id = String(sessionId ?? "");
  const live = sessions.get(id);
  if (!live) throw new Error("Open this conversation before performing an action.");
  return live;
}

// ── persistence ─────────────────────────────────────────────────────────────

async function writeJson(file, value) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  const temp = `${file}.tmp`;
  await fs.writeFile(temp, JSON.stringify(value, null, 2), { mode: 0o600 });
  await fs.rename(temp, file);
}

async function persistPreferences() {
  try {
    await writeJson(prefsFile, prefs);
  } catch (error) {
    console.log(`[muse] could not save preferences: ${messageOf(error)}`);
  }
}

async function persistSessions() {
  const dump = { sessions: [], items: {} };
  for (const [sessionId, live] of sessions) {
    dump.sessions.push(live.session);
    dump.items[sessionId] = live.items.slice(-MAX_PERSISTED_ITEMS);
  }
  try {
    await writeJson(sessionsFile, dump);
  } catch (error) {
    console.log(`[muse] could not save conversations: ${messageOf(error)}`);
  }
}

async function loadState() {
  try {
    prefs = sanitizePreferences(JSON.parse(await fs.readFile(prefsFile, "utf8")));
  } catch {
    prefs = defaultPreferences();
  }
  try {
    const dump = JSON.parse(await fs.readFile(sessionsFile, "utf8"));
    for (const session of dump?.sessions ?? []) {
      if (!session?.sessionId) continue;
      sessions.set(session.sessionId, {
        session: { ...session, status: "idle", activeTurnId: null },
        items: Array.isArray(dump.items?.[session.sessionId]) ? dump.items[session.sessionId] : [],
        summary: "",
        summaryUpTo: 0,
        error: undefined,
        usage: undefined,
        queue: [],
      });
    }
  } catch {
    /* first run */
  }
  loaded = true;
}

// ── models: PI-Desktop's configured models, mapped to Muse's shape ──────────

function firstString(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function entryToModel(entry) {
  if (!entry || typeof entry !== "object") return null;
  const providerId = firstString(
    entry.providerId,
    entry.provider,
    entry.providerKey,
    entry.serviceId,
    entry.service,
    entry.vendor,
  );
  const rawId = firstString(
    entry.modelId,
    entry.model,
    entry.modelKey,
    entry.id,
    entry.slug,
    entry.name,
  );
  let key = firstString(entry.key, entry.fullKey, entry.modelKey);
  if (!key) {
    if (rawId.includes("/")) key = rawId;
    else if (providerId && rawId) key = `${providerId}/${rawId}`;
  }
  if (!key || !key.includes("/")) return null;
  const modelId = key;
  const bare = key.slice(key.indexOf("/") + 1);
  const displayLabel =
    firstString(
      entry.displayLabel,
      entry.displayName,
      entry.label,
      entry.title,
      entry.name,
      entry.friendlyName,
    ) || bare;
  const limit = Number(entry.contextLimit ?? entry.contextWindow ?? entry.context);
  return {
    modelId,
    displayLabel,
    providerId: key.slice(0, key.indexOf("/")),
    isDefault: entry.isDefault === true || entry.default === true || entry.isActive === true,
    isActive: entry.isActive === true,
    contextLimit: Number.isFinite(limit) && limit > 0 ? limit : null,
    ...(typeof entry.defaultReasoningEffort === "string"
      ? { defaultReasoningEffort: entry.defaultReasoningEffort }
      : {}),
  };
}

async function listModels() {
  if (modelCache) return modelCache;
  let raw = null;
  try {
    raw = await pi.models.list();
  } catch (error) {
    console.log(`[muse] models.list failed: ${messageOf(error)}`);
  }
  const list = Array.isArray(raw)
    ? raw
    : (raw?.models ?? raw?.items ?? raw?.list ?? raw?.data ?? []);
  const models = [];
  const seen = new Set();
  for (const entry of Array.isArray(list) ? list : []) {
    const model = entryToModel(entry);
    if (!model || seen.has(model.modelId)) continue;
    seen.add(model.modelId);
    models.push(model);
  }
  const preferred = settingsCache.modelKey ? String(settingsCache.modelKey) : "";
  let defaultKey = "";
  if (preferred && seen.has(preferred)) defaultKey = preferred;
  if (!defaultKey) defaultKey = models.find((model) => model.isDefault)?.modelId ?? models[0]?.modelId ?? "";
  if (defaultKey) {
    for (const model of models) model.isDefault = model.modelId === defaultKey;
  }
  modelCache = { models, defaultKey };
  return modelCache;
}

async function refreshSettings() {
  try {
    const settings = await pi.plugin.getSettings();
    settingsCache = settings && typeof settings === "object" ? settings : {};
  } catch {
    settingsCache = {};
  }
}

// ── model invocation ────────────────────────────────────────────────────────

function systemPrompt(live) {
  const root = live.session.workspaceRoot;
  return [
    "You are Muse, the assistant inside Muse Desktop.",
    "Muse Desktop is running as an embedded panel inside PI-Desktop, and the models are the ones configured in PI-Desktop.",
    "Answer directly and concisely. Use Markdown. You cannot run tools, read files, or execute commands - if something would require that, say so plainly instead of pretending.",
    root ? `The project folder for this conversation is: ${root}` : "No project folder is selected for this conversation.",
    `Current time: ${new Date().toISOString()}`,
  ].join("\n");
}

function buildMessages(live, excludeItemId) {
  const start = live.summary ? live.summaryUpTo : 0;
  const messages = [];
  let chars = 0;
  const slice = live.items.slice(start);
  for (const item of slice) {
    if (item.itemId === excludeItemId) continue;
    if (item.retracted) continue;
    let role = "";
    let content = "";
    if (item.kind === "userMessage") {
      role = "user";
      content = item.displayText || item.text || "";
    } else if (item.kind === "agentMessage" && item.status === "completed") {
      role = "assistant";
      content = item.text || "";
    }
    if (!content.trim()) continue;
    messages.push({ role, content });
    chars += content.length;
  }
  // Keep the newest turns that still fit the host's message budget.
  let total = 0;
  const kept = [];
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    total += messages[index].content.length;
    if (kept.length >= HISTORY_LIMIT || total > MAX_MESSAGE_CHARS) break;
    kept.unshift(messages[index]);
  }
  while (kept.length && kept[0].role !== "user") kept.shift();
  return kept.length ? kept : messages.slice(-2);
}

async function callModel(modelKey, system, messages, effort) {
  const input = { modelKey, messages };
  const cleanSystem = systemSlice(system);
  if (cleanSystem) input.system = cleanSystem;
  if (effort && EFFORTS.includes(effort)) input.thinkingLevel = effort;
  try {
    return await pi.agent.complete(input);
  } catch (error) {
    // A host that does not accept this effort tier still answers without it.
    if (input.thinkingLevel && /INVALID_ARGUMENT|UNSUPPORTED/i.test(String(error?.code ?? ""))) {
      delete input.thinkingLevel;
      return await pi.agent.complete(input);
    }
    throw error;
  }
}

function systemSlice(text) {
  const value = String(text ?? "");
  return value.length > MAX_COMPLETE_SYSTEM_CHARS
    ? value.slice(0, MAX_COMPLETE_SYSTEM_CHARS)
    : value;
}

async function resolveModelKey(live) {
  const { models, defaultKey } = await listModels();
  const wanted = live.session.modelId;
  if (wanted && models.some((model) => model.modelId === wanted)) return wanted;
  if (defaultKey) return defaultKey;
  throw new Error(
    "No model is available. Choose a model in PI-Desktop settings, or set one on the plugin's settings page.",
  );
}

// ── turns ───────────────────────────────────────────────────────────────────

function newItem(fields) {
  return {
    itemId: randomUUID(),
    revision: 0,
    recordedAt: nowIso(),
    ...fields,
  };
}

function startTurn(sessionId, text) {
  const live = requireSession(sessionId);
  const turnId = randomUUID();
  const display = text;
  const userItem = newItem({
    kind: "userMessage",
    status: "completed",
    turnId,
    text: display,
    displayText: display,
  });
  live.items.push(userItem);
  if (!live.session.firstUserPrompt) live.session.firstUserPrompt = display.slice(0, 400);
  const agentItem = newItem({ kind: "agentMessage", status: "inProgress", turnId, text: "" });
  live.items.push(agentItem);
  live.session.status = "running";
  live.session.activeTurnId = turnId;
  live.session.updatedAt = nowIso();
  live.session.lastActivityAt = live.session.updatedAt;
  live.session.turnCount = Number(live.session.turnCount ?? 0) + 1;
  live.error = undefined;
  emitSession(sessionId);
  emit({ type: "sessions-changed" });
  void persistSessions();
  void generate(live, turnId, agentItem);
  return viewOf(sessionId);
}

async function generate(live, turnId, agentItem) {
  const sessionId = live.session.sessionId;
  try {
    const modelKey = await resolveModelKey(live);
    if (live.session.activeTurnId !== turnId) return;
    const messages = buildMessages(live, agentItem.itemId);
    if (!messages.length) throw new Error("Write a message first.");
    const system = live.summary
      ? `${systemPrompt(live)}\n\nSummary of the earlier conversation:\n${live.summary}`
      : systemPrompt(live);
    const result = await callModel(modelKey, system, messages, prefs.reasoningEffort);
    if (live.session.activeTurnId !== turnId) return;
    const text = String(result?.text ?? "").trim();
    agentItem.text = text || "(The model returned an empty reply.)";
    agentItem.status = "completed";
    agentItem.revision += 1;
    if (result?.usage && typeof result.usage === "object") {
      const input = Number(result.usage.input ?? result.usage.promptTokens ?? result.usage.inputTokens ?? 0);
      const output = Number(result.usage.output ?? result.usage.completionTokens ?? result.usage.outputTokens ?? 0);
      if (Number.isFinite(input) || Number.isFinite(output)) {
        live.usage = {
          input: Number.isFinite(input) ? input : 0,
          output: Number.isFinite(output) ? output : 0,
          total: (Number.isFinite(input) ? input : 0) + (Number.isFinite(output) ? output : 0),
        };
      }
    }
  } catch (error) {
    if (live.session.activeTurnId !== turnId) return;
    agentItem.status = "failed";
    agentItem.failureReason = messageOf(error);
    agentItem.revision += 1;
    live.error = messageOf(error);
  } finally {
    if (live.session.activeTurnId === turnId) {
      live.session.status = "idle";
      live.session.activeTurnId = null;
      live.session.updatedAt = nowIso();
      live.session.lastActivityAt = live.session.updatedAt;
      emitSession(sessionId);
      emit({ type: "sessions-changed" });
      void persistSessions();
      drainQueue(sessionId);
    }
  }
}

function drainQueue(sessionId) {
  const live = sessions.get(sessionId);
  if (!live || live.session.status === "running") return;
  const next = live.queue.shift();
  if (typeof next === "string" && next.trim()) startTurn(sessionId, next);
}

/** Keeps the persisted transcript from growing without bound. */
function trimItems(live) {
  if (live.items.length <= MAX_PERSISTED_ITEMS) return;
  live.items = live.items.slice(-MAX_PERSISTED_ITEMS);
}

function cancelTurn(sessionId) {
  const live = requireSession(sessionId);
  if (live.session.status !== "running") return;
  const agentItem = [...live.items].reverse().find((item) => item.status === "inProgress");
  if (agentItem) {
    agentItem.status = "cancelled";
    agentItem.revision += 1;
    if (!agentItem.text) delete agentItem.text;
  }
  live.session.status = "idle";
  live.session.activeTurnId = null;
  live.session.updatedAt = nowIso();
  live.session.lastActivityAt = live.session.updatedAt;
  live.queue.length = 0;
  emitSession(sessionId);
  emit({ type: "sessions-changed" });
  void persistSessions();
}

async function compactSession(sessionId) {
  const live = requireSession(sessionId);
  if (live.session.status === "running") throw new Error("Stop the active turn first.");
  const messages = buildMessages(live, undefined);
  if (messages.length < 4) return { status: "noop" };
  const modelKey = await resolveModelKey(live);
  const result = await callModel(
    modelKey,
    "Summarize this conversation so it can stand in for the earlier messages. Keep concrete decisions, facts, names and open questions. Plain text, no preamble.",
    messages,
    prefs.reasoningEffort,
  );
  const summary = String(result?.text ?? "").trim();
  if (!summary) return { status: "noop" };
  live.summary = summary.slice(0, 8000);
  live.summaryUpTo = Math.max(0, live.items.length - 2);
  await persistSessions();
  return { status: "ok" };
}

// ── projects ────────────────────────────────────────────────────────────────

async function addRecentProject(project) {
  const recent = [project, ...prefs.recentProjects.filter((entry) => entry !== project)].slice(
    0,
    MAX_RECENT_PROJECTS,
  );
  prefs = { ...prefs, recentProjects: recent };
  await persistPreferences();
}

async function knownProject(value) {
  const raw = String(value ?? "").trim();
  if (!raw) throw new Error("Choose this project using Open project first.");
  const project = await fs.realpath(raw);
  const info = await fs.stat(project);
  if (!info.isDirectory()) throw new Error("That path is not a folder.");
  return project;
}

function isInside(root, target) {
  const relative = path.relative(root, target);
  return (
    relative !== "" &&
    relative !== ".." &&
    !relative.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relative)
  );
}

async function resolveProjectPath(project, target) {
  const root = await fs.realpath(project);
  const resolved = await fs.realpath(path.resolve(root, String(target ?? "")));
  if (!isInside(root, resolved) && resolved !== root) {
    throw new Error("This path is outside the selected project.");
  }
  return { root, resolved };
}

async function listProjectFiles(project, directory) {
  const root = await fs.realpath(project);
  const target = await fs.realpath(path.resolve(root, String(directory ?? ".")));
  if (target !== root && !isInside(root, target)) {
    throw new Error("This path is outside the selected project.");
  }
  const entries = await fs.readdir(target, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isSymbolicLink()) continue;
    if (["node_modules", ".git", ".DS_Store"].includes(entry.name)) continue;
    files.push({
      name: entry.name,
      path: path.relative(root, path.join(target, entry.name)).replaceAll("\\", "/"),
      directory: entry.isDirectory(),
    });
    if (files.length >= MAX_LIST_ENTRIES) break;
  }
  files.sort((a, b) => Number(b.directory) - Number(a.directory) || a.name.localeCompare(b.name));
  return files;
}

async function readProjectFile(project, target) {
  const { resolved } = await resolveProjectPath(project, target);
  const info = await fs.stat(resolved);
  if (!info.isFile()) throw new Error("Choose a file to preview.");
  if (info.size > MAX_PREVIEW_BYTES) {
    throw new Error("This file is larger than the 512 KB preview limit. Open it in your editor.");
  }
  const content = await fs.readFile(resolved);
  if (content.includes(0)) throw new Error("This is a binary file. Open it from your editor.");
  return content.toString("utf8");
}

// ── git (read-only, same commands muse-desktop uses) ────────────────────────

function gitEnvironment() {
  const extra =
    process.platform === "win32"
      ? [
          process.env.ProgramFiles ? path.join(process.env.ProgramFiles, "Git", "cmd") : "",
          process.env.ProgramFiles ? path.join(process.env.ProgramFiles, "Git", "bin") : "",
        ]
      : ["/opt/homebrew/bin", "/usr/local/bin", "/usr/bin", "/bin"];
  const pathValue = [...new Set([...(process.env.PATH || "").split(path.delimiter), ...extra])]
    .filter(Boolean)
    .join(path.delimiter);
  return {
    ...process.env,
    PATH: pathValue,
    ...(process.platform === "win32" ? { Path: pathValue } : {}),
    GIT_OPTIONAL_LOCKS: "0",
    GIT_TERMINAL_PROMPT: "0",
  };
}

function git(project, args) {
  return execute(
    process.platform === "win32" ? "git.exe" : "git",
    ["--no-pager", "-c", "core.quotepath=false", ...args],
    { cwd: project, timeout: 10000, maxBuffer: 4 * 1024 * 1024, env: gitEnvironment() },
  );
}

function parseGitStatus(output) {
  const records = String(output).split("\0");
  const changes = [];
  for (let index = 0; index < records.length; index += 1) {
    const record = records[index];
    if (!record || record.length < 4) continue;
    const status = record.slice(0, 2);
    changes.push({
      path: record.slice(3),
      status: status.trim(),
      staged: status[0] !== " " && status !== "??",
    });
    if (/[RC]/.test(status)) index += 1;
  }
  return changes;
}

async function getGitStatus(project) {
  try {
    const { stdout } = await git(project, [
      "status",
      "--porcelain=v1",
      "-z",
      "--untracked-files=normal",
    ]);
    const { stdout: branch } = await git(project, ["branch", "--show-current"]);
    return {
      isRepository: true,
      branch: branch.trim() || "Detached HEAD",
      changes: parseGitStatus(stdout),
    };
  } catch (error) {
    const stderr = String(error?.stderr ?? "");
    if (/not a git repository/i.test(stderr)) {
      return { isRepository: false, branch: "", changes: [] };
    }
    throw error;
  }
}

async function getGitDiff(project, target) {
  const status = await getGitStatus(project);
  const change = status.changes.find((entry) => entry.path === target);
  if (!change) throw new Error("This file no longer has changes. Refresh the changes panel.");
  if (change.status === "??") {
    const { resolved } = await resolveProjectPath(project, target);
    const info = await fs.stat(resolved);
    if (!info.isFile()) return "This untracked entry is a folder. Open it in your editor.";
    if (info.size > MAX_PREVIEW_BYTES) return "This file is larger than the 512 KB preview limit.";
    const content = await fs.readFile(resolved, "utf8");
    if (content.includes("\0")) return "Binary file - preview unavailable.";
    return `--- /dev/null\n+++ b/${target}\n${content
      .split("\n")
      .map((line) => `+${line}`)
      .join("\n")}`;
  }
  const [working, staged] = await Promise.all([
    git(project, ["diff", "--no-ext-diff", "--no-textconv", "--", target]),
    git(project, ["diff", "--cached", "--no-ext-diff", "--no-textconv", "--", target]),
  ]);
  return (
    [
      staged.stdout && `Staged changes\n${staged.stdout}`,
      working.stdout && `Working changes\n${working.stdout}`,
    ]
      .filter(Boolean)
      .join("\n") || "No text diff. The file may be binary or its mode changed."
  );
}

// ── shell helpers ───────────────────────────────────────────────────────────

async function openProjectTerminal(project) {
  if (process.platform === "win32") {
    await execute("cmd.exe", ["/c", "start", "", "/d", project, "cmd.exe"], { timeout: 10000 });
    return;
  }
  if (process.platform === "darwin") {
    const quoted = `'${project.replaceAll("'", "'\\''")}'`;
    await execute(
      "/usr/bin/osascript",
      ["-e", "on run argv", "-e", 'tell application "Terminal"', "-e", "activate", "-e", "do script (item 1 of argv)", "-e", "end tell", "-e", "end run", `cd ${quoted}`],
      { timeout: 10000 },
    );
    return;
  }
  for (const terminal of ["x-terminal-emulator", "gnome-terminal", "konsole", "xterm"]) {
    try {
      const child = spawn(terminal, [], { cwd: project, detached: true, stdio: "ignore" });
      child.unref();
      return;
    } catch {
      /* try the next terminal */
    }
  }
  throw new Error("Could not find a desktop terminal emulator.");
}

// ── sessions ────────────────────────────────────────────────────────────────

async function createSession(project, modelId) {
  const root = await knownProject(project);
  const { defaultKey, models } = await listModels();
  const chosen = String(modelId ?? "");
  const modelKey = models.some((model) => model.modelId === chosen) ? chosen : defaultKey;
  const sessionId = randomUUID();
  const timestamp = nowIso();
  sessions.set(sessionId, {
    session: {
      sessionId,
      workspaceRoot: root,
      createdAt: timestamp,
      updatedAt: timestamp,
      lastActivityAt: timestamp,
      status: "idle",
      activeTurnId: null,
      modelId: modelKey || null,
      turnCount: 0,
      kind: "session",
    },
    items: [],
    summary: "",
    summaryUpTo: 0,
    error: undefined,
    usage: undefined,
    queue: [],
  });
  await addRecentProject(root);
  emit({ type: "sessions-changed" });
  await persistSessions();
  return viewOf(sessionId);
}

function listSessions() {
  const list = [];
  for (const live of sessions.values()) {
    if (live.session.kind === "subagent") continue;
    list.push({ ...live.session });
  }
  list.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  return { sessions: list, nextCursor: null };
}

async function renameSession(sessionId, name) {
  const live = requireSession(sessionId);
  const clean = String(name ?? "").trim().slice(0, 200);
  if (!clean) throw new Error("Write a name for this conversation.");
  live.session.name = clean;
  live.session.updatedAt = nowIso();
  emitSession(sessionId);
  emit({ type: "sessions-changed" });
  await persistSessions();
}

async function exportSession(sessionId) {
  const live = requireSession(sessionId);
  const title =
    live.session.name || live.session.title || live.session.firstUserPrompt || "Muse conversation";
  const safe = String(title)
    .replace(/[^\p{L}\p{N} _-]/gu, "")
    .slice(0, 80)
    .trim() || "Muse conversation";
  const lines = [
    `# ${title}`,
    `Project: ${live.session.workspaceRoot || "None"}`,
    ...live.items.map((item) => {
      const who =
        item.kind === "userMessage" ? "You" : item.kind === "agentMessage" ? "Muse" : item.kind;
      const body = item.displayText || item.text || item.visibleOutput || item.failureReason || "";
      return `## ${who}\n\n${body}`;
    }),
  ];
  const target = path.join(dataDir || os.tmpdir(), `${safe}.md`);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, `${lines.join("\n\n")}\n`, { mode: 0o600 });
  try {
    await pi.fs.reveal(target);
  } catch {
    /* revealing is a convenience; the file path is returned anyway */
  }
  return target;
}

// ── channel dispatch ────────────────────────────────────────────────────────

const BLOCKED_CLI =
  "Muse Code CLI is not used in this build: conversations run on the models configured in PI-Desktop. Pick a model in PI-Desktop settings, or on this plugin's settings page.";

function noVoice() {
  throw new Error("Voice input is not available inside the PI-Desktop panel.");
}

function noAttachments() {
  throw new Error(
    "Attaching files is not available inside the PI-Desktop panel: the host exposes no file picker to plugins.",
  );
}

const handlers = {
  "update-status": () => ({ available: false, canCheck: false, automaticChecks: false }),
  "check-updates": () => ({ available: false, canCheck: false, automaticChecks: false }),
  "automatic-updates": () => ({ available: false, canCheck: false, automaticChecks: false }),

  bootstrap: async () => ({
    preferences: prefs,
    status: statusSnapshot(),
    version: "0.3.6",
    home: os.homedir(),
    platform: process.platform,
  }),

  // "Connecting" here means discovering the models PI-Desktop exposes.
  connect: async () => {
    modelCache = null;
    await refreshSettings();
    await listModels();
    const status = statusSnapshot();
    emit({ type: "connection", status });
    return status;
  },

  "choose-cli": async () => {
    throw new Error(BLOCKED_CLI);
  },

  "choose-project": async () => {
    let picked = null;
    try {
      picked = await pi.fs.requestDirectory();
    } catch (error) {
      throw new Error(`Could not open the folder picker: ${messageOf(error)}`);
    }
    if (!picked || !picked.path) return null;
    const project = await fs.realpath(picked.path);
    await addRecentProject(project);
    return project;
  },

  preferences: async (patch) => {
    const clean = {};
    for (const [key, value] of Object.entries(patch ?? {})) {
      if (PATCHABLE.has(key)) clean[key] = value;
    }
    prefs = sanitizePreferences({ ...prefs, ...clean });
    await persistPreferences();
    emit({ type: "preferences", preferences: prefs });
    return prefs;
  },

  sessions: async () => listSessions(),

  models: async () => {
    const { models } = await listModels();
    return models;
  },

  create: async (project, modelId) => createSession(project, modelId),

  open: async (sessionId) => viewOf(sessionId),

  send: async (input) => {
    const sessionId = String(input?.sessionId ?? "");
    const live = requireSession(sessionId);
    const text = String(input?.text ?? "");
    const attachments = Array.isArray(input?.attachments) ? input.attachments : [];
    if (attachments.length) noAttachments();
    if (!text.trim()) throw new Error("Write a message first.");
    if (text.length > MAX_MESSAGE_CHARS) throw new Error("This message is too long.");
    if (live.session.status === "running") {
      if (input?.mode === "steer") {
        live.queue.length = 0;
        live.queue.push(text);
        return undefined;
      }
      live.queue.push(text);
      return undefined;
    }
    startTurn(sessionId, text);
    return undefined;
  },

  cancel: async (sessionId) => {
    cancelTurn(sessionId);
    return undefined;
  },

  compact: async (sessionId) => compactSession(sessionId),

  rename: async (sessionId, name) => {
    await renameSession(sessionId, name);
    return undefined;
  },

  "set-model": async (sessionId, modelId) => {
    const live = requireSession(sessionId);
    const { models } = await listModels();
    const wanted = String(modelId ?? "");
    if (!models.some((model) => model.modelId === wanted)) {
      throw new Error("This model is no longer available in PI-Desktop.");
    }
    live.session.modelId = wanted;
    live.session.updatedAt = nowIso();
    emitSession(sessionId);
    await persistSessions();
    return undefined;
  },

  // No tool execution happens in this backend, so there is never an approval
  // or question card to answer. Refuse clearly instead of silently succeeding.
  approve: async () => {
    throw new Error("This build runs no tools, so there is no approval to send.");
  },
  answer: async () => {
    throw new Error("This build runs no tools, so there is no question to answer.");
  },
  "cancel-question": async () => undefined,

  attachments: async () => {
    noAttachments();
  },
  "remove-attachment": async () => undefined,
  microphone: noVoice,
  voice: noVoice,
  "cancel-voice": async () => undefined,

  "git-status": async (project) => getGitStatus(await knownProject(project)),
  "git-diff": async (project, target) =>
    getGitDiff(await knownProject(project), String(target ?? "")),
  files: async (project, directory) =>
    listProjectFiles(await knownProject(project), directory ?? "."),
  "read-file": async (project, target) => readProjectFile(await knownProject(project), target),

  "reveal-project": async (project) => {
    const root = await knownProject(project);
    try {
      await pi.fs.reveal(root);
    } catch (error) {
      throw new Error(`Could not reveal the folder: ${messageOf(error)}`);
    }
    return undefined;
  },

  terminal: async (project) => {
    await openProjectTerminal(await knownProject(project));
    return undefined;
  },

  "cli-terminal": async (project) => {
    await openProjectTerminal(await knownProject(project));
    return undefined;
  },

  export: async (sessionId) => exportSession(sessionId),

  output: async (sessionId, itemId) => {
    const live = requireSession(sessionId);
    const item = live.items.find((entry) => entry.itemId === itemId);
    if (!item) throw new Error("There is no stored output for this item.");
    const text = item.visibleOutput || item.text || item.failureReason || "";
    if (!text) throw new Error("There is no stored output for this item.");
    return text;
  },

  external: async (url) => {
    const value = String(url ?? "");
    let parsed;
    try {
      parsed = new URL(value);
    } catch {
      throw new Error("Only web links can be opened.");
    }
    if (!["https:", "http:"].includes(parsed.protocol)) {
      throw new Error("Only web links can be opened.");
    }
    await pi.shell.openExternal(parsed.toString());
    return undefined;
  },

  // The panel is not a window: these are window chrome actions with no
  // equivalent, and the panel's own chrome already provides them.
  "window-action": async (action) => {
    const value = String(action || "");
    if (value === "close") {
      layerWanted = false;
      await pi.ui.closePanel().catch(() => undefined);
    }
    // PI-Desktop owns the native window controls; the embedded Muse controls
    // retain the original appearance and close behavior where the host allows it.
    return { ok: true, action: value };
  },
  // The launcher window asks for the in-window layer. If no renderer module is
  // polling yet (not loaded, or the permission was refused), answer
  // `docked: false` so the page renders itself in this window instead.
  launch: async () => {
    const before = lastLayerPollAt;
    layerWanted = true;
    await new Promise((resolve) => setTimeout(resolve, 1200));
    if (lastLayerPollAt > before) return { docked: true, target: "layer" };
    layerWanted = false;
    return { docked: false };
  },
  "close-self": async () => {
    await pi.ui.closePanel().catch(() => undefined);
    return { ok: true };
  },
  // Which language the view should render its text in ("auto" follows the host).
  locale: async () => {
    const setting = String(settingsCache.language ?? "auto").toLowerCase();
    if (setting === "zh" || setting === "zh-cn") return { language: "zh", setting: "zh" };
    if (setting === "en") return { language: "en", setting: "en" };
    let system = "";
    try {
      system = String(await pi.app.getLocale()).toLowerCase();
    } catch {
      system = "";
    }
    return { language: system.startsWith("zh") ? "zh" : "en", setting: "auto" };
  },
  "set-language": async (value) => {
    const next = ["auto", "zh", "en"].includes(String(value)) ? String(value) : "auto";
    settingsCache.language = next;
    try {
      await pi.plugin.setSettings({ language: next });
    } catch (error) {
      throw new Error(`Could not save the language: ${messageOf(error)}`);
    }
    return { language: next };
  },
  // The view reports its own failures here, so a blank panel leaves evidence in
  // the plugin log instead of only in a devtools console nobody can see.
  __diag: async (channel, text) => {
    console.log(`[muse][panel] ${String(channel)} :: ${String(text).slice(0, 1500)}`);
    return { ok: true };
  },
  pollEvents: async (payload) => {
    const after = Number(payload?.after ?? 0);
    const events = eventRing.filter((entry) => entry.seq > after);
    return { events, seq: eventSeq };
  },
};

// ── lifecycle ───────────────────────────────────────────────────────────────

/** Command entry: reveal the docked view, falling back to the floating panel. */
async function openMuseView() {
  try {
    // The docked work-panel view is the host's well-trodden path; the floating
    // panel is a fallback for hosts without view reveal.
    await pi.ui.revealView({ viewId: "muse-desktop" });
  } catch (error) {
    await pi.ui.openPanel({ title: "Muse Desktop" }).catch(() => {
      throw new Error(`Could not open Muse Desktop: ${messageOf(error)}`);
    });
  }
}

async function onLoad() {
  try {
    await pi.commands.register({
      id: "muse-desktop.open",
      title: "Muse Desktop: Open",
      keywords: ["muse", "desktop", "chat", "conversation"],
      category: "Productivity",
      run: () => openMuseView(),
    });
    dataDir = await pi.plugin.getDataPath();
    prefsFile = path.join(dataDir, "preferences.json");
    sessionsFile = path.join(dataDir, "sessions.json");
    await fs.mkdir(dataDir, { recursive: true });
    await loadState();
    await refreshSettings();
    await listModels();
    console.log(
      `[muse] ready: ${sessions.size} conversation(s), models=${(modelCache?.models ?? [])
        .map((model) => model.modelId)
        .join(", ") || "none"} default=${modelCache?.defaultKey || "none"}`,
    );
    if (!modelCache?.models?.length) {
      console.log(
        `[muse] no models resolved; raw models.list() = ${JSON.stringify(await safeRawModels()).slice(0, 1500)}`,
      );
    }
    emit({ type: "connection", status: statusSnapshot() });
  } catch (error) {
    console.log(`[muse] load failed: ${messageOf(error)}`);
  }
}

async function safeRawModels() {
  try {
    return await pi.models.list();
  } catch (error) {
    return { error: messageOf(error) };
  }
}

async function onUnload() {
  await pi.commands.unregister("muse-desktop.open").catch(() => undefined);
  for (const live of sessions.values()) {
    live.queue.length = 0;
    trimItems(live);
  }
  if (loaded) await persistSessions();
}

/** Fallback used only when no renderer module polls for the layer. */
let lastLayerPollAt = 0;

/** Open the renderer layer, with a docked-view fallback. */
async function openMuseView() {
  const result = await handlers.launch();
  if (!result.docked) await pi.ui.revealView({ viewId: "muse-desktop" });
}

/**
 * The view and panel call pluginBridge.invoke("muse.<channel>", { args });
 * the value returned here reaches the shim unchanged.
 */
async function onPanelInvoke(channel, payload) {
  if (!loaded) await onLoad();
  return await invokeChannel(channel, payload);
}

/**
 * Renderer-extension calls (manifest.renderer). The layer hosts the interface
 * directly and forwards its bridge calls here, so both transports share one
 * handler table.
 */
async function onRendererCall(method, args = {}) {
  if (!loaded) await onLoad();
  const name = String(method ?? "");

  if (name === "bridge.invoke") return await invokeChannel(args?.channel, args);
  if (name === "layer.request") {
    lastLayerPollAt = Date.now();
    return { open: layerWanted };
  }
  if (name === "layer.show") {
    layerWanted = true;
    return { ok: true };
  }
  if (name === "layer.close") {
    layerWanted = false;
    return { ok: true };
  }
  throw new Error(`Unknown renderer method: ${name}`);
}

async function invokeChannel(channel, payload) {
  const name = String(channel ?? "").replace(/^muse\./, "");
  // An empty channel used to surface as a jarring "unknown channel" toast; the
  // cause is a probe or an older bundle calling without a name.
  if (!name) {
    console.log(`[muse] ignored an empty channel: ${JSON.stringify(payload ?? {}).slice(0, 200)}`);
    throw new Error("Muse bridge request is missing its channel");
  }
  const handler = handlers[name];
  if (!handler) throw new Error(`Unknown Muse channel: ${name}`);
  const callArgs = Array.isArray(payload?.args) ? payload.args : [];
  return await handler(...callArgs);
}

module.exports = { onLoad, onUnload, onPanelInvoke, onRendererCall };

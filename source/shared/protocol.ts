import { z } from 'zod'

export const itemSchema = z.object({
  itemId: z.string(),
  kind: z.string(),
  revision: z.number(),
  status: z.string(),
  turnId: z.string().nullish(),
  text: z.string().optional(),
  displayText: z.string().optional(),
  summary: z.array(z.string()).optional(),
  tool: z.string().optional(),
  args: z.string().optional(),
  visibleOutput: z.string().optional(),
  commandText: z.string().optional(),
  fallbackText: z.string().optional(),
  statusLine: z.string().optional(),
  failureReason: z.string().optional(),
  objective: z.string().optional(),
  agentPath: z.string().optional(),
  role: z.string().optional(),
  childSessionId: z.string().optional(),
  subagentId: z.string().optional(),
  reminderAgentId: z.string().optional(),
  blocking: z.boolean().optional(),
  durationMs: z.number().optional(),
  recordedAt: z.string().optional(),
  truncated: z.boolean().optional(),
  retracted: z.boolean().optional(),
  label: z.string().optional(),
  finalSummary: z.string().optional(),
  outputRef: z.object({ id: z.string(), byteLen: z.number().optional() }).passthrough().optional(),
  patchSummary: z.object({ added: z.number(), removed: z.number(), files: z.number() }).optional(),
  result: z
    .object({ text: z.string().optional(), summary: z.string().optional() })
    .passthrough()
    .optional(),
})
export type TranscriptItem = z.infer<typeof itemSchema>

export const sessionSchema = z.object({
  sessionId: z.string(),
  workspaceRoot: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastActivityAt: z.string().optional(),
  status: z.string(),
  activeTurnId: z.string().nullable(),
  modelId: z.string().nullable(),
  name: z.string().optional(),
  title: z.string().optional(),
  firstUserPrompt: z.string().optional(),
  branch: z.string().optional(),
  turnCount: z.number(),
  kind: z.string().optional(),
  approvalMode: z.object({ mode: z.string() }).passthrough().optional(),
})
export type MuseSession = z.infer<typeof sessionSchema>

export const approvalSchema = z.object({
  approvalId: z.string(),
  sessionId: z.string(),
  toolName: z.string(),
  rawArgs: z.string(),
  currentRequirementId: z.object({ approvalId: z.string(), sourceIndex: z.number() }),
  subject: z.object({
    kind: z.string(),
    command: z.string().optional(),
    path: z.string().optional(),
    host: z.string().optional(),
    target: z.string().optional(),
  }),
  availableChoices: z.array(
    z.object({
      choiceId: z.string(),
      label: z.string(),
      decision: z.string(),
      scope: z.string(),
      rulePreview: z.string().optional(),
      acceptsFeedback: z.boolean().optional(),
    }),
  ),
})
export type Approval = z.infer<typeof approvalSchema>

export const questionSchema = z.object({
  userInputId: z.string(),
  sessionId: z.string(),
  questions: z.array(
    z.object({
      id: z.string(),
      header: z.string(),
      question: z.string(),
      options: z.array(z.object({ label: z.string(), description: z.string().optional() })),
      selection: z.object({
        mode: z.enum(['single', 'multiple']),
        minSelections: z.number().optional(),
        maxSelections: z.number().optional(),
      }),
    }),
  ),
})
export type UserQuestion = z.infer<typeof questionSchema>

export const modelSchema = z.object({
  modelId: z.string(),
  displayLabel: z.string(),
  providerId: z.string(),
  isDefault: z.boolean(),
  isActive: z.boolean(),
  contextLimit: z.number().nullable(),
  defaultReasoningEffort: z.string().optional(),
  reasoningEffortVariants: z
    .array(z.object({ tier: z.string(), description: z.string().optional() }))
    .optional(),
})
export type MuseModel = z.infer<typeof modelSchema>
export const effortSchema = z.enum([
  'none',
  'minimal',
  'low',
  'medium',
  'high',
  'xhigh',
  'max',
  'ultra',
])
export type ReasoningEffort = z.infer<typeof effortSchema>

const preferenceFields = {
  theme: z.enum(['muse', 'daylight', 'moonlight', 'grove', 'plush', 'system']),
  backgroundIntensity: z.number().min(0).max(100),
  cliPath: z.string().max(4096),
  recentProjects: z.array(z.string()),
  trustedProjects: z.array(z.string()),
  archivedSessionIds: z.array(z.string()),
  pinnedSessionIds: z.array(z.string()),
  reasoningEffort: effortSchema,
  fontSize: z.enum(['compact', 'comfortable', 'large']),
  reduceMotion: z.boolean(),
  notifyOnCompletion: z.boolean(),
}

export const preferencesSchema = z.object({
  theme: preferenceFields.theme.default('muse'),
  backgroundIntensity: preferenceFields.backgroundIntensity.default(70),
  cliPath: preferenceFields.cliPath.default(''),
  recentProjects: preferenceFields.recentProjects.default([]),
  trustedProjects: preferenceFields.trustedProjects.default([]),
  archivedSessionIds: preferenceFields.archivedSessionIds.default([]),
  pinnedSessionIds: preferenceFields.pinnedSessionIds.default([]),
  reasoningEffort: preferenceFields.reasoningEffort.default('high'),
  fontSize: preferenceFields.fontSize.default('comfortable'),
  reduceMotion: preferenceFields.reduceMotion.default(false),
  notifyOnCompletion: preferenceFields.notifyOnCompletion.default(false),
})
// Updates must never apply defaults to omitted fields or grant project trust.
export const preferencesPatchSchema = z
  .object(preferenceFields)
  .omit({ trustedProjects: true, recentProjects: true })
  .partial()
  .strict()
export type Preferences = z.infer<typeof preferencesSchema>
export type Theme = Exclude<Preferences['theme'], 'system'>

export type SessionView = {
  session: MuseSession
  items: TranscriptItem[]
  approvals: Approval[]
  questions: UserQuestion[]
  usage?: { input: number; output: number; total: number }
  error?: string
  historyNotice?: string
}
export type ConnectionStatus = {
  state: 'connecting' | 'ready' | 'missing' | 'error'
  path?: string
  version?: string
  message?: string
  fingerprintWarning?: string
}
export type UpdateStatus = {
  available: boolean
  canCheck: boolean
  automaticChecks: boolean
  message?: string
}
export type GitChange = { path: string; status: string; staged: boolean }
export type GitStatus = { branch: string; changes: GitChange[]; isRepository: boolean }
export type Attachment = { id: string; name: string; kind: 'image' | 'text'; size: number }
export type ProjectFile = { name: string; path: string; directory: boolean }
export type AppEvent =
  | { type: 'connection'; status: ConnectionStatus }
  | { type: 'session'; view: SessionView }
  | { type: 'sessions-changed' }
  | { type: 'preferences'; preferences: Preferences }
  | { type: 'menu'; action: 'new' | 'open' | 'search' | 'settings' | 'sidebar' }
  | { type: 'error'; message: string }

export const answerSchema = z.object({
  questionId: z.string(),
  selectedLabel: z.string().optional(),
  selectedLabels: z.array(z.string()).optional(),
  freeText: z.string().max(500).optional(),
})
export type QuestionAnswer = z.infer<typeof answerSchema>

export interface DesktopAPI {
  updateStatus(): Promise<UpdateStatus>
  checkForUpdates(): Promise<UpdateStatus>
  setAutomaticUpdateChecks(enabled: boolean): Promise<UpdateStatus>
  bootstrap(): Promise<{
    preferences: Preferences
    status: ConnectionStatus
    version: string
    home: string
    platform: string
  }>
  connect(): Promise<ConnectionStatus>
  chooseCli(): Promise<string | null>
  chooseProject(): Promise<string | null>
  savePreferences(patch: Partial<Preferences>): Promise<Preferences>
  listSessions(cursor?: string): Promise<{ sessions: MuseSession[]; nextCursor: string | null }>
  createSession(project: string, modelId?: string): Promise<SessionView>
  openSession(sessionId: string): Promise<SessionView>
  send(input: {
    sessionId: string
    text: string
    attachments: string[]
    effort: ReasoningEffort
    mode: 'queue' | 'steer'
  }): Promise<void>
  cancel(sessionId: string): Promise<void>
  compact(sessionId: string): Promise<{ status: string }>
  renameSession(sessionId: string, name: string): Promise<void>
  models(sessionId?: string): Promise<MuseModel[]>
  setModel(sessionId: string, modelId: string): Promise<void>
  approve(sessionId: string, approvalId: string, choiceId: string): Promise<void>
  answer(sessionId: string, userInputId: string, answers: QuestionAnswer[]): Promise<void>
  cancelQuestion(sessionId: string, userInputId: string): Promise<void>
  chooseAttachments(): Promise<Attachment[]>
  removeAttachment(id: string): Promise<void>
  requestMicrophone(): Promise<void>
  transcribeVoice(audio: Uint8Array): Promise<string>
  cancelVoice(): Promise<void>
  gitStatus(project: string): Promise<GitStatus>
  gitDiff(project: string, path: string): Promise<string>
  listFiles(project: string, directory: string): Promise<ProjectFile[]>
  readFile(project: string, path: string): Promise<string>
  revealProject(project: string): Promise<void>
  openTerminal(project: string, login?: boolean): Promise<void>
  openCli(project: string): Promise<void>
  exportSession(sessionId: string): Promise<string | null>
  readOutput(sessionId: string, itemId: string): Promise<string>
  openExternal(url: string): Promise<void>
  windowAction(action: 'minimize' | 'maximize' | 'close'): Promise<void>
  onEvent(callback: (event: AppEvent) => void): () => void
}

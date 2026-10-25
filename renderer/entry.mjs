/**
 * Muse Desktop — renderer extension.
 *
 * Why this shape:
 *  - The host caps iframes (`frame-src pi-genui:`), so an <iframe> stays blank.
 *    The interface is mounted directly into a layer the host gives us with
 *    `pi.ui.openLayer()`, which covers the window inside the same process.
 *  - Muse's stylesheet is scoped into a shadow root, so its `.sidebar`, `body`
 *    and custom properties cannot leak into PI-Desktop's own document.
 *  - The host has no "register a rail icon" API, so the launcher button under
 *    the sidebar is drawn here and anchored above `[data-nav="plugins"]`, the
 *    same way the bundled PI Bot plugin does it.
 *  - The interface talks to this module through `window.muse`; that bridge is
 *    installed here and forwards to the plugin main process via
 *    `pi.dispatch('plugin.call', …)` → `onRendererCall`.
 */

import { mount, styles } from '../views/muse/app/muse-app.mjs'
import { assets } from './assets.mjs'
import { startI18n } from '../views/muse/i18n.mjs'

const CLOSE_SVG =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'

// The bundle rewrites asset URLs to root-relative paths (/themes/…, ./icon.png),
// which resolve against the host page and 404. Resolve them against the plugin
// directory instead.
const ASSET_BASE = new URL('../views/muse/', import.meta.url).href
const assetUrl = (file) => assets[file] || new URL(file, ASSET_BASE).href
const ICON_URL = assetUrl('launcher.png')

let layer
let surfaceLayer
let host
let shadow
let container
let closeButton
let entry
let entryOwner
let unmount
let stopI18n
let poll
let alive = false
let visible = false

function scopeStyles(text) {
  return String(text || '')
    .replace(
      /url\(\s*['"]?\/([^)'"]+)['"]?\s*\)/g,
      (_match, file) => `url("${assetUrl(file)}")`,
    )
    .replace(/:root/g, ':host')
    .replace(/(^|})\s*html\s*,\s*body\s*\{/g, '$1 :host {')
    .replace(/(^|})\s*body\s*\{/g, '$1 :host {')
}

/** Rewrites <img src> in the layer to absolute plugin URLs. */
function rewriteImages(root) {
  if (!root) return
  for (const img of root.querySelectorAll('img[src]')) {
    const src = img.getAttribute('src') || ''
    if (!src || src.startsWith('data:') || src.startsWith('http') || src.startsWith('file:')) continue
    const file = src.replace(/^\.?\//, '')
    const resolved = assetUrl(file)
    if (src !== resolved) img.setAttribute('src', resolved)
  }
}

/** window.muse, backed by the plugin main process. Mirrors DesktopAPI. */
function installMuseBridge(pi, onWindowAction) {
  const listeners = new Set()
  let lastSeq = 0

  const call = (channel, args) =>
    pi.dispatch('plugin.call', {
      method: 'bridge.invoke',
      args: { channel: 'muse.' + channel, args: args ?? [] },
    })

  const eventTimer = setInterval(() => {
    if (!listeners.size) return
    void (async () => {
      try {
        const result = await call('pollEvents', [{ after: lastSeq }])
        for (const item of result?.events ?? []) {
          if (item.seq <= lastSeq) continue
          lastSeq = item.seq
          for (const listener of [...listeners]) {
            try {
              listener(item.event)
            } catch {
              /* a broken listener must not starve the others */
            }
          }
        }
      } catch {
        /* host busy */
      }
    })()
  }, 300)

  const muse = {
    updateStatus: () => call('update-status'),
    checkForUpdates: () => call('check-updates'),
    setAutomaticUpdateChecks: (enabled) => call('automatic-updates', [enabled]),
    bootstrap: () => call('bootstrap'),
    connect: () => call('connect'),
    chooseCli: () => call('choose-cli'),
    chooseProject: () => call('choose-project'),
    savePreferences: (patch) => call('preferences', [patch]),
    listSessions: (cursor) => call('sessions', [cursor]),
    createSession: (project, modelId) => call('create', [project, modelId]),
    openSession: (sessionId) => call('open', [sessionId]),
    send: (input) => call('send', [input]),
    cancel: (sessionId) => call('cancel', [sessionId]),
    compact: (sessionId) => call('compact', [sessionId]),
    renameSession: (sessionId, name) => call('rename', [sessionId, name]),
    models: (sessionId) => call('models', [sessionId]),
    setModel: (sessionId, modelId) => call('set-model', [sessionId, modelId]),
    approve: (sessionId, approvalId, choiceId) => call('approve', [sessionId, approvalId, choiceId]),
    answer: (sessionId, userInputId, answers) => call('answer', [sessionId, userInputId, answers]),
    cancelQuestion: (sessionId, userInputId) => call('cancel-question', [sessionId, userInputId]),
    chooseAttachments: () => call('attachments'),
    removeAttachment: (id) => call('remove-attachment', [id]),
    requestMicrophone: () => call('microphone'),
    transcribeVoice: (audio) => call('voice', [audio]),
    cancelVoice: () => call('cancel-voice'),
    gitStatus: (project) => call('git-status', [project]),
    gitDiff: (project, path) => call('git-diff', [project, path]),
    listFiles: (project, directory) => call('files', [project, directory]),
    readFile: (project, path) => call('read-file', [project, path]),
    revealProject: (project) => call('reveal-project', [project]),
    openTerminal: (project, login) => call('terminal', [project, login]),
    openCli: (project) => call('cli-terminal', [project]),
    exportSession: (sessionId) => call('export', [sessionId]),
    readOutput: (sessionId, itemId) => call('output', [sessionId, itemId]),
    openExternal: (url) => call('external', [url]),
    windowAction: (action) => onWindowAction(action),
    onEvent: (callback) => {
      if (typeof callback !== 'function') return () => {}
      listeners.add(callback)
      return () => listeners.delete(callback)
    },
  }

  Object.defineProperty(window, 'muse', { value: muse, configurable: true, writable: false })
  call.dispose = () => { clearInterval(eventTimer); listeners.clear(); delete window.muse }
  return call
}

export async function onLoad(pi) {
  alive = true
  layer = pi.ui.openLayer()

  host = document.createElement('div')
  host.setAttribute('data-muse-layer', '1')
  host.style.cssText =
    'position:fixed;inset:0;width:100%;height:100dvh;display:none;z-index:2147482000;background:#0b2450'
  layer.element.append(host)

  shadow = host.attachShadow({ mode: 'open' })

  const styleTag = document.createElement('style')
  styleTag.textContent =
    scopeStyles(styles) +
    '\n:host{display:block;height:100%;width:100%;font-family:-apple-system,"Segoe UI",system-ui,sans-serif}' +
    '\n.muse-root{height:100%;width:100%;overflow:hidden;color:var(--text);background:var(--app-background);font-family:var(--font-family-ui)}' +
    '\n.window-traffic-lights{pointer-events:auto!important;z-index:30!important}.traffic-light{cursor:pointer!important;pointer-events:auto!important}.traffic-light::after{font:700 11px/12px Arial!important;color:#17212b!important;opacity:0!important}.window-traffic-lights:hover .traffic-light::after,.traffic-light:focus-visible::after{opacity:1!important}.traffic-light.close::after{content:"×"!important}.traffic-light.minimize::after{content:"−"!important}.traffic-light.maximize::after{content:"□"!important}' +
    '\n.muse-return{position:fixed;left:92px;top:14px;z-index:2147483000;pointer-events:auto;-webkit-app-region:no-drag;border:0;border-radius:6px;width:26px;height:26px;padding:0;background:transparent;color:#8596ae;display:grid;place-items:center;font:20px/26px "Segoe UI",sans-serif;cursor:pointer}.muse-return:hover{background:#8198b62e}.muse-root textarea,.muse-root input,.muse-root [contenteditable=true]{caret-color:var(--text,#30332f)!important}.muse-root[data-theme=daylight] textarea,.muse-root[data-theme=grove] textarea{caret-color:#26362b!important;color-scheme:light}.muse-window-controls{position:fixed;top:14px;left:12px;display:flex;gap:2px;z-index:2147483000;pointer-events:auto;-webkit-app-region:no-drag}.muse-window-button{display:grid;place-items:center;width:24px;height:26px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;-webkit-app-region:no-drag}.muse-window-dot{display:grid;place-items:center;width:12px;height:12px;border-radius:50%;color:#222;font:700 11px/12px Arial}.muse-window-dot span{opacity:0}.muse-window-controls:hover span,.muse-window-button:focus-visible span{opacity:1}.muse-window-button:nth-child(1) .muse-window-dot{background:#ff5f57}.muse-window-button:nth-child(2) .muse-window-dot{background:#febc2e}.muse-window-button:nth-child(3) .muse-window-dot{background:#28c840}.window-traffic-lights{display:none!important}'
  shadow.append(styleTag)

  container = document.createElement('div')
  container.className = 'muse-root'
  shadow.append(container)

  closeButton = document.createElement('button')
  closeButton.type = 'button'
  closeButton.className = 'muse-return'
  closeButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5 3 11l6 6M3 11h12a5 5 0 0 1 0 10"/></svg>'
  closeButton.setAttribute('aria-label', '返回 PI-Desktop')
  closeButton.title = '退出 Muse，返回 PI-Desktop 原生界面'
  closeButton.addEventListener('click', () => void hide(pi))
  shadow.append(closeButton)

  const handleWindowAction = async (action) => {
    if (action === 'close') return hide(pi)
    const index = action === 'minimize' ? 0 : action === 'maximize' ? 1 : -1
    const controls = document.querySelector('.app-shell > .window-controls')
    const button = controls?.querySelectorAll('button')[index]
    if (!button) throw new Error('PI-Desktop window control unavailable: ' + action)
    // Reuse the host's existing control and its handler, without native modules,
    // new permissions, direct IPC calls or changes to the host installation.
    button.click()
  }
  const windowButtons = document.createElement('div')
  windowButtons.className = 'muse-window-controls'
  windowButtons.setAttribute('role', 'group')
  windowButtons.setAttribute('aria-label', '窗口控制')
  for (const [action, label, glyph] of [['close', '关闭 Muse 页面', '×'], ['minimize', '最小化窗口', '−'], ['maximize', '放大或还原窗口', '□']]) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'muse-window-button'
    button.title = label
    button.setAttribute('aria-label', label)
    const dot = document.createElement('i')
    dot.className = 'muse-window-dot'
    const symbol = document.createElement('span')
    if (action === 'maximize') {
      symbol.innerHTML = '<svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="1.5" y="1.5" width="7" height="7" rx=".4"/></svg>'
      symbol.style.cssText = 'display:grid;place-items:center;width:12px;height:12px;line-height:0'
    } else symbol.textContent = glyph
    dot.append(symbol)
    button.append(dot)
    button.addEventListener('click', () => void handleWindowAction(action).catch(console.error))
    windowButtons.append(button)
  }
  shadow.append(windowButtons)
  const call = installMuseBridge(pi, handleWindowAction)

  try {
    unmount = mount(container)
  } catch (error) {
    container.style.cssText =
      'padding:24px;font:13px/1.6 ui-monospace,Consolas,monospace;color:#dbe6f7;white-space:pre-wrap'
    container.textContent = `Muse Desktop 渲染失败：\n\n${String((error && error.stack) || error)}`
  }

  // Images are inserted by React after mount and on every re-render.
  rewriteImages(shadow)
  const imageWatcher = new MutationObserver(() => rewriteImages(shadow))
  imageWatcher.observe(shadow, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] })

  async function applyLanguage() {
    let language = 'en'
    let setting = 'auto'
    try {
      const answer = await call('locale')
      if (answer) {
        if (answer.language === 'zh') language = 'zh'
        if (typeof answer.setting === 'string') setting = answer.setting
      }
    } catch {
      /* keep English */
    }
    try {
      stopI18n?.()
    } catch {
      /* ignore */
    }
    stopI18n = startI18n({
      language,
      setting,
      onSetLanguage: (value) => void changeLanguage(value),
      root: shadow,
    })
  }

  async function changeLanguage(value) {
    try {
      await call('set-language', [value])
    } catch (error) {
      console.warn('[muse] could not save the language:', error)
    }
    // Rebuild the tree so English comes back when switching away from Chinese.
    try {
      unmount?.()
    } catch {
      /* ignore */
    }
    container.textContent = ''
    try {
      unmount = mount(container)
    } catch (error) {
      container.textContent = String(error)
    }
    rewriteImages(shadow)
    await applyLanguage()
  }

  await applyLanguage()

  // ── the rail launcher (uses the artwork shipped with the plugin) ─────────
  entry = document.createElement('button')
  entry.type = 'button'
  entry.className = 'muse-entry pi-sidebar-entry'
  entry.title = 'Muse Desktop'
  entry.setAttribute('aria-label', 'Muse Desktop')
  const entryImage = document.createElement('img')
  entryImage.src = ICON_URL
  entryImage.alt = ''
  entry.append(entryImage)
  layer.element.append(entry)

  pi.ui.injectStyle(
    '.muse-entry{position:fixed;box-sizing:border-box;width:32px;height:32px;display:flex;align-items:center;justify-content:center;padding:0;border:0;border-radius:8px;background:transparent;cursor:pointer;pointer-events:auto;-webkit-app-region:no-drag;opacity:.92;z-index:2147481000;overflow:hidden}' +
      '.muse-entry:hover{background:rgba(127,127,127,.16);opacity:1}' +
      '.muse-entry img{width:18px;height:18px;object-fit:contain;border-radius:5px;display:block}',
  )
  entry.addEventListener('click', () => void show(pi))

  entryOwner = document.createElement('span')
  entryOwner.hidden = true
  entryOwner.setAttribute('data-muse-entry-owner', 'local.muse-desktop')

  function place() {
    const anchor = document.querySelector('[data-nav="plugins"]')
    const footer = document.querySelector('.sidebar-body > .sidebar-footer') || anchor?.closest('.sidebar-footer')
    const box = footer?.getBoundingClientRect()
    if (!box || box.width < 32) {
      entry.style.display = 'none'
      return
    }
    // Share the host-column centers rather than assuming Muse is slot two.
    const nativeButtons = [...footer.querySelectorAll('button')].map(node => node.getBoundingClientRect()).filter(rect => rect.width > 0 && rect.height > 0)
    const first = nativeButtons[0]
    const second = nativeButtons[1]
    const left = first ? first.left + first.width / 2 - 16 : box.left
    const step = second && first ? Math.max(32, second.left + second.width / 2 - first.left - first.width / 2) : 32
    const top = box.top - 36
    const peers = [...document.querySelectorAll('.pi-sidebar-entry')].filter(node => node !== entry).flatMap(node => {
      const rect = node.getBoundingClientRect()
      const style = getComputedStyle(node)
      return rect.width > 0 && style.display !== 'none' && style.visibility !== 'hidden' && rect.bottom > top && rect.top < top + 32 ? [rect] : []
    })
    let slot = left
    while (slot + 32 <= box.right + 1 && peers.some(rect => rect.right > slot + 1 && rect.left < slot + 31)) slot += step
    entry.style.display = visible || slot + 32 > box.right + 1 ? 'none' : 'flex'
    entry.style.left = `${Math.round(slot)}px`
    entry.style.top = `${Math.round(top)}px`
    // Reserve the row even on installations without PI Bot.
    let spacer = footer.previousElementSibling
    if (!spacer?.hasAttribute('data-pi-sidebar-entry-space')) {
      spacer = document.createElement('div')
      spacer.setAttribute('data-pi-sidebar-entry-space', '')
      spacer.style.cssText = 'height:40px;min-height:40px;flex:0 0 40px;margin-top:auto;pointer-events:none'
      footer.before(spacer)
    }
    if (entryOwner.parentElement !== spacer) spacer.append(entryOwner)
  }
  place()
  const reposition = () => place()
  window.addEventListener('resize', reposition)
  const observer = new MutationObserver(reposition)
  observer.observe(document.body, { childList: true, subtree: true })
  const tick = setInterval(reposition, 1500)

  // ── show/hide, driven by the main process ────────────────────────────────
  poll = setInterval(async () => {
    if (!alive) return
    try {
      const answer = await pi.dispatch('plugin.call', { method: 'layer.request' })
      const wanted = Boolean(answer && answer.open)
      if (wanted !== visible) setVisible(wanted)
    } catch {
      /* host busy or shutting down */
    }
  }, 700)

  async function show(api) {
    setVisible(true)
    try {
      await api.dispatch('plugin.call', { method: 'layer.show' })
    } catch (error) {
      console.warn('[muse] could not record the open request:', error)
    }
  }

  async function hide(api) {
    setVisible(false)
    try {
      await api.dispatch('plugin.call', { method: 'layer.close' })
    } catch (error) {
      console.warn('[muse] could not record the close request:', error)
    }
  }

  function setVisible(value) {
    visible = value
    if (value && !surfaceLayer) {
      // A fresh host-managed layer sits above other plugins while still below
      // the host's safety prompts. A large child z-index cannot do this.
      surfaceLayer = pi.ui.openLayer()
      surfaceLayer.element.append(host)
    } else if (!value && surfaceLayer) {
      layer.element.append(host)
      surfaceLayer.close()
      surfaceLayer = undefined
    }
    place()
    host.style.display = value ? 'block' : 'none'
    host.style.pointerEvents = value ? 'auto' : 'none'
    host.style.setProperty('-webkit-app-region', 'no-drag')
    if (value) {
      rewriteImages(shadow)
      closeButton?.focus({ preventScroll: true })
    }
  }

  onLoad.cleanup = () => {
    call.dispose()
    clearInterval(tick)
    observer.disconnect()
    imageWatcher.disconnect()
    window.removeEventListener('resize', reposition)
  }
}

export function onUnload() {
  alive = false
  try {
    onLoad.cleanup?.()
  } catch {
    /* ignore */
  }
  clearInterval(poll)
  try {
    stopI18n?.()
  } catch {
    /* ignore */
  }
  try {
    unmount?.()
  } catch {
    /* ignore */
  }
  const reservedRow = entryOwner?.parentElement
  for (const node of [closeButton, entry, entryOwner, host]) {
    try {
      node?.remove()
    } catch {
      /* ignore */
    }
  }
  if (reservedRow?.hasAttribute('data-pi-sidebar-entry-space') && !reservedRow.childElementCount) reservedRow.remove()
  try {
    surfaceLayer?.close()
    layer?.close()
  } catch {
    /* ignore */
  }
  surfaceLayer = undefined
  layer = host = shadow = container = closeButton = entry = entryOwner = undefined
  unmount = stopI18n = poll = undefined
  visible = false
}

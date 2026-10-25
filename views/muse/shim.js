/**
 * Muse Desktop embedded bridge — PI-Desktop plugin shim.
 *
 * The muse-desktop renderer is a pure web app that talks to a `window.muse`
 * bridge (in the original app this is injected by Electron's preload script).
 * Inside the PI-Desktop plugin view there is no Electron preload, so this shim
 * provides the exact same `window.muse` API surface and forwards every call
 * over the host's pluginBridge to the plugin main process, which implements
 * the backend on top of PI-Desktop's own model runtime.
 *
 * Events (AppEvent) cannot be pushed from a plugin main process to its view,
 * so the shim drains a sequenced event ring via `muse.pollEvents` on a short
 * interval and dispatches to registered listeners — semantically identical to
 * the original push channel.
 */
(function () {
  'use strict'

  const POLL_MS = 280

  // The renderer must be able to draw even when the bridge is not ready yet, so
  // the channels it needs on first paint return a safe shape instead of
  // rejecting. Every failure is reported to the plugin log either way.
  const DEFAULT_PREFERENCES = {
    theme: 'muse',
    backgroundIntensity: 70,
    cliPath: '',
    recentProjects: [],
    trustedProjects: [],
    archivedSessionIds: [],
    pinnedSessionIds: [],
    reasoningEffort: 'high',
    fontSize: 'comfortable',
    reduceMotion: false,
    notifyOnCompletion: false,
  }

  const FALLBACKS = {
    bootstrap: {
      preferences: DEFAULT_PREFERENCES,
      status: { state: 'ready', path: 'PI-Desktop models', version: 'PI-Desktop' },
      version: '0.2.0',
      home: '',
      platform: 'win32',
    },
    sessions: { sessions: [], nextCursor: null },
    models: [],
    pollEvents: { events: [], seq: 0 },
    'git-status': { isRepository: false, branch: '', changes: [] },
    'update-status': { available: false, canCheck: false, automaticChecks: false },
    'check-updates': { available: false, canCheck: false, automaticChecks: false },
  }

  function report(channel, error) {
    const text = String((error && (error.stack || error.message)) || error)
    try {
      window.console.error('[muse] ' + channel + ' failed: ' + text)
    } catch {
      /* console may be unavailable */
    }
    try {
      // Fire-and-forget; a broken bridge must not throw from here.
      window.pluginBridge
        ?.invoke('muse.__diag', { args: [channel, text.slice(0, 1500)] })
        ?.catch?.(() => {})
    } catch {
      /* nothing else to do */
    }
  }

  // The renderer-extension layer hosts this page in an iframe, where no
  // preload exists. In that case calls travel over postMessage to the layer,
  // which forwards them to the plugin main process via plugin.call.
  const FRAME_RPC = (() => {
    const embedded = window.parent && window.parent !== window
    const pending = new Map()
    let nextId = 1
    if (embedded) {
      window.addEventListener('message', (event) => {
        const data = event.data
        if (!data || data.__muse !== 1 || data.kind !== 'result') return
        const entry = pending.get(data.id)
        if (!entry) return
        pending.delete(data.id)
        if (data.ok) entry.resolve(data.value)
        else entry.reject(new Error(data.error || 'Muse bridge call failed.'))
      })
    }
    return {
      embedded,
      hasPreload: () => Boolean(window.pluginBridge && typeof window.pluginBridge.invoke === 'function'),
      invoke(channel, payload) {
        if (window.pluginBridge && typeof window.pluginBridge.invoke === 'function') {
          return window.pluginBridge.invoke(channel, payload)
        }
        if (!embedded) return Promise.reject(new Error('plugin bridge unavailable in this view'))
        const id = nextId
        nextId += 1
        return new Promise((resolve, reject) => {
          pending.set(id, { resolve, reject })
          window.parent.postMessage(
            { __muse: 1, kind: 'invoke', id, channel, args: payload?.args ?? [] },
            '*',
          )
          setTimeout(() => {
            if (pending.delete(id)) reject(new Error('Muse bridge timed out.'))
          }, 60000)
        })
      },
    }
  })()

  async function call(channel, args) {
    // Exactly one transport is live: the preload bridge inside a host panel or
    // view, or postMessage when the renderer layer hosts this page in an iframe.
    try {
      return await FRAME_RPC.invoke('muse.' + channel, { args: args ?? [] })
    } catch (error) {
      report(channel, error)
      if (Object.prototype.hasOwnProperty.call(FALLBACKS, channel)) return FALLBACKS[channel]
      throw error
    }
  }

  // ── event fan-out (poll-based) ────────────────────────────────────────────
  const listeners = new Set()
  let lastSeq = 0
  let pollTimer = null
  let pollBusy = false

  async function drain() {
    if (pollBusy) return
    pollBusy = true
    try {
      const result = await call('pollEvents', [{ after: lastSeq }])
      const events = (result && result.events) || []
      for (const entry of events) {
        if (entry.seq <= lastSeq) continue
        lastSeq = entry.seq
        for (const listener of [...listeners]) {
          try {
            listener(entry.event)
          } catch {
            /* a broken listener must not starve the others */
          }
        }
      }
    } catch {
      /* main process busy or panel reloading — try again next tick */
    } finally {
      pollBusy = false
    }
  }

  function ensurePolling() {
    if (pollTimer) return
    pollTimer = setInterval(() => {
      if (listeners.size > 0) void drain()
    }, POLL_MS)
  }

  // ── the bridge ────────────────────────────────────────────────────────────
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
    windowAction: (action) => call('window-action', [action]),
    onEvent: (callback) => {
      if (typeof callback === 'function') {
        listeners.add(callback)
        ensurePolling()
        void drain()
      }
      return () => {
        listeners.delete(callback)
      }
    },
  }

  Object.defineProperty(window, 'muse', { value: muse, configurable: false, writable: false })
  window.addEventListener('error', (event) => {
    if (event && event.message && /pluginBridge/i.test(event.message)) event.preventDefault()
  })

  // ── interface language ────────────────────────────────────────────────────
  // muse-desktop ships English strings only. Rather than patching its bundle
  // (which must stay byte-identical to upstream), the few hundred visible
  // labels are mapped at runtime. Exact matches only: brand names such as
  // "Muse", theme names and key hints are never touched.
  const ZH = {
    Unofficial: '非官方',
    'Search conversations': '搜索对话',
    Chat: '对话',
    Projects: '项目',
    Files: '文件',
    Docs: '文档',
    Settings: '设置',
    'New conversation': '新对话',
    PROJECTS: '项目',
    'All projects': '全部项目',
    'Current project': '当前项目',
    'Open another project…': '打开其他项目…',
    CONVERSATIONS: '对话记录',
    'No conversations yet': '还没有对话',
    'Start a conversation in this project.': '在这个项目里开始一次对话。',
    'Good to see you!': '很高兴见到你！',
    'Daylight theme': 'Daylight 主题',
    'Moonlight theme': 'Moonlight 主题',
    'Grove theme': 'Grove 主题',
    'Plush theme': 'Plush 主题',
    'Connected to Muse Code': '已连接 PI-Desktop 模型',
    'MUSE CODE, ON WINDOWS': 'PI-DESKTOP · 内嵌版',
    'Good things start': '好事，从一点',
    'with a little': '小小的',
    'Muse.': 'Muse 开始。',
    'Build, explore, and improve your project with Muse.': '用 Muse 构建、探索并改进你的项目。',
    'Choose a project': '选择项目',
    'SUGGESTED PROMPTS': '建议的提问',
    'Plan a feature': '规划一个功能',
    'Turn an idea into an approach': '把想法变成方案',
    'Explore the project': '探索项目',
    'Understand the code and architecture': '理解代码与架构',
    'Review the code': '审查代码',
    'Find bugs and improvements': '找出缺陷与改进点',
    'Muse is working': 'Muse 正在工作',
    'Send a follow-up to queue or steer.': '发送后续消息以排队或调整方向。',
    'CLI default': '默认模型',
    Model: '模型',
    High: '高',
    'Reasoning effort': '推理强度',
    None: '无',
    Minimal: '极低',
    Low: '低',
    Medium: '中',
    'Extra high': '极高',
    Max: '最高',
    Ultra: '超强',
    'Select a project when you send your first message.': '发送第一条消息时请选择项目。',
    Send: '发送',
    'New line': '换行',
    'Project inspector': '项目检查器',
    'No project selected': '未选择项目',
    'Local project': '本地项目',
    Changes: '变更',
    Activity: '活动',
    'Open a project': '打开项目',
    'Open a project and its changes will appear here.': '打开一个项目，它的变更会显示在这里。',
    Explorer: '资源管理器',
    Terminal: '终端',
    Appearance: '外观',
    'Hide sidebar': '隐藏侧栏',
    'Muse home': 'Muse 主页',
    'Main navigation': '主导航',
    'Show archived conversations': '显示已归档对话',
    'Search conversations and commands': '搜索对话和命令',
    'Toggle project inspector': '切换项目检查器',
    'Ask Muse anything…': '问 Muse 任何问题…',
    'Message Muse': '给 Muse 发消息',
    'Attach images or text files': '添加图片或文本文件',
    'Voice input (⌥V)': '语音输入 (⌥V)',
    'Send message': '发送消息',
    'Close inspector': '关闭检查器',
    'Inspector view': '检查器视图',
    'Refresh changes': '刷新变更',
    'Window controls': '窗口控制',
    Close: '关闭',
    Minimize: '最小化',
    Maximize: '最大化',
    'Close window': '关闭窗口',
    'Minimize window': '最小化窗口',
    'Maximize window': '最大化窗口',
    'Loading…': '加载中…',
    Copy: '复制',
    Copied: '已复制',
    Thinking: '思考中',
    'Reasoning summary': '思考摘要',
    Composing: '正在生成',
    'Run a follow-up to continue.': '继续发送消息以推进。',
    'Loading Muse…': '正在加载 Muse…',
    Appearance: '外观',
    About: '关于',
    'Choose a theme and adjust your workspace.': '选择主题并调整你的工作区。',
    'Electric blue': '电光蓝',
    'Warm and light': '温暖明亮',
    'Soft and dark': '柔和暗色',
    'Natural green': '自然绿意',
    'A playful close-up': '俏皮特写',
    'Follow system appearance': '跟随系统外观',
    'Use Daylight in light mode and Moonlight in dark mode.': '浅色模式用 Daylight，深色模式用 Moonlight。',
    'Background intensity': '背景强度',
    'Adjust the visibility of the logo and illustrations.': '调整标志与插画的显示强度。',
    'Text size': '文字大小',
    'Adjust the size of conversation text.': '调整对话文字大小。',
    'Reduce motion': '减少动效',
    'Reduce transitions and animations.': '减少过渡与动画。',
    'Completion notifications': '完成通知',
    'Show a notification when a turn finishes in the background.': '后台完成一轮对话时发送通知。',
    'Muse Code connection': '模型连接',
    'Muse Desktop runs your installed CLI and uses its existing sign-in, models, and saved conversations.':
      'Muse Desktop 使用你在 PI-Desktop 中配置的模型。',
    'Muse Code is connected': '已连接 PI-Desktop',
    'Custom executable path': '自定义可执行文件路径',
    Browse: '浏览',
    'Leave empty to find Muse through your login shell and standard installation locations.':
      '留空则由 PI-Desktop 自动选择模型。',
    'Save & reconnect': '保存并重新连接',
    'New to Muse Code?': '需要安装 Muse Code？',
    'Install Muse Code using the official instructions, then run muse login in Terminal. Your credentials stay with the CLI.':
      '本内嵌版无需安装 Muse Code CLI。',
    'Open installation guide': '打开安装指南',
    'An unofficial, open-source companion for Muse Code by Robert Courson.':
      '由 Robert Courson 开发的开源非官方桌面伴侣。',
    'Software updates': '软件更新',
    'Updates via GitHub Releases. You choose when to install.':
      '通过 GitHub Releases 更新，由你决定何时安装。',
    'Check for updates': '检查更新',
    'Built for Windows': '为 Windows 构建',
    'Your CLI, your credentials': '你的模型，你的凭据',
    'No desktop telemetry': '无桌面遥测',
    'MIT licensed source': 'MIT 许可源码',
    'Unofficial community software. Not affiliated with, endorsed by, sponsored by, or supported by Meta. Muse Code is a product of Meta. Model requests and tools are handled by your installed CLI under its own settings.':
      '非官方社区软件，与 Meta 无隶属或背书关系。Muse Code 是 Meta 的产品。本内嵌版的模型请求由 PI-Desktop 处理。',
    'Source & issue tracker': '源码与问题反馈',
    'Built with the official Muse SDK': '基于 PI-Desktop 模型运行时构建',
  }

  // Dynamic labels carry numbers, so they need a pattern rather than a key.
  const PREFIXES = [
    [/^Version ([0-9][^\s]*)$/, (match) => '版本 ' + match[1]],
    [/^Ran (\d+) tools?$/, (match) => '执行了 ' + match[1] + ' 个工具'],
  ]

  const ATTRIBUTES = ['placeholder', 'title', 'aria-label']
  function translateValue(value) {
    const key = String(value).trim()
    if (Object.prototype.hasOwnProperty.call(ZH, key)) return ZH[key]
    for (const [pattern, build] of PREFIXES) {
      const match = key.match(pattern)
      if (match) return build(match)
    }
    return null
  }

  function localizeNode(node) {
    if (node.nodeType === 3) {
      const translated = translateValue(node.nodeValue)
      if (translated !== null && node.nodeValue !== translated) {
        node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translated)
      }
      return
    }
    if (node.nodeType !== 1) return
    for (const attribute of ATTRIBUTES) {
      const current = node.getAttribute(attribute)
      if (!current) continue
      const translated = translateValue(current)
      if (translated !== null && node.getAttribute(attribute) !== translated) {
        node.setAttribute(attribute, translated)
      }
    }
  }

  function localizeTree(root) {
    if (!root) return
    if (root.nodeType === 3) {
      localizeNode(root)
      return
    }
    localizeNode(root)
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT)
    let current = walker.nextNode()
    while (current) {
      localizeNode(current)
      current = walker.nextNode()
    }
  }

  let currentLanguage = 'en'
  let languageSetting = 'auto'

  // Injected into the Settings screen: this is the only place a user can move
  // between Chinese and English without editing plugin settings by hand.
  function injectLanguageRow() {
    const layout = document.querySelector('.settings-layout')
    if (!layout || layout.querySelector('[data-muse-language]')) return
    const content = layout.children[1]
    if (!content) return
    const row = document.createElement('div')
    row.setAttribute('data-muse-language', '1')
    row.style.cssText =
      'display:flex;align-items:center;gap:12px;margin:0 0 16px;padding:10px 14px;border-radius:12px;background:rgba(127,127,127,.14)'
    const label = document.createElement('span')
    label.textContent = currentLanguage === 'zh' ? '界面语言' : 'Language'
    label.style.cssText = 'flex:1;font-weight:600'
    const select = document.createElement('select')
    select.style.cssText =
      'padding:6px 10px;border-radius:8px;border:1px solid rgba(127,127,127,.4);background:transparent;color:inherit;font:inherit'
    const choices = [
      ['auto', currentLanguage === 'zh' ? '跟随系统' : 'Auto'],
      ['zh', '中文'],
      ['en', 'English'],
    ]
    for (const [value, text] of choices) {
      const option = document.createElement('option')
      option.value = value
      option.textContent = text
      if (value === languageSetting) option.selected = true
      select.appendChild(option)
    }
    select.addEventListener('change', () => {
      void (async () => {
        try {
          await call('set-language', [select.value])
        } catch (error) {
          report('set-language', error)
        }
        location.reload()
      })()
    })
    row.appendChild(label)
    row.appendChild(select)
    content.insertBefore(row, content.firstChild)
  }

  function startLocalization() {
    // The macOS-style traffic lights are drawn by the renderer, but a plugin
    // gets no window-control API from the host: the panel's own capsule owns
    // minimize/maximize/close, so the renderer's copy is hidden rather than
    // left on screen doing nothing.
    const style = document.createElement('style')
    style.textContent =
      '[aria-label="Window controls"],[aria-label="窗口控制"]{display:none !important}'
    document.head.appendChild(style)

    let scheduled = false
    const run = () => {
      scheduled = false
      if (currentLanguage === 'zh') localizeTree(document.body)
      injectLanguageRow()
    }
    const observer = new MutationObserver(() => {
      if (scheduled) return
      scheduled = true
      setTimeout(run, 60)
    })
    run()
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRIBUTES,
    })
  }

  void (async () => {
    try {
      const answer = await call('locale')
      if (answer && answer.language === 'zh') currentLanguage = 'zh'
      if (answer && typeof answer.setting === 'string') languageSetting = answer.setting
    } catch {
      /* keep English when the host cannot answer */
    }
    startLocalization()
  })()
})()

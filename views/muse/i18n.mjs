/**
 * Shared runtime localisation for Muse Desktop.
 *
 * muse-desktop ships English strings only, and its bundle must stay identical
 * to upstream, so visible labels are mapped at runtime. Exact matches only —
 * brand names ("Muse"), theme names and key hints are never touched.
 *
 * Used from two places:
 *   - views/muse/shim.js  (page hosted by the host's panel/view)
 *   - renderer/entry.mjs  (renderer-extension layer)
 */

export const ZH = {
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
  About: '关于',
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

const PREFIXES = [
  [/^Version ([0-9][^\s]*)$/, (match) => '版本 ' + match[1]],
  [/^Ran (\d+) tools?$/, (match) => '执行了 ' + match[1] + ' 个工具'],
]

const ATTRIBUTES = ['placeholder', 'title', 'aria-label']

export function translateValue(value) {
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
  localizeNode(root)
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT)
  let current = walker.nextNode()
  while (current) {
    localizeNode(current)
    current = walker.nextNode()
  }
}

/**
 * Starts runtime localisation.
 * @param {object} options
 * @param {'zh'|'en'} options.language   active interface language
 * @param {'auto'|'zh'|'en'} options.setting  what the user picked
 * @param {(value: string) => void} [options.onSetLanguage] called when the
 *        language `<select>` changes; the caller persists it and reloads
 * @param {Element} [options.root] subtree to observe (defaults to body)
 */
export function startI18n({ language, setting = 'auto', onSetLanguage, root } = {}) {
  const chinese = language === 'zh'
  const target = root || document.body
  if (!target) return () => {}

  // The renderer draws its own macOS-style traffic lights, but a plugin gets no
  // window-control API: the host's panel capsule owns those actions, so the
  // dead copy is hidden.
  const style = document.createElement('style')
  style.textContent = ''
  ;(root ? root : document.head || document.documentElement).append(style)

  function injectLanguageRow() {
    const layout = target.querySelector('.settings-layout')
    if (!layout || layout.querySelector('[data-muse-language]')) return
    const content = layout.children[1]
    if (!content) return
    const row = document.createElement('div')
    row.setAttribute('data-muse-language', '1')
    row.style.cssText =
      'display:flex;align-items:center;gap:12px;margin:0 0 16px;padding:10px 14px;border-radius:12px;background:rgba(127,127,127,.14)'
    const label = document.createElement('span')
    label.textContent = chinese ? '界面语言' : 'Language'
    label.style.cssText = 'flex:1;font-weight:600'
    const select = document.createElement('select')
    select.style.cssText =
      'padding:6px 10px;border-radius:8px;border:1px solid rgba(127,127,127,.4);background:#fff;color:#1f2937;font:inherit;color-scheme:light'
    for (const [value, text] of [
      ['auto', chinese ? '跟随系统' : 'Auto'],
      ['zh', '中文'],
      ['en', 'English'],
    ]) {
      const option = document.createElement('option')
      option.value = value
      option.textContent = text
      if (value === setting) option.selected = true
      select.appendChild(option)
    }
    select.addEventListener('change', () => {
      if (typeof onSetLanguage === 'function') onSetLanguage(select.value)
    })
    row.appendChild(label)
    row.appendChild(select)
    content.insertBefore(row, content.firstChild)
  }

  let scheduled = false
  const run = () => {
    scheduled = false
    if (chinese) localizeTree(target)
    injectLanguageRow()
  }
  const observer = new MutationObserver(() => {
    if (scheduled) return
    scheduled = true
    setTimeout(run, 60)
  })
  run()
  observer.observe(target, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ATTRIBUTES,
  })

  return () => {
    observer.disconnect()
    style.remove()
  }
}

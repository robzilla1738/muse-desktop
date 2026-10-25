import { Select } from './components/Select'
import { isBackgroundOnly } from './activity'
import { composerCommands, parseComposerCommand } from './commands'
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  Archive,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Code2,
  Download,
  Ellipsis,
  FolderOpen,
  Layers3,
  LoaderCircle,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRight,
  Pin,
  Plus,
  Search,
  Settings2,
  Files,
  SquarePen,
  Sparkles,
  X,
} from 'lucide-react'
import {
  preferencesSchema,
  effortSchema,
  type AppEvent,
  type Attachment,
  type ConnectionStatus,
  type MuseModel,
  type MuseSession,
  type Preferences,
  type SessionView,
  type Theme,
} from '../../shared/protocol'
import { Composer } from './components/Composer'
import { CommandMenu } from './components/CommandMenu'
import { Inspector } from './components/Inspector'
import {
  Dialog,
  IconButton,
  MuseMark,
  friendlyTime,
  projectName,
  sessionTitle,
} from './components/Primitives'
import { Settings, themes } from './components/Settings'
import { Transcript } from './components/Transcript'
import { DocsPage, FilesPage, ProjectsPage } from './components/WorkspacePages'

const starters = [
  {
    icon: Sparkles,
    title: 'Plan a feature',
    description: 'Turn an idea into an approach',
    prompt: 'I have an idea I’d like to build. First, help me think through the approach. ',
  },
  {
    icon: Code2,
    title: 'Explore the project',
    description: 'Understand the code and architecture',
    prompt:
      'Explore this project and give me a clear tour of its architecture, key files, and how to run it. Do not make changes yet.',
  },
  {
    icon: Layers3,
    title: 'Review the code',
    description: 'Find bugs and improvements',
    prompt:
      'Review this project for bugs, rough edges, and opportunities to simplify. Explain the most useful improvements before making changes.',
  },
]

function conversationGroup(session: MuseSession, pinned: string[]) {
  if (pinned.includes(session.sessionId)) return 'Pinned'
  const date = new Date(session.lastActivityAt || session.updatedAt)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (date >= today) return 'Today'
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)
  if (date >= yesterday) return 'Yesterday'
  const week = new Date(today)
  week.setDate(today.getDate() - 7)
  return date >= week ? 'Previous 7 days' : 'Earlier'
}

export function App() {
  const [preferences, setPreferences] = useState<Preferences>(() => preferencesSchema.parse({}))
  const [status, setStatus] = useState<ConnectionStatus>({ state: 'connecting' })
  const [version, setVersion] = useState('0.2.0')
  const [platform, setPlatform] = useState('darwin')
  const [sessions, setSessions] = useState<MuseSession[]>([])
  const [nextCursor, setNextCursor] = useState<string | null>(null)
  const [historyLoading, setHistoryLoading] = useState(true)
  const [historyError, setHistoryError] = useState('')
  const [project, setProject] = useState('')
  const [view, setView] = useState<SessionView | null>(null)
  const [models, setModels] = useState<MuseModel[]>([])
  const [modelId, setModelId] = useState('')
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [loadingSession, setLoadingSession] = useState(false)
  const [sidebar, setSidebar] = useState(true)
  const [inspector, setInspector] = useState(false)
  const [settings, setSettings] = useState<'appearance' | 'connection' | false>(false)
  const [page, setPage] = useState<'chat' | 'projects' | 'files' | 'docs'>('chat')
  const [commands, setCommands] = useState(false)
  const [archived, setArchived] = useState(false)
  const [projectOpen, setProjectOpen] = useState(true)
  const [conversationsOpen, setConversationsOpen] = useState(true)
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({})
  const [rename, setRename] = useState(false)
  const [newName, setNewName] = useState('')
  const [toast, setToast] = useState<{ message: string; kind: 'error' | 'success' } | null>(null)
  const [darkSystem, setDarkSystem] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )
  const activeId = useRef<string | null>(null)
  const openSequence = useRef(0)
  const historySequence = useRef(0)
  const hasLoadedHistory = useRef(false)
  const menuHandler = useRef<(action: string) => void>(() => {})
  const refreshTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const theme: Theme =
    preferences.theme === 'system' ? (darkSystem ? 'moonlight' : 'daylight') : preferences.theme
  const modKey = platform === 'darwin' ? '⌘' : 'Ctrl'
  const altKey = platform === 'darwin' ? '⌥' : 'Alt+'
  const draftKey = view?.session.sessionId || `new:${project}`
  const draft = drafts[draftKey] || ''
  const running = view?.session.status === 'running'

  const showError = useCallback((message: string) => setToast({ message, kind: 'error' }), [])
  const showSuccess = (message: string) => setToast({ message, kind: 'success' })
  const refreshSessions = useCallback(async () => {
    const sequence = ++historySequence.current
    if (!hasLoadedHistory.current) setHistoryLoading(true)
    setHistoryError('')
    try {
      const collected = new Map<string, MuseSession>()
      const cursors = new Set<string>()
      let cursor: string | undefined
      do {
        const result = await window.muse.listSessions(cursor)
        if (sequence !== historySequence.current) return
        for (const session of result.sessions) collected.set(session.sessionId, session)
        setSessions([...collected.values()])
        setNextCursor(result.nextCursor)
        cursor = result.nextCursor || undefined
        if (cursor && cursors.has(cursor))
          throw new Error('Muse returned a repeated history cursor. Reconnect to refresh history.')
        if (cursor) cursors.add(cursor)
      } while (cursor)
      hasLoadedHistory.current = true
    } catch (error) {
      if (sequence === historySequence.current)
        setHistoryError(error instanceof Error ? error.message : String(error))
    } finally {
      if (sequence === historySequence.current) setHistoryLoading(false)
    }
  }, [])
  const savePreferences = useCallback(
    (patch: Partial<Preferences>) => {
      void window.muse
        .savePreferences(patch)
        .then(setPreferences)
        .catch((error: Error) => showError(error.message))
    },
    [showError],
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => setDarkSystem(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.textSize = preferences.fontSize
    document.documentElement.dataset.reduceMotion = String(preferences.reduceMotion)
  }, [theme, preferences.fontSize, preferences.reduceMotion])
  useEffect(() => {
    if (!toast || toast.kind === 'error') return
    const timer = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(timer)
  }, [toast])
  useEffect(() => {
    const receive = (event: AppEvent) => {
      if (event.type === 'connection') setStatus(event.status)
      if (event.type === 'preferences') setPreferences(event.preferences)
      if (event.type === 'error') showError(event.message)
      if (event.type === 'menu') menuHandler.current(event.action)
      if (event.type === 'session') {
        if (event.view.session.sessionId === activeId.current) setView(event.view)
        setSessions((current) =>
          current.map((session) =>
            session.sessionId === event.view.session.sessionId ? event.view.session : session,
          ),
        )
      }
      if (event.type === 'sessions-changed') {
        clearTimeout(refreshTimer.current)
        refreshTimer.current = setTimeout(() => {
          void refreshSessions()
        }, 250)
      }
    }
    const unsubscribe = window.muse.onEvent(receive)
    void window.muse
      .bootstrap()
      .then((data) => {
        setPreferences(data.preferences)
        setStatus(data.status)
        setVersion(data.version)
        setPlatform(data.platform || 'darwin')
        setProject(data.preferences.recentProjects[0] || '')
      })
      .catch((error: Error) => showError(error.message))
    return () => {
      unsubscribe()
      clearTimeout(refreshTimer.current)
      historySequence.current++
    }
  }, [refreshSessions, showError])
  useEffect(() => {
    if (status.state !== 'ready') return
    void refreshSessions()
    void window.muse
      .models()
      .then((result) => {
        setModels(result)
        setModelId((current) => current || result.find((model) => model.isDefault)?.modelId || '')
      })
      .catch((error: Error) => showError(error.message))
  }, [status.state, refreshSessions, showError])

  const startNew = () => {
    setPage('chat')
    openSequence.current++
    activeId.current = null
    setView(null)
    setLoadingSession(false)
    setArchived(false)
  }
  const chooseProject = async () => {
    try {
      const chosen = await window.muse.chooseProject()
      if (chosen) {
        setProject(chosen)
        startNew()
      }
    } catch (error) {
      showError(error instanceof Error ? error.message : String(error))
    }
  }
  const openSession = async (sessionId: string) => {
    setPage('chat')
    if (activeId.current === sessionId && view?.session.sessionId === sessionId) return
    const sequence = ++openSequence.current
    const showSpinner = !view
    if (showSpinner) setLoadingSession(true)
    activeId.current = sessionId
    try {
      const opened = await window.muse.openSession(sessionId)
      if (openSequence.current !== sequence) return
      setView(opened)
      setProject(opened.session.workspaceRoot || '')
      setModelId(opened.session.modelId || '')
    } catch (error) {
      if (openSequence.current === sequence) {
        showError(error instanceof Error ? error.message : String(error))
        activeId.current = view?.session.sessionId || null
      }
    } finally {
      if (openSequence.current === sequence) setLoadingSession(false)
    }
  }
  const reconnect = () => {
    void window.muse
      .connect()
      .then((result) => {
        setStatus(result)
        if (result.state === 'ready') {
          const sessionId = activeId.current
          if (sessionId) void openSession(sessionId)
        }
      })
      .catch((error: Error) => showError(error.message))
  }
  menuHandler.current = (action) => {
    if (action === 'new') startNew()
    if (action === 'open') void chooseProject()
    if (action === 'search') setCommands(true)
    if (action === 'settings') setSettings('appearance')
    if (action === 'sidebar') setSidebar((value) => !value)
  }
  useEffect(() => {
    if (platform === 'darwin') return
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.altKey || event.shiftKey) return
      const key = event.key.toLowerCase()
      const actions: Record<string, string> = {
        n: 'new',
        o: 'open',
        k: 'search',
        ',': 'settings',
        b: 'sidebar',
      }
      const action = actions[key]
      if (!action) return
      event.preventDefault()
      menuHandler.current(action)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [platform])

  const submit = async (attachments: Attachment[], mode: 'queue' | 'steer') => {
    setSubmitting(true)
    const text = draft
    const key = draftKey
    const sequence = openSequence.current
    try {
      const command = parseComposerCommand(text)
      if (command) {
        if (!composerCommands.some((entry) => entry.name === command.name))
          throw new Error(
            `/${command.name} is not handled by Desktop. Use /help, or open Muse Code in the project inspector for CLI commands.`,
          )
        if (attachments.length)
          throw new Error('Send attachments with a message, or remove them before using a command.')
        const { name, argument } = command
        if (name === 'clear' || name === 'new') startNew()
        if (name === 'help') setPage('docs')
        if (name === 'settings') setSettings('appearance')
        if (name === 'voice') {
          if (argument === 'status')
            showSuccess(
              `Use ${altKey}V to start or stop recording. Muse Code transcribes speech into your draft.`,
            )
          else if (argument === 'cancel') window.dispatchEvent(new Event('muse:voice-cancel'))
          else if (!argument) window.dispatchEvent(new Event('muse:voice'))
          else
            throw new Error(
              'Use /voice to record, /voice cancel to discard, or /voice status for help.',
            )
        }
        if (name === 'model') {
          if (!argument) window.dispatchEvent(new CustomEvent('muse:select', { detail: 'Model' }))
          else {
            if (!models.some((model) => model.modelId === argument))
              throw new Error('Choose one of the models available in the Model menu.')
            if (view) await window.muse.setModel(view.session.sessionId, argument)
            setModelId(argument)
          }
        }
        if (name === 'effort') {
          if (!argument)
            window.dispatchEvent(new CustomEvent('muse:select', { detail: 'Reasoning effort' }))
          else {
            const parsed = effortSchema.safeParse(argument.toLowerCase())
            if (!parsed.success)
              throw new Error('Choose none, minimal, low, medium, high, xhigh, max, or ultra.')
            setPreferences(await window.muse.savePreferences({ reasoningEffort: parsed.data }))
          }
        }
        if (['compact', 'rename', 'stop'].includes(name)) {
          if (!view) throw new Error('Open a conversation before using this command.')
          if (name === 'compact') {
            const result = await window.muse.compact(view.session.sessionId)
            showSuccess(
              result.status === 'noop'
                ? 'There is no conversation history to compact yet.'
                : 'Muse is compacting this conversation.',
            )
          }
          if (name === 'stop') await window.muse.cancel(view.session.sessionId)
          if (name === 'rename') {
            if (argument) await window.muse.renameSession(view.session.sessionId, argument)
            else {
              setNewName(sessionTitle(view.session))
              setRename(true)
            }
          }
        }
        setDrafts((values) => ({ ...values, [key]: '' }))
        return true
      }
      let current = view
      if (!current) {
        let root = project
        if (!root) {
          root = (await window.muse.chooseProject()) || ''
          if (!root) return false
          setProject(root)
        }
        current = await window.muse.createSession(root, modelId || undefined)
        if (openSequence.current === sequence) activeId.current = current.session.sessionId
      }
      const submittedSessionId = current.session.sessionId
      const optimisticItem = {
        itemId: `optimistic-${Date.now()}`,
        kind: 'userMessage',
        revision: 0,
        status: 'completed',
        text,
        displayText: text,
        recordedAt: new Date().toISOString(),
      }
      if (openSequence.current === sequence) {
        setView((existing) => {
          const base = existing?.session.sessionId === submittedSessionId ? existing : current!
          const alreadyHasUserMessage = base.items.some(
            (item) =>
              item.kind === 'userMessage' && (item.text === text || item.displayText === text),
          )
          return {
            ...base,
            session: { ...base.session, status: 'running' },
            items: alreadyHasUserMessage ? base.items : [...base.items, optimisticItem],
          }
        })
      }
      setDrafts((values) => ({
        ...values,
        [key]: values[key] === text ? '' : values[key] || '',
        [submittedSessionId]:
          values[submittedSessionId] === text ? '' : values[submittedSessionId] || '',
      }))
      await window.muse.send({
        sessionId: current.session.sessionId,
        text,
        attachments: attachments.map((file) => file.id),
        effort: preferences.reasoningEffort,
        mode,
      })
      return true
    } catch (error) {
      setDrafts((values) => ({ ...values, [key]: values[key] || text }))
      showError(error instanceof Error ? error.message : String(error))
      return false
    } finally {
      setSubmitting(false)
    }
  }
  const setModel = (id: string) => {
    if (!view) {
      setModelId(id)
      return
    }
    const sequence = openSequence.current
    void window.muse
      .setModel(view.session.sessionId, id)
      .then(() => {
        if (openSequence.current === sequence) setModelId(id)
      })
      .catch((error: Error) => showError(error.message))
  }
  const togglePin = (sessionId: string) =>
    savePreferences({
      pinnedSessionIds: preferences.pinnedSessionIds.includes(sessionId)
        ? preferences.pinnedSessionIds.filter((id) => id !== sessionId)
        : [...preferences.pinnedSessionIds, sessionId],
    })
  const toggleArchive = (sessionId: string) => {
    savePreferences({
      archivedSessionIds: preferences.archivedSessionIds.includes(sessionId)
        ? preferences.archivedSessionIds.filter((id) => id !== sessionId)
        : [...preferences.archivedSessionIds, sessionId],
    })
    if (sessionId === view?.session.sessionId) startNew()
  }
  const visibleSessions = sessions
    .filter(
      (session) =>
        (!project || session.workspaceRoot === project) &&
        !['subagent', 'reminder'].includes(session.kind || '') &&
        preferences.archivedSessionIds.includes(session.sessionId) === archived,
    )
    .sort(
      (a, b) =>
        Number(preferences.pinnedSessionIds.includes(b.sessionId)) -
          Number(preferences.pinnedSessionIds.includes(a.sessionId)) ||
        (b.lastActivityAt || b.updatedAt).localeCompare(a.lastActivityAt || a.updatedAt),
    )
  const groupedSessions: { group: string; entries: MuseSession[] }[] = []
  for (const session of visibleSessions) {
    const group = conversationGroup(session, preferences.pinnedSessionIds)
    const last = groupedSessions[groupedSessions.length - 1]
    if (last && last.group === group) last.entries.push(session)
    else groupedSessions.push({ group, entries: [session] })
  }

  return (
    <div
      className={`app-shell ${sidebar ? '' : 'sidebar-hidden'} ${inspector ? 'with-inspector' : ''}`}
      style={{ '--background-presence': preferences.backgroundIntensity / 100 } as CSSProperties}
    >
      {platform !== 'darwin' && (
        <div className="window-traffic-lights" role="group" aria-label="Window controls">
          <button
            type="button"
            className="traffic-light close"
            aria-label="Close window"
            title="Close"
            onClick={() => {
              void window.muse.windowAction('close')
            }}
          />
          <button
            type="button"
            className="traffic-light minimize"
            aria-label="Minimize window"
            title="Minimize"
            onClick={() => {
              void window.muse.windowAction('minimize')
            }}
          />
          <button
            type="button"
            className="traffic-light maximize"
            aria-label="Maximize window"
            title="Maximize"
            onClick={() => {
              void window.muse.windowAction('maximize')
            }}
          />
        </div>
      )}
      <aside
        aria-hidden={!sidebar || undefined}
        inert={!sidebar ? true : undefined}
        className={`sidebar ${visibleSessions.length ? 'has-conversations' : ''}`}
      >
        <div className="sidebar-titlebar">
          <IconButton label="Hide sidebar" onClick={() => setSidebar(false)}>
            <PanelLeftClose size={17} />
          </IconButton>
        </div>
        <button className="brand" onClick={startNew} aria-label="Muse home">
          <MuseMark size={37} />
          <span>Muse</span>
          <span
            className="desktop-tag"
            data-tooltip="Community desktop app for Muse Code · Not affiliated with Meta"
          >
            Unofficial
          </span>
        </button>
        <div className="sidebar-search">
          <button className="search-button" onClick={() => setCommands(true)}>
            <span className="sidebar-item-icon">
              <Search size={15} />
            </span>
            <span>Search conversations</span>
            <kbd>{modKey} K</kbd>
          </button>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          {(
            [
              { id: 'chat', icon: MessageSquare, label: 'Chat' },
              { id: 'projects', icon: Code2, label: 'Projects' },
              { id: 'files', icon: Files, label: 'Files' },
              { id: 'docs', icon: BookOpen, label: 'Docs' },
            ] as const
          ).map((entry) => (
            <button
              key={entry.id}
              aria-label={entry.label}
              title={entry.label}
              className={page === entry.id ? 'selected' : ''}
              onClick={() => setPage(entry.id)}
            >
              <entry.icon size={19} strokeWidth={1.7} />
              <span>{entry.label}</span>
              {page === entry.id && <span className="nav-active-dot" />}
            </button>
          ))}
          <button aria-label="Settings" title="Settings" onClick={() => setSettings('appearance')}>
            <Settings2 size={19} strokeWidth={1.7} />
            <span>Settings</span>
          </button>
        </nav>
        <div className="sidebar-primary">
          <button className="new-button" onClick={startNew}>
            <span className="sidebar-item-icon">
              <Plus size={15} />
            </span>
            <span>New conversation</span>
            <kbd>{modKey} N</kbd>
          </button>
        </div>
        <div className="sidebar-section-label">
          <button
            type="button"
            className="section-toggle"
            aria-expanded={projectOpen}
            onClick={() => setProjectOpen((value) => !value)}
          >
            <span>PROJECTS</span>
            <ChevronDown
              size={12}
              className={`section-chevron ${projectOpen ? '' : 'collapsed'}`}
            />
          </button>
          <IconButton
            label="Open a project"
            onClick={() => {
              void chooseProject()
            }}
          >
            <Plus size={14} />
          </IconButton>
        </div>
        <div className={`sidebar-collapse ${projectOpen ? 'open' : ''}`}>
          <div className="sidebar-collapse-inner">
            <div className="project-switcher">
              <Select
                label="Current project"
                value={project}
                icon={
                  <span className="sidebar-item-icon">
                    <FolderOpen size={15} />
                  </span>
                }
                onChange={(value) => {
                  if (value === '__open') {
                    void chooseProject()
                    return
                  }
                  setProject(value)
                  startNew()
                }}
                options={[
                  { value: '', label: 'All projects' },
                  ...preferences.recentProjects.map((path) => ({
                    value: path,
                    label: projectName(path),
                  })),
                  ...(project && !preferences.recentProjects.includes(project)
                    ? [{ value: project, label: projectName(project) }]
                    : []),
                  { value: '__open', label: 'Open another project…' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="sidebar-section-label conversations-label">
          <button
            type="button"
            className="section-toggle"
            aria-expanded={conversationsOpen}
            onClick={() => setConversationsOpen((value) => !value)}
          >
            <span>{archived ? 'ARCHIVED' : 'CONVERSATIONS'}</span>
            <ChevronDown
              size={12}
              className={`section-chevron ${conversationsOpen ? '' : 'collapsed'}`}
            />
          </button>
          <IconButton
            label={archived ? 'Show conversations' : 'Show archived conversations'}
            active={archived}
            onClick={() => setArchived((value) => !value)}
          >
            <Archive size={13} />
          </IconButton>
        </div>
        <div className={`conversation-list ${conversationsOpen ? '' : 'is-collapsed'}`}>
          <div className={`sidebar-collapse ${conversationsOpen ? 'open' : ''}`}>
            <div className="sidebar-collapse-inner">
              {historyError && (
                <div className="history-error">
                  <p>Could not load your conversation history.</p>
                  <p>{historyError}</p>
                  <button
                    className="text-button"
                    onClick={() => {
                      void refreshSessions()
                    }}
                  >
                    Try again
                  </button>
                </div>
              )}
              {groupedSessions.map(({ group, entries }) => {
                const groupCollapsed = Boolean(collapsedGroups[group])
                return (
                  <div className="conversation-group" key={group}>
                    <button
                      type="button"
                      className="conversation-group-label"
                      aria-expanded={!groupCollapsed}
                      onClick={() =>
                        setCollapsedGroups((current) => ({
                          ...current,
                          [group]: !current[group],
                        }))
                      }
                    >
                      <span>{group}</span>
                      <ChevronDown
                        size={12}
                        className={`section-chevron ${groupCollapsed ? 'collapsed' : ''}`}
                      />
                    </button>
                    <div className={`sidebar-collapse ${groupCollapsed ? '' : 'open'}`}>
                      <div className="sidebar-collapse-inner">
                        {entries.map((session) => (
                          <div
                            key={session.sessionId}
                            className={`conversation-row ${session.sessionId === view?.session.sessionId ? 'selected' : ''}`}
                          >
                            <button
                              className="conversation-link"
                              title={sessionTitle(session)}
                              onClick={() => {
                                void openSession(session.sessionId)
                              }}
                            >
                              <span
                                className={`conversation-indicator sidebar-item-icon ${session.status === 'running' ? 'running' : ''}`}
                              >
                                {preferences.pinnedSessionIds.includes(session.sessionId) ? (
                                  <Pin size={13} />
                                ) : session.status === 'running' ? (
                                  <span className="working-dot" />
                                ) : (
                                  <MessageSquare size={14} />
                                )}
                              </span>
                              <span className="conversation-copy">
                                <span className="conversation-title">{sessionTitle(session)}</span>
                                {!project && session.workspaceRoot && (
                                  <span className="conversation-project">
                                    {projectName(session.workspaceRoot)}
                                  </span>
                                )}
                              </span>
                              <time>
                                {friendlyTime(session.lastActivityAt || session.updatedAt)}
                              </time>
                            </button>
                            <button
                              className="row-pin"
                              title={
                                preferences.pinnedSessionIds.includes(session.sessionId)
                                  ? 'Unpin conversation'
                                  : 'Pin conversation'
                              }
                              aria-label={`${preferences.pinnedSessionIds.includes(session.sessionId) ? 'Unpin' : 'Pin'} ${sessionTitle(session)}`}
                              onClick={() => togglePin(session.sessionId)}
                            >
                              <Pin size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
              {historyLoading && status.state === 'ready' && (
                <div className="history-status">
                  <LoaderCircle size={14} className="spin" />
                  <span>Loading Muse history…</span>
                </div>
              )}
              {!visibleSessions.length &&
                !historyLoading &&
                !historyError &&
                status.state === 'ready' && (
                  <div className="sidebar-empty">
                    <MessageSquare size={19} strokeWidth={1.3} />
                    <p>{archived ? 'No archived conversations' : 'No conversations yet'}</p>
                    <span>
                      {archived
                        ? 'Archived conversations appear here.'
                        : 'Start a conversation in this project.'}
                    </span>
                  </div>
                )}
              {nextCursor && !historyLoading && (
                <button
                  className="load-more"
                  onClick={() => {
                    void window.muse
                      .listSessions(nextCursor)
                      .then((result) => {
                        setSessions((current) => [
                          ...current,
                          ...result.sessions.filter(
                            (entry) =>
                              !current.some((existing) => existing.sessionId === entry.sessionId),
                          ),
                        ])
                        setNextCursor(result.nextCursor)
                      })
                      .catch((error: Error) => showError(error.message))
                  }}
                >
                  Load earlier conversations
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-companion">
          <img src="./mascot-wave.png" alt="Muse mascot waving hello" />
          <span>Good to see you!</span>
          <svg viewBox="0 0 64 8" aria-hidden="true">
            <path d="M3 4c9-6 18 6 29 0s17 2 28-1" />
          </svg>
        </div>
        <div className="sidebar-bottom">
          <div className="theme-mini-switch" role="group" aria-label="Appearance">
            {themes.map((entry) => (
              <button
                key={entry.id}
                title={entry.label}
                aria-label={`${entry.label} theme`}
                aria-pressed={theme === entry.id}
                className={theme === entry.id ? 'selected' : ''}
                onClick={() => savePreferences({ theme: entry.id })}
              >
                <entry.icon size={14} />
                <span className="theme-mini-label">
                  <span>{entry.label}</span>
                </span>
              </button>
            ))}
          </div>

          <button className="connection-status" onClick={() => setSettings('connection')}>
            <span className={`status-dot ${status.state}`} />
            <span>
              {status.state === 'ready'
                ? 'Connected to Muse Code'
                : status.state === 'connecting'
                  ? 'Connecting to Muse…'
                  : 'Muse Code disconnected'}
            </span>
            <ArrowUpRight size={11} />
          </button>
        </div>
      </aside>
      <main className="main-workspace">
        {page === 'chat' && (
          <>
            <div className={`welcome-art theme-${theme}`} aria-hidden="true" />
            <div className="chat-brand-background" aria-hidden="true" />
          </>
        )}
        <header className={`workspace-titlebar ${sidebar ? '' : 'with-traffic-lights'}`}>
          <div className="workspace-breadcrumb">
            {!sidebar && (
              <IconButton label="Show sidebar" onClick={() => setSidebar(true)}>
                <PanelLeftOpen size={17} />
              </IconButton>
            )}
            <span className="breadcrumb-project">
              {project ? projectName(project) : 'Muse Desktop'}
            </span>
            <ChevronRight size={12} />
            <span className="breadcrumb-title">
              {page !== 'chat'
                ? page[0].toUpperCase() + page.slice(1)
                : view
                  ? sessionTitle(view.session)
                  : 'New conversation'}
            </span>
          </div>
          <div className="window-tools">
            <IconButton label="New conversation" onClick={startNew}>
              <SquarePen size={17} />
            </IconButton>
            <IconButton label="Search conversations and commands" onClick={() => setCommands(true)}>
              <Search size={17} />
            </IconButton>
            {view && (
              <details className="conversation-menu">
                <summary aria-label="Conversation actions">
                  <Ellipsis size={19} />
                </summary>
                <div className="popover">
                  <button
                    onClick={() => {
                      setNewName(sessionTitle(view.session))
                      setRename(true)
                    }}
                  >
                    Rename conversation
                  </button>
                  <button onClick={() => togglePin(view.session.sessionId)}>
                    {preferences.pinnedSessionIds.includes(view.session.sessionId)
                      ? 'Unpin conversation'
                      : 'Pin conversation'}
                  </button>
                  <button
                    onClick={() => {
                      void window.muse
                        .exportSession(view.session.sessionId)
                        .then((path) => {
                          if (path) showSuccess('Conversation exported to Markdown.')
                        })
                        .catch((error: Error) => showError(error.message))
                    }}
                  >
                    <Download size={13} />
                    Export as Markdown
                  </button>
                  <button onClick={() => toggleArchive(view.session.sessionId)}>
                    <Archive size={13} />
                    {archived ? 'Restore conversation' : 'Archive in Desktop'}
                  </button>
                </div>
              </details>
            )}
            <IconButton
              label="Toggle project inspector"
              active={inspector}
              onClick={() => setInspector((value) => !value)}
            >
              <PanelRight size={17} />
            </IconButton>
          </div>
        </header>
        {status.state !== 'ready' && status.state !== 'connecting' && (
          <div className="connection-banner">
            <CircleDot size={16} />
            <span>{status.message || 'Connect Muse Code to get started.'}</span>
            <button onClick={reconnect}>Reconnect</button>
            <button onClick={() => setSettings('connection')}>
              Set up <ArrowRight size={12} />
            </button>
          </div>
        )}
        {page === 'projects' && (
          <ProjectsPage
            projects={preferences.recentProjects}
            sessions={sessions}
            onOpen={() => {
              void chooseProject()
            }}
            onChoose={(path) => {
              setProject(path)
              startNew()
            }}
          />
        )}
        {page === 'files' && (
          <FilesPage
            project={project}
            onOpen={() => {
              void chooseProject()
            }}
            onMention={(path) => {
              setPage('chat')
              setDrafts((current) => ({
                ...current,
                [draftKey]: `${current[draftKey] || ''}${current[draftKey] ? '\n' : ''}Please look at the project file: ${JSON.stringify(path)}\n`,
              }))
            }}
          />
        )}
        {page === 'docs' && <DocsPage platform={platform} onError={showError} />}
        {page === 'chat' && (
          <div className="workspace-body">
            {loadingSession ? (
              <div className="loading-conversation">
                <LoaderCircle className="spin" size={23} />
                <p>Loading conversation…</p>
              </div>
            ) : view ? (
              <Transcript key={view.session.sessionId} view={view} onError={showError} />
            ) : (
              <div className="welcome">
                <div className="welcome-content">
                  <div className="welcome-kicker">
                    <span className="tiny-spark">✳</span>
                    {platform === 'win32'
                      ? 'MUSE CODE, ON WINDOWS'
                      : platform === 'linux'
                        ? 'MUSE CODE, ON LINUX'
                        : 'MUSE CODE, ON YOUR MAC'}
                  </div>
                  <h1>
                    Good things start
                    <br />
                    with a little <em>Muse.</em>
                  </h1>
                  <p className="welcome-subtitle">
                    Build, explore, and improve your project with Muse.
                  </p>
                  <div className="welcome-project">
                    <button
                      className="project-chip"
                      onClick={() => {
                        void chooseProject()
                      }}
                    >
                      <FolderOpen size={14} />
                      {project ? projectName(project) : 'Choose a project'}
                      <ChevronDown size={12} />
                    </button>
                  </div>
                </div>
                <div className="starter-section">
                  <div className="starter-label">
                    <span>SUGGESTED PROMPTS</span>
                  </div>
                  <div className="starter-grid">
                    {starters.map((starter) => (
                      <button
                        className="starter-card"
                        key={starter.title}
                        onClick={() => {
                          setDrafts((current) => ({ ...current, [draftKey]: starter.prompt }))
                          document.querySelector<HTMLTextAreaElement>('textarea')?.focus()
                        }}
                      >
                        <starter.icon size={19} strokeWidth={1.5} />
                        <span>
                          <strong>{starter.title}</strong>
                          <small>{starter.description}</small>
                        </span>
                        <ArrowUpRight size={13} className="starter-arrow" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {!loadingSession && (
              <div className={`composer-dock ${view ? 'conversation-dock' : ''}`}>
                <Composer
                  draft={draft}
                  setDraft={(value) => setDrafts((current) => ({ ...current, [draftKey]: value }))}
                  running={Boolean(running)}
                  backgroundOnly={Boolean(view && isBackgroundOnly(view.items))}
                  submitting={submitting}
                  connected={status.state === 'ready'}
                  hasProject={Boolean(project)}
                  project={project}
                  models={models}
                  modelId={modelId}
                  preferences={preferences}
                  onModel={setModel}
                  onEffort={(reasoningEffort) => savePreferences({ reasoningEffort })}
                  onSubmit={submit}
                  onCancel={() => {
                    if (view)
                      void window.muse
                        .cancel(view.session.sessionId)
                        .catch((error: Error) => showError(error.message))
                  }}
                  onError={showError}
                />
              </div>
            )}
          </div>
        )}
      </main>
      <Inspector
        key={project}
        open={inspector}
        project={project}
        platform={platform}
        view={view}
        onClose={() => setInspector(false)}
        onMentionDiff={(path) => {
          setPage('chat')
          setDrafts((current) => ({
            ...current,
            [draftKey]: `${current[draftKey] || ''}${current[draftKey] ? '\n' : ''}Please review the changes in @${path}\n`,
          }))
        }}
        onError={showError}
      />
      {settings && (
        <Settings
          initialTab={settings}
          preferences={preferences}
          status={status}
          version={version}
          platform={platform}
          onSave={savePreferences}
          onClose={() => setSettings(false)}
          onError={showError}
          onReconnect={reconnect}
        />
      )}
      {commands && (
        <CommandMenu
          platform={platform}
          sessions={sessions.filter(
            (session) => !preferences.archivedSessionIds.includes(session.sessionId),
          )}
          onSession={(id) => {
            void openSession(id)
          }}
          onNew={startNew}
          onOpen={() => {
            void chooseProject()
          }}
          onSettings={() => setSettings('appearance')}
          onTheme={(theme) => savePreferences({ theme })}
          onClose={() => setCommands(false)}
        />
      )}
      {rename && view && (
        <Dialog
          title="Rename conversation"
          onClose={() => setRename(false)}
          className="rename-dialog"
        >
          <form
            onSubmit={(event) => {
              event.preventDefault()
              void window.muse
                .renameSession(view.session.sessionId, newName)
                .then(() => setRename(false))
                .catch((error: Error) => showError(error.message))
            }}
          >
            <label className="field-label" htmlFor="conversation-name">
              Conversation name
            </label>
            <input
              id="conversation-name"
              className="text-input"
              autoFocus
              value={newName}
              maxLength={200}
              onChange={(event) => setNewName(event.target.value)}
            />
            <div className="request-actions">
              <button type="button" className="button secondary" onClick={() => setRename(false)}>
                Cancel
              </button>
              <button className="button primary" disabled={!newName.trim()}>
                Save
              </button>
            </div>
          </form>
        </Dialog>
      )}
      {toast && (
        <div className={`toast ${toast.kind}`} role={toast.kind === 'error' ? 'alert' : 'status'}>
          {toast.kind === 'success' ? <Check size={16} /> : <CircleDot size={16} />}
          <span>{toast.message}</span>
          <IconButton label="Dismiss notification" onClick={() => setToast(null)}>
            <X size={14} />
          </IconButton>
        </div>
      )}
    </div>
  )
}

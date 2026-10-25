import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  File,
  FileCode2,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  Plus,
  Search,
  X,
} from 'lucide-react'
import type { GitStatus, MuseSession, ProjectFile } from '../../../shared/protocol'
import { friendlyTime, projectName } from './Primitives'

function fileIcon(file: ProjectFile) {
  if (file.directory) return <Folder size={15} className="file-icon folder" />
  if (/\.(ts|tsx|js|jsx|mjs|cjs|py|rs|go|rb|java|c|cpp|h|swift|css|scss|html|sh)$/i.test(file.name))
    return <FileCode2 size={15} className="file-icon code" />
  if (/\.(md|mdx|txt|json|yaml|yml|toml|lock)$/i.test(file.name))
    return <FileText size={15} className="file-icon doc" />
  return <File size={15} className="file-icon" />
}

export function ProjectsPage({
  projects,
  sessions,
  onOpen,
  onChoose,
}: {
  projects: string[]
  sessions: MuseSession[]
  onOpen: () => void
  onChoose: (path: string) => void
}) {
  const [gitMap, setGitMap] = useState<Record<string, GitStatus>>({})
  useEffect(() => {
    let cancelled = false
    void Promise.all(
      projects.map(async (path) => {
        try {
          const status = await window.muse.gitStatus(path)
          return [path, status] as const
        } catch {
          return null
        }
      }),
    ).then((entries) => {
      if (cancelled) return
      const next: Record<string, GitStatus> = {}
      for (const entry of entries) {
        if (entry) next[entry[0]] = entry[1]
      }
      setGitMap(next)
    })
    return () => {
      cancelled = true
    }
  }, [projects])
  return (
    <section className="workspace-page">
      <div className="page-heading">
        <div>
          <h1>Projects</h1>
          <p>Open a recent project or choose a folder.</p>
        </div>
        <button className="button primary" onClick={onOpen}>
          <Plus size={15} />
          Open project
        </button>
      </div>
      <div className="project-grid">
        {projects.map((path, i) => {
          const projectSessions = sessions.filter((session) => session.workspaceRoot === path)
          const latest = projectSessions
            .map((session) => session.lastActivityAt || session.updatedAt)
            .sort()
            .at(-1)
          const git = gitMap[path]
          return (
            <button className="project-card" key={path} onClick={() => onChoose(path)}>
              <div className="project-card-top">
                <span className={`project-card-icon hue-${i % 3}`}>
                  <FolderOpen size={24} strokeWidth={1.5} />
                </span>
                {git?.isRepository && (
                  <span className="project-git-pills">
                    {git.branch && (
                      <span className="project-git-pill">
                        <GitBranch size={11} />
                        {git.branch}
                      </span>
                    )}
                    <span className={`project-git-pill ${git.changes.length ? 'dirty' : 'clean'}`}>
                      {git.changes.length ? `${git.changes.length} changed` : 'Clean'}
                    </span>
                  </span>
                )}
              </div>
              <h2>{projectName(path)}</h2>
              <p>
                {path.replace(/^(?:\/Users\/[^/]+|\/home\/[^/]+|[A-Za-z]:\\Users\\[^\\]+)/, '~')}
              </p>
              <footer>
                <span>
                  {projectSessions.length} conversation{projectSessions.length === 1 ? '' : 's'}
                  {latest ? ` · ${friendlyTime(latest)}` : ''}
                </span>
                <ArrowUpRight size={16} />
              </footer>
            </button>
          )
        })}
        <button className="project-card add-project" onClick={onOpen}>
          <Plus size={26} strokeWidth={1.2} />
          <h2>Open project</h2>
          <p>Open a folder on your Mac.</p>
        </button>
      </div>
      <p className="page-footnote">
        Projects stay right where they are. Muse works in the folders you choose.
      </p>
    </section>
  )
}

export function FilesPage({
  project,
  onOpen,
  onMention,
}: {
  project: string
  onOpen: () => void
  onMention: (path: string) => void
}) {
  const [directory, setDirectory] = useState('')
  const [files, setFiles] = useState<ProjectFile[]>([])
  const [selected, setSelected] = useState('')
  const [content, setContent] = useState('')
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setDirectory('')
    setSelected('')
    setContent('')
    setQuery('')
  }, [project])
  useEffect(() => {
    if (!project) return
    let cancelled = false
    setLoading(true)
    setError('')
    setFiles([])
    void window.muse
      .listFiles(project, directory)
      .then((result) => {
        if (!cancelled) setFiles(result)
      })
      .catch((error: Error) => {
        if (!cancelled) setError(error.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [project, directory])
  useEffect(() => {
    if (!selected) return
    let cancelled = false
    setContent('Loading preview…')
    void window.muse
      .readFile(project, selected)
      .then((text) => {
        if (!cancelled) setContent(text)
      })
      .catch((error: Error) => {
        if (!cancelled) setContent(error.message)
      })
    return () => {
      cancelled = true
    }
  }, [project, selected])
  if (!project)
    return (
      <section className="workspace-page page-empty">
        <FolderOpen size={36} strokeWidth={1.2} />
        <h1>Files</h1>
        <p>Choose a project to explore its files and bring context into a conversation.</p>
        <button className="button primary" onClick={onOpen}>
          Open project <ArrowUpRight size={14} />
        </button>
      </section>
    )
  const visibleFiles = files
    .filter((file) => file.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => Number(b.directory) - Number(a.directory) || a.name.localeCompare(b.name))
  const segments = directory ? directory.split('/').filter(Boolean) : []
  const lineCount = selected && content ? content.split('\n').length : 0
  return (
    <section className="workspace-page files-page">
      <div className="page-heading">
        <div>
          <h1>Files</h1>
          <div className="files-breadcrumbs" aria-label="Folder path">
            <button
              type="button"
              className={`breadcrumb-segment ${!directory ? 'current' : ''}`}
              onClick={() => {
                setDirectory('')
                setQuery('')
              }}
            >
              <FolderOpen size={13} />
              <span>{projectName(project)}</span>
            </button>
            <ChevronRight size={12} />
            {segments.length === 0 ? (
              <span className="breadcrumb-segment current">Project root</span>
            ) : (
              segments.map((segment, index) => {
                const segmentPath = segments.slice(0, index + 1).join('/')
                const isLast = index === segments.length - 1
                return (
                  <span key={segmentPath} className="breadcrumb-part">
                    {index > 0 && <ChevronRight size={12} />}
                    <button
                      type="button"
                      className={`breadcrumb-segment ${isLast ? 'current' : ''}`}
                      onClick={() => {
                        setDirectory(segmentPath)
                        setQuery('')
                      }}
                    >
                      {segment}
                    </button>
                  </span>
                )
              })
            )}
          </div>
        </div>
      </div>
      <div className="file-browser">
        <div className="file-browser-sidebar">
          <div className="file-search-bar">
            <div className="file-search">
              <Search size={14} />
              <input
                aria-label="Filter files"
                placeholder="Find in this folder…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <button
                  type="button"
                  className="file-search-clear"
                  aria-label="Clear filter"
                  onClick={() => setQuery('')}
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
          <div className="file-browser-list">
            {directory && (
              <button
                className="file-row parent-folder"
                onClick={() => {
                  setDirectory(directory.split('/').slice(0, -1).join('/'))
                  setQuery('')
                }}
              >
                <ArrowLeft size={14} />
                <span>Parent folder</span>
              </button>
            )}
            {error && <p className="inline-error">{error}</p>}
            {loading && <p className="file-list-message">Opening folder…</p>}
            {!loading &&
              visibleFiles.map((file) => (
                <button
                  key={file.path}
                  aria-label={file.name}
                  className={`file-row ${selected === file.path ? 'selected' : ''}`}
                  onClick={() => {
                    if (file.directory) {
                      setDirectory(file.path)
                      setQuery('')
                    } else setSelected(file.path)
                  }}
                >
                  {fileIcon(file)}
                  <span>{file.name}</span>
                  {file.directory && <ChevronRight size={13} className="file-row-chevron" />}
                </button>
              ))}
            {!loading && !error && !visibleFiles.length && (
              <p className="file-list-message">
                {query ? 'No matching files.' : 'This folder is empty.'}
              </p>
            )}
          </div>
          <div className="file-list-footnote">
            <span>{files.length} entries</span>
            <span>·</span>
            <span>build dependencies hidden</span>
          </div>
        </div>
        <div className="file-preview">
          {selected ? (
            <>
              <header>
                <div className="file-preview-title">
                  <FileCode2 size={15} />
                  <span>{selected}</span>
                  {lineCount > 0 && <small>{lineCount} lines</small>}
                </div>
                <button className="file-ask-button text-button" onClick={() => onMention(selected)}>
                  Ask Muse <ArrowUpRight size={12} />
                </button>
              </header>
              <pre>{content}</pre>
            </>
          ) : (
            <div className="file-preview-empty">
              <span className="file-empty-badge">
                <FileCode2 size={24} strokeWidth={1.4} />
              </span>
              <h3>File preview</h3>
              <p>Select a file on the left to inspect its contents or reference it in chat.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const guides = [
  {
    title: 'Voice input',
    detail:
      'Click the microphone or press Option–V to start and stop recording. Muse Code transcribes your speech into the draft for you to review before sending. Escape cancels. Recordings stop at two minutes, and temporary audio is removed after transcription. Microphone permission is requested the first time you use voice.',
  },
  {
    title: 'Your full CLI',
    detail:
      'Tools, skills, hooks, plugins, and permission policies run through your existing Muse Code installation. Background reminders and hooks appear in the Activity inspector. For interactive CLI commands, skill and plugin administration, worktree setup, or account settings, use Muse Code in the project inspector to open the full CLI in Terminal. Type / for desktop commands, including /clear, /voice, /model, /effort, /compact, /rename, and /stop. Unsupported commands stay out of model messages.',
  },
  {
    title: 'Your first conversation',
    detail:
      'Open a project folder, tell Muse what you want to accomplish, and press Return. Muse uses the same credentials, settings, and models as your CLI. Shift–Return adds a new line.',
  },
  {
    title: 'Bring your existing work',
    detail:
      'Your CLI conversations appear in the sidebar. Choose a project to filter them, or select All projects. Opening a conversation reads its saved history; sending a message resumes it. A session already running in another CLI window may need to finish there before Desktop can resume it.',
  },
  {
    title: 'Permissions and approvals',
    detail:
      'Muse keeps its configured sandbox and tool permissions. When it asks for approval, read the exact command or target and choose one of the options offered by your CLI. Some choices apply once; others apply to the session or save a policy rule. Desktop never chooses one for you.',
  },
  {
    title: 'Send follow-ups',
    detail:
      'Send a follow-up while Muse works. Queue next saves it for the next turn; Steer now guides the current turn. The stop button cancels the active turn. Choose reasoning effort and model in the message toolbar.',
  },
  {
    title: 'Add context',
    detail:
      'Attach images or text files using the paperclip. Select up to five files, 2 MB per file and 4 MB total; text files are limited to 200 KB. The Files tab can add a relative file reference to your message. Muse reads that project file using its own tools and permissions.',
  },
  {
    title: 'Customize your workspace',
    detail:
      'Choose Muse, Daylight, Moonlight, Grove, or Plush in Settings. Adjust background intensity and reading size, or follow your Mac’s light and dark appearance. Reduced motion honors both your app preference and your macOS accessibility settings.',
  },
]

export function DocsPage({
  platform = 'darwin',
  onError,
}: {
  platform?: string
  onError: (message: string) => void
}) {
  const [openGuides, setOpenGuides] = useState<Record<number, boolean>>({ 0: true })
  const modKey = platform === 'darwin' ? '⌘' : 'Ctrl'
  const altKey = platform === 'darwin' ? '⌥' : 'Alt'
  return (
    <section className="workspace-page docs-page">
      <div className="docs-container">
        <div className="page-heading">
          <div>
            <h1>Getting started</h1>
            <p>Learn the basics and keyboard shortcuts.</p>
          </div>
          <BookOpen size={32} strokeWidth={1.2} />
        </div>
        <div className="guides">
          {guides.map((guide, i) => {
            const isOpen = Boolean(openGuides[i])
            return (
              <div key={guide.title} className={`guide-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="guide-summary"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenGuides((current) => ({
                      ...current,
                      [i]: !current[i],
                    }))
                  }
                >
                  <span className="guide-number">0{i + 1}</span>
                  <span>{guide.title}</span>
                  <ChevronRight size={15} className="guide-chevron" />
                </button>
                <div className={`guide-collapse ${isOpen ? 'open' : ''}`}>
                  <div className="guide-collapse-inner">
                    <p>{guide.detail}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="shortcuts-guide">
          <h2>Keyboard shortcuts</h2>
          <div>
            <span>Start or stop voice input</span>
            <kbd>{altKey} V</kbd>
          </div>
          <div>
            <span>Cancel voice input</span>
            <kbd>Esc</kbd>
          </div>
          <div>
            <span>New conversation</span>
            <kbd>{modKey} N</kbd>
          </div>
          <div>
            <span>Open project</span>
            <kbd>{modKey} O</kbd>
          </div>
          <div>
            <span>Search & commands</span>
            <kbd>{modKey} K</kbd>
          </div>
          <div>
            <span>Settings</span>
            <kbd>{modKey} ,</kbd>
          </div>
          <div>
            <span>Toggle sidebar</span>
            <kbd>{modKey} B</kbd>
          </div>
        </div>
        <button
          className="button secondary"
          onClick={() => {
            void window.muse
              .openExternal('https://dev.meta.ai/docs/muse-code')
              .catch((error: Error) => onError(error.message))
          }}
        >
          Muse Code documentation <ArrowUpRight size={14} />
        </button>
        <p className="page-footnote">
          Muse Desktop is an independent community app. Your CLI remains the home of your account
          and conversations.
        </p>
      </div>
    </section>
  )
}

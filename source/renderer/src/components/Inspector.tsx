import { activityTitle } from '../activity'
import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  FileCode2,
  FolderOpen,
  GitBranch,
  LoaderCircle,
  RefreshCw,
  Terminal,
  X,
} from 'lucide-react'
import type { GitStatus, SessionView } from '../../../shared/protocol'
import { IconButton, projectName } from './Primitives'

function parseDiffLines(diff: string) {
  let oldLine = 0
  let newLine = 0
  return diff.split('\n').map((line) => {
    const hunk = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(line)
    if (hunk) {
      oldLine = Number(hunk[1])
      newLine = Number(hunk[2])
      return { kind: 'hunk' as const, oldNum: '', newNum: '', text: line }
    }
    if (
      line.startsWith('---') ||
      line.startsWith('+++') ||
      line.startsWith('diff ') ||
      line.startsWith('index ')
    ) {
      return { kind: 'meta' as const, oldNum: '', newNum: '', text: line }
    }
    if (line.startsWith('+')) {
      const num = newLine ? String(newLine++) : ''
      return { kind: 'added' as const, oldNum: '', newNum: num, text: line }
    }
    if (line.startsWith('-')) {
      const num = oldLine ? String(oldLine++) : ''
      return { kind: 'removed' as const, oldNum: num, newNum: '', text: line }
    }
    const o = oldLine ? String(oldLine++) : ''
    const n = newLine ? String(newLine++) : ''
    return { kind: 'context' as const, oldNum: o, newNum: n, text: line }
  })
}

export function Inspector({
  open = true,
  project,
  platform = 'darwin',
  view,
  onClose,
  onMentionDiff,
  onError,
}: {
  open?: boolean
  project: string
  platform?: string
  view: SessionView | null
  onClose: () => void
  onMentionDiff?: (path: string) => void
  onError: (message: string) => void
}) {
  const [tab, setTab] = useState<'changes' | 'activity'>('changes')
  const [git, setGit] = useState<GitStatus>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState('')
  const [diff, setDiff] = useState('')
  const [refreshVersion, setRefreshVersion] = useState(0)
  useEffect(() => {
    if (!open) return
    let cancelled = false
    setGit(undefined)
    setSelected('')
    setDiff('')
    if (!project) return
    setLoading(true)
    setError('')
    void window.muse
      .gitStatus(project)
      .then((result) => {
        if (!cancelled) setGit(result)
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
  }, [open, project, view?.session.status, refreshVersion])
  useEffect(() => {
    if (!open || !selected) return
    let cancelled = false
    setDiff('Loading diff…')
    void window.muse
      .gitDiff(project, selected)
      .then((text) => {
        if (!cancelled) setDiff(text)
      })
      .catch((error: Error) => {
        if (!cancelled) {
          setDiff(error.message)
          onError(error.message)
        }
      })
    return () => {
      cancelled = true
    }
  }, [open, project, selected, onError])
  const activity =
    view?.items.filter(
      (item) =>
        !item.retracted && !['userMessage', 'agentMessage', 'reasoning'].includes(item.kind),
    ) || []
  return (
    <aside
      className="inspector"
      aria-label="Project inspector"
      aria-hidden={!open || undefined}
      inert={!open ? true : undefined}
    >
      <header>
        <span>Project inspector</span>
        <IconButton label="Close inspector" onClick={onClose}>
          <X size={16} />
        </IconButton>
      </header>
      <div className="inspector-project">
        <span className="project-icon">
          <FolderOpen size={20} />
        </span>
        <div>
          <strong>{project ? projectName(project) : 'No project selected'}</strong>
          <span>
            {git?.branch ? (
              <>
                <GitBranch size={11} />
                {git.branch}
              </>
            ) : (
              'Local project'
            )}
          </span>
        </div>
      </div>
      <div className="inspector-tabs" role="tablist" aria-label="Inspector view">
        <button role="tab" aria-selected={tab === 'changes'} onClick={() => setTab('changes')}>
          Changes{Boolean(git?.changes.length) && <span>{git?.changes.length}</span>}
        </button>
        <button role="tab" aria-selected={tab === 'activity'} onClick={() => setTab('activity')}>
          Activity{activity.length > 0 && <span>{activity.length}</span>}
        </button>
        <IconButton
          label="Refresh changes"
          disabled={loading || !project}
          onClick={() => setRefreshVersion((value) => value + 1)}
        >
          <RefreshCw size={13} className={loading ? 'spin' : ''} />
        </IconButton>
      </div>
      <div className="inspector-body">
        {tab === 'changes' && (
          <>
            {error && <p className="inline-error">{error}</p>}
            {selected ? (
              <>
                <div className="diff-header">
                  <button className="diff-back" onClick={() => setSelected('')}>
                    <ChevronLeft size={13} />
                    <span>{selected}</span>
                  </button>
                  {onMentionDiff && (
                    <button
                      type="button"
                      className="diff-ask-button"
                      onClick={() => onMentionDiff(selected)}
                    >
                      Ask Muse <ArrowUpRight size={11} />
                    </button>
                  )}
                </div>
                <pre className="diff-view">
                  {parseDiffLines(diff).map((row, i) => (
                    <span
                      key={i}
                      className={
                        row.kind === 'added'
                          ? 'added'
                          : row.kind === 'removed'
                            ? 'removed'
                            : row.kind === 'hunk'
                              ? 'hunk'
                              : row.kind === 'meta'
                                ? 'meta'
                                : ''
                      }
                    >
                      <span className="diff-gutter" aria-hidden="true">
                        {row.newNum || row.oldNum || ' '}
                      </span>
                      {row.text || ' '}
                      <br />
                    </span>
                  ))}
                </pre>
              </>
            ) : (
              <>
                {git?.changes.map((change) => {
                  const normalizedPath = change.path.replaceAll('\\', '/')
                  return (
                    <button
                      className="changed-file"
                      key={change.path}
                      onClick={() => setSelected(change.path)}
                    >
                      <FileCode2 size={15} />
                      <span>
                        <strong>{normalizedPath.split('/').at(-1)}</strong>
                        <small>
                          {normalizedPath.includes('/')
                            ? normalizedPath.slice(0, normalizedPath.lastIndexOf('/'))
                            : 'Project root'}
                        </small>
                      </span>
                      <b className={change.status.includes('D') ? 'deleted' : ''}>
                        {change.status === '??' ? 'U' : change.status}
                      </b>
                      <ChevronRight size={12} />
                    </button>
                  )
                })}
                {!loading && !git?.changes.length && !error && (
                  <div className="inspector-empty">
                    <span className="empty-glyph">
                      <Check size={22} strokeWidth={1.4} />
                    </span>
                    <h3>
                      {!project
                        ? 'Open a project'
                        : git?.isRepository
                          ? 'No changes'
                          : 'No Git repository'}
                    </h3>
                    <p>
                      {!project
                        ? 'Open a project and its changes will appear here.'
                        : git?.isRepository
                          ? 'Your working tree has no changes.'
                          : 'This folder isn’t a Git repository. Muse can still work with its files.'}
                    </p>
                  </div>
                )}
                {loading && !git && (
                  <div className="inspector-empty">
                    <LoaderCircle className="spin" size={20} />
                    <p>Reading your workspace…</p>
                  </div>
                )}
              </>
            )}
          </>
        )}
        {tab === 'activity' && (
          <>
            {activity.map((item) => (
              <div className="activity-entry" key={item.itemId}>
                <span>
                  {item.status === 'inProgress' ? (
                    <LoaderCircle size={14} className="spin" />
                  ) : item.status === 'completed' ? (
                    <Check size={14} />
                  ) : (
                    <X size={14} />
                  )}
                </span>
                <div>
                  <strong>{activityTitle(item)}</strong>
                  <p>
                    {item.kind === 'reminderChild'
                      ? `${item.blocking ? 'Keeps the turn open · ' : ''}${item.status === 'inProgress' ? 'Running' : item.status}`
                      : item.statusLine || item.objective || item.fallbackText || item.status}
                  </p>
                </div>
              </div>
            ))}
            {!activity.length && (
              <div className="inspector-empty">
                <span className="empty-glyph">
                  <Terminal size={22} strokeWidth={1.4} />
                </span>
                <h3>No activity yet</h3>
                <p>Tool calls, file edits, and agent activity appear here.</p>
              </div>
            )}
          </>
        )}
      </div>
      {view?.usage && (
        <div className="usage-panel">
          <span className="eyebrow">SESSION USAGE</span>
          <div>
            <span>Input</span>
            <strong>{view.usage.input.toLocaleString()}</strong>
          </div>
          <div>
            <span>Output</span>
            <strong>{view.usage.output.toLocaleString()}</strong>
          </div>
          <div>
            <span>Total tokens</span>
            <strong>{view.usage.total.toLocaleString()}</strong>
          </div>
        </div>
      )}
      <div className="inspector-footer">
        <button
          disabled={!project}
          onClick={() => {
            void window.muse.revealProject(project).catch((error: Error) => onError(error.message))
          }}
        >
          <FolderOpen size={14} />
          {platform === 'win32' ? 'Explorer' : platform === 'linux' ? 'Files' : 'Finder'}
        </button>
        <button
          disabled={!project}
          onClick={() => {
            void window.muse.openTerminal(project).catch((error: Error) => onError(error.message))
          }}
        >
          <Terminal size={14} />
          Terminal
        </button>
        <button
          disabled={!project}
          onClick={() => {
            void window.muse.openCli(project).catch((error: Error) => onError(error.message))
          }}
        >
          Muse Code
        </button>
      </div>
    </aside>
  )
}

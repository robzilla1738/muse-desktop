import { useEffect, useRef, useState } from 'react'
import {
  ArrowUp,
  AudioLines,
  FileCode2,
  FileText,
  Folder,
  Image,
  Paperclip,
  Square,
  X,
} from 'lucide-react'
import type {
  Attachment,
  MuseModel,
  Preferences,
  ProjectFile,
  ReasoningEffort,
} from '../../../shared/protocol'
import { IconButton } from './Primitives'
import { Select } from './Select'
import { VoiceInput } from './VoiceInput'
import { composerCommands, parseComposerCommand } from '../commands'

const efforts: ReasoningEffort[] = [
  'none',
  'minimal',
  'low',
  'medium',
  'high',
  'xhigh',
  'max',
  'ultra',
]

export function Composer({
  draft,
  setDraft,
  running,
  backgroundOnly,
  submitting,
  connected,
  hasProject,
  project,
  models,
  modelId,
  preferences,
  onModel,
  onEffort,
  onSubmit,
  onCancel,
  onError,
}: {
  draft: string
  setDraft: (value: string) => void
  running: boolean
  backgroundOnly: boolean
  submitting: boolean
  connected: boolean
  hasProject: boolean
  project?: string
  models: MuseModel[]
  modelId: string
  preferences: Preferences
  onModel: (id: string) => void
  onEffort: (effort: ReasoningEffort) => void
  onSubmit: (attachments: Attachment[], mode: 'queue' | 'steer') => Promise<boolean>
  onCancel: () => void
  onError: (message: string) => void
}) {
  const [voiceBusy, setVoiceBusy] = useState(false)
  const [commandIndex, setCommandIndex] = useState(0)
  const [mentionIndex, setMentionIndex] = useState(0)
  const [mentionFiles, setMentionFiles] = useState<ProjectFile[]>([])
  const [dragging, setDragging] = useState(false)
  const suggestions = /^\/[a-z-]*$/i.test(draft)
    ? composerCommands.filter((command) => command.name.startsWith(draft.slice(1).toLowerCase()))
    : []
  const mentionMatch = project ? /(?:^|\s)@([^\s@]*)$/.exec(draft) : null
  const mentionToken = mentionMatch ? mentionMatch[1] : null
  const mentionDir =
    mentionToken && mentionToken.includes('/')
      ? mentionToken.slice(0, mentionToken.lastIndexOf('/'))
      : ''
  const mentionFilter =
    mentionToken !== null
      ? (mentionToken.includes('/')
          ? mentionToken.slice(mentionToken.lastIndexOf('/') + 1)
          : mentionToken
        ).toLowerCase()
      : ''
  useEffect(() => {
    if (!project || mentionToken === null) {
      setMentionFiles([])
      return
    }
    let cancelled = false
    void window.muse
      .listFiles(project, mentionDir)
      .then((entries) => {
        if (!cancelled) setMentionFiles(entries)
      })
      .catch(() => {
        if (!cancelled) setMentionFiles([])
      })
    return () => {
      cancelled = true
    }
  }, [project, mentionDir, mentionToken !== null])
  const mentionSuggestions =
    mentionToken !== null
      ? mentionFiles
          .filter((entry) => entry.name.toLowerCase().includes(mentionFilter))
          .slice(0, 12)
      : []
  const isCommand = Boolean(parseComposerCommand(draft))
  const chooseCommand = (name: string) => {
    setDraft(`/${name} `)
    textarea.current?.focus()
  }
  const chooseMention = (entry: ProjectFile) => {
    if (mentionToken === null) return
    const prefix = draft.slice(0, draft.length - mentionToken.length - 1)
    setDraft(`${prefix}@${entry.path}${entry.directory ? '/' : ' '}`)
    textarea.current?.focus()
  }
  useEffect(() => {
    setCommandIndex(0)
    setMentionIndex(0)
  }, [draft])
  const latestDraft = useRef(draft)
  latestDraft.current = draft
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [mode, setMode] = useState<'queue' | 'steer'>('queue')
  const textarea = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (textarea.current) {
      textarea.current.style.height = 'auto'
      textarea.current.style.height = `${Math.min(textarea.current.scrollHeight, 200)}px`
    }
  }, [draft])
  const submit = async () => {
    if (
      voiceBusy ||
      submitting ||
      (!connected && !isCommand) ||
      (!draft.trim() && !attachments.length)
    )
      return
    if (await onSubmit(attachments, mode)) setAttachments([])
  }
  const attach = async () => {
    try {
      const files = await window.muse.chooseAttachments()
      if (attachments.length + files.length > 5) {
        await Promise.all(files.map((file) => window.muse.removeAttachment(file.id)))
        throw new Error('You can attach up to five files per message.')
      }
      setAttachments((current) => [...current, ...files])
    } catch (error) {
      onError(error instanceof Error ? error.message : String(error))
    }
  }
  return (
    <div className="composer-wrap">
      {suggestions.length > 0 && (
        <div
          className="slash-menu"
          role="listbox"
          id="composer-commands"
          aria-label="Composer commands"
        >
          {suggestions.map((command, index) => (
            <button
              type="button"
              role="option"
              id={`command-${command.name}`}
              key={command.name}
              aria-selected={index === commandIndex}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => chooseCommand(command.name)}
            >
              <strong>/{command.name}</strong>
              <span>{command.description}</span>
            </button>
          ))}
        </div>
      )}
      {mentionSuggestions.length > 0 && (
        <div
          className="slash-menu mention-menu"
          role="listbox"
          id="composer-mentions"
          aria-label="Project files"
        >
          {mentionSuggestions.map((entry, index) => (
            <button
              type="button"
              role="option"
              id={`mention-${entry.path}`}
              key={entry.path}
              aria-selected={index === mentionIndex}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => chooseMention(entry)}
            >
              {entry.directory ? <Folder size={14} /> : <FileCode2 size={14} />}
              <strong>{entry.path}</strong>
              <span>{entry.directory ? 'Folder' : 'File'}</span>
            </button>
          ))}
        </div>
      )}
      <div className={`sidebar-collapse ${running ? 'open' : ''}`}>
        <div className="sidebar-collapse-inner">
          <div className="running-line">
            <span className="working-orb" />
            <span>
              {backgroundOnly ? 'Finishing background tasks' : 'Muse is working'}
              <span className="animated-dots">…</span>
            </span>
            <span className="running-hint">Send a follow-up to queue or steer.</span>
          </div>
        </div>
      </div>
      <form
        className={`composer ${running ? 'is-running' : ''} ${dragging ? 'is-dragging' : ''}`}
        onDragOver={(event) => {
          event.preventDefault()
          if (!dragging) setDragging(true)
        }}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setDragging(false)
        }}
        onDrop={(event) => {
          event.preventDefault()
          setDragging(false)
          const dropped = Array.from(event.dataTransfer.files)
          if (!dropped.length) return
          void (async () => {
            const additions: string[] = []
            for (const file of dropped.slice(0, 5)) {
              if (file.size <= 120 * 1024 && !/\.(png|jpe?g|webp|gif|pdf|zip)$/i.test(file.name)) {
                try {
                  const content = await file.text()
                  if (!content.includes('\0')) {
                    additions.push(`\`\`\`${file.name}\n${content.trim()}\n\`\`\``)
                    continue
                  }
                } catch {
                  // Fall back to file name reference.
                }
              }
              additions.push(`@${file.name}`)
            }
            if (additions.length) {
              const current = latestDraft.current
              setDraft(
                `${current}${current && !/\s$/.test(current) ? '\n' : ''}${additions.join('\n')}\n`,
              )
              textarea.current?.focus()
            }
          })()
        }}
        onSubmit={(event) => {
          event.preventDefault()
          void submit()
        }}
      >
        {attachments.length > 0 && (
          <div className="attachment-list">
            {attachments.map((file) => (
              <span className="attachment" key={file.id}>
                {file.kind === 'image' ? <Image size={14} /> : <FileText size={14} />}
                <span>{file.name}</span>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => {
                    void window.muse
                      .removeAttachment(file.id)
                      .catch((error: Error) => onError(error.message))
                    setAttachments((current) => current.filter((entry) => entry.id !== file.id))
                  }}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
        <textarea
          ref={textarea}
          aria-label="Message Muse"
          aria-controls={suggestions.length ? 'composer-commands' : undefined}
          aria-activedescendant={
            suggestions[commandIndex] ? `command-${suggestions[commandIndex].name}` : undefined
          }
          placeholder={hasProject ? 'Ask Muse about your project…' : 'Ask Muse anything…'}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={2}
          spellCheck
          onKeyDown={(event) => {
            if (suggestions.length && !event.nativeEvent.isComposing) {
              if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault()
                const next =
                  (commandIndex + (event.key === 'ArrowDown' ? 1 : -1) + suggestions.length) %
                  suggestions.length
                setCommandIndex(next)
                document
                  .getElementById(`command-${suggestions[next].name}`)
                  ?.scrollIntoView({ block: 'nearest' })
                return
              }
              if (
                event.key === 'Tab' ||
                (event.key === 'Enter' &&
                  !event.shiftKey &&
                  !composerCommands.some((entry) => `/${entry.name}` === draft.toLowerCase()))
              ) {
                event.preventDefault()
                chooseCommand(suggestions[commandIndex].name)
                return
              }
              if (event.key === 'Escape') {
                event.preventDefault()
                setDraft(`${draft} `)
                return
              }
            }
            if (mentionSuggestions.length && !event.nativeEvent.isComposing) {
              if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault()
                const next =
                  (mentionIndex +
                    (event.key === 'ArrowDown' ? 1 : -1) +
                    mentionSuggestions.length) %
                  mentionSuggestions.length
                setMentionIndex(next)
                document
                  .getElementById(`mention-${mentionSuggestions[next].path}`)
                  ?.scrollIntoView({ block: 'nearest' })
                return
              }
              if (event.key === 'Tab' || (event.key === 'Enter' && !event.shiftKey)) {
                event.preventDefault()
                chooseMention(mentionSuggestions[mentionIndex])
                return
              }
              if (event.key === 'Escape') {
                event.preventDefault()
                setMentionFiles([])
                return
              }
            }
            if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault()
              void submit()
            }
          }}
        />
        <div className="composer-toolbar">
          <div className="composer-tools">
            <IconButton
              label="Attach images or text files"
              disabled={submitting}
              onClick={() => {
                void attach()
              }}
            >
              <Paperclip size={17} />
            </IconButton>
            <span className="toolbar-divider" />
            <VoiceInput
              disabled={submitting || !connected}
              onBusy={setVoiceBusy}
              onError={onError}
              onText={(text) => {
                const existing = latestDraft.current
                setDraft(`${existing}${existing && !/\s$/.test(existing) ? ' ' : ''}${text}`)
                textarea.current?.focus()
              }}
            />
            <Select
              label="Model"
              className="model-select"
              value={modelId}
              disabled={submitting || models.length === 0}
              onChange={onModel}
              icon={<span className="model-spark">✳</span>}
              options={[
                ...(!models.some((model) => model.modelId === modelId)
                  ? [{ value: modelId, label: modelId || 'CLI default' }]
                  : []),
                ...models.map((model) => ({
                  value: model.modelId,
                  label: model.displayLabel || model.modelId,
                })),
              ]}
            />
            <Select
              label="Reasoning effort"
              className="effort-select"
              value={preferences.reasoningEffort}
              onChange={(value) => onEffort(value as ReasoningEffort)}
              icon={<AudioLines size={15} className="effort-icon" />}
              options={efforts.map((effort) => ({
                value: effort,
                label:
                  effort === 'xhigh' ? 'Extra high' : effort[0].toUpperCase() + effort.slice(1),
              }))}
            />
          </div>
          <div className="composer-actions">
            {running && (
              <>
                <Select
                  label="Follow-up behavior"
                  value={mode}
                  onChange={(value) => setMode(value as 'queue' | 'steer')}
                  options={[
                    { value: 'queue', label: 'Queue next' },
                    { value: 'steer', label: 'Steer now' },
                  ]}
                />
                <IconButton label="Stop Muse" onClick={onCancel}>
                  <Square size={14} fill="currentColor" />
                </IconButton>
              </>
            )}
            <button
              className="send-button"
              type="submit"
              aria-label={running ? 'Send follow-up' : 'Send message'}
              disabled={
                voiceBusy ||
                submitting ||
                (!connected && !isCommand) ||
                (!draft.trim() && !attachments.length)
              }
            >
              {submitting ? <span className="spinner" /> : <ArrowUp size={19} strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </form>
      <div className="composer-footnote">
        <span>{hasProject ? '' : 'Select a project when you send your first message.'}</span>
        <span className="composer-shortcuts">
          <span className="composer-shortcut">
            <kbd>↵</kbd>
            <span>Send</span>
          </span>
          <span className="footnote-dot" aria-hidden="true">
            ·
          </span>
          <span className="composer-shortcut">
            <kbd>⇧</kbd>
            <kbd>↵</kbd>
            <span>New line</span>
          </span>
        </span>
      </div>
    </div>
  )
}

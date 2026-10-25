import { isInternalActivity } from '../activity'
import { isValidElement, useEffect, useRef, useState, type ReactNode } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  ArrowDown,
  Check,
  ChevronRight,
  CircleHelp,
  Copy,
  ExternalLink,
  FileCode2,
  Layers3,
  LoaderCircle,
  ShieldCheck,
  Terminal,
  Users,
  X,
} from 'lucide-react'
import type {
  Approval,
  QuestionAnswer,
  SessionView,
  TranscriptItem,
  UserQuestion,
} from '../../../shared/protocol'
import { IconButton, MuseMark, cleanMessageText } from './Primitives'

function extractText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) return extractText(node.props.children)
  return ''
}

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  return (
    <button
      type="button"
      className="copy-button"
      title={error ? 'Could not copy. Select and copy the text.' : 'Copy'}
      aria-label={copied ? 'Copied' : label || 'Copy'}
      onClick={() => {
        void navigator.clipboard.writeText(text).then(
          () => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
          },
          () => setError(true),
        )
      }}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {label && <span>{copied ? 'Copied' : label}</span>}
      {error && 'Select to copy'}
    </button>
  )
}

function MessageMarkdown({ text, onError }: { text: string; onError: (message: string) => void }) {
  return (
    <div className="markdown">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              onClick={(event) => {
                event.preventDefault()
                if (href)
                  void window.muse
                    .openExternal(href)
                    .catch((error: Error) => onError(error.message))
              }}
            >
              {children}
              <ExternalLink size={10} className="inline-link-icon" />
            </a>
          ),
          img: ({ alt }) => (
            <span className="remote-image">[Image: {alt || 'External image'}]</span>
          ),
          pre: ({ children }) => {
            const child = Array.isArray(children) ? children[0] : children
            const className = isValidElement<{ className?: string }>(child)
              ? child.props.className || ''
              : ''
            const language = className.replace(/^language-/, '').trim() || 'code'
            const rawCode = extractText(children).replace(/\n$/, '')
            return (
              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-block-lang">{language}</span>
                  <CopyButton text={rawCode} label="Copy" />
                </div>
                <pre>{children}</pre>
              </div>
            )
          },
          code: ({ className, children }) => <code className={className}>{children}</code>,
        }}
      >
        {text}
      </Markdown>
    </div>
  )
}

function ToolItem({
  item,
  sessionId,
  onError,
}: {
  item: TranscriptItem
  sessionId: string
  onError: (message: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [fullOutput, setFullOutput] = useState<string>()
  const [loading, setLoading] = useState(false)
  const isRunning = item.status === 'inProgress'
  const title =
    item.tool || item.label || item.role || item.kind.replace(/([A-Z])/g, ' $1').toLowerCase()
  const summary = item.statusLine || item.objective || item.commandText || item.fallbackText
  return (
    <div className={`tool-item ${isRunning ? 'tool-running' : ''} ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="tool-summary-button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="tool-state">
          {isRunning ? (
            <LoaderCircle size={14} className="spin" />
          ) : item.status === 'completed' ? (
            <Check size={14} />
          ) : (
            <X size={14} />
          )}
        </span>
        {item.kind === 'subagent' ? (
          <Users size={14} />
        ) : item.kind === 'toolCall' ? (
          <Terminal size={14} />
        ) : (
          <FileCode2 size={14} />
        )}
        <span className="tool-title">{title}</span>
        {summary && <span className="tool-summary">{summary}</span>}
        {item.patchSummary && (
          <span className="diff-count">
            <b>+{item.patchSummary.added}</b>
            <i>−{item.patchSummary.removed}</i>
          </span>
        )}
        <ChevronRight className={`details-chevron ${open ? 'open' : ''}`} size={13} />
      </button>
      <div className={`sidebar-collapse ${open ? 'open' : ''}`}>
        <div className="sidebar-collapse-inner">
          <div className="tool-body">
            {item.objective && <p>{item.objective}</p>}
            {item.args && (
              <div className="tool-arguments">
                <span className="eyebrow">INPUT</span>
                <pre>{formatArguments(item.args)}</pre>
              </div>
            )}
            {(fullOutput ||
              item.visibleOutput ||
              item.result?.text ||
              item.failureReason ||
              item.finalSummary) && (
              <pre>
                {fullOutput ||
                  item.visibleOutput ||
                  item.result?.text ||
                  item.failureReason ||
                  item.finalSummary}
              </pre>
            )}
            {item.truncated && <p className="muted">Muse shortened the displayed output.</p>}
            {item.outputRef && !fullOutput && (
              <button
                type="button"
                className="text-button"
                disabled={loading}
                onClick={() => {
                  setLoading(true)
                  void window.muse
                    .readOutput(sessionId, item.itemId)
                    .then(setFullOutput)
                    .catch((error: Error) => onError(error.message))
                    .finally(() => setLoading(false))
                }}
              >
                {loading ? 'Loading…' : 'Read stored output'}
              </button>
            )}
            <span className="tool-result-status">
              {item.status}
              {item.durationMs !== undefined ? ` · ${(item.durationMs / 1000).toFixed(1)}s` : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ToolGroup({
  items,
  sessionId,
  onError,
}: {
  items: TranscriptItem[]
  sessionId: string
  onError: (message: string) => void
}) {
  const [open, setOpen] = useState(false)
  const added = items.reduce((sum, item) => sum + (item.patchSummary?.added || 0), 0)
  const removed = items.reduce((sum, item) => sum + (item.patchSummary?.removed || 0), 0)
  const names = Array.from(
    new Set(
      items.map(
        (item) =>
          item.tool ||
          item.label ||
          item.role ||
          item.kind.replace(/([A-Z])/g, ' $1').toLowerCase(),
      ),
    ),
  )
    .slice(0, 3)
    .join(', ')
  return (
    <div className={`tool-group ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="tool-group-header"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="tool-state">
          <Check size={14} />
        </span>
        <Layers3 size={14} />
        <span className="tool-title">Ran {items.length} tools</span>
        <span className="tool-summary">{names}</span>
        {(added > 0 || removed > 0) && (
          <span className="diff-count">
            <b>+{added}</b>
            <i>−{removed}</i>
          </span>
        )}
        <ChevronRight className={`details-chevron ${open ? 'open' : ''}`} size={13} />
      </button>
      <div className={`sidebar-collapse ${open ? 'open' : ''}`}>
        <div className="sidebar-collapse-inner">
          <div className="tool-group-list">
            {items.map((item) => (
              <ToolItem key={item.itemId} item={item} sessionId={sessionId} onError={onError} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ReasoningItem({
  item,
  onError,
}: {
  item: TranscriptItem
  onError: (message: string) => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`reasoning-item ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="reasoning-summary-button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {item.status === 'inProgress' ? (
          <LoaderCircle size={13} className="spin" />
        ) : (
          <Check size={13} />
        )}
        <span>{item.status === 'inProgress' ? 'Thinking' : 'Reasoning summary'}</span>
        <ChevronRight size={12} className={`details-chevron ${open ? 'open' : ''}`} />
      </button>
      <div className={`sidebar-collapse ${open ? 'open' : ''}`}>
        <div className="sidebar-collapse-inner">
          <MessageMarkdown
            text={
              item.summary?.join('\n\n') ||
              item.text ||
              'No reasoning text was provided by the model.'
            }
            onError={onError}
          />
        </div>
      </div>
    </div>
  )
}

function formatArguments(raw: string) {
  try {
    return JSON.stringify(JSON.parse(raw), null, 2)
  } catch {
    return raw
  }
}

function ApprovalCard({
  approval,
  onError,
}: {
  approval: Approval
  onError: (message: string) => void
}) {
  const [pending, setPending] = useState(false)
  return (
    <section className="approval-card" aria-label="Approval required">
      <div className="request-heading">
        <span className="request-icon">
          <ShieldCheck size={18} />
        </span>
        <div>
          <h3>Approval required</h3>
          <p>Muse would like permission to use {approval.toolName}.</p>
        </div>
      </div>
      <pre>
        {approval.subject.command ||
          approval.subject.path ||
          approval.subject.host ||
          approval.subject.target ||
          approval.rawArgs}
      </pre>
      <div className="approval-choices">
        {approval.availableChoices.map((choice) => (
          <button
            key={choice.choiceId}
            title={
              choice.rulePreview ||
              `Applies ${choice.scope === 'once' ? 'once' : choice.scope === 'session' ? 'for this session' : 'as a saved policy'}`
            }
            className={
              choice.decision.startsWith('approved') ? 'button primary' : 'button secondary'
            }
            disabled={pending}
            onClick={() => {
              setPending(true)
              void window.muse
                .approve(approval.sessionId, approval.approvalId, choice.choiceId)
                .catch((error: Error) => onError(error.message))
                .finally(() => setPending(false))
            }}
          >
            {choice.label}
            {choice.scope === 'localPersistent' && (
              <span className="choice-scope">Saves a rule</span>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

function QuestionCard({
  request,
  onError,
}: {
  request: UserQuestion
  onError: (message: string) => void
}) {
  const [answers, setAnswers] = useState<Record<string, QuestionAnswer>>({})
  const [pending, setPending] = useState(false)
  const complete = request.questions.every((question) => {
    const answer = answers[question.id]
    if (!answer) return false
    if (answer.freeText?.trim() || answer.selectedLabel) return true
    const count = answer.selectedLabels?.length ?? 0
    return (
      question.selection.mode === 'multiple' &&
      count >= (question.selection.minSelections ?? 1) &&
      count <= (question.selection.maxSelections ?? Infinity)
    )
  })
  return (
    <form
      className="question-card"
      onSubmit={(event) => {
        event.preventDefault()
        setPending(true)
        void window.muse
          .answer(request.sessionId, request.userInputId, Object.values(answers))
          .catch((error: Error) => onError(error.message))
          .finally(() => setPending(false))
      }}
    >
      <div className="request-heading">
        <span className="request-icon">
          <CircleHelp size={18} />
        </span>
        <div>
          <h3>Input required</h3>
          <p>Muse has a question before continuing.</p>
        </div>
      </div>
      {request.questions.map((question) => (
        <fieldset key={question.id}>
          <legend>{question.question}</legend>
          <div className="question-options">
            {question.options.map((option) => {
              const selected =
                answers[question.id]?.selectedLabel === option.label ||
                answers[question.id]?.selectedLabels?.includes(option.label)
              return (
                <label
                  className={`question-option ${selected ? 'selected' : ''}`}
                  key={option.label}
                >
                  <input
                    type={question.selection.mode === 'multiple' ? 'checkbox' : 'radio'}
                    name={question.id}
                    checked={Boolean(selected)}
                    onChange={() =>
                      setAnswers((current) => {
                        if (question.selection.mode === 'single')
                          return {
                            ...current,
                            [question.id]: { questionId: question.id, selectedLabel: option.label },
                          }
                        const labels = current[question.id]?.selectedLabels || []
                        return {
                          ...current,
                          [question.id]: {
                            questionId: question.id,
                            selectedLabels: selected
                              ? labels.filter((label) => label !== option.label)
                              : [...labels, option.label],
                          },
                        }
                      })
                    }
                  />
                  <span>
                    <strong>{option.label}</strong>
                    {option.description && <small>{option.description}</small>}
                  </span>
                </label>
              )
            })}
          </div>
          <input
            className="text-input"
            aria-label={`Your answer: ${question.header}`}
            placeholder="Or write your own answer…"
            maxLength={500}
            value={answers[question.id]?.freeText || ''}
            onChange={(event) =>
              setAnswers((current) => ({
                ...current,
                [question.id]: { questionId: question.id, freeText: event.target.value },
              }))
            }
          />
        </fieldset>
      ))}
      <div className="request-actions">
        <button
          type="button"
          className="button secondary"
          disabled={pending}
          onClick={() => {
            setPending(true)
            void window.muse
              .cancelQuestion(request.sessionId, request.userInputId)
              .catch((error: Error) => onError(error.message))
              .finally(() => setPending(false))
          }}
        >
          Skip question
        </button>
        <button type="submit" className="button primary" disabled={!complete || pending}>
          {pending ? 'Sending…' : 'Continue'}
        </button>
      </div>
    </form>
  )
}

export function Transcript({
  view,
  onError,
}: {
  view: SessionView
  onError: (message: string) => void
}) {
  const scroller = useRef<HTMLDivElement>(null)
  const following = useRef(true)
  const [showJump, setShowJump] = useState(false)
  useEffect(() => {
    if (following.current && scroller.current)
      scroller.current.scrollTop = scroller.current.scrollHeight
  }, [view])
  const items = view.items.filter((item) => !item.retracted && !isInternalActivity(item))
  const groupedItems: (
    { type: 'single'; item: TranscriptItem } | { type: 'toolGroup'; items: TranscriptItem[] }
  )[] = []
  for (const item of items) {
    const isCompletedTool =
      !['userMessage', 'agentMessage', 'reasoning'].includes(item.kind) &&
      item.status === 'completed'
    const last = groupedItems[groupedItems.length - 1]
    if (isCompletedTool && last?.type === 'toolGroup') {
      last.items.push(item)
    } else if (
      isCompletedTool &&
      last?.type === 'single' &&
      !['userMessage', 'agentMessage', 'reasoning'].includes(last.item.kind) &&
      last.item.status === 'completed'
    ) {
      groupedItems[groupedItems.length - 1] = { type: 'toolGroup', items: [last.item, item] }
    } else {
      groupedItems.push({ type: 'single', item })
    }
  }
  return (
    <div className="transcript-wrap">
      <div
        className="transcript-scroll"
        ref={scroller}
        onScroll={() => {
          const node = scroller.current
          if (!node) return
          following.current = node.scrollHeight - node.scrollTop - node.clientHeight < 110
          setShowJump(!following.current)
        }}
      >
        <div className="transcript" role="log" aria-label="Conversation" aria-live="off">
          <div className="conversation-beginning">
            <MuseMark size={23} />
            <span>Conversation with Muse</span>
          </div>
          {view.historyNotice && <div className="inline-notice">{view.historyNotice}</div>}
          {groupedItems.map((entry) => {
            if (entry.type === 'toolGroup' && entry.items.length >= 3) {
              return (
                <ToolGroup
                  key={entry.items[0].itemId}
                  items={entry.items}
                  sessionId={view.session.sessionId}
                  onError={onError}
                />
              )
            }
            const list = entry.type === 'toolGroup' ? entry.items : [entry.item]
            return list.map((item) => {
              if (item.kind === 'userMessage') {
                const userText =
                  cleanMessageText(item.displayText || item.text) ||
                  item.displayText ||
                  item.text ||
                  ''
                return (
                  <article key={item.itemId} className="message user-message">
                    <div className="message-heading">
                      <span className="avatar user-avatar">Y</span>
                      <strong>You</strong>
                      {item.recordedAt && (
                        <time>
                          {new Date(item.recordedAt).toLocaleTimeString(undefined, {
                            hour: 'numeric',
                            minute: '2-digit',
                          })}
                        </time>
                      )}
                      <CopyButton text={userText} />
                    </div>
                    <div className="user-message-text">{userText}</div>
                  </article>
                )
              }
              if (item.kind === 'agentMessage')
                return (
                  <article key={item.itemId} className="message agent-message">
                    <div className="message-heading">
                      <span className="avatar muse-avatar">
                        <MuseMark size={26} />
                      </span>
                      <strong>Muse</strong>
                      {item.status === 'inProgress' && (
                        <span className="streaming-label">Composing</span>
                      )}
                      <CopyButton text={item.text || ''} />
                    </div>
                    <MessageMarkdown
                      text={item.text || (item.status === 'inProgress' ? '…' : '')}
                      onError={onError}
                    />
                  </article>
                )
              if (item.kind === 'reasoning')
                return <ReasoningItem key={item.itemId} item={item} onError={onError} />
              return (
                <ToolItem
                  key={item.itemId}
                  item={item}
                  sessionId={view.session.sessionId}
                  onError={onError}
                />
              )
            })
          })}
          {view.approvals.map((approval) => (
            <ApprovalCard
              key={`${approval.approvalId}:${approval.currentRequirementId.sourceIndex}`}
              approval={approval}
              onError={onError}
            />
          ))}
          {view.questions.map((request) => (
            <QuestionCard key={request.userInputId} request={request} onError={onError} />
          ))}
          {view.error && (
            <div className="inline-error" role="alert">
              <strong>Muse couldn’t finish this turn.</strong>
              <p>{view.error}</p>
              <span>Your conversation is saved. You can send a follow-up or reconnect.</span>
            </div>
          )}
          {items.length === 0 && (
            <div className="empty-conversation">
              <MuseMark size={48} />
              <h2>Start a conversation</h2>
              <p>Ask a question or describe what you want to build.</p>
            </div>
          )}
        </div>
      </div>
      {showJump && (
        <IconButton
          className="jump-button"
          label="Jump to latest message"
          onClick={() => {
            following.current = true
            scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
            setShowJump(false)
          }}
        >
          <ArrowDown size={17} />
        </IconButton>
      )}
    </div>
  )
}

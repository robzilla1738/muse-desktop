import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Check, ChevronDown } from 'lucide-react'

export function Select({
  label,
  value,
  options,
  onChange,
  disabled,
  icon,
  className = '',
}: {
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  disabled?: boolean
  icon?: ReactNode
  className?: string
}) {
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const popup = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const search = useRef({ text: '', at: 0 })
  const selected = options.findIndex((option) => option.value === value)

  const position = () => {
    if (!trigger.current || !popup.current) return
    const rect = trigger.current.getBoundingClientRect()
    const menu = popup.current
    menu.style.minWidth = `${Math.max(rect.width, 200)}px`
    menu.style.maxHeight = `${Math.min(420, Math.max(rect.top, innerHeight - rect.bottom) - 16)}px`
    const above = innerHeight - rect.bottom < menu.offsetHeight + 12
    menu.style.top = `${Math.max(8, above ? rect.top - menu.offsetHeight - 8 : rect.bottom + 8)}px`
    menu.style.left = `${Math.max(8, Math.min(rect.left, innerWidth - menu.offsetWidth - 8))}px`
  }
  const show = (index = Math.max(0, selected)) => {
    setActive(index)
    popup.current?.showPopover()
    setOpen(true)
    position()
  }
  const choose = (index: number) => {
    if (options[index]) onChange(options[index].value)
    popup.current?.hidePopover()
    trigger.current?.focus()
  }
  useEffect(() => {
    if (!open) return
    position()
    window.addEventListener('resize', position)
    const close = (event: Event) => {
      if (!popup.current?.contains(event.target as Node)) popup.current?.hidePopover()
    }
    window.addEventListener('scroll', close, true)
    return () => {
      window.removeEventListener('resize', position)
      window.removeEventListener('scroll', close, true)
    }
  }, [open])
  useEffect(() => {
    if (open) document.getElementById(`${id}-${active}`)?.scrollIntoView({ block: 'nearest' })
  }, [active, open, id])
  useEffect(() => {
    const reveal = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== label || disabled) return
      trigger.current?.focus()
      show()
    }
    window.addEventListener('muse:select', reveal)
    return () => window.removeEventListener('muse:select', reveal)
  })

  return (
    <div className={`muse-select ${className}`}>
      <button
        ref={trigger}
        type="button"
        className="select-control"
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={id}
        aria-activedescendant={open ? `${id}-${active}` : undefined}
        disabled={disabled}
        onClick={() => (open ? popup.current?.hidePopover() : show())}
        onKeyDown={(event) => {
          if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
            event.preventDefault()
            const index =
              event.key === 'Home'
                ? 0
                : event.key === 'End'
                  ? options.length - 1
                  : Math.max(
                      0,
                      Math.min(options.length - 1, active + (event.key === 'ArrowDown' ? 1 : -1)),
                    )
            if (open) setActive(index)
            else show(event.key === 'Home' || event.key === 'End' ? index : Math.max(0, selected))
          } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            if (open) choose(active)
            else show()
          } else if (event.key === 'Escape' || event.key === 'Tab') {
            if (event.key === 'Escape' && open) {
              event.preventDefault()
              event.stopPropagation()
            }
            popup.current?.hidePopover()
          } else if (event.key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey) {
            search.current = {
              text:
                (Date.now() - search.current.at < 700 ? search.current.text : '') +
                event.key.toLowerCase(),
              at: Date.now(),
            }
            const index = options.findIndex((option) =>
              option.label.toLowerCase().startsWith(search.current.text),
            )
            if (index >= 0) {
              if (open) setActive(index)
              else show(index)
            }
          }
        }}
      >
        {icon}
        <span className="select-value">{options[selected]?.label || value}</span>
        <ChevronDown size={13} className="select-chevron" />
      </button>
      <div
        id={id}
        ref={popup}
        className="select-popover"
        popover="auto"
        role="listbox"
        aria-label={label}
        onToggle={(event) => setOpen(event.newState === 'open')}
      >
        <div className="select-heading">{label}</div>
        {options.map((option, index) => (
          <div
            id={`${id}-${index}`}
            key={option.value}
            role="option"
            aria-selected={option.value === value}
            className={`select-option ${index === active ? 'highlighted' : ''}`}
            onPointerMove={() => setActive(index)}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => choose(index)}
          >
            <Check
              size={15}
              style={{ visibility: option.value === value ? 'visible' : 'hidden' }}
            />
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

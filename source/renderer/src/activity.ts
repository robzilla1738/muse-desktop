import type { TranscriptItem } from '../../shared/protocol'

export function isInternalActivity(item: TranscriptItem) {
  return item.kind === 'reminderChild' || item.kind === 'hookRun'
}

export function activityTitle(item: TranscriptItem) {
  if (item.kind === 'reminderChild')
    return item.reminderAgentId ? `Reminder · ${item.reminderAgentId}` : 'Background reminder'
  if (item.kind === 'hookRun') return item.label || 'CLI hook'
  return (
    item.tool ||
    item.label ||
    item.kind.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())
  )
}

export function isBackgroundOnly(items: TranscriptItem[]) {
  const active = items.filter((item) => !item.retracted && item.status === 'inProgress')
  return active.length > 0 && active.every(isInternalActivity)
}

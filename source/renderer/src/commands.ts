export const composerCommands = [
  { name: 'clear', description: 'Start a new conversation; keep saved history' },
  { name: 'new', description: 'Start a new conversation' },
  { name: 'voice', description: 'Start voice input' },
  { name: 'model', description: 'Choose a model, or /model <model-id>' },
  { name: 'effort', description: 'Choose reasoning effort, or /effort <level>' },
  { name: 'compact', description: 'Compact this conversation with Muse Code' },
  { name: 'rename', description: '/rename <conversation name>' },
  { name: 'stop', description: 'Stop Muse’s active turn' },
  { name: 'settings', description: 'Open desktop settings' },
  { name: 'help', description: 'Open the guide and CLI compatibility information' },
]

export function parseComposerCommand(text: string) {
  const match = /^\/([a-z-]+)(?:\s+([\s\S]*))?$/i.exec(text.trim())
  return match ? { name: match[1].toLowerCase(), argument: match[2]?.trim() || '' } : null
}

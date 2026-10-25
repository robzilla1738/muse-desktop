export const VOICE_SAMPLE_RATE = 16000
export const MAX_VOICE_SECONDS = 120
export const MAX_VOICE_BYTES = 44 + VOICE_SAMPLE_RATE * MAX_VOICE_SECONDS * 2

/** Mono PCM WAV: the portable audio format accepted by `muse voice transcribe`. */
export function encodeVoiceWav(channels: Float32Array[], sampleRate: number): Uint8Array {
  if (!channels.length || sampleRate < VOICE_SAMPLE_RATE || !Number.isFinite(sampleRate))
    throw new Error('The microphone returned an unsupported audio format.')
  const length = Math.floor((channels[0].length * VOICE_SAMPLE_RATE) / sampleRate)
  if (length < VOICE_SAMPLE_RATE / 5)
    throw new Error('Record at least a moment of speech and try again.')
  if (length > VOICE_SAMPLE_RATE * MAX_VOICE_SECONDS)
    throw new Error('Voice recordings can be up to two minutes.')
  const bytes = new Uint8Array(44 + length * 2)
  const view = new DataView(bytes.buffer)
  const text = (offset: number, value: string) =>
    [...value].forEach((char, i) => view.setUint8(offset + i, char.charCodeAt(0)))
  text(0, 'RIFF')
  view.setUint32(4, bytes.length - 8, true)
  text(8, 'WAVE')
  text(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, 1, true)
  view.setUint32(24, VOICE_SAMPLE_RATE, true)
  view.setUint32(28, VOICE_SAMPLE_RATE * 2, true)
  view.setUint16(32, 2, true)
  view.setUint16(34, 16, true)
  text(36, 'data')
  view.setUint32(40, length * 2, true)
  const ratio = sampleRate / VOICE_SAMPLE_RATE
  for (let i = 0; i < length; i++) {
    const start = Math.floor(i * ratio)
    const end = Math.min(channels[0].length, Math.floor((i + 1) * ratio))
    let sample = 0
    for (const channel of channels) for (let j = start; j < end; j++) sample += channel[j] || 0
    sample = Math.max(-1, Math.min(1, sample / ((end - start) * channels.length)))
    view.setInt16(44 + i * 2, Math.round(sample * (sample < 0 ? 32768 : 32767)), true)
  }
  return bytes
}

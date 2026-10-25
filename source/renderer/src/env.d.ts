import type { DesktopAPI } from '../../shared/protocol'

declare global {
  interface Window {
    muse: DesktopAPI
  }
  /** Set by the embed build configs: true for standalone pages, false for the
   *  renderer-extension bundle (which must not mount into the host's #root). */
  const __MUSE_STANDALONE__: boolean
}

export {}

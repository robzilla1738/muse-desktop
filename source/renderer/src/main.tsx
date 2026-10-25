import { Component, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import cssText from './styles.css?inline'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state: { error: string | null } = { error: null }
  static getDerivedStateFromError(error: Error) {
    return { error: error.message }
  }
  render() {
    if (this.state.error)
      return (
        <div className="fatal-error">
          <img src="./icon.png" alt="Muse" />
          <h1>The workspace needs to reload.</h1>
          <p>
            The interface hit an unexpected problem. Your Muse conversations are still saved by the
            CLI.
          </p>
          <pre>{this.state.error}</pre>
          <button className="button primary" onClick={() => location.reload()}>
            Reopen the workspace
          </button>
        </div>
      )
    return this.props.children
  }
}

/**
 * Stylesheet text, so a host that embeds this app (the PI-Desktop plugin
 * renderer extension) can scope it into a shadow root instead of letting these
 * rules leak into the host's own document.
 */
export const styles: string = cssText

/** Mounts the interface into `container`; returns an unmount function. */
export function mount(container: HTMLElement): () => void {
  const root = createRoot(container)
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  )
  return () => root.unmount()
}

// Standalone pages (the plugin's own window/view) boot themselves. The
// renderer-extension build must NOT do this: it would find the host's own
// #root and render Muse on top of PI-Desktop.
const standaloneBuild = __MUSE_STANDALONE__
if (standaloneBuild) {
  const target = document.getElementById('root')
  if (target) mount(target)
}

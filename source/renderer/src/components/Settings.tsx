import { useEffect, useState } from 'react'
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FolderSearch,
  Leaf,
  Monitor,
  Moon,
  Palette,
  Smile,
  RefreshCw,
  Sun,
  Terminal,
} from 'lucide-react'
import type { ConnectionStatus, Preferences, Theme, UpdateStatus } from '../../../shared/protocol'
import { Dialog, MuseMark } from './Primitives'

export const themes: { id: Theme; label: string; description: string; icon: typeof Sun }[] = [
  { id: 'muse', label: 'Muse', description: 'Electric blue', icon: Palette },
  { id: 'daylight', label: 'Daylight', description: 'Warm and light', icon: Sun },
  { id: 'moonlight', label: 'Moonlight', description: 'Soft and dark', icon: Moon },
  { id: 'grove', label: 'Grove', description: 'Natural green', icon: Leaf },
  { id: 'plush', label: 'Plush', description: 'A playful close-up', icon: Smile },
]

export function Settings({
  preferences,
  status,
  version,
  platform = 'darwin',
  onSave,
  onClose,
  onError,
  onReconnect,
  initialTab,
}: {
  preferences: Preferences
  status: ConnectionStatus
  version: string
  platform?: string
  onSave: (patch: Partial<Preferences>) => void
  onClose: () => void
  onError: (message: string) => void
  onReconnect: () => void
  initialTab: 'appearance' | 'connection'
}) {
  const [tab, setTab] = useState<'appearance' | 'connection' | 'about'>(initialTab)
  const [cliPath, setCliPath] = useState(preferences.cliPath)
  return (
    <Dialog title="Settings" onClose={onClose} className="settings-dialog">
      <div className="settings-layout">
        <nav className="settings-nav" aria-label="Settings sections">
          <button
            className={tab === 'appearance' ? 'selected' : ''}
            onClick={() => setTab('appearance')}
          >
            <Palette size={16} />
            Appearance
          </button>
          <button
            className={tab === 'connection' ? 'selected' : ''}
            onClick={() => setTab('connection')}
          >
            <Terminal size={16} />
            Muse Code
          </button>
          <button className={tab === 'about' ? 'selected' : ''} onClick={() => setTab('about')}>
            <MuseMark size={16} />
            About
          </button>
        </nav>
        <div className="settings-content">
          {tab === 'appearance' && (
            <>
              <div className="settings-section-heading">
                <h3>Appearance</h3>
                <p>Choose a theme and adjust your workspace.</p>
              </div>
              <div className="theme-grid">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    className={`theme-card ${preferences.theme === theme.id ? 'selected' : ''}`}
                    onClick={() => onSave({ theme: theme.id })}
                    aria-pressed={preferences.theme === theme.id}
                  >
                    <div
                      className={`theme-thumbnail ${theme.id === 'muse' ? 'muse-thumbnail' : ''}`}
                    >
                      <img
                        src={theme.id === 'muse' ? './muse-logo.png' : `./themes/${theme.id}.png`}
                        alt={`${theme.label} background`}
                      />
                      {preferences.theme === theme.id && (
                        <span className="theme-check">
                          <Check size={13} />
                        </span>
                      )}
                    </div>
                    <span className="theme-name">
                      <theme.icon size={14} />
                      {theme.label}
                    </span>
                    <span className="theme-description">{theme.description}</span>
                  </button>
                ))}
              </div>
              <label className="setting-row">
                <div>
                  <span className="setting-label">
                    <Monitor size={16} />
                    {platform === 'darwin' ? 'Follow macOS appearance' : 'Follow system appearance'}
                  </span>
                  <small>Use Daylight in light mode and Moonlight in dark mode.</small>
                </div>
                <input
                  className="switch"
                  type="checkbox"
                  checked={preferences.theme === 'system'}
                  onChange={(event) =>
                    onSave({ theme: event.target.checked ? 'system' : 'daylight' })
                  }
                />
              </label>
              <div className="setting-row">
                <div>
                  <span className="setting-label">Background intensity</span>
                  <small>Adjust the visibility of the logo and illustrations.</small>
                </div>
                <div className="range-setting">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    aria-label="Background intensity"
                    value={preferences.backgroundIntensity}
                    onChange={(event) =>
                      onSave({ backgroundIntensity: Number(event.target.value) })
                    }
                  />
                  <span>{preferences.backgroundIntensity}%</span>
                </div>
              </div>
              <div className="setting-row">
                <div>
                  <span className="setting-label">Text size</span>
                  <small>Adjust the size of conversation text.</small>
                </div>
                <div className="segmented">
                  {(['compact', 'comfortable', 'large'] as const).map((size, i) => (
                    <button
                      key={size}
                      aria-label={`${size} text`}
                      aria-pressed={preferences.fontSize === size}
                      className={preferences.fontSize === size ? 'selected' : ''}
                      onClick={() => onSave({ fontSize: size })}
                      style={{ fontSize: 14 + i * 2 }}
                    >
                      A
                    </button>
                  ))}
                </div>
              </div>
              <label className="setting-row">
                <div>
                  <span className="setting-label">Reduce motion</span>
                  <small>Reduce transitions and animations.</small>
                </div>
                <input
                  type="checkbox"
                  className="switch"
                  checked={preferences.reduceMotion}
                  onChange={(event) => onSave({ reduceMotion: event.target.checked })}
                />
              </label>
              <label className="setting-row">
                <div>
                  <span className="setting-label">Completion notifications</span>
                  <small>Show a notification when a turn finishes in the background.</small>
                </div>
                <input
                  type="checkbox"
                  className="switch"
                  checked={preferences.notifyOnCompletion}
                  onChange={(event) => onSave({ notifyOnCompletion: event.target.checked })}
                />
              </label>
            </>
          )}
          {tab === 'connection' && (
            <>
              <div className="settings-section-heading">
                <h3>Muse Code connection</h3>
                <p>
                  Muse Desktop runs your installed CLI and uses its existing sign-in, models, and
                  saved conversations.
                </p>
              </div>
              <div className={`connection-card ${status.state}`}>
                <CheckCircle2 size={20} />
                <div>
                  <strong>
                    {status.state === 'ready'
                      ? 'Muse Code is connected'
                      : status.state === 'connecting'
                        ? 'Connecting to Muse Code…'
                        : 'Muse Code is disconnected'}
                  </strong>
                  <span>{status.version ? `Version ${status.version}` : status.message}</span>
                </div>
                <button
                  className="icon-button"
                  aria-label="Reconnect to Muse Code"
                  onClick={onReconnect}
                >
                  <RefreshCw size={16} />
                </button>
              </div>
              {status.path && <p className="path-readout">{status.path}</p>}
              {status.fingerprintWarning && (
                <p className="inline-notice">{status.fingerprintWarning}</p>
              )}
              <label className="field-label" htmlFor="cli-path">
                Custom executable path
              </label>
              <div className="input-with-button">
                <input
                  id="cli-path"
                  className="text-input"
                  placeholder="Automatic detection (recommended)"
                  value={cliPath}
                  onChange={(event) => setCliPath(event.target.value)}
                />
                <button
                  className="button secondary"
                  onClick={() => {
                    void window.muse
                      .chooseCli()
                      .then((path) => {
                        if (path) setCliPath(path)
                      })
                      .catch((error: Error) => onError(error.message))
                  }}
                >
                  <FolderSearch size={15} />
                  Browse
                </button>
              </div>
              <p className="field-hint">
                Leave empty to find Muse through your login shell and standard installation
                locations.
              </p>
              <button
                className="button primary"
                onClick={async () => {
                  try {
                    await window.muse.savePreferences({ cliPath: cliPath.trim() })
                    onReconnect()
                  } catch (error) {
                    onError(error instanceof Error ? error.message : String(error))
                  }
                }}
              >
                Save & reconnect
              </button>
              <div className="setup-instructions">
                <h4>New to Muse Code?</h4>
                <p>
                  Install Muse Code using the official instructions, then run{' '}
                  <code>muse login</code> in Terminal. Your credentials stay with the CLI.
                </p>
                <button
                  className="text-button"
                  onClick={() => {
                    void window.muse
                      .openExternal('https://dev.meta.ai/docs/muse-code')
                      .catch((error: Error) => onError(error.message))
                  }}
                >
                  Open installation guide <ExternalLink size={13} />
                </button>
              </div>
            </>
          )}
          {tab === 'about' && (
            <div className="about-settings">
              <img src="./icon.png" alt="Muse Desktop mascot" />
              <h3>Muse Desktop</h3>
              <span className="version-pill">Version {version}</span>
              <p>An unofficial, open-source companion for Muse Code by Robert Courson.</p>
              <UpdateSettings platform={platform} onError={onError} />
              <div className="about-facts">
                <span>
                  {platform === 'win32'
                    ? 'Built for Windows'
                    : platform === 'linux'
                      ? 'Built for Linux'
                      : 'Built for macOS'}{' '}
                  <Check size={13} />
                </span>
                <span>
                  Your CLI, your credentials <Check size={13} />
                </span>
                <span>
                  No desktop telemetry <Check size={13} />
                </span>
                <span>
                  MIT licensed source <Check size={13} />
                </span>
              </div>
              <p className="affiliation-note">
                Unofficial community software. Not affiliated with, endorsed by, sponsored by, or
                supported by Meta. Muse Code is a product of Meta. Model requests and tools are
                handled by your installed CLI under its own settings.
              </p>
              <button
                className="text-button"
                onClick={() => {
                  void window.muse
                    .openExternal('https://github.com/robzilla1738/muse-desktop')
                    .catch((error: Error) => onError(error.message))
                }}
              >
                Source & issue tracker <ExternalLink size={13} />
              </button>
              <button
                className="text-button"
                onClick={() => {
                  void window.muse
                    .openExternal('https://meta-models.github.io/muse-code-sdk/')
                    .catch((error: Error) => onError(error.message))
                }}
              >
                Built with the official Muse SDK <ChevronRight size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  )
}

function UpdateSettings({
  platform = 'darwin',
  onError,
}: {
  platform?: string
  onError: (message: string) => void
}) {
  const [status, setStatus] = useState<UpdateStatus>()
  useEffect(() => {
    let active = true
    const refresh = () => {
      void window.muse
        .updateStatus()
        .then((value) => {
          if (active) setStatus(value)
        })
        .catch((error: Error) => {
          if (active)
            setStatus({
              available: false,
              canCheck: false,
              automaticChecks: false,
              message: error.message,
            })
        })
    }
    refresh()
    const timer = window.setInterval(refresh, 2000)
    return () => {
      active = false
      window.clearInterval(timer)
    }
  }, [])
  return (
    <section className="update-settings" aria-label="Software updates">
      <div className="setting-row">
        <div>
          <span className="setting-label">Software updates</span>
          <small>
            {platform === 'darwin'
              ? 'Signed updates via Sparkle. You choose when to install.'
              : 'Updates via GitHub Releases. You choose when to install.'}
          </small>
        </div>
        <button
          className="button secondary"
          disabled={!status?.canCheck}
          onClick={() => {
            void window.muse
              .checkForUpdates()
              .then(setStatus)
              .catch((error: Error) => onError(error.message))
          }}
        >
          Check for updates
        </button>
      </div>
      {status?.available && (
        <label className="setting-row">
          <div>
            <span className="setting-label">Check automatically</span>
            <small>Check GitHub daily for new releases.</small>
          </div>
          <input
            className="switch"
            type="checkbox"
            checked={status.automaticChecks}
            onChange={(event) => {
              void window.muse
                .setAutomaticUpdateChecks(event.target.checked)
                .then(setStatus)
                .catch((error: Error) => onError(error.message))
            }}
          />
        </label>
      )}
      {status?.message && <p className="field-hint">{status.message}</p>}
    </section>
  )
}

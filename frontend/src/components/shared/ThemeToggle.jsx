import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { getInitialMode, applyMode } from '../../hooks/usePageTheme.js'

/**
 * ThemeToggle — pill-style dark/light toggle button.
 * Gold gradient sliding knob. Persists to localStorage.
 */
export default function ThemeToggle() {
  const [mode, setMode] = useState(getInitialMode())

  function toggle() {
    const next = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
    applyMode(next)
  }

  const isDark = mode === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.375rem 0.75rem',
        borderRadius: '9999px',
        border: '1px solid var(--hairline)',
        background: 'var(--surface-soft)',
        cursor: 'pointer',
        transition: 'all 300ms',
        color: 'var(--foreground)',
        fontSize: '0.75rem',
        fontWeight: 500,
      }}
    >
      <div
        style={{
          width: '1.5rem',
          height: '1.5rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--navy-deep)',
          transition: 'transform 300ms',
        }}
      >
        {isDark ? <Moon size={12} /> : <Sun size={12} />}
      </div>
      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}

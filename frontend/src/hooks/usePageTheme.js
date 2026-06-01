import { useEffect } from 'react'

/**
 * usePageTheme — sets the data-theme attribute on <html> for the current page.
 * Each page calls this to switch the active color palette.
 * Themes: "home" | "ds" | "it" | "crm" | "inc" | "outcomes"
 */
export function usePageTheme(theme) {
  useEffect(() => {
    const html = document.documentElement
    const prev = html.getAttribute('data-theme')
    html.setAttribute('data-theme', theme)
    return () => {
      if (prev) html.setAttribute('data-theme', prev)
      else html.removeAttribute('data-theme')
    }
  }, [theme])
}

/**
 * getInitialMode — reads saved mode from localStorage, defaults to 'dark'
 */
export function getInitialMode() {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('lotlite-mode')
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

/**
 * applyMode — toggles dark/light class on <html> and saves to localStorage
 */
export function applyMode(mode) {
  const html = document.documentElement
  html.classList.toggle('dark', mode === 'dark')
  html.classList.toggle('light', mode === 'light')
  try {
    localStorage.setItem('lotlite-mode', mode)
  } catch {
    // ignore
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('lotlite-mode-change', { detail: mode }))
  }
}

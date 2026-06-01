import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import WhatsAppWidget from '../shared/WhatsAppWidget.jsx'
import { applyMode, getInitialMode } from '../../hooks/usePageTheme.js'

export default function Layout() {
  // Apply saved mode on mount
  useEffect(() => {
    applyMode(getInitialMode())
  }, [])

  // Scroll to top on route change
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}

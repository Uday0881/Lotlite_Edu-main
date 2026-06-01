import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import ThemeToggle from '../shared/ThemeToggle.jsx'
import ApplyDialog from '../shared/ApplyDialog.jsx'
import { getInitialMode } from '../../hooks/usePageTheme.js'

const LOTLITE_GOLD = '#FFC500'

const PG_PROGRAMS = [
  {
    title: 'MBA',
    subtitle: '24 Month full-time program',
    path: '/programmes/pg/mba',
  },
  {
    title: 'MCA',
    subtitle: '24 Month full-time program',
    path: '/programmes/pg/msc-computer-applications',
  },
]

function MbaProgramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke={LOTLITE_GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" stroke={LOTLITE_GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function McaProgramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke={LOTLITE_GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8M12 17v4M7 8h4M7 11h6" stroke={LOTLITE_GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PgProgramCard({ program, icon: Icon }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={program.path}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.875rem',
        padding: '1.25rem',
        borderRadius: '12px',
        backgroundColor: hovered ? '#1a1a1a' : '#121212',
        border: `1px solid ${hovered ? LOTLITE_GOLD : '#2a2a2a'}`,
        textDecoration: 'none',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <Icon />
      <div>
        <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>{program.title}</div>
        <div style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: '#B0B0B0', lineHeight: 1.4 }}>
          {program.subtitle}
        </div>
      </div>
    </Link>
  )
}

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [themeMode, setThemeMode] = useState(getInitialMode())
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)

    const onModeChange = (event) => {
      const nextMode = event?.detail || document.documentElement.classList.contains('light') ? 'light' : 'dark'
      setThemeMode(nextMode)
    }
    window.addEventListener('lotlite-mode-change', onModeChange)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('lotlite-mode-change', onModeChange)
    }
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 300ms',
        ...((scrolled || themeMode === 'light')
          ? {
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              borderBottom: '1px solid var(--hairline)',
            }
          : { background: 'transparent' }),
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <div
            style={{
              height: '2rem',
              width: '2rem',
              borderRadius: '0.375rem',
              background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--navy-deep)',
              fontWeight: 900,
              fontSize: '1rem',
            }}
          >
            L
          </div>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>
            Lotlite{' '}
            <span style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}>
              School of Real Estate
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="lg-nav">
          <style>{`
            @media (min-width: 1024px) { .lg-nav { display: flex !important; align-items: center; gap: 0.25rem; } }
            @media (max-width: 1023px) { .lg-nav { display: none !important; } }
          `}</style>

          {/* PG Programs Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                color: 'var(--foreground)',
                opacity: 0.9,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              PG Programs <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  paddingTop: '0.75rem',
                  width: '520px',
                  animation: 'fade-in 0.2s ease-out',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#000000',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.5)',
                    border: '1px solid #2a2a2a',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#B0B0B0',
                      marginBottom: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    PROGRAMMES
                  </div>
                  <div style={{ display: 'flex', gap: '0.875rem' }}>
                    <PgProgramCard program={PG_PROGRAMS[0]} icon={MbaProgramIcon} />
                    <PgProgramCard program={PG_PROGRAMS[1]} icon={McaProgramIcon} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {[
            { to: '/vision', label: 'The Vision' },
            { to: '/outcomes', label: 'Outcomes' },
            { to: '/incubation', label: 'Incubation' },
            { to: '/contact', label: 'Contact Us' },
          ].map((item) => {
            const isActive = location.pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  color: isActive ? 'var(--gold)' : 'var(--foreground)',
                  opacity: isActive ? 1 : 0.9,
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle />
          <ApplyDialog>
            <button
              className="sm-apply-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                borderRadius: '0.375rem',
                background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
                color: 'var(--navy-deep)',
                fontSize: '0.875rem',
                fontWeight: 700,
                boxShadow: 'var(--shadow-gold)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Apply Now
            </button>
          </ApplyDialog>
          <style>{`@media (min-width: 640px) { .sm-apply-btn { display: inline-flex !important; } }`}</style>

          {/* Hamburger */}
          <button
            className="lg-hidden-btn"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground)', padding: '0.25rem' }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <style>{`@media (min-width: 1024px) { .lg-hidden-btn { display: none !important; } }`}</style>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="bg-glass border-hairline"
          style={{ borderTop: '1px solid var(--hairline)', padding: '1rem 1.5rem', paddingBottom: '1.5rem', maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
        >
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', paddingTop: '0.5rem', marginBottom: '0.5rem' }}>
            PG Programs
          </div>
          <div style={{ marginBottom: '1rem', borderBottom: '1px solid var(--hairline)', paddingBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {PG_PROGRAMS.map((program) => (
              <Link
                key={program.path}
                to={program.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.875rem 1rem',
                  borderRadius: '12px',
                  backgroundColor: '#121212',
                  border: '1px solid #2a2a2a',
                  textDecoration: 'none',
                }}
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>{program.title}</div>
                <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#B0B0B0' }}>{program.subtitle}</div>
              </Link>
            ))}
          </div>

          {[
            { to: '/vision', label: 'The Vision' },
            { to: '/outcomes', label: 'Outcomes' },
            { to: '/incubation', label: 'Incubation' },
            { to: '/contact', label: 'Contact Us' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--foreground)', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
          <ApplyDialog>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                width: '100%',
                marginTop: '1rem',
                textAlign: 'center',
                padding: '0.625rem',
                borderRadius: '0.375rem',
                background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
                color: 'var(--navy-deep)',
                fontWeight: 700,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Apply Now
            </button>
          </ApplyDialog>
        </div>
      )}
    </header>
  )
}

import { Link } from 'react-router-dom'
import { memo, useState, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import ApplyDialog from '../shared/ApplyDialog.jsx'

// ============================================================
// Footer Typography & Visual Hierarchy — Premium & Authoritative
// ============================================================

/**
 * Footer Link Component — Memoized for performance
 * Smooth hover transition with gold accent
 */
const FooterLink = memo(({ to, label, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    style={{
      fontSize: '0.9375rem',
      color: 'rgba(255,255,255,0.75)',
      textDecoration: 'none',
      transition: 'color 280ms cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = 'var(--gold)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
    }}
  >
    {children || label}
  </Link>
))

FooterLink.displayName = 'FooterLink'

/**
 * Footer Section Heading — Improved contrast & typography
 */
const FooterHeading = memo(({ children }) => (
  <h3
    style={{
      fontSize: '0.8125rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.125em',
      color: 'rgba(255,255,255,0.95)',
      marginBottom: '1.25rem',
      lineHeight: 1.4,
    }}
  >
    {children}
  </h3>
))

FooterHeading.displayName = 'FooterHeading'

/**
 * Newsletter Form Component — Inline desktop layout
 */
const NewsletterForm = memo(() => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    try {
      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    } finally {
      setIsLoading(false)
    }
  }, [email])

  const successMessage = status === 'success'
  const errorMessage = status === 'error'

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', gap: '0.75rem' }} className="footer-newsletter-form">
        <style>{`
          @media(min-width:768px) {
            .footer-newsletter-form {
              flex-direction: row !important;
              align-items: center;
            }
          }
        `}</style>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '0.5rem',
            padding: '0.75rem 1rem',
            fontSize: '0.875rem',
            color: 'white',
            outline: 'none',
            transition: 'all 280ms cubic-bezier(0.16, 1, 0.3, 1)',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.1)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !email.trim()}
          style={{
            padding: '0.75rem 1.5rem',
            background: successMessage
              ? 'rgba(34,197,94,0.2)'
              : errorMessage
                ? 'rgba(239,68,68,0.2)'
                : 'rgba(255,215,0,0.12)',
            border: successMessage
              ? '1px solid rgba(34,197,94,0.4)'
              : errorMessage
                ? '1px solid rgba(239,68,68,0.4)'
                : '1px solid rgba(255,215,0,0.3)',
            borderRadius: '0.5rem',
            color: successMessage
              ? '#86efac'
              : errorMessage
                ? '#fca5a5'
                : 'var(--gold)',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'all 280ms cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            whiteSpace: 'nowrap',
            opacity: isLoading ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.background = successMessage
                ? 'rgba(34,197,94,0.3)'
                : errorMessage
                  ? 'rgba(239,68,68,0.3)'
                  : 'rgba(255,215,0,0.2)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = successMessage
              ? 'rgba(34,197,94,0.2)'
              : errorMessage
                ? 'rgba(239,68,68,0.2)'
                : 'rgba(255,215,0,0.12)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {successMessage ? '✓' : errorMessage ? '✕' : isLoading ? '…' : 'Subscribe'}
          {!successMessage && !errorMessage && !isLoading && <ArrowRight size={14} />}
        </button>
      </div>
      {successMessage && (
        <p style={{ fontSize: '0.8125rem', color: '#86efac' }}>
          Thanks! Check your inbox for insights.
        </p>
      )}
      {errorMessage && (
        <p style={{ fontSize: '0.8125rem', color: '#fca5a5' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
})

NewsletterForm.displayName = 'NewsletterForm'

// Footer is ALWAYS force-dark regardless of global light/dark mode
const darkVars = {
  '--background': 'oklch(0.14 0.03 250)',
  '--foreground': 'oklch(0.98 0.005 250)',
  '--muted-foreground': 'oklch(0.72 0.02 250)',
  '--hairline': 'oklch(1 0 0 / 0.08)',
  '--gold': 'oklch(0.82 0.16 78)',
  '--gold-bright': 'oklch(0.88 0.18 85)',
  '--navy-deep': 'oklch(0.10 0.025 250)',
  background: 'oklch(0.10 0.025 250)',
  color: 'oklch(0.98 0.005 250)',
}

const programmeLinks = [
  { to: '/programmes/ug/bba', label: 'BBA' },
  { to: '/programmes/ug/bca', label: 'BCA' },
  { to: '/programmes/pg/mba', label: 'MBA' },
  { to: '/programmes/pg/msc-data-science', label: 'MSc Data Science' },
  { to: '/programmes/pg/msc-computer-applications', label: 'MSc Computer Applications' },
  { to: '/programmes/crash-course', label: 'Crash Course' },
  { to: '/programmes/startups', label: 'Startups' },
]

export default function Footer() {
  return (
    <footer style={{ ...darkVars, marginTop: '8rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '5.5rem 1.5rem 4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '3.5rem',
        }}
        className="footer-grid"
      >
        <style>{`
          @media(min-width:768px) {
            .footer-grid {
              grid-template-columns: repeat(4, 1fr) !important;
              padding: 6rem 2rem 4rem !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
        {/* Brand Column */}
        <div style={{ gridColumn: 'span 2' }} className="footer-brand-col">
          <style>{`
            @media(min-width:768px) {
              .footer-brand-col {
                grid-column: span 1 !important;
              }
            }
          `}</style>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                height: '2.5rem',
                width: '2.5rem',
                borderRadius: '0.5rem',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--navy-deep)',
                fontWeight: 900,
                fontSize: '1.25rem',
                flexShrink: 0,
              }}
            >
              L
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 700, color: 'white', fontSize: '1.0625rem', lineHeight: 1 }}>
                Lotlite
              </span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                School of Real Estate
              </span>
            </div>
          </Link>
          <address
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              fontStyle: 'normal',
            }}
          >
            Baner Knowledge District
            <br />
            Pune, MH 411045 · India
            <br />
            <span style={{ marginTop: '0.5rem', display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
              Crafted for the next era of PropTech leaders.
            </span>
          </address>
        </div>

        {/* Programmes Column */}
        <div>
          <FooterHeading>Programmes</FooterHeading>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {programmeLinks.map((item) => (
              <FooterLink key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>
        </div>

        {/* Explore Column */}
        <div>
          <FooterHeading>Explore</FooterHeading>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <FooterLink to="/" label="Home" />
            <FooterLink to="/vision" label="The Vision" />
            <FooterLink to="/outcomes" label="Outcomes" />
            <FooterLink to="/contact" label="Contact" />
            <ApplyDialog>
              <button
                style={{
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.75)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textAlign: 'left',
                  transition: 'color 280ms cubic-bezier(0.16, 1, 0.3, 1)',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                }}
              >
                Apply Now
              </button>
            </ApplyDialog>
          </nav>
        </div>

        {/* Legal Column */}
        <div>
          <FooterHeading>Legal</FooterHeading>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <FooterLink to="/privacy" label="Privacy Policy" />
            <FooterLink to="/terms" label="Terms of Service" />
            <FooterLink to="/refund-policy" label="Refund Policy" />
            <FooterLink to="/code-of-conduct" label="Code of Conduct" />
          </nav>
        </div>

        {/* Newsletter Column */}
        <div style={{ gridColumn: 'span 2' }} className="footer-newsletter-col">
          <style>{`
            @media(min-width:768px) {
              .footer-newsletter-col {
                grid-column: span 2 !important;
              }
            }
          `}</style>
          <FooterHeading>Stay Updated</FooterHeading>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            Get PropTech insights and Lotlite updates delivered to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Footer Bottom Bar */}
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
          }}
          className="footer-bottom"
        >
          <style>{`
            @media(min-width:768px) {
              .footer-bottom {
                flex-direction: row !important;
                justify-content: space-between !important;
                align-items: center !important;
                gap: 2rem !important;
              }
            }
          `}</style>
          <p>© {new Date().getFullYear()} Lotlite School of Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

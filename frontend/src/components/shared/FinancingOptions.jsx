import { memo } from 'react'
import { Shield, Clock } from 'lucide-react'

/**
 * FinancingOptions — Premium institutional financing reassurance section
 * Compact, stylish, light/dark mode compatible
 */
export default memo(function FinancingOptions() {
  return (
    <section style={{ padding: '3rem 1rem', display: 'flex', justifyContent: 'center', width: '100%', fontFamily: 'inherit' }} aria-labelledby="financing-heading">
      <div style={{
        width: '100%',
        maxWidth: '72rem',
        background: 'var(--card)',
        borderRadius: '1.25rem',
        padding: '2rem',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--hairline)'
      }}>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
          
          {/* LEFT COLUMN — Text Content + CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="financing-left-col">
            <style>{`
              @media (min-width: 768px) {
                .financing-left-col { border-right: 1px solid var(--hairline); padding-right: 2rem; }
              }
              @media (max-width: 767px) {
                .financing-left-col { border-bottom: 1px solid var(--hairline); padding-bottom: 1.5rem; }
              }
            `}</style>
            <h2 id="financing-heading" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.2 }}>
              Financing & Accessibility
            </h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button style={{
                background: 'var(--primary)',
                color: 'var(--primary-foreground)',
                fontWeight: 600,
                padding: '0.6rem 1.2rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                flex: '1 1 auto',
                textAlign: 'center',
                fontSize: '0.95rem'
              }} onMouseOver={e => e.currentTarget.style.opacity = 0.9} onMouseOut={e => e.currentTarget.style.opacity = 1}>
                Download Guide
              </button>
              <button style={{
                background: 'transparent',
                color: 'var(--foreground)',
                fontWeight: 600,
                padding: '0.6rem 1.2rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--hairline)',
                cursor: 'pointer',
                transition: 'background 0.2s',
                flex: '1 1 auto',
                textAlign: 'center',
                fontSize: '0.95rem'
              }} onMouseOver={e => e.currentTarget.style.background = 'var(--muted)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                Speak to Team
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN — Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            
            {/* Feature 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.25rem' }}>Complete Coverage</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
                  Fast-tracked loan approvals covering up to 100% of your program fees and accommodation.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.25rem' }}>Flexible Repayment</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
                  Multiple tenure options allowing you to structure repayments around your new salary.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
})


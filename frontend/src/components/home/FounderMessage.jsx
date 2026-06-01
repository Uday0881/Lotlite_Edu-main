import { memo } from 'react'

/**
 * FounderMessage — Premium editorial block for Founder leadership message
 * Placement: insert near Testimonials/Industry Voices
 */
export default memo(function FounderMessage() {
  const imageUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop'

  return (
    <section style={{ padding: '4rem 0' }} aria-labelledby="founder-message">
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ borderRadius: '1.25rem', border: '1px solid var(--hairline)', background: 'var(--card)', padding: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'grid', gap: '1rem' }}>
          <style>{`@media(min-width:768px){.founder-grid{grid-template-columns: 1fr 1fr; display: grid; gap: 2rem}}`}</style>
          <div className="founder-grid">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '28rem', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-lg)', background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }}>
                <img
                  src={imageUrl}
                  alt="V. K. Alok — Founder & Managing Partner"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'filter 320ms ease, transform 320ms ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0.2)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem' }}>
              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--muted-foreground)' }}>Message from the Founder</div>
              <h3 id="founder-message" style={{ fontSize: 'clamp(1.5rem,3.2vw,2rem)', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.15 }}>“We are building the operators who will define the next decade of real estate.”</h3>
              <div style={{ fontWeight: 700, color: 'var(--foreground)', marginTop: '0.25rem' }}>V. K. Alok</div>
              <div style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Founder & Managing Partner</div>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                Lotlite combines operator-grade training with real capital and market access. Our mission is to produce leaders fluent in product, operations, and capital — prepared to run institutions or found category-defining ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

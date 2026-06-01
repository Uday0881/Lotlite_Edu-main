import { motion } from 'framer-motion'
import { fadeInUp } from '../../constants/animations.js'
import { homepageOutcomesData } from '../../data/homeData.js'

/**
 * OutcomesSection — 2-column layout showing where Lotlite grads land.
 * Edit homepageOutcomesData in data/homeData.js to change roles/salaries.
 */
export default function OutcomesSection() {
  return (
    <motion.section
      style={{
        padding: '6rem 0',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        backgroundColor: 'var(--navy-deep)',
        opacity: 0.9,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gap: '2rem', alignItems: 'center' }} className="outcomes-grid">
        <style>{`@media(min-width:768px){.outcomes-grid{grid-template-columns:1fr 2fr}}`}</style>

        {/* Left text */}
        <div>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {homepageOutcomesData.eyebrow}
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 700, color: 'white' }}>
            {homepageOutcomesData.heading}
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>
            {homepageOutcomesData.body}
          </p>
        </div>

        {/* Right — role cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {homepageOutcomesData.roles.map(({ role, salary }) => (
            <div
              key={role}
              style={{
                borderRadius: '0.75rem',
                border: '1px solid var(--hairline)',
                backgroundColor: 'var(--card)',
                padding: '1.25rem',
                transition: 'all 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.backgroundColor = 'var(--card)'
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.opacity = '0.9'
              }}
            >
              <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{role}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '0.25rem' }}>{salary}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

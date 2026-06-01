import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import { pillarsData } from '../../data/homeData.js'

/**
 * PillarsSection — 4-column numbered pillars of the Lotlite program.
 * Edit pillarsData in data/homeData.js to change pillar content.
 */
export default function PillarsSection() {
  return (
    <motion.section
      id="program"
      style={{ padding: '7rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {pillarsData.eyebrow}
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700 }}>
            {pillarsData.heading}
          </h2>
        </div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}
          className="pillars-grid"
          variants={staggerContainer}
        >
          <style>{`
            @media(min-width:768px){.pillars-grid{grid-template-columns:repeat(2,1fr)}}
            @media(min-width:1024px){.pillars-grid{grid-template-columns:repeat(4,1fr)}}
          `}</style>
          {pillarsData.items.map((p) => (
            <motion.div
              key={p.n}
              variants={fadeInUp}
              style={{
                borderRadius: '1rem',
                border: '1px solid var(--hairline)',
                backgroundColor: 'var(--card)',
                padding: '1.75rem',
                transition: 'all 300ms',
                opacity: 0.8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.opacity = '0.8'
              }}
            >
              <div className="text-gradient-gold" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1 }}>
                {p.n}
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

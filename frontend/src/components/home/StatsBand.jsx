import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import AnimatedCounter from '../shared/AnimatedCounter.jsx'
import { statsData } from '../../data/homeData.js'

/**
 * StatsBand — 4-column animated counter band.
 * Edit statsData in data/homeData.js to change numbers and labels.
 */
export default function StatsBand() {
  return (
    <motion.section
      id="outcomes"
      style={{
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        backgroundColor: 'var(--navy-deep)',
        opacity: 0.9,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
    >
      <div
        style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
        className="stats-grid"
      >
        <style>{`@media(min-width:768px){.stats-grid{grid-template-columns:repeat(4,1fr)}}`}</style>
        {statsData.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeInUp}
            style={{ padding: '3rem 1.5rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.05)' }}
          >
            <AnimatedCounter
              target={s.target}
              suffix={s.suffix}
              decimals={s.decimals}
              className="text-gradient-gold"
              style={{ fontSize: 'clamp(2.25rem,5vw,3.75rem)', fontWeight: 700 }}
            />
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginTop: '0.75rem' }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

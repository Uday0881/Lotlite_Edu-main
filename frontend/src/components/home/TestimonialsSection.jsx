import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import { testimonialsData } from '../../data/homeData.js'

/**
 * TestimonialsSection — 3-column quote cards.
 * Edit testimonialsData in data/homeData.js to change testimonials.
 */
export default function TestimonialsSection() {
  return (
    <motion.section
      style={{ padding: '6rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {testimonialsData.eyebrow}
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700 }}>
            {testimonialsData.heading}
          </h2>
        </div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}
          className="testimonials-grid"
          variants={staggerContainer}
        >
          <style>{`@media(min-width:768px){.testimonials-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
          {testimonialsData.items.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              style={{
                borderRadius: '1rem',
                border: '1px solid var(--hairline)',
                backgroundColor: 'var(--card)',
                padding: '2rem',
                position: 'relative',
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
              {/* Opening quote */}
              <div style={{ fontSize: '3rem', color: 'rgba(255,215,0,0.2)', position: 'absolute', top: '1.5rem', left: '1.5rem', fontFamily: 'serif', lineHeight: 1 }}>
                "
              </div>
              <p style={{ position: 'relative', zIndex: 1, color: 'var(--muted-foreground)', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.625, paddingTop: '1rem' }}>
                {t.quote}
              </p>
              <div>
                <div style={{ fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginTop: '0.25rem' }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

import { motion } from 'framer-motion'
import { fadeInUp } from '../../constants/animations.js'
import { demoDayData } from '../../data/homeData.js'

/**
 * DemoDay — 2-column card highlighting the Sandbox & Demo Day pitch event.
 * Edit demoDayData in data/homeData.js to change content.
 */
export default function DemoDay() {
  return (
    <motion.section
      style={{ padding: '6rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            borderRadius: '1.5rem',
            border: '1px solid var(--hairline)',
            background: 'linear-gradient(135deg, var(--navy-deep), var(--card), var(--navy-deep))',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            boxShadow: 'var(--shadow-premium)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '16rem', height: '16rem', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', filter: 'blur(64px)' }} />
          <div style={{ display: 'grid', gap: '2.5rem', position: 'relative' }} className="demo-grid">
            <style>{`@media(min-width:768px){.demo-grid{grid-template-columns:1fr 1fr}}`}</style>

            {/* Left */}
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '1rem' }}>
                {demoDayData.eyebrow}
              </div>
              <h2 style={{ fontSize: 'clamp(1.875rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.2 }}>
                {demoDayData.heading}
              </h2>
              <p style={{ marginTop: '1.5rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>
                {demoDayData.body}
              </p>
              <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {demoDayData.stats.map((s) => (
                  <div key={s.label} style={{ borderRadius: '0.75rem', border: '1px solid var(--hairline)', padding: '1.25rem', background: 'rgba(255,255,255,0.03)' }}>
                    <div className="text-gradient-gold" style={{ fontSize: '1.875rem', fontWeight: 700 }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {demoDayData.timeline.map((t, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', borderRadius: '0.75rem', border: '1px solid var(--hairline)', background: 'rgba(255,255,255,0.03)', padding: '1.25rem' }}>
                  <div style={{
                    width: '2rem', height: '2rem', borderRadius: '0.375rem',
                    background: 'rgba(255,215,0,0.15)', display: 'grid', placeItems: 'center',
                    color: 'var(--gold)', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0,
                  }}>
                    {idx + 1}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--foreground)', opacity: 0.9, lineHeight: 1.5 }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

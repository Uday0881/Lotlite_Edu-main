import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import { projectCardsData } from '../../data/homeData.js'

/**
 * FeaturedProjects — 3-column card grid of sandbox portfolio projects.
 * Edit projectCardsData in data/homeData.js to change projects.
 */
export default function FeaturedProjects() {
  return (
    <motion.section
      style={{ padding: '6rem 0', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--card)', opacity: 0.8 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            Sandbox Portfolios
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700 }}>
            Live projects built by our cohorts.
          </h2>
        </div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}
          className="projects-grid"
          variants={staggerContainer}
        >
          <style>{`
            .project-card { display: flex; flex-direction: column; }
            .project-img-wrapper { height: 16rem; flex-shrink: 0; }
            @media(min-width:768px){
              .projects-grid { gap: 1.5rem; }
              .project-card { flex-direction: row; align-items: stretch; }
              .project-img-wrapper { width: 40%; height: auto; min-height: 14rem; }
              .project-content { display: flex; flex-direction: column; justify-content: center; padding: 2.5rem !important; }
            }
          `}</style>
          {projectCardsData.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              className="project-card"
              style={{
                borderRadius: '1rem',
                border: '1px solid var(--hairline)',
                backgroundColor: 'var(--card)',
                overflow: 'hidden',
                transition: 'all 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.opacity = '0.9'
              }}
            >
              <div className="project-img-wrapper" style={{ overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 500ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div className="project-content" style={{ padding: '1.5rem', flex: 1 }}>
                <div style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  {p.category}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{p.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

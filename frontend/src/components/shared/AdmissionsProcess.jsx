import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { admissionsSteps, admissionsCommitments, admissionsSection } from '../../data/admissionsData.js'

/**
 * AdmissionsProcess — 4-step horizontal process with animations and hover effects.
 */
export default function AdmissionsProcess() {
  return (
    <section
      id="admissions-process"
      style={{
        padding: '6rem 0',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        backgroundColor: 'var(--navy-deep)',
        opacity: 1,
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {admissionsSection.eyebrow}
          </div>
          <style>{`
            .admissions-heading { color: var(--foreground); }
          `}</style>
          <h2 className="admissions-heading text-white dark:text-white" style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            {admissionsSection.heading}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.625 }}>
            {admissionsSection.subheading}
          </p>
        </motion.div>

        {/* Horizontal Steps Track */}
        <div style={{ position: 'relative', marginBottom: '4rem' }}>
          {/* Connector line — desktop only */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(to right, transparent, rgba(255,215,0,0.3), transparent)',
              transform: 'translateY(-50%)',
              zIndex: 0
            }}
            className="connector-line"
          />
          <style>{`
            @media(max-width:1023px) { .connector-line { display: none } }
            .process-track {
              display: flex;
              gap: 1.5rem;
              overflow-x: auto;
              padding: 2rem 1rem;
              scrollbar-width: none;
              scroll-snap-type: x mandatory;
            }
            .process-track::-webkit-scrollbar { display: none; }
            .process-step {
              flex-shrink: 0;
              width: min(85vw, 280px);
              scroll-snap-align: center;
            }
            @media(min-width: 1024px) {
              .process-track {
                justify-content: space-between;
                overflow-x: visible;
                padding: 2rem 0;
              }
              .process-step {
                width: 23%;
                flex-shrink: 1;
              }
            }
          `}</style>

          <div className="process-track" style={{ position: 'relative', zIndex: 1 }}>
            {admissionsSteps.map((s, i) => (
              <motion.div
                key={s.n}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1.5rem',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'border-color 300ms, box-shadow 300ms, background-color 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(255,215,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  style={{
                    margin: '0 auto 1.5rem',
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
                    color: 'var(--navy-deep)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    display: 'grid',
                    placeItems: 'center',
                    boxShadow: 'var(--shadow-gold)',
                  }}
                >
                  {s.n}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.75rem', color: '#fff' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.625 }}>
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commitment box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            maxWidth: '46rem',
            margin: '0 auto',
            borderRadius: '1.25rem',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,215,0,0.2)',
            padding: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h4 style={{ fontWeight: 700, color: 'var(--gold)', whiteSpace: 'nowrap', fontSize: '1rem' }}>
            {admissionsSection.commitmentLabel}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem 1.5rem', fontSize: '0.875rem', justifyContent: 'center' }}>
            {admissionsCommitments.map((c, i) => (
              <motion.li 
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)' }}
              >
                <CheckCircle2 size={16} style={{ color: 'var(--gold)' }} />
                {c}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}


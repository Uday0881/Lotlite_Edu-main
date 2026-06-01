import { memo } from 'react'
import { pipelineData } from '../../data/homeData.js'

/**
 * OperatingPipeline — Premium 3-card earning progression grid
 * Displays structured employment phases with compensation and focus areas
 */
export default memo(function OperatingPipeline() {
  return (
    <section style={{ padding: '5rem 0' }} aria-labelledby="pipeline-heading">
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>
            {pipelineData.eyebrow}
          </div>
          <h2 id="pipeline-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.15, marginBottom: '1rem' }}>
            {pipelineData.heading}
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem,1.1vw,1.1rem)', color: 'var(--muted-foreground)', lineHeight: 1.7, maxWidth: '42rem' }}>
            {pipelineData.body}
          </p>
        </div>

        {/* 3-Card Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="pipeline-grid">
          <style>{`@media(min-width:768px){.pipeline-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
          {pipelineData.phases.map((phase, idx) => (
            <div
              key={idx}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                borderRadius: '1.5rem',
                border: '1px solid var(--hairline)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                backdropFilter: 'blur(8px)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Phase Label */}
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)' }}>
                {phase.label}
              </div>

              {/* Phase Title */}
              <div>
                <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.2 }}>
                  {phase.title}
                </h3>
              </div>

              {/* Compensation — Large Dominant Text */}
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)', marginBottom: '0.35rem' }}>
                  Monthly Compensation
                </div>
                <div style={{ fontSize: 'clamp(1.875rem, 3vw, 2.25rem)', fontWeight: 900, color: 'var(--foreground)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {phase.compensation}
                </div>
              </div>

              {/* Focus Description */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
                  {phase.focus}
                </p>
              </div>

              {/* Bottom Accent Divider */}
              <div style={{ height: '2px', background: 'linear-gradient(90deg, rgba(255,215,0,0.3), transparent)', marginTop: '0.5rem' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

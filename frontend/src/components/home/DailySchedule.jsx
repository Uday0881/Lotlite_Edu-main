import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import { dailyScheduleData } from '../../data/homeData.js'

/**
 * DailySchedule — visual timeline of the daily 12-hour operating schedule.
 * Edit dailyScheduleData in data/homeData.js to change schedule items.
 */
export default function DailySchedule() {
  return (
    <motion.section
      style={{ padding: '6rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {dailyScheduleData.eyebrow}
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700 }}>
            {dailyScheduleData.heading}
          </h2>
        </div>

        <style>{`
          @media(min-width:768px){
            .schedule-item { flex-direction:row !important; align-items:center !important; }
            .schedule-time { width:14rem; }
          }
          
          /* Premium highlighted card styling for both dark and light themes */
          .schedule-highlight-card {
            border: 1px solid rgba(255, 215, 0, 0.4) !important;
            background: linear-gradient(135deg, color-mix(in srgb, var(--card) 92%, var(--gold) 8%), var(--card)) !important;
            box-shadow: 0 10px 30px -10px rgba(255, 215, 0, 0.15) !important;
          }
          .schedule-highlight-card:hover {
            border-color: rgba(255, 215, 0, 0.7) !important;
            box-shadow: 0 15px 40px -10px rgba(255, 215, 0, 0.25) !important;
            transform: translateY(-4px);
          }
          
          /* Light mode specific adjustments for the highlighted card */
          html.light .schedule-highlight-card {
            background: linear-gradient(135deg, color-mix(in srgb, var(--card) 82%, var(--gold) 18%), var(--card)) !important;
            border: 1px solid rgba(255, 215, 0, 0.6) !important;
            box-shadow: 0 10px 30px -10px rgba(255, 215, 0, 0.2) !important;
          }
          html.light .schedule-highlight-card:hover {
            border-color: rgba(255, 215, 0, 0.9) !important;
            box-shadow: 0 15px 40px -10px rgba(255, 215, 0, 0.3) !important;
          }
        `}</style>

        <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} variants={staggerContainer}>
          {dailyScheduleData.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                border: '1px solid var(--hairline)',
                padding: 'clamp(1.25rem,3vw,2rem)',
                transition: 'all 300ms',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                overflow: 'hidden',
                backgroundColor: 'var(--card)',
                opacity: item.highlight ? 1 : 0.7,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              className={`schedule-item ${item.highlight ? 'schedule-highlight-card' : ''}`}
            >
              {item.highlight && (
                <div style={{ position: 'absolute', top: 0, right: 0, width: '12rem', height: '12rem', background: 'rgba(255,215,0,0.12)', filter: 'blur(3rem)', borderRadius: '50%', marginTop: '-3rem', marginRight: '-3rem', pointerEvents: 'none' }} />
              )}

              {/* Time badge */}
              <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }} className="schedule-time">
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,215,0,0.25)',
                  background: 'rgba(255,215,0,0.12)',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: '0.02em',
                }}>
                  {item.time}
                </span>
              </div>

              {/* Title */}
              <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                <h3 className="text-gray-900 dark:text-white" style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  opacity: item.highlight ? 1 : 0.9,
                }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

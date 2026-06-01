import { motion } from 'framer-motion'
import { fadeIn } from '../../constants/animations.js'
import { partnersData } from '../../data/homeData.js'

/**
 * PartnersMarquee — infinitely scrolling ticker of partner company names.
 * Features edge-fading masks, pause on hover, and smooth looping.
 */
export default function PartnersMarquee() {
  // Clone multiple times to ensure enough width for ultra-wide screens to loop smoothly
  const loopedPartners = [...partnersData.partners, ...partnersData.partners, ...partnersData.partners, ...partnersData.partners]
  
  return (
    <motion.div
      style={{
        padding: '3rem 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4))',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeIn}
    >
      <div style={{ textAlign: 'center', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '2rem', fontWeight: 600 }}>
        {partnersData.label}
      </div>
      
      {/* Container with fade masks on left and right edges */}
      <div style={{ 
        overflow: 'hidden', 
        display: 'flex',
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}>
        <div
          className="fancy-marquee"
          style={{ 
            display: 'flex', 
            whiteSpace: 'nowrap', 
            alignItems: 'center',
            width: 'max-content'
          }}
        >
          {loopedPartners.map((p, i) => (
            <div 
              key={i} 
              style={{ 
                padding: '0 3rem',
                fontSize: 'clamp(1.5rem,3vw,2.5rem)', 
                fontWeight: 800, 
                letterSpacing: '-0.02em', 
                color: 'rgba(255,255,255,0.4)',
                transition: 'all 300ms ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold)'
                e.currentTarget.style.textShadow = '0 0 20px rgba(255,215,0,0.5)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                e.currentTarget.style.textShadow = 'none'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fancy-marquee {
          animation: scroll-marquee 30s linear infinite;
        }
        .fancy-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  )
}


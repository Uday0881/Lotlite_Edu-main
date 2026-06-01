import { useRef, useEffect, useState, memo } from 'react'
import { marqueeImages } from '../../data/homeData.js'

/**
 * ImageMarquee — high-performance infinite scrolling marquee
 */
export default memo(function ImageMarquee() {
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section style={{ padding: '2rem 0', background: 'var(--surface)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }} aria-hidden={false}>
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '1rem 0' }} ref={trackRef} className={`marquee-track`}>
          <style>{`
            .marquee-track { --duration: 28s; --gap: 0.75rem; display: flex; will-change: transform; }
            .marquee-inner { display: flex; gap: var(--gap); transform: translate3d(0,0,0); animation: marquee var(--duration) linear infinite; }
            .marquee-paused .marquee-inner { animation-play-state: paused !important; }
            @keyframes marquee { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
            @media (max-width: 768px) { .marquee-track { --duration: 18s } }
          `}</style>

          <div className={isPaused ? 'marquee-paused' : ''} style={{ width: '200%', display: 'flex' }}>
            <div className="marquee-inner" aria-hidden="true">
              {marqueeImages.concat(marqueeImages).map((src, idx) => (
                <div key={idx} style={{ flex: '0 0 auto', width: '18rem', height: '10rem', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={src} alt="Lotlite exposure" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 400ms ease, filter 400ms ease' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

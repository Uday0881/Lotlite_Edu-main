import { useEffect, useRef, useState } from 'react'

const ecosystemStats = [
  { label: 'Sandbox Allocation Fund', suffix: 'Cr+', prefix: '₹', target: 10 },
  { label: 'Venture Capital Partners', suffix: '+', prefix: '', target: 50 },
  { label: 'Day-1 Employment Rate', suffix: '%', prefix: '', target: 100 },
]

const partnerNames = [
  'Lodha Group',
  'Godrej Properties',
  'VTP Realty',
  'Mahindra Lifespace',
  'Piramal Realty',
  'Brigade Group',
  'Prestige Group',
  'Embassy Group',
]

const partnerText = `${partnerNames.join(' · ')} · `

const VisionEcosystem = () => {
  const [countValues, setCountValues] = useState([0, 0, 0])
  const statsRef = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return

    const animate = () => {
      const start = performance.now()
      const duration = 1200

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        setCountValues(
          ecosystemStats.map((item) => Math.floor(item.target * progress))
        )

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true
            animate()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="vision-ecosystem-section">
      <div className="vision-ecosystem-inner">
        <h2 className="vision-ecosystem-heading">Backed by the Titans of Industry.</h2>
        <div ref={statsRef} className="vision-stats-row">
          {ecosystemStats.map((stat, index) => (
            <div key={stat.label} className="vision-stat-block">
              <div className="vision-stat-value">
                {stat.prefix}
                {countValues[index]}
                {stat.suffix}
              </div>
              <div className="vision-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="vision-marquee" aria-hidden="true">
        <div className="vision-marquee-row">
          <div className="vision-marquee-loop">{partnerText}</div>
          <div className="vision-marquee-loop">{partnerText}</div>
        </div>
        <div className="vision-marquee-row">
          <div className="vision-marquee-loop">{partnerText}</div>
          <div className="vision-marquee-loop">{partnerText}</div>
        </div>
      </div>
    </section>
  )
}

export default VisionEcosystem;

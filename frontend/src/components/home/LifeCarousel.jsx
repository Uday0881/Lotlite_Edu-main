import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Car, Building2, LineChart, Sparkles } from 'lucide-react'
import { fadeInUp } from '../../constants/animations.js'
import { lifeCardsData } from '../../data/homeData.js'

// Map icon string names to components
const ICON_MAP = { Car, Building2, LineChart, Sparkles }

/**
 * LifeCarousel — horizontal scrolling card carousel for "Life at Lotlite" section.
 * Edit lifeCardsData in data/homeData.js to change cards.
 */
export default function LifeCarousel() {
  const [active, setActive] = useState(0)
  const scrollerRef = useRef(null)

  const scrollToIdx = (idx) => {
    setActive(idx)
    setTimeout(() => {
      const el = scrollerRef.current?.children[idx]
      el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }, 10)
  }

  const go = (dir) => {
    const nextActive = (active + dir + lifeCardsData.length) % lifeCardsData.length
    scrollToIdx(nextActive)
  }

  return (
    <motion.section
      style={{ padding: '7rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
              Life at Lotlite
            </div>
            <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, maxWidth: '32rem' }}>
              Built for operators. Not for theorists.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => go(dir)}
                aria-label={dir === -1 ? 'Previous' : 'Next'}
                style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                  border: '1px solid var(--hairline)', background: 'rgba(255,255,255,0.05)',
                  display: 'grid', placeItems: 'center', cursor: 'pointer',
                  color: 'var(--foreground)', transition: 'background 300ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              >
                {dir === -1 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollerRef}
          style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none', scrollSnapType: 'x mandatory' }}
        >
          {lifeCardsData.map((c, idx) => {
            const Icon = ICON_MAP[c.icon] || Sparkles
            const isActive = idx === active
            return (
              <article
                key={c.title}
                onClick={() => scrollToIdx(idx)}
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  width: 'min(85%, 460px)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid var(--hairline)',
                  cursor: 'pointer',
                  transition: 'all 500ms',
                  backgroundColor: 'var(--card)',
                  opacity: isActive ? 1 : 0.7,
                  transform: isActive ? 'scale(1)' : 'scale(0.96)',
                  boxShadow: isActive ? 'var(--shadow-premium)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div style={{
                    width: '3rem', height: '3rem', borderRadius: '0.75rem',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
                    display: 'grid', placeItems: 'center', color: 'var(--navy-deep)',
                  }}>
                    <Icon size={24} />
                  </div>
                  <span style={{
                    fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: 'var(--gold)', border: '1px solid rgba(255,215,0,0.3)',
                    borderRadius: '9999px', padding: '0.25rem 0.75rem',
                  }}>
                    {c.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{c.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

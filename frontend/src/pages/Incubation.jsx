import { useEffect } from 'react'
import { Users, FlaskConical, Coins, ArrowUpRight, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePageTheme } from '../hooks/usePageTheme.js'
import { fadeInUp, staggerContainer, scaleIn } from '../constants/animations.js'
import ApplyDialog from '../components/shared/ApplyDialog.jsx'
import {
  incubationHero, incubationStats, incubationPillars,
  incubationVentures, incubationCta
} from '../data/incubationData.js'

const ICON_MAP = { Users, FlaskConical, Coins }

export default function Incubation() {
  usePageTheme('inc')
  useEffect(() => { document.title = 'The Lotlite PropTech Foundry & Incubation Wing' }, [])

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '5rem', right: '2.5rem', width: '26rem', height: '26rem', borderRadius: '50%', background: 'rgba(104,37,211,0.15)', filter: 'blur(64px)', zIndex: -1 }} />
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: -1 }} />
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gap: '3rem', alignItems: 'center' }} className="inc-hero-grid">
          <style>{`@media(min-width:1024px){.inc-hero-grid{grid-template-columns:1.1fr 0.9fr}}`}</style>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '9999px', border: '1px solid var(--hairline)', background: 'var(--surface-soft)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '1.5rem' }}>
              {incubationHero.badge}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3.75rem)', fontWeight: 700, lineHeight: 1.02 }}>
              {incubationHero.heading} <span className="text-gradient-gold">{incubationHero.headingAccent}</span> {incubationHero.headingEnd}
            </h1>
            <p style={{ marginTop: '2rem', maxWidth: '42rem', fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>
              {incubationHero.body}
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <ApplyDialog>
                <button style={{ padding: '0.875rem 1.75rem', borderRadius: '0.375rem', background: 'linear-gradient(to right, var(--gold), var(--gold-bright))', color: 'var(--on-accent)', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: 'var(--shadow-gold)' }}>
                  {incubationHero.ctaPrimary}
                </button>
              </ApplyDialog>
              <a href={incubationHero.ctaSecondaryHref} style={{ padding: '0.875rem 1.75rem', borderRadius: '0.375rem', border: '1px solid var(--hairline)', background: 'var(--surface-soft)', fontWeight: 500, color: 'var(--foreground)', textDecoration: 'none' }}>
                {incubationHero.ctaSecondary}
              </a>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-1.5rem', background: 'linear-gradient(135deg, rgba(104,37,211,0.3), transparent)', filter: 'blur(2rem)', borderRadius: '1.5rem', zIndex: -1 }} />
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-premium)', aspectRatio: '4/5' }}>
              <img src={incubationHero.heroImage} alt={incubationHero.heroImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div className="bg-glass border-hairline" style={{ position: 'absolute', bottom: '-1.25rem', left: '-1.25rem', borderRadius: '0.75rem', padding: '1rem', boxShadow: 'var(--shadow-premium)' }}>
              <div className="text-gradient-gold" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{incubationHero.fundBadge.value}</div>
              <div style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)' }}>{incubationHero.fundBadge.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <motion.section style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--navy-deep)', opacity: 0.9 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} className="inc-stats-grid">
          <style>{`@media(min-width:768px){.inc-stats-grid{grid-template-columns:repeat(4,1fr)}}`}</style>
          {incubationStats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp} style={{ padding: '2.5rem 1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="text-gradient-gold" style={{ fontSize: '2.25rem', fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pillars */}
      <motion.section style={{ padding: '6rem 0' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>Ecosystem Pillars</div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, marginBottom: '3rem', maxWidth: '32rem' }}>Everything a founder needs, under one roof.</h2>
          <motion.div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="pillars-inc-grid" variants={staggerContainer}>
            <style>{`@media(min-width:768px){.pillars-inc-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
            {incubationPillars.map((p) => {
              const Icon = ICON_MAP[p.icon] || Users
              return (
                <motion.div key={p.title} variants={fadeInUp} style={{ borderRadius: '1rem', border: '1px solid var(--hairline)', backgroundColor: 'var(--card)', padding: '2rem', transition: 'all 300ms', opacity: 0.8 }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))', display: 'grid', placeItems: 'center', color: 'var(--navy-deep)', marginBottom: '1.5rem', transition: 'transform 300ms' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{p.body}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Ventures */}
      <motion.section id="ventures" style={{ padding: '6rem 0', borderTop: '1px solid var(--hairline)' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>Live Venture Tracker</div>
              <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, maxWidth: '32rem' }}>Student prototypes, currently getting funded.</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
              <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#34d399', animation: 'pulse 2s infinite' }} />
              Live updates from the Foundry dashboard
            </div>
          </div>
          <motion.div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="ventures-grid" variants={staggerContainer}>
            <style>{`@media(min-width:768px){.ventures-grid{grid-template-columns:repeat(2,1fr)}}`}</style>
            {incubationVentures.map((v) => (
              <motion.article key={v.name} variants={fadeInUp} style={{ borderRadius: '1rem', border: '1px solid var(--hairline)', backgroundColor: 'var(--card)', padding: '1.75rem', transition: 'all 300ms', position: 'relative', overflow: 'hidden', opacity: 0.8 }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '0.8' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '8rem', height: '8rem', borderRadius: '50%', background: 'rgba(255,215,0,0.05)', filter: 'blur(2rem)' }} />
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', position: 'relative' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{v.name}</h3>
                    <div style={{ marginTop: '0.375rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gold)' }}>{v.stage}</div>
                  </div>
                  <ArrowUpRight size={20} style={{ color: 'var(--muted-foreground)', transition: 'all 300ms' }} />
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--foreground)', opacity: 0.85, lineHeight: 1.625 }}>{v.thesis}</p>
                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
                  <TrendingUp size={14} style={{ color: '#34d399' }} />
                  Status: <span style={{ textTransform: 'capitalize', color: 'var(--foreground)', opacity: 0.8 }}>{v.status}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={scaleIn} style={{ marginTop: '4rem', borderRadius: '1.5rem', background: 'linear-gradient(to right, rgba(255,215,0,0.15), rgba(255,215,0,0.05), transparent)', border: '1px solid var(--hairline)', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="inc-cta-flex">
            <style>{`@media(min-width:768px){.inc-cta-flex{flex-direction:row !important;align-items:center !important}}`}</style>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{incubationCta.heading}</h3>
              <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem', maxWidth: '36rem' }}>{incubationCta.body}</p>
            </div>
            <ApplyDialog>
              <button style={{ padding: '0.875rem 1.75rem', borderRadius: '0.375rem', background: 'linear-gradient(to right, var(--gold), var(--gold-bright))', color: 'var(--navy-deep)', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: 'var(--shadow-gold)', whiteSpace: 'nowrap' }}>
                {incubationCta.cta}
              </button>
            </ApplyDialog>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

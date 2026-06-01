import { useEffect } from 'react'
import { LineChart, Landmark, Target, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePageTheme } from '../hooks/usePageTheme.js'
import { fadeInUp, staggerContainer, scaleIn } from '../constants/animations.js'

export default function Outcomes() {
  usePageTheme('outcomes')
  useEffect(() => { document.title = 'Outcomes — Leading the Market, Not Just Entering It | Lotlite' }, [])

  return (
    <div style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 1.5rem 8rem', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem', animation: 'fade-up 0.8s ease both' }}>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Leading the Market, <br />
            <span className="text-gradient-gold">Not Just Entering It</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
            Our graduates don't wait for opportunities—they build them. Here is the empirical impact of the Lotlite program.
          </p>
        </div>
        <motion.div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', textAlign: 'center' }} className="outcomes-top-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer}>
          <style>{`@media(min-width:768px){.outcomes-top-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
          {[['₹18 LPA', 'Average Starting Package'], ['3.2x', 'Average Salary Multiplier'], ['₹50Cr+', 'Deal Portfolio Managed']].map(([v, l]) => (
            <motion.div key={l} variants={fadeInUp} style={{ backgroundColor: 'var(--card)', border: '1px solid var(--hairline)', borderRadius: '1rem', padding: '2rem', transition: 'all 300ms', opacity: 0.8 }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.opacity = '1' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '0.8' }}>
              <div style={{ fontSize: 'clamp(2.25rem,5vw,3rem)', fontWeight: 900, color: 'var(--gold)', marginBottom: '0.75rem' }}>{v}</div>
              <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', fontWeight: 600 }}>{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trajectory Table */}
      <motion.section style={{ maxWidth: '80rem', margin: '0 auto', padding: '6rem 1.5rem', borderBottom: '1px solid var(--hairline)' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>Career Trajectories</div>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Where Our Programs Lead</h2>
        </div>
        <div style={{ width: '100%', overflowX: 'auto', borderRadius: '1rem', border: '1px solid var(--hairline)', backgroundColor: 'var(--card)', backdropFilter: 'blur(8px)', opacity: 0.8 }}>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '50rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--hairline)', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                {['Program', 'Target Role', 'Primary Focus'].map((h) => (
                  <th key={h} style={{ padding: '1.5rem', fontWeight: 600, color: 'white' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['PG in Data Science', 'Valuation Data Scientist', 'Predictive ML models for pricing'],
                ['MCA (PropTech & Engineering)', 'PropTech Product Manager', 'Scalable digital infrastructure'],
                ['MBA in Real Estate', 'Real Estate Enterprise Leader', 'Business strategy & property technology'],
                ['Crash Course', 'Investment & Acquisition Analyst', 'Underwriting land acquisitions'],
              ].map(([program, role, focus]) => (
                <tr key={program} style={{ borderTop: '1px solid var(--hairline)', transition: 'background 200ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}>
                  <td style={{ padding: '1.5rem', color: 'var(--gold)', fontWeight: 500 }}>{program}</td>
                  <td style={{ padding: '1.5rem', color: 'var(--foreground)' }}>{role}</td>
                  <td style={{ padding: '1.5rem', color: 'var(--muted-foreground)' }}>{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Skills Grid */}
      <motion.section style={{ maxWidth: '80rem', margin: '0 auto', padding: '6rem 1.5rem', borderBottom: '1px solid var(--hairline)' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>Operator Toolkit</div>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Beyond the Classroom Skills</h2>
        </div>
        <motion.div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="skills-grid" variants={staggerContainer}>
          <style>{`@media(min-width:768px){.skills-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
          {[
            { Icon: LineChart, title: 'Financial Modeling', body: 'Master the exact Excel frameworks and underwriting models used by top-tier Private Equity and venture funds.' },
            { Icon: Landmark, title: 'Regulatory Mastery', body: 'Navigate RERA, zoning laws, and spatial compliances to de-risk acquisitions and fast-track developmental approvals.' },
            { Icon: Target, title: 'Data-Driven Valuation', body: 'Replace gut-feeling pricing with empirical, predictive data models that anticipate hyper-local market movements.' },
          ].map(({ Icon, title, body }) => (
            <motion.div key={title} variants={fadeInUp} style={{ borderRadius: '1rem', border: '1px solid var(--hairline)', backgroundColor: 'var(--card)', padding: '2rem', transition: 'all 300ms', opacity: 0.8 }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.borderColor = 'var(--hairline)' }}>
              <Icon size={40} style={{ color: 'var(--gold)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', lineHeight: 1.625 }}>{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonial */}
      <motion.section style={{ maxWidth: '56rem', margin: '0 auto', padding: '8rem 1.5rem', textAlign: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scaleIn}>
        <Quote size={64} style={{ color: 'rgba(255,215,0,0.2)', margin: '0 auto 2rem' }} />
        <blockquote style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 500, lineHeight: 1.25, color: 'var(--foreground)', opacity: 0.9, marginBottom: '2.5rem' }}>
          "The operators coming out of Lotlite possess a combination of technical rigor and market intuition that usually takes a decade to develop. They are built for the current era of real estate."
        </blockquote>
        <div>
          <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.125rem' }}>Vikram D.</div>
          <div style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
            Managing Director of Commercial Real Estate Investments
          </div>
        </div>
      </motion.section>
    </div>
  )
}

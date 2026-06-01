import { useEffect } from 'react'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePageTheme } from '../hooks/usePageTheme.js'
import { fadeInUp, staggerContainer } from '../constants/animations.js'

// ---- Edit contact info here ----
const contacts = [
  { icon: Phone, label: 'Admissions hotline', value: '+91 88058 43309', href: 'tel:+918805843309' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 88058 43309', href: 'https://wa.me/918805843309' },
  { icon: Mail, label: 'Email', value: 'admissions@lotlite.in', href: 'mailto:admissions@lotlite.in' },
  { icon: MapPin, label: 'Campus', value: 'Tech Tower, Baner Road, Pune 411045', href: '#' },
]

export default function Contact() {
  usePageTheme('home')
  useEffect(() => { document.title = 'Contact — Lotlite School of Real Estate' }, [])

  return (
    <section style={{ paddingTop: '9rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>Contact</div>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.75rem)', fontWeight: 700 }}>Talk to the program team.</h1>
          <p style={{ marginTop: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '42rem', lineHeight: 1.625 }}>
            Admissions, partnerships, media, or alumni — pick a channel and a Lotlite lead will reply within 24 hours.
          </p>
        </motion.div>

        <motion.div
          style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}
          className="contact-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <style>{`@media(min-width:768px){.contact-grid{grid-template-columns:repeat(2,1fr)}}`}</style>
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              variants={fadeInUp}
              style={{
                borderRadius: '1rem',
                border: '1px solid var(--hairline)',
                backgroundColor: 'var(--card)',
                opacity: 0.8,
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                textDecoration: 'none',
                transition: 'all 300ms',
                boxShadow: 'var(--shadow-premium)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.opacity = '0.8'
                e.currentTarget.style.borderColor = 'var(--hairline)'
              }}
            >
              <div style={{
                width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', flexShrink: 0,
                background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
                display: 'grid', placeItems: 'center', color: 'var(--on-accent)',
              }}>
                <c.icon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>{c.label}</div>
                <div style={{ marginTop: '0.25rem', fontWeight: 600, color: 'var(--foreground)' }}>{c.value}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

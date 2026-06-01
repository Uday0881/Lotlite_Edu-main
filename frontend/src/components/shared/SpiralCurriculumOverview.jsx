import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const tiers = [
  { key: 'Foundational', description: 'Core knowledge and fundamentals' },
  { key: 'Intermediate', description: 'Builds on fundamentals with applied skills' },
  { key: 'Advanced', description: 'Complex problem solving and specialization' },
  { key: 'Industry Mastery', description: 'Capstone, projects and industry readiness' }
];

export default function SpiralCurriculumOverview() {
  const { pathname } = useLocation();

  // Render only on homepage
  if (pathname !== '/' && pathname !== '') return null;

  return (
    <section aria-labelledby="spiral-overview" style={{ padding: '2rem 1rem' }}>
      <h2 id="spiral-overview" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Spiral Curriculum Overview</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
        >
          <div style={{ flex: 1 }}>
            <svg width="160" height="160" viewBox="0 0 200 200" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="70" stroke="url(#g)" strokeWidth="12" fill="rgba(255,255,255,0.04)" />
            </svg>
          </div>

          <div style={{ flex: 3 }}>
            <p style={{ margin: 0, color: '#374151' }}>
              The spiral curriculum revisits core concepts across progressively complex tiers — reinforcing foundations while
              introducing application, synthesis and industry-level mastery.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              {tiers.map((t, i) => (
                <motion.div
                  key={t.key}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(56,189,248,0.04))',
                    padding: '0.75rem 1rem',
                    borderRadius: 10,
                    minWidth: 180
                  }}
                >
                  <strong style={{ display: 'block' }}>{t.key}</strong>
                  <small style={{ color: '#6b7280' }}>{t.description}</small>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ listStyle: 'none', padding: 0, margin: 0 }}
        >
          {tiers.map((t, idx) => (
            <motion.li
              key={t.key}
              whileHover={{ translateX: 6 }}
              style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                alignItems: 'center',
                borderRadius: 12,
                marginBottom: 10,
                background: 'linear-gradient(90deg, rgba(2,6,23,0.02), rgba(255,255,255,0.02))'
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 10, background: '#0ea5e9', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700 }}>{idx + 1}</div>
              <div>
                <div style={{ fontWeight: 700 }}>{t.key}</div>
                <div style={{ color: '#6b7280', fontSize: 14 }}>{t.description}</div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

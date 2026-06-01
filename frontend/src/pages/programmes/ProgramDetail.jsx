import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { programmesData } from '../../data/programmesData.js';
import NotFound from '../NotFound';
import ApplyDialog from '../../components/shared/ApplyDialog.jsx';

export default function ProgramDetail() {
  const { programId } = useParams();
  const program = programmesData.programs[programId];

  useEffect(() => {
    if (program) {
      document.title = `${program.title} | Lotlite Curriculum`;
    }
  }, [program]);

  if (!program) {
    return <NotFound />;
  }

  return (
    <div
      style={{
        paddingTop: '5rem',
        minHeight: '100vh',
        background: 'var(--background)',
        color: 'var(--foreground)',
        '--primary': program.theme.primary,
        '--secondary': program.theme.secondary,
        '--accent': program.theme.accent,
        '--glow': program.theme.glow,
      }}
    >
      <section
        style={{
          padding: '4rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(8, 18, 37, 0.95), rgba(12, 27, 56, 0.95))',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
            <Link to="/" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ textTransform: 'uppercase' }}>{program.category} Program</span>
            <span>/</span>
            <span style={{ color: 'var(--foreground)' }}>{program.shortTitle}</span>
          </div>

          <div style={{ display: 'grid', gap: '2rem', alignItems: 'start', gridTemplateColumns: 'minmax(0, 1.2fr) 0.8fr' }}>
            <div>
              <span style={{ display: 'inline-flex', padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(56,189,248,0.12)', color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                {program.tagline}
              </span>
              <h1 style={{ marginTop: '1.25rem', fontSize: 'clamp(2.5rem, 4vw, 4.25rem)', lineHeight: 1.05, fontWeight: 800, color: 'var(--foreground)' }}>
                {program.title}
              </h1>
              <p style={{ marginTop: '1.5rem', color: 'var(--muted-foreground)', fontSize: '1.15rem', maxWidth: '45rem', lineHeight: 1.8 }}>
                {program.description}
              </p>

              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.95rem 1.1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Clock size={20} style={{ color: 'var(--accent)' }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{program.duration}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{program.mode}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.95rem 1.1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Award size={20} style={{ color: 'var(--accent)' }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>Certified Learning</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{program.eligibility}</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ borderRadius: '2rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 40px 100px -60px rgba(0,0,0,0.65)' }}
            >
              <img src={program.heroImage} alt={program.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '22rem' }} loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gap: '3rem', gridTemplateColumns: 'minmax(0, 1fr) 320px' }}>
          <div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Curriculum Overview</h2>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Every semester is drawn from configuration data. The full curriculum, tier labels, semester names, and subject lists are rendered dynamically from the central program model.
            </p>

            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {program.curriculum.map((semester) => (
                <motion.div
                  key={semester.semester}
                  whileHover={{ translateY: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: '1.75rem',
                    borderRadius: '1.75rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    boxShadow: '0 20px 60px -40px rgba(0,0,0,0.55)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <div>
                      <span style={{ display: 'inline-flex', padding: '0.45rem 0.9rem', borderRadius: '9999px', background: 'rgba(56,189,248,0.16)', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {semester.tier}
                      </span>
                      <h3 style={{ marginTop: '1rem', fontSize: '1.75rem', fontWeight: 700, color: 'var(--foreground)' }}>{semester.title}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--foreground)' }}>{semester.semester}</div>
                      <div style={{ color: 'var(--muted-foreground)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.18em' }}>Semester</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
                    {semester.subjects.map((subject) => (
                      <div key={subject} style={{ padding: '1rem', borderRadius: '1.25rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--foreground)' }}>
                        {subject}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <aside style={{ position: 'sticky', top: '6rem', alignSelf: 'start' }}>
            <div style={{ padding: '1.75rem', borderRadius: '1.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Sparkles size={20} style={{ color: 'var(--accent)' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Program Highlights</h3>
              </div>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Everything shown here is driven by centralized program configuration so it can evolve without code changes.
              </p>
              <ApplyDialog>
                <button
                  style={{
                    width: '100%',
                    padding: '0.95rem 1rem',
                    borderRadius: '1rem',
                    color: '#0F172A',
                    background: 'linear-gradient(135deg, rgba(56,189,248,0.95), rgba(14,165,233,0.85))',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Apply Now <ArrowRight size={16} />
                </button>
              </ApplyDialog>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

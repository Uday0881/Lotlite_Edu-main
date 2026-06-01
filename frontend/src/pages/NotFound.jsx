import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ paddingTop: '9rem', paddingBottom: '6rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '32rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <div className="text-gradient-gold" style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginTop: '1rem' }}>Page not found.</h1>
        <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>
          This page doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            borderRadius: '0.375rem',
            background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
            color: 'var(--navy-deep)',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: 'var(--shadow-gold)',
          }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

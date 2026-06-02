import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/shared/SEO.jsx'

export default function NotFound() {
	  return (
	    <section style={{ paddingTop: '9rem', paddingBottom: '6rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
	      <SEO title="404 Not Found" />
	      <div style={{ maxWidth: '32rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
		        <motion.div
		          initial={{ opacity: 0, y: -20 }}
		          animate={{ opacity: 1, y: 0 }}
		          transition={{ duration: 0.6 }}
		        >
		          <div className="text-gradient-gold" style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1 }}>404</div>
		          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginTop: '1rem' }}>
		            The page you're looking for doesn't exist.
		          </h1>
		          <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>
		            Let's get you back on track.
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
		            Return to Homepage
		          </Link>
		        </motion.div>
	      </div>
	    </section>
	  )
	}

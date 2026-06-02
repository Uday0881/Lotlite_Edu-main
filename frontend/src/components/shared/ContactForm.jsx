import { useState, useCallback } from 'react'
import { ArrowRight, Loader2, CheckCircle2, MessageCircle } from 'lucide-react'

	/**
	 * Premium Input Style — Enhanced focus states, smooth transitions
	 */
	const inputStyle = {
	  marginTop: '0.5rem',
	  width: '100%',
	  background: 'rgba(255,255,255,0.04)',
	  border: '1px solid rgba(255,255,255,0.12)',
	  borderRadius: '0.5rem',
	  padding: '0.875rem 1rem',
	  fontSize: '0.9375rem',
	  color: 'var(--foreground)',
	  outline: 'none',
	  transition: 'all 280ms cubic-bezier(0.16, 1, 0.3, 1)',
	  boxSizing: 'border-box',
	  fontFamily: 'inherit',
	}

	/**
	 * FormField Component — Improved label styling
	 */
	function FormField({ label, children }) {
	  return (
	    <div style={{ display: 'flex', flexDirection: 'column' }}>
	      <label
	        style={{
	          fontSize: '0.8125rem',
	          fontWeight: 600,
	          textTransform: 'uppercase',
	          letterSpacing: '0.1em',
	          color: 'rgba(255,255,255,0.85)',
	          marginBottom: '0.5rem',
	          display: 'block',
	        }}
	      >
	        {label}
	      </label>
	      {children}
	    </div>
	  )
	}

	/**
	 * Success State — Celebration & Confirmation
	 */
	function SuccessState() {
	  return (
	    <>
	      <div
	        style={{
	          display: 'flex',
	          alignItems: 'center',
	          gap: '0.5rem',
	          fontSize: '0.75rem',
	          fontWeight: 700,
	          textTransform: 'uppercase',
	          letterSpacing: '0.1em',
	          color: 'var(--gold)',
	          marginBottom: '1rem',
	        }}
	      >
	        <MessageCircle size={16} /> Message Submitted
	      </div>
	      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
	        You're all set!
	      </h3>
	      <div
	        style={{
	          marginTop: '2rem',
	          borderRadius: '0.875rem',
	          border: '1px solid rgba(255,215,0,0.2)',
	          padding: '2rem',
	          textAlign: 'center',
	          background: 'rgba(255,215,0,0.06)',
	        }}
	      >
	        <CheckCircle2
	          style={{
	            height: '3rem',
	            width: '3rem',
	            color: 'var(--gold)',
	            margin: '0 auto 1rem',
	          }}
	        />
	        <h4 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>
	          Message received.
	        </h4>
	        <p
	          style={{
	            fontSize: '0.875rem',
	            color: 'var(--muted-foreground)',
	            lineHeight: 1.6,
	          }}
	        >
	          Our admissions team will contact you shortly.
	        </p>
	      </div>
	    </>
	  )
	}

	export default function ContactForm() {
	  const [name, setName] = useState('')
	  const [email, setEmail] = useState('')
	  const [phone, setPhone] = useState('')
	  const [message, setMessage] = useState('')

	  const [status, setStatus] = useState('idle')
	const [errorMessage, setErrorMessage] = useState('')

	  const handleSubmit = useCallback(async (e) => {
	    e.preventDefault()
	    setStatus('loading')
	    setErrorMessage('')
	    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setStatus('error'); setErrorMessage('Please enter a valid email address.'); return; }
	    if (!phone.match(/^\+?[\d\s-]{10,}$/)) { setStatus('error'); setErrorMessage('Please enter a valid phone number.'); return; }

	    try {
	      await new Promise(resolve => setTimeout(resolve, 1000))
	      setStatus('success')
	    } catch (err) {
	      setStatus('error')
	      setErrorMessage('Something went wrong. Please try again.')
	    }
	  }, [name, email, phone, message])

	  const cardStyle = {
	    borderRadius: '1.25rem',
	    border: '1px solid var(--hairline)',
	    background: 'var(--card)',
	    padding: '2.5rem',
	    boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.4)',
	    transition: 'all 300ms ease',
	  }

	  if (status === 'success') {
	    return (
	      <div style={cardStyle}>
	        <SuccessState />
	      </div>
	    )
	  }

	  const loading = status === 'loading'

	  return (
	    <form onSubmit={handleSubmit} style={cardStyle}>
	      <div style={{ marginBottom: '2rem' }}>
	        <div
	          style={{
	            display: 'flex',
	            alignItems: 'center',
	            gap: '0.5rem',
	            fontSize: '0.75rem',
	            fontWeight: 700,
	            textTransform: 'uppercase',
	            letterSpacing: '0.1em',
	            color: 'var(--gold)',
	            marginBottom: '0.75rem',
	          }}
	        >
	          <MessageCircle size={16} /> Get in Touch
	        </div>
	        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
	          Send us a message
	        </h3>
	        <p
	          style={{
	            fontSize: '0.9375rem',
	            color: 'var(--muted-foreground)',
	            lineHeight: 1.6,
	          }}
	        >
	          We will get back to you as soon as possible.
	        </p>
	      </div>

	      {status === 'error' && (
	        <div
	          role="alert"
	          style={{
	            marginBottom: '1.5rem',
	            borderRadius: '0.75rem',
	            border: '1px solid rgba(239,68,68,0.3)',
	            background: 'rgba(239,68,68,0.1)',
	            padding: '1rem',
	            fontSize: '0.875rem',
	            color: '#fca5a5',
	            lineHeight: 1.5,
	          }}
	        >
	          {errorMessage}
	        </div>
	      )}

	      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
	        <FormField label="Full Name">
	          <input
	            required
	            type="text"
	            value={name}
	            onChange={(e) => setName(e.target.value)}
	            placeholder="Your full name"
	            disabled={loading}
	            style={inputStyle}
	            onFocus={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
	              e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.1)'
	            }}
	            onBlur={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
	              e.currentTarget.style.boxShadow = 'none'
	            }}
	          />
	        </FormField>

	        <FormField label="Email">
	          <input
	            required
	            type="email"
	            value={email}
	            onChange={(e) => setEmail(e.target.value)}
	            placeholder="you@email.com"
	            disabled={loading}
	            style={inputStyle}
	            onFocus={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
	              e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.1)'
	            }}
	            onBlur={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
	              e.currentTarget.style.boxShadow = 'none'
	            }}
	          />
	        </FormField>

	        <FormField label="Phone">
	          <input
	            required
	            type="tel"
	            value={phone}
	            onChange={(e) => setPhone(e.target.value)}
	            placeholder="+91 90000 00000"
	            disabled={loading}
	            style={inputStyle}
	            onFocus={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
	              e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.1)'
	            }}
	            onBlur={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
	              e.currentTarget.style.boxShadow = 'none'
	            }}
	          />
	        </FormField>

	        <FormField label="Message">
	          <textarea
	            required
	            value={message}
	            onChange={(e) => setMessage(e.target.value)}
	            placeholder="How can we help you?"
	            disabled={loading}
	            rows={4}
	            style={{ ...inputStyle, resize: 'vertical' }}
	            onFocus={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
	              e.currentTarget.style.boxShadow = 'ngposet 0 0 0 1px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.1)'
	            }}
	            onBlur={(e) => {
	              e.currentTarget.style.borderColor = 'rgba(255,215,0,0.12)'
	              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
	              e.currentTarget.style.boxShadow = 'none'
	            }}
	          />
	        </FormField>
	      </div>

	      <button
	        type="submit"
	        disabled={loading}
	        style={{
	          width: '100%',
	          display: 'inline-flex',
	          alignItems: 'center',
	          justifyContent: 'center',
	          gap: '0.5rem',
	          padding: '1rem 1.5rem',
	          borderRadius: '0.625rem',
	          background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
	          color: 'var(--navy-deep)',
	          fontWeight: 700,
	          fontSize: '0.9375rem',
	          border: 'none',
	          cursor: loading ? 'not-allowed' : 'pointer',
	          opacity: loading ? 0.8 : 1,
	          transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
	          marginTop: '1.5rem',
	          boxShadow: loading ? '0 4px 16px -4px rgba(255, 215, 0, 0.2)' : '0 8px 32px -8px rgba(255, 215, 0, 0.4)',
	          textTransform: 'none',
	          letterSpacing: 'normal',
	        }}
	        onMouseEnter={(e) => {
	          if (!loading) {
	            e.currentTarget.style.transform = 'translateY(-3px)'
	            e.currentTarget.style.boxShadow = '0 12px 40px -8px rgba(255, 215, 0, 0.5)'
	          }
	        }}
	        onMouseLeave={(e) => {
	          e.currentTarget.style.transform = 'translateY(0)'
	          e.currentTarget.style.boxShadow = '0 8px 32px -8px rgba(255, 215, 0, 0.4)'
	        }}
	        onMouseDown={(e) => {
	          if (!loading) {
	            e.currentTarget.style.transform = 'translateY(-1px)'
	          }
	        }}
	        onMouseUp={(e) => {
	          if (!loading) {
	            e.currentTarget.style.transform = 'translateY(-3px)'
	          }
	        }}
	      >
	        {loading ? (
	          <>
	            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
	            Sending…
	          </>
	        ) : (
	          <>
	            Send Message
	            <ArrowRight size={18} />
	          </>
	        )}
	      </button>
	    </form>
	  )
	}

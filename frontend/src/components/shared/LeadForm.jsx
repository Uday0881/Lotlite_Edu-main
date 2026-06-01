import { useState, useMemo, useCallback } from 'react'
import { ArrowRight, Loader2, CheckCircle2, Rocket } from 'lucide-react'
import { submitLead } from '../../lib/submitLead.js'
import { programmesData } from '../../data/programmesData.js'

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
        <Rocket size={16} /> Application Submitted
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
          Application received.
        </h4>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--muted-foreground)',
            lineHeight: 1.6,
          }}
        >
          A program lead will reach you within 24 hours. Watch your inbox for the diagnostic invite.
        </p>
      </div>
    </>
  )
}

/**
 * LeadForm — Premium application form with smooth interactions
 */
export default function LeadForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Dynamic Program Selection
  const programCategories = programmesData.navigation.filter((n) => n.type === 'dropdown')
  const [selectedCategory, setSelectedCategory] = useState(programCategories[0]?.title || '')

  const subPrograms = useMemo(() => {
    const category = programCategories.find((c) => c.title === selectedCategory)
    return category ? category.items : []
  }, [selectedCategory, programCategories])

  const [selectedProgram, setSelectedProgram] = useState(subPrograms[0]?.label || '')

  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  // Sync program selection when category changes
  useMemo(() => {
    setSelectedProgram(subPrograms[0]?.label || '')
  }, [subPrograms])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setStatus('loading')
      setErrorMessage('')
      try {
        await submitLead({
          fullName,
          email,
          phone,
          programInterest: `${selectedCategory} - ${selectedProgram}`,
        })
        setStatus('success')
      } catch (err) {
        setStatus('error')
        setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      }
    },
    [fullName, email, phone, selectedCategory, selectedProgram]
  )

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
      {/* Header */}
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
          <Rocket size={16} /> Founding Cohort Intake
        </div>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
          Start your application
        </h3>
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--muted-foreground)',
            lineHeight: 1.6,
          }}
        >
          A program lead will reach you within 24 hours.
        </p>
      </div>

      {/* Error State */}
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

      {/* Form Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
        <FormField label="Full Name">
          <input
            required
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <FormField label="Program Category">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              disabled={loading}
              style={{ ...inputStyle, cursor: 'pointer' }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              {programCategories.map((opt) => (
                <option
                  key={opt.title}
                  value={opt.title}
                  style={{ background: 'var(--card)', color: 'var(--foreground)' }}
                >
                  {opt.title}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Specialization">
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              disabled={loading || subPrograms.length === 0}
              style={{
                ...inputStyle,
                cursor: subPrograms.length > 0 ? 'pointer' : 'not-allowed',
                opacity: subPrograms.length > 0 ? 1 : 0.6,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              {subPrograms.map((opt) => (
                <option
                  key={opt.label}
                  value={opt.label}
                  style={{ background: 'var(--card)', color: 'var(--foreground)' }}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        {/* Submit Button */}
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
              Submitting…
            </>
          ) : (
            <>
              Submit Application
              <ArrowRight size={18} />
            </>
          )}
        </button>

        {/* Legal Disclaimer */}
        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--muted-foreground)',
            textAlign: 'center',
            marginTop: '1rem',
            lineHeight: 1.5,
          }}
        >
          By applying, you consent to a structured diagnostic interview and Lotlite communication.
        </p>
      </div>
    </form>
  )
}

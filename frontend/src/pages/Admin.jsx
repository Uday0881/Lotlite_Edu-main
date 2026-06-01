import { useState } from 'react'
import { usePageTheme } from '../hooks/usePageTheme.js'

/**
 * Admin page — simple CMS dashboard for managing site content.
 * Protected by a password check (set ADMIN_PASSWORD below).
 * All form changes log to the console — connect to Spring Boot API as needed.
 */

// ---- Change the admin password here ----
const ADMIN_PASSWORD = 'lotlite2024'

export default function Admin() {
  usePageTheme('home')
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true)
    } else {
      setErr('Incorrect password.')
    }
  }

  if (!authed) {
    return (
      <section style={{ paddingTop: '9rem', paddingBottom: '6rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '28rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
          <div style={{ borderRadius: '1.5rem', border: '1px solid var(--hairline)', backgroundColor: 'var(--card)', padding: '2.5rem', boxShadow: 'var(--shadow-premium)' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>Admin</div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Dashboard Login</h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>Enter the admin password to continue.</p>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="password"
                value={pw}
                onChange={(e) => { setPw(e.target.value); setErr('') }}
                placeholder="Password"
                style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.875rem', color: 'var(--foreground)', outline: 'none', boxSizing: 'border-box' }}
              />
              {err && <p style={{ fontSize: '0.875rem', color: '#fca5a5' }}>{err}</p>}
              <button type="submit" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', background: 'linear-gradient(to right, var(--gold), var(--gold-bright))', color: 'var(--navy-deep)', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                Enter
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return <AdminDashboard />
}

// ---- Admin Dashboard (shown after login) ----
function AdminDashboard() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetched, setFetched] = useState(false)

  async function fetchLeads() {
    setLoading(true)
    try {
      const res = await fetch('/api/leads')
      const data = await res.json()
      setLeads(data)
      setFetched(true)
    } catch (e) {
      console.error('Could not fetch leads:', e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>Admin</div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700 }}>Lotlite Dashboard</h1>
          <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>View and manage leads from MongoDB.</p>
        </div>

        {/* Leads table */}
        <div style={{ borderRadius: '1rem', border: '1px solid var(--hairline)', backgroundColor: 'var(--card)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--hairline)' }}>
            <h2 style={{ fontWeight: 700 }}>Lead Submissions</h2>
            <button
              onClick={fetchLeads}
              disabled={loading}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '0.375rem', background: 'linear-gradient(to right, var(--gold), var(--gold-bright))', color: 'var(--navy-deep)', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '0.875rem', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Loading…' : fetched ? 'Refresh' : 'Load Leads'}
            </button>
          </div>

          {!fetched ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted-foreground)' }}>
              Click "Load Leads" to fetch submissions from MongoDB.
            </div>
          ) : leads.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted-foreground)' }}>No leads yet.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '40rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--hairline)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    {['Name', 'Email', 'Phone', 'Program', 'Date'].map((h) => (
                      <th key={h} style={{ padding: '0.75rem 1.25rem', textAlign: 'left', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr key={lead.id || i} style={{ borderTop: '1px solid var(--hairline)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>{lead.fullName}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--muted-foreground)' }}>{lead.email}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--muted-foreground)' }}>{lead.phone}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--gold)' }}>{lead.programInterest}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                        {lead.submittedAt ? new Date(lead.submittedAt).toLocaleDateString('en-IN') : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

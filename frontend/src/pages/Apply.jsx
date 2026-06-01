import { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { programmesData } from '../data/programmesData.js';

export default function Apply() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('program');
  const [selectedProgram, setSelectedProgram] = useState(slug || '');
  const [errors, setErrors] = useState(null);
  const selected = selectedProgram || slug || '';
  const program = useMemo(
    () => Object.values(programmesData.programs).find((x) => x.slug === slug),
    [slug]
  );

  function handleSubmit(e) {
    e.preventDefault();
    // minimal demo behavior: validate selection
    if (!selected) {
      setErrors('Please select a program before submitting');
      return;
    }
    // TODO: wire real POST flow — keep current project behavior unchanged
    // For now redirect to a simple thank-you route or show a message
    alert(`Application started for ${selected}`);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Apply</h1>
      {errors && <div style={{ color: 'crimson', marginBottom: 8 }}>{errors}</div>}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
        <label>
          Program
          <select value={selected} onChange={(e) => setSelectedProgram(e.target.value)} style={{ display: 'block', width: '100%', padding: 8, marginTop: 6 }}>
            <option value="">-- Select program --</option>
            {Object.values(programmesData.programs).map((p) => (
              <option key={p.slug} value={p.slug}>{p.title}</option>
            ))}
          </select>
        </label>

        <label>
          Full name
          <input type="text" name="name" placeholder="Your full name" style={{ display: 'block', width: '100%', padding: 8, marginTop: 6 }} />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" style={{ display: 'block', width: '100%', padding: 8, marginTop: 6 }} />
        </label>

        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" style={{ padding: '8px 14px', background: 'var(--program-primary, var(--primary))', color: '#fff', borderRadius: 8, border: 'none' }}>Start Application</button>
          <Link to="/" style={{ padding: '8px 14px', borderRadius: 8, background: '#f3f4f6', color: '#111' }}>Cancel</Link>
        </div>
      </form>

      <aside style={{ marginTop: 20 }}>
        <h3>Program details</h3>
        {program ? (
          <div>
            <h4>{program.title}</h4>
            <p>{program.duration} • {program.mode}</p>
            <p>{program.description}</p>
          </div>
        ) : slug ? (
          <p>Program not found.</p>
        ) : (
          <p>Please select a program from the dropdown or pass <code>?program=slug</code> in URL.</p>
        )}
      </aside>
    </main>
  );
}

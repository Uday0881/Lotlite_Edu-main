import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { blogData } from '../../data/blogData.js'

function BlogCard({ blog }) {
  return (
    <article
      style={{
        borderRadius: '1.5rem',
        border: '1px solid var(--hairline)',
        backgroundColor: 'var(--card)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'background-color 300ms',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      <div style={{ position: 'relative', height: '14rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1, transition: 'background 300ms' }} />
        <img
          src={blog.imageUrl}
          alt={blog.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 700ms ease-out' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
          <span
            style={{
              padding: '0.375rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.625rem',
              fontWeight: 700,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              color: 'var(--gold)',
              border: '1px solid rgba(255,215,0,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {blog.category}
          </span>
        </div>
      </div>
      <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.375, transition: 'color 300ms' }}>
          {blog.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625, marginBottom: '1.5rem', flex: 1 }}>
          {blog.excerpt}
        </p>
        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--gold)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Read More <ArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}

/**
 * BlogSection — horizontally scrollable carousel of blog cards.
 * Edit blogData.js to add/remove/edit blog posts.
 */
export default function BlogSection({ blogs = blogData }) {
  const [active, setActive] = useState(0)
  const scrollerRef = useRef(null)

  const scrollToIdx = (idx) => {
    setActive(idx)
    setTimeout(() => {
      const el = scrollerRef.current?.children[idx]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }, 10)
  }

  const go = (dir) => {
    const nextActive = (active + dir + blogs.length) % blogs.length
    scrollToIdx(nextActive)
  }

  return (
    <section id="blogs" style={{ padding: '6rem 0', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--card)', opacity: 0.9 }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>PropTech Blogs</div>
            <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, maxWidth: '32rem' }}>Insights &amp; Engineering</h2>
            <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)', maxWidth: '36rem', lineHeight: 1.625 }}>
              Deep dives on valuation AI, CRM intelligence, tokenized assets, and smart infrastructure.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => go(dir)}
                aria-label={dir === -1 ? 'Previous' : 'Next'}
                style={{
                  height: '2.75rem',
                  width: '2.75rem',
                  borderRadius: '50%',
                  border: '1px solid var(--hairline)',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  color: 'var(--foreground)',
                  transition: 'background 300ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              >
                {dir === -1 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel track */}
        <div 
          ref={scrollerRef} 
          style={{ 
            display: 'flex', 
            gap: '2rem', 
            overflowX: 'auto', 
            paddingBottom: '1rem', 
            scrollbarWidth: 'none', 
            scrollSnapType: 'x mandatory' 
          }}
        >
          {blogs.map((blog, idx) => (
            <div
              key={blog.id || idx}
              onClick={() => scrollToIdx(idx)}
              style={{ 
                flexShrink: 0, 
                scrollSnapAlign: 'center', 
                width: 'min(85%, 380px)',
                cursor: 'pointer',
                opacity: idx === active ? 1 : 0.7,
                transform: idx === active ? 'scale(1)' : 'scale(0.96)',
                transition: 'all 500ms ease'
              }}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          {blogs.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to blog ${i + 1}`}
              onClick={() => scrollToIdx(i)}
              style={{
                height: '0.5rem',
                width: i === active ? '2rem' : '0.5rem',
                borderRadius: '9999px',
                background: i === active ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


import { ArrowRight } from 'lucide-react'
import ApplyDialog from '../shared/ApplyDialog.jsx'
import { heroData } from '../../data/homeData.js'

/**
 * HeroSection — 48/52 viewport-fitted split, Midnight Navy dark + pure-white light.
 * All styles scoped to .hs* — zero bleed to navbar, global styles, or other sections.
 *
 * CSS ORDER RULE (mobile-first):
 *   1. All base / mobile styles
 *   2. max-width breakpoints (mobile overrides)
 *   3. min-width breakpoints (desktop upgrades)
 *   4. Theme overrides (light mode)
 *
 * Putting base styles AFTER a @media block caused the desktop
 * grid-template-columns to be overridden back to 1fr — now fixed.
 */
export default function HeroSection() {
  return (
    <section id="hero" className="hs">
      <style>{`

        /* ================================================================
           1. SECTION WRAPPER
        ================================================================ */
        .hs {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #0D1A30;
          color: #F8F8F0;
          padding-top: 4rem;            /* clears fixed navbar — never touch */
          transition: background 350ms ease, color 350ms ease;
        }

        .hs::before {
          content: '';
          position: absolute;
          top: 15%;
          left: -8%;
          width: 28rem;
          height: 28rem;
          border-radius: 50%;
          background: rgba(255, 197, 0, 0.07);
          filter: blur(72px);
          pointer-events: none;
        }

        /* ================================================================
           2. INNER CONTAINER
        ================================================================ */
        .hs__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 2vh 6vw;
        }

        /* ================================================================
           3. STAGE — BASE (mobile-first: single column)
        ================================================================ */
        .hs__stage {
          display: grid;
          grid-template-columns: 1fr;   /* mobile default */
          gap: 1.25rem;
          align-items: stretch;         /* both cards always same height */
        }

        /* ================================================================
           4. SHARED CARD SHAPE
        ================================================================ */
        .hs__card,
        .hs__img-card {
          border-radius: 24px;
          overflow: hidden;
        }

        /* ================================================================
           5. LEFT — CONTENT CARD (base / mobile)
        ================================================================ */
        .hs__card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          min-height: max(405px, 54vh);
          background: rgba(14, 28, 54, 0.78);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(248, 248, 240, 0.1);
          box-shadow:
            0 24px 56px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(248, 248, 240, 0.07);
          transition:
            background 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .hs__card-inner {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding: clamp(1.5rem, 3vw, 3rem);
        }

        /* ================================================================
           6. OVERLINE BADGE
        ================================================================ */
        .hs__overline {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 197, 0, 0.36);
          background: rgba(255, 197, 0, 0.09);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 0.4rem 1rem;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FFC500;
          margin-bottom: 0.875rem;
        }
        .hs__overline-dot {
          width: 0.35rem;
          height: 0.35rem;
          border-radius: 50%;
          background: #FFC500;
          box-shadow: 0 0 8px rgba(255, 197, 0, 0.7);
          animation: pulse 2s infinite;
        }

        /* ================================================================
           7. GLASSMORPHISM SUB-PANEL
        ================================================================ */
        .hs__glass {
          border-radius: 1.125rem;
          padding: 1.25rem 1.5rem;
          background: rgba(248, 248, 240, 0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(248, 248, 240, 0.09);
          box-shadow:
            0 10px 32px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(248, 248, 240, 0.07);
          transition:
            background 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .hs__headline {
          font-size: clamp(1.75rem, 2.5vw, 2.625rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #F8F8F0;
          margin: 0;
          transition: color 350ms ease;
        }
        .hs__accent {
          background: linear-gradient(90deg, #FFC500, #ffd84d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hs__subheading {
          margin-top: 0.75rem;
          font-size: clamp(0.875rem, 1.4vw, 1rem);
          color: rgba(248, 248, 240, 0.70);
          line-height: 1.6;
          transition: color 350ms ease;
        }

        /* ================================================================
           8. EMPLOYMENT BADGE
        ================================================================ */
        .hs__employment-badge {
          align-self: flex-start;
          margin-top: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(248, 248, 240, 0.13);
          background: rgba(248, 248, 240, 0.06);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            0 2px 16px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(248, 248, 240, 0.1);
          padding: 0.5rem 1rem;
          transition:
            background 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }
        .hs__employment-icon {
          font-size: 0.9375rem;
          line-height: 1;
          opacity: 0.8;
        }
        .hs__employment-text {
          font-size: 0.8125rem;
          color: rgba(248, 248, 240, 0.68);
          font-weight: 400;
          line-height: 1.45;
          transition: color 350ms ease;
        }
        .hs__employment-em {
          color: #F8F8F0;
          font-weight: 700;
          transition: color 350ms ease;
        }

        /* ================================================================
           9. CTA BUTTONS
        ================================================================ */
        .hs__ctas {
          margin-top: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }
        .hs__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          background: linear-gradient(to right, #FFC500, #ffd633);
          color: #0D1A30;
          font-weight: 700;
          font-size: 0.9375rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(255, 197, 0, 0.28);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .hs__btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(255, 197, 0, 0.40);
        }
        .hs__btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(248, 248, 240, 0.2);
          background: rgba(248, 248, 240, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #F8F8F0;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          transition:
            border-color 200ms ease,
            background 200ms ease,
            color 350ms ease;
        }
        .hs__btn-secondary:hover {
          border-color: rgba(255, 197, 0, 0.45);
          background: rgba(248, 248, 240, 0.1);
        }

        /* ================================================================
           10. RIGHT — IMAGE CARD (base)
        ================================================================ */
        .hs__img-card {
          position: relative;
          background: #0A1525;
          transition: background 350ms ease;
        }

        .hs__img-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
        }

        .hs__img-golden {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 80% 18%, rgba(255, 197, 0, 0.30) 0%, transparent 45%),
            radial-gradient(ellipse at 55% 72%, rgba(255, 130, 30, 0.18) 0%, transparent 50%),
            linear-gradient(200deg, rgba(13, 26, 48, 0.10) 0%, rgba(13, 26, 48, 0.52) 100%);
          pointer-events: none;
        }
        .hs__img-gloss {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(248, 248, 240, 0.13) 0%, transparent 30%),
            linear-gradient(180deg, transparent 58%, rgba(13, 26, 48, 0.44) 100%);
          pointer-events: none;
        }

        /* ================================================================
           11. FOOTER / STATS BAR (base)
        ================================================================ */
        .hs__footer {
          border-radius: 1rem;
          padding: 0.875rem 1.25rem;
          background: rgba(248, 248, 240, 0.04);
          border: 1px solid rgba(248, 248, 240, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          flex-shrink: 0;
          transition:
            background 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }
        .hs__meta-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.875rem 1.25rem;
        }
        .hero-info-grid { /* alias — retained for external event hooks */ }
        .hs__meta-label {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(248, 248, 240, 0.40);
          transition: color 350ms ease;
        }
        .hs__meta-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #F8F8F0;
          line-height: 1.3;
          transition: color 350ms ease;
        }

        /* ================================================================
           12. MOBILE-SPECIFIC OVERRIDES (max-width: 1023px)
               Image card needs an explicit height when stacked.
               Footer goes to 4-col only at ≥768px.
        ================================================================ */
        @media (max-width: 1023px) {
          .hs__img-card { min-height: 400px; }
        }

        @media (min-width: 768px) {
          .hs__meta-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        /* ================================================================
           13. DESKTOP OVERRIDES (min-width: 1024px)
               These come LAST so they win over the base rules above.
               The grid goes from 1fr → 48% 52% here.
        ================================================================ */
        @media (min-width: 1024px) {

          /* Viewport-fit: entire hero above the fold */
          .hs__inner {
            height: calc(100vh - 4rem);
            max-height: 900px;
            min-height: 600px;
            overflow: hidden;
          }

          /* Stage: flip to side-by-side 48/52 split */
          .hs__stage {
            flex: 1;
            min-height: 0;
            grid-template-columns: 48% 52%;   /* ← the side-by-side fix */
            gap: 1.25rem;
          }

          /* Cards: let the grid's align-items:stretch drive the height */
          .hs__card {
            height: 100%;          /* fill the grid row */
            min-height: 0;         /* override the mobile safety floor */
          }

          .hs__img-card {
            height: 100%;          /* match the content card exactly */
          }
        }

        /* ================================================================
           14. LIGHT MODE — always last so it beats everything above
        ================================================================ */
        html.light .hs {
          background: #FFFFFF;
          color: #121212;
        }
        html.light .hs::before {
          background: rgba(255, 197, 0, 0.05);
        }
        html.light .hs__card {
          background: #F8F9FA;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border: 1px solid #E2E8F0;
          box-shadow:
            0 4px 28px rgba(0, 0, 0, 0.06),
            0 1px 4px rgba(0, 0, 0, 0.03);
        }
        html.light .hs__glass {
          background: rgba(226, 232, 240, 0.32);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(226, 232, 240, 0.88);
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        html.light .hs__overline {
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          background: rgba(255, 197, 0, 0.10);
          border-color: rgba(255, 197, 0, 0.30);
        }
        html.light .hs__headline   { color: #121212; }
        html.light .hs__subheading { color: rgba(18, 18, 18, 0.66); }
        html.light .hs__employment-badge {
          background: rgba(226, 232, 240, 0.55);
          border: 1px solid #E2E8F0;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        html.light .hs__employment-text { color: rgba(18, 18, 18, 0.66); }
        html.light .hs__employment-em   { color: #121212; }
        html.light .hs__btn-secondary {
          border: 1px solid rgba(18, 18, 18, 0.18);
          background: rgba(18, 18, 18, 0.04);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          color: #121212;
        }
        html.light .hs__btn-secondary:hover {
          border-color: rgba(255, 197, 0, 0.50);
          background: rgba(255, 197, 0, 0.06);
        }
        html.light .hs__img-card { background: #E2E8F0; }
        html.light .hs__img-golden {
          background:
            radial-gradient(ellipse at 80% 18%, rgba(255, 197, 0, 0.22) 0%, transparent 45%),
            radial-gradient(ellipse at 55% 72%, rgba(255, 130, 30, 0.13) 0%, transparent 50%),
            linear-gradient(200deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.18) 100%);
        }
        html.light .hs__img-gloss {
          background:
            linear-gradient(120deg, rgba(255,255,255,0.18) 0%, transparent 30%),
            linear-gradient(180deg, transparent 60%, rgba(200,210,220,0.28) 100%);
        }
        html.light .hs__footer {
          background: #F8F9FA;
          border: 1px solid #E2E8F0;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        html.light .hs__meta-label { color: rgba(18, 18, 18, 0.42); }
        html.light .hs__meta-value { color: #121212; }

      `}</style>

      <div className="hs__inner">

        {/* ── Two-card stage: .hs__card and .hs__img-card are direct siblings ── */}
        <div className="hs__stage">

          {/* LEFT — content card */}
          <div className="hs__card animate-fade-in">
            <div className="hs__card-inner">

              <div className="hs__overline">
                <span className="hs__overline-dot" />
                {heroData.badge}
              </div>

              <div className="hs__glass animate-fade-up">
                <h1 className="hs__headline">
                  {heroData.heading}
                  <span className="hs__accent">{heroData.headingAccent}</span>
                  {' '}{heroData.headingEnd}
                </h1>
                <p className="hs__subheading">{heroData.subheading}</p>
              </div>

              <div className="hs__employment-badge animate-fade-up">
                <span className="hs__employment-icon">{heroData.alertIcon}</span>
                <span className="hs__employment-text">
                  <span className="hs__employment-em">Guaranteed Employment</span>
                  {heroData.alertText.replace('Guaranteed Employment', '')}
                </span>
              </div>

              <div className="hs__ctas animate-fade-up">
                <ApplyDialog>
                  <button type="button" className="hs__btn-primary">
                    {heroData.ctaPrimary} <ArrowRight size={16} />
                  </button>
                </ApplyDialog>
                <a href={heroData.ctaSecondaryHref} className="hs__btn-secondary">
                  {heroData.ctaSecondary}
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT — image card, direct sibling of .hs__card inside .hs__stage */}
          <div className="hs__img-card animate-fade-up">
            <picture>
          <source srcset="https://images.unsplash.com/photo-1600130453845-dfe1e06b58ba?w=1200&q=80&auto=format&fit=crop&fmt=avif" type="image/avif" />
          <source srcset="https://images.unsplash.com/photo-1600130453845-dfe1e06b58ba?w=1200&q=80&auto=format&fit=crop&fmt=webp" type="image/webp" />
          <img 
            src={heroData.heroImage}
            alt="Futuristic city skyline — golden hour"
            loading="eager"
            decoding="async"
          />
          </picture>
            <div className="hs__img-golden" aria-hidden="true" />
            <div className="hs__img-gloss"  aria-hidden="true" />
          </div>

        </div>

        {/* ── Stats bar — full inner width, beneath both cards ── */}
        <div className="hs__footer animate-fade-up">
          <div className="hs__meta-grid hero-info-grid">
            {heroData.infoCards.map(({ label, value }) => (
              <div key={label}>
                <span className="hs__meta-label">{label}</span>
                <span className="hs__meta-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

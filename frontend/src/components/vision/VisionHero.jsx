import { Link } from 'react-router-dom'

const VisionHero = () => (
  <section className="vision-hero-section">
    <div className="vision-hero-grid">
      <div className="vision-hero-copy">
        <span className="vision-pill-badge">OUR DNA</span>
        <h1 className="vision-hero-heading">
          We don't teach real estate.
          <span className="vision-hero-heading-accent"> We build real estate leaders.</span>
        </h1>
        <p className="vision-hero-copytext">
          The traditional MBA is dead. The PropTech era demands operators who can underwrite deals,
          deploy capital, and build scalable technology. Lotlite is not a school; it is a 24-month
          launchpad for the built world's next generation of founders and executives.
        </p>
        <Link to="/apply" className="vision-hero-button">
          Apply for the Cohort
        </Link>
      </div>
      <div className="vision-hero-visual" aria-hidden="true">
        <picture>
          <source srcset="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop&fmt=avif" type="image/avif" />
          <source srcset="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop&fmt=webp" type="image/webp" />
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop" alt="Lotlite Boardroom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem' }} loading="eager" decoding="async" />
        </picture>
      </div>
    </div>
  </section>
)

export default VisionHero;

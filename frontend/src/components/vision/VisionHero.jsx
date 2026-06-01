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
        {/* Replace with high-quality boardroom/architectural image: <img src="/assets/vision-hero.jpg" alt="..." /> */}
      </div>
    </div>
  </section>
)

export default VisionHero;

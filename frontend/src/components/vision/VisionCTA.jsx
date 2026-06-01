import { Link } from 'react-router-dom'

const VisionCTA = () => (
  <section className="vision-cta-section">
    <div className="vision-cta-inner">
      <div className="vision-cta-line" />
      <h2 className="vision-cta-heading">Are you ready to operate?</h2>
      <p className="vision-cta-copy">
        The Founding Cohort is actively reviewing applications. Seating is strictly capped to maintain our experiential standards.
      </p>
      <div className="vision-cta-actions">
        <Link to="/apply" className="vision-cta-button vision-cta-button-primary">
          Apply Now
        </Link>
        <Link to="/contact" className="vision-cta-button vision-cta-button-secondary">
          Contact Admissions
        </Link>
      </div>
    </div>
  </section>
)

export default VisionCTA;

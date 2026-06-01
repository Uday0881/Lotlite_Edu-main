import { usePageTheme } from '../hooks/usePageTheme.js'

/**
 * LegalPage — reusable layout for all legal/policy pages.
 * Accepts title and intro props.
 */
function LegalPage({ title, intro, children }) {
  usePageTheme('home')
  return (
    <section style={{ paddingTop: '9rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>Legal</div>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700 }}>{title}</h1>
        <p style={{ marginTop: '1.25rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{intro}</p>
        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9375rem', color: 'var(--foreground)', opacity: 0.85, lineHeight: 1.75 }}>
          {children}
        </div>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy" intro="Lotlite School of Real Estate is committed to protecting the privacy of applicants, students, alumni, and partners.">
      <p>This document outlines the standard practices Lotlite follows. For specific requests, contact legal@lotlite.in.</p>
      <p>We collect only the information necessary to evaluate applications, deliver the program, and operate placement and incubation services. Sensitive data is stored encrypted at rest and accessed only by authorized program staff.</p>
      <p>You may request access, correction, or deletion of your personal data at any time by writing to our admissions team. We do not sell personal data to third parties.</p>
      <p>This policy is reviewed annually and updated to reflect changes in regulation or program operations.</p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms of Service" intro="By accessing or using Lotlite's platform, programs, or services, you agree to the following terms.">
      <p>These Terms govern your use of the Lotlite website, application portal, and all associated services. If you do not agree, you may not use our services.</p>
      <p>Enrollment in a Lotlite program constitutes agreement to the program's academic policies, employment activation requirements, and code of conduct.</p>
      <p>Lotlite reserves the right to modify these Terms at any time. Continued use after changes constitutes acceptance of the revised Terms.</p>
      <p>For questions, contact legal@lotlite.in.</p>
    </LegalPage>
  )
}

export function RefundPolicy() {
  return (
    <LegalPage title="Refund Policy" intro="Lotlite's refund policy is designed to be transparent and fair for all enrolled students.">
      <p>Refund requests made within 7 days of enrollment confirmation will be processed in full, minus a ₹5,000 administrative fee.</p>
      <p>After 7 days and before the program commencement date, 50% of the tuition fee is refundable.</p>
      <p>No refunds are issued after the program commencement date, except in documented medical emergencies reviewed on a case-by-case basis by the admissions committee.</p>
      <p>Day 1 employment activations are subject to the employment partner's separate agreement and are not covered by this refund policy.</p>
    </LegalPage>
  )
}

export function CodeOfConduct() {
  return (
    <LegalPage title="Code of Conduct" intro="Lotlite students, staff, and partners are expected to uphold the highest standards of professional and ethical conduct.">
      <p>All members of the Lotlite community are expected to treat one another with respect, integrity, and professionalism at all times, including during field immersions and client interactions.</p>
      <p>Academic dishonesty, including plagiarism or misrepresentation of work, will result in immediate dismissal from the program.</p>
      <p>Students representing Lotlite at partner offices are ambassadors of the institution and must adhere to both Lotlite's and the partner organization's standards of conduct.</p>
      <p>Violations of this Code should be reported to the program director. Investigations will be conducted confidentially and fairly.</p>
    </LegalPage>
  )
}

export default Privacy

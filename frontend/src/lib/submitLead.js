/**
 * submitLead — sends lead form data to Spring Boot backend API.
 * Backend then saves to MongoDB AND forwards to Google Sheets.
 *
 * @param {Object} data - { fullName, email, phone, programInterest, source? }
 */
export async function submitLead(data) {
  const payload = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    programInterest: data.programInterest,
    source: data.source || 'homepage',
    submittedAt: new Date().toISOString(),
  }

  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'Failed to submit application. Please try again.')
  }

  return response.json()
}

import ProgramPage from '../../components/shared/ProgramPage.jsx'
import { programmesData } from '../../data/programmesData.js'

export default function DataScience() {
  const program = programmesData.programs['msc-data-science']
  return <ProgramPage program={program} />
}

// This page is currently a placeholder for the Data Science program. It uses the ProgramPage component to display details about the program, which are sourced from the programmesData object. The program ID 'msc-data-science' is used to fetch the relevant data for this program.
// In the future, this page can be enhanced with additional features such as testimonials, faculty information, and more detailed curriculum breakdowns. For now, it serves as a basic informational page for prospective students interested in the Data Science program.
// Note: The legacy route for this page is still defined in App.jsx as '/programs/data-science', but the new dynamic route structure will eventually replace it with '/programmes/:category/:programId' for better scalability and maintainability.
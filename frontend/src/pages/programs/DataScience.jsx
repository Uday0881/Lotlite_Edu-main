import ProgramPage from '../../components/shared/ProgramPage.jsx'
import { programmesData } from '../../data/programmesData.js'

export default function DataScience() {
  const program = programmesData.programs['msc-data-science']
  return <ProgramPage program={program} />
}

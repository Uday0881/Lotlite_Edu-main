import ProgramPage from '../../components/shared/ProgramPage.jsx'
import { programmesData } from '../../data/programmesData.js'

export default function Crm() {
  const program = programmesData.programs['mba']
  return <ProgramPage program={program} />
}

import ProgramPage from '../../components/shared/ProgramPage.jsx'
import { programmesData } from '../../data/programmesData.js'

export default function InformationTechnology() {
  const program = programmesData.programs['msc-computer-applications']
  return <ProgramPage program={program} />
}

import ProgramPage from '../../components/shared/ProgramPage.jsx'
import { programmesData } from '../../data/programmesData.js'

export default function MbaRealEstate() {
  const program = programmesData.programs['mba']
  return <ProgramPage program={program} />
}

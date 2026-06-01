import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Incubation from './pages/Incubation.jsx'
import Outcomes from './pages/Outcomes.jsx'
import Vision from './pages/Vision.jsx'
import { Privacy, Terms, RefundPolicy, CodeOfConduct } from './pages/LegalPages.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'
import MbaRealEstate from './pages/programs/MbaRealEstate.jsx'
import DataScience from './pages/programs/DataScience.jsx'
import InformationTechnology from './pages/programs/InformationTechnology.jsx'
import Crm from './pages/programs/Crm.jsx'
import ProgramDetail from './pages/programmes/ProgramDetail.jsx'
import ProgramCurriculum from './components/programs/ProgramCurriculum'
import Apply from './pages/Apply'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/incubation" element={<Incubation />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/outcomes" element={<Outcomes />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Legacy Routes - keeping them in case they are used elsewhere */}
          <Route path="/programs/mba-real-estate" element={<MbaRealEstate />} />
          <Route path="/programs/data-science" element={<DataScience />} />
          <Route path="/programs/information-technology" element={<InformationTechnology />} />
          <Route path="/programs/crm" element={<Crm />} />
          
          {/* New Dynamic Programmes Routes */}
          <Route path="/programmes/:category/:programId" element={<ProgramDetail />} />

          {/* Dynamic program by slug (centralized curriculum) */}
          <Route path="/program/:slug" element={<ProgramCurriculum />} />

          {/* Apply form with contextual program query */}
          <Route path="/apply" element={<Apply />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

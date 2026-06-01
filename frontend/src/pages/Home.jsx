import { useEffect } from 'react'
import { usePageTheme } from '../hooks/usePageTheme.js'
import HeroSection from '../components/home/HeroSection.jsx'
import ImageMarquee from '../components/home/ImageMarquee.jsx'
import SpiralCurriculumOverview from '../components/curriculum/SpiralCurriculumOverview.jsx'
import PartnersMarquee from '../components/home/PartnersMarquee.jsx'
import LifeCarousel from '../components/home/LifeCarousel.jsx'
import DemoDay from '../components/home/DemoDay.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import DailySchedule from '../components/home/DailySchedule.jsx'
import PillarsSection from '../components/home/PillarsSection.jsx'
import FounderMessage from '../components/home/FounderMessage.jsx'
import OutcomesSection from '../components/home/OutcomesSection.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import AdmissionsProcess from '../components/shared/AdmissionsProcess.jsx'
import FinancingOptions from '../components/shared/FinancingOptions.jsx'
import BlogSection from '../components/shared/BlogSection.jsx'
import FAQ from '../components/shared/FAQ.jsx'

/**
 * Home page — assembles all home sections.
 * To add/remove/reorder sections, just add/remove/move component lines here.
 * All section content is in src/data/homeData.js
 */
export default function Home() {
  usePageTheme('home')

  useEffect(() => {
    document.title = 'Lotlite School of Real Estate — The New Era of Real Estate Leadership'
  }, [])

  return (
    <>
      <HeroSection />
      <SpiralCurriculumOverview />
      <PartnersMarquee />
      <LifeCarousel />
      <ImageMarquee />
      <DemoDay />
      <FeaturedProjects />
      <DailySchedule />
      <PillarsSection />
      <FounderMessage />
      <OutcomesSection />
      <TestimonialsSection />
      <AdmissionsProcess />
      <FinancingOptions />
      <BlogSection />
      <FAQ />
    </>
  )
}


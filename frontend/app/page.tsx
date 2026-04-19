import HeroSection from '@/components/home/HeroSection'
import DepartmentsSection from '@/components/home/DepartmentsSection'
import StatsSection from '@/components/home/StatsSection'
import AboutPreview from '@/components/home/AboutPreview'
import DoctorsPreview from '@/components/home/DoctorsPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsPreview from '@/components/home/NewsPreview'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DepartmentsSection />
      <StatsSection />
      <AboutPreview />
      <DoctorsPreview />
      <TestimonialsSection />
      <NewsPreview />
      <CTASection />
    </>
  )
}

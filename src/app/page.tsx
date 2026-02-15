import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PostersMarquee } from "@/components/home/posters-marquee"
import { TrustIndicators } from "@/components/home/trust-indicators"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pb-16 md:pb-0">
        <HeroSection />
        <PostersMarquee />
        <TrustIndicators />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

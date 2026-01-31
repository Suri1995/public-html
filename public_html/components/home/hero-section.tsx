import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-[#2563eb] to-[#60a5fa] text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance">
              Advanced <span className="text-accent drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">Eye Care</span> for All Ages
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed opacity-95 text-pretty max-w-xl mx-auto md:mx-0">
              From routine check-ups to advanced surgeries, experience world-class eye care with our expert team of ophthalmologists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="lg" variant="destructive" asChild className="bg-accent hover:bg-accent/90">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/video-consultation">Video Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 hidden md:flex justify-center">
            <Image
              src="/modern-eye-care-hospital-reception-area.jpg"
              alt="Modern Eye Care Hospital"
              width={400}
              height={400}
              className="rounded-3xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

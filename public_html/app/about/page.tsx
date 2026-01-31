import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Heart, Users, Target, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make prioritizes your comfort, safety, and visual health outcomes.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Our team maintains the highest standards through continuous education and advanced training.",
    },
    {
      icon: Users,
      title: "Compassionate Service",
      description: "We treat every patient like family, providing empathetic care throughout your journey.",
    },
    {
      icon: Target,
      title: "Innovation & Technology",
      description: "Investing in cutting-edge equipment to deliver the most effective treatments available.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-[#2563eb] to-[#60a5fa] text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              About <span className="text-accent drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">Amma Eye Care</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-95 text-pretty">
              Dedicated to preserving and enhancing vision through exceptional eye care, advanced technology, and
              compassionate service for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to make world-class eye care accessible to everyone, Amma Eye Care Hospital has
                  been serving the community for over 25 years. What started as a small clinic has grown into a
                  comprehensive eye care center equipped with the latest technology and staffed by experienced
                  specialists.
                </p>
                <p>
                  Our journey has been guided by a simple principle: every patient deserves the best possible care,
                  delivered with compassion and respect. We've treated over 50,000 patients and performed more than
                  15,000 successful surgeries, earning the trust of families across generations.
                </p>
                <p>
                  Today, we offer a complete range of ophthalmology services, from routine eye exams to complex surgical
                  procedures, all under one roof. Our commitment to excellence and patient satisfaction remains
                  unwavering.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/modern-ophthalmology-clinic-interior.jpg"
                alt="Amma Eye Care Hospital interior"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section 
        className="py-12 md:py-16"
        style={{
          backgroundImage: "linear-gradient(90deg, #dcf5ff, rgba(220, 245, 255, 0.8))"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced ophthalmologists and dedicated staff committed to your vision health
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Meet Our Specialists</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team of board-certified ophthalmologists brings decades of combined experience in various
                  subspecialties including cataract surgery, refractive surgery, glaucoma management, retinal care, and
                  pediatric ophthalmology. Each specialist is committed to staying current with the latest advancements
                  in eye care through continuous education and training.
                </p>
                <Button asChild>
                  <Link href="/appointment">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16" style={{ backgroundImage: "linear-gradient(135deg, #f0f9ff, #e0f2fe)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">State-of-the-Art Technology</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We invest continuously in the latest diagnostic and surgical equipment to ensure the most accurate
              diagnoses and effective treatments. Our advanced technology includes OCT scanners for retinal imaging,
              phacoemulsification systems for cataract surgery, femtosecond lasers for LASIK procedures, and
              comprehensive diagnostic equipment for glaucoma and other conditions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Advanced Diagnostics</h4>
                  <p className="text-sm text-muted-foreground">
                    OCT, visual field analyzers, corneal topography, and comprehensive testing equipment
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Surgical Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Femtosecond lasers, phacoemulsification systems, and modern surgical microscopes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Patient Comfort</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern facilities designed for accessibility, comfort, and safety
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary to-[#2563eb] text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience the Difference</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of satisfied patients who trust us with their vision. Schedule your appointment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/appointment">
                    Book Appointment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

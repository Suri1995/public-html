import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Eye, Activity, Glasses, Microscope, Scan, Shield, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const serviceCategories = [
    {
      category: "Diagnostic Services",
      icon: Scan,
      services: [
        {
          name: "Computerized Eye Testing",
          description: "Advanced digital eye examination using latest technology for precise vision assessment.",
          slug: "computerized-eye-testing",
        },
        {
          name: "Eye Pressure Test",
          description: "Accurate intraocular pressure measurement to detect glaucoma and other conditions.",
          slug: "eye-pressure-test",
        },
        {
          name: "Visual Fields Testing",
          description: "Comprehensive peripheral vision assessment for glaucoma and neurological conditions.",
          slug: "visual-fields-testing",
        },
        {
          name: "OCT (Retina Scan)",
          description: "High-resolution imaging of the retina for detailed analysis of retinal health.",
          slug: "oct-retina-scan",
        },
        {
          name: "Diabetic & Hypertension Retinopathy Screening",
          description: "Early detection of diabetes and hypertension effects on your eyes.",
          slug: "diabetic-hypertension-screening",
        },
        {
          name: "Thyroid Eye Screening",
          description: "Specialized screening for thyroid-related eye complications and disorders.",
          slug: "thyroid-eye-screening",
        },
      ],
    },
    {
      category: "Surgical Services",
      icon: Microscope,
      services: [
        {
          name: "Customized Cataract Surgeries",
          description: "Advanced phacoemulsification with premium IOL options for optimal vision restoration.",
          slug: "cataract-surgery",
        },
        {
          name: "LASIK – Freedom from Glasses & Contact Lens",
          description: "Blade-free laser vision correction for myopia, hyperopia, and astigmatism.",
          slug: "lasik",
        },
        {
          name: "ICL – For those not suitable for LASIK",
          description: "Implantable Collamer Lens for high refractive errors and thin corneas.",
          slug: "icl",
        },
        {
          name: "Cornea and Anterior Segment Services",
          description: "Advanced treatment for corneal diseases, infections, and transplantation.",
          slug: "cornea-services",
        },
        {
          name: "Oculoplasty",
          description: "Cosmetic and reconstructive surgery for eyelids, orbit, and tear ducts.",
          slug: "oculoplasty",
        },
        {
          name: "YAG Laser",
          description: "Laser capsulotomy for posterior capsule opacification after cataract surgery.",
          slug: "yag-laser",
        },
      ],
    },
    {
      category: "Refractive & Vision Correction",
      icon: Glasses,
      services: [
        {
          name: "Advanced Refractive Procedures",
          description: "Customized solutions for youth and adults seeking spectacle independence.",
          slug: "refractive-procedures",
        },
        {
          name: "Myopia Management",
          description: "Progressive myopia control for children using specialized techniques.",
          slug: "myopia-management",
        },
        {
          name: "Refractive Cornea Collagen Cross-Linking",
          description: "Strengthening treatment for keratoconus and corneal ectasia.",
          slug: "cornea-cross-linking",
        },
        {
          name: "Contact Lenses – Soft & RGP Lenses",
          description: "Customized contact lens fitting for all refractive needs.",
          slug: "contact-lenses",
        },
        {
          name: "Scleral Lenses",
          description: "Large-diameter gas permeable lenses for irregular corneas and dry eyes.",
          slug: "scleral-lenses",
        },
        {
          name: "Orthokeratology",
          description: "Overnight corneal reshaping lenses for myopia control without surgery.",
          slug: "orthokeratology",
        },
      ],
    },
    {
      category: "Specialized Eye Care",
      icon: Eye,
      services: [
        {
          name: "Children's Eye Checkup",
          description: "Comprehensive pediatric eye examinations for early detection of vision problems.",
          slug: "children-eye-checkup",
        },
        {
          name: "Gadget Vision Syndrome",
          description: "Treatment for digital eye strain and screen-related vision problems.",
          slug: "gadget-vision-syndrome",
        },
        {
          name: "Digital Eye Strain Treatment",
          description: "Relief from computer vision syndrome with specialized therapies.",
          slug: "digital-eye-strain",
        },
        {
          name: "Low Vision Devices",
          description: "Assistive devices and rehabilitation for patients with reduced vision.",
          slug: "low-vision-devices",
        },
      ],
    },
    {
      category: "Medical Treatment",
      icon: Activity,
      services: [
        {
          name: "Glaucoma Services",
          description: "Comprehensive diagnosis, treatment, and management of glaucoma.",
          slug: "glaucoma",
        },
      ],
    },
    {
      category: "Retail Services",
      icon: Shield,
      services: [
        {
          name: "Opticals",
          description: "Wide range of quality eyewear, frames, and lenses to suit your style.",
          slug: "opticals",
        },
        {
          name: "Pharmacy",
          description: "In-house pharmacy with all prescribed eye medications and supplements.",
          slug: "pharmacy",
        },
      ],
    },
  ]

  const allServicesCount = serviceCategories.reduce((acc, cat) => acc + cat.services.length, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Comprehensive Eye Care Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {allServicesCount}+ specialized services for complete eye health across all ages – from diagnostic
              screenings to advanced surgical procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Desktop View - Cards Grid */}
      <section className="py-16 hidden md:block">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="group hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View - Accordion */}
      <section className="py-12 md:hidden">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {serviceCategories.map((category, categoryIndex) => (
              <AccordionItem key={categoryIndex} value={`category-${categoryIndex}`} className="border rounded-lg">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <category.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-left">{category.category}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4 pt-2">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border-l-2 border-primary pl-4 py-2">
                        <h3 className="font-semibold text-base mb-1">{service.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">{service.description}</p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-sm font-medium text-primary inline-flex items-center gap-1"
                        >
                          Learn More
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Insurance Notice */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Cashless Facility Available</h3>
                  <p className="text-muted-foreground">
                    We accept major insurance providers. Most treatments and procedures are covered under cashless
                    facility for your convenience.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Need Help Choosing a Service?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our specialists can guide you to the right treatment. Book an appointment or start a video consultation.
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
                <Link href="/video-consultation">Video Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-card border-t shadow-lg flex gap-2 z-50">
        <Button className="flex-1" asChild>
          <Link href="/appointment">Book Appointment</Link>
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent" asChild>
          <Link href="/video-consultation">Video Consult</Link>
        </Button>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Eye, Glasses, Search, Baby, Activity, Monitor, ScanEye, Stethoscope, Heart, FlaskRound, Pill, Shield, Sun, Focus, Zap, Scan, Brain, Droplets, CircleDot, Sparkles, EyeOff, Scale, Syringe } from "lucide-react"

const serviceCategories = [
  {
    title: "Surgical Services",
    description: "Advanced surgical solutions for vision correction",
    services: [
      { icon: Eye, title: "Cataract Surgery", description: "Advanced phacoemulsification with premium IOLs", slug: "cataract-surgery" },
      { icon: Glasses, title: "LASIK Surgery", description: "Blade-free laser vision correction", slug: "lasik" },
      { icon: Focus, title: "ICL", description: "Implantable lenses for high refractive errors", slug: "icl" },
      { icon: Sparkles, title: "Cornea Services", description: "Corneal transplant and disease management", slug: "cornea-services" },
      { icon: EyeOff, title: "Squint Surgery", description: "Correction of eye misalignment", slug: "squint" },
      { icon: Scale, title: "Oculoplasty", description: "Eyelid and orbit surgery", slug: "oculoplasty" },
    ],
  },
  {
    title: "Medical Eye Care",
    description: "Comprehensive treatment for eye diseases",
    services: [
      { icon: Search, title: "Glaucoma Services", description: "Diagnosis and management to preserve vision", slug: "glaucoma" },
      { icon: Stethoscope, title: "Retina Services", description: "Medical and surgical retina care", slug: "retina-services" },
      { icon: Activity, title: "Diabetic Retinopathy", description: "Screening and treatment for diabetic eye disease", slug: "diabetic-retinopathy-screening" },
      { icon: Droplets, title: "Dry Eye Treatment", description: "Advanced therapy for dry eye syndrome", slug: "dry-eye-treatment" },
      { icon: Sun, title: "Uveitis Care", description: "Treatment for eye inflammation", slug: "uveitis" },
      { icon: CircleDot, title: "Keratoconus", description: "Cross-linking and management", slug: "keratoconus" },
    ],
  },
  {
    title: "Specialized Services",
    description: "Focused care for specific needs",
    services: [
      { icon: Baby, title: "Children's Eye Care", description: "Child-friendly pediatric ophthalmology", slug: "children-eye-checkup" },
      { icon: Monitor, title: "Digital Eye Strain", description: "Relief from computer vision syndrome", slug: "digital-eye-strain" },
      { icon: ScanEye, title: "Computerized Testing", description: "Advanced automated eye examinations", slug: "computerized-eye-testing" },
      { icon: Heart, title: "Low Vision Aids", description: "Visual aids for the visually impaired", slug: "low-vision-aids" },
      { icon: Syringe, title: "Intravitreal Injections", description: "Targeted eye injections for retinal conditions", slug: "intravitreal-injections" },
      { icon: Brain, title: "Neuro-ophthalmology", description: "Treatment for nerve-related eye conditions", slug: "neuro-ophthalmology" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-[#2563eb] to-[#60a5fa] text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-accent drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">Eye Care</span> Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-95 text-pretty">
              Comprehensive eye care solutions with advanced technology and experienced specialists for all your vision needs.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12 md:py-16 pb-24 md:pb-16">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    href={`/services/${service.slug}`}
                    className="block group"
                  >
                    <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

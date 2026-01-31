import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Eye, Glasses, Search, Baby, Activity, Monitor } from "lucide-react"

const services = [
  {
    icon: Eye,
    title: "Cataract Surgery",
    description: "Advanced phacoemulsification with premium IOLs. Restore your vision with our bladeless, painless procedure.",
    slug: "cataract-surgery",
  },
  {
    icon: Glasses,
    title: "LASIK Surgery",
    description: "Blade-free LASIK for permanent vision correction. Say goodbye to glasses and contacts.",
    slug: "lasik",
  },
  {
    icon: Search,
    title: "Glaucoma Treatment",
    description: "Early detection and advanced treatment to prevent vision loss from glaucoma.",
    slug: "glaucoma",
  },
  {
    icon: Baby,
    title: "Children's Eye Care",
    description: "Specialized pediatric ophthalmology with child-friendly approach and facilities.",
    slug: "children-eye-checkup",
  },
  {
    icon: Activity,
    title: "Diabetic Retinopathy",
    description: "Regular screening and treatment to protect your vision if you have diabetes.",
    slug: "diabetic-retinopathy-screening",
  },
  {
    icon: Monitor,
    title: "Digital Eye Strain",
    description: "Relief from computer vision syndrome with specialized treatment and blue light solutions.",
    slug: "digital-eye-strain",
  },
]

export function ServicesSection() {
  return (
    <section 
      className="py-12 md:py-16"
      style={{
        backgroundImage: "linear-gradient(53deg, #FF9E0A 11.33%, rgba(255, 158, 10, .41) 85.25%, rgba(255, 158, 10, 0) 95.21%)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#6a1818] mb-2">
            Our Top Services
          </h2>
          <p className="text-[#625b5b] text-base md:text-lg">
            Comprehensive eye care solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} className="block group">
              <Card className="h-full bg-[#fff7f7] border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

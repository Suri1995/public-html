import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { CheckCircle, ArrowRight, Shield, Clock, Award } from "lucide-react"
import { notFound } from "next/navigation"
import { serviceData } from "@/lib/service-data"

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
              <span>/</span>
              <span>{service.title}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.intro}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
              </CardContent>
            </Card>

            {/* Who Needs This */}
            <Card>
              <CardHeader>
                <CardTitle>Who Needs This Service?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.whoNeedsIt.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Symptoms */}
            {service.symptoms && (
              <Card>
                <CardHeader>
                  <CardTitle>Symptoms & Indications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Diagnosis */}
            {service.diagnosis && (
              <Card>
                <CardHeader>
                  <CardTitle>Diagnosis & Technology</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">{service.diagnosis}</p>
                </CardContent>
              </Card>
            )}

            {/* Treatment */}
            <Card>
              <CardHeader>
                <CardTitle>Treatment & Procedure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">{service.treatment}</p>
              </CardContent>
            </Card>

            {/* Recovery */}
            {service.recovery && (
              <Card>
                <CardHeader>
                  <CardTitle>Recovery & Follow-up</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">{service.recovery}</p>
                </CardContent>
              </Card>
            )}

            {/* FAQs */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* CTA Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Ready to Get Started?</h3>
                  <p className="text-sm mb-6 opacity-90">
                    Schedule your appointment or consult with our specialists online.
                  </p>
                  <div className="space-y-3">
                    <Button variant="secondary" className="w-full" size="lg" asChild>
                      <Link href="/appointment">
                        Book Appointment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      size="lg"
                      asChild
                    >
                      <Link href="/video-consultation">Video Consult</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Expert Care</h4>
                      <p className="text-xs text-muted-foreground">Experienced ophthalmologists</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Insurance Accepted</h4>
                      <p className="text-xs text-muted-foreground">Cashless facility available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Quick Appointments</h4>
                      <p className="text-xs text-muted-foreground">Same-day slots available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Have Questions?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Call us or schedule a consultation to learn more.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-card border-t shadow-lg flex gap-2 z-50">
        <Button className="flex-1" asChild>
          <Link href="/appointment">Book Now</Link>
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent" asChild>
          <Link href="/video-consultation">Video Consult</Link>
        </Button>
      </div>
    </div>
  )
}

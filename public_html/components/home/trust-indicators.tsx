import { CheckCircle } from "lucide-react"

const trustItems = [
  {
    title: "25+ Specialized Services",
    description: "Comprehensive eye care solutions",
  },
  {
    title: "Advanced Technology",
    description: "Latest diagnostic & surgical equipment",
  },
  {
    title: "Insurance Accepted",
    description: "Most major insurance plans covered",
  },
  {
    title: "Expert Ophthalmologists",
    description: "Experienced & caring specialists",
  },
]

export function TrustIndicators() {
  return (
    <section className="bg-surface py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

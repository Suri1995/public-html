import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Amma Eye Care Hospital</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing advanced, compassionate eye care services for all ages. Your vision is our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/video-consultation" className="text-muted-foreground hover:text-primary transition-colors">
                  Video Consultation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">info@ammaeyecare.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">Your City, India</span>
              </li>
            </ul>
          </div>

          {/* Hours & Insurance */}
          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <div className="flex items-start gap-2 text-sm mb-4">
              <Clock className="h-4 w-4 mt-0.5 text-primary" />
              <div className="text-muted-foreground">
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="mt-6 p-3 bg-accent/10 rounded-lg">
              <p className="text-sm font-medium text-accent">Cashless Facility Available</p>
              <p className="text-xs text-muted-foreground mt-1">With Major Insurances</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Amma Eye Care Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

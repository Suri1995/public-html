import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <>
      <footer className="bg-primary text-primary-foreground pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Amma Eye Care Hospital</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
                Providing world-class eye care services with compassion and expertise.
              </p>
              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@AmmaEyeCareHospitalHyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground transition-colors group"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary-foreground group-hover:fill-[#ff0000]">
                    <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.8-1.6-.8-2-.9C17.9 2.7 12 2.7 12 2.7s-5.9 0-8.7.3c-.4.1-1.3.1-2 .9C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.7.8 1.8.8 2.2.9 1.6.2 8.5.3 8.5.3s5.9 0 8.7-.3c.4-.1 1.3-.1 2-.9.6-.7.8-2.3.8-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.6 13.9V7.9l6.4 3-6.4 3z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100054507757497"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground transition-colors group"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary-foreground group-hover:fill-[#1877f2]">
                    <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.7V11h3.1V8.3c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.4.1 2.7.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.7V11h3.6l-.5 3.7h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ammaeyecarehospital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground transition-colors group"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary-foreground group-hover:fill-[#E4405F]">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0 3.5a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6zm0 10.4a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.6-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/appointment" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/cataract-surgery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Cataract Surgery
                  </Link>
                </li>
                <li>
                  <Link href="/services/lasik" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    LASIK Surgery
                  </Link>
                </li>
                <li>
                  <Link href="/services/glaucoma" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Glaucoma Treatment
                  </Link>
                </li>
                <li>
                  <Link href="/services/children-eye-checkup" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {"Children's Eye Care"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="tel:+919246446244" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91 92464 46244
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:ammaeyecarehospital@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                    ammaeyecarehospital@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    Chintalkunta Check post, Hyderabad - Vijayawada Hwy, near Vanasthalipuram, L.B. Nagar, Hyderabad, Telangana 500070
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p>Mon-Sat: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-sm text-primary-foreground/90">
              &copy; {new Date().getFullYear()} Amma Eye Care Hospital. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground mt-1">
              Developed by{" "}
              <a
                href="https://sellute.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                sellute.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile CTA - Fixed at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-3 flex gap-2">
        <Link
          href="tel:+919246446244"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary text-secondary-foreground rounded-md font-semibold text-sm"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Link>
        <Link
          href="/appointment"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent text-accent-foreground rounded-md font-semibold text-sm"
        >
          Book Appointment
        </Link>
      </div>
    </>
  )
}

import Link from "next/link";
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, ChevronRight } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "New Patients", href: "/newpatients" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Our Services", href: "/services#our-services" },
    { name: "Auto Injury Care", href: "/services#auto-injury" },
    { name: "Sports Injury Care", href: "/services#sports" },
    { name: "Joint Repair", href: "/services#joint-repair" },
    { name: "Injury Disability", href: "/services#injury-disability" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-sage-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl font-bold">PA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold">Pain Atlanta</span>
                <span className="text-xs text-primary-foreground/70">Stone Mountain, GA</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              In pain? Injured? We can help. Serving the Stone Mountain area for 27 years with multidisciplinary chiropractic care focused on preventing acute pain from becoming chronic pain.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/StoneMountainBackandNeckPainReliefClinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/doctorchrisconnelly/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/search/2045+Rockbridge+Road,+Stone+Mountain,+GA+30087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>2045 Rockbridge Road<br />Stone Mountain, GA 30087</span>
              </a>
              <a
                href="tel:+17704697330"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(770) 469-7330</span>
              </a>
              <a
                href="mailto:info@painatlanta.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@painatlanta.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 9AM - 7PM</p>
                  <p>Saturday: 9AM - 12PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-xs mt-1 opacity-80">Last patient 30 min before close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Pain Atlanta. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link href="/hipaa" className="hover:text-primary-foreground transition-colors">HIPAA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

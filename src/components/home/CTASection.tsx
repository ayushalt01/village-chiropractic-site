import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/wellness-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark/95 to-sage-dark/90" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey to Better Health?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Take the first step toward a pain-free life. Schedule your consultation today 
            and discover how chiropractic care can help you feel your best.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-primary-foreground text-sage-dark hover:bg-primary-foreground/90">
                <Calendar className="h-5 w-5" />
                Book Your Appointment
              </Button>
            </Link>
            <a href="tel:+17704697330">
              <Button variant="hero-outline" size="xl">
                <Phone className="h-5 w-5" />
                Call (770) 469-7330
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-chiropractic.jpg";

const benefits = [
  "Natural Pain Relief",
  "Personalized Care Plans",
  "Same-Day Appointments",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Welcoming chiropractic clinic interior with professional care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark/95 via-sage-dark/80 to-sage-dark/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-foreground/20">
              Serving Stone Mountain for 27 Years
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Find Relief. <br />
            <span className="text-sage-light">Restore Balance.</span><br />
            Live Better.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience personalized chiropractic care designed to help you overcome pain, 
            improve mobility, and achieve lasting wellness. Our goal is to prevent acute pain 
            from becoming chronic pain. Your neighborhood clinic, dedicated to your health.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+17704697330">
              <Button variant="hero-outline" size="xl">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-sage-light" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowRight className="h-6 w-6 text-primary-foreground/60 rotate-90" />
      </motion.div>
    </section>
  );
}

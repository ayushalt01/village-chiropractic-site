"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Bone, Car, Dumbbell, UserCheck } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Auto Injury & Whiplash",
    description: "Same-day care for auto injuries with documentation support to prevent long-term issues.",
    href: "/services#auto-injury",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Care",
    description: "Performance-minded rehab and chiropractic care to help you return stronger and prevent reinjury.",
    href: "/services#sports",
  },
  {
    icon: Bone,
    title: "Joint Repair & Regeneration",
    description: "Joint damage evaluation, X-rays when needed, and regenerative therapies for tissue healing.",
    href: "/services#joint-repair",
  },
  {
    icon: Activity,
    title: "Brain Injury & Concussion",
    description: "Specialized evaluation and care for brain injuries, headaches, and post-concussion symptoms.",
    href: "/services#brain-injury",
  },
  {
    icon: UserCheck,
    title: "Impairment & Disability Ratings",
    description: "Expert impairment ratings, injury causation, and clinical services for legal or insurance needs.",
    href: "/services#impairment-ratings",
  },
  {
    icon: Activity,
    title: "Family, Pregnancy & Senior Care",
    description: "Gentle or traditional adjustments for kids, adults, pregnancy, and post-surgery patients.",
    href: "/services#family-care",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Chiropractic Care
          </h2>
          <p className="text-muted-foreground text-lg">
            From pain relief to long-term wellness, we offer a full range of chiropractic services 
            to meet your health needs at every stage of life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                scroll={true}
                className="group block bg-card rounded-2xl p-8 shadow-soft hover:shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/services">
            <Button variant="default" size="lg">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

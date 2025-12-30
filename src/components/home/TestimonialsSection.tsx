"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Stone Mountain",
    text: "After years of chronic back pain, I finally found relief at Pain Atlanta. Dr. Connelly took the time to understand my issues and created a plan that actually worked. I can finally play with my kids again!",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Decatur",
    text: "I was in a car accident and was referred to Pain Atlanta. The staff was so caring and professional. They helped me through the entire recovery process and even handled the insurance paperwork.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Stone Mountain",
    text: "As a senior, I was hesitant about chiropractic care, but the doctors use such gentle techniques. I feel more mobile and have less stiffness than I have in years. Highly recommend!",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
          <span className="text-primary font-medium mb-4 block">Patient Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it—hear from the families and individuals 
            we've helped find relief and wellness in Stone Mountain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="h-10 w-10 text-sage-light absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/testimonials">
            <Button variant="outline" size="lg">
              Read More Reviews
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export const dynamic = 'force-dynamic';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Quote, Calendar } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Stone Mountain, GA",
    condition: "Chronic Back Pain",
    text: "After years of living with chronic lower back pain, I finally found relief at Village Chiropractic. The doctors took the time to understand my issues and created a treatment plan that actually worked. I can finally play with my kids again without worrying about my back. The staff is incredibly caring and the office has such a warm, welcoming atmosphere.",
    rating: 5,
  },
  {
    name: "James Thompson",
    location: "Decatur, GA",
    condition: "Auto Accident Recovery",
    text: "I was in a car accident and was referred to Village Chiropractic by a friend. The doctors and their team were so caring and professional throughout my entire recovery. They helped me navigate the insurance process and provided excellent care. I'm now pain-free and back to my normal activities. I can't thank them enough!",
    rating: 5,
  },
  {
    name: "Linda Kim",
    location: "Stone Mountain, GA",
    condition: "Senior Wellness",
    text: "As a senior, I was hesitant about chiropractic care, but the doctors use such gentle techniques. After just a few visits, I noticed a significant improvement in my mobility and much less stiffness. I feel more active and energetic than I have in years. The staff treats me like family every time I visit.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    location: "Lithonia, GA",
    condition: "Sports Performance",
    text: "As a weekend athlete, I was dealing with recurring shoulder and hip issues. The doctors not only addressed my immediate problems but also helped me understand how to prevent future injuries. My golf game has improved, and I'm running more comfortably than ever. Highly recommend for any active person!",
    rating: 5,
  },
  {
    name: "Patricia Chen",
    location: "Stone Mountain, GA",
    condition: "Neck Pain & Headaches",
    text: "I was suffering from terrible tension headaches and neck pain from working at a computer all day. The doctors identified the source of my issues and provided effective treatment along with ergonomic advice. My headaches have decreased dramatically, and I feel so much better at work. Life-changing care!",
    rating: 5,
  },
  {
    name: "Robert Davis",
    location: "Tucker, GA",
    condition: "Sciatica Relief",
    text: "The sciatic pain I was experiencing made it difficult to even walk. After just a few weeks of treatment at Village Chiropractic, I went from barely being able to move to walking pain-free. The doctors' approach is thorough, and they genuinely care about their patients. I'm so grateful I found this practice.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    location: "Stone Mountain, GA",
    condition: "Family Care",
    text: "Our whole family sees the doctors at Village Chiropractic—from my 8-year-old daughter to my 70-year-old mother. They're gentle with the kids and thorough with adults. It's so convenient to have one trusted provider for everyone. The office is always clean, the staff is friendly, and appointments run on time. We love Village Chiropractic!",
    rating: 5,
  },
  {
    name: "David Martinez",
    location: "Snellville, GA",
    condition: "Work Injury",
    text: "I injured my back at work and was skeptical about chiropractic care. A coworker recommended Village Chiropractic, and I'm so glad I listened. The doctors explained everything clearly and made me feel comfortable from day one. I'm back to work without pain, and I continue maintenance visits to stay healthy.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
            
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/assets/hero-chiropractic.jpg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-sage-dark/90" />
          </div>
          <div className="container relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Patient Testimonials
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Don't just take our word for it. Hear from real patients who have found 
                relief and improved their quality of life at Village Chiropractic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Quote className="h-10 w-10 text-sage-light absolute top-6 right-6" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <span className="inline-block bg-sage-light text-sage-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {testimonial.condition}
                  </span>

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
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-primary-foreground mb-6">
                Ready to Write Your Own Success Story?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the hundreds of satisfied patients who have found relief at Village Chiropractic.
              </p>
              <Link href="/contact">
                <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Calendar className="h-5 w-5" />
                  Start Your Journey Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      
    </>
  );
};



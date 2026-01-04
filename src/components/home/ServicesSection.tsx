"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Bone, Car, Dumbbell, UserCheck, FileText, Heart, Users, Stethoscope, Star, Shield, GraduationCap, Target, TrendingUp, User } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Auto Injury Care",
    description: "Same-day care for auto injuries with documentation support to prevent long-term issues.",
    href: "/services#auto-injury",
  },
  {
    icon: Shield,
    title: "Military Exam",
    description: "Comprehensive evaluations and documentation for military personnel and veterans.",
    href: "/services",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Care",
    description: "Performance-minded rehab and chiropractic care to help you return stronger and prevent reinjury.",
    href: "/services#sports",
  },
  {
    icon: Activity,
    title: "Concussion & Chronic Pain",
    description: "Specialized evaluation and care for brain injuries, concussions, and chronic pain management.",
    href: "/services#brain-injury",
  },
  {
    icon: Stethoscope,
    title: "Headache Diagnosis & Care",
    description: "Comprehensive evaluation and treatment for headaches, migraines, and tension-related head pain.",
    href: "/services#pain-relief",
  },
  {
    icon: Bone,
    title: "Back Pain",
    description: "Targeted treatment for chronic and acute back pain to help you find lasting relief.",
    href: "/services#pain-relief",
  },
  {
    icon: Activity,
    title: "Scoliosis Care",
    description: "Specialized care and support for scoliosis management and spinal alignment.",
    href: "/services#family-care",
  },
  {
    icon: Heart,
    title: "Arthritis Care",
    description: "Gentle, effective treatment for arthritis pain, stiffness, and improved joint function.",
    href: "/services#pain-relief",
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Comprehensive chiropractic care for the whole family, from children to seniors.",
    href: "/services#family-care",
  },
  {
    icon: Star,
    title: "Lifestyle Care",
    description: "Wellness-focused care including nutrition, exercise, and healthy habit coaching.",
    href: "/services#family-care",
  },
  {
    icon: Target,
    title: "AllCore 360",
    description: "Comprehensive core strengthening and stabilization programs for better function.",
    href: "/services",
  },
  {
    icon: FileText,
    title: "Handicap Parking Exams",
    description: "Medical evaluations and documentation for handicap parking permit applications.",
    href: "/services",
  },
  {
    icon: FileText,
    title: "Expert Services",
    description: "Expert testimony, injury causation analysis, and professional documentation services.",
    href: "/services#impairment-ratings",
  },
  {
    icon: FileText,
    title: "Impairment Ratings",
    description: "Professional impairment and disability ratings for legal or insurance purposes.",
    href: "/services#impairment-ratings",
  },
  {
    icon: User,
    title: "Kids, Teens and Athletes",
    description: "Age-appropriate chiropractic care for children, teenagers, and young athletes.",
    href: "/services#family-care",
  },
  {
    icon: UserCheck,
    title: "Adult Care",
    description: "Comprehensive chiropractic care tailored for adults and working professionals.",
    href: "/services#family-care",
  },
  {
    icon: Heart,
    title: "Special Care for Older Patients",
    description: "Gentle, specialized care designed for seniors and age-related health concerns.",
    href: "/services#family-care",
  },
  {
    icon: Bone,
    title: "Traditional Adjustments",
    description: "Classic chiropractic adjustments to restore proper alignment and function.",
    href: "/services#family-care",
  },
  {
    icon: TrendingUp,
    title: "Strengthening & Stretching",
    description: "Therapeutic exercises and stretching programs to improve mobility and strength.",
    href: "/services#family-care",
  },
  {
    icon: GraduationCap,
    title: "Healthy Habits",
    description: "Education and coaching on nutrition, posture, ergonomics, and lifestyle wellness.",
    href: "/services#family-care",
  },
  {
    icon: Heart,
    title: "Gentle Pregnancy Chiropractic",
    description: "Safe, gentle chiropractic care designed specifically for expectant mothers.",
    href: "/services#family-care",
  },
  {
    icon: Activity,
    title: "Light Force Adjustments",
    description: "Gentle, low-force techniques for patients who prefer not to be 'cracked'.",
    href: "/services#family-care",
  },
  {
    icon: Stethoscope,
    title: "Patients Post Surgery or Injections",
    description: "Specialized care for patients recovering from surgery or post-injection treatment.",
    href: "/services#family-care",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
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
          transition={{ duration: 0.3, delay: 0.2 }}
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

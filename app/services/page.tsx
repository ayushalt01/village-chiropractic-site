"use client";

import Image from "next/image";

export const dynamic = 'force-dynamic';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Bone,
  Activity,
  Car,
  Dumbbell,
  UserCheck,
  CheckCircle,
  Calendar,
  ArrowRight,
  FileText,
} from "lucide-react";

const services = [
  {
    id: "auto-injury",
    icon: Car,
    title: "Auto Injury Care",
    shortDesc: "Same-day appointments and documentation support after a collision.",
    forWho:
      "Anyone involved in an auto accident, even if symptoms haven't appeared yet.",
    problems: [
      "Whiplash and neck injuries",
      "Soft tissue damage and ligament sprain/strain",
      "Headaches following accidents",
      "Hidden injuries that may develop later",
    ],
    expect:
      "We document your injuries for med pay, 3rd party, WC insurance, or attorney cases and create a care plan so acute pain doesn't become chronic. Gentle adjustments, rehab exercises, and imaging when needed.",
    benefits: [
      "Proper injury documentation",
      "Reduced risk of chronic pain",
      "Insurance/attorney support",
      "Guidance back to normal activities",
      "Same-day availability",
    ],
  },
  {
    id: "sports",
    icon: Dumbbell,
    title: "Sports Injury Care",
    shortDesc: "Rehab that keeps athletes of every level moving and performing.",
    forWho:
      "Weekend warriors to competitive athletes dealing with pain or looking to prevent it.",
    problems: [
      "Sports-related strains and sprains",
      "Overuse injuries and tendon issues",
      "Performance limitations",
      "Recovery after heavy training",
    ],
    expect:
      "Chiropractic adjustments plus sports-specific rehab to return you safely and quickly. We focus on biomechanics, flexibility, and strategies to avoid repeat injuries.",
    benefits: [
      "Faster recovery time",
      "Improved performance",
      "Injury prevention strategies",
      "Better flexibility and range of motion",
      "Personalized training guidance",
    ],
  },
  {
    id: "joint-repair",
    icon: Bone,
    title: "Joint Repair",
    shortDesc: "Joint regeneration and X-ray services for joint damage and healing.",
    forWho:
      "Patients with joint damage from trauma, arthritis, or degeneration who want better function.",
    problems: [
      "Joint damage from trauma",
      "Ligament injuries and instability",
      "Arthritis pain and stiffness",
      "Degenerative joint conditions",
    ],
    expect:
      "Evaluation, X-ray when appropriate, and regenerative approaches including laser and shockwave to improve healing. Goal: pain relief, tissue healing, and better long-term function.",
    benefits: [
      "Improved joint function",
      "Reduced pain and inflammation",
      "Enhanced tissue healing",
      "Better range of motion",
      "Education on protecting damaged joints",
    ],
  },
  {
    id: "injury-disability",
    icon: FileText,
    title: "Injury Disability",
    shortDesc:
      "Injury causation, expert services, and clinical services for legal and insurance needs.",
    forWho:
      "Patients needing impairment ratings, disability exams, injury causation analysis, or expert documentation for legal or insurance needs.",
    problems: [
      "Need for impairment rating",
      "Disability or peer review evaluation",
      "Injury causation analysis",
      "Expert testimony or documentation",
      "Clinical services and evaluations",
    ],
    expect:
      "Appointment required with your records. No LOPs; fees based on AMA UCR. Georgia peer review compliant under O.C.G.A. § 43-9-1. We do not contract with health insurance.",
    benefits: [
      "Accurate, professional ratings",
      "Compliance with Georgia regulations",
      "Clear documentation for legal needs",
      "Honest guidance on qualification",
      "Experienced expert testimony",
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash scrolling after page load
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        if (element) {
          // Use requestAnimationFrame to ensure DOM is fully rendered
          requestAnimationFrame(() => {
            const headerOffset = 120; // Account for sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
        }
      }
    };

    // Run on mount and after delays to ensure DOM is ready
    handleHashScroll();
    const timer1 = setTimeout(handleHashScroll, 100);
    const timer2 = setTimeout(handleHashScroll, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
            
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/assets/hero-chiropractic.jpg" alt="" fill className="object-cover" />
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
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive chiropractic care focused on preventing acute pain from becoming chronic pain. We offer chiropractic adjustments, back & neck pain relief, and posture correction, along with specialized services for auto injuries, sports injuries, joint repair, and injury disability evaluations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container">
            {/* Our Services Introduction */}
            <motion.div
              id="our-services"
              className="scroll-mt-32 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Chiropractic Adjustments, Back & Neck Pain Relief, Posture Correction
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our core chiropractic services focus on restoring proper alignment, relieving pain, and improving function. We use both traditional chiropractic adjustments and light-force techniques to address back pain, neck pain, and postural issues that affect your daily life.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-sage-light/30 rounded-2xl p-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Bone className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Chiropractic Adjustments</h3>
                  <p className="text-muted-foreground">
                    We offer both traditional chiropractic adjustments and light-force techniques using the ProAdjuster. Our goal is to restore proper spinal alignment and joint function, helping your body heal naturally.
                  </p>
                </div>
                <div className="bg-sage-light/30 rounded-2xl p-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Activity className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Back & Neck Pain Relief</h3>
                  <p className="text-muted-foreground">
                    Targeted treatment for chronic and acute back and neck pain. We identify the root cause through comprehensive evaluation and use adjustments, soft-tissue work, traction, laser, and shockwave therapy to provide lasting relief.
                  </p>
                </div>
                <div className="bg-sage-light/30 rounded-2xl p-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <UserCheck className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Posture Correction</h3>
                  <p className="text-muted-foreground">
                    Poor posture from desk work, tech use, or daily habits can lead to pain and dysfunction. We provide adjustments, strengthening exercises, and ergonomic coaching to improve your posture and prevent future problems.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-primary" />
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-8">{service.shortDesc}</p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">Who It's For</h3>
                          <p className="text-muted-foreground">{service.forWho}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-3">What It Helps</h3>
                          <ul className="space-y-2">
                            {service.problems.map((problem) => (
                              <li key={problem} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                {problem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-sage-light/30 rounded-2xl p-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">What to Expect</h3>
                          <p className="text-muted-foreground">{service.expect}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-3">Benefits & Outcomes</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                                <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href="/contact">
                          <Button variant="default" size="lg" className="w-full mt-4">
                            <Calendar className="h-4 w-4" />
                            Schedule for {service.title}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {index < services.length - 1 && (
                    <div className="border-b border-border mt-20" />
                  )}
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
                Not Sure Which Service You Need?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a consultation and let us help you determine the best approach for your unique situation.
              </p>
              <Link href="/contact">
                <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Calendar className="h-5 w-5" />
                  Book a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      
    </>
  );
};



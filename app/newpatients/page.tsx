"use client";

import Image from "next/image";

export const dynamic = 'force-dynamic';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Calendar, FileText, CheckCircle, Clock, 
  HelpCircle, Shield, Sparkles, ArrowRight
} from "lucide-react";

const firstVisitSteps = [
  {
    step: "1",
    title: "Paperwork & Health History",
    description: "Complete a brief health questionnaire either online before your visit or when you arrive. This helps us understand your health background and current concerns.",
  },
  {
    step: "2",
    title: "Consultation with Your Doctor",
    description: "You'll meet with one of our chiropractors to discuss your symptoms, health goals, and any questions you have. We take time to listen and understand your unique situation.",
  },
  {
    step: "3",
    title: "Comprehensive Examination",
    description: "A thorough examination including posture analysis, range of motion testing, and spinal evaluation to identify the source of your issues.",
  },
  {
    step: "4",
    title: "Personalized Treatment Plan",
    description: "Based on our findings, we'll explain our recommendations and create a treatment plan tailored to your needs and goals.",
  },
  {
    step: "5",
    title: "Your First Adjustment",
    description: "If appropriate, we may begin treatment on your first visit. You'll experience firsthand our gentle, effective approach to chiropractic care.",
  },
];

const faqs = [
  {
    question: "Office hours",
    answer: "Open Monday - Friday 9-7 & Saturday 9-12. We see the last patient 30 minutes before we close.",
  },
  {
    question: "Do you accept auto injury, or work injury patients?",
    answer: "Yes. We can bill the med pay, 3rd party insurance (other persons insurance), WC insurance or attorney. Our Office, as a group and individually, does NOT contract with any health insurance companies, including Medicaid or Medicare.",
  },
  {
    question: "Do you accept non injury patients?",
    answer: "Yes. Just call 770-469-7330 to make an appointment. Our Office, as a group and individually, does NOT contract with any health insurance companies, including Medicaid or Medicare.",
  },
  {
    question: "Do you offer light force adjustments / therapy?",
    answer: "Yes. Traditional chiropractic adjustments or light force using the pro adjuster.",
  },
  {
    question: "What other therapies does your office offer?",
    answer: "Exercise, nutrition, lifestyle care, laser, mindfulness therapy, CBT, strengthening, shockwave, traction & traditional chiropractic therapy. Laser & shockwave work very well and are by appointment only.",
  },
  {
    question: "For impairment or disability ratings do I need an appointment?",
    answer: "Yes & you need your records to help determine the diagnosis. Not everyone qualifies for impairment and disability. Social Security Administration states that an impairment is, \"A medically determinable physical or mental impairment must result from anatomical, physiological, or psychological abnormalities which can be shown by medically acceptable clinical and laboratory diagnostic techniques.\" Call 770-469-7330 for more information.",
  },
  {
    question: "Is chiropractic care safe?",
    answer: "Yes, chiropractic care is one of the safest drug-free, non-invasive therapies available for treating pain and musculoskeletal conditions. Our doctors use gentle techniques appropriate for patients of all ages.",
  },
  {
    question: "Does a chiropractic adjustment hurt?",
    answer: "Most patients experience little to no discomfort during adjustments. Many report feeling immediate relief. Some mild soreness similar to post-exercise soreness may occur initially, but this typically resolves quickly.",
  },
  {
    question: "How many visits will I need?",
    answer: "This varies depending on your condition, how long you've had it, and your health goals. During your first visit, we'll discuss a recommended treatment plan. Many patients see significant improvement within a few visits.",
  },
  {
    question: "Can children receive chiropractic care?",
    answer: "Absolutely! Children can benefit greatly from chiropractic care. Our doctors use extra-gentle techniques appropriate for younger patients, addressing issues like poor posture, sports injuries, and growing pains.",
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Wear comfortable, loose-fitting clothing that allows for movement. Avoid dresses or restrictive clothing. Athletic wear or casual clothes work great.",
  },
];

export default function NewPatientsPage() {
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
                New Patient Information
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Welcome to Pain Atlanta! We're excited to meet you and help you 
                on your journey to better health. Here's everything you need to know about your first visit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-4 block">Your First Visit</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <p className="text-muted-foreground text-lg">
                Your first visit typically takes about 45-60 minutes. Here's what will happen:
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {firstVisitSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex gap-6 mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {item.step}
                    </div>
                    {index < firstVisitSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance & Payment */}
        <section className="py-16 gradient-sage">
          <div className="container">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Insurance & Payment Options
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                className="bg-card rounded-xl p-6 shadow-soft text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Auto & Work Injury</h3>
                <p className="text-muted-foreground text-sm">
                  We accept auto injury and work injury patients. We can bill med pay, 3rd party insurance, WC insurance, or attorney.
                </p>
              </motion.div>

              <motion.div
                className="bg-card rounded-xl p-6 shadow-soft text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Self-Pay Options</h3>
                <p className="text-muted-foreground text-sm">
                  Affordable self-pay rates available for non-injury patients. Our office does not contract with health insurance companies.
                </p>
              </motion.div>

              <motion.div
                className="bg-card rounded-xl p-6 shadow-soft text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">HSA/FSA Accepted</h3>
                <p className="text-muted-foreground text-sm">
                  Use your health savings or flexible spending account for chiropractic care.
                </p>
              </motion.div>
            </div>

              <motion.div
                className="max-w-4xl mx-auto mt-10 bg-card border border-border/50 rounded-xl p-8 text-left shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Notice Regarding Provider Financial Relationship and Payment Terms</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Payment is due at the time of service unless other arrangements are made.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4">
                      <li>We do NOT contract with any health insurance company, including Medicaid or Medicare.</li>
                      <li>No Letters of Protection (LOPs) or attorney liens; payment is due at time of service unless other arrangements are made.</li>
                      <li>Fees follow AMA UCR definitions; we do not sell or fund medical accounts to third parties.</li>
                      <li>Georgia peer review compliant under O.C.G.A. § 43-9-1; disputes require a chiropractor approved by the Georgia Board of Chiropractic Examiners.</li>
                    </ul>
                    <Link href="/terms" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                      Read full payment terms and financial notice <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
          </div>
        </section>

        {/* New Patient Special */}
        <section className="py-16 bg-background">
          <div className="container">
            <motion.div
              className="max-w-2xl mx-auto bg-gradient-to-br from-sage-light to-cream rounded-2xl p-8 md:p-12 text-center shadow-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                New Patient Consultation
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Schedule your comprehensive consultation and examination to discover how 
                chiropractic care can help you achieve your health goals.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Clock className="h-4 w-4" />
                <span>Initial visit: 45-60 minutes</span>
              </div>
              <Link href="/contact">
                <Button variant="hero" size="xl">
                  <Calendar className="h-5 w-5" />
                  Schedule Your Visit
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 gradient-warm">
          <div className="container">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-4 block">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="flex items-start gap-3 font-semibold text-foreground mb-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-8">{faq.answer}</p>
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
                Have More Questions?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                We're here to help! Give us a call or schedule a consultation to discuss your health concerns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+17704697330">
                  <Button variant="hero-outline" size="xl">
                    Call (770) 469-7330
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      
    </>
  );
};



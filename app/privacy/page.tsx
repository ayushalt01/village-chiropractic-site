"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Shield, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-primary">
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information that you provide directly to us, including your name, contact information, 
                health history, and insurance information when you schedule an appointment or receive services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use your information to provide chiropractic services, process payments, communicate with you 
                about your care, and comply with legal obligations. We do not sell or share your personal information 
                with third parties for marketing purposes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Health Information Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting your health information in accordance with applicable privacy laws. 
                Your medical records are kept confidential and are only shared as necessary for your treatment, 
                with your consent, or as required by law.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or your personal information, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Pain Atlanta</p>
                <p>2045 Rockbridge Road</p>
                <p>Stone Mountain, GA 30087</p>
                <p>Phone: <a href="tel:+17704697330" className="text-primary hover:underline">(770) 469-7330</a></p>
                <p>Email: <a href="mailto:info@painatlanta.com" className="text-primary hover:underline">info@painatlanta.com</a></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-sage-light/30 rounded-2xl p-6 border border-border"
            >
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Have Other Questions?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                For questions about office hours, appointments, services, insurance, or payment options, please visit our frequently asked questions page.
              </p>
              <Link href="/newpatients" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                View Frequently Asked Questions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


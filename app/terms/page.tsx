"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Shield } from "lucide-react";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Please read these terms carefully before using our services.
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By scheduling an appointment or receiving services at Pain Atlanta, you agree to these terms of service. 
                If you do not agree, please do not use our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="bg-sage-light/30 rounded-2xl p-6 border border-border"
            >
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Quick Reference</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Office Hours:</p>
                  <p>Monday - Friday: 9AM - 7PM | Saturday: 9AM - 12PM | Sunday: Closed</p>
                  <p className="text-xs mt-1">We see the last patient 30 minutes before we close.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Appointments:</p>
                  <p>Call <a href="tel:+17704697330" className="text-primary hover:underline">(770) 469-7330</a> to schedule. Please call ahead if you are a new patient.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Insurance:</p>
                  <p>We do NOT contract with any health insurance companies, including Medicaid or Medicare. We accept auto injury, work injury, and self-pay patients.</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <Link href="/newpatients" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                    View all frequently asked questions <Calendar className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Medical Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our chiropractic services are provided by licensed professionals. While we strive to provide the best 
                possible care, results may vary. Chiropractic care is not a substitute for emergency medical care. 
                If you have a medical emergency, please call 911 or go to the nearest emergency room.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-sage-light/30 rounded-2xl p-8 border border-border"
            >
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Notice Regarding Provider Financial Relationship and Payment Terms
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Payment is due at the time of service unless other arrangements are made.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. No Insurance Contracting</h3>
                  <p className="leading-relaxed">
                    Our office and providers are not contracted with any health insurance company, including Medicare or Medicaid. 
                    Georgia law does not require participation in any insurance network. Our office will accept payment or may rely 
                    on auto insurance (med pay, or PIP), other insurance from the at-fault party, or any other party that holds 
                    funds to pay for services at this office directly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Private Payment Agreement with Patient</h3>
                  <p className="leading-relaxed">
                    Even if the patient is individually contracted with a health insurance carrier or covered under a workers' 
                    compensation plan, these contracts permit the patient to enter into a separate private payment agreement 
                    with the provider. This agreement, commonly referred to as an "Agreement to Defer Payment," takes precedence 
                    over any third-party payer arrangements.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. No Attorney Liens or Letters of Protection (LOPs)</h3>
                  <p className="leading-relaxed">
                    This office does not enter into any Letters of Protection or lien-based arrangements with attorneys. 
                    This is a critical part of our business model and compliance structure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. No Sale or Funding of Medical Accounts</h3>
                  <p className="leading-relaxed">
                    We do not sell, assign, or factor patient accounts receivable to third parties under any circumstances. 
                    No third-party funding arrangement exists or will be created for the cost of care provided.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Usual, Customary, and Reasonable (UCR) Charges Defined by AMA</h3>
                  <p className="leading-relaxed">
                    We base our charges on the American Medical Association's definition of Usual, Customary, and Reasonable (UCR) 
                    fees, meaning "the amount paid for a medical service in a geographic area based on what providers in the area 
                    usually charge for the same or similar medical service." Per AMA Policy H-385.923, AMA does not recognize 
                    discounted rates from Medicare, Medicaid, or private insurance contracts. This office's fee schedule is 2-3x 
                    the Georgia Workers Compensation fee schedule which is reasonable especially because Workers Compensation is 
                    guaranteed and pays interest after 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">6. Georgia Peer Review Law</h3>
                  <p className="leading-relaxed">
                    Compliance Under O.C.G.A. § 43-9-1, our providers are authorized under Georgia law to conduct chiropractic peer 
                    review. Any dispute regarding charges or services must be reviewed by a chiropractor approved by the Georgia 
                    Board of Chiropractic Examiners as a peer review agent.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We ask that you provide at least 24 hours notice if you need to cancel or reschedule your appointment. 
                Late cancellations or no-shows may be subject to a fee.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pain Atlanta and its providers are not liable for any indirect, incidental, or consequential damages 
                arising from the use of our services. Our liability is limited to the amount paid for services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
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


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
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our chiropractic services are provided by licensed Doctors of Chiropractic (DC) who are licensed 
                by the Georgia Board of Chiropractic Examiners. Services include but are not limited to:
              </p>
              
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Chiropractic adjustments and spinal manipulation</li>
                  <li>Diagnostic evaluation and examination</li>
                  <li>X-ray services when medically indicated</li>
                  <li>Rehabilitative exercises and therapy</li>
                  <li>Laser therapy, shockwave therapy, and other treatment modalities</li>
                  <li>Nutritional and lifestyle counseling</li>
                  <li>Impairment and disability ratings</li>
                  <li>Expert services and injury causation analysis</li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive to provide the best possible care, results may vary. Chiropractic care is not a 
                substitute for emergency medical care. If you have a medical emergency, please call 911 or go 
                to the nearest emergency room. We reserve the right to refuse service or refer you to another 
                healthcare provider if we determine that chiropractic care is not appropriate for your condition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Patient Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a patient, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete health information</li>
                <li>Follow treatment recommendations and care plans</li>
                <li>Inform us of any changes in your health condition</li>
                <li>Arrive on time for appointments or provide adequate notice for cancellations</li>
                <li>Pay for services as agreed upon at the time of service</li>
                <li>Respect our staff and other patients</li>
                <li>Comply with office policies and procedures</li>
                <li>Notify us immediately of any adverse reactions to treatment</li>
              </ul>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Appointment and Cancellation Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Scheduling</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Appointments can be scheduled by phone at (770) 469-7330 or through our website. New patients 
                    are encouraged to call ahead. Same-day appointments may be available but are not guaranteed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cancellation and Rescheduling</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We require at least 24 hours notice for cancellations or rescheduling. Late cancellations 
                    (less than 24 hours) or no-shows may be subject to a cancellation fee. Repeated no-shows may 
                    result in restrictions on future scheduling.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Late Arrivals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you arrive more than 15 minutes late, we may need to reschedule your appointment to avoid 
                    disrupting other patients' care.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Due</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment is due at the time of service unless other arrangements have been made in advance. 
                    We accept cash, credit cards, debit cards, and HSA/FSA cards.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our office does not contract with health insurance companies. We may bill auto insurance, 
                    workers' compensation, or third-party payers as applicable. You are responsible for any 
                    amounts not covered by insurance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Outstanding Balances</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Accounts with outstanding balances may be subject to collection efforts. We reserve the right 
                    to refuse service to patients with delinquent accounts until payment arrangements are made.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Refunds</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds for services already rendered are generally not provided. Refund requests will be 
                    evaluated on a case-by-case basis. Unused prepaid services may be refunded subject to our 
                    refund policy.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Pain Atlanta, its owners, employees, and providers are not liable for any indirect, incidental, 
                  special, consequential, or punitive damages arising from the use of our services, including but 
                  not limited to loss of profits, data, or business opportunities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our total liability for any claims arising from our services is limited to the amount you paid 
                  for the specific service giving rise to the claim.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are not responsible for any decisions you make based on information provided during consultations 
                  or treatment. You are responsible for making your own healthcare decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the 
                  above limitations may not apply to you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property 
                of Pain Atlanta or its content suppliers and is protected by United States and international copyright 
                and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any 
                content without our express written permission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes arising from these terms or our services will be resolved as follows:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Informal Resolution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We encourage you to contact us first to resolve any concerns. Most issues can be resolved 
                    through direct communication.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Peer Review</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Under Georgia law (O.C.G.A. § 43-9-1), disputes regarding charges or services may be subject 
                    to chiropractic peer review by a chiropractor approved by the Georgia Board of Chiropractic 
                    Examiners.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Binding Arbitration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes that cannot be resolved informally may be subject to binding arbitration in 
                    accordance with the rules of the American Arbitration Association, conducted in Stone Mountain, 
                    Georgia.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by and construed in accordance with the laws of the State of Georgia, 
                without regard to its conflict of law provisions. Any legal action or proceeding arising under 
                these terms will be brought exclusively in the state or federal courts located in DeKalb County, 
                Georgia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these terms is found to be invalid, illegal, or unenforceable, the remaining 
                provisions will continue in full force and effect. The invalid provision will be modified to the 
                minimum extent necessary to make it valid and enforceable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms, together with our Privacy Policy and HIPAA Notice, constitute the entire agreement 
                between you and Pain Atlanta regarding the use of our services and website. These terms supersede 
                all prior agreements and understandings, whether written or oral.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Material changes will be posted on our 
                website with an updated effective date. Your continued use of our services after changes become 
                effective constitutes acceptance of the modified terms. If you do not agree to the modified terms, 
                you should discontinue use of our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these terms, please contact us:
              </p>
              <div className="bg-card rounded-xl p-6 border border-border/50 space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Pain Atlanta</p>
                  <p className="text-muted-foreground">2045 Rockbridge Road</p>
                  <p className="text-muted-foreground">Stone Mountain, GA 30087</p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Phone: <a href="tel:+17704697330" className="text-primary hover:underline">(770) 469-7330</a>
                  </p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:info@painatlanta.com" className="text-primary hover:underline">info@painatlanta.com</a>
                  </p>
                </div>
              </div>
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


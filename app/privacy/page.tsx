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
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us and information that is automatically collected 
                when you use our website or services.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Information You Provide Directly</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Personal identification information (name, date of birth, address, phone number, email address)</li>
                    <li>Health and medical information (symptoms, medical history, treatment records, insurance information)</li>
                    <li>Payment information (credit card details, billing address, payment history)</li>
                    <li>Appointment scheduling information</li>
                    <li>Information provided in forms, surveys, or communications with us</li>
                    <li>Emergency contact information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Website usage data (pages visited, time spent, links clicked)</li>
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Cookies and similar tracking technologies (see Cookies section below)</li>
                    <li>Location data (if you enable location services)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Service Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide chiropractic treatment, schedule appointments, maintain medical records, and coordinate 
                    your care with other healthcare providers when necessary.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Processing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To process payments, bill insurance companies (when applicable), manage accounts receivable, and 
                    handle financial transactions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To communicate with you about appointments, treatment plans, health information, practice updates, 
                    and respond to your inquiries.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legal and Regulatory Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To comply with applicable laws, regulations, court orders, and government requests. This includes 
                    reporting requirements for public health, workers' compensation, and other legal obligations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Practice Operations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To improve our services, conduct quality assurance, train staff, and manage our business operations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Website Functionality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To improve website performance, analyze usage patterns, and enhance user experience.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Share Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Healthcare Providers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With other healthcare providers involved in your treatment, specialists, laboratories, or 
                    facilities as necessary for your care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Associates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With third-party service providers who perform services on our behalf (billing companies, 
                    IT services, legal counsel) under strict confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legal Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When required by law, court order, or government regulation, including public health reporting, 
                    workers' compensation claims, and law enforcement requests.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">With Your Authorization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you provide written authorization for specific disclosures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Emergency Situations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In emergency situations to protect your health and safety or that of others.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Health Information Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are committed to protecting your health information in accordance with applicable privacy laws, 
                including the Health Insurance Portability and Accountability Act (HIPAA). Your medical records 
                are kept confidential and are only shared as necessary for your treatment, with your consent, 
                or as required by law.
              </p>
              <Link href="/hipaa" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
                <Shield className="h-4 w-4" />
                View our HIPAA Notice of Privacy Practices
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your experience, analyze 
                website traffic, and understand user preferences. Cookies are small text files stored on your device.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Types of cookies we use:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Essential cookies: Required for website functionality</li>
                  <li>Analytics cookies: Help us understand how visitors use our website</li>
                  <li>Preference cookies: Remember your settings and preferences</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect 
                  website functionality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures 
                include encryption, secure servers, access controls, and regular security assessments. However, 
                no method of transmission over the internet or electronic storage is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal and health information for as long as necessary to provide services, 
                comply with legal obligations, resolve disputes, and enforce our agreements. Medical records 
                are typically retained for a minimum period as required by state and federal law (generally 
                6-10 years, or longer for minors). After the retention period, records are securely destroyed 
                in accordance with applicable regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to request access to your personal and health information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Correction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may request correction of inaccurate or incomplete information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Deletion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may request deletion of your information, subject to legal retention requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Restriction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may request restrictions on how we use or disclose your information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Portability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may request a copy of your information in a portable format.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Opt-Out</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may opt out of certain communications, such as marketing emails, while still receiving 
                    important treatment-related communications.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us immediately. We provide 
                chiropractic services to minors only with appropriate parental or guardian consent and involvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                applicable laws. We will notify you of any material changes by posting the updated policy on 
                our website with a new effective date. We encourage you to review this policy periodically. 
                Your continued use of our services after changes become effective constitutes acceptance of 
                the updated policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this privacy policy, wish to exercise your rights, or have concerns 
                about how we handle your information, please contact us:
              </p>
              <div className="bg-card rounded-xl p-6 border border-border/50 space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Pain Atlanta</p>
                  <p className="text-muted-foreground">Attn: Privacy Officer</p>
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


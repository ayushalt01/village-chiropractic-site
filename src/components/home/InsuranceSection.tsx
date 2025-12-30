"use client";

import { motion } from "framer-motion";
import { Shield, CreditCard, FileCheck } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Auto & Work Injury Accepted",
    description: "We accept auto injury and work injury patients. We can bill med pay, 3rd party insurance, WC insurance, or attorney.",
  },
  {
    icon: CreditCard,
    title: "Self-Pay Options",
    description: "Affordable self-pay rates available for non-injury patients. Our office does not contract with health insurance companies, including Medicaid or Medicare.",
  },
  {
    icon: FileCheck,
    title: "Transparent Pricing",
    description: "No surprise bills. We'll explain your costs upfront and work with you to find the best option for your situation.",
  },
];

export function InsuranceSection() {
  return (
    <section className="py-16 bg-sage-light/30">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Insurance & Affordability
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe everyone deserves access to quality chiropractic care. That's why we offer 
            flexible options to fit your budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

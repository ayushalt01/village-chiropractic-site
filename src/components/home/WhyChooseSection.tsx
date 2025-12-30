"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, MapPin, Shield } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Inclusive, Patient-First Care",
    description: "We proudly serve all genders, races, ages, orientations, and backgrounds with respectful care that listens first and tailors treatment to your goals.",
  },
  {
    icon: Award,
    title: "27+ Years & Award-Winning",
    description: "Serving Stone Mountain since 1997 with over 100,000 patient visits. Voted 2019 GCA Georgia Chiropractor of the Year.",
  },
  {
    icon: Users,
    title: "Gentle & Traditional Options",
    description: "Traditional adjustments or light force with the ProAdjuster. Great for kids, pregnancy, post-surgery patients, and those who prefer no 'cracking.'",
  },
  {
    icon: MapPin,
    title: "Walk-In Office Hours",
    description: "Open Mon–Fri 9:00a–7:00p and Sat 9:00a–12:00p. Last patient 30 minutes before close. Call ahead if you’re new.",
  },
  {
    icon: Shield,
    title: "Auto & Work Injury Friendly",
    description: "We bill med pay, 3rd party, WC insurance, or attorney. We do not contract with health insurers and offer clear self-pay options.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 gradient-warm">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">Why Pain Atlanta</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Care You Can Trust, Results You Can Feel
          </h2>
          <p className="text-muted-foreground text-lg">
            We focus on preventing acute pain from becoming chronic pain, combining chiropractic, rehab, and lifestyle guidance to help Stone Mountain patients recover and thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

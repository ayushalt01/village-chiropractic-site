import { motion } from "framer-motion";
import { Heart, Award, Users, MapPin, Shield } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every treatment plan is tailored to your unique needs, goals, and lifestyle. We listen first, then create your path to wellness.",
  },
  {
    icon: Award,
    title: "Experienced Chiropractors",
    description: "Our experienced team of chiropractors combines proven techniques with modern approaches for optimal results.",
  },
  {
    icon: Users,
    title: "Gentle Techniques",
    description: "We use a variety of gentle, effective adjustment methods suitable for patients of all ages, from children to seniors.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Located in the heart of Stone Mountain, we're easily accessible with ample parking and a warm, welcoming environment.",
  },
  {
    icon: Shield,
    title: "Auto & Work Injury Care",
    description: "We accept auto injury and work injury patients. We can bill med pay, 3rd party insurance, WC insurance, or attorney. Self-pay options available.",
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
          <span className="text-primary font-medium mb-4 block">Why Village Chiropractic</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Care You Can Trust, Results You Can Feel
          </h2>
          <p className="text-muted-foreground text-lg">
            At Village Chiropractic, we believe in treating the whole person—not just the symptoms. 
            Our patient-first approach has helped thousands in Stone Mountain live pain-free lives.
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

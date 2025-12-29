import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Bone, Car, Dumbbell, UserCheck } from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Chiropractic Adjustments",
    description: "Precise spinal adjustments to restore proper alignment, reduce nerve interference, and promote natural healing.",
    href: "/services#adjustments",
  },
  {
    icon: Activity,
    title: "Back & Neck Pain Relief",
    description: "Targeted treatment for chronic and acute pain, helping you find lasting relief without medication.",
    href: "/services#pain-relief",
  },
  {
    icon: Car,
    title: "Auto Injury & Whiplash",
    description: "Specialized care for accident-related injuries, supporting your recovery and documentation needs.",
    href: "/services#auto-injury",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Care",
    description: "Performance-focused treatment for athletes, from weekend warriors to competitive sports enthusiasts.",
    href: "/services#sports",
  },
  {
    icon: UserCheck,
    title: "Posture & Wellness Care",
    description: "Preventive care and lifestyle guidance to maintain spinal health and overall well-being.",
    href: "/services#posture",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/services">
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

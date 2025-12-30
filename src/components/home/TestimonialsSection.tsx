import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Aniece P.",
    location: "Stone Mountain, GA",
    text: "Dr. Connelly, Dr. Dumas, and the wonderful staff - hats off to all of you! My total experience has been wonderful, and I highly recommend this facility for excellent care. This is the place!",
    rating: 5,
  },
  {
    name: "Netasha",
    location: "Stone Mountain, GA",
    text: "Great first visit! Dr. Connelly and his staff are amazing. The treatment and adjustments were right on point, and they took the time to listen to my concerns without rushing me.",
    rating: 5,
  },
  {
    name: "Yvette P.",
    location: "Stone Mountain, GA",
    text: "I highly recommend Village Chiropractor for great care from head to toe. Both doctors are great, and the staff is wonderful too, especially Amanda and Sherri. You will definitely not regret it!",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
          <span className="text-primary font-medium mb-4 block">Patient Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it—hear from the families and individuals 
            we've helped find relief and wellness in Stone Mountain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="h-10 w-10 text-sage-light absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/testimonials">
            <Button variant="outline" size="lg">
              Read More Reviews
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

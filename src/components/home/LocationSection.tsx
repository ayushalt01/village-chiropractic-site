import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Calendar } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-20 gradient-warm">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium mb-4 block">Visit Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conveniently Located in Stone Mountain
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our clinic is easily accessible from anywhere in Stone Mountain and the surrounding 
              areas. Ample free parking available. We look forward to welcoming you!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">2045 Rockbridge Road<br />Stone Mountain, GA 30087</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+17704697330" className="text-primary hover:underline">(770) 469-7330</a>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="hero" size="xl">
                <Calendar className="h-5 w-5" />
                Schedule Your Visit Today
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-elevated"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps?q=2045+Rockbridge+Road,+Stone+Mountain,+GA+30087&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Village Chiropractic location in Stone Mountain, GA"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

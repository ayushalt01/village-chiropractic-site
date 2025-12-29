import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import chiropractorImage from "@/assets/chiropractor-portrait.jpg";
import drDumasImage from "@/assets/dr-dumas.jpg";

export function DoctorSection() {
  return <section className="py-20 gradient-sage">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="grid grid-cols-2 gap-4">
              {/* Dr. Connelly */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  alt="Dr. Christopher Connelly, DC" 
                  className="w-full h-[500px] object-cover" 
                  src="/lovable-uploads/bcd3ea44-3c33-45bd-81c9-850088b81aeb.jpg" 
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-sage-dark/90 to-transparent p-6">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">Dr. Christopher Connelly, DC</h3>
                  <p className="text-primary-foreground/80 text-sm">Mon, Tue, & Wed<br />Some Thur & Fridays</p>
                </div>
              </div>
              
              {/* Dr. Dumas */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  alt="Dr. Ashley Dumas, DC" 
                  className="w-full h-[500px] object-cover" 
                  src={drDumasImage} 
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-sage-dark/90 to-transparent p-6">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">Dr. Ashley Dumas, DC</h3>
                  <p className="text-primary-foreground/80 text-sm">Thurs, Fri & Sat</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage-light rounded-2xl -z-10" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <span className="text-primary font-medium mb-4 block">Meet Your Chiropractors</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dedicated to Your Health and Well-Being
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>Our experienced team of chiropractors, Dr. Christopher Connelly and Dr. Ashley Dumas, are dedicated to serving the Stone Mountain community, helping thousands of patients find relief from pain and achieve optimal health through natural, drug-free chiropractic care.</p>
              <p>At Village Chiropractic, our mission is simple: to provide compassionate, personalized care that treats the whole person—not just the symptoms.</p>
              <p>Whether you're dealing with chronic back pain, recovering from an injury, or looking to maintain your health proactively, our doctors take the time to understand your unique situation and create a treatment plan that works for your life.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
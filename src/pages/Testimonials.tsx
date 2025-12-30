import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-chiropractic.jpg";

const testimonials = [
  {
    name: "Aniece P.",
    location: "Stone Mountain, GA",
    condition: "Excellent Care",
    text: "Dr. Connelly, Dr. Dumas, and the wonderful staff - hats off to all of you! My total experience has been wonderful, and I highly recommend this facility for excellent care. This is the place!",
    rating: 5,
  },
  {
    name: "Renee",
    location: "Stone Mountain, GA",
    condition: "Auto Accident Care",
    text: "Made an appointment for my daughter and me, and we were seen right away. The staff were extremely friendly, and the doctors listened to our concerns. They even provided us with a legal referral for our accident claim.",
    rating: 5,
  },
  {
    name: "Netasha",
    location: "Stone Mountain, GA",
    condition: "First Visit Experience",
    text: "Great first visit! Dr. Connelly and his staff are amazing. The treatment and adjustments were right on point, and they took the time to listen to my concerns without rushing me.",
    rating: 5,
  },
  {
    name: "Steven B.",
    location: "Stone Mountain, GA",
    condition: "Knee Injury & Shock Wave",
    text: "I injured my knee and Dr. Chris treated me for a torn meniscus. He suggested Shock Wave therapy, and it was a game changer! The outcome was amazing, and I highly recommend it for soft tissue injuries.",
    rating: 5,
  },
  {
    name: "L. Carcamo",
    location: "Stone Mountain, GA",
    condition: "Professional Care",
    text: "One of the most professional facilities I have ever encountered. The staff were exceptionally attentive and kind, and both Dr. Connelly and Dr. Ashley took the time to listen to all of my concerns.",
    rating: 5,
  },
  {
    name: "Yvette P.",
    location: "Stone Mountain, GA",
    condition: "Comprehensive Care",
    text: "I highly recommend Village Chiropractor for great care from head to toe. Both doctors are great, and the staff is wonderful too, especially Amanda and Sherri. You will definitely not regret it!",
    rating: 5,
  },
  {
    name: "Desiree S.",
    location: "Stone Mountain, GA",
    condition: "Compassionate Care",
    text: "Dr. Connelly and his staff were wonderful during my time of need. They were patient and compassionate, and I truly felt they cared about me and my pain. I wasn't just a number - I was a human being in real pain.",
    rating: 5,
  },
  {
    name: "Sonia M.",
    location: "Stone Mountain, GA",
    condition: "Exceptional Service",
    text: "The doctors are exceptional. Wonderful customer service throughout the entire business. I would highly recommend anyone to choose them for all chiropractor needs.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Patient Testimonials | Village Chiropractic Stone Mountain, GA</title>
        <meta
          name="description"
          content="Read what our patients say about their experience at Village Chiropractic in Stone Mountain, GA. Real stories of pain relief and improved quality of life."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-sage-dark/90" />
          </div>
          <div className="container relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Patient Testimonials
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Don't just take our word for it. Hear from real patients who have found 
                relief and improved their quality of life at Village Chiropractic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Quote className="h-10 w-10 text-sage-light absolute top-6 right-6" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <span className="inline-block bg-sage-light text-sage-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {testimonial.condition}
                  </span>

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
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-primary-foreground mb-6">
                Ready to Write Your Own Success Story?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the hundreds of satisfied patients who have found relief at Village Chiropractic.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Calendar className="h-5 w-5" />
                  Start Your Journey Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Testimonials;

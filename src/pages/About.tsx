import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, GraduationCap, Calendar } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Care",
    description: "We listen to your concerns, understand your goals, and create personalized treatment plans that work for your life.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "As a locally-owned clinic, we're invested in the health and well-being of our Stone Mountain neighbors.",
  },
  {
    icon: Award,
    title: "Excellence in Practice",
    description: "We stay current with the latest chiropractic techniques and research to provide the best possible care.",
  },
  {
    icon: GraduationCap,
    title: "Patient Education",
    description: "We believe in empowering you with knowledge about your health, so you can make informed decisions.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Village Chiropractic Stone Mountain, GA</title>
        <meta
          name="description"
          content="Learn about Village Chiropractic and our experienced chiropractors Dr. Christopher Connelly and Dr. Ashley Dumas. Serving Stone Mountain, GA with compassionate, personalized chiropractic care."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/assets/hero-chiropractic.jpg" alt="" className="w-full h-full object-cover" />
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
                About Village Chiropractic
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Serving the Stone Mountain area for 27 years with compassionate, personalized 
                chiropractic care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium mb-4 block">Our Story</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Passion for Healing, Rooted in Community
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Village Chiropractic has been serving the Stone Mountain area since 1997 with a 
                    simple vision: to provide exceptional chiropractic care that treats the whole person, 
                    not just the symptoms. Our goal is to prevent acute pain from becoming chronic pain.
                  </p>
                  <p>
                    What started as a small practice has grown into a trusted destination for families, 
                    professionals, athletes, and seniors seeking natural pain relief and wellness care. 
                    Over 27 years, we've helped over 100,000 patients find relief from pain, recover 
                    from injuries, and achieve their health goals.
                  </p>
                  <p>
                    Today, Village Chiropractic remains true to its founding principles: personalized 
                    care, honest communication, and a genuine commitment to helping every patient live 
                    their best life. We understand that when you are in pain or have been injured, 
                    choosing a doctor can be one of the most important decisions you can make.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-elevated bg-background">
                  <img
                    src="/assets/gca-magazine-cover.jpg"
                    alt="Dr. Christopher Connelly - 2019 GCA Georgia Chiropractor of the Year - The Georgia Chiropractor Magazine Winter 2020"
                    className="w-full h-[450px] object-contain"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-light rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Doctor */}
        <section className="py-20 gradient-sage">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-4 block">Meet Your Chiropractors</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Experienced Doctors
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-left">
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Dr. Christopher Connelly, DC</h3>
                  <p>
                    Dr. Christopher Connelly is a licensed Doctor of Chiropractic dedicated to helping 
                    patients overcome pain and achieve optimal health through natural, drug-free solutions. 
                    He specializes in spinal correction, sports injuries, auto accidents, brain injury, 
                    impairment ratings, and wellness care for patients of all ages.
                  </p>
                  <p className="mt-2">
                    <strong>Available:</strong> Monday, Tuesday, Wednesday, and some Thursdays & Fridays
                  </p>
                  <p className="mt-2">
                    <strong>Award:</strong> Voted 2019 GCA Georgia Chiropractor of the Year
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Dr. Ashley Dumas, DC</h3>
                  <p>
                    Dr. Ashley Dumas is a licensed Doctor of Chiropractic committed to providing 
                    compassionate, personalized care. She uses gentle, effective techniques to help 
                    patients find relief from pain and improve their overall wellness.
                  </p>
                  <p className="mt-2">
                    <strong>Available:</strong> Thursday, Friday, and Saturday
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Years in Practice", value: "27+" },
                { label: "Patient Visits", value: "100,000+" },
                { label: "Disability Exams", value: "500+" },
                { label: "Years Serving Stone Mountain", value: "27" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-card rounded-xl p-6 text-center shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-4 block">Our Values</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                Ready to Experience the Difference?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the thousands of patients who have found relief and wellness at Village Chiropractic.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Calendar className="h-5 w-5" />
                  Schedule Your Visit
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

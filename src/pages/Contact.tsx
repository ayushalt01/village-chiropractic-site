import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, MapPin, Mail, Clock, Calendar, 
  CheckCircle, Send 
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-chiropractic.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll contact you within 24 hours to confirm your appointment.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Village Chiropractic Stone Mountain, GA</title>
        <meta
          name="description"
          content="Book your appointment at Village Chiropractic in Stone Mountain, GA. Call (770) 469-7330 or use our online form. Convenient hours and location."
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
                Book Your Appointment
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Ready to start your journey to better health? Contact us to schedule 
                your visit or ask any questions you may have.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Schedule Your Visit
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll contact you within 24 hours to confirm 
                  your appointment. Or call us directly for immediate assistance.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="(770) 469-7330"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select a service...</option>
                      <option value="chiropractic">Chiropractic Adjustments</option>
                      <option value="back-neck">Back & Neck Pain Relief</option>
                      <option value="auto-injury">Auto Injury Care</option>
                      <option value="sports">Sports Injury Care</option>
                      <option value="posture">Posture & Wellness</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tell Us About Your Concerns
                    </label>
                    <Textarea
                      placeholder="Describe your symptoms, how long you've had them, and any relevant health history..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Request Appointment
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted regarding your appointment request.
                  </p>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-sage-light/30 rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <a
                      href="tel:+17704697330"
                      className="flex items-start gap-4 group"
                    >
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-primary group-hover:underline">(770) 469-7330</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@villagechiro.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-primary group-hover:underline">info@villagechiro.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p className="text-muted-foreground">
                          2045 Rockbridge Road<br />
                          Stone Mountain, GA 30087
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Office Hours</p>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9AM - 7PM</p>
                          <p>Saturday: 9AM - 12PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Why Choose Us
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Same-day appointments often available",
                      "Auto & work injury care accepted",
                      "Affordable self-pay options",
                      "27 years serving Stone Mountain",
                      "Friendly, caring staff",
                      "Laser & shockwave therapy available",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Walk-in Hours */}
        <section className="py-20 bg-sage-light/30">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Walk-in Hours
                </h2>
                <p className="text-muted-foreground text-lg">
                  Last walk-in appointment is 30 minutes before we close.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/walk-in-hours.jpg"
                  alt="Walk-in Hours: Monday-Friday 9-7, Saturday 9-12. Transportation available. Dr. Christopher Connelly, DC - Mon, Tue, & Wed, Some Thur & Fridays. Dr. Ashley Dumas, DC - Thurs, Fri & Sat"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map */}
        <section className="h-[400px]">
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
        </section>
      </Layout>
    </>
  );
};

export default Contact;

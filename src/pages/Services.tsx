import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Bone, Activity, Car, Dumbbell, UserCheck, 
  CheckCircle, Calendar,   ArrowRight, FileText
} from "lucide-react";

const services = [
  {
    id: "adjustments",
    icon: Bone,
    title: "Chiropractic Adjustments",
    shortDesc: "Restore proper spinal alignment and nerve function.",
    forWho: "Anyone experiencing spinal misalignment, joint restrictions, or seeking overall wellness.",
    problems: [
      "Poor posture and spinal misalignment",
      "Reduced mobility and flexibility",
      "Nerve interference causing pain or dysfunction",
      "General stiffness and discomfort",
    ],
    expect: "Our chiropractors will perform a thorough examination, discuss your concerns, and use precise, controlled techniques to adjust your spine. We offer traditional chiropractic adjustments or light force using the pro adjuster for patients who prefer a gentler approach. Many patients feel immediate relief, while others notice improvement over subsequent visits.",
    benefits: [
      "Improved nerve function",
      "Better posture and alignment",
      "Reduced pain and discomfort",
      "Enhanced mobility and flexibility",
      "Overall improved well-being",
    ],
  },
  {
    id: "pain-relief",
    icon: Activity,
    title: "Back & Neck Pain Relief",
    shortDesc: "Find lasting relief from chronic and acute pain.",
    forWho: "Office workers, laborers, seniors, and anyone suffering from persistent back or neck pain.",
    problems: [
      "Chronic lower back pain",
      "Neck pain and tension headaches",
      "Sciatica and radiating leg pain",
      "Muscle spasms and tightness",
    ],
    expect: "We'll identify the root cause of your pain through examination and possibly imaging. Treatment may include adjustments, soft tissue therapy, and personalized exercises to address both symptoms and underlying issues.",
    benefits: [
      "Significant pain reduction",
      "Improved daily function",
      "Reduced reliance on pain medication",
      "Prevention of future episodes",
      "Better quality of life",
    ],
  },
  {
    id: "auto-injury",
    icon: Car,
    title: "Auto Injury & Whiplash Care",
    shortDesc: "Specialized treatment for accident-related injuries.",
    forWho: "Anyone involved in an auto accident, even if symptoms haven't appeared yet.",
    problems: [
      "Whiplash and neck injuries",
      "Soft tissue damage",
      "Headaches following accidents",
      "Hidden injuries that may develop later",
    ],
    expect: "We'll thoroughly document your injuries for insurance purposes and create a comprehensive treatment plan. Care typically includes gentle adjustments, rehabilitation exercises, and coordination with other healthcare providers if needed.",
    benefits: [
      "Proper injury documentation",
      "Early treatment prevents chronic issues",
      "Insurance claim support",
      "Full recovery guidance",
      "Return to normal activities",
    ],
  },
  {
    id: "sports",
    icon: Dumbbell,
    title: "Sports Injury Care",
    shortDesc: "Get back in the game faster and perform better.",
    forWho: "Athletes of all levels, from weekend warriors to competitive sports enthusiasts.",
    problems: [
      "Sports-related strains and sprains",
      "Overuse injuries",
      "Performance limitations",
      "Recovery from training",
    ],
    expect: "We understand athletes need to return to activity safely and quickly. Treatment combines chiropractic care with sports-specific rehabilitation to address your injury while optimizing performance.",
    benefits: [
      "Faster recovery time",
      "Improved athletic performance",
      "Injury prevention strategies",
      "Enhanced flexibility and range of motion",
      "Personalized training guidance",
    ],
  },
  {
    id: "posture",
    icon: UserCheck,
    title: "Posture Correction & Wellness Care",
    shortDesc: "Preventive care for long-term spinal health.",
    forWho: "Those seeking to maintain good health, desk workers, and anyone wanting to improve their posture.",
    problems: [
      "Forward head posture",
      "Rounded shoulders",
      "Tech neck from device use",
      "General poor posture habits",
    ],
    expect: "We'll assess your posture, identify problematic patterns, and create a plan that includes adjustments, exercises, and ergonomic recommendations to help you maintain optimal spinal health.",
    benefits: [
      "Better posture and appearance",
      "Reduced risk of future problems",
      "Increased energy levels",
      "Improved breathing and circulation",
      "Long-term health maintenance",
    ],
  },
  {
    id: "brain-injury",
    icon: Activity,
    title: "Brain Injury & Concussion Care",
    shortDesc: "Specialized care for brain injuries and concussions.",
    forWho: "Anyone who has experienced a head injury, concussion, or trauma that may have affected brain function.",
    problems: [
      "Concussion symptoms",
      "Post-traumatic headaches",
      "Cognitive difficulties after injury",
      "Chronic pain following brain injury",
    ],
    expect: "We provide comprehensive evaluation and treatment for brain injuries, working to address both immediate symptoms and long-term effects through specialized chiropractic and therapeutic approaches.",
    benefits: [
      "Improved cognitive function",
      "Reduced headache frequency",
      "Better balance and coordination",
      "Enhanced recovery outcomes",
      "Comprehensive injury documentation",
    ],
  },
  {
    id: "joint-repair",
    icon: Bone,
    title: "Joint Repair & Regeneration",
    shortDesc: "Advanced care for joint damage and tissue healing.",
    forWho: "Patients with joint damage from injury or trauma, arthritis, or degenerative joint conditions.",
    problems: [
      "Joint damage from trauma",
      "Ligament injuries",
      "Arthritis pain",
      "Degenerative joint conditions",
    ],
    expect: "We use advanced techniques including laser therapy, shockwave, and regenerative approaches to help repair joint damage and promote tissue healing. X-ray services available for proper diagnosis.",
    benefits: [
      "Improved joint function",
      "Reduced pain and inflammation",
      "Enhanced tissue healing",
      "Better range of motion",
      "Prevention of chronic joint issues",
    ],
  },
  {
    id: "impairment-ratings",
    icon: FileText,
    title: "Impairment & Disability Ratings",
    shortDesc: "Expert evaluation for impairment and disability assessments.",
    forWho: "Patients requiring impairment ratings, disability exams, or injury causation analysis for legal or insurance purposes.",
    problems: [
      "Need for impairment rating",
      "Disability evaluation required",
      "Injury causation analysis",
      "Expert testimony needs",
    ],
    expect: "Dr. Connelly provides expert services including impairment ratings, disability exams, and injury causation analysis. You'll need your medical records and an appointment for evaluation.",
    benefits: [
      "Expert evaluation and documentation",
      "Compliance with legal requirements",
      "Thorough injury assessment",
      "Professional testimony when needed",
      "Accurate impairment ratings",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Chiropractic Services | Village Chiropractic Stone Mountain, GA</title>
        <meta
          name="description"
          content="Comprehensive chiropractic services in Stone Mountain, GA including adjustments, back pain relief, auto injury care, sports injuries, brain injury care, joint repair, impairment ratings, and posture correction."
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
                Our Chiropractic Services
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive care for every stage of life. Our goal is to prevent acute pain from becoming chronic pain. 
                From pain relief to long-term wellness, we have the expertise to help you achieve your health goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-primary" />
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-8">{service.shortDesc}</p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">Who It's For</h3>
                          <p className="text-muted-foreground">{service.forWho}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-3">What It Helps</h3>
                          <ul className="space-y-2">
                            {service.problems.map((problem) => (
                              <li key={problem} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                {problem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-sage-light/30 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">What to Expect</h3>
                          <p className="text-muted-foreground">{service.expect}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-3">Benefits & Outcomes</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                                <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to="/contact">
                          <Button variant="default" size="lg" className="w-full mt-4">
                            <Calendar className="h-4 w-4" />
                            Schedule for {service.title}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {index < services.length - 1 && (
                    <div className="border-b border-border mt-20" />
                  )}
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
                Not Sure Which Service You Need?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a consultation and let us help you determine the best approach for your unique situation.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Calendar className="h-5 w-5" />
                  Book a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;

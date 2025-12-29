import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DoctorSection } from "@/components/home/DoctorSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsuranceSection } from "@/components/home/InsuranceSection";
import { LocationSection } from "@/components/home/LocationSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Village Chiropractic | Chiropractor in Stone Mountain, GA</title>
        <meta
          name="description"
          content="Village Chiropractic - Serving Stone Mountain, GA for 27 years. Expert chiropractic care for auto injuries, sports injuries, brain injury, joint repair, and chronic pain. Our goal is to prevent acute pain from becoming chronic pain."
        />
        <link rel="canonical" href="https://villagechiropractic.com" />
      </Helmet>
      <Layout>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <DoctorSection />
        <TestimonialsSection />
        <InsuranceSection />
        <LocationSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

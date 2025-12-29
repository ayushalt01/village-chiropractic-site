import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DoctorSection } from "@/components/home/DoctorSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsuranceSection } from "@/components/home/InsuranceSection";
import { LocationSection } from "@/components/home/LocationSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Village Chiropractic | Chiropractor in Stone Mountain, GA",
  description:
    "Village Chiropractic - Serving Stone Mountain, GA for 27 years. Expert chiropractic care for auto injuries, sports injuries, brain injury, joint repair, and chronic pain. Our goal is to prevent acute pain from becoming chronic pain.",
  alternates: {
    canonical: "https://villagechiropractic.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <InsuranceSection />
      <LocationSection />
      <CTASection />
    </>
  );
}


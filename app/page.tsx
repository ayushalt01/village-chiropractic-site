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
  title: "Pain Atlanta | Chiropractor in Stone Mountain, GA",
  description:
    "Pain Atlanta - Serving the Stone Mountain area for 27 years with multidisciplinary care for injury and chronic pain. Same-day appointments available for auto injury, sports injury, brain injury, joint repair, and impairment ratings.",
  alternates: {
    canonical: "https://www.painatlanta.com",
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


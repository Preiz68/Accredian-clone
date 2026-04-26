import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const StatsSection = dynamic(() => import("@/components/StatsSection"));
const PartnershipsSection = dynamic(() => import("@/components/PartnershipsSection"));
const AccredianEdge = dynamic(() => import("@/components/AccredianEdge"));
const DomainExpertise = dynamic(() => import("@/components/DomainExpertise"));
const CourseSegmentation = dynamic(() => import("@/components/CourseSegmentation"));
const SkillEnhancement = dynamic(() => import("@/components/SkillEnhancement"));
const CATFramework = dynamic(() => import("@/components/CATFramework"));
const DeliveryApproach = dynamic(() => import("@/components/DeliveryApproach"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ContactCTA = dynamic(() => import("@/components/ContactCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <PartnershipsSection />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <SkillEnhancement />
      <CATFramework />
      <DeliveryApproach />
      <FAQSection />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
}

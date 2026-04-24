import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import SkillEnhancement from "@/components/SkillEnhancement";
import CATFramework from "@/components/CATFramework";
import DeliveryApproach from "@/components/DeliveryApproach";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full bg-white pt-4 pb-12 lg:pt-10">
        <div className="container mx-auto px-0 md:px-4 lg:px-8 max-w-7xl">
          <section className="bg-[#EEF5FF] md:rounded-[40px] md:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row items-center relative min-h-[500px] lg:min-h-[600px]">
            
            {/* Mobile Image (Top) */}
            <div className="w-full md:hidden flex justify-center pt-8 px-4 relative z-10">
               <Image
                src="/hero-image.png"
                alt="Professionals"
                width={600}
                height={400}
                className="w-full max-w-[400px] object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-20 z-20 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-[32px] leading-[1.2] md:text-5xl lg:text-[64px] font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
                Next-Gen <span className="text-[#1D7AE5]">Expertise</span><br className="hidden md:block"/> For Your <span className="text-[#1D7AE5]">Enterprise</span>
              </h1>
              
              <p className="text-[#333333] text-base md:text-lg lg:text-xl font-medium mb-8 max-w-md">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* Checkmarks - Desktop: 1 row, Mobile: 2x2 grid */}
              <div className="grid grid-cols-2 md:flex md:flex-row flex-wrap gap-y-4 gap-x-4 md:gap-x-6 mb-10 w-full justify-items-start md:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm lg:text-base text-gray-800 font-medium">Tailored Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm lg:text-base text-gray-800 font-medium">Industry Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm lg:text-base text-gray-800 font-medium">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2 md:hidden">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm lg:text-base text-gray-800 font-medium">Measurable Impact</span>
                </div>
              </div>

              <button className="bg-[#1D7AE5] hover:bg-blue-700 text-white font-semibold py-3 px-8 lg:py-4 lg:px-10 rounded-md transition-colors w-full md:w-auto text-lg shadow-lg">
                Enquire Now
              </button>
            </div>

            {/* Desktop Image (Right) */}
            <div className="hidden md:flex w-1/2 justify-end items-end absolute right-0 bottom-0 h-full">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src="/hero-image.png"
                  alt="Professionals"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom-right drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
                  priority
                />
              </div>
            </div>
            
          </section>
        </div>
      </div>
      
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

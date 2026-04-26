import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function AccredianEdge() {
  return (
    <section id="accredianEdge" className="mt-12 px-4 md:px-8 xl:px-12">
      <SectionHeader 
        title={<>The <span className="text-[#1A73E8]">Accredian Edge</span></>}
        subtitle={<>Key Aspects of <span className="text-[#1A73E8]">Our Strategic Training</span></>}
        className="pb-8"
      />
      <div className="w-full hidden md:flex justify-center items-center mt-4 mb-8 relative aspect-1200/500">
        <Image
          src="/our-solution-1.svg"
          alt="Our Solutions"
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex relative md:hidden w-full justify-center items-start sm:-mt-45 -mt-20 mb-8 aspect-4/5">
        <Image
          src="/mobile-solution.svg"
          alt="Our Solutions"
          fill
          className="object-contain rounded-lg"
        />
      </div>
    </section>
  );
}

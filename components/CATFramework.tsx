import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function CATFramework() {
  return (
    <section
      id="cat"
      className="w-full mt-12 sm:mt-24 py-4 px-4 flex flex-col items-center bg-[radial-gradient(circle,#7cb5ff28,#fff)]"
    >
      <SectionHeader 
        title={<>The <span className="text-[#1A73E8]">CAT Framework</span></>}
        subtitle={<>Our Proven Approach to <span className="text-[#1A73E8]">Learning Excellence</span></>}
      />
      <div className="w-full flex justify-center mt-16">
        <Image
          src="/CAT.svg"
          alt="Our Solutions"
          width={700}
          height={700}
          className="object-contain rounded-lg"
        />
      </div>
    </section>
  );
}

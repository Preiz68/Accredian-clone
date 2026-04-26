import { domainExpertise } from "@/constants/data";
import SectionHeader from "./SectionHeader";

export default function DomainExpertise() {
  return (
    <section className="max-w-6xl mx-auto px-4 -mt-15 sm:-mt-25 md:mt-10">
      <SectionHeader 
        title={<>Our<span className="text-blue-600"> Domain Expertise</span></>}
        subtitle={<><span className="text-blue-600">Specialized Programs</span> Designed to Fuel Innovation</>}
      />
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {domainExpertise.map((domain, index) => (
          <div
            key={index}
            className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex md:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg"
          >
            {domain.icon}
            <h3 className="text-[10px] md:text-lg text-bold font-semibold text-center text-gray-900">
              {domain.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

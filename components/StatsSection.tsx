import { stats } from "@/constants/data";
import SectionHeader from "./SectionHeader";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="w-full overflow-hidden flex flex-col items-center mt-8 md:mt-28 px-4 capitalize"
    >
      <SectionHeader 
        title={<>Our<span className="text-[#1A73E8]"> Track Record</span></>}
        subtitle={<>The Numbers Behind <span className="text-[#1A73E8]">Our Success</span></>}
        className="mb-6"
      />
      
      <div className="w-full flex justify-center p-4 text-center">
        <div>
          <div className="hidden md:flex justify-start p-4 gap-10 rounded-xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col justify-start gap-4 items-center pr-4 border-[#E5E7EB] ${
                  index !== stats.length - 1 ? "border-r-2" : "border-r-0"
                }`}
              >
                <div className="text-2xl text-[#1A73E8] flex items-center justify-center font-semibold w-24 h-15 bg-blue-100 p-2 rounded-full">
                  <h2>{stat.value}</h2>
                </div>
                <div>
                  <p className="max-w-[300px]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden grid grid-cols-1 p-4 gap-10 rounded-xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex justify-start items-center text-left gap-4 pb-4 border-[#E5E7EB] ${
                  index !== stats.length - 1 ? "border-b-2" : "border-b-0"
                }`}
              >
                <div className="flex justify-center items-center text-[#1A73E8] text-center font-semibold w-full max-w-[70px] bg-blue-100 p-2 rounded-full">
                  <h2 className="text-md md:text-2xl">{stat.value}</h2>
                </div>
                <div>
                  <p className="text-md md:text-2xl">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

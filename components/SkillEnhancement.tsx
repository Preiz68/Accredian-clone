import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

const items = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: <MonitorCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: <MonitorX className="w-8 h-8 md:w-10 md:h-10 text-white" />,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />,
  },
];

export default function SkillEnhancement() {
  return (
    <section className="w-full bg-white py-12 lg:py-24" id="skill-enhancement">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="bg-[#1D7AE5] rounded-[24px] lg:rounded-[40px] overflow-hidden relative min-h-[500px] lg:min-h-[600px] flex flex-col lg:flex-row">
          
          {/* Left Side: Text and Image (Desktop) */}
          <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col relative z-10">
            <div className="mb-12">
              <span className="text-white/90 text-lg lg:text-2xl font-medium mb-4 block">Who Should Join?</span>
              <h2 className="text-white text-3xl lg:text-[56px] leading-[1.1] font-bold tracking-tight">
                Strategic Skill<br /> Enhancement
              </h2>
            </div>
            
            {/* Image of Professionals (Desktop Only) */}
            <div className="hidden lg:block absolute bottom-0 left-10 w-[450px] h-[400px]">
               <div className="relative w-full h-full">
                  <Image 
                    src="/skill-professionals.png" 
                    alt="Professionals" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-bottom drop-shadow-2xl"
                  />
               </div>
            </div>
          </div>

          {/* Right Side: Grid of Items */}
          <div className="w-full lg:w-1/2 p-10 lg:p-20 bg-[#1D7AE5] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-24">
               {items.map((item, index) => (
                 <div key={index} className="flex flex-col lg:flex-col items-start lg:items-start group">
                    <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

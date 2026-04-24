import { Lightbulb, BrainCircuit, Users, BarChart3, Settings, Globe, Landmark } from "lucide-react";

const domains = [
  {
    title: "Product & Innovation Hub",
    icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-[#1D7AE5]" />,
  },
  {
    title: "Gen-AI Mastery",
    icon: <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-[#1D7AE5]" />,
  },
  {
    title: "Leadership Elevation",
    icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-[#1D7AE5]" />,
  },
  {
    title: "Tech & Data Insights",
    icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-[#1D7AE5]" />,
  },
  {
    title: "Operations Excellence",
    icon: <Settings className="w-8 h-8 md:w-10 md:h-10 text-[#1D7AE5]" />,
  },
  {
    title: "Digital Enterprise",
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-[#1D7AE5]" />,
  },
  {
    title: "Fintech Innovation Lab",
    icon: <Landmark className="w-8 h-8 md:w-10 md:h-10 text-[#1D7AE5]" />,
  },
];

export default function DomainExpertise() {
  return (
    <section className="w-full bg-[#FAFBFF] py-16 lg:py-24" id="expertise">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
            Our <span className="text-[#1D7AE5]">Domain Expertise</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            <span className="text-[#1D7AE5]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col items-center">
          {/* Main Grid: 2 columns on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
            {domains.slice(0, 6).map((domain, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="mb-4 md:mb-6">
                  {domain.icon}
                </div>
                <h3 className="text-sm md:text-xl font-bold text-slate-800 leading-tight">
                  {domain.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Last item: Centered below the grid */}
          <div className="mt-4 md:mt-8 w-full flex justify-center">
             <div className="w-full sm:w-1/2 md:w-1/3">
                <div className="bg-white rounded-xl p-6 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                  <div className="mb-4 md:mb-6">
                    {domains[6].icon}
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-slate-800 leading-tight">
                    {domains[6].title}
                  </h3>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Lightbulb, LayoutPanelTop, Settings2 } from "lucide-react";

const frameworkItems = [
  {
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-[#1D7AE5]" />,
    pos: "left-[15%] md:left-[18%]",
  },
  {
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: <LayoutPanelTop className="w-8 h-8 md:w-12 md:h-12 text-[#1D7AE5]" />,
    pos: "left-[50%] md:left-[45%]",
  },
  {
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: <Settings2 className="w-8 h-8 md:w-12 md:h-12 text-[#1D7AE5]" />,
    pos: "left-[85%] md:left-[72%]",
  },
];

export default function CATFramework() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-24" id="framework">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
        {/* Header */}
        <div className="mb-12 lg:mb-24">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
            The <span className="text-[#1D7AE5]">CAT Framework</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            Our Proven Approach to <span className="text-[#1D7AE5]">Learning Excellence</span>
          </p>
        </div>

        {/* Framework Diagram Container - Fully Responsive, No Scrollbar */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden no-scrollbar">
          <div className="relative aspect-1000/500 md:aspect-1000/450 w-full flex items-center">
            
            {/* SVG Background Layer - Scales with Container */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 450" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Circle 1 Arc */}
              <path 
                d="M 285 145 A 110 110 0 1 0 285 305" 
                stroke="#1D7AE5" strokeWidth="5" strokeLinecap="round" 
              />
              <circle cx="285" cy="145" r="6" fill="#1D7AE5" />

              {/* Circle 2 Arc */}
              <path 
                d="M 380 315 A 110 110 0 1 0 580 135" 
                stroke="#1D7AE5" strokeWidth="5" strokeLinecap="round" 
              />
              <circle cx="380" cy="315" r="6" fill="#1D7AE5" />

              {/* Circle 3 Arc */}
              <path 
                d="M 685 145 A 110 110 0 1 1 685 305" 
                stroke="#1D7AE5" strokeWidth="5" strokeLinecap="round" 
              />
              <circle cx="685" cy="145" r="6" fill="#1D7AE5" />
              <circle cx="685" cy="305" r="6" fill="#1D7AE5" />
            </svg>

            {/* Content Layer - Percentage Positioned */}
            {frameworkItems.map((item, index) => (
              <div 
                key={index} 
                className={`absolute ${item.pos} -translate-x-1/2 flex flex-col items-center w-[30%] md:w-72 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="mb-2 md:mb-6 bg-white/50 p-1 md:p-2 rounded-full backdrop-blur-sm shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-[10px] sm:text-sm md:text-3xl font-bold text-slate-900 mb-0.5 md:mb-3">{item.title}</h3>
                <p className="text-[7px] sm:text-[10px] md:text-base text-slate-600 text-center leading-tight md:leading-relaxed px-1 md:px-6 font-medium line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </section>
  );
}

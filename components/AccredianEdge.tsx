import { Lightbulb, Users, Settings, Cpu, MoveUpRight, Target, Package } from "lucide-react";

const edgeItems = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-[#00BFFF]",
    angle: -90, // For mobile
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-[#1E40AF]",
    angle: -38,
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-[#2563EB]",
    angle: 14,
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-[#3B82F6]",
    angle: 66,
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: <MoveUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-[#1E3A8A]",
    angle: 118,
  },
  {
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-[#1E40AF]",
    angle: 170,
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: <Package className="w-6 h-6 text-white" />,
    color: "bg-[#1D4ED8]",
    angle: 222,
  },
];

export default function AccredianEdge() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden" id="edge">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-24 lg:mb-40">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
            The <span className="text-[#1D7AE5]">Accredian Edge</span>
          </h2>
          <p className="text-slate-600 text-base lg:text-xl font-medium">
            Key Aspects of <span className="text-[#1D7AE5]">Our Strategic Training</span>
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative py-20">
          {/* Background Dotted Arcs */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none px-20">
            <svg className="w-full h-32" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path 
                d="M 0 50 Q 71 0 142 50 Q 213 100 284 50 Q 355 0 426 50 Q 497 100 568 50 Q 639 0 710 50 Q 781 100 852 50 Q 923 0 1000 50" 
                stroke="#E2E8F0" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                fill="none" 
              />
            </svg>
          </div>

          <div className="flex justify-between items-center relative z-10 px-10">
            {edgeItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative group">
                
                {/* Labels - Alternating Top/Bottom */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-48 transition-all duration-300 ${index % 2 === 0 ? '-top-36' : '-bottom-36'}`}>
                   {index % 2 === 0 ? (
                     <div className="flex flex-col items-start">
                       <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#1D7AE5]"></div>
                          <h3 className="font-bold text-sm text-[#111827] whitespace-nowrap">{item.title}</h3>
                       </div>
                       <p className="text-[11px] text-slate-500 leading-normal pl-4">{item.description}</p>
                       <div className="w-px h-12 bg-blue-200 ml-1 mt-2"></div>
                     </div>
                   ) : (
                     <div className="flex flex-col items-start">
                       <div className="w-px h-12 bg-blue-200 ml-1 mb-2"></div>
                       <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#1D7AE5]"></div>
                          <h3 className="font-bold text-sm text-[#111827] whitespace-nowrap">{item.title}</h3>
                       </div>
                       <p className="text-[11px] text-slate-500 leading-normal pl-4">{item.description}</p>
                     </div>
                   )}
                </div>

                {/* Main Icon Circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center justify-center relative z-20">
                     <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110`}>
                        {item.icon}
                     </div>
                  </div>
                  
                  {/* Arrows between circles */}
                  {index < edgeItems.length - 1 && (
                    <div className="absolute top-1/2 -right-14 -translate-y-1/2 text-slate-300 font-bold text-lg opacity-60">
                      »
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Circular Layout */}
        <div className="lg:hidden flex flex-col items-center pt-20 pb-32">
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
            
            {/* The Donut Circle (SVG for precision) */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-2xl" viewBox="0 0 100 100">
              {edgeItems.map((item, index) => {
                const sliceAngle = 360 / edgeItems.length;
                const startAngle = index * sliceAngle;
                const endAngle = (index + 1) * sliceAngle;
                
                // Convert polar to cartesian for SVG path
                const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                
                const colors = ['#00BFFF', '#1E40AF', '#2563EB', '#3B82F6', '#1E3A8A', '#1E40AF', '#1D4ED8'];
                
                return (
                  <path
                    key={index}
                    d={`M 50 50 L ${x1} ${y1} A 40 40 0 0 1 ${x2} ${y2} Z`}
                    fill={colors[index]}
                    stroke="white"
                    strokeWidth="0.5"
                  />
                );
              })}
              {/* Inner White Circle */}
              <circle cx="50" cy="50" r="18" fill="white" />
            </svg>

            {/* Central Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
               <div className="text-2xl sm:text-3xl font-black text-slate-800 leading-none">OUR</div>
               <div className="text-2xl sm:text-3xl font-black text-slate-800 leading-none">USPS</div>
            </div>

            {/* Icons and Labels positioned around the circle */}
            {edgeItems.map((item, index) => {
              const sliceAngle = 360 / edgeItems.length;
              const angle = index * sliceAngle + sliceAngle / 2 - 90;
              const iconRadius = 30; // Radius for icons (in % units roughly)
              const labelRadius = 55; // Radius for labels (in % units)
              
              // Angle-based positioning
              const labelX = 50 + labelRadius * Math.cos((angle * Math.PI) / 180);
              const labelY = 50 + labelRadius * Math.sin((angle * Math.PI) / 180);
              
              // Determine text alignment
              const isRight = labelX > 50;
              const isTop = labelY < 40;
              const isBottom = labelY > 60;

              return (
                <div key={index}>
                  {/* Icon on slice */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{ 
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${iconRadius * 4}px) rotate(${-angle}deg)` 
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Labels around the circle */}
                  <div 
                    className={`absolute z-30 w-32 sm:w-40 ${isRight ? 'text-left' : 'text-right'}`}
                    style={{ 
                      left: `${labelX}%`, 
                      top: `${labelY}%`,
                      transform: `translate(${isRight ? '0' : '-100%'}, ${isTop ? '-100%' : isBottom ? '0' : '-50%'})`
                    }}
                  >
                    <h3 className="font-bold text-[10px] sm:text-xs text-slate-900 leading-tight mb-0.5">{item.title}</h3>
                    <p className="text-[8px] sm:text-[9px] text-slate-500 leading-tight">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

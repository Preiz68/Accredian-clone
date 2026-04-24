import { BarChart3, Presentation, MonitorPlay } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
  },
  {
    number: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: <Presentation className="w-8 h-8 text-white" />,
  },
  {
    number: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: <MonitorPlay className="w-8 h-8 text-white" />,
  },
];

export default function DeliveryApproach() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" id="delivery-approach">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
            How We <span className="text-[#1D7AE5]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            A Structured Three-Step Approach to <span className="text-[#1D7AE5]">Skill Development</span>
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* The Card */}
              <div className="bg-[#EEF5FF] rounded-2xl p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[320px]">
                
                {/* Blue Side Bars */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-3/5 bg-[#1D7AE5] rounded-r-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3/5 bg-[#1D7AE5] rounded-l-full"></div>

                {/* Step Number */}
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full border-2 border-[#1D7AE5] flex items-center justify-center text-[#1D7AE5] font-bold text-sm bg-white">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-[#1D7AE5] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

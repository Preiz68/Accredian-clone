import { ChartNoAxesCombined, MonitorPlay, Presentation } from "lucide-react";

export default function DeliveryApproach() {
  return (
    <section id="howItWorks" className="mt-12 sm:mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10  mx-2">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            How We <span className="text-[#1A73E8]">Deliver Results</span> That
            Matter?
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            A Structured Three-Step Approach to{" "}
            <span className="text-[#1A73E8]">Skill Development</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <div className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full">
            <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-6 sm:h-15 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-6 sm:h-15 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full  flex justify-center items-center font-normal sm:font-bold text-center">
              <p>1</p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1A73E8] text-white rounded-full shadow-md">
              <ChartNoAxesCombined className="size-8 text-white" />
            </div>
            <h3 className=" text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">
              Skill Gap Analysis
            </h3>
            <p className="text-gray-600 hidden md:block text-sm mt-2 max-w-[18rem]">
              Assess team skill gaps and developmental needs.
            </p>
          </div>
          <div className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full">
            <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-6 sm:h-15 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-6 sm:h-15 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full flex justify-center items-center font-normal sm:font-bold text-center">
              <p>2</p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1A73E8] text-white rounded-full shadow-md">
              <Presentation className="size-8 text-white" />
            </div>
            <h3 className=" text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">
              Customized Training Plan
            </h3>
            <p className="text-gray-600 hidden md:block text-sm mt-2 max-w-[18rem]">
              Create a tailored roadmap addressing organizational goals.
            </p>
          </div>
          <div className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[20rem] w-full">
            <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-6 sm:h-15 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-6 sm:h-15 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full flex justify-center items-center font-normal sm:font-bold text-center">
              <p>3</p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1A73E8] text-white rounded-full shadow-md">
              <MonitorPlay className="size-8 text-white" />
            </div>
            <h3 className=" text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">
              Flexible Program Delivery
            </h3>
            <p className="text-gray-600 hidden md:block text-sm mt-2 max-w-[18rem]">
              Deliver adaptable programs aligned with industry and
              organizational needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

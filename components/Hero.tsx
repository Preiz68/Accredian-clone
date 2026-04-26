import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex justify-center items-start">
      <div className="max-w-340 w-full">
        <div className="flex justify-center items-center my-4 mt-5 sm:mt-12 sm:px-4 mb-10 md:mb-0">
          <section
            id="home"
            className="bg-[#EEF5FF] sm:rounded-md md:rounded-[40px] sm:shadow-[0_4px_65px_1px_#00072b36] overflow-hidden py-2 flex flex-col-reverse gap-4 sm:flex-row items-center relative min-h-auto md:min-h-[500px] w-full"
          >
            <div className="sm:w-1/2 w-full sm:ml-7 flex flex-col justify-between gap-4 md:gap-10 sm:ps-2 md:ps-8">
              <h1 className="text-center sm:text-left cursor-context-menu text-2xl sm:text-4xl lg:text-6xl xxl:text-7xl 2xl:text-[5.2vw] 3xl:text-[5.0rem] font-bold max-w-full sm:max-w-[350px] lg:max-w-[700px] pt-2 capitalize px-8 sm:px-0 font-circular">
                Next-Gen <span className="text-[#1A73E8]">Expertise</span> for Your
                <span className="text-[#1A73E8]"> Enterprise</span>
              </h1>
              <p className="font-medium md:font-normal text-sm sm:text-lg lg:text-2xl max-w-full p-2 sm:p-0 w-full sm:max-w-[350px] text-center sm:text-start text-black">
                Cultivate high-performance teams through expert learning.
              </p>
              <ul className="grid grid-cols-2 mx-auto sm:flex text-black sm:mx-0 sm:justify-start sm:flex-wrap gap-4">
                <li className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  Tailored Solutions
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  Industry Insights
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  Expert Guidance
                </li>
                <li className="flex items-center gap-2 mb-2 sm:hidden">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  Measurable Impact
                </li>
              </ul>
              <div className="flex mb-6 md:mb-0 justify-center sm:justify-start w-full">
                <button className="w-[80%] sm:w-[170px] p-[7px] text-md font-normal text-white bg-[#1A73E8] rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                  <p className="text-sm md:text-xl">Enquire Now</p>
                </button>
              </div>
            </div>
            <div className="flex w-full sm:w-1/2 sm:justify-end sm:items-end justify-center">
              <Image
                src="/hero-image.webp"
                alt="headerImage"
                width={400}
                height={400}
                priority
                className="sm:w-full sm:h-full h-[80%] w-[80%]"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

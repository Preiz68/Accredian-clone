import Image from "next/image";
import { skills } from "@/constants/data";

export default function SkillEnhancement() {
  return (
    <div className="mt-12 sm:mt-28 xl:px-6 px-4 lg:mx-10 bg-[#1A73E8] sm:rounded-lg flex flex-col md:flex-row">
      <div className="md:w-1/2 pt-12 md:pl-6 text-white flex flex-col justify-between">
        <div>
          <h4 className="text-lg sm:text-xl font-medium">Who Should Join?</h4>
          <h1 className="text-2xl md:text-[40px] leading-[39px] capitalize mt-2 font-semibold">
            Strategic Skill Enhancement
          </h1>
        </div>
        <div className="w-[300px] justify-center hidden md:block">
          <Image
            src="/human-illustration.png"
            alt="Human Illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 text-white gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-4 md:gap-2 flex-row md:flex-col">
            {skill.icon}
            <div>
              <h2 className="text-[16px] md:text-[22px] font-semibold">
                {skill.title}
              </h2>
              <p className="text-sm md:text-md text-gray-200">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

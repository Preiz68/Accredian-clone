import Image from "next/image";
import { partners } from "@/constants/data";
import SectionHeader from "./SectionHeader";

export default function PartnershipsSection() {
  return (
    <section
      id="clients"
      className="mt-8 md:mt-28 xl:px-12 px-4 text-center overflow-hidden"
    >
      <SectionHeader 
        title={<>Our Proven <span className="text-[#1A73E8]">Partnerships</span></>}
        subtitle={<>Successful Collaborations With the <span className="text-[#1A73E8]">Industry&apos;s Best</span></>}
      />

      <div className="w-full mt-10 relative">
        <div className="animate-marquee flex items-center md:grid md:grid-cols-6 sm:gap-8 md:gap-12 sm:justify-items-center">
          <ul className="flex md:contents items-center gap-12 md:gap-0 shrink-0 pr-12 md:pr-0">
            {partners.map((partner, index) => (
              <li
                key={`set1-${index}`}
                className="flex justify-center items-center shrink-0 md:p-4"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className={`object-contain ${partner.className}`}
                />
              </li>
            ))}
          </ul>

          <ul className="flex md:hidden items-center gap-12 shrink-0 pr-12">
            {partners.map((partner, index) => (
              <li
                key={`set2-${index}`}
                className="flex justify-center items-center shrink-0"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className={`object-contain ${partner.className}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

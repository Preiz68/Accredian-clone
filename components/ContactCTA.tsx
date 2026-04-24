import { Headset, ChevronRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" id="contact-cta">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="bg-[#1D7AE5] rounded-[24px] lg:rounded-[32px] overflow-hidden relative p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Background Decorative Rings */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border-60 border-white/5 rounded-full"></div>
            <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border-40 border-white/5 rounded-full"></div>
            <div className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] border-20 border-white/5 rounded-full"></div>
          </div>

          {/* Left Content: Icon and Text */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 relative z-10 text-center lg:text-left">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20 shrink-0">
              <Headset className="w-10 h-10 text-[#1D7AE5]" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-2xl lg:text-[32px] font-bold tracking-tight leading-tight">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-white/90 text-base lg:text-lg font-medium">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>

          {/* Right Content: Button */}
          <div className="relative z-10">
            <button className="bg-white hover:bg-gray-50 text-[#1D7AE5] font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl flex items-center gap-2 text-lg whitespace-nowrap">
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

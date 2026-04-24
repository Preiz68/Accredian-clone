export default function PartnershipsSection() {
  return (
    <section
      className="w-full bg-white pb-16 lg:pb-24 overflow-hidden"
      id="partnerships"
    >
      <div className="container mx-auto px-0 md:px-4 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
            Our Proven <span className="text-[#1D7AE5]">Partnerships</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            Successful Collaborations With the{" "}
            <span className="text-[#1D7AE5]">Industry's Best</span>
          </p>
        </div>

        {/* Logos Container */}
        <div className="w-full relative overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 md:gap-8 lg:gap-12">
            {/* First Set of Logos */}
            {[1, 2].map((set) => (
              <div
                key={set}
                className={`flex items-center gap-12 md:gap-8 lg:gap-12 shrink-0 ${set === 2 ? 'md:hidden' : ''}`}
              >
                {/* Reliance */}
                <div className="shrink-0 flex items-center justify-center w-[120px] md:w-[150px]">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#C29B57] mb-1"></div>
                    <div className="text-xl font-serif text-slate-800 tracking-tight leading-none">
                      Reliance
                    </div>
                    <div className="text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">
                      Industries Limited
                    </div>
                  </div>
                </div>

                {/* HCL */}
                <div className="shrink-0 flex items-center justify-center w-[120px] md:w-[150px]">
                  <div className="text-3xl font-black italic text-[#0071C5] tracking-widest">
                    HCL
                  </div>
                </div>

                {/* IBM */}
                <div className="shrink-0 flex items-center justify-center w-[120px] md:w-[150px]">
                  <div
                    className="text-4xl font-black text-[#0F62FE] tracking-widest"
                    style={{
                      fontFamily: "serif",
                      letterSpacing: "2px",
                      background:
                        "repeating-linear-gradient(0deg, #0F62FE, #0F62FE 3px, transparent 3px, transparent 5px)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    IBM
                  </div>
                </div>

                {/* CRIF */}
                <div className="shrink-0 flex items-center justify-center w-[120px] md:w-[150px]">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-black italic text-[#003876] tracking-tighter relative">
                      <span className="absolute -top-1 -left-2 text-[#FF8200] text-xl">
                        ↗
                      </span>
                      CRIF
                    </div>
                    <div className="text-[6px] italic text-[#003876] mt-0.5">
                      Together to the next level
                    </div>
                  </div>
                </div>

                {/* ADP */}
                <div className="shrink-0 flex items-center justify-center w-[120px] md:w-[150px]">
                  <div
                    className="text-4xl font-black text-[#D0271D] tracking-tighter"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    ADP<span className="text-[10px] align-top">®</span>
                  </div>
                </div>

                {/* BAYER */}
                <div className="shrink-0 flex items-center justify-center w-[120px] md:w-[150px]">
                  <div className="w-16 h-16 rounded-full border-4 border-t-[#65B32E] border-r-[#00A3E0] border-b-[#00A3E0] border-l-[#65B32E] flex items-center justify-center relative">
                    <div className="text-[#003359] font-bold text-[10px] flex flex-col items-center leading-[0.8]">
                      <span>B</span>
                      <span>A</span>
                      <span className="tracking-widest">BAYER</span>
                      <span>E</span>
                      <span>R</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

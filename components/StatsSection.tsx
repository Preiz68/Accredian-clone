export default function StatsSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" id="stats">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
            Our <span className="text-[#1D7AE5]">Track Record</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            The Numbers Behind{" "}
            <span className="text-[#1D7AE5]">Our Success</span>
          </p>
        </div>

        {/* Stats Container - Mobile: Rows, Desktop: Columns */}
        <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-5xl mx-auto border border-gray-100 rounded-2xl shadow-sm md:border-none md:shadow-none p-4 md:p-0">
          {/* Stat 1 */}
          <div className="flex flex-row md:flex-col items-center md:items-center py-6 md:py-0 md:px-8 flex-1 md:w-1/3">
            <div className="bg-[#E6F0FC] text-[#1D7AE5] font-bold text-xl md:text-2xl py-2 px-6 md:px-8 rounded-full mb-0 md:mb-4 w-[100px] md:w-auto text-center shrink-0">
              10K+
            </div>
            <p className="text-gray-800 text-sm md:text-base font-medium text-left md:text-center ml-6 md:ml-0 leading-snug max-w-[200px] md:max-w-xs">
              Professionals Trained For Exceptional Career Success
            </p>
          </div>

          {/* Divider 1 */}
          <div className="w-full h-px bg-gray-200 md:w-px md:h-auto md:bg-gray-300 self-stretch my-2 md:my-0"></div>

          {/* Stat 2 */}
          <div className="flex flex-row md:flex-col items-center md:items-center py-6 md:py-0 md:px-8 flex-1 md:w-1/3">
            <div className="bg-[#E6F0FC] text-[#1D7AE5] font-bold text-xl md:text-2xl py-2 px-6 md:px-8 rounded-full mb-0 md:mb-4 w-[100px] md:w-auto text-center shrink-0">
              200+
            </div>
            <p className="text-gray-800 text-sm md:text-base font-medium text-left md:text-center ml-6 md:ml-0 leading-snug max-w-[200px] md:max-w-xs">
              Sessions Delivered With Unmatched Learning Excellence
            </p>
          </div>

          {/* Divider 2 */}
          <div className="w-full h-px bg-gray-200 md:w-px md:h-auto md:bg-gray-300 self-stretch my-2 md:my-0"></div>

          {/* Stat 3 */}
          <div className="flex flex-row md:flex-col items-center md:items-center py-6 md:py-0 md:px-8 flex-1 md:w-1/3">
            <div className="bg-[#E6F0FC] text-[#1D7AE5] font-bold text-xl md:text-2xl py-2 px-6 md:px-8 rounded-full mb-0 md:mb-4 w-[100px] md:w-auto text-center shrink-0">
              5K+
            </div>
            <p className="text-gray-800 text-sm md:text-base font-medium text-left md:text-center ml-6 md:ml-0 leading-snug max-w-[200px] md:max-w-xs">
              Active Learners Engaged In Dynamic Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

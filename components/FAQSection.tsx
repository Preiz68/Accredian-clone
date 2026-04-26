"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { faqData } from "@/constants/data";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const resizeObserver = new ResizeObserver(checkScroll);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [checkScroll]);

  const scrollBy = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    scrollRef.current.classList.remove("cursor-grab");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
    scrollRef.current.classList.add("cursor-grab");
  };

  const onMouseUp = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
    scrollRef.current.classList.add("cursor-grab");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    checkScroll();
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24" id="faqs">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-12 lg:mb-20 text-center sm:text-left">
          Frequently Asked <span className="text-[#1D7AE5]">Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-1/3 relative group/nav">
            {canScrollLeft && (
              <button
                onClick={() => scrollBy("left")}
                className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 border border-slate-100 -ml-2"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
            )}

            <div
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              onScroll={checkScroll}
              className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 no-scrollbar cursor-grab select-none relative"
            >
              {faqData.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setOpenIndex(null);
                  }}
                  className={`shrink-0 grow lg:w-full px-8 py-4 rounded-xl border-2 border-neutral-300 font-bold text-lg transition-all duration-300 text-center ${
                    activeTab === index ? "text-blue-600" : "text-neutral-500"
                  }`}
                >
                  {tab.section}
                </button>
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scrollBy("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 border border-slate-100 -mr-2"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            )}
          </div>

          <div className="w-full lg:w-2/3 space-y-6">
            {faqData[activeTab].questions.map((faq, index) => (
              <div
                key={index}
                className="border-b border-slate-100 pb-6 last:border-0"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                      openIndex === index
                        ? "text-[#1D7AE5]"
                        : "text-slate-900 group-hover:text-[#1D7AE5]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-[#1D7AE5]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center">
          <button className="bg-[#1D7AE5] hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg shadow-blue-200 text-lg">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}

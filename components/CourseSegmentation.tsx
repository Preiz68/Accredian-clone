"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const segments = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: "/segment-program.png",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/segment-industry.png",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/segment-topic.png",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/segment-level.png",
  },
];

export default function CourseSegmentation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < segments.length) {
        setActiveIndex(newIndex);
      }
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
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24" id="segmentation">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
            Tailored <span className="text-[#1D7AE5]">Course Segmentation</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            Explore <span className="text-[#1D7AE5]">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Cards Grid / Carousel */}
        <div className="w-full">
          {/* Desktop: Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col h-full transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col items-center text-center grow">
                  <h3 className="text-[#1D7AE5] text-2xl font-bold mb-4">
                    {segment.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Horizontal Carousel with Snap points */}
          <div className="lg:hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-0 pb-4 no-scrollbar cursor-grab select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {segments.map((segment, index) => (
                <div key={index} className="shrink-0 w-full snap-center px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100">
                    <div className="relative h-56 w-full">
                      <Image
                        src={segment.image}
                        alt={segment.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover pointer-events-none"
                      />
                    </div>
                    <div className="p-10 flex flex-col items-center text-center">
                      <h3 className="text-[#1D7AE5] text-2xl font-bold">
                        {segment.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots (Dynamic) */}
            <div className="flex justify-center gap-2.5 mt-6">
              {segments.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#1D7AE5] scale-110"
                      : "bg-slate-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

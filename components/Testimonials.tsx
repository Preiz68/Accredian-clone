"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const testimonials = [
  {
    logo: "/adp-logo.png",
    text: '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
    company: "ADP",
  },
  {
    logo: "/bayer-logo.png",
    text: '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
    company: "Bayer",
  },
  {
    logo: "/adp-logo.png",
    text: '"The partnership with Accredian has been transformative. Their approach to professional development is unique and highly effective, delivering measurable results for our workforce."',
    company: "ADP",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.round(
        scrollPosition / (scrollRef.current.scrollWidth / testimonials.length),
      );
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < testimonials.length
      ) {
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
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-24" id="testimonials">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
            Testimonials from{" "}
            <span className="text-[#1D7AE5]">Our Partners</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            What <span className="text-[#1D7AE5]">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-12 cursor-grab select-none"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="shrink-0 w-full md:w-[calc(50%-12px)] snap-center"
              >
                <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] h-full flex flex-col items-start min-h-[300px]">
                  <div className="relative h-12 w-24 mb-8">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.company}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain object-left pointer-events-none"
                    />
                  </div>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-medium italic">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#1D7AE5] scale-125"
                    : "bg-slate-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

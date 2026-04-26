"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { testimonials } from "@/constants/data";

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isTabletOrAbove = useMediaQuery({ minWidth: 640 });
  const visibleDotsCount = isTabletOrAbove ? testimonials.length - 1 : testimonials.length;

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement)
        .offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);

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
    <section className="w-full" id="testimonials">
      {!mounted ? (
        <div className="h-40" /> 
      ) : (
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 lg:mb-15">
            <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-3 tracking-tight">
              Testimonials from <span className="text-[#1D7AE5]">Our Partners</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg font-medium">
              What <span className="text-[#1D7AE5]">Our Clients</span> Are Saying
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-1.5 pb-12 cursor-grab select-none"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 w-full sm:w-[50%] snap-center"
                >
                  <div className="bg-white rounded-lg p-8 lg:p-12 border border-gray-300 h-full flex flex-col items-start min-h-[300px]">
                    <div className="relative h-12 w-24 mb-8">
                      <Image
                        src={testimonial.logo}
                        alt={testimonial.company}
                        width={100}
                        height={100}
                        className="object-contain object-left size-16 pointer-events-none"
                      />
                    </div>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-medium">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2.5 mt-2">
              {testimonials.slice(0, visibleDotsCount).map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === Math.min(activeIndex, visibleDotsCount - 1)
                      ? "bg-[#1D7AE5] scale-125"
                      : "bg-slate-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { segments } from "@/constants/data";

import SectionHeader from "./SectionHeader";

export default function CourseSegmentation() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  
  let visibleDotsCount = segments.length;
  if (isDesktop) {
    visibleDotsCount = 0;
  } else if (isTablet) {
    visibleDotsCount = segments.length - 1;
  }

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement)
        .offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < segments.length
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
    <section
      className="mt-12 sm:mt-28 md:mx-16 mb-10 bg-white text-center font-circular"
      id="segmentation"
    >
      {!mounted ? (
        <div className="h-40" />
      ) : (
        <>
          <SectionHeader 
            title={<>Tailored <span className="text-[#1A73E8]">Course Segmentation</span></>}
            subtitle={<>Explore <span className="text-[#1A73E8]">Custom-fit Courses</span> Designed to Address Every Professional Focus</>}
          />

          <div className="w-full px-6">
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300 flex flex-col h-full transition-transform hover:-translate-y-2 duration-300"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={segment.image}
                      alt={segment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center text-center grow justify-center">
                    <h3 className="text-2xl font-semibold text-[#1A73E8]">
                      {segment.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

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
                  <div
                    key={index}
                    className="shrink-0 w-full sm:w-1/2 snap-center px-4"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300">
                      <div className="relative h-40 w-full">
                        <Image
                          src={segment.image}
                          alt={segment.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover rounded-t-lg pointer-events-none"
                        />
                      </div>
                      <div className="p-6 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-semibold text-[#1A73E8]">
                          {segment.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2.5 mt-6">
                {segments.slice(0, visibleDotsCount).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === Math.min(activeIndex, visibleDotsCount - 1)
                        ? "bg-[#1A73E8] scale-110"
                        : "bg-slate-200"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

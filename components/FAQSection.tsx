"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    section: "About the Course",
    questions: [
      {
        question:
          "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian offers a wide range of corporate training programs including Executive Education, Post Graduate Certificates, and specialized workshops in Data Science, AI, Product Management, and more.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "We offer specializations in various high-demand domains such as Machine Learning, Design Thinking, Business Analytics, Cybersecurity, Cloud Computing, and Strategic Leadership.",
      },
    ],
  },
  {
    section: "About the Delivery",
    questions: [
      {
        question: "How are the training sessions delivered?",
        answer:
          "Our sessions are delivered through a hybrid model, combining live instructor-led sessions, interactive workshops, and self-paced learning modules to ensure maximum engagement.",
      },
      {
        question: "Can the schedule be customized for our team?",
        answer:
          "Yes, we work closely with organizations to create customized schedules that fit their team's availability and project timelines without disrupting business operations.",
      },
    ],
  },
  {
    section: "Miscellaneous",
    questions: [
      {
        question: "What is the typical duration of a program?",
        answer:
          "Program duration varies based on the specialization and depth, ranging from intensive 2-day workshops to comprehensive 6-month executive certification programs.",
      },
      {
        question: "How do we get started with a partnership?",
        answer:
          "You can start by clicking the 'Enquire Now' button. Our team will reach out to understand your requirements and propose a tailored learning path for your organization.",
      },
    ],
  },
];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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
    <section className="w-full bg-white py-16 lg:py-24" id="faq">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-12 lg:mb-20 text-center lg:text-left">
          Frequently Asked <span className="text-[#1D7AE5]">Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Tabs Sidebar (Desktop) / Horizontal Scroll (Mobile) */}
          <div 
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 no-scrollbar cursor-grab select-none"
          >
            {faqData.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setOpenIndex(null);
                }}
                className={`shrink-0 lg:w-full px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center ${
                  activeTab === index
                    ? "bg-white text-[#1D7AE5] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border-transparent"
                    : "bg-white text-gray-400 border border-slate-200 hover:border-[#1D7AE5]/50"
                }`}
              >
                {tab.section}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
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

                {/* Answer with smooth transition */}
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

        {/* Enquire Now Button */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <button className="bg-[#1D7AE5] hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg shadow-blue-200 text-lg">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}

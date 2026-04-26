"use client";

import Link from "next/link";
import { useState, useEffect, memo } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/constants/data";

const NavLink = memo(({ link, activeLink, onClick }: { 
  link: { name: string, href: string }, 
  activeLink: string, 
  onClick: (name: string) => void 
}) => (
  <li
    className={`transition-all text-[16px] font-normal cursor-pointer duration-300 border-b-4 ${
      activeLink === link.name
        ? "text-[#1A73E8] font-semibold border-[#1A73E8]"
        : "border-transparent"
    }`}
  >
    <Link
      href={link.href === "#home" ? "/" : link.href}
      onClick={() => onClick(link.name)}
    >
      {link.name}
    </Link>
  </li>
));

NavLink.displayName = "NavLink";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const activeNav = navLinks.find((link) => link.href === `#${id}`);
          if (activeNav) {
            setActiveLink(activeNav.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <header className="w-full flex justify-center sticky top-0 z-50">
      <div className="w-full">
        <nav className="w-full bg-white shadow-md py-4 px-6 md:px-14">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" onClick={() => handleLinkClick("Home")}>
              <Image src="/logo.webp" alt="logo" width={124} height={32} priority />
            </Link>

            <ul className="hidden md:flex justify-end items-center flex-1 space-x-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  link={link} 
                  activeLink={activeLink} 
                  onClick={handleLinkClick} 
                />
              ))}
            </ul>

            <button
              className="md:hidden p-2 text-black transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-8 h-8 text-black cursor-pointer" />
              ) : (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-8 h-8 text-black cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-[80px] right-6 bg-white shadow-[0_15px_50px_-10px_rgba(0,0,0,0.15)] p-6 rounded-2xl z-60 border border-slate-50 min-w-[200px]">
              <ul className="flex flex-col items-start space-y-5">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full text-left">
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.name)}
                      className={`text-base font-bold transition-all duration-300 inline-block ${
                        activeLink === link.name
                          ? "text-[#1A73E8] border-b-2 border-[#1A73E8] pb-0.5"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

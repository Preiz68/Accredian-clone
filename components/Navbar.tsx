"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0">
          <span className="text-[#1D7AE5] text-2xl font-bold tracking-tight leading-none">
            accredian
          </span>
          <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-0.5">
            credentials that matter
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-[#1D7AE5] font-semibold border-b-2 border-[#1D7AE5] pb-1">
            Home
          </Link>
          <Link href="#stats" className="text-gray-700 hover:text-[#1D7AE5] font-medium transition-colors">
            Stats
          </Link>
          <Link href="#clients" className="text-gray-700 hover:text-[#1D7AE5] font-medium transition-colors">
            Clients
          </Link>
          <Link href="#edge" className="text-gray-700 hover:text-[#1D7AE5] font-medium transition-colors">
            Accredian Edge
          </Link>
          <Link href="#cat" className="text-gray-700 hover:text-[#1D7AE5] font-medium transition-colors">
            CAT
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-[#1D7AE5] font-medium transition-colors">
            How It Works
          </Link>
          <Link href="#faqs" className="text-gray-700 hover:text-[#1D7AE5] font-medium transition-colors">
            FAQs
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-[#1D7AE5] font-medium transition-colors">
            Testimonials
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

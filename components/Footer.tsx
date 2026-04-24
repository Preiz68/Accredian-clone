"use client";

import { Mail, MapPin } from "lucide-react";

const SocialIcons = {
  Facebook: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-colors cursor-pointer text-gray-400 hover:text-white lg:text-slate-600 lg:hover:text-[#1D7AE5]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-colors cursor-pointer text-gray-400 hover:text-white lg:text-slate-600 lg:hover:text-[#1D7AE5]">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Twitter: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-colors cursor-pointer text-gray-400 hover:text-white lg:text-slate-600 lg:hover:text-[#1D7AE5]">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors cursor-pointer text-gray-400 hover:text-white lg:text-slate-600 lg:hover:text-[#1D7AE5]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  Youtube: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-colors cursor-pointer text-gray-400 hover:text-white lg:text-slate-600 lg:hover:text-[#1D7AE5]">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M10 15V9l5 3-5 3z"></path>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] lg:bg-white text-white lg:text-slate-900 pt-16 pb-8 lg:pt-24 lg:pb-12 border-t border-white/5 lg:border-slate-100" id="footer">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Top Section: Logo, Socials, and CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 lg:mb-16">
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight text-white lg:text-[#1D7AE5]">
                accredian
              </span>
              <span className="text-[10px] text-gray-400 lg:text-slate-400 tracking-[0.2em] uppercase -mt-1 ml-0.5 font-medium">
                credentials that matter
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <SocialIcons.Facebook />
              <SocialIcons.Linkedin />
              <SocialIcons.Twitter />
              <SocialIcons.Instagram />
              <SocialIcons.Youtube />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-2 w-full lg:w-auto">
            <button className="bg-[#1D7AE5] hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-lg transition-colors w-full lg:w-auto text-lg shadow-lg">
              Enquire Now
            </button>
            <span className="text-sm text-gray-400 lg:text-slate-500 font-medium text-center lg:text-right w-full lg:w-auto">Speak with our Advisor</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 lg:bg-slate-100 mb-12 lg:mb-16"></div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 lg:mb-24">
          {/* Column 1: Accredian Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white lg:text-slate-900">Accredian</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 lg:text-slate-600 hover:text-white lg:hover:text-[#1D7AE5] transition-colors text-lg font-medium">About</a></li>
              <li><a href="#" className="text-gray-400 lg:text-slate-600 hover:text-white lg:hover:text-[#1D7AE5] transition-colors text-lg font-medium">Blog</a></li>
              <li><a href="#" className="text-gray-400 lg:text-slate-600 hover:text-white lg:hover:text-[#1D7AE5] transition-colors text-lg font-medium">Why Accredian</a></li>
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white lg:text-slate-900">Contact Us</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#1D7AE5] shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-gray-400 lg:text-slate-500 text-base">Email us:</span>
                  <a href="mailto:enterprise@accredian.com" className="text-[#1D7AE5] hover:underline text-lg font-medium">enterprise@accredian.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#1D7AE5] shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-gray-400 lg:text-slate-500 text-base">Office Address:</span>
                  <p className="text-white lg:text-slate-700 text-lg font-medium leading-relaxed">
                    4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 lg:border-slate-100 text-center">
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

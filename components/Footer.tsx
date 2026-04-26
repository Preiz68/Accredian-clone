import Image from "next/image";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#1d1d1d] md:bg-white text-white md:text-black mt-16 sm:mt-28 py-12 lg:py-16"
      id="footer"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex flex-col gap-6">
            <div className="relative h-10 w-40">
              <Image
                src="/logo.webp"
                alt="Accredian"
                fill
                className="object-contain object-left hidden md:block"
              />
              <Image
                src="/accredainnew.webp"
                alt="Accredian"
                fill
                className="object-contain object-left block md:hidden"
              />
            </div>

            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-[#1A73E8] transition-colors">
                <IoLogoFacebook className="w-6 h-6 md:text-gray-700 text-white" />
              </Link>
              <Link href="#" className="hover:text-[#1A73E8] transition-colors">
                <IoLogoLinkedin className="w-6 h-6 md:text-gray-700 text-white" />
              </Link>
              <Link href="#" className="hover:text-[#1A73E8] transition-colors">
                <IoLogoTwitter className="w-6 h-6 md:text-gray-700 text-white" />
              </Link>
              <Link href="#" className="hover:text-[#1A73E8] transition-colors">
                <IoLogoInstagram className="w-6 h-6 md:text-gray-700 text-white" />
              </Link>
              <Link href="#" className="hover:text-[#1A73E8] transition-colors">
                <IoLogoYoutube className="w-6 h-6 md:text-gray-700 text-white" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto">
            <button className="bg-[#1A73E8] hover:bg-blue-600 text-white font-semibold p-1 rounded-lg transition-all w-auto text-lg shadow-md">
              Enquire Now
            </button>
            <span className="text-sm md:text-gray-600 font-medium">
              Speak with our Advisor
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-gray-700 md:bg-gray-300 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold md:text-black text-white">
              Accredian
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  className="md:text-gray-600 hover:text-[#1A73E8] transition-colors font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="md:text-gray-600 hover:text-[#1A73E8] transition-colors font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="md:text-gray-600 hover:text-[#1A73E8] transition-colors font-medium"
                >
                  Why Accredian
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold md:text-black text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <p className="md:text-gray-600 font-medium">
                Email us:{" "}
                <Link
                  href="mailto:enterprise@accredian.com"
                  className="text-[#1A73E8] hover:underline font-semibold"
                >
                  enterprise@accredian.com
                </Link>
              </p>
              <div className="flex flex-col">
                <span className="md:text-gray-600 font-medium">
                  Office Address:
                </span>
                <p className="md:text-gray-600 font-medium leading-relaxed tracking-wider max-w-md">
                  4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                  Haryana
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-700 md:bg-gray-300 mb-8"></div>

        <div className="text-center">
          <p className="text-sm md:text-gray-500 font-medium tracking-widest">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

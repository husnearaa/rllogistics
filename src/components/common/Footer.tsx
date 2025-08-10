import Image from "next/image";
import Link from "next/link";
import logo1 from "@/assets/logo1.png";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center items-center flex-col lg:flex-row gap-6">
          {/* About Company Section */}
          <div className="lg:w-2/5">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo1}
                    alt="rllogistics"
                    width={500}
                    height={500}
                    className="w-[194px] h-[36px]"
                  />
                </Link>
              </div>

              <div>
                <h3 className="text-[22px] font-semibold mb-3">About Company</h3>
                <p className="text-gray-300 text-[18px] leading-relaxed mb-4 md:max-w-sm">
                  We work with passion of taking challenges and creating new
                  ones in advertising any new more sector.
                </p>
                <p className="text-white text-[22px] mb-4">admin@rllogistics.com</p>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-3">
                  <Link
                    href="#"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <div>
                      <span className="text-4xl"><IoLogoWechat /></span>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <div>
                      <span className="text-3xl"><FaXTwitter /></span>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <div>
                      <span className="text-4xl"><FaYoutube /></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="flex justify-between gap-6 flex-col md:flex-row">
              {/* Our Services Section */}
              <div className="space-y-4">
                <h3 className="text-[22px] font-semibold">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Just-In-Time delivery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Time based service levels
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Ware housing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Stock transparency
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Transport consolidation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Industry Sectors Section */}
              <div className="space-y-4">
                <h3 className="text-[22px] font-semibold">Industry Sectors</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Electronics Industry
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Industrial & Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Semicon & Solar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Oil & Gas Cargo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Energy & Chemicals
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Useful Links Section */}
              <div className="space-y-4">
                <h3 className="text-[22px] font-semibold">Useful Link</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-[18px]"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t-[1px] border-white mt-8 pt-6">
          <p className="text-white text-[18px]">
            Copyright © 2024 | Alright reserved by RL Logistics.
          </p>
        </div>
      </div>
    </footer>
  );
}

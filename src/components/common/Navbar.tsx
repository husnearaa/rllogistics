"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaCheck, FaChevronDown, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import China from "@/assets/icons/china.png";
import { Globe } from "lucide-react";

type FlagProps = { className?: string };

const ChinaFlag = ({ className }: FlagProps) => (
  <Image
    src={China}
    alt="Finland"
    width={20}
    height={20}
    className={`${className} w-6 h-6`}
  />
);

interface Language {
  name: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("FI");
  const pathname = usePathname();

  const languages: Language[] = [
    { name: "Chinese", icon: <ChinaFlag className="mr-2" /> },
    { name: "Chinese", icon: <ChinaFlag className="mr-2" /> },
  ];

  const currentLangData = languages.find(
    (lang) => lang.name === currentLanguage
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

  const selectLanguage = (language: Language) => {
    setCurrentLanguage(language.name);
    setIsLanguageOpen(false);
    // Add your i18n implementation here
    console.log(`Language changed to ${language.name}`);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Our Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-18 left-0 w-full z-50 bg-white text-black py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex gap-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="rllogistics"
                width={500}
                height={500}
                className="w-[194px] h-[36px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-primary" : "text-black"
                } hover:text-primary text-base`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-3">
            <div className="flex gap-2">
              <div className="hidden lg:flex items-center space-x-6 border-primary border rounded-lg">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={toggleLanguageDropdown}
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-[#262829] hover:text-[#A8937A] focus:outline-none transition-colors"
                    aria-label="Language selector"
                    aria-expanded={isLanguageOpen}
                  >
                    <div className="flex items-center space-x-2">
                      {currentLangData?.icon}
                      <span><Globe className="text-primary" /></span>
                    </div>
                    <FaChevronDown
                      className={`transition-transform ${
                        isLanguageOpen ? "rotate-180" : ""
                      } text-primary`}
                    />
                  </button>
                  {isLanguageOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsLanguageOpen(false)}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute right-0 z-20 w-48 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                      >
                        <div className="py-1">
                          {languages.map((language) => (
                            <button
                              key={language.name}
                              onClick={() => selectLanguage(language)}
                              className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                                currentLanguage === language.name
                                  ? "bg-gray-100 text-[#A8937A]"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                              role="menuitem"
                            >
                              {language.icon}
                              <span className="flex-1">{language.name}</span>
                              {currentLanguage === language.name && (
                                <FaCheck className="text-[#A8937A] ml-2" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <Link href="/contact">
                <button className="bg-transparent border border-primary hover:text-white text-primary hover:bg-primary px-6 py-2 rounded-md flex items-center space-x-2 transition duration-300 ease-in-out">
                  <span>Book Now</span>
                </button>
              </Link>
            </div>
            <Link href="/contact">
              <button className="bg-primary border border-primary text-white hover:text-primary hover:bg-transparent px-6 py-2 rounded-md flex items-center space-x-2 transition duration-300 ease-in-out">
                <span>Track Order</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - Moved outside of desktop buttons div */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-primary focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="rllogistics"
                  width={194}
                  height={36}
                  className="w-[194px] h-[36px]"
                />
              </div>
              <button
                onClick={toggleSidebar}
                className="text-black focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    pathname === link.href ? "text-primary" : "text-black"
                  } hover:text-primary py-2 border-b border-gray-200 text-lg`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay for sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </nav>
  );
}
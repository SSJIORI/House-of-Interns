"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { HeaderData } from "@/lib/types"

interface HeaderProps {
  data: HeaderData;
  onNavigate: (sectionId: string) => void;
}

export function Header({ data, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    onNavigate("home")
  }

  const { logo, logoAlt, navigationItems } = data;

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const logoUrl = `${strapiUrl}${logo.url}`;

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-4 px-4">
      {/* Main pill container */}
      <div
        className={`transition-all duration-500 ease-out rounded-full border border-white/20 shadow-xl ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10" 
            : "bg-white/40 backdrop-blur-lg shadow-lg shadow-black/5"
        }`}
      >
        <div className="flex items-center px-8 py-1">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center mr-20 focus:outline-none"
            aria-label="Go to home section"
          >
            <Image 
              src={logoUrl} 
              alt={logoAlt} 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <div className="flex flex-col leading-tight items-start">
              <span className="text-lg font-bold text-brand-black leading-none">house</span>
              <span className="text-lg font-bold text-brand-black leading-none">of interns</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.sectionId)}
                className="relative px-4 py-2 text-brand-black hover:text-brand-blue transition-colors group capitalize font-medium text-md"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 ml-16 rounded-full hover:bg-white/30 transition-colors"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute block h-0.5 w-5 bg-brand-black transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-2" : "top-0.5"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 bg-brand-black transform transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "top-2"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 bg-brand-black transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-2" : "top-3.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/10 z-40 min-w-[300px]">
          <nav className="py-3 space-y-1 px-6">
            {data.navigationItems?.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.sectionId)}
                className="block w-full text-left px-4 py-2.5 text-brand-black hover:bg-white/40 hover:text-brand-blue transition-colors capitalize font-medium rounded-xl text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
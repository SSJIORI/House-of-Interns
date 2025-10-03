"use client";

import Image from "next/image";
import { HeroSectionData } from "@/lib/types";

interface HeroSectionProps {
  data: HeroSectionData;
  onNavigate?: (id: string) => void; // Make onNavigate optional
}

export function HeroSection({ data, onNavigate }: HeroSectionProps) {
  if (!data) {
    return (
      <section id="home" className="scroll-mt-16 pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </section>
    );
  }

  const { headline, subtext, buttonText, desktopImage, mobileImage } = data;

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const desktopImageUrl = `${strapiUrl}${desktopImage.url}`;
  const mobileImageUrl = `${strapiUrl}${mobileImage.url}`;

  return (
    <section
      id="home"
      className="scroll-mt-16 pt-20 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image */}
        <Image
          src={desktopImageUrl}
          alt="House of Interns background"
          fill
          className="object-cover hidden sm:block"
          priority
        />
        {/* Mobile Background Image */}
        <Image
          src={mobileImageUrl}
          alt="House of Interns background mobile"
          fill
          className="object-cover block sm:hidden"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content in floating white card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20">
            <div className="space-y-4 sm:space-y-6 lg:space-y-6">
              {/* Headline */}
              <div>
                <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold text-brand-black leading-tight">
                  {headline.split(" ").slice(0, 3).join(" ")}
                </h1>
                <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold text-brand-blue leading-tight">
                  {headline.split(" ").slice(3).join(" ")}
                </h1>
              </div>

              {/* Subtext */}
              <p className="text-lg sm:text-xl lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                {subtext}
              </p>

              {/* CTA button + redirect to contact section */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="group relative bg-brand-blue text-white px-8 py-2 md:px-12 md:py-3 rounded-full text-lg lg:text-xl font-semibold hover:bg-brand-black transition-all duration-300 flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"></div>
                  <span className="relative z-10">
                    {buttonText}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Empty space to maintain layout balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}
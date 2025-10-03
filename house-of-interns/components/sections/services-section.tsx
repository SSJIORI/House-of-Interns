"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { iconMap } from "@/lib/icon-resolver";
import { ServicesSectionData } from "@/lib/types";

interface ServicesSectionProps {
  data: ServicesSectionData;
}

export function ServicesSection({ data }: ServicesSectionProps) {
  const { title, description, mobileImage, desktopImage, service } = data;

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const desktopImageUrl = `${strapiUrl}${desktopImage.url}`;
  const mobileImageUrl = `${strapiUrl}${mobileImage.url}`;
  
  return (
    <section
      id="services"
      className="scroll-mt-24 py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image */}
        <Image
          src={desktopImageUrl}
          alt="Houses of Excellence background"
          fill
          className="object-cover hidden sm:block"
          priority
        />
        {/* Mobile Background Image */}
        <Image
          src={mobileImageUrl}
          alt="Houses of Excellence background mobile"
          fill
          className="object-cover block md:hidden"
          priority
        />
      </div>

      {/* Section Headline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {description}
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white/80 backdrop-blur-lg border border-white/20 hover:bg-white/90 hover:border-white/30 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl shadow-xl shadow-black/10"
              >

                {/* Services Icon */}
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 mx-auto bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300">
                      {Icon && <Icon className="text-brand-blue group-hover:text-white transition-colors duration-300" />}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-black">
                    {service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}</p>

                  {/* Services CTA Button */}
                  <button className="group/btn relative w-full bg-brand-black text-white py-3 lg:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden">
                    <div className="absolute inset-0 bg-brand-red transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out rounded-full"></div>
                    <span className="relative z-10">
                      {service.buttonText}</span>
                    <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
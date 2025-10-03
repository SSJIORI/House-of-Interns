"use client"

import Image from "next/image"
import { iconMap } from "@/lib/icon-resolver"
import { FooterData } from "@/lib/types"

interface FooterProps {
  data: FooterData
  onScrollToTop: () => void
}

export function Footer({ data, onScrollToTop }: FooterProps) {
  const { logo, logoAlt, tagline, subTagline, contactTitle, contactInfo, socialTitle, socialMedia, copyrightText, backToTopText } = data;

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const logoUrl = `${strapiUrl}${logo.url}`;

  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Footer logo and taglines */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src={logoUrl} 
                alt={logoAlt} 
                width={60} 
                height={60} 
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold leading-none">house</span>
                <span className="text-xl font-bold leading-none">of interns</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">{tagline}</p>
              <p className="text-sm text-gray-400">{subTagline}</p>
            </div>
          </div>

          {/* Contact information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{contactTitle}</h4>
            <div className="space-y-3 text-gray-300">
              {contactInfo.map((contact) => {
                const Icon = iconMap[contact.icon]
                return (
                  <div key={contact.id} className="flex items-center group hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-brand-red transition-colors">
                      {Icon && <Icon size={14} />}
                    </div>
                    <span>{contact.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Social media icons */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{socialTitle}</h4>
            <div className="flex space-x-4">
              {socialMedia.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    className="group w-12 h-12 bg-gray-800 hover:bg-brand-red rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {Icon && <Icon size={20} className="group-hover:text-white" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright and back to top */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {copyrightText}
          </p>

          <button
            onClick={onScrollToTop}
            className="group bg-gray-800 hover:bg-brand-blue text-white p-4 rounded-full transition-all duration-300 hover:scale-110 flex items-center space-x-2"
            aria-label="Back to top"
          >
            {iconMap.ChevronUp && (
              <iconMap.ChevronUp size={20} className="group-hover:animate-bounce" />
            )}
            <span className="text-sm font-medium hidden sm:block">{backToTopText}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
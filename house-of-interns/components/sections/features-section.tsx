"use client";

import { iconMap } from "@/lib/icon-resolver";
import { FeaturesSectionData } from "@/lib/types";

interface FeaturesSectionProps {
  data: FeaturesSectionData;
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
  console.log("FeaturesSection received data:", data);
  
  if (!data) {
    console.error("FeaturesSection: No data received");
    return <div>No features data available</div>;
  }
  
  const { title, description, feature } = data;
  
  if (!feature || !Array.isArray(feature)) {
    console.error("FeaturesSection: Invalid or missing feature array", feature);
    return <div>No features available</div>;
  }

  return (
    <section
      id="features"
      className="scroll-mt-24 py-20 bg-gradient-to-b from-blue-50 via-gray-50 to-white relative overflow-hidden"
    >

      {/* Section Headline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-brand-black mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {feature.map((feature) => {
            console.log("Processing feature:", feature);
            const Icon = iconMap[feature.icon];
            console.log(`Icon for ${feature.icon}:`, Icon);
            return (
              <div
                key={feature.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 hover:border-blue-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-red-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Features Icons */}
                <div className="space-y-6 relative z-10">
                  <div className="relative">
                    <div className="w-16 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full border border-gray-300 group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                      <div className="w-8 h-8 bg-brand-blue rounded-full absolute top-1 left-0.5 group-hover:left-7 group-hover:bg-brand-red transition-all duration-300 flex items-center justify-center shadow-md">
                        {Icon && <Icon className="text-white" />}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

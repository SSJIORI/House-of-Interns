"use client";

import { AboutSectionData } from "@/lib/types";

interface AboutSectionProps {
    data: AboutSectionData;
}

export function AboutSection({ data }: AboutSectionProps) {
    if (!data) {
        console.error("AboutSection: No data received");
        return <div>No about data available</div>;
    }

    const { title, description } = data;

    return (
        <section
            id="about"
            className="scroll-mt-24 py-20 bg-brand-blue relative overflow-hidden"
        >
            {/* Dynamic background elements */}
            <div className="absolute inset-0">
                <div
                className="absolute top-60 right-10 w-40 h-40 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-15 animate-pulse"
                style={{ animationDuration: "4s" }}
                ></div>
                <div
                className="absolute top-1/2 right-1 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-ping"
                style={{ animationDuration: "5s" }}
                ></div>
                <div
                className="absolute top-1 left-1 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-ping"
                style={{ animationDuration: "5s" }}
                ></div>

                {/* Geometric shapes */}
                <div className="absolute top-32 left-20 w-20 h-20 border-4 border-blue-300 rounded-2xl rotate-45 opacity-25 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-18 h-18 border-4 border-red-300 rounded-full opacity-30"></div>

                {/* Large colorful blobs */}
                <div
                className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-l from-blue-300/20 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "6s" }}
                ></div>
                <div
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-300/20 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "8s", animationDelay: "2s" }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                <h2 className="text-5xl font-bold text-white mb-6">
                    {title}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {description}
                </p>
                </div>
            </div>

        </section>
    )
}
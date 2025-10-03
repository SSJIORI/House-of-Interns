"use client";

import { HomeLayoutProps, LandingPageSection, HeaderData, FooterData } from "@/lib/types";
import { Header } from "../layout/header";
import { Footer } from "../layout/footer";
import { ContactSection } from "../sections/contact-section";
import { FeaturesSection } from "../sections/features-section";
import { HeroSection } from "../sections/hero-section";
import { ServicesSection } from "../sections/services-section";

export function HomeLayout({ data }: HomeLayoutProps) {
    const handleNavigate = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Extract header and footer data from sections
    const headerSection = data.sections.find(
        (section) => section.__component === "sections.header"
    ) as HeaderData | undefined;

    const footerSection = data.sections.find(
        (section) => section.__component === "sections.footer"
    ) as FooterData | undefined;

    // Filter out header and footer from sections to render
    const contentSections = data.sections.filter(
        (section) => section.__component !== "sections.header" && section.__component !== "sections.footer"
    );

    // Function to render each section based on its __component type
    const sectionRenderer = (section: LandingPageSection, index: number) => {
        switch (section.__component) {
            case "sections.hero-section":
                return <HeroSection key={index} data={section} onNavigate={handleNavigate} />;
            case "sections.features":
                return <FeaturesSection key={index} data={section} />;
            case "sections.services-section":
                return <ServicesSection key={index} data={section} />;
            case "sections.contact-section":
                return <ContactSection key={index} data={section} />;
            default:
                return null;
        }
    };

    if (!data || !data.sections) {
        return (
            <div className="text-center py-10">
                <p>No sections found for this page. Check Strapi content.</p>
            </div>     
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            {headerSection && (
                <Header data={headerSection} onNavigate={handleNavigate} />
            )}
            <main className="flex-grow">
                {contentSections.map((section, index) => sectionRenderer(section, index))}
            </main>
            {footerSection && (
                <Footer data={footerSection} onScrollToTop={handleScrollToTop} />
            )}
        </div>
    );
}
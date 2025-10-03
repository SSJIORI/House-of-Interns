export interface StrapiImage {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: { url: string };
        small: { url: string };
        medium: { url: string };
        large: { url: string };
    };
    url: string;
}

export interface NavigationItems {
    id: number;
    label: string;
    sectionId: string;
}

export interface HeaderData {
    __component: "sections.header";
    id: number;
    logo: StrapiImage;
    logoAlt: string;
    navigationItems: NavigationItems[];
}

export interface HeroSectionData {
    __component: "sections.hero-section";
    id: number;
    headline: string;
    subtext: string;
    buttonText: string;
    desktopImage: StrapiImage;
    mobileImage: StrapiImage;
}

export interface AboutSectionData {
    __component: "sections.about-section";
    id: number;
    title: string;
    description: string;
}

export interface IndividualFeature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export interface FeaturesSectionData {
    __component: "sections.features";
    id: number;
    title: string;
    description: string;
    feature: IndividualFeature[];
}

export interface IndividualService {
    id: number;
    title: string;
    description: string;
    icon: string;
    buttonText: string;
}

export interface ServicesSectionData {
    __component: "sections.services-section";
    id: number;
    title: string;
    description: string;
    mobileImage: StrapiImage;
    desktopImage: StrapiImage;
    service: IndividualService[];
    buttonText: string;
}

export interface ContactSectionData {
    __component: "sections.contact-section";
    id: number;
    title: string;
    description: string;
    buttonText: string;
}

// Footer Types
export interface ContactInfo {
    id: number;
    icon: string;
    text: string;
}

export interface SocialMedia {
    id: number;
    icon: string;
    url: string;
    label: string;
}

export interface FooterData {
    __component: "sections.footer";
    id: number;
    logo: StrapiImage;
    logoAlt: string;
    tagline: string;
    subTagline: string;
    contactTitle: string;
    contactInfo: ContactInfo[];
    socialTitle: string;
    socialMedia: SocialMedia[];
    copyrightText: string;
    backToTopText: string;
}

export type LandingPageSection =
    | HeaderData
    | HeroSectionData
    | FeaturesSectionData
    | ServicesSectionData
    | ContactSectionData
    | FooterData;

export interface LandingPageData {
    id: number;
    sections: LandingPageSection[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface HomeLayoutProps {
    data: LandingPageData;
}

export type CampaignPageSection =
    | HeroSectionData
    | AboutSectionData
    | FeaturesSectionData
    | ServicesSectionData
    | ContactSectionData
    | FooterData;

export interface SEOData {
    id: number;
    metaTitle: string;
    metaDescription: string;
    metaKeywords?: string;
    favicon?: StrapiImage;
    ogImage?: StrapiImage;
    ogTitle?: string;
    ogDescription?: string;
}

export interface CampaignPageData {
    id: number;
    title: string;
    slug: string;
    isActive: boolean;
    seo?: SEOData;
    sections: CampaignPageSection[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface CampaignLayoutProps {
    data: CampaignPageData;
}
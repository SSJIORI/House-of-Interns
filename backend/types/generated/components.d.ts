import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsNavigationItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_navigation_items';
  info: {
    displayName: 'Navigation Items';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    sectionId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'Contact  Section';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'sections.individual-feature', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    backToTopText: Schema.Attribute.String & Schema.Attribute.Required;
    contactInfo: Schema.Attribute.Component<'elements.contact-info', true>;
    contactTitle: Schema.Attribute.String & Schema.Attribute.Required;
    copyrightText: Schema.Attribute.Text & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logoAlt: Schema.Attribute.String & Schema.Attribute.Required;
    socialMedia: Schema.Attribute.Component<'elements.social-media', true>;
    socialTitle: Schema.Attribute.String & Schema.Attribute.Required;
    subTagline: Schema.Attribute.String & Schema.Attribute.Required;
    tagline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logoAlt: Schema.Attribute.String;
    navigationItems: Schema.Attribute.Component<
      'elements.navigation-items',
      true
    >;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtext: Schema.Attribute.Text;
  };
}

export interface SectionsIndividualFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_individual_features';
  info: {
    displayName: 'Individual Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsIndividualService extends Struct.ComponentSchema {
  collectionName: 'components_sections_individual_services';
  info: {
    displayName: 'Individual Service';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    service: Schema.Attribute.Component<'sections.individual-service', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    favicon: Schema.Attribute.Media<'images'>;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.contact-info': ElementsContactInfo;
      'elements.navigation-items': ElementsNavigationItems;
      'elements.social-media': ElementsSocialMedia;
      'sections.about-section': SectionsAboutSection;
      'sections.contact-section': SectionsContactSection;
      'sections.features': SectionsFeatures;
      'sections.footer': SectionsFooter;
      'sections.header': SectionsHeader;
      'sections.hero-section': SectionsHeroSection;
      'sections.individual-feature': SectionsIndividualFeature;
      'sections.individual-service': SectionsIndividualService;
      'sections.services-section': SectionsServicesSection;
      'shared.seo': SharedSeo;
    }
  }
}

export type Language = 'sv' | 'en';

export interface ServiceItem {
  id: string;
  code: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  metrics?: { label: string; value: string }[];
}

export interface TranslationContent {
  nav: {
    about: string;
    services: string;
    founder: string;
    contact: string;
    tagline: string;
    getInTouch: string;
    stockholmTime: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    tagline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    keyStats: {
      stat1: { value: string; label: string };
      stat2: { value: string; label: string };
      stat3: { value: string; label: string };
    };
  };
  about: {
    sectionNumber: string;
    title: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  services: {
    sectionNumber: string;
    title: string;
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  founder: {
    sectionNumber: string;
    title: string;
    role: string;
    name: string;
    company: string;
    tagline: string;
    phone: string;
    email: string;
    linkedin: string;
    website: string;
    location: string;
    quote: string;
    downloadVCard: string;
    copyEmail: string;
    copiedEmail: string;
    scanToConnect: string;
  };
  contact: {
    sectionNumber: string;
    title: string;
    heading: string;
    description: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      serviceLabel: string;
      serviceOptions: { id: string; label: string }[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMessage: string;
      sendAnother: string;
    };
    directTitle: string;
    directDesc: string;
  };
  footer: {
    companyName: string;
    registeredIn: string;
    copyright: string;
    backToTop: string;
    rights: string;
  };
}

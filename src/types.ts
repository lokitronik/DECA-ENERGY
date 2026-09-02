ts
export type Language = 'sv' | 'en';

export interface ServiceItem {
  title: string;
  tag: string;
}

export interface TranslationContent {
  slogan: string;
  about: string;
  services: string;
  contact: string;

  servicesList: ServiceItem[];

  name: string;
  email: string;
  message: string;
  send: string;

  directContact: string;

  formSuccess: string;
  formError: string;
}

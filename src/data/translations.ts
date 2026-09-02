import { Language, TranslationContent } from './types';

export const translations: Record<Language, TranslationContent> = {
  sv: {
    slogan: 'Where Energy Meets Markets & People',

    about: 'Vem är DECA Energy?',
    aboutText:
      'DECA Energy är...',

    services: 'Tjänster',
    contact: 'Kontakt',

    servicesList: [
      {
        title: 'Solenergi (PV)',
        tag: '01',
        description:
          '???',
      },
      {
        title: 'Batterilagring (BESS)',
        tag: '02',
        description:
          '???',
      },
      {
        title: 'Affärsutveckling & Rådgivning',
        tag: '03',
        description:
          '???',
      },
    ],

    name: 'Namn',
    email: 'E-post',
    message: 'Meddelande',
    send: 'Skicka',

    directContact: 'Direktkontakt',

    formSuccess: 'Tack! Ditt meddelande har skickats.',
    formError: 'Något gick fel. Försök igen.',
  },

  en: {
    slogan: 'Where Energy Meets Markets & People',

    about: 'Who is DECA Energy?',
    aboutText:
      'DECA Energy is...',

    services: 'Services',
    contact: 'Contact',

    servicesList: [
      {
        title: 'Solar PV',
        tag: '01',
        description:
          '???',
      },
      {
        title: 'Battery Storage (BESS)',
        tag: '02',
        description:
          '???',
      },
      {
        title: 'Business Development & Advisory',
        tag: '03',
        description:
          '???',
      },
    ],

    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',

    directContact: 'Direct Contact',

    formSuccess: 'Thank you! Your message has been sent.',
    formError: 'Something went wrong. Please try again.',
  },
};

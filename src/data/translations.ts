import { TranslationContent } from '../types';

export const translations: Record<'sv' | 'en', TranslationContent> = {
  sv: {
    nav: {
      about: 'Om DECA',
      services: 'Tjänster',
      founder: 'Profil',
      contact: 'Kontakt',
      tagline: 'Där energi möter marknad och människor',
      getInTouch: 'Kontakta oss',
      stockholmTime: 'Stockholm, SE',
    },
    hero: {
      badge: 'DECA ENERGY CONSULTING AB — SVERIGE & INTERNATIONELLT',
      titleLine1: 'RÅDGIVNING INOM',
      titleLine2: 'ENERGIEFFEKTIVISERING',
      titleHighlight: '& GRÖN INFRASTRUKTUR',
      tagline: 'Where Energy Meets Markets & People',
      description:
        'Oberoende energikonsultation specialiserad på storskalig solenergi (PV), batterilagringssystem (BESS), energieffektivisering och internationell affärsutveckling för den nordiska och europeiska marknaden.',
      ctaPrimary: 'Utforska tjänster',
      ctaSecondary: 'Boka konsultation',
      keyStats: {
        stat1: { value: 'PV + BESS', label: 'Storskaliga energilösningar' },
        stat2: { value: 'Effektivisering', label: 'Optimerad energiförbrukning' },
        stat3: { value: 'Nordic & Global', label: 'Marknad & rådgivning' },
      },
    },
    about: {
      sectionNumber: '01',
      title: 'OM DECA ENERGY',
      heading: 'Strategisk energirådgivning för en föränderlig kraftmarknad.',
      paragraph1:
        'DECA Energy Consulting AB är en svensk rådgivningsbyrå med fokus på att maximera värdet i energiinvesteringar, sänka driftskostnader och driva den gröna omställningen genom teknisk och kommersiell precision.',
      paragraph2:
        'Under ledning av grundaren Daniel Desidera kombinerar DECA djupgående teknisk förståelse för solenergi och energilagring med internationell affärsutveckling och regulatorisk rådgivning.',
      pillars: [
        {
          title: 'Teknisk & Finansiell Precision',
          description:
            'Noggrann analys av energiproduktion, nätanslutningar och lagringskapacitet för maximal avkastning.',
        },
        {
          title: 'Energieffektivisering',
          description:
            'Konkreta åtgärder för minskad energianvändning och optimerad laststyrning för fastigheter och industri.',
        },
        {
          title: 'Marknadsförankring',
          description:
            'Djup insikt i stödtjänstmarknader (FCR/FFR), elprisdynamik och PPA-avtal i Sverige och Europa.',
        },
      ],
    },
    services: {
      sectionNumber: '02',
      title: 'TJÄNSTER & EXPERTIS',
      heading: 'Fokuserade konsulttjänster inom modern energiinfrastruktur.',
      subheading:
        'Fyra integrerade kärnområden utformade för att stärka energiprojekt från idé till lönsam drift.',
      items: [
        {
          id: 'pv',
          code: '01 / PV',
          tag: 'SOLENERGI',
          title: 'PV (Solceller & Solparker)',
          subtitle: 'Storskalig solenergi och anläggningsdesign',
          description:
            'Projektutveckling, genomförbarhetsstudier och teknisk granskning av markbaserade solparker samt kommersiella takinstallationer. Vi optimerar layout, komponentval och nätanslutning.',
          capabilities: [
            'Genomförbarhetsstudier & markanalys',
            'Teknisk dimensionering & produktionsberäkningar',
            'Upphandling & granskning av EPC-leverantörer',
            'Lönsamhetskalkyler & LCOE-optimering',
          ],
          metrics: [
            { label: 'Fokus', value: 'Tak & Markparker' },
            { label: 'Skala', value: 'C&I till Utility-scale' },
          ],
        },
        {
          id: 'bess',
          code: '02 / BESS',
          tag: 'ENERGILAGRING',
          title: 'BESS (Batterilagringssystem)',
          subtitle: 'Systemintegration och intäktsstapling',
          description:
            'Strategisk och teknisk rådgivning kring batterienergilagring. Från stödtjänster på Svenska kraftnäts marknader (FCR-N, FCR-D, FFR, mFRR) till toppkapning och mikronät.',
          capabilities: [
            'Dimensionering av batterisystem & degraderingsanalys',
            'Intäktsmodellering för stödtjänster & flexibilitet',
            'Co-location (samlokalisering) med sol- och vindkraft',
            'Nätägarkontakter & koncessionsfrågor',
          ],
          metrics: [
            { label: 'Marknader', value: 'FCR-D / FFR / Arbitrage' },
            { label: 'Teknik', value: 'LFP / NMC Grid-Scale' },
          ],
        },
        {
          id: 'efficiency',
          code: '03 / EE',
          tag: 'EFFEKTIVISERING',
          title: 'Energieffektivisering & Revision',
          subtitle: 'Optimerad energianvändning och minskade kostnader',
          description:
            'Kartläggning av energiflöden, identifiering av spillvärme och implementering av smart energistyrning. Vi hjälper företag och fastighetsägare att minimera kWh-kostnader och koldioxidavtryck.',
          capabilities: [
            'Energikartläggning enligt gällande EU-direktiv',
            'Effekttoppsreducering & laststyrning',
            'Integrering av styr- och reglersystem (EMS/BMS)',
            'Handlingsplaner för hållbarhet och ESG-rapportering',
          ],
          metrics: [
            { label: 'Mål', value: '20–40% minskad toppeffekt' },
            { label: 'Standard', value: 'ISO 50001 / EED' },
          ],
        },
        {
          id: 'advisory',
          code: '04 / BD',
          tag: 'AFFÄRSUTVECKLING',
          title: 'Business Development & Rådgivning',
          subtitle: 'Internationell expansion och marknadsstrategi',
          description:
            'Strategisk affärsutveckling för energibolag, investerare och teknologileverantörer. Strukturering av PPA (Power Purchase Agreements), partnerskap och marknadsetablering i Norden.',
          capabilities: [
            'Internationell affärsutveckling & partnerskap',
            'PPA-förhandlingar och strukturering',
            'Marknadsanalys för förnybar energi i Norden',
            'M&A kommersiell due diligence för energitillgångar',
          ],
          metrics: [
            { label: 'Räckvidd', value: 'Sverige & Europa' },
            { label: 'Expertis', value: 'Kommersiell & Legal' },
          ],
        },
      ],
    },
    founder: {
      sectionNumber: '03',
      title: 'GRUNDARE & LEDNING',
      role: 'Founder — International Business Development',
      name: 'Daniel Desidera',
      company: 'DECA ENERGY CONSULTING AB',
      tagline: 'Where Energy Meets Markets & People',
      phone: '+46 70 004 44 21',
      email: 'daniel@deca-energy.com',
      linkedin: 'linkedin.com/in/danieldesidera',
      website: 'deca-energy.com',
      location: 'Sverige / Stockholm',
      quote:
        'Framtidens energisystem handlar om att förena avancerad teknik med marknadsinsikt och hållbara affärsrelationer.',
      downloadVCard: 'Ladda ner kontaktkort (vCard)',
      copyEmail: 'Kopiera e-post',
      copiedEmail: 'Kopierad till urklipp!',
      scanToConnect: 'SKANNA FÖR ATT ANSLUTA',
    },
    contact: {
      sectionNumber: '04',
      title: 'KONTAKT',
      heading: 'Låt oss diskutera ert nästa energiprojekt.',
      description:
        'Fyll i formuläret nedan eller kontakta oss direkt via telefon eller e-post för rådgivning kring solenergi, batterilagring eller energieffektivisering.',
      form: {
        nameLabel: 'Namn & Efternamn',
        namePlaceholder: 't.ex. Johan Lindström',
        emailLabel: 'E-postadress',
        emailPlaceholder: 'johan@foretag.se',
        companyLabel: 'Företag / Organisation',
        companyPlaceholder: 'Företagsnamn AB',
        serviceLabel: 'Område av intresse',
        serviceOptions: [
          { id: 'pv', label: 'Solenergi (PV)' },
          { id: 'bess', label: 'Batterilagring (BESS)' },
          { id: 'efficiency', label: 'Energieffektivisering' },
          { id: 'advisory', label: 'Affärsutveckling & Rådgivning' },
          { id: 'general', label: 'Allmän förfrågan' },
        ],
        messageLabel: 'Meddelande / Projektbeskrivning',
        messagePlaceholder: 'Kort beskrivning av ert projekt eller era utmaningar...',
        submitBtn: 'Skicka meddelande',
        submittingBtn: 'Skickar...',
        successTitle: 'Tack för ditt meddelande!',
        successMessage: 'Vi har mottagit din förfrågan och återkommer inom 24 timmar.',
        sendAnother: 'Skicka ett till meddelande',
      },
      directTitle: 'Direktkontakt',
      directDesc: 'Tveka inte att höra av dig direkt för brådskande eller konfidentiella förfrågningar.',
    },
    footer: {
      companyName: 'DECA ENERGY CONSULTING AB',
      registeredIn: 'Registrerat i Sverige — Stockholm',
      copyright: 'Alla rättigheter förbehållna.',
      backToTop: 'Tillbaka till toppen ↑',
      rights: 'DECA Energy Consulting AB — PV · BESS · Efficiency · Market Advisory',
    },
  },
  en: {
    nav: {
      about: 'About DECA',
      services: 'Services',
      founder: 'Profile',
      contact: 'Contact',
      tagline: 'Where Energy Meets Markets & People',
      getInTouch: 'Get in Touch',
      stockholmTime: 'Stockholm, SE',
    },
    hero: {
      badge: 'DECA ENERGY CONSULTING AB — SWEDEN & INTERNATIONAL',
      titleLine1: 'CONSULTING IN',
      titleLine2: 'ENERGY EFFICIENCY',
      titleHighlight: '& GREEN INFRASTRUCTURE',
      tagline: 'Where Energy Meets Markets & People',
      description:
        'Independent energy consultancy specialized in utility-scale solar photovoltaics (PV), battery energy storage systems (BESS), energy efficiency optimization, and international business development across Nordic and European markets.',
      ctaPrimary: 'Explore Services',
      ctaSecondary: 'Request Consultation',
      keyStats: {
        stat1: { value: 'PV + BESS', label: 'Large-scale energy assets' },
        stat2: { value: 'Efficiency', label: 'Optimized consumption & yield' },
        stat3: { value: 'Nordic & Global', label: 'Strategic market advisory' },
      },
    },
    about: {
      sectionNumber: '01',
      title: 'ABOUT DECA ENERGY',
      heading: 'Strategic energy advisory for an evolving power grid landscape.',
      paragraph1:
        'DECA Energy Consulting AB is a Swedish advisory firm dedicated to maximizing the value of renewable energy investments, reducing operational expenditure, and steering the clean energy transition with engineering and commercial rigor.',
      paragraph2:
        'Led by founder Daniel Desidera, DECA merges technical depth in solar and storage integration with international business development, grid compliance, and commercial market intelligence.',
      pillars: [
        {
          title: 'Technical & Financial Precision',
          description:
            'In-depth modeling of generation yields, grid interconnections, and storage capacity to maximize asset return.',
        },
        {
          title: 'Energy Efficiency Auditing',
          description:
            'Actionable roadmaps for industrial energy reduction, peak load shaving, and heat recovery compliance.',
        },
        {
          title: 'Market & Grid Alignment',
          description:
            'Specialized knowledge in ancillary service markets (FCR/FFR), power pricing dynamics, and PPA structuring.',
        },
      ],
    },
    services: {
      sectionNumber: '02',
      title: 'SERVICES & EXPERTISE',
      heading: 'Focused consultancy across modern clean energy infrastructure.',
      subheading:
        'Four interconnected core domains engineered to elevate energy projects from conceptualization to high-yield operation.',
      items: [
        {
          id: 'pv',
          code: '01 / PV',
          tag: 'SOLAR ENERGY',
          title: 'PV (Photovoltaic Solar Systems)',
          subtitle: 'Utility-scale & commercial solar development',
          description:
            'Project development, bankable feasibility studies, and comprehensive technical due diligence for ground-mounted solar farms and large C&I rooftop installations.',
          capabilities: [
            'Feasibility studies & land suitability assessment',
            'Yield modeling & optimal system sizing (PVsyst)',
            'EPC tender management & contractor evaluation',
            'LCOE minimization & financial modeling',
          ],
          metrics: [
            { label: 'Scope', value: 'Rooftop & Ground-mount' },
            { label: 'Scale', value: 'C&I to Utility-scale' },
          ],
        },
        {
          id: 'bess',
          code: '02 / BESS',
          tag: 'ENERGY STORAGE',
          title: 'BESS (Battery Energy Storage)',
          subtitle: 'Grid integration and revenue stacking',
          description:
            'Strategic advisory on stationary battery storage deployment. Accessing Nordic grid ancillary services (FCR-N, FCR-D, FFR, mFRR), peak shaving, and solar-plus-storage hybridization.',
          capabilities: [
            'Battery sizing, chemistry selection & degradation curves',
            'Ancillary services & revenue stack modeling',
            'Co-location with existing solar and wind assets',
            'DSO/TSO grid connection & compliance support',
          ],
          metrics: [
            { label: 'Markets', value: 'FCR-D / FFR / Arbitrage' },
            { label: 'Tech', value: 'LFP / NMC Grid-Scale' },
          ],
        },
        {
          id: 'efficiency',
          code: '03 / EE',
          tag: 'ENERGY EFFICIENCY',
          title: 'Energy Efficiency & Auditing',
          subtitle: 'Consumption optimization and cost minimization',
          description:
            'Comprehensive energy audits, waste heat valorization, and intelligent building energy management. We empower commercial and industrial enterprises to cut kWh costs and carbon footprints.',
          capabilities: [
            'Industrial energy audits aligned with EU EED standards',
            'Peak demand reduction & intelligent load shifting',
            'EMS/BMS optimization & monitoring integration',
            'Decarbonization roadmaps & ESG compliance',
          ],
          metrics: [
            { label: 'Target', value: '20–40% Peak Reduction' },
            { label: 'Standard', value: 'ISO 50001 / EED' },
          ],
        },
        {
          id: 'advisory',
          code: '04 / BD',
          tag: 'BUSINESS DEVELOPMENT',
          title: 'Business Development & Market Advisory',
          subtitle: 'Cross-border expansion and commercial structuring',
          description:
            'High-level commercial strategy for clean-tech developers, investors, and technology providers looking to enter or scale within Sweden and the broader European market.',
          capabilities: [
            'International business development & partner scouting',
            'Corporate PPA negotiation and contract structuring',
            'Nordic power market entry strategies',
            'Commercial due diligence for renewable M&A transactions',
          ],
          metrics: [
            { label: 'Reach', value: 'Sweden & European Grid' },
            { label: 'Expertise', value: 'Commercial & Regulatory' },
          ],
        },
      ],
    },
    founder: {
      sectionNumber: '03',
      title: 'LEADERSHIP & CONTACT CARD',
      role: 'Founder — International Business Development',
      name: 'Daniel Desidera',
      company: 'DECA ENERGY CONSULTING AB',
      tagline: 'Where Energy Meets Markets & People',
      phone: '+46 70 004 44 21',
      email: 'daniel@deca-energy.com',
      linkedin: 'linkedin.com/in/danieldesidera',
      website: 'deca-energy.com',
      location: 'Sweden / Stockholm',
      quote:
        'The clean energy transition is where advanced engineering intersects with smart market structures and lasting human partnerships.',
      downloadVCard: 'Download Contact Card (vCard)',
      copyEmail: 'Copy Email',
      copiedEmail: 'Copied to clipboard!',
      scanToConnect: 'SCAN TO CONNECT',
    },
    contact: {
      sectionNumber: '04',
      title: 'CONTACT',
      heading: 'Let’s discuss your next clean energy initiative.',
      description:
        'Submit your inquiry below or reach out directly for consultation regarding solar PV, battery storage, energy efficiency, or market advisory.',
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'e.g. Erik Johansson',
        emailLabel: 'Email Address',
        emailPlaceholder: 'erik@company.com',
        companyLabel: 'Company / Organization',
        companyPlaceholder: 'Company AB',
        serviceLabel: 'Area of Interest',
        serviceOptions: [
          { id: 'pv', label: 'Solar PV (Photovoltaics)' },
          { id: 'bess', label: 'Battery Storage (BESS)' },
          { id: 'efficiency', label: 'Energy Efficiency' },
          { id: 'advisory', label: 'Business Development & Advisory' },
          { id: 'general', label: 'General Inquiry' },
        ],
        messageLabel: 'Message / Project Outline',
        messagePlaceholder: 'Briefly describe your project or objectives...',
        submitBtn: 'Send Message',
        submittingBtn: 'Sending...',
        successTitle: 'Thank you for reaching out!',
        successMessage: 'We have received your message and will get back to you within 24 hours.',
        sendAnother: 'Send another message',
      },
      directTitle: 'Direct Inquiries',
      directDesc: 'Feel free to get in touch directly for urgent matters or confidential advisory requests.',
    },
    footer: {
      companyName: 'DECA ENERGY CONSULTING AB',
      registeredIn: 'Registered in Sweden — Stockholm',
      copyright: 'All rights reserved.',
      backToTop: 'Back to top ↑',
      rights: 'DECA Energy Consulting AB — PV · BESS · Efficiency · Market Advisory',
    },
  },
};

import React, { useState } from 'react';
import { DecaLogo } from './components/DecaLogo';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Menu,
  X,
} from 'lucide-react';
import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<'sv' | 'en'>('sv');
  const [menuOpen, setMenuOpen] = useState(false);

  const content = translations[lang];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const FORMSPREE_ENDPOINT = 'TU_ENDPOINT_DE_FORMSPREE';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert(content.formSuccess);

        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert(content.formError);
      }
    } catch (error) {
      alert(content.formError);
    }
  };

  const handleNavigation = (section: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#102A43] text-[#E5E7EB] font-sans flex flex-col justify-between selection:bg-emerald-400 selection:text-black">

      {/* 1. BARRA SUPERIOR */}
      <header className="border-b border-neutral-800/80 sticky top-0 bg-[#102A43]/95 backdrop-blur z-30">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#"
            aria-label="DECA Energy - Home"
            className="flex items-center shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <DecaLogo size="sm" theme="dark" />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden sm:flex items-center gap-6">

            <nav
              aria-label="Main Navigation"
              className="flex items-center gap-6 text-sm font-mono text-neutral-400"
            >
              <a
                href="#about"
                className="hover:text-emerald-400 py-2 px-1 transition-colors"
              >
                {content.about}
              </a>

              <a
                href="#services"
                className="hover:text-emerald-400 py-2 px-1 transition-colors"
              >
                {content.services}
              </a>

              <a
                href="#contact"
                className="hover:text-emerald-400 py-2 px-1 transition-colors"
              >
                {content.contact}
              </a>
            </nav>

            {/* LANGUAGE SELECTOR DESKTOP */}
            <div
              className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1 text-xs font-mono shrink-0"
              role="group"
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => setLang('sv')}
                aria-label="Välj svenska"
                aria-pressed={lang === 'sv'}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === 'sv'
                    ? 'bg-emerald-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                SV
              </button>

              <span className="text-neutral-600 select-none">/</span>

              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label="Select English"
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === 'en'
                    ? 'bg-emerald-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex sm:hidden items-center gap-3">

            {/* LANGUAGE SELECTOR MOBILE */}
            <div
              className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full px-2 py-1 text-xs font-mono"
              role="group"
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => setLang('sv')}
                aria-label="Välj svenska"
                aria-pressed={lang === 'sv'}
                className={`px-2 py-1 rounded-full transition-colors min-h-[30px] flex items-center justify-center ${
                  lang === 'sv'
                    ? 'bg-emerald-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                SV
              </button>

              <span className="text-neutral-600 select-none">/</span>

              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label="Select English"
                aria-pressed={lang === 'en'}
                className={`px-2 py-1 rounded-full transition-colors min-h-[30px] flex items-center justify-center ${
                  lang === 'en'
                    ? 'bg-emerald-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="w-10 h-10 flex items-center justify-center rounded border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-emerald-400 hover:border-neutral-700 transition-colors"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-200 border-t border-neutral-800 ${
            menuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 border-t-0'
          }`}
        >
          <nav
            aria-label="Mobile Navigation"
            className="px-4 py-3 bg-[#102A43]"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about');
              }}
              className="block py-3 text-sm font-mono text-neutral-300 hover:text-emerald-400 border-b border-neutral-800/70 transition-colors"
            >
              {content.about}
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
              }}
              className="block py-3 text-sm font-mono text-neutral-300 hover:text-emerald-400 border-b border-neutral-800/70 transition-colors"
            >
              {content.services}
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('contact');
              }}
              className="block py-3 text-sm font-mono text-neutral-300 hover:text-emerald-400 transition-colors"
            >
              {content.contact}
            </a>
          </nav>
        </div>

      </header>

      {/* 2. ENCABEZADO PRINCIPAL */}
      <section className="border-b border-neutral-800/80 py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#0e141c] to-[#102A43] text-center px-4 sm:px-6">

        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8">

          <DecaLogo size="xl" theme="dark" />

          <h1 className="text-base sm:text-xl md:text-2xl font-mono text-emerald-400 tracking-wide font-medium px-2">
            {content.slogan}
          </h1>

        </div>

      </section>

      {/* 3. ESTRUCTURA PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full space-y-12 sm:space-y-16 flex-grow">

        {/* SECCIÓN 1: ABOUT */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="space-y-4 border-b border-neutral-800 pb-10 sm:pb-14"
        >

          <h2
            id="about-heading"
            className="text-xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {content.about}
          </h2>

          <div className="p-6 sm:p-8 rounded-lg border border-neutral-800 bg-neutral-900/30">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {content.aboutText}
            </p>
          </div>

        </section>

        {/* SECCIÓN 2: SERVICIOS */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="space-y-6 border-b border-neutral-800 pb-10 sm:pb-14"
        >

          <h2
            id="services-heading"
            className="text-xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {content.services}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            {content.servicesList.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/40 space-y-3 hover:border-neutral-700 transition-colors"
              >

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-semibold text-white text-base sm:text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* SECCIÓN 3: CONTACTO */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="space-y-6"
        >

          <h2
            id="contact-heading"
            className="text-xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {content.contact}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">

            {/* FORMULARIO */}
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 bg-neutral-900/40 p-5 sm:p-6 rounded-lg border border-neutral-800"
            >

              <div className="space-y-1.5">

                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono text-neutral-300 block"
                >
                  {content.name}
                </label>

                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={content.name}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-3 sm:py-2.5 bg-neutral-950 border border-neutral-800 rounded text-sm sm:text-base text-white focus:outline-none focus:border-emerald-400 transition-colors"
                />

              </div>

              <div className="space-y-1.5">

                <label
                  htmlFor="contact-email"
                  className="text-xs font-mono text-neutral-300 block"
                >
                  {content.email}
                </label>

                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder={content.email}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-3 sm:py-2.5 bg-neutral-950 border border-neutral-800 rounded text-sm sm:text-base text-white focus:outline-none focus:border-emerald-400 transition-colors"
                />

              </div>

              <div className="space-y-1.5">

                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono text-neutral-300 block"
                >
                  {content.message}
                </label>

                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder={content.message}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-3 sm:py-2.5 bg-neutral-950 border border-neutral-800 rounded text-sm sm:text-base text-white focus:outline-none focus:border-emerald-400 resize-none transition-colors"
                />

              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-neutral-950 text-xs sm:text-sm font-mono font-bold uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
              >
                <span>{content.send}</span>
                <Send className="w-4 h-4" />
              </button>

            </form>

            {/* DATOS DE CONTACTO DIRECTO */}
            <div className="p-5 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/30 space-y-4 text-xs sm:text-sm font-mono">

              <div className="text-neutral-400 uppercase text-[11px] font-bold tracking-wider">
                {content.directContact}
              </div>

              <div>

                <div className="text-sm sm:text-base font-bold text-white">
                  Daniel Desidera
                </div>

                <div className="text-emerald-400">
                  Founder - International Business Development
                </div>

                <div className="text-neutral-500">
                  DECA ENERGY CONSULTING AB
                </div>

              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-800 text-neutral-300">

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>XX XXX XX XX</span>
                </div>

                <div className="flex items-center gap-3">

                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />

                  <a
                    href="mailto:daniel@deca-energy.com"
                    className="hover:text-emerald-400 underline decoration-neutral-700 underline-offset-2 transition-colors py-1"
                  >
                    daniel@deca-energy.com
                  </a>

                </div>

                <div className="flex items-center gap-3">

                  <Linkedin className="w-4 h-4 text-emerald-400 shrink-0" />

                  <a
                    href="https://www.linkedin.com/in/danieldesidera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 underline decoration-neutral-700 underline-offset-2 transition-colors py-1"
                  >
                    linkedin.com/in/danieldesidera
                  </a>

                </div>

                <div className="flex items-center gap-3 text-neutral-400">
                  <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>Sweden</span>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* 4. FOOTER */}
      <footer className="border-t border-neutral-800 py-6 sm:py-8 text-center text-xs font-mono text-neutral-500 px-4">
        DECA ENERGY CONSULTING AB · Daniel Desidera · Sweden
      </footer>

    </div>
  );
}

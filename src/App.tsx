import React, { useState } from 'react';
import { DecaLogo } from './components/DecaLogo';
import { Mail, Phone, MapPin, Globe, Linkedin, Send } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'sv' | 'en'>('sv');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const content = {
    sv: {
      slogan: 'Where Energy Meets Markets & People',
      about: 'Om DECA Energy',
      services: 'Tjänster',
      contact: 'Kontakt',
      servicesList: [
        { title: 'Solenergi (PV)', tag: '01' },
        { title: 'Batterilagring (BESS)', tag: '02' },
        { title: 'Affärsutveckling & Rådgivning', tag: '03' },
      ],
      name: 'Namn',
      email: 'E-post',
      message: 'Meddelande',
      send: 'Skicka',
      directContact: 'Direktkontakt',
    },
    en: {
      slogan: 'Where Energy Meets Markets & People',
      about: 'About DECA Energy',
      services: 'Services',
      contact: 'Contact',
      servicesList: [
        { title: 'Solar PV', tag: '01' },
        { title: 'Battery Storage (BESS)', tag: '02' },
        { title: 'Business Development & Advisory', tag: '03' },
      ],
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      directContact: 'Direct Contact',
    },
  }[lang];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Kontaktförfrågan / Contact from ${formData.name || 'DECA Website'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:daniel@deca-energy.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#E5E7EB] font-sans flex flex-col justify-between selection:bg-emerald-400 selection:text-black">
      
      {/* 1. BARRA SUPERIOR CON LOGO Y SELECTOR DE IDIOMA */}
      <header className="border-b border-neutral-800/80 sticky top-0 bg-[#0A0D12]/95 backdrop-blur z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <a href="#" aria-label="DECA Energy - Home" className="flex items-center">
            <DecaLogo size="sm" theme="dark" />
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav aria-label="Main Navigation" className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-neutral-400">
              <a href="#about" className="hover:text-emerald-400 py-2 px-1 transition-colors">{content.about}</a>
              <a href="#services" className="hover:text-emerald-400 py-2 px-1 transition-colors">{content.services}</a>
              <a href="#contact" className="hover:text-emerald-400 py-2 px-1 transition-colors">{content.contact}</a>
            </nav>

            <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1 text-xs font-mono shrink-0" role="group" aria-label="Language selector">
              <button
                type="button"
                onClick={() => setLang('sv')}
                aria-label="Välj svenska"
                aria-pressed={lang === 'sv'}
                className={`px-2.5 py-1 rounded-full transition-colors min-h-[32px] sm:min-h-0 flex items-center justify-center ${
                  lang === 'sv' ? 'bg-emerald-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
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
                className={`px-2.5 py-1 rounded-full transition-colors min-h-[32px] sm:min-h-0 flex items-center justify-center ${
                  lang === 'en' ? 'bg-emerald-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. ENCABEZADO PRINCIPAL (HERO) CON LOGO DESTACADO Y ESLOGAN */}
      <section className="border-b border-neutral-800/80 py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#0e141c] to-[#0A0D12] text-center px-4 sm:px-6">
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
        <section id="about" aria-labelledby="about-heading" className="space-y-4 border-b border-neutral-800 pb-10 sm:pb-14">
          <h2 id="about-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            {content.about}
          </h2>
          <div className="p-6 sm:p-8 rounded-lg border border-dashed border-neutral-800 bg-neutral-900/30 text-xs sm:text-sm text-neutral-400 font-mono">
            [ {content.about} ]
          </div>
        </section>

        {/* SECCIÓN 2: SERVICIOS */}
        <section id="services" aria-labelledby="services-heading" className="space-y-6 border-b border-neutral-800 pb-10 sm:pb-14">
          <h2 id="services-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            {content.services}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {content.servicesList.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/40 space-y-2 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold">{item.tag}</span>
                </div>
                <h3 className="font-semibold text-white text-base sm:text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: CONTACTO */}
        <section id="contact" aria-labelledby="contact-heading" className="space-y-6">
          <h2 id="contact-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            {content.contact}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            
            {/* Formulario */}
            <form onSubmit={handleFormSubmit} className="space-y-4 bg-neutral-900/40 p-5 sm:p-6 rounded-lg border border-neutral-800">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-xs font-mono text-neutral-300 block">{content.name}</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={content.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-3 sm:py-2.5 bg-neutral-950 border border-neutral-800 rounded text-sm sm:text-base text-white focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-mono text-neutral-300 block">{content.email}</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder={content.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-3 sm:py-2.5 bg-neutral-950 border border-neutral-800 rounded text-sm sm:text-base text-white focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-neutral-300 block">{content.message}</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder={content.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

            {/* Datos de contacto directo con hipervínculos */}
            <div className="p-5 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/30 space-y-4 text-xs sm:text-sm font-mono">
              <div className="text-neutral-400 uppercase text-[11px] font-bold tracking-wider">{content.directContact}</div>
              
              <div>
                <div className="text-sm sm:text-base font-bold text-white">Daniel Desidera</div>
                <div className="text-emerald-400">Founder - International Business Development</div>
                <div className="text-neutral-500">DECA ENERGY CONSULTING AB</div>
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-800 text-neutral-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>XX XXX XX XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="mailto:daniel@deca-energy.com" className="hover:text-emerald-400 underline decoration-neutral-700 underline-offset-2 transition-colors py-1">
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
                  <Globe className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>deca-energy.com</span>
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

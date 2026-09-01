import React from 'react';
import { TranslationContent, Language } from '../types';
import { DecaLogo } from './DecaLogo';
import { ArrowUp, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  content: TranslationContent['footer'];
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  content,
  currentLang,
  onLanguageChange,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#05080C] border-t border-neutral-900 text-neutral-400 py-16 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <DecaLogo variant="full" size="sm" theme="dark" />
            <p className="text-neutral-400 font-sans text-xs max-w-sm leading-relaxed">
              DECA Energy Consulting AB är en oberoende rådgivningsbyrå inom solenergi (PV), storskalig batterilagring (BESS) och energieffektivisering i Norden och Europa.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{content.registeredIn}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              Sektioner / Index
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  01 / Om DECA Energy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  02 / Tjänster & Effektivisering
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-emerald-400 transition-colors">
                  03 / Daniel Desidera (Kontaktkort)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  04 / Kontaktformulär
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Credentials */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              Kontakt & Adress
            </div>
            <div className="space-y-1.5 text-neutral-400 font-sans">
              <p className="text-white font-medium">DECA ENERGY CONSULTING AB</p>
              <p>Stockholm, Sweden</p>
              <p className="font-mono text-emerald-400">daniel@deca-energy.com</p>
              <p className="font-mono text-neutral-300">+46 70 004 44 21</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Language indicator, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-[11px]">
          <p>
            © {new Date().getFullYear()} {content.companyName}. {content.copyright}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>Språk / Language:</span>
              <button
                onClick={() => onLanguageChange('sv')}
                className={`uppercase font-bold ${currentLang === 'sv' ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'}`}
              >
                SV
              </button>
              <span>|</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`uppercase font-bold ${currentLang === 'en' ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <button
              id="btn-scroll-top"
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>{content.backToTop}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

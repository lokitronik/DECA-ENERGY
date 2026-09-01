import React, { useState, useEffect } from 'react';
import { TranslationContent, Language } from '../types';
import { DecaLogo } from './DecaLogo';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X, ArrowUpRight, Clock } from 'lucide-react';

interface NavbarProps {
  content: TranslationContent['nav'];
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  content,
  currentLang,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stockholmTime, setStockholmTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat('sv-SE', {
          timeZone: 'Europe/Stockholm',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setStockholmTime(timeString);
      } catch {
        setStockholmTime('CET');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-[#090D12]/90 backdrop-blur-md">
      {/* Top Meta Bar */}
      <div className="hidden sm:flex items-center justify-between px-6 py-1.5 border-b border-neutral-900 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            DECA ENERGY CONSULTING AB
          </span>
          <span className="text-neutral-700">|</span>
          <span>Stockholm, Sweden</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-neutral-400">
            <Clock className="w-3 h-3 text-neutral-500" />
            <span className="text-neutral-300">{stockholmTime}</span>
            <span className="text-[10px] text-neutral-500">(CET)</span>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          id="nav-logo-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <DecaLogo variant="full" size="sm" theme="dark" />
        </a>

        {/* Desktop Navigation Links (Swiss Minimalist Editorial) */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            id="nav-link-about"
            className="text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 transition-colors"
          >
            01 / {content.about}
          </a>
          <a
            href="#services"
            id="nav-link-services"
            className="text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 transition-colors"
          >
            02 / {content.services}
          </a>
          <a
            href="#founder"
            id="nav-link-founder"
            className="text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 transition-colors"
          >
            03 / {content.founder}
          </a>
          <a
            href="#contact"
            id="nav-link-contact"
            className="text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 transition-colors"
          >
            04 / {content.contact}
          </a>
        </nav>

        {/* Right Tools: Language Toggle & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <LanguageToggle currentLang={currentLang} onToggle={onLanguageChange} />

          <a
            href="#contact"
            id="nav-cta-btn"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(52,211,153,0.3)]"
          >
            <span>{content.getInTouch}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger & Lang */}
        <div className="flex sm:hidden items-center gap-3">
          <LanguageToggle currentLang={currentLang} onToggle={onLanguageChange} />
          <button
            id="btn-mobile-menu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-neutral-800 bg-[#090D12] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 py-1"
            >
              01 / {content.about}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 py-1"
            >
              02 / {content.services}
            </a>
            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 py-1"
            >
              03 / {content.founder}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-emerald-400 py-1"
            >
              04 / {content.contact}
            </a>
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">
              Stockholm: {stockholmTime}
            </span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1 px-4 py-2 text-xs font-mono font-medium text-neutral-950 bg-emerald-400 rounded-full"
            >
              <span>{content.getInTouch}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

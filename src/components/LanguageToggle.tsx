import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLang,
  onToggle,
}) => {
  return (
    <div className="inline-flex items-center gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800 rounded-full backdrop-blur-md">
      <div className="pl-2 pr-1 text-neutral-400">
        <Globe className="w-3.5 h-3.5 text-neutral-400" />
      </div>
      <button
        id="btn-lang-sv"
        type="button"
        onClick={() => onToggle('sv')}
        className={`relative px-2.5 py-1 text-xs font-mono font-medium tracking-wider transition-colors duration-200 rounded-full ${
          currentLang === 'sv'
            ? 'text-neutral-950 font-bold'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        {currentLang === 'sv' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.4)]"
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
          />
        )}
        <span className="relative z-10">SV</span>
      </button>

      <span className="text-neutral-600 text-xs">/</span>

      <button
        id="btn-lang-en"
        type="button"
        onClick={() => onToggle('en')}
        className={`relative px-2.5 py-1 text-xs font-mono font-medium tracking-wider transition-colors duration-200 rounded-full ${
          currentLang === 'en'
            ? 'text-neutral-950 font-bold'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        {currentLang === 'en' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.4)]"
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
};

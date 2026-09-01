import React from 'react';
import { TranslationContent } from '../types';
import { ArrowDown, ArrowUpRight, Zap, Sun, Battery, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  content: TranslationContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-28 border-b border-neutral-800 bg-[#090D12] overflow-hidden">
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Identity */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-300">
            {content.badge}
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight uppercase leading-[1.05] text-white">
            <span>{content.titleLine1} </span>
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              {content.titleLine2}
            </span>
            <br />
            <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-4 underline-offset-8">
              {content.titleHighlight}
            </span>
          </h1>
        </div>

        {/* Sub-grid: Tagline + Description + Call to Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-neutral-800 pt-8 mt-6">
          
          {/* Slogan & Core Thesis */}
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-block border-l-2 border-amber-400 pl-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Brand Creed
              </span>
              <p className="text-xl sm:text-2xl font-display font-bold text-neutral-100 tracking-tight">
                "{content.tagline}"
              </p>
            </div>
            <p className="text-xs font-mono text-neutral-500">
              DECA ENERGY CONSULTING AB · DANIEL DESIDERA
            </p>
          </div>

          {/* Description & Action buttons */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                id="hero-cta-services"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(52,211,153,0.35)]"
              >
                <span>{content.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-full transition-all duration-200"
              >
                <span>{content.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

        {/* 3-Column Swiss Metric Index Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-800/80 pt-8 mt-12">
          
          <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-neutral-500">01 / ASSETS</span>
              <Sun className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl font-display font-bold text-white tracking-tight">
              {content.keyStats.stat1.value}
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-sans">
              {content.keyStats.stat1.label}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-neutral-500">02 / OPTIMIZATION</span>
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl font-display font-bold text-white tracking-tight">
              {content.keyStats.stat2.value}
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-sans">
              {content.keyStats.stat2.label}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-neutral-500">03 / NETWORK</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl font-display font-bold text-white tracking-tight">
              {content.keyStats.stat3.value}
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-sans">
              {content.keyStats.stat3.label}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

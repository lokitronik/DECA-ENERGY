import React from 'react';
import { TranslationContent } from '../types';
import { CheckCircle2, Shield, Activity, Target } from 'lucide-react';

interface AboutSectionProps {
  content: TranslationContent['about'];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-neutral-800 bg-[#090D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">
            {content.sectionNumber}
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
            {content.title}
          </span>
        </div>

        {/* Big Editorial Heading */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>
        </div>

        {/* 2-Column Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Paragraphs & Manifesto */}
          <div className="lg:col-span-6 space-y-6 text-neutral-300 font-sans text-base sm:text-lg leading-relaxed">
            <p className="border-l-2 border-emerald-500 pl-4 text-white font-medium">
              {content.paragraph1}
            </p>
            <p className="text-neutral-400">
              {content.paragraph2}
            </p>
            
            {/* Scandinavian engineering badge */}
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-2">
              <div className="text-emerald-400 font-bold uppercase tracking-wider">
                DECA Core Competence
              </div>
              <p className="text-neutral-400 leading-normal font-sans">
                Brobyggare mellan teknisk förstudie, nätanslutning hos Svenska kraftnät / lokala nätägare och kommersiell affärsmodellering för storskaliga energiprojekt.
              </p>
            </div>
          </div>

          {/* Right: 3 Strategic Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {content.pillars.map((pillar, idx) => {
              const icons = [
                <Target key="target" className="w-5 h-5 text-amber-400 shrink-0" />,
                <Activity key="activity" className="w-5 h-5 text-emerald-400 shrink-0" />,
                <Shield key="shield" className="w-5 h-5 text-blue-400 shrink-0" />,
              ];

              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    {icons[idx % icons.length]}
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans pl-8 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

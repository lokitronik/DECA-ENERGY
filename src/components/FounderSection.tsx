import React from 'react';
import { TranslationContent } from '../types';
import { BusinessCardInteractive } from './BusinessCardInteractive';

interface FounderSectionProps {
  content: TranslationContent['founder'];
}

export const FounderSection: React.FC<FounderSectionProps> = ({ content }) => {
  return (
    <section id="founder" className="py-20 md:py-28 border-b border-neutral-800 bg-[#070B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">
            {content.sectionNumber}
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
            {content.title}
          </span>
        </div>

        {/* Big Editorial Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            {content.name}
          </h2>
          <p className="text-emerald-400 font-mono text-sm sm:text-base mt-2">
            {content.role} — {content.company}
          </p>
        </div>

        {/* Interactive Business Card & Connect Actions */}
        <BusinessCardInteractive content={content} />

      </div>
    </section>
  );
};

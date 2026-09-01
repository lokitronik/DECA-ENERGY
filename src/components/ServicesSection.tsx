import React, { useState } from 'react';
import { TranslationContent } from '../types';
import { 
  Sun, 
  BatteryCharging, 
  Zap, 
  TrendingUp, 
  Check, 
  ArrowUpRight, 
  ChevronRight,
  Gauge
} from 'lucide-react';

interface ServicesSectionProps {
  content: TranslationContent['services'];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(content.items[0]?.id || 'pv');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'pv':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'bess':
        return <BatteryCharging className="w-6 h-6 text-emerald-400" />;
      case 'efficiency':
        return <Gauge className="w-6 h-6 text-emerald-300" />;
      case 'advisory':
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-neutral-800 bg-[#090D12]">
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

        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>
          <p className="text-base text-neutral-400 font-sans">
            {content.subheading}
          </p>
        </div>

        {/* Swiss Brutalist Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {content.items.map((service) => {
            const isEfficiency = service.id === 'efficiency';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative p-7 sm:p-8 rounded-2xl transition-all duration-200 border flex flex-col justify-between ${
                  isEfficiency
                    ? 'bg-gradient-to-br from-emerald-950/40 via-neutral-900/90 to-neutral-950 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]'
                    : 'bg-neutral-900/50 hover:bg-neutral-900/80 border-neutral-800/90 hover:border-neutral-700'
                }`}
              >
                {/* Top Meta Tag & Code */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 shadow-inner">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-semibold">
                        {service.code}
                      </span>
                    </div>

                    {isEfficiency && (
                      <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                        Kärnfokus / Core
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1 mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/80 mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Nyckelleveranser / Key Deliverables:
                    </div>
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Badges & Action */}
                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                  {service.metrics && (
                    <div className="flex items-center gap-4 text-xs font-mono">
                      {service.metrics.map((m, idx) => (
                        <div key={idx} className="bg-neutral-950/80 px-3 py-1.5 rounded-lg border border-neutral-800">
                          <span className="text-neutral-500 mr-1.5">{m.label}:</span>
                          <span className="text-neutral-200 font-medium">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 ml-auto transition-colors group"
                  >
                    <span>Förfrågan / Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { TranslationContent } from '../types';
import { DecaLogo } from './DecaLogo';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Globe, 
  MapPin, 
  RotateCw, 
  Download, 
  Check, 
  Copy,
  Sun,
  BatteryCharging,
  Briefcase,
  TrendingUp,
  ExternalLink,
  QrCode
} from 'lucide-react';

interface BusinessCardInteractiveProps {
  content: TranslationContent['founder'];
}

export const BusinessCardInteractive: React.FC<BusinessCardInteractiveProps> = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Desidera;Daniel;;;
FN:Daniel Desidera
ORG:DECA ENERGY CONSULTING AB
TITLE:Founder - International Business Development
TEL;TYPE=CELL,VOICE:${content.phone}
EMAIL;TYPE=WORK,INTERNET:${content.email}
URL:https://${content.website}
X-SOCIALPROFILE;TYPE=linkedin:https://${content.linkedin}
ADR;TYPE=WORK:;;Stockholm;Sweden;;;
NOTE:Where Energy Meets Markets & People. Specializing in PV, BESS, Energy Efficiency, and Advisory.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Daniel_Desidera_DECA_Energy.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left column: Direct credentials & interactive card presentation */}
        <div className="w-full lg:w-7/12">
          {/* Card Frame Container with 3D perspective */}
          <div className="relative mx-auto max-w-[440px] aspect-[1.75/1] perspective-1000">
            
            {/* The Flippable 3D Card */}
            <motion.div
              className="w-full h-full relative preserve-3d cursor-pointer rounded-2xl shadow-2xl transition-all duration-500"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* === CARD FRONT === */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#0B151E] via-[#081017] to-[#04080D] border border-neutral-800/80 text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] backface-hidden overflow-hidden"
              >
                {/* Subtle gold / emerald glowing accent curves at corner */}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-emerald-600/10 blur-2xl pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
                
                {/* Decorative gold hairline arc at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                {/* Top Section: Monogram & Identity */}
                <div className="flex items-start gap-4">
                  <DecaLogo variant="monogram" className="shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-white uppercase">
                      {content.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-400/90 font-medium tracking-wide">
                      {content.role}
                    </p>
                  </div>
                </div>

                {/* Middle Section: Contact list */}
                <div className="space-y-1.5 text-xs sm:text-[13px] text-neutral-300 font-sans">
                  <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{content.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{content.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Linkedin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{content.linkedin}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400 pt-0.5">
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{content.website}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{content.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Tagline */}
                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                  <p className="text-[11px] sm:text-xs font-mono text-emerald-400 font-medium tracking-tight">
                    {content.tagline}
                  </p>
                  <span className="text-[10px] text-neutral-500 font-mono flex items-center gap-1">
                    <RotateCw className="w-2.5 h-2.5" /> Flip
                  </span>
                </div>
              </div>

              {/* === CARD BACK === */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-7 bg-gradient-to-bl from-[#08121A] via-[#050B10] to-[#020609] border border-neutral-800/80 text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] backface-hidden [transform:rotateY(180deg)] overflow-hidden"
              >
                {/* Background dot matrix stylized grid */}
                <div className="absolute inset-0 opacity-15 bg-grid-pattern pointer-events-none" />

                {/* Top: Logo in crisp vector */}
                <div className="flex items-center justify-between z-10">
                  <DecaLogo variant="full" size="sm" theme="dark" />
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">
                    CONSULTING AB
                  </span>
                </div>

                {/* Middle: 4 Pillar Icons matching card back */}
                <div className="grid grid-cols-4 gap-2 text-center py-2 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-amber-400 mb-1">
                      <Sun className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-neutral-300">PV</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-1">
                      <BatteryCharging className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-neutral-300">BESS</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-amber-400 mb-1">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-neutral-300">BIZ DEV</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-neutral-300">ADVISORY</span>
                  </div>
                </div>

                {/* Bottom: QR connection prompt */}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-neutral-400 text-xs z-10">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300">
                      {content.scanToConnect}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono underline">
                    {content.linkedin}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Flip Hint */}
          <div className="text-center mt-3">
            <button
              id="btn-flip-card"
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-emerald-400 font-mono transition-colors"
            >
              <RotateCw className="w-3 h-3" />
              <span>{isFlipped ? 'Visa framsida' : 'Klicka på kortet eller vänd (Visa baksida)'}</span>
            </button>
          </div>
        </div>

        {/* Right column: Action bar & direct professional links */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-4">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                {content.company}
              </span>
              <h4 className="text-xl font-display font-bold text-white mt-1">
                {content.name}
              </h4>
              <p className="text-sm text-neutral-400">
                {content.role}
              </p>
            </div>

            <blockquote className="border-l-2 border-emerald-500 pl-3.5 py-1 text-xs text-neutral-300 italic">
              "{content.quote}"
            </blockquote>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <button
                id="btn-download-vcard"
                type="button"
                onClick={handleDownloadVCard}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-medium text-xs rounded-xl font-mono transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{content.downloadVCard}</span>
              </button>

              <button
                id="btn-copy-email"
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-xs rounded-xl font-mono transition-colors border border-neutral-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? content.copiedEmail : content.copyEmail}</span>
              </button>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex items-center gap-3 pt-1 text-xs font-mono">
              <a
                href={`tel:${content.phone.replace(/\s+/g, '')}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-neutral-950 hover:border-neutral-600 border border-neutral-800 rounded-lg text-neutral-300 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-amber-400" />
                <span>Ring direkt</span>
              </a>

              <a
                href={`https://${content.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-neutral-950 hover:border-neutral-600 border border-neutral-800 rounded-lg text-neutral-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3 h-3 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

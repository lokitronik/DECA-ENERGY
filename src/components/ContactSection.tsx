import React, { useState } from 'react';
import { TranslationContent } from '../types';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Linkedin, 
  MapPin, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  content: TranslationContent['contact'];
  founderEmail: string;
  founderPhone: string;
  founderLinkedin: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  content,
  founderEmail,
  founderPhone,
  founderLinkedin,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState('efficiency');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate instantaneous delivery with state feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaEmailClient = () => {
    const subject = encodeURIComponent(`Inquiry via DECA Energy - ${selectedService.toUpperCase()}: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService Interest: ${selectedService}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${founderEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-neutral-800 bg-[#090D12]">
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

        {/* Section Heading */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>
          <p className="text-base text-neutral-400 font-sans">
            {content.description}
          </p>
        </div>

        {/* 2-Column Grid: Contact Form (Left) & Direct Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form Container */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {content.form.successTitle}
                </h3>
                <p className="text-sm text-neutral-300 font-sans max-w-md mx-auto">
                  {content.form.successMessage}
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    id="btn-open-email-client"
                    type="button"
                    onClick={handleSendViaEmailClient}
                    className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 text-xs font-mono font-medium rounded-xl transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Öppna i e-postklient (Mailto)</span>
                  </button>

                  <button
                    id="btn-reset-form"
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono rounded-xl transition-colors"
                  >
                    {content.form.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono text-neutral-300">
                      {content.form.nameLabel} <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={content.form.namePlaceholder}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-neutral-600 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono text-neutral-300">
                      {content.form.emailLabel} <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={content.form.emailPlaceholder}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-neutral-600 font-sans"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-company" className="block text-xs font-mono text-neutral-300">
                    {content.form.companyLabel}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={content.form.companyPlaceholder}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-neutral-600 font-sans"
                  />
                </div>

                {/* Service of Interest Selection Pills */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-neutral-300">
                    {content.form.serviceLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {content.form.serviceOptions.map((opt) => {
                      const isSelected = selectedService === opt.id;
                      return (
                        <button
                          key={opt.id}
                          id={`service-opt-${opt.id}`}
                          type="button"
                          onClick={() => setSelectedService(opt.id)}
                          className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                            isSelected
                              ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400 font-semibold shadow-[0_0_10px_rgba(52,211,153,0.2)]'
                              : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono text-neutral-300">
                    {content.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={content.form.messagePlaceholder}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-neutral-600 font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(52,211,153,0.35)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{content.form.submittingBtn}</span>
                    ) : (
                      <>
                        <span>{content.form.submitBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-neutral-500">
                    Svarstid normalt inom 24h
                  </span>
                </div>

              </form>
            )}
          </div>

          {/* Right: Direct Contact Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  {content.directTitle}
                </h3>
                <p className="text-xs text-neutral-400 font-sans mt-1">
                  {content.directDesc}
                </p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                
                <a
                  href={`tel:${founderPhone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800/90 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="p-2 rounded-lg bg-neutral-900 text-amber-400 group-hover:bg-amber-400/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500">Telefon / Direkt</div>
                    <div className="text-sm text-white font-medium mt-0.5">{founderPhone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${founderEmail}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800/90 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="p-2 rounded-lg bg-neutral-900 text-emerald-400 group-hover:bg-emerald-400/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500">E-post</div>
                    <div className="text-sm text-white font-medium mt-0.5">{founderEmail}</div>
                  </div>
                </a>

                <a
                  href={`https://${founderLinkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800/90 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="p-2 rounded-lg bg-neutral-900 text-blue-400 group-hover:bg-blue-400/10">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500">LinkedIn</div>
                    <div className="text-xs text-white font-medium mt-0.5 truncate">{founderLinkedin}</div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors shrink-0 self-center" />
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800/90 text-neutral-300">
                  <div className="p-2 rounded-lg bg-neutral-900 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500">Plats & Jurisdiktion</div>
                    <div className="text-xs text-white font-medium mt-0.5">Sverige / Stockholm — Global Advisory</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

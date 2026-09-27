'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';

interface AeoContactSectionProps {
  id?: string;
  badgeTitle?: string;
  heading?: string;
  subheading?: string;
  formId?: string;
  leadType?: string;
  buttonText?: string;
  receivedHeading?: string;
  founderCallout?: string;
  defaultService?: string;
}

export default function AeoContactSection({
  id = "aeo-contact-form",
  badgeTitle = "AEO Sprint",
  heading = "Discuss AEO Services",
  subheading = "Tell us about your business goals and Answer Engine Optimisation priorities. We will confirm scope and pricing before you commit.",
  formId = "canonical_aeo_contact_form",
  leadType = "aeo_services_enquiry",
  buttonText = "Discuss AEO Services",
  receivedHeading = "AEO Enquiry Received",
  founderCallout = "You will speak directly with Vinnie Baker in Perth to confirm feasibility before any work starts.",
  defaultService = "unsure"
}: AeoContactSectionProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: defaultService,
    message: '',
  });

  useEffect(() => {
    const handleSelectSprint = (e: CustomEvent<string>) => {
      if (e.detail) {
        setContactData((prev) => ({ ...prev, serviceType: e.detail }));
      }
    };
    window.addEventListener('select-aeo-sprint' as any, handleSelectSprint as any);
    return () => {
      window.removeEventListener('select-aeo-sprint' as any, handleSelectSprint as any);
    };
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: formId,
      lead_type: leadType,
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'unsure', message: '' });
    }, 6000);
  };

  return (
    <section id={id} className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-white font-soehne-breit">{heading}</h2>
        <p className="text-sm text-zinc-400 leading-relaxed font-serif">
          {subheading} <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Request a quote</Link>.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
          <Users className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{founderCallout}</span>
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
        <div className="flex items-center justify-between gap-4 mb-1.5">
          <h3 className="text-xl font-bold text-white font-soehne-breit">{heading}</h3>
          <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
            {badgeTitle}
          </span>
        </div>
        <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
          Select the option you are considering, or choose &quot;Not sure yet: Help me decide&quot; if you would like help deciding.
        </p>

        {contactSubmitted ? (
          <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
            <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
            <h4 className="font-bold text-white text-base">{receivedHeading}</h4>
            <p className="text-xs text-zinc-300 font-serif leading-relaxed">
              Thank you for reaching out. Our AEObility team will review your details and get in touch within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="aeo-name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="aeo-name"
                  required
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  className="w-full bg-[#080B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="e.g. Vince Baker"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="aeo-email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="aeo-email"
                  required
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="w-full bg-[#080B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="vince@example.com.au"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="aeo-service-type">
                What would you like to discuss?
              </label>
              <select
                id="aeo-service-type"
                value={contactData.serviceType}
                onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                className="w-full bg-[#080B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
              >
                <option value="unsure">Not sure yet: Help me decide</option>
                <option value="micro-sprint">AEO Micro-Sprint (From $495 AUD)</option>
                <option value="blueprint">The AEObility Blueprint ($995 AUD)</option>
                <option value="foundation">Foundation Implementation (From $3,195 AUD)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="aeo-website">
                Website URL (Optional)
              </label>
              <input
                type="text"
                id="aeo-website"
                value={contactData.website}
                onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                className="w-full bg-[#080B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="mybusiness.com.au"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="aeo-message">
                What would you like help with?
              </label>
              <textarea
                id="aeo-message"
                required
                rows={3}
                value={contactData.message}
                onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                className="w-full bg-[#080B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="For example: schema markup deployment, restructuring key service pages, or a 90-day AEO roadmap..."
              />
            </div>

            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[11px] text-zinc-500 text-center font-serif">
              Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

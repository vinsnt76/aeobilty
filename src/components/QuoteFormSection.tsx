"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Building2, Globe, Mail, User, FileText, ChevronDown } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    website: '',
    service: 'Full AEO & GEO Marketing Suite',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/forms/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to submit request. Please try again.');
      }

      trackGaEvent('generate_lead', {
        event_category: 'lead_generation',
        form_id: 'quote_form_section',
        lead_type: 'quote_request',
        service_requested: formData.service || 'general',
        value: 5,
      });

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        businessName: '',
        website: '',
        service: 'Full AEO & GEO Marketing Suite',
        message: ''
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  };

  return (
    <section id="quote-form" className="scroll-mt-24 border-t border-white/5 pt-16 pb-8">
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Ambient Gradient Glow Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aeo-cyan/10 rounded-full filter blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aeo-purple/10 rounded-full filter blur-[100px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-xs text-aeo-cyan font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Strategy & Pricing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
              Request a Quote for <br />
              <span className="text-gradient-aeo">Your Perth, Australia SMB</span>
            </h2>

            <p className="text-white/70 font-light leading-relaxed text-sm sm:text-base">
              Ready to claim your brand&apos;s recommendations across ChatGPT, Perplexity, Claude, and Google Maps? Request a custom quote and strategy proposal designed specifically for your local business goals.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-aeo-cyan shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Custom Scope & Clear Deliverables</h4>
                  <p className="text-xs text-white/60 font-light">Transparent pricing tailored to your industry, locations, and competitor density in WA.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-aeo-cyan shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">No-Friction Consultation</h4>
                  <p className="text-xs text-white/60 font-light">Receive a direct, itemised quote within 24 business hours. No spam, no high-pressure sales.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7 bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            {status === 'success' ? (
              <div className="py-12 px-4 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 flex items-center justify-center text-aeo-cyan">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you! Our AEO strategy team in Perth, Australia is reviewing your business details. We will send a tailored proposal and pricing breakdown to your inbox within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-aeo-cyan" />
                      <span>Your Name <span className="text-aeo-cyan">*</span></span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-aeo-cyan" />
                      <span>Business Email <span className="text-aeo-cyan">*</span></span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="sarah@yourbusiness.com.au"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-aeo-cyan" />
                      <span>Business Name</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Perth Legal Services"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors"
                    />
                  </div>

                  {/* Website URL */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-aeo-cyan" />
                      <span>Website URL</span>
                    </label>
                    <input
                      type="text"
                      name="website"
                      placeholder="https://yourbusiness.com.au"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Service Choice */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-aeo-cyan" />
                    <span>Primary Service Interest</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-white/10 rounded-xl text-sm text-white appearance-none focus:outline-none focus:border-aeo-cyan transition-colors pr-10 cursor-pointer"
                    >
                      <option value="Full AEO & GEO Marketing Suite">Full AEO & GEO Marketing Suite (Recommended)</option>
                      <option value="Answer Engine Optimisation (AEO)">Answer Engine Optimisation (AEO)</option>
                      <option value="GEO Marketing">GEO Marketing (Google & Apple Maps)</option>
                      <option value="AI Search Strategy">AI Search Strategy & Vector Alignment</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-white/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Message / Project Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-aeo-cyan" />
                    <span>Project Goals or Notes</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your target location, current search performance, or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-400 font-medium pt-1">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer shadow-lg shadow-aeo-cyan/10"
                >
                  {status === 'loading' ? (
                    <span>Submitting Quote Request...</span>
                  ) : (
                    <>
                      <span>Request Your Tailored Quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

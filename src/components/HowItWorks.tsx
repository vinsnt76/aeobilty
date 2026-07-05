'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Mail, Phone, Calendar } from 'lucide-react';

export default function HowItWorks() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/forms/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: url }),
      });

      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Failed to submit audit request.');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-widest text-aeo-purple uppercase">
            Simple 4‑Step Funnel
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
            How It Works
          </h3>
          <p className="text-base text-neutral-600 font-light">
            We manually review your online presence and walk you through the findings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Steps */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                01
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-neutral-950">Enter Your Website URL</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Provide your primary business domain name so we can review your existing online presence across search and social channels.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                02
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-neutral-950">Get Your Free Audit</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Receive your free audit within 24 hours. We’ll manually review your visibility across search, maps, and AI platforms.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                03
              </div>
              <div className="space-y-3 w-full">
                <h4 className="text-lg font-bold text-neutral-950">Book a Complimentary 15‑Minute Call</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Book a complimentary 15‑minute call using our Google Calendar link, or call us directly on **0480 286 282**.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://calendar.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-all shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book a Call
                  </a>
                  <a
                    href="tel:0480286282"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 bg-white text-neutral-800 text-xs font-semibold rounded-lg hover:bg-neutral-50 transition-all shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                04
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-neutral-950">Choose Your 90‑Day AI Success Blueprint</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Get an actionable, step-by-step roadmap to secure more leads. If you choose to stay with us, we credit the $995 blueprint fee back into your plan.
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div id="audit-form" className="lg:col-span-5 bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-xl relative overflow-hidden">
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple"></div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">Audit Requested!</h4>
                <p className="text-sm text-neutral-500 font-light max-w-xs mx-auto">
                  We are reviewing <span className="font-semibold text-neutral-800">{url}</span>. Your visibility report will be sent to <span className="font-semibold text-neutral-800">{email}</span> within 24 hours.
                </p>
                
                <div className="pt-4 border-t border-neutral-100 mt-4 space-y-3">
                  <p className="text-xs text-neutral-500">Next step: Book your complimentary call.</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://calendar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-aeo-purple text-white text-sm font-semibold rounded-xl hover:bg-opacity-90 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      Book a Call
                    </a>
                    <a
                      href="tel:0480286282"
                      className="flex items-center justify-center gap-2 py-3 border border-neutral-200 text-neutral-800 text-sm font-semibold rounded-xl hover:bg-neutral-50 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      Call Us: 0480 286 282
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setUrl('');
                    setEmail('');
                  }}
                  className="block mt-4 mx-auto text-xs font-semibold text-neutral-400 hover:text-neutral-600 hover:underline"
                >
                  Request another audit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-neutral-950">Claim Your Free Audit</h4>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    See how your business performs across search, maps, and AI discovery platforms today.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Website URL
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="url"
                        required
                        placeholder="https://example.com.au"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-aeo-cyan/50 focus:border-aeo-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com.au"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-aeo-cyan/50 focus:border-aeo-cyan transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm transition-all disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Generate My Free Audit'}
                    {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  </button>
                  {error && (
                    <p className="text-xs text-rose-500 text-center font-semibold mt-3">{error}</p>
                  )}
                  <p className="text-[11px] text-center text-neutral-500 font-medium mt-3">
                    * Your audit will be delivered manually within 24 hours.
                  </p>
                </div>

                <p className="text-[10px] text-center text-neutral-400 font-light">
                  By clicking, you agree to our terms. Your privacy is guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

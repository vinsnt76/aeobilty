'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HowItWorks() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');
  const [started, setStarted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  // 1. audit_form_view - Triggered when the audit form becomes visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof window !== 'undefined') {
            const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
            if (win.dataLayer) {
              win.dataLayer.push({
                event: 'audit_form_view',
                form_id: 'audit',
                page: window.location.pathname
              });
            }
          }
          observer.disconnect(); // Track once per page load
        }
      },
      { threshold: 0.15 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // 2. audit_form_start - Triggered once when the user begins typing in any field
  const handleFieldStart = (fieldName: string) => {
    if (!started) {
      setStarted(true);
      if (typeof window !== 'undefined') {
        const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
        if (win.dataLayer) {
          win.dataLayer.push({
            event: 'audit_form_start',
            form_id: 'audit',
            field_started: fieldName
          });
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !intent.trim()) return;

    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const searchParams = new URLSearchParams({
      url: formattedUrl,
      intent: intent.trim(),
      auto: 'true',
    });

    router.push(`/diagnostic?${searchParams.toString()}`);
  };

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative text-center max-w-2xl mx-auto mb-16">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 -m-8 pointer-events-none bg-grid-motif-light opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <h2 className="text-xs font-semibold tracking-widest text-aeo-purple uppercase">
              The AI Visibility Telemetry Engine
            </h2>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-soehne-breit">
              How It Works
            </h2>
            <p className="text-base text-neutral-600 font-light font-serif">
              Measure, understand, and activate your AI search visibility.
            </p>
          </div>
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
                <h4 className="text-lg font-bold text-neutral-950 font-soehne-breit">Tell Us What You Want To Be Found For</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Enter your website and your primary customer search intent.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                02
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-neutral-950 font-soehne-breit">Measure Your AI Visibility</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Our telemetry engine analyses how AI systems understand, retrieve, and recommend your business.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                03
              </div>
              <div className="space-y-3 w-full">
                <h4 className="text-lg font-bold text-neutral-950 font-soehne-breit">Discover Your Opportunities</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Receive your AI Visibility Score, confidence signals, and the biggest opportunities to improve.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                04
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-neutral-950 font-soehne-breit">Create Your AI Growth Blueprint</h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Turn your insights into an actionable 90-day roadmap.
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div id="audit-form" ref={formRef} className="lg:col-span-5 bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-xl relative overflow-hidden">
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple"></div>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Local Business Visibility Audit Form">
                <div>
                  <h4 className="text-lg font-bold text-neutral-950">Measure Your AI Visibility</h4>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    See how AI search engines understand your business today. Zero email required upfront.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label 
                      htmlFor="australian-business-url"
                      className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
                    >
                      Australian Business URL
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        id="australian-business-url"
                        name="australian_business_url"
                        required
                        placeholder="https://example.com.au"
                        value={url}
                        onChange={(e) => {
                          setUrl(e.target.value);
                          handleFieldStart('website');
                        }}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-xs focus:outline-none focus:ring-2 focus:ring-aeo-cyan/50 focus:border-aeo-cyan transition-all"
                        aria-required="true"
                        spellCheck={false}
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="target-search-intent"
                      className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
                    >
                      Primary Search Intent
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        id="target-search-intent"
                        name="target_search_intent"
                        required
                        placeholder="e.g. best solar installer Brisbane"
                        value={intent}
                        onChange={(e) => {
                          setIntent(e.target.value);
                          handleFieldStart('intent');
                        }}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-xs focus:outline-none focus:ring-2 focus:ring-aeo-cyan/50 focus:border-aeo-cyan transition-all"
                        aria-required="true"
                        spellCheck={false}
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-3.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm transition-all cursor-pointer"
                  >
                    <span>Generate My AI Visibility Score</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[10px] text-center text-neutral-500 font-medium mt-2.5">
                    * The scan executes a real-time vector analysis using Gemini.
                  </p>
                </div>

                <p className="text-[9px] text-center text-neutral-400 font-light">
                  By clicking, you agree to our terms. Your privacy is guaranteed.
                </p>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Globe, Mail, Phone, Calendar, Search } from 'lucide-react';
import Link from 'next/link';
import { useTelemetryScan } from '@/hooks/useTelemetryScan';
import { extractDomainLabel } from './CompanionWidget';

export default function HowItWorks() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [intent, setIntent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);

  const { runScan, result: telemetryResult, loading, error: telemetryError } = useTelemetryScan();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email || !intent) return;

    try {
      // 1. Trigger real-time AEO/GEO telemetry scan via hook
      await runScan(url, intent);

      // 2. Submit email/lead form
      await fetch('/api/forms/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: url, intent }),
      });

      setSubmitted(true);

      // 3. Trigger Analytics DataLayer Events
      let emailDomain = '';
      if (email.includes('@')) {
        emailDomain = email.split('@')[1];
      }
      let websiteDomain = '';
      try {
        const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
        websiteDomain = parsedUrl.hostname.replace('www.', '');
      } catch {
        websiteDomain = url.replace('www.', '');
      }

      if (typeof window !== 'undefined') {
        const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
        if (win.dataLayer) {
          win.dataLayer.push({
            event: 'audit_form_submit',
            form_id: 'audit',
            email_domain: emailDomain,
            website_domain: websiteDomain
          });
        }
      }
    } catch (err) {
      console.error('Audit run error:', err);
    }
  };

  useEffect(() => {
    if (submitted && telemetryResult) {
      localStorage.setItem('aeo_telemetry_latest', JSON.stringify({
        url,
        intent,
        result: telemetryResult
      }));
      window.dispatchEvent(new Event('aeo_telemetry_updated'));
    }
  }, [submitted, telemetryResult, url, intent]);

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

            {submitted && telemetryResult ? (
              <div className="py-6 space-y-5 animate-fade-in">
                <div className="text-center space-y-1.5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">Telemetry Scan Complete</h4>
                  <p className="text-[11px] text-neutral-500 font-light max-w-xs mx-auto">
                    Real-time AEO indicators compiled for <span className="font-semibold text-neutral-800">{url}</span>.
                  </p>
                </div>

                {/* Inline Telemetry View */}
                <div className="bg-neutral-950 text-white border border-neutral-800 rounded-xl p-4 font-mono text-[10px] space-y-4">
                  {/* Proximity Track */}
                  <div className="space-y-1.5">
                    <div className="text-[9px] uppercase tracking-wider text-white/40">AI Search Semantic Match (Vector Proximity)</div>
                    {telemetryResult.nodes?.slice(0, 3).map((node, idx) => {
                      const isClient = node.label === 'Client';
                      const percentage = Math.round(node.similarity * 100);
                      const displayLabel = isClient 
                        ? (url ? `[${extractDomainLabel(url)}]` : '[Your Site]') 
                        : `[${extractDomainLabel(node.text)}]`;
                      
                      return (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex justify-between text-[9px]">
                            <span>{displayLabel}</span>
                            <span className={isClient ? 'text-aeo-cyan' : 'text-neutral-400'}>{node.similarity.toFixed(3)}</span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-800 rounded overflow-hidden">
                            <div 
                              className={`h-full rounded ${isClient ? 'bg-aeo-cyan' : 'bg-zinc-500'}`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* RAG Verdict */}
                  <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9px]">
                    <span className="text-white/40 uppercase">AI Retrieval Status (Simulation):</span>
                    {telemetryResult.simulations?.[0] && (
                      <span className={telemetryResult.simulations[0].survived ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                        {telemetryResult.simulations[0].survived ? '● ALIGNED' : '● DROPPED'}
                      </span>
                    )}
                  </div>

                  {/* Schema Triples */}
                  {telemetryResult.triples && telemetryResult.triples.length > 0 && (
                    <div className="border-t border-white/5 pt-2 space-y-1">
                      <div className="text-[9px] uppercase tracking-wider text-white/40">Core Semantic Associations (Entity Triples)</div>
                      <div className="space-y-0.5">
                        {telemetryResult.triples.slice(0, 2).map((t, idx) => (
                          <div key={idx} className="text-[8px] text-white/70 truncate">
                            <span className="text-aeo-cyan">{t.subject}</span> ──► {t.predicate} ──► {t.object}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* V2: Technical Health & Schema */}
                  {(telemetryResult.technicalSEO || telemetryResult.performance) && (
                    <div className="border-t border-white/5 pt-2 flex items-start justify-between text-[9px]">
                      <div className="space-y-1">
                        <div className="text-white/40 uppercase">Technical Health</div>
                        {telemetryResult.performance && (
                          <div className={telemetryResult.performance.coreWebVitalsScore > 80 ? 'text-emerald-400' : 'text-amber-400'}>
                            CWV Score: {telemetryResult.performance.coreWebVitalsScore}
                          </div>
                        )}
                        {telemetryResult.technicalSEO && (
                          <div className="text-white/70">
                            Links: {telemetryResult.technicalSEO.internalLinksCount}
                          </div>
                        )}
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-white/40 uppercase">Schema (JSON-LD)</div>
                        {telemetryResult.schemaValidation && (
                          <div className={telemetryResult.schemaValidation.hasValidSchema ? 'text-emerald-400' : 'text-rose-400'}>
                            {telemetryResult.schemaValidation.hasValidSchema ? '● DETECTED' : '● MISSING'}
                          </div>
                        )}
                        <div className="text-[8px] text-aeo-cyan truncate max-w-[80px]">
                           {telemetryResult.schemaValidation?.typesFound?.[0] || 'None'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-neutral-100 space-y-3">
                  <p className="text-xs text-neutral-500 text-center font-light leading-relaxed">
                    💡 <strong>Open the Chat Companion</strong> at the bottom right to let <strong>AI Bill</strong> review this context and walk you through fixes!
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href="/book" className="btn-primary w-full text-center py-3 text-xs">
                      Book 15‑Min Clarity Call
                    </Link>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStarted(false);
                    setUrl('');
                    setEmail('');
                  }}
                  className="block mt-2 mx-auto text-[10px] font-semibold text-neutral-400 hover:text-neutral-600 hover:underline"
                >
                  Request another audit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Local Business Visibility Audit Form">
                <div>
                  <h4 className="text-lg font-bold text-neutral-950">Measure Your AI Visibility</h4>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    See how AI search engines understand your business today.
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
                        type="url"
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
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="business-contact-email"
                      className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
                    >
                      Business Contact Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="email"
                        id="business-contact-email"
                        name="business_contact_email"
                        required
                        placeholder="you@company.com.au"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          handleFieldStart('email');
                        }}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-xs focus:outline-none focus:ring-2 focus:ring-aeo-cyan/50 focus:border-aeo-cyan transition-all"
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group flex items-center justify-center gap-2 py-3.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? 'Running Telemetry Scan...' : 'Generate My AI Visibility Score'}
                    {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  </button>
                  {telemetryError && (
                    <p className="text-xs text-rose-500 text-center font-semibold mt-3">{telemetryError}</p>
                  )}
                  <p className="text-[10px] text-center text-neutral-500 font-medium mt-2.5">
                    * The scan executes a real-time vector analysis using Gemini.
                  </p>
                </div>

                <p className="text-[9px] text-center text-neutral-400 font-light">
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

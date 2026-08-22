'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2, Circle, Loader2, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';
import { TelemetryResult, SimulationRun } from '@/lib/telemetry/types';
import { trackGaEvent } from '@/lib/gtag';
import { BRAND_PRICING_SCHEMA } from '@/lib/brandFacts';

type Step = 'INPUT' | 'PROCESSING' | 'SCORE_REVEAL';

export default function DiagnosticEngine() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>('INPUT');
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telemetry, setTelemetry] = useState<TelemetryResult | null>(null);
  const [processingStage, setProcessingStage] = useState(0);
  const hasAutoRunRef = useRef(false);

  // Extract BPSTRAT product parameters from canonical schema
  const bpstratProduct = BRAND_PRICING_SCHEMA['@graph'].find(p => p.sku === 'BPSTRAT') || BRAND_PRICING_SCHEMA['@graph'][0];

  const processingSteps = [
    "Crawling website structure & service pages",
    "Checking structured data & schema markup",
    "Evaluating local signals & location information",
    "Measuring customer search intent alignment",
    "Validating business detail consistency",
    "Generating custom visibility scorecard"
  ];

  const runScan = async (rawUrl: string, rawIntent: string) => {
    if (!rawUrl || !rawIntent) return;

    // Normalize URL
    let normalizedUrl = rawUrl.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      if (normalizedUrl.startsWith('https') && !normalizedUrl.includes('://')) {
        normalizedUrl = normalizedUrl.replace(/^https[^a-zA-Z0-9]*/i, 'https://');
      } else if (normalizedUrl.startsWith('http') && !normalizedUrl.includes('://')) {
        normalizedUrl = normalizedUrl.replace(/^http[^a-zA-Z0-9]*/i, 'http://');
      } else {
        normalizedUrl = 'https://' + normalizedUrl;
      }
    }
    setUrl(normalizedUrl);
    setIntent(rawIntent.trim());
    
    // Dispatch scan started event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('close_companion_widget'));
      window.dispatchEvent(new Event('aeo_scan_started'));
      trackGaEvent('aeo_scan_started', {
        event_category: 'diagnostic_engine',
        target_url: normalizedUrl,
      });
    }

    setStep('PROCESSING');
    setProcessingStage(0);

    // Start background fetch
    const fetchPromise = fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: normalizedUrl, intent: rawIntent.trim(), name, email }),
    }).then(res => res.json());

    // Visual progress for user feedback
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise(r => setTimeout(r, 1000 + Math.random() * 600));
      setProcessingStage(i + 1);
    }

    try {
      const data = await fetchPromise;
      if (data.error) {
        throw new Error(data.error);
      }
      setTelemetry(data);
      
      // Dispatch events to notify AI Bill (CompanionWidget)
      if (typeof window !== 'undefined') {
        localStorage.setItem('aeo_telemetry_latest', JSON.stringify({ url: normalizedUrl, intent: rawIntent.trim(), result: data }));
        window.dispatchEvent(new Event('aeo_scan_completed'));
        window.dispatchEvent(new Event('aeo_telemetry_updated'));
        trackGaEvent('aeo_scan_completed', {
          event_category: 'diagnostic_engine',
          overall_score: data.readinessScore ?? 0,
          passed_checks: data.simulations ? data.simulations.filter((s: SimulationRun) => s.survived).length : (data.engineeredFeatures ? 1 : 0),
          failed_checks: data.simulations ? data.simulations.filter((s: SimulationRun) => !s.survived).length : 0,
        });
      }
      setStep('SCORE_REVEAL');
    } catch (e: unknown) {
      console.error('Diagnostic engine fetch error:', e);
      setTelemetry({ 
        readinessScore: 0,
        error: e instanceof Error ? e.message : 'Failed to fetch site information'
      } as unknown as TelemetryResult);
      setStep('SCORE_REVEAL');
    }
  };

  useEffect(() => {
    const auto = searchParams.get('auto') === 'true';
    const queryUrl = searchParams.get('url');
    const queryIntent = searchParams.get('intent');

    if (auto && queryUrl && queryIntent && !hasAutoRunRef.current) {
      hasAutoRunRef.current = true;
      runScan(queryUrl, queryIntent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !intent) return;
    await runScan(url, intent);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Hero Block */}
      <div className="text-center mb-10 max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-soehne-breit">
          Run a Free AI Visibility Scan
        </h1>
        <h2 className="text-white/70 text-base md:text-lg font-light leading-relaxed font-serif">
          Identify exactly how clear, consistent and discoverable your business information is across Search, Maps and AI. No long-term commitments, no obligation.
        </h2>
      </div>

      <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl space-y-8">
        
        {step === 'INPUT' && (
          <div className="space-y-8">
            <form onSubmit={handleStart} className="grid grid-cols-12 gap-4 relative z-10">
              
              {/* Step 1: Website URL - Full 12-Column Width */}
              <div className="col-span-12 space-y-1.5">
                <label className="block text-sm font-semibold text-white">Website URL</label>
                <input
                  type="text"
                  required
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="example.com.au"
                  className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors text-sm"
                />
                <p className="text-xs text-white/50 font-serif leading-normal pt-1">
                  Checks your structured data, location signals and priority service information formatting across primary search platforms.
                </p>
              </div>

              {/* Step 2: Primary Customer Search Intent - Dual 6-Column Container */}
              <div className="col-span-12 md:col-span-6 space-y-1.5">
                <label className="block text-sm font-semibold text-white">Primary customer search</label>
                <input
                  type="text"
                  required
                  value={intent}
                  onChange={e => setIntent(e.target.value)}
                  placeholder='e.g. "solar installers Perth"'
                  className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-aeo-purple transition-colors text-sm"
                />
                <p className="text-xs text-white/50 font-serif leading-normal pt-1">
                  Identifies how customer questions and local searches target your business.
                </p>
              </div>

              {/* Step 2: First Name - Dual 6-Column Container */}
              <div className="col-span-12 md:col-span-6 space-y-1.5">
                <label className="block text-sm font-semibold text-white">First Name (Optional)</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Vince"
                  className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors text-sm"
                />
              </div>

              {/* Step 2: Primary Email Address - Full 12-Column Width */}
              <div className="col-span-12 space-y-1.5">
                <label className="block text-sm font-semibold text-white">Primary Email Address (Optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="vince@example.com.au"
                  className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors text-sm"
                />
                <p className="text-xs text-white/50 font-serif leading-normal pt-1">
                  Your privacy is guaranteed. We use your details strictly to deliver your custom visibility score and report.
                </p>
              </div>

              {/* Schema-Bound Strategic Audit Preview */}
              <div className="col-span-12 bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold">
                      Full Audit Path Available
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      (${bpstratProduct.price} AUD ex. GST)
                    </span>
                  </div>
                  <p className="text-xs text-white/70 font-serif">
                    Includes entity review, visibility scorecard, and 90-day prioritised roadmap (100% fee credited towards implementation).
                  </p>
                </div>
                <div className="shrink-0 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1.5 rounded-lg">
                  {bpstratProduct.sku}
                </div>
              </div>
              
              {/* Submission Action & In-Line Trust Banner */}
              <div className="col-span-12 pt-4 space-y-4">
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-base transition-transform hover:scale-[1.01] shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                >
                  <span>Run Free Scan</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-white/60 font-serif text-center px-4">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clear scope. Fixed pricing. No lock-in contracts. Every diagnostic evaluation maps directly to practical next steps.</span>
                </div>
              </div>
            </form>

            {/* "What Happens Next" Diagnostic Strip */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block text-center">
                What Happens Next
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
                <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 space-y-1">
                  <span className="text-xs font-bold text-cyan-400 font-mono block">1. Enter details</span>
                  <p className="text-xs text-white/70 font-serif leading-snug">Enter your website URL and primary customer search query.</p>
                </div>
                <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 space-y-1">
                  <span className="text-xs font-bold text-purple-400 font-mono block">2. Scanner evaluation</span>
                  <p className="text-xs text-white/70 font-serif leading-snug">Our scanner reviews your local signals, structured data and service details.</p>
                </div>
                <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 space-y-1">
                  <span className="text-xs font-bold text-cyan-400 font-mono block">3. Receive roadmap</span>
                  <p className="text-xs text-white/70 font-serif leading-snug">Receive your visibility score and prioritised 90-day action plan within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'PROCESSING' && (
          <div className="space-y-6 relative z-10 py-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-aeo-cyan animate-pulse" />
              <h2 className="text-2xl font-bold text-white font-soehne-breit">Scanning Digital Signals...</h2>
            </div>
            
            <div className="space-y-3.5">
              {processingSteps.map((stepName, idx) => {
                const isActive = idx === processingStage;
                const isDone = idx < processingStage;
                const isPending = idx > processingStage;

                return (
                  <div key={idx} className={`flex items-center gap-3 transition-opacity duration-500 ${isPending ? 'opacity-30' : 'opacity-100'}`}>
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : isActive ? (
                      <Loader2 className="w-5 h-5 text-aeo-cyan animate-spin shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-white/20 shrink-0" />
                    )}
                    <span className={`text-base font-serif ${isDone ? 'text-white/70' : isActive ? 'text-white font-medium' : 'text-white/40'}`}>
                      {stepName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {step === 'SCORE_REVEAL' && telemetry && (telemetry as unknown as Record<string, unknown>).error ? (
          <div className="space-y-6 relative z-10 text-center py-8 bg-black/40 border border-red-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto border border-red-500/30">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Diagnostic Scan Could Not Complete</h3>
            <p className="text-sm text-white/70 max-w-md mx-auto font-serif">
              {String((telemetry as unknown as Record<string, unknown>).error || 'Unable to fetch site information. Please verify the URL is publicly accessible and try again.')}
            </p>
            <button
              onClick={() => {
                setStep('INPUT');
                setTelemetry(null);
              }}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/10 cursor-pointer"
            >
              Try Another URL
            </button>
          </div>
        ) : step === 'SCORE_REVEAL' && telemetry && (
          <div className="space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            <div className="text-center space-y-6 pb-8 border-b border-white/10">
              
              {/* Summary Box */}
              <div className="max-w-xl mx-auto bg-black/40 border border-aeo-cyan/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,205,216,0.1)]">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-aeo-cyan" />
                  <h3 className="text-xs uppercase tracking-wider font-bold text-aeo-cyan font-mono">Visibility Analysis Summary</h3>
                </div>
                <div className="space-y-4 font-serif">
                  <p className="text-xl text-white/90 font-medium text-center">
                    &quot;{telemetry.insightResult?.firstImpression?.headline}&quot;
                  </p>
                  <div className="space-y-2">
                    {telemetry.insightResult?.firstImpression?.reasoning?.map((r, i) => (
                      <p key={i} className="text-sm text-white/70 text-center">{r}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strategic Evaluation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left font-serif">
                <div className="bg-black/30 p-5 rounded-xl border border-white/5 space-y-3">
                  <h4 className="text-xs text-white/50 font-mono uppercase tracking-wider">Current Visibility State</h4>
                  <p className="text-sm text-white/80 leading-relaxed">{telemetry.insightResult?.diagnosis?.currentState}</p>
                </div>
                <div className="bg-black/30 p-5 rounded-xl border border-white/5 space-y-3">
                  <h4 className="text-xs text-white/50 font-mono uppercase tracking-wider">Target Discovery State</h4>
                  <p className="text-sm text-white/80 leading-relaxed">{telemetry.insightResult?.diagnosis?.desiredState}</p>
                </div>
              </div>

            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  setStep('INPUT');
                  setTelemetry(null);
                }}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors border border-white/10 cursor-pointer font-mono"
              >
                Run Another Visibility Scan
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

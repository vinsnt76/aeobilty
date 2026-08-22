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
  const [telemetry, setTelemetry] = useState<TelemetryResult | null>(null);
  const [processingStage, setProcessingStage] = useState(0);
  const hasAutoRunRef = useRef(false);

  // Extract BPSTRAT product parameters from canonical schema
  const bpstratProduct = BRAND_PRICING_SCHEMA['@graph'].find(p => p.sku === 'BPSTRAT') || BRAND_PRICING_SCHEMA['@graph'][0];

  const processingSteps = [
    "Crawling website structure",
    "Extracting entities",
    "Measuring semantic alignment",
    "Comparing competitor visibility",
    "Validating knowledge graph signals",
    "Computing retrieval readiness"
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
      body: JSON.stringify({ url: normalizedUrl, intent: rawIntent.trim() }),
    }).then(res => res.json());

    // Fake visual progress for UX
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));
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
      // fallback for demo if fails
      setTelemetry({ 
        readinessScore: 0,
        error: e instanceof Error ? e.message : 'Failed to fetch telemetry'
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
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Title Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Find out how AI engines <span className="text-aeo-cyan font-normal">understand</span> your business.
        </h1>
        <p className="text-white/70 text-lg font-light max-w-lg mx-auto">
          Measure your visibility across ChatGPT, Gemini, and Claude.
        </p>
      </div>

      <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden shadow-2xl">
        
        {step === 'INPUT' && (
          <form onSubmit={handleStart} className="grid grid-cols-12 gap-4 relative z-10">
            {/* Website URL - Full 12 Column Width */}
            <div className="col-span-12">
              <label className="block text-sm font-medium text-white/80 mb-2">Website URL</label>
              <input
                type="text"
                required
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://yourwebsite.com.au"
                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan transition-colors"
              />
            </div>

            {/* Primary Customer Search Intent - 6 Columns on Desktop */}
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-white/80 mb-2">Primary customer search</label>
              <input
                type="text"
                required
                value={intent}
                onChange={e => setIntent(e.target.value)}
                placeholder="e.g. &quot;solar installers Perth&quot;"
                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-aeo-purple transition-colors"
              />
              <p className="text-xs text-white/40 mt-2">Example: &quot;best accounting software&quot;, &quot;commercial electricians&quot;</p>
            </div>

            {/* Schema-Bound Audit Deliverables Preview - 6 Columns on Desktop */}
            <div className="col-span-12 sm:col-span-6 bg-black/40 border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-aeo-cyan font-bold">
                    Audit Deliverables ({bpstratProduct.sku})
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    ${bpstratProduct.price} AUD
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-white/70">
                  {bpstratProduct.offers.itemOffered.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-aeo-cyan shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-[9px] font-mono text-zinc-400 mt-2 pt-1 border-t border-white/5">
                Scope: {bpstratProduct.offers.eligibleDuration}
              </div>
            </div>
            
            {/* Submit Button & In-line 60-Day Risk Reversal Guarantee */}
            <div className="col-span-12 pt-4">
              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-lg transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.2)] cursor-pointer"
              >
                Generate My Visibility Score
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/60 font-mono text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Backed by our 100% credit-back guarantee towards subsequent implementation sprints.</span>
              </div>
            </div>
          </form>
        )}

        {step === 'PROCESSING' && (
          <div className="space-y-6 relative z-10 py-8">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-aeo-cyan animate-pulse" />
              <h2 className="text-2xl font-bold text-white">AI Visibility Engine Running</h2>
            </div>
            
            <div className="space-y-4">
              {processingSteps.map((stepName, idx) => {
                const isActive = idx === processingStage;
                const isDone = idx < processingStage;
                const isPending = idx > processingStage;

                return (
                  <div key={idx} className={`flex items-center gap-3 transition-opacity duration-500 ${isPending ? 'opacity-30' : 'opacity-100'}`}>
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : isActive ? (
                      <Loader2 className="w-5 h-5 text-aeo-cyan animate-spin" />
                    ) : (
                      <Circle className="w-5 h-5 text-white/20" />
                    )}
                    <span className={`text-lg ${isDone ? 'text-white/70' : isActive ? 'text-white font-medium' : 'text-white/40'}`}>
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
            <p className="text-sm text-white/70 max-w-md mx-auto">
              {String((telemetry as unknown as Record<string, unknown>).error || 'Unable to fetch site telemetry. Please verify the URL is publicly accessible and try again.')}
            </p>
            <button
              onClick={() => {
                setStep('INPUT');
                setTelemetry(null);
              }}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/10"
            >
              Try Another URL
            </button>
          </div>
        ) : step === 'SCORE_REVEAL' && telemetry && (
          <div className="space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            <div className="text-center space-y-8 pb-8 border-b border-white/10">
              
              {/* AI First Impression Signature Box */}
              <div className="max-w-xl mx-auto bg-black/40 border border-aeo-cyan/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,205,216,0.1)]">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-aeo-cyan" />
                  <h2 className="text-sm uppercase tracking-wider font-bold text-aeo-cyan">AI First Impression</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-white/90 font-medium italic text-center">
                    &quot;{telemetry.insightResult?.firstImpression?.headline}&quot;
                  </p>
                  <div className="space-y-2">
                    {telemetry.insightResult?.firstImpression?.reasoning?.map((r, i) => (
                      <p key={i} className="text-sm text-white/70 text-center">{r}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strategic Summary & Diagnosis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                
                <div className="space-y-4">
                  <div className="bg-black/30 p-5 rounded-xl border border-white/5 space-y-4 h-full">
                    <h3 className="text-sm text-white/50 uppercase tracking-wider">Business Diagnosis</h3>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase mb-1">Current State</div>
                      <div className="text-sm text-white/80">{telemetry.insightResult?.diagnosis?.currentState}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase mb-1">Desired State</div>
                      <div className="text-sm text-white/80">{telemetry.insightResult?.diagnosis?.desiredState}</div>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <div className="text-[10px] text-aeo-purple uppercase mb-1">The Gap</div>
                      <div className="text-sm text-white/90">{telemetry.insightResult?.diagnosis?.gap}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/30 p-5 rounded-xl border border-white/5 space-y-4 h-full">
                    <h3 className="text-sm text-white/50 uppercase tracking-wider">Executive Summary</h3>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase mb-1">Core Problem</div>
                      <div className="text-sm text-white/80">{telemetry.insightResult?.summary?.problem}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-400/70 uppercase mb-1">Biggest Opportunity</div>
                      <div className="text-sm text-white/80">{telemetry.insightResult?.summary?.opportunity}</div>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <div className="text-[10px] text-aeo-cyan uppercase mb-1">Next Action</div>
                      <div className="text-sm text-white/90 font-medium">{telemetry.insightResult?.summary?.nextAction}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Blind Spot & Recommendation Test Climax */}
              <div className="bg-black/30 border border-white/5 rounded-xl p-6 mt-6">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                  
                  <div className="flex-1 space-y-2 text-center md:text-left">
                    <div className="text-[10px] uppercase tracking-wider text-amber-400">Biggest Blind Spot</div>
                    <div className="text-lg font-bold text-white/90">{telemetry.insightResult?.blindSpot?.title}</div>
                    <div className="text-sm text-white/70">{telemetry.insightResult?.blindSpot?.description}</div>
                  </div>

                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>

                  <div className="flex-1 space-y-3 text-center md:text-left">
                    <div className="text-[10px] uppercase tracking-wider text-aeo-purple">AI Recommendation Test</div>
                    <div className="text-xs text-white/50">&quot;If someone asked ChatGPT for the best {intent}, would I recommend you?&quot;</div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-2">
                      <span className="text-3xl leading-none">
                        {telemetry.insightResult?.recommendationTest?.wouldRecommend ? '✅' : '❌'}
                      </span>
                      <div>
                        <div className="text-lg font-bold text-white mb-1">{telemetry.insightResult?.recommendationTest?.verdict}</div>
                        <div className="text-sm text-white/70">{telemetry.insightResult?.recommendationTest?.reasoning}</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Guided Action Button */}
              <div className="pt-8 mt-8 border-t border-white/5 flex flex-col items-center justify-center space-y-4">
                <p className="text-white/60 text-sm">Want a deeper analysis of these results?</p>
                <button
                  onClick={() => {
                    // 1. Tell CompanionWidget to close and go dormant
                    window.dispatchEvent(new CustomEvent('close_companion_widget'));

                    // 2. Explicitly open BillWidget
                    window.dispatchEvent(
                      new CustomEvent('open_bill_with_query', {
                        detail: {
                          query: `Deconstruct my live site telemetry metrics for ${url || 'my site'}`,
                          mode: 'telemetry'
                        }
                      })
                    );
                    window.dispatchEvent(new CustomEvent('open_bill_drawer'));
                  }}
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan/20 to-aeo-purple/20 border border-aeo-cyan/30 text-white font-medium hover:bg-aeo-cyan/30 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.15)] cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-aeo-cyan" />
                  Talk to AI Bill to discover more of what we found
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

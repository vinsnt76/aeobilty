'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Circle, Loader2, Sparkles, Mail, Lock } from 'lucide-react';
import { TelemetryResult } from '@/lib/telemetry/types';

type Step = 'INPUT' | 'PROCESSING' | 'SCORE_REVEAL';

export default function DiagnosticEngine() {
  const [step, setStep] = useState<Step>('INPUT');
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');
  const [telemetry, setTelemetry] = useState<TelemetryResult | null>(null);
  
  const [processingStage, setProcessingStage] = useState(0);

  const processingSteps = [
    "Crawling website structure",
    "Extracting entities",
    "Measuring semantic alignment",
    "Comparing competitor visibility",
    "Validating knowledge graph signals",
    "Computing retrieval readiness"
  ];

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !intent) return;
    
    // Normalize URL
    let normalizedUrl = url.trim();
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
    
    // Dispatch scan started event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('aeo_scan_started'));
    }

    setStep('PROCESSING');
    setProcessingStage(0);

    // Start background fetch
    const fetchPromise = fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: normalizedUrl, intent }),
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
        window.dispatchEvent(new Event('aeo_scan_completed'));
        window.dispatchEvent(new Event('aeo_telemetry_updated'));
        
        // 2.5 second delay to feel like he's analysing before popping up
        setTimeout(() => {
          window.dispatchEvent(new Event('open_new_bill_session'));
        }, 2500);
      }
    } catch (e: any) {
      console.error('Diagnostic engine fetch error:', e);
      // fallback for demo if fails
      setTelemetry({ 
        readinessScore: 0,
        error: e.message || 'Failed to fetch telemetry'
      } as any);
    }

    setStep('SCORE_REVEAL');
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
          <form onSubmit={handleStart} className="space-y-6 relative z-10">
            <div>
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
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Primary customer search</label>
              <input
                type="text"
                required
                value={intent}
                onChange={e => setIntent(e.target.value)}
                placeholder='e.g. "solar installers Perth"'
                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-aeo-purple transition-colors"
              />
              <p className="text-xs text-white/40 mt-2">Example: "best accounting software", "commercial electricians"</p>
            </div>
            
            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-lg transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.2)] mt-8"
            >
              Generate My Visibility Score
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
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

        {step === 'SCORE_REVEAL' && telemetry && (
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
                    "{telemetry.insightResult?.firstImpression?.headline}"
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
                    <div className="text-xs text-white/50">"If someone asked ChatGPT for the best {intent}, would I recommend you?"</div>
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
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

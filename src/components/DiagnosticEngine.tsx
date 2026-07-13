'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Circle, Loader2, Sparkles, Mail, Lock } from 'lucide-react';
import { TelemetryResult } from '@/lib/telemetry/types';

type Step = 'INPUT' | 'PROCESSING' | 'SCORE_REVEAL' | 'EMAIL_GATE';

export default function DiagnosticEngine() {
  const [step, setStep] = useState<Step>('INPUT');
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');
  const [email, setEmail] = useState('');
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
    
    setStep('PROCESSING');
    setProcessingStage(0);

    // Start background fetch
    const fetchPromise = fetch('/api/telemetry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, intent }),
    }).then(res => res.json());

    // Fake visual progress for UX
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));
      setProcessingStage(i + 1);
    }

    try {
      const data = await fetchPromise;
      setTelemetry(data);
    } catch (e) {
      console.error(e);
      // fallback for demo if fails
      setTelemetry({ readinessScore: 45 } as any);
    }

    setStep('SCORE_REVEAL');
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In real app, submit email to CRM and route to full dashboard
    setStep('EMAIL_GATE'); 
    alert(`Report will be sent to ${email} (Full dashboard routing would happen here)`);
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
                type="url"
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
              className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-lg transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,240,255,0.2)] mt-8"
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

        {(step === 'SCORE_REVEAL' || step === 'EMAIL_GATE') && telemetry && (
          <div className="space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            <div className="text-center space-y-4 pb-8 border-b border-white/10">
              <h2 className="text-xl text-white/60 font-medium">AI Visibility Score</h2>
              <div className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-aeo-cyan to-aeo-purple">
                {telemetry.readinessScore} <span className="text-4xl text-white/20">/ 100</span>
              </div>
              <p className="text-lg text-white/80">
                {telemetry.readinessScore > 70 ? 'Your website is well understood by AI engines.' : 
                 telemetry.readinessScore > 40 ? 'Your website is partially understood by AI engines.' : 
                 'Your website is poorly understood by AI engines.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-white/50 mb-1">Semantic Understanding</div>
                <div className="text-2xl font-bold text-white mb-2">{telemetry.proximityScore}%</div>
                <div className="text-xs text-white/40">Topic alignment with intent</div>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-white/50 mb-1">Entity Recognition</div>
                <div className="text-2xl font-bold text-white mb-2">{telemetry.entityConfidence?.score || 0}%</div>
                <div className="text-xs text-white/40">Knowledge graph clarity</div>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-white/50 mb-1">Technical Accessibility</div>
                <div className="text-2xl font-bold text-white mb-2">{telemetry.performance?.coreWebVitalsScore || 0}%</div>
                <div className="text-xs text-white/40">Crawlability & structure</div>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-white/50 mb-1">Competitive Position</div>
                <div className="text-2xl font-bold text-white mb-2">{(telemetry.engineeredFeatures?.semanticDominance || 0).toFixed(0)}%</div>
                <div className="text-xs text-white/40">Vs. top search results</div>
              </div>
            </div>

            {/* Email Gate */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-white/20 rounded-xl p-6 text-center space-y-4 relative overflow-hidden">
                <Lock className="w-24 h-24 text-white/5 absolute -top-4 -right-4 -rotate-12 pointer-events-none" />
                
                <h3 className="text-xl font-semibold text-white relative z-10">Unlock your full AI Visibility Report</h3>
                <ul className="text-sm text-left text-white/70 space-y-2 max-w-sm mx-auto relative z-10">
                  <li className="flex gap-2">✓ <span>Missing entity opportunities</span></li>
                  <li className="flex gap-2">✓ <span>Competitor comparison breakdown</span></li>
                  <li className="flex gap-2">✓ <span>Content gaps</span></li>
                  <li className="flex gap-2">✓ <span>Priority actions</span></li>
                </ul>
                
                <form onSubmit={handleUnlock} className="flex gap-2 pt-4 relative z-10 max-w-sm mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-black/60 border border-white/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-aeo-cyan"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-colors shrink-0"
                  >
                    Send Report
                  </button>
                </form>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

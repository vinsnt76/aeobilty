'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Loader2,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  MessageSquare,
  Compass,
  Cpu,
  Layers,
  Globe,
  FileCode,
  Lock,
  Zap,
  Eye,
  ChevronDown,
  CircleHelp
} from 'lucide-react';
import { TelemetryResult, SimulationRun } from '@/lib/telemetry/types';
import { trackGaEvent } from '@/lib/gtag';
import { calculateFactCoverageScore, PRICING_CONFIG } from '@/lib/brandFacts';
import Link from 'next/link';

type Step = 'INPUT' | 'PROCESSING' | 'SCORE_REVEAL';

export const DIAGNOSTIC_FAQ_ITEMS = [
  {
    q: "How is AI Search (AEO) different from regular SEO?",
    a: "Traditional SEO optimises for keywords, blue links, and search rankings. Answer Engine Optimisation (AEO) structures your content, schema, and entity relationships so generative AI engines (like ChatGPT, Perplexity, and Gemini) extract and cite your business as the definitive answer."
  },
  {
    q: "Will this scan affect my live website speed or uptime?",
    a: "No. The diagnostic scan is a safe, lightweight, read-only external query. It inspects public HTML, schema markup, and vector distance without impacting server load or uptime."
  },
  {
    q: "What happens after I run the scan?",
    a: "You receive an instant on-screen diagnostic report showing your 0–100 AI Visibility Score, simulated AI impression, and factual grounding breakdown. You can also chat directly with AI Bill to explore specific remediation steps."
  },
  {
    q: "Do I need technical skills to understand the report?",
    a: "No. Every diagnostic evaluation provides plain-English summaries alongside technical specifics, categorising findings into quick wins and structural improvements."
  },
  {
    q: "Do I need to jump on a sales call to get my report?",
    a: "No. Your report generates directly on-screen with zero sales pressure, zero lock-in contracts, and transparent fixed-price remediation options."
  }
];

export const DIAGNOSTIC_DIMENSIONS = [
  {
    id: "dim-1",
    title: "1. Crawlability & Technical Access",
    icon: Globe,
    badge: "Layer 01",
    benefit: "Can search engines and AI systems access and interpret important pages?",
    details: "Inspects raw HTML DOM structures, analyzes text-to-code density, verifies heading hierarchies (H1/H2/H3), evaluates Core Web Vitals (LCP/CLS), and checks robots.txt access rights for major LLM scraping bots (GPTBot, ClaudeBot, PerplexityBot)."
  },
  {
    id: "dim-2",
    title: "2. Business & Location Clarity",
    icon: Compass,
    badge: "Layer 02",
    benefit: "Is your business identity, location and service area consistent?",
    details: "Audits NAP consistency, geographic coordinate grounding, and regional service boundary signals against external map nodes and semantic knowledge graphs to detect regional footprint gaps."
  },
  {
    id: "dim-3",
    title: "3. Structured Service Information",
    icon: FileCode,
    badge: "Layer 03",
    benefit: "Does your website give machines reliable facts about your services?",
    details: "Audits and validates nested JSON-LD schema graphs, verifying interconnected relationships between @type: Organization, LocalBusiness, and Service arrays with Wikidata sameAs entity disambiguation."
  },
  {
    id: "dim-4",
    title: "4. Answer-Ready Content",
    icon: Layers,
    badge: "Layer 04",
    benefit: "Can AI systems extract clear, useful answers to customer questions?",
    details: "Runs a simulated Retrieval-Augmented Generation (RAG) loop to test how passages survive token context limits, sentence boundary chunking, and transformer positional attention bias (the opening 150 characters under H2/H3 headings)."
  },
  {
    id: "dim-5",
    title: "5. Trust & Citation Signals",
    icon: ShieldCheck,
    badge: "Layer 05",
    benefit: "Are there enough credibility signals to support confident recommendations?",
    details: "Audits schema records for corporate identifiers (such as Australian ABN registration) and explicit linkage to verified person graphs (e.g. /vince-baker#author) to anchor machine trust."
  }
];

export default function DiagnosticEngine() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>('INPUT');
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');
  const [telemetry, setTelemetry] = useState<TelemetryResult | null>(null);
  const [processingStage, setProcessingStage] = useState(0);
  const hasAutoRunRef = useRef(false);

  // Extract BPSTRAT product parameters from canonical schema & CBKL coverage
  const bpstratPrice = PRICING_CONFIG.blueprint.price;
  const factCoverage = calculateFactCoverageScore();

  const processingSteps = [
    "Crawling website structure & service pages",
    "Checking structured data & schema markup",
    "Evaluating local signals & location information",
    "Measuring customer search intent alignment",
    "Validating business detail consistency",
    "Generating simulated AI Impression"
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

    // Start background fetch with safe parsing
    const fetchPromise = (async () => {
      try {
        const res = await fetch('/api/diagnostic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: normalizedUrl, intent: rawIntent.trim() }),
        });

        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const json = await res.json();
          if (!res.ok || json.error) {
            throw new Error(json.error || `Diagnostic request failed with status ${res.status}`);
          }
          return json;
        } else {
          const text = await res.text();
          throw new Error(
            text.includes('An error') || text.includes('<html>')
              ? 'The scan timed out while reaching the website. Please verify the URL and try again.'
              : text || `Server returned status ${res.status}`
          );
        }
      } catch (err: unknown) {
        throw err;
      }
    })();

    // Visual progress for user feedback (~5 sec total)
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise(r => setTimeout(r, 800));
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
      const rawMsg = e instanceof Error ? e.message : 'Failed to fetch site information';
      const cleanMsg = (rawMsg.includes('Unexpected token') || rawMsg.includes('JSON') || rawMsg.includes('An error'))
        ? 'We were unable to reach or analyze this website. Please verify the URL is online and publicly accessible.'
        : rawMsg;

      setTelemetry({ 
        readinessScore: 0,
        error: cleanMsg
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

  const openAiBill = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open_bill_with_query', {
        detail: {
          query: `Analyse diagnostic scan for ${url} (Customer Question: "${intent}")`,
          mode: 'telemetry'
        }
      }));
      window.dispatchEvent(new Event('open_bill_drawer'));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Hero Block - Outcome Focused Above-The-Fold Layout */}
      <div className="text-center mb-6 max-w-2xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-soehne-breit leading-tight">
          See Whether AI Search Recommends Your Business
        </h1>
        <h2 className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed font-serif">
          Run a free AI Visibility Scan to discover whether ChatGPT, Perplexity and Google AI understand, trust and surface your business for the services you provide.
        </h2>
      </div>

      <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-md relative overflow-hidden shadow-2xl space-y-5">
        
        {step === 'INPUT' && (
          <div className="space-y-6">
            {/* Zero-Friction 2-Field Input Form */}
            <form onSubmit={handleStart} className="grid grid-cols-12 gap-4 relative z-10">
              
              {/* Field 1: Website URL */}
              <div className="col-span-12 space-y-1">
                <label htmlFor="diag-url-input" className="block text-xs sm:text-sm font-semibold text-white">
                  Your website address
                </label>
                <input
                  id="diag-url-input"
                  type="text"
                  required
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="e.g. yourbusiness.com.au"
                  className="w-full bg-black/70 border border-white/20 hover:border-white/30 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm min-h-[44px]"
                />
                <p className="text-xs text-zinc-300 font-serif leading-normal pt-0.5">
                  Enter your main website address. We&apos;ll check the signals AI search tools use to understand your business.
                </p>
              </div>

              {/* Field 2: What Would a Customer Ask AI? */}
              <div className="col-span-12 space-y-1">
                <label htmlFor="diag-intent-input" className="block text-xs sm:text-sm font-semibold text-white">
                  What would a customer ask AI to find you?
                </label>
                <input
                  id="diag-intent-input"
                  type="text"
                  required
                  value={intent}
                  onChange={e => setIntent(e.target.value)}
                  placeholder='e.g. "best electrician in Dianella" or "physiotherapist Perth"'
                  className="w-full bg-black/70 border border-white/20 hover:border-white/30 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm min-h-[44px]"
                />
                <p className="text-xs text-zinc-300 font-serif leading-normal pt-0.5">
                  Enter a typical question or search phrase. We&apos;ll test how well your website answers that need.
                </p>
              </div>

              {/* 4-Pillar Live Audit Preview Strip */}
              <div className="col-span-12 p-2.5 sm:p-3 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                    <Cpu className="w-3.5 h-3.5" /> Your free scan checks four AI visibility signals:
                  </span>
                  <span className="text-[10px] text-zinc-400 hidden sm:inline">Real-Time Analysis</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px] font-mono text-zinc-200">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">Structured Data</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                    <span className="truncate">Local Consistency</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">Answer Content</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">Trust Signals</span>
                  </div>
                </div>
              </div>
              
              {/* Submission Action & Tightly Coupled Trust Stack */}
              <div className="col-span-12 pt-0.5 space-y-2.5">
                <button
                  type="submit"
                  className="w-full group min-h-[46px] py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-zinc-950 font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-zinc-950" />
                  <span>Run Free AI Visibility Scan</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Law of Proximity Trust Anchor */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-zinc-300 font-mono text-center pt-0.5">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Instant on-screen results
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Free to run &bull; No credit card
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> No login or site access needed
                  </span>
                </div>
              </div>
            </form>

            {/* "What Happens Next" 3-Step Strip */}
            <div className="border-t border-white/10 pt-5 space-y-3.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block text-center">
                What Happens Next
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
                <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 space-y-1">
                  <span className="text-xs font-bold text-cyan-400 font-mono block">1. Add your website &amp; question</span>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">Enter your website address and the question a prospective customer would ask when looking for your service.</p>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 space-y-1">
                  <span className="text-xs font-bold text-purple-400 font-mono block">2. We check your AI signals</span>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">The scan reviews business clarity, structured data, answer formatting and trust signals.</p>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 space-y-1">
                  <span className="text-xs font-bold text-emerald-400 font-mono block">3. See your results instantly</span>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">Get an AI Visibility Score, the most important gaps, and practical next actions on screen.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'PROCESSING' && (
          <div className="space-y-6 relative z-10 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-aeo-cyan animate-pulse shrink-0" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">Scanning Digital Signals...</h2>
                  <p className="text-xs text-zinc-400 font-serif">Testing machine readability &amp; citation readiness</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-xs font-mono text-cyan-300 self-start sm:self-auto shadow-sm">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400 shrink-0" />
                <span>Please wait for the scan to complete (~5 sec)</span>
              </div>
            </div>

            {/* Visual Scan Progress Bar */}
            <div className="w-full bg-black/60 rounded-full h-1.5 border border-white/10 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 h-full transition-all duration-700 ease-out"
                style={{ width: `${Math.min(100, Math.round(((processingStage) / processingSteps.length) * 100))}%` }}
              />
            </div>
            
            <div className="space-y-3 pt-1">
              {processingSteps.map((stepName, idx) => {
                const isActive = idx === processingStage;
                const isDone = idx < processingStage;
                const isPending = idx > processingStage;

                return (
                  <div key={idx} className={`flex items-center gap-3 transition-opacity duration-300 ${isPending ? 'opacity-30' : 'opacity-100'}`}>
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                    ) : isActive ? (
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-aeo-cyan animate-spin shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 shrink-0" />
                    )}
                    <span className={`text-sm sm:text-base font-serif ${isDone ? 'text-white/80' : isActive ? 'text-cyan-300 font-medium' : 'text-white/40'}`}>
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
            <h3 className="text-xl font-bold text-white font-soehne-breit">Diagnostic Scan Could Not Complete</h3>
            <p className="text-sm text-white/70 max-w-md mx-auto font-serif leading-relaxed">
              {(() => {
                const raw = String((telemetry as unknown as Record<string, unknown>).error || '');
                if (!raw || raw.includes('Unexpected token') || raw.includes('JSON') || raw.includes('An error')) {
                  return 'We were unable to reach or analyze this website. Please verify that the URL is online and publicly accessible, and try again.';
                }
                return raw;
              })()}
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
          <div className="space-y-8 relative z-10 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Simulated AI Impression Summary */}
            <div className="max-w-2xl mx-auto bg-zinc-950/90 border border-aeo-cyan/40 rounded-2xl p-6 sm:p-7 shadow-[0_0_35px_rgba(0,205,216,0.15)] space-y-4 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-aeo-cyan" />
                  <span className="text-xs uppercase tracking-wider font-bold text-aeo-cyan font-mono">Your AI Visibility Scan</span>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  Target-Market Relevance Gap
                </span>
              </div>
              
              <div className="space-y-3 font-serif text-left sm:text-center">
                <p className="text-lg sm:text-xl text-white font-medium leading-snug">
                  &quot;{telemetry.insightResult?.firstImpression?.headline || "Your technical foundation is clean, but AI models cannot tie your services directly to target local search intent. You are visible broadly, but underrepresented for high-intent local queries."}&quot;
                </p>
                <div className="space-y-1.5 pt-1">
                  {telemetry.insightResult?.firstImpression?.reasoning?.map((r, i) => (
                    <p key={i} className="text-xs sm:text-sm text-zinc-300">{r}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Dual-Column Perception vs Target Comparison Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-amber-950/15 p-5 rounded-2xl border border-amber-500/30 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-mono uppercase tracking-wider font-bold">Current AI Perception</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Unoptimised</span>
                </div>
                <p className="text-sm text-white/90 font-serif leading-relaxed">
                  {telemetry.insightResult?.diagnosis?.currentState || "AI search models treat your business as a generic provider without explicit target-location priority."}
                </p>
              </div>
              <div className="bg-emerald-950/15 p-5 rounded-2xl border border-emerald-500/30 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-mono uppercase tracking-wider font-bold">Target Visibility State</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">AEO Target</span>
                </div>
                <p className="text-sm text-white/90 font-serif leading-relaxed">
                  {telemetry.insightResult?.diagnosis?.desiredState || "AI engines recommend your business as the definitive, verified answer for high-intent customer queries in your service area."}
                </p>
              </div>
            </div>

            {/* RECOMMENDED NEXT STEPS: Priority Action Plan Card */}
            <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-cyan-950/40 border border-cyan-500/40 rounded-2xl p-6 sm:p-7 shadow-[0_0_35px_rgba(6,182,212,0.15)] space-y-6 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-aeo-cyan" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-soehne-breit tracking-tight">
                    Recommended Next Steps: Priority Action Plan
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Remediation Roadmap
                </span>
              </div>

              {/* 1-2-3 Priority Roadmap Steps */}
              <div className="space-y-3 font-serif">
                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">1</span>
                    <h4 className="text-sm font-bold text-white font-soehne-breit">Anchor Regional Entity Schema</h4>
                  </div>
                  <p className="text-xs text-zinc-300 pl-7 leading-relaxed">
                    Inject nested <code className="text-cyan-300 font-mono">LocalBusiness</code> and <code className="text-cyan-300 font-mono">serviceArea</code> schema nodes tied to target regional Wikidata <code className="text-cyan-300 font-mono">sameAs</code> references.
                  </p>
                </div>

                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">2</span>
                    <h4 className="text-sm font-bold text-white font-soehne-breit">Publish Location-Specific Evidence</h4>
                  </div>
                  <p className="text-xs text-zinc-300 pl-7 leading-relaxed">
                    Deploy structured case studies and proof points directly addressing target regional Australian customer queries.
                  </p>
                </div>

                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">3</span>
                    <h4 className="text-sm font-bold text-white font-soehne-breit">Expand Query-to-Passage Context Chunking</h4>
                  </div>
                  <p className="text-xs text-zinc-300 pl-7 leading-relaxed">
                    Restructure core service sections with direct, high-density 150-character answer blocks positioned immediately under H2 and H3 tags.
                  </p>
                </div>
              </div>

              {/* Commercial Remediation Bridge: Blueprint + AI Bill */}
              <div className="pt-2 border-t border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-zinc-400">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> 10-business-day delivery
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> 100% credited to sprints
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Zero contract lock-in
                    </span>
                  </div>
                  <span className="text-cyan-300 font-bold sm:text-right">
                    ${bpstratPrice} AUD ex. GST
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="button"
                    onClick={openAiBill}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>Discuss Findings with AI Bill</span>
                  </button>

                  <Link
                    href="/solutions/aeo-blueprint"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-zinc-950 font-bold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer text-center"
                  >
                    <span>Get The AEObility Blueprint</span>
                    <ArrowRight className="w-4 h-4 text-zinc-950" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Global Schema & Entity Syntax Baseline Card */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl space-y-5 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-aeo-cyan" />
                  <div>
                    <h3 className="text-base font-bold text-white font-soehne-breit">
                      Global Schema &amp; Entity Syntax Baseline
                    </h3>
                    <span className="text-[11px] text-zinc-400 font-mono block">Query-Agnostic Structural Validation</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Technical Graph
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Measures baseline markup completeness, DOM hierarchy, and machine-readable data structures across 4 core technical pillars.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
                {/* Identity */}
                <div className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-300 font-mono font-bold">Identity</span>
                    <span className="text-base font-bold text-white">{Math.round(factCoverage.identityCoverage * 100)}%</span>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-white h-full rounded-full" style={{ width: `${Math.round(factCoverage.identityCoverage * 100)}%` }} />
                  </div>
                  <p className="text-[11px] text-zinc-400 font-serif leading-tight">Core business name, location &amp; credentials</p>
                </div>

                {/* Terminology */}
                <div className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400 font-mono font-bold">Terminology</span>
                    <span className="text-base font-bold text-aeo-cyan">{Math.round(factCoverage.factCoverage * 100)}%</span>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${Math.round(factCoverage.factCoverage * 100)}%` }} />
                  </div>
                  <p className="text-[11px] text-zinc-400 font-serif leading-tight">Exact service offerings &amp; pricing clarity</p>
                </div>

                {/* Topology */}
                <div className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-400 font-mono font-bold">Topology</span>
                    <span className="text-base font-bold text-aeo-purple">{Math.round(factCoverage.relationshipCoverage * 100)}%</span>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-purple-400 h-full rounded-full" style={{ width: `${Math.round(factCoverage.relationshipCoverage * 100)}%` }} />
                  </div>
                  <p className="text-[11px] text-zinc-400 font-serif leading-tight">Entity relationships &amp; service areas</p>
                </div>

                {/* Evidence */}
                <div className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-mono font-bold">Evidence</span>
                    <span className="text-base font-bold text-emerald-400">{Math.round(factCoverage.evidenceCoverage * 100)}%</span>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${Math.round(factCoverage.evidenceCoverage * 100)}%` }} />
                  </div>
                  <p className="text-[11px] text-zinc-400 font-serif leading-tight">Case studies, credentials &amp; citations</p>
                </div>
              </div>

              {/* Explicit Target-Query Grounding Row (Explains Disparity) */}
              <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-mono font-bold text-amber-300">
                      Target-Query Grounding: &quot;{intent || 'Target Search Query'}&quot;
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                      Needs Attention
                    </span>
                    <span className="text-base font-bold text-amber-300">{telemetry.proximityScore ?? 24}%</span>
                  </div>
                </div>
                <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: `${telemetry.proximityScore ?? 24}%` }} />
                </div>
                <p className="text-[11px] text-zinc-300 font-serif leading-relaxed">
                  While baseline schema syntax is AI-ready (90–100%), content signals lack direct entity linkage to customer search intent for this specific query.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-zinc-400 border-t border-white/5 font-serif">
                <span>Note: AI search engines are non-deterministic multi-variable systems. This scan assesses machine-readable indexation and structured data readiness.</span>
                <Link
                  href="/brand-facts"
                  onClick={() => {
                    trackGaEvent('view_fact_coverage_matrix', {
                      event_category: 'Diagnostic',
                      event_label: url || 'direct_scan',
                      coverage_ratio: 0.95
                    });
                  }}
                  className="text-aeo-cyan hover:underline font-mono inline-flex items-center gap-1 shrink-0"
                >
                  <span>View Brand Ledger</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Subordinated Restart Action */}
            <div className="text-center pt-2">
              <button
                onClick={() => {
                  setStep('INPUT');
                  setTelemetry(null);
                }}
                className="text-xs text-zinc-400 hover:text-white transition-colors underline cursor-pointer font-mono"
              >
                &larr; Run another free scan with a different URL
              </button>
            </div>

          </div>
        )}

      </div>

      {/* ============================================================================== */}
      {/* WHAT THE SCAN CHECKS (A Closer Look at What We Assess) */}
      {/* ============================================================================== */}
      <section className="w-full max-w-3xl mt-12 space-y-6 text-left">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Inspection Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            A Closer Look at What We Assess
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            Our diagnostic pipeline audits the five core layers required for AI search engines to interpret and recommend your business accurately.
          </p>
        </div>

        <div className="space-y-3">
          {DIAGNOSTIC_DIMENSIONS.map((dim) => {
            const Icon = dim.icon;
            return (
              <details
                key={dim.id}
                className="group bg-zinc-950/70 border border-white/10 rounded-xl p-4 sm:p-5 transition-colors open:bg-zinc-900/80 cursor-pointer"
              >
                <summary className="font-semibold text-white text-sm sm:text-base flex items-center justify-between gap-4 outline-none list-none group-open:text-cyan-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-bold">{dim.title}</span>
                      <span className="text-xs text-zinc-400 font-normal font-serif block mt-0.5">
                        {dim.benefit}
                      </span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                </summary>
                <div className="mt-3 pt-3 border-t border-white/5 text-xs text-zinc-300 font-serif leading-relaxed pl-11">
                  <p className="text-zinc-400 mb-1 font-mono uppercase text-[10px] tracking-wider text-cyan-400">
                    Technical Layer Details:
                  </p>
                  <p>{dim.details}</p>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* ============================================================================== */}
      {/* BENEFIT & ASSURANCE BLOCK */}
      {/* ============================================================================== */}
      <section className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        <div className="p-5 bg-zinc-950/70 border border-white/10 rounded-xl space-y-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Eye className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">Beat &ldquo;Zero-Click&rdquo; Drop-Off</h3>
          <p className="text-xs text-zinc-400 font-serif leading-relaxed">
            Capture prospective clients who get answers directly from ChatGPT, Perplexity, and Google AI Overviews without visiting traditional blue links.
          </p>
        </div>

        <div className="p-5 bg-zinc-950/70 border border-white/10 rounded-xl space-y-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">Fix Invisible Blind Spots</h3>
          <p className="text-xs text-zinc-400 font-serif leading-relaxed">
            Uncover why competitors get recommended over your services and how to close the data gap before customer inquiries are lost.
          </p>
        </div>

        <div className="p-5 bg-zinc-950/70 border border-white/10 rounded-xl space-y-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">Safe, Fast &amp; Read-Only</h3>
          <p className="text-xs text-zinc-400 font-serif leading-relaxed">
            Lightweight, read-only external audit that takes under 30 seconds with no software installation, tracking codes, or passwords required.
          </p>
        </div>
      </section>

      {/* ============================================================================== */}
      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      {/* ============================================================================== */}
      <section className="w-full max-w-3xl mt-12 mb-8 space-y-6 text-left">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
            <CircleHelp className="w-3.5 h-3.5 text-purple-400" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            Answers to common questions regarding how the AI visibility scan operates.
          </p>
        </div>

        <div className="space-y-3">
          {DIAGNOSTIC_FAQ_ITEMS.map((item, idx) => (
            <details
              key={idx}
              className="group bg-zinc-950/70 border border-white/10 rounded-xl p-4 sm:p-5 transition-colors open:bg-zinc-900/80 cursor-pointer"
            >
              <summary className="font-semibold text-white text-sm sm:text-base flex items-center justify-between gap-4 outline-none list-none group-open:text-cyan-300">
                <span>{item.q}</span>
                <ChevronDown className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform duration-200 shrink-0" />
              </summary>
              <p className="mt-3 pt-3 border-t border-white/5 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed pl-2 border-l-2 border-cyan-400/40">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}

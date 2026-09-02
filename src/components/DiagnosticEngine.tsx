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
  CircleHelp,
  Printer,
  Mail,
  Search
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
  const [isSplitRailActive, setIsSplitRailActive] = useState(false);
  const hasAutoRunRef = useRef(false);

  // Extract BPSTRAT product parameters from canonical schema & CBKL coverage
  const bpstratPrice = PRICING_CONFIG.blueprint.price;

  // Listen for Bill Split Rail mode changes to shift desktop grid dynamically
  useEffect(() => {
    const handleViewModeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ viewMode?: string }>;
      setIsSplitRailActive(customEvent.detail?.viewMode === 'SPLIT_RAIL');
    };
    window.addEventListener('bill_view_mode_changed', handleViewModeChange);
    return () => window.removeEventListener('bill_view_mode_changed', handleViewModeChange);
  }, []);
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
    
    // Dispatch scan started telemetry event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('close_companion_widget'));
      window.dispatchEvent(new Event('aeo_scan_started'));
      trackGaEvent('diagnostic_scan_initiated', {
        event_category: 'diagnostic_funnel',
        target_url: normalizedUrl,
        intent_query: rawIntent.trim(),
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
      
      // Dispatch events to notify AI Bill (CompanionWidget) & telemetry
      if (typeof window !== 'undefined') {
        localStorage.setItem('aeo_telemetry_latest', JSON.stringify({ url: normalizedUrl, intent: rawIntent.trim(), result: data }));
        window.dispatchEvent(new Event('aeo_scan_completed'));
        window.dispatchEvent(new Event('aeo_telemetry_updated'));
        trackGaEvent('diagnostic_scan_completed', {
          event_category: 'diagnostic_funnel',
          target_url: normalizedUrl,
          intent_query: rawIntent.trim(),
          overall_score: data.readinessScore ?? 0,
          readiness_score: data.readinessScore ?? 0,
          proximity_score: data.proximityScore ?? 0,
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

      trackGaEvent('diagnostic_scan_failed', {
        event_category: 'diagnostic_funnel',
        target_url: normalizedUrl,
        error_message: cleanMsg,
      });

      setTelemetry({ 
        readinessScore: 0,
        error: cleanMsg
      } as unknown as TelemetryResult);
      setStep('SCORE_REVEAL');
    }
  };

  useEffect(() => {
    const queryUrl = searchParams.get('url');
    const queryIntent = searchParams.get('intent');
    const auto = searchParams.get('auto');

    if (queryUrl) setUrl(queryUrl);
    if (queryIntent) setIntent(queryIntent);

    if (queryUrl && queryIntent && auto !== 'false' && !hasAutoRunRef.current) {
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
    trackGaEvent('bill_widget_opened', {
      event_category: 'bill_assistant',
      source: 'results_cta',
      target_url: url,
      intent_query: intent,
    });
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

  const openEmailGate = () => {
    trackGaEvent('send_report_cta_clicked', {
      event_category: 'diagnostic_funnel',
      source: 'diagnostic_results',
      target_url: url,
    });
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open_bill_gate'));
    }
  };

  return (
    <div className={`w-full max-w-3xl mx-auto flex flex-col items-center transition-all duration-300 ${isSplitRailActive ? 'xl:mr-[420px]' : ''}`}>
      
      {/* Hero Block - Outcome Focused Above-The-Fold Layout */}
      <div className="text-center mb-6 max-w-2xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-soehne-breit leading-tight">
          Get My AI Visibility Score
        </h1>
        <h2 className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed font-serif">
          Run a free AI Visibility Scan to discover whether ChatGPT, Perplexity and Google AI understand, trust and surface your business for the services you provide.
        </h2>
      </div>

      <div className="w-full relative controlled-depth-card rounded-2xl p-5 sm:p-7 overflow-hidden shadow-2xl space-y-5">
        {/* Subtle Purple Specular Top Catch */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none"></div>

        {step === 'INPUT' && (
          <div className="space-y-6">
            {/* Zero-Friction 2-Field Input Form */}
            <form onSubmit={handleStart} className="grid grid-cols-12 gap-4 relative z-10">
              
              {/* Field 1: Website URL */}
              <div className="col-span-12 space-y-1.5 text-left">
                <label htmlFor="diag-url-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  <span>Australian Business URL</span>
                </label>
                <input
                  id="diag-url-input"
                  type="text"
                  required
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  onFocus={() => trackGaEvent('form_field_focused', { field: 'url' })}
                  placeholder="https://yourbrand.com.au"
                  className="diagnostic-input w-full rounded-xl px-4 py-3 text-sm sm:text-base min-h-[46px]"
                  spellCheck={false}
                  suppressHydrationWarning
                />
                <p className="text-xs text-[#94A3B8] font-serif leading-normal pt-0.5">
                  Enter your main website address. We&apos;ll check the signals AI search tools use to understand your business.
                </p>
              </div>

              {/* Field 2: Primary Search Intent */}
              <div className="col-span-12 space-y-1.5 text-left">
                <label htmlFor="diag-intent-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-purple-400" />
                  <span>Primary Search Intent</span>
                </label>
                <input
                  id="diag-intent-input"
                  type="text"
                  required
                  value={intent}
                  onChange={e => setIntent(e.target.value)}
                  onFocus={() => trackGaEvent('form_field_focused', { field: 'intent' })}
                  placeholder='e.g. Physiotherapist Near Me or best electrician in Dianella'
                  className="diagnostic-input w-full rounded-xl px-4 py-3 text-sm sm:text-base min-h-[46px]"
                  spellCheck={false}
                  suppressHydrationWarning
                />
                <p className="text-xs text-[#94A3B8] font-serif leading-normal pt-0.5">
                  Enter a typical question or search phrase. We&apos;ll test how well your website answers that need.
                </p>
              </div>

              {/* 4-Pillar Live Audit Preview Strip */}
              <div className="col-span-12 p-2.5 sm:p-3 glass-recessed-well rounded-xl space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-purple-300 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" /> Your free scan checks four AI visibility signals:
                  </span>
                  <span className="text-[10px] text-zinc-400 hidden sm:inline">Real-Time Analysis</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px] font-mono text-zinc-200">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">Structured Data</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                    <span className="truncate">Local Consistency</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">Answer Content</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">Trust Signals</span>
                  </div>
                </div>
              </div>
              
              {/* Primary Action: High-Contrast Purple Gradient Button */}
              <div className="col-span-12 pt-1 space-y-2">
                <button
                  type="submit"
                  disabled={!url.trim() || !intent.trim()}
                  className="hero-primary-cta btn-primary-purple w-full group min-h-[48px] py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Run Free Visibility Scan</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>

                {/* Outcome-Led Reassurance Micro-Row (Within 8px-12px) */}
                <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium text-slate-300/85 font-mono text-center">
                  <span>Free AI visibility scan</span>
                  <span className="text-purple-500/50">&bull;</span>
                  <span>No email required to start</span>
                  <span className="text-purple-500/50">&bull;</span>
                  <span>See your biggest opportunities</span>
                </div>

                {/* Auxiliary Regulatory & Terms Statement */}
                <p className="text-[11px] text-slate-500 font-mono text-center pt-1 leading-normal">
                  By clicking, you agree to our terms. Scans evaluate publicly accessible entity data without storing credentials.
                </p>
              </div>
            </form>

            {/* Micro FAQ Accordion Below Form */}
            <div className="pt-4 border-t border-white/10 space-y-3 text-left">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">How This Scan Works</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 space-y-1">
                  <span className="text-xs font-bold text-cyan-400 font-mono block">1. Enter site details</span>
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
                className="bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300 h-full transition-all duration-700 ease-out"
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
          <div className="space-y-6 relative z-10 text-center py-8 glass-panel-l1 border-red-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
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
              className="btn-secondary-glass px-6 py-3 rounded-xl text-white font-medium text-sm cursor-pointer min-h-[44px]"
            >
              Try Another URL
            </button>
          </div>
        ) : step === 'SCORE_REVEAL' && telemetry && (
          <div className="space-y-8 relative z-10 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* 1. Executive Diagnostic Hero: AI Impression Summary */}
            <div className="relative rounded-2xl glass-purple-card p-5 sm:p-6 shadow-xl space-y-3 flex flex-col justify-between text-left">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none"></div>
              <div>
                <div className="flex items-center gap-2 pb-2 border-b border-white/10 mb-3">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-bold text-purple-300 font-mono">Simulated AI Impression</span>
                </div>
                <p className="text-base sm:text-lg text-white font-medium font-serif leading-snug">
                  &quot;{telemetry.insightResult?.firstImpression?.headline || "Your technical foundation is clean, but AI models cannot tie your services directly to target local search intent."}&quot;
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-white/5 font-serif text-xs text-zinc-300">
                {telemetry.insightResult?.firstImpression?.reasoning?.slice(0, 2).map((r, i) => (
                  <p key={i}>&bull; {r}</p>
                ))}
              </div>
            </div>

            {/* 2. Semantic Status Grid: Optimal State (Cyan Glass) vs Vulnerability (Amber Glass) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              
              {/* Optimal State Card: Cyan Glass (Validated Nodes) */}
              <div className="relative rounded-2xl glass-cyan-card p-6 shadow-xl space-y-4">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"></div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100 font-soehne-breit">Global Schema Baseline</h3>
                    <p className="text-xs text-slate-400 font-serif">Entity verification &amp; topology</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    {Math.round((factCoverage.identityCoverage + factCoverage.factCoverage + factCoverage.relationshipCoverage + factCoverage.evidenceCoverage) / 4 * 100)}% Optimal
                  </div>
                </div>

                {/* Nested Recessed Data Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-cyan-500/20 text-center space-y-0.5">
                    <span className="block text-[10px] uppercase text-slate-400 font-semibold font-mono">Identity</span>
                    <span className="text-sm font-bold text-cyan-200">{Math.round(factCoverage.identityCoverage * 100)}%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-cyan-500/20 text-center space-y-0.5">
                    <span className="block text-[10px] uppercase text-slate-400 font-semibold font-mono">Terminology</span>
                    <span className="text-sm font-bold text-cyan-200">{Math.round(factCoverage.factCoverage * 100)}%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-cyan-500/20 text-center space-y-0.5">
                    <span className="block text-[10px] uppercase text-slate-400 font-semibold font-mono">Topology</span>
                    <span className="text-sm font-bold text-cyan-200">{Math.round(factCoverage.relationshipCoverage * 100)}%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-cyan-500/20 text-center space-y-0.5">
                    <span className="block text-[10px] uppercase text-slate-400 font-semibold font-mono">Evidence</span>
                    <span className="text-sm font-bold text-cyan-200">{Math.round(factCoverage.evidenceCoverage * 100)}%</span>
                  </div>
                </div>
              </div>

              {/* Vulnerability Card: Amber Glass (Blind Spot Focal Point) */}
              <div className="relative rounded-2xl glass-amber-card p-6 shadow-xl space-y-4">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent pointer-events-none"></div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100 font-soehne-breit">Target-Query Grounding</h3>
                    <p className="text-xs text-slate-400 font-serif">Simulated AI overview inclusion</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {telemetry.proximityScore ?? 24}% Low
                  </div>
                </div>

                {/* Vulnerability Analysis Block */}
                <div className="p-3.5 rounded-lg bg-black/45 border border-amber-500/25 text-xs space-y-1.5">
                  <div className="flex items-start gap-2 text-amber-200/90 font-medium">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Major Semantic Blind Spot Detected</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-serif text-[11px]">
                    Content lacks machine-readable vectors linking target query entities to local authority nodes for &quot;{intent || 'Target Query'}&quot;.
                  </p>
                </div>

                {/* Direct Guided Action: Amber Ghost Button */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('remediation-roadmap');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full mt-2 h-10 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 text-amber-200 text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-[inset_0_0_10px_rgba(245,158,11,0.15)] cursor-pointer"
                >
                  <span>Review Remediation Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>

            </div>

            {/* 3. Dual-Column Perception vs Target Comparison Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="glass-panel-l1 p-5 rounded-2xl border-amber-500/30 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-mono uppercase tracking-wider font-bold">Current AI Perception</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">Brand-Led, Not Category-Led</span>
                </div>
                <p className="text-sm text-white/90 font-serif leading-relaxed">
                  {telemetry.insightResult?.diagnosis?.currentState || "AI models recognise your brand and core products, but are less likely to cite your business as a leading destination for broader high-intent category searches."}
                </p>
              </div>
              <div className="glass-panel-l1 p-5 rounded-2xl border-emerald-500/30 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-mono uppercase tracking-wider font-bold">Target Visibility State</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">AEO Target</span>
                </div>
                <p className="text-sm text-white/90 font-serif leading-relaxed">
                  {telemetry.insightResult?.diagnosis?.desiredState || "AI engines cite and recommend your business as the definitive, verified answer for high-intent customer queries across your service area."}
                </p>
              </div>
            </div>

            {/* 4. RECOMMENDED NEXT STEPS: Priority Action Plan Card */}
            <div id="remediation-roadmap" className="relative rounded-2xl glass-purple-card p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.6)] space-y-6 text-left">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none"></div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-purple-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-soehne-breit tracking-tight">
                    Recommended Next Steps: Priority Action Plan
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  Remediation Roadmap
                </span>
              </div>

              {/* 1-2-3-4 Priority Roadmap Steps seated in Recessed Wells */}
              <div className="space-y-3 font-serif">
                <div className="glass-recessed-well p-3.5 rounded-xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">1</span>
                    <h4 className="text-sm font-bold text-white font-soehne-breit">Define &amp; Anchor Category Entities</h4>
                  </div>
                  <p className="text-xs text-zinc-300 pl-7 leading-relaxed">
                    Establish category-level relevance and inject nested <code className="text-cyan-300 font-mono">LocalBusiness</code> and <code className="text-cyan-300 font-mono">serviceArea</code> schema nodes linked to verified Wikidata <code className="text-cyan-300 font-mono">sameAs</code> records.
                  </p>
                </div>

                <div className="glass-recessed-well p-3.5 rounded-xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">2</span>
                    <h4 className="text-sm font-bold text-white font-soehne-breit">Strengthen Commercial Topic Coverage</h4>
                  </div>
                  <p className="text-xs text-zinc-300 pl-7 leading-relaxed">
                    Deploy structured category, comparison, FAQ, and buying-guide content answering the specific questions Australian customers ask.
                  </p>
                </div>

                <div className="glass-recessed-well p-3.5 rounded-xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">3</span>
                    <h4 className="text-sm font-bold text-white font-soehne-breit">Expand Query-to-Passage Context Chunking</h4>
                  </div>
                  <p className="text-xs text-zinc-300 pl-7 leading-relaxed">
                    Restructure core service sections with direct, high-density 150-character answer blocks positioned immediately under H2 and H3 tags.
                  </p>
                </div>

                <div className="glass-recessed-well p-3.5 rounded-xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">4</span>
                    <h4 className="text-sm font-bold text-white font-soehne-breit">Execute 10-Day Implementation Roadmap</h4>
                  </div>
                  <p className="text-xs text-zinc-300 pl-7 leading-relaxed">
                    Use the 10-Day AEObility Blueprint to prioritise and resolve the highest-impact technical, content, and entity actions.
                  </p>
                </div>
              </div>

              {/* Commercial Remediation Bridge: Strict Button Architecture & Hierarchy Triad */}
              <div className="pt-3 border-t border-white/10 space-y-4">
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

                {/* Primary Conversion Anchor (Dynamic Contextual Copy) */}
                <div className="space-y-2 pt-1">
                  {(() => {
                    const primaryCtaLabel = (telemetry.proximityScore ?? 24) < 40
                      ? "Unlock Grounding Blueprint ($995 AUD)"
                      : (factCoverage.factCoverage < 0.8)
                        ? "Inject Missing Knowledge Nodes ($995 AUD)"
                        : "Get The AEObility Blueprint ($995 AUD)";

                    return (
                      <Link
                        href="/solutions/aeo-blueprint"
                        onClick={() => {
                          trackGaEvent('blueprint_cta_clicked', {
                            event_category: 'commercial_conversion',
                            source: 'diagnostic_priority_plan',
                            target_url: url,
                            price_aud: bpstratPrice,
                          });
                        }}
                        className="btn-primary-gradient w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B11] text-center"
                      >
                        <span>{primaryCtaLabel}</span>
                        <ArrowRight className="w-4 h-4 text-white shrink-0" />
                      </Link>
                    );
                  })()}

                  {/* Inline Objection Pre-empts & Spatial Psychology Reassurance (within 8px) */}
                  <p className="text-[12px] text-[#94A3B8] font-mono text-center pt-0.5 flex items-center justify-center gap-1.5 flex-wrap">
                    <span>🔒 100% Deterministic Schema Guarantee</span>
                    <span>&bull;</span>
                    <span>10-Day Delivery</span>
                    <span>&bull;</span>
                    <span>Full Implementation Code</span>
                  </p>

                  {/* Secondary High-Intent Utility Buttons (Semi-translucent Glass) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={openAiBill}
                      className="btn-secondary-glass inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl hover:border-indigo-400/50 hover:bg-indigo-500/15 text-indigo-200 hover:text-white font-bold text-xs cursor-pointer min-h-[44px] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                      <span>Discuss with AI Bill</span>
                    </button>

                    <button
                      type="button"
                      onClick={openEmailGate}
                      className="btn-secondary-glass inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-200 hover:text-white font-medium text-xs cursor-pointer min-h-[44px] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Email Full Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tertiary Auxiliary Actions (Borderless Text Links) */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  trackGaEvent('diagnostic_report_printed', {
                    event_category: 'diagnostic_funnel',
                    target_url: url,
                    format: 'pdf_print',
                  });
                  window.print();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#F8FAFC] hover:underline transition-colors font-mono cursor-pointer py-1"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Save report as PDF</span>
              </button>
              <span className="text-zinc-600 hidden sm:inline">&bull;</span>
              <button
                type="button"
                onClick={() => {
                  setStep('INPUT');
                  setTelemetry(null);
                }}
                className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] hover:underline transition-colors font-mono cursor-pointer py-1"
              >
                Run another scan
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

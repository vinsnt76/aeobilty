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
    a: "You receive an instant on-screen diagnostic report showing your 0–100 AI Readiness Score, simulated AI impression, and factual grounding breakdown. You can also chat directly with AI Bill to explore specific remediation steps."
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
    title: "1. Technical & Ingestion Structure",
    icon: Globe,
    badge: "Layer 01",
    benefit: "Checks if AI search crawlers can read your pages without hitting structural roadblocks.",
    details: "Inspects raw HTML DOM structures, analyzes text-to-code density, verifies heading hierarchies (H1/H2/H3), evaluates Core Web Vitals (LCP/CLS), and checks robots.txt access rights for major LLM scraping bots (GPTBot, ClaudeBot, PerplexityBot)."
  },
  {
    id: "dim-2",
    title: "2. Entity & Local Clarity",
    icon: Compass,
    badge: "Layer 02",
    benefit: "Verifies that your business name, address, phone number, and service areas match consistently across the web.",
    details: "Audits NAP consistency, geographic coordinate grounding, and regional service boundary signals against external map nodes and semantic knowledge graphs to detect regional footprint gaps."
  },
  {
    id: "dim-3",
    title: "3. Structured Data Coverage",
    icon: FileCode,
    badge: "Layer 03",
    benefit: "Reviews the hidden code that translates your service list into direct facts for machine reading.",
    details: "Audits and validates nested JSON-LD schema graphs, verifying interconnected relationships between @type: Organization, LocalBusiness, and Service arrays with Wikidata sameAs entity disambiguation."
  },
  {
    id: "dim-4",
    title: "4. Answer Readiness & RAG Survival",
    icon: Layers,
    badge: "Layer 04",
    benefit: "Tests how easily AI tools can extract short, direct text blocks to answer buyer questions.",
    details: "Runs a simulated Retrieval-Augmented Generation (RAG) loop to test how passages survive token context limits, sentence boundary chunking, and transformer positional attention bias (the opening 150 characters under H2/H3 headings)."
  },
  {
    id: "dim-5",
    title: "5. Trust & Citation Readiness",
    icon: ShieldCheck,
    badge: "Layer 05",
    benefit: "Checks for corporate credentials and verified authorship links that prove your business is a trusted source.",
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

    // Start background fetch
    const fetchPromise = fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: normalizedUrl, intent: rawIntent.trim() }),
    }).then(res => res.json());

    // Visual progress for user feedback
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise(r => setTimeout(r, 900 + Math.random() * 500));
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

  const openAiBill = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open_bill_with_query', {
        detail: {
          query: `Analyse diagnostic scan for ${url} (Search Query: "${intent}")`,
          mode: 'telemetry'
        }
      }));
      window.dispatchEvent(new Event('open_bill_drawer'));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Hero Block */}
      <div className="text-center mb-10 max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-soehne-breit leading-tight">
          See How Your Business Appears Across ChatGPT, Perplexity &amp; Google AI
        </h1>
        <h2 className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed font-serif">
          Check how your business is understood, cited, and recommended across ChatGPT, Perplexity, and Google AI.
        </h2>
      </div>

      <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl space-y-8">
        
        {step === 'INPUT' && (
          <div className="space-y-8">
            {/* Zero-Friction 2-Field Input Form */}
            <form onSubmit={handleStart} className="grid grid-cols-12 gap-5 relative z-10">
              
              {/* Field 1: Website URL */}
              <div className="col-span-12 space-y-1.5">
                <label htmlFor="diag-url-input" className="block text-sm font-semibold text-white">
                  Website URL
                </label>
                <input
                  id="diag-url-input"
                  type="text"
                  required
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="e.g. yourbusiness.com.au"
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm min-h-[48px]"
                />
                <p className="text-xs text-zinc-400 font-serif leading-normal pt-0.5">
                  Enter your domain (with or without https://). Checks structured data, location signals, and service formatting.
                </p>
              </div>

              {/* Field 2: Primary Customer Search Query */}
              <div className="col-span-12 space-y-1.5">
                <label htmlFor="diag-intent-input" className="block text-sm font-semibold text-white">
                  Primary customer search query
                </label>
                <input
                  id="diag-intent-input"
                  type="text"
                  required
                  value={intent}
                  onChange={e => setIntent(e.target.value)}
                  placeholder='e.g. "solar installer Perth"'
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm min-h-[48px]"
                />
                <p className="text-xs text-zinc-400 font-serif leading-normal pt-0.5">
                  See if AI tools recommend your business when a local customer asks this exact question.
                </p>
              </div>

              {/* 4-Pillar Live Audit Preview Strip (Placed ABOVE CTA) */}
              <div className="col-span-12 p-4 bg-zinc-950/70 border border-white/10 rounded-xl space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" /> What This Scan Audits:
                  </span>
                  <span className="text-[10px] text-zinc-500 hidden sm:inline">4 Real-Time Diagnostic Dimensions</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-zinc-300">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Schema Markup</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                    <span>AI Citation Match</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Local Entity Graph</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>Answer Formatting</span>
                  </div>
                </div>
              </div>
              
              {/* Submission Action & Tightly Coupled Trust Stack */}
              <div className="col-span-12 pt-1 space-y-3">
                <button
                  type="submit"
                  className="w-full group min-h-[48px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-zinc-950 font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-zinc-950" />
                  <span>Run Free AI Visibility Scan</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Law of Proximity Trust Anchor with Mobile Breakpoint Clearance */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-zinc-400 font-mono text-center pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Instant on-screen report
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> 100% Free &bull; No credit card
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Australian data
                  </span>
                </div>
              </div>
            </form>

            {/* "What Happens Next" 3-Step Strip */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block text-center">
                What Happens Next
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
                <div className="bg-black/40 border border-white/5 rounded-xl p-4 space-y-1.5">
                  <span className="text-xs font-bold text-cyan-400 font-mono block">1. Enter Business URL</span>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">Add your website domain and primary local search phrase.</p>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-xl p-4 space-y-1.5">
                  <span className="text-xs font-bold text-purple-400 font-mono block">2. Live Signal Audit</span>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">We evaluate your schema, citations, and content formatting to test how LLMs extract your answers.</p>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-xl p-4 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-400 font-mono block">3. Instant On-Screen Report</span>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">Get your instant visibility score, citation gaps, and immediate action items on-screen.</p>
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
              
              {/* Simulated AI Impression Summary */}
              <div className="max-w-xl mx-auto bg-black/40 border border-aeo-cyan/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,205,216,0.1)]">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-aeo-cyan" />
                  <h3 className="text-xs uppercase tracking-wider font-bold text-aeo-cyan font-mono">Simulated AI Impression</h3>
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

              {/* Chat with AI Bill Interactive Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={openAiBill}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)] cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-black" />
                  <span>Talk to AI Bill About Findings</span>
                </button>
              </div>

            </div>

            {/* Brand Fact Coverage Ratio Card */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 shadow-xl space-y-4 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-aeo-cyan" />
                  <h3 className="text-base font-bold text-white font-soehne-breit">
                    Canonical Fact Grounding &amp; Coverage
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified CBKL Model
                </span>
              </div>

              <p className="text-xs text-white/70 font-serif leading-relaxed">
                Measures the mathematical variance between declared brand facts (corporate identities, services, pricing matrices) and what conversational retrieval engines observe during active query simulation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-mono block">Identity</span>
                  <span className="text-lg font-bold text-white">
                    {Math.round(factCoverage.identityCoverage * 100)}%
                  </span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-mono block">Terminology</span>
                  <span className="text-lg font-bold text-aeo-cyan">
                    {Math.round(factCoverage.factCoverage * 100)}%
                  </span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-mono block">Topology</span>
                  <span className="text-lg font-bold text-aeo-purple">
                    {Math.round(factCoverage.relationshipCoverage * 100)}%
                  </span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-mono block">Evidence</span>
                  <span className="text-lg font-bold text-emerald-400">
                    {Math.round(factCoverage.evidenceCoverage * 100)}%
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-zinc-400 border-t border-white/5">
                <span>Verification Authority:</span>
                <Link
                  href="/brand-facts"
                  onClick={() => {
                    trackGaEvent('view_fact_coverage_matrix', {
                      event_category: 'Diagnostic',
                      event_label: url || 'direct_scan',
                      coverage_ratio: 0.95
                    });
                  }}
                  className="text-aeo-cyan hover:underline font-mono inline-flex items-center gap-1"
                >
                  <span>View Canonical Brand Ledger</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="pt-2 text-[11px] text-zinc-400 font-serif border-t border-white/5 leading-relaxed">
                If your telemetry scan flags a critical delta between your expected and observed parameters, explore our strategic overview on how to <Link href="/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps" className="text-aeo-cyan hover:underline font-medium">fix AI brand hallucinations and evidence gaps</Link> to stabilise your brand&apos;s data graph.
              </div>
            </div>

            {/* Strategic Blueprint Upsell Block (Placed Below Workflow / Results) */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-aeo-cyan" />
                  <h3 className="text-lg font-bold text-white">The AEObility Blueprint</h3>
                  <span className="text-xs font-mono text-cyan-300 font-bold bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                    ${bpstratPrice} AUD ex. GST
                  </span>
                </div>
                <p className="text-xs text-white/70 font-serif leading-relaxed">
                  Our background telemetry scan tracks real-time vector proximity data to determine your platform&apos;s exact machine readability score. If structural gaps are detected across your entity boundaries, they can be immediately refactored via our fixed-price <Link href="/solutions" className="text-cyan-400 font-semibold hover:underline">AEO packages and pricing</Link> execution sprints.
                </p>
              </div>
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm hover:bg-zinc-800 cursor-pointer"
              >
                <span>View Full Blueprint</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  setStep('INPUT');
                  setTelemetry(null);
                }}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors border border-white/10 cursor-pointer font-mono"
              >
                Run Another Free Scan
              </button>
            </div>

          </div>
        )}

      </div>

      {/* ============================================================================== */}
      {/* WHAT THE SCAN CHECKS (5 Diagnostic Dimensions Accordion) */}
      {/* ============================================================================== */}
      <section className="w-full max-w-3xl mt-12 space-y-6 text-left">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Inspection Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            What the Scan Checks: The Five Dimensions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            Our diagnostic pipeline audits five core layers required for generative answer engines to extract and cite your business accurately.
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

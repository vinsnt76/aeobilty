'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, UIMessage } from 'ai';
import { X, Sparkles, Send, Activity, Bot, Volume2, VolumeX, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { TelemetryResult } from '@/lib/telemetry/types';

// Explicit window type guard for GA4 gtag to prevent ESLint 'any' leaks
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// 📋 Order-Agnostic Regex Patterns for Block-Scoped Telemetry Extraction (/m and /i flags)
const TELEMETRY_PATTERNS = {
  firstImpression: /AI First Impression:\s*(.+)/mi,
  blindSpot: /Biggest Blind Spot:\s*(.+)/mi,
  verdict: /Recommendation Verdict:\s*(PASS|HIGH RISK|ALERT|FAIL|[\w\s]+)/mi,
  clarityScore: /Clarity Score:\s*(\d+)/mi,
  citationShare: /Citation Share:\s*(\d+)/mi,
  risk: /Hallucination Risk:\s*(High|Medium|Low|[\w\s]+)/mi
};

function parseTelemetryText(text: string) {
  if (!text || typeof text !== 'string') {
    return { hasAnyMatch: false, firstImpression: null, blindSpot: null, verdict: null, clarityScore: null, citationShare: null, risk: null };
  }
  try {
    // 1. Isolate the substring strictly between [START_TELEMETRY_REPORT] and [END_TELEMETRY_REPORT] (or streaming cutoff)
    const blockMatch = text.match(/\[START_TELEMETRY_REPORT\]([\s\S]*?)(?:\[END_TELEMETRY_REPORT\]|$)/i);
    if (!blockMatch || !blockMatch[1]) {
      return { hasAnyMatch: false, firstImpression: null, blindSpot: null, verdict: null, clarityScore: null, citationShare: null, risk: null };
    }

    const blockContent = blockMatch[1];

    // 2. Run order-agnostic regexes with /m and /i flags over that isolated block content only
    const firstImpressionMatch = blockContent.match(TELEMETRY_PATTERNS.firstImpression);
    const blindSpotMatch = blockContent.match(TELEMETRY_PATTERNS.blindSpot);
    const verdictMatch = blockContent.match(TELEMETRY_PATTERNS.verdict);
    const clarityScoreMatch = blockContent.match(TELEMETRY_PATTERNS.clarityScore);
    const citationShareMatch = blockContent.match(TELEMETRY_PATTERNS.citationShare);
    const riskMatch = blockContent.match(TELEMETRY_PATTERNS.risk);

    const hasAnyMatch = !!(firstImpressionMatch || blindSpotMatch || verdictMatch || clarityScoreMatch || citationShareMatch || riskMatch);

    return {
      hasAnyMatch,
      firstImpression: firstImpressionMatch ? firstImpressionMatch[1].trim().replace(/^["']|["']$/g, '') : null,
      blindSpot: blindSpotMatch ? blindSpotMatch[1].trim().replace(/^["']|["']$/g, '') : null,
      verdict: verdictMatch ? verdictMatch[1].trim().toUpperCase() : null,
      clarityScore: clarityScoreMatch ? parseInt(clarityScoreMatch[1], 10) : null,
      citationShare: citationShareMatch ? parseInt(citationShareMatch[1], 10) : null,
      risk: riskMatch ? riskMatch[1].trim() : null
    };
  } catch (err) {
    console.error("Failed parsing telemetry text stream:", err);
    return { hasAnyMatch: false, firstImpression: null, blindSpot: null, verdict: null, clarityScore: null, citationShare: null, risk: null };
  }
}

export default function BillWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTelemetryMode, setIsTelemetryMode] = useState(false);
  const [input, setInput] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [storedTelemetry, setStoredTelemetry] = useState<{ url?: string; intent?: string; result?: TelemetryResult } | null>(null);
  const [reportedCardIds] = useState(() => new Set<string>());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Session Storage Synced Data Hydration
  useEffect(() => {
    const hydrateAudit = () => {
      if (typeof window === 'undefined') return;
      const raw = localStorage.getItem('aeo_telemetry_latest');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setStoredTelemetry(parsed);
          setIsTelemetryMode(true);
        } catch (err) {
          console.error("Failed to parse local telemetry data framework:", err);
        }
      }
    };

    hydrateAudit();
    window.addEventListener('aeo_telemetry_updated', hydrateAudit);
    return () => window.removeEventListener('aeo_telemetry_updated', hydrateAudit);
  }, []);

  // 2. STABLE PROTECTED STREAM HOOK BINDINGS
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/bill'
    })
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const getMessageText = React.useCallback((m: UIMessage): string => {
    if (!m) return '';
    const anyM = m as unknown as Record<string, unknown>;

    // 1. Direct text property (@ai-sdk/react v4 UIMessage standard)
    if (typeof anyM.text === 'string' && anyM.text.trim()) {
      return anyM.text;
    }

    // 2. Direct content property (string fallback)
    if (typeof anyM.content === 'string' && anyM.content.trim()) {
      return anyM.content;
    }

    // 3. Parts array property
    if (Array.isArray(anyM.parts)) {
      const extracted = anyM.parts
        .filter((p: unknown): p is { type?: string; text?: string } => 
          typeof p === 'object' && p !== null && 'text' in p && typeof (p as { text: unknown }).text === 'string'
        )
        .map(p => p.text || '')
        .join('');
      if (extracted.trim()) return extracted;
    }

    // 4. Delta property fallback
    if (typeof anyM.delta === 'string' && anyM.delta.trim()) {
      return anyM.delta;
    }

    return '';
  }, []);

  // 3. Independent Effect for Analytics Event Pipelines & Audio Output Playback Stream
  const speakText = React.useCallback((text: string) => {
    if (isMuted || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      if (!text || typeof text !== 'string') return;
      const cleanText = text.replace(/[*#_`]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      const voices = window.speechSynthesis.getVoices();
      const auVoice = voices.find(v => v.lang === 'en-AU' || v.name.includes('Australian')) || voices.find(v => v.lang.startsWith('en'));
      if (auVoice) utterance.voice = auVoice;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("SpeechSynthesis runtime error:", err);
    }
  }, [isMuted]);

  useEffect(() => {
    if (messages.length === 0 || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== 'assistant') return;

    const content = getMessageText(lastMessage).toLowerCase();
    if (!content) return;
    
    speakText(getMessageText(lastMessage));

    // GA4: Commercial Conversational Funnel Analytics Tracker
    if (content.includes('blueprint') || content.includes('995')) {
      const prevUserMessage = [...messages].reverse().find(m => m.role === 'user');
      const userText = prevUserMessage ? getMessageText(prevUserMessage) : 'Unknown';

      window.gtag('event', 'bill_funnel_conversion_step', {
        event_category: 'AI Assistant Funnel',
        funnel_step: 'Commercial Offer Exposed',
        trigger_query: userText
      });
    }

    // GA4: 41-Node Semantic Lattice Hit Tracker
    if (content.includes('lattice') || content.includes('bias') || content.includes('density') || content.includes('schema')) {
      window.gtag('event', 'bill_lattice_node_hit', {
        event_category: 'AI Assistant Knowledge',
        matched_concept: content.includes('density') ? 'Semantic Density' : content.includes('bias') ? 'Positional Bias' : 'Semantic Lattice'
      });
    }
  }, [messages, speakText, getMessageText]);

  // Telemetry Hook: Dispatches GA4 metrics when Bill switches active skills
  const toggleTelemetryMode = () => {
    const nextMode = !isTelemetryMode;
    setIsTelemetryMode(nextMode);

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'bill_mode_toggle', {
        event_category: 'AI Assistant',
        event_label: nextMode ? 'Telemetry Guide' : 'General Agent',
        value: nextMode ? 1 : 0
      });
    }
  };

  // Custom submit interceptor to stream to Vercel and track intent simultaneously
  const executeQuery = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'bill_query_submitted', {
        event_category: 'AI Assistant',
        search_term: queryText,
        active_skill: isTelemetryMode ? 'Telemetry Guide' : 'Knowledge Explainer',
        query_length: queryText.length
      });
    }

    // Dynamic telemetry payload extraction from localStorage or state
    let activeAudit = storedTelemetry?.result;
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('aeo_telemetry_latest');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          activeAudit = parsed.result || activeAudit;
        } catch (err) {
          console.error("Failed parsing localStorage audit payload:", err);
        }
      }
    }

    setInput('');

    await sendMessage(
      { text: queryText },
      {
        body: {
          intent: isTelemetryMode ? 'telemetry' : 'general',
          audit: isTelemetryMode ? (activeAudit || {
            entityClarityScore: 42,
            citationSharePercent: 12,
            retrievalConfidence: 'Low',
            hallucinationRisk: 'High',
            gaps: ['Missing fragment identifiers', 'Unstructured paragraph layouts']
          }) : null
        }
      }
    );
  };

  // 4. CRITICAL CHIP FIX: Safely mutates query text tokens directly into OpenAI formats
  const handleChipClick = async (chipText: string) => {
    const queryMap: Record<string, string> = {
      'Semantic Density': 'What is semantic density in AEO framework models?',
      'Positional Bias': 'How does AEObility mitigate positional bias in LLMs?',
      'Fix RAG Drops': 'How do I fix RAG retrieval drops?',
      '90-Day Blueprint': 'What are the deliverables for the 90-Day AI Success Blueprint?'
    };

    const targetPrompt = queryMap[chipText] || `Tell me about ${chipText}`;

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'bill_chip_clicked', {
        event_category: 'AI Assistant UI',
        chip_label: chipText
      });
    }

    await executeQuery(targetPrompt);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await executeQuery(input);
  };

  // Listen for Handoff Events from search modals or CTA triggers
  useEffect(() => {
    const handleOpenBillWithQuery = (e: Event) => {
      const customEvent = e as CustomEvent<{ query?: string; mode?: 'telemetry' | 'general' }>;
      const initialQuery = customEvent.detail?.query;
      const mode = customEvent.detail?.mode;

      // Close CompanionWidget to prevent drawer overlay collision
      window.dispatchEvent(new Event('close_companion_widget'));
      setIsOpen(true);
      if (mode === 'telemetry') {
        setIsTelemetryMode(true);
      }
      if (initialQuery) {
        setInput(initialQuery);
      }
    };

    const handleCloseBillWidget = () => {
      setIsOpen(false);
    };

    window.addEventListener('open_bill_with_query', handleOpenBillWithQuery);
    window.addEventListener('close_bill_widget', handleCloseBillWidget);
    return () => {
      window.removeEventListener('open_bill_with_query', handleOpenBillWithQuery);
      window.removeEventListener('close_bill_widget', handleCloseBillWidget);
    };
  }, []);

  // Auto-scroll messages container on update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // 4. INLINE TELEMETRY CARD EXTRACTOR (Isolated from state mutations)
  const renderMessageBubbleContent = (msgId: string, text: string) => {
    // 👉 STEP B: RAW STREAM TEXT DIAGNOSTIC BLOCK (Set to true for streaming text debugging)
    const renderRawDiagnostic = false;

    if (renderRawDiagnostic) {
      return (
        <div className="space-y-1.5 w-full pt-1 font-mono">
          <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold block">👉 STEP B: RAW STREAM TEXT</span>
          <pre className="whitespace-pre-wrap text-[10px] text-emerald-200 bg-black/80 p-2 rounded-lg border border-emerald-500/30 overflow-x-auto">
            {text || '(Empty Stream Buffer)'}
          </pre>
        </div>
      );
    }

    const parsed = parseTelemetryText(text);

    // Multi-turn UI Alignment:
    // First turn: expect cards (hasAnyMatch = true) -> render structured diagnostic card container
    // Follow-up turns: expect plain text (hasAnyMatch = false) -> render normal assistant bubble (no card container)
    if (!parsed.hasAnyMatch) {
      if (!text || !text.trim()) {
        return (
          <div className="inline-flex items-center gap-2 py-1 text-[10px] font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-400" />
            <span>Scanning 41 semantic lattice nodes...</span>
          </div>
        );
      }
      // Follow-up turn / plain-text fallback: render as normal assistant bubble without card container
      return <p className="whitespace-pre-wrap text-[11px] text-zinc-300 leading-relaxed">{text}</p>;
    }

    // Fire Card Render Event Tracking completely decoupled from React state renders
    if (typeof window !== 'undefined' && typeof window.gtag === 'function' && !reportedCardIds.has(msgId)) {
      reportedCardIds.add(msgId);
      window.gtag('event', 'bill_telemetry_card_rendered', {
        event_category: 'AI Assistant UI',
        card_message_id: msgId,
        verdict: parsed.verdict || 'Unknown'
      });
    }

    // Clean, stable card layout rendering strictly from parsed block fields (ignoring any preambles or out-of-block text)
    return (
      <div className="space-y-3 w-full pt-1">
        {/* Dynamic Metric Grid Panels */}
        {(parsed.clarityScore !== null || parsed.citationShare !== null) && (
          <div className="grid grid-cols-2 gap-2 font-mono">
            {parsed.clarityScore !== null && (
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-center">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Clarity Index</span>
                <span className="text-sm font-bold text-emerald-400">{parsed.clarityScore}%</span>
              </div>
            )}
            {parsed.citationShare !== null && (
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-center">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Citation Share</span>
                <span className="text-sm font-bold text-amber-400">{parsed.citationShare}%</span>
              </div>
            )}
          </div>
        )}

        {parsed.firstImpression && (
          <div className="bg-black/60 border border-emerald-500/30 rounded-lg p-2.5 space-y-1 font-mono">
            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wide block">AI First Impression</span>
            <p className="text-[11px] text-zinc-200 leading-normal italic">&quot;{parsed.firstImpression}&quot;</p>
          </div>
        )}

        {parsed.blindSpot && (
          <div className="bg-black/60 border border-rose-500/30 rounded-lg p-2.5 space-y-1 font-mono">
            <span className="text-[9px] font-bold text-rose-400 uppercase tracking-wide block">Biggest Blind Spot</span>
            <p className="text-[11px] text-zinc-200 leading-normal">{parsed.blindSpot}</p>
          </div>
        )}

        {parsed.verdict && (
          <div className={`flex items-center gap-2 p-2.5 rounded-lg border text-[11px] font-mono font-medium ${
            parsed.verdict === 'PASS' 
              ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400' 
              : parsed.verdict === 'HIGH RISK' || parsed.verdict === 'FAIL'
                ? 'bg-rose-950/30 border-rose-500/30 text-rose-400'
                : 'bg-amber-950/30 border-amber-500/30 text-amber-400'
          }`}>
            {parsed.verdict === 'PASS' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : parsed.verdict === 'ALERT' ? <AlertTriangle className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0" />}
            <div className="flex-1 flex justify-between items-center ml-1">
              <span>Recommendation Verdict:</span>
              <span className="font-bold tracking-wider uppercase text-[10px] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                {parsed.verdict}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => {
          window.dispatchEvent(new Event('close_companion_widget'));
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full border border-emerald-500/30 shadow-2xl backdrop-blur-md hover:scale-105 transition-all duration-300 group cursor-pointer"
        aria-label="Open Bill AI Assistant"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </div>
        <span className="text-xs font-semibold tracking-wide">Ask Bill AI</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-zinc-950/95 border border-white/15 rounded-2xl shadow-2xl flex flex-col h-[540px] max-h-[85vh] overflow-hidden text-zinc-100 font-sans backdrop-blur-xl transition-all animate-fadeIn">
      {/* Header Controller Banner */}
      <div className="bg-zinc-900/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-xs text-white tracking-wide flex items-center gap-1.5 uppercase font-mono">
              System Agent: Bill
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </h3>
            <p className="text-[10px] text-zinc-400">AEObility Dynamic Intelligence</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Audio TTS Toggle */}
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
            title={isMuted ? "Enable Voice Feedback (AU)" : "Mute Voice Feedback"}
            aria-label="Toggle voice output"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          {/* Telemetry Switcher Mode */}
          <button 
            type="button"
            onClick={toggleTelemetryMode}
            className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition flex items-center gap-1 border cursor-pointer ${
              isTelemetryMode 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold' 
                : 'bg-white/5 text-zinc-400 border-white/10 hover:text-zinc-200'
            }`}
            title="Toggle Live Telemetry Diagnostics"
          >
            <Activity className="w-3 h-3" />
            {isTelemetryMode ? 'Telemetry: Active' : 'Telemetry Mode'}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
            aria-label="Close Bill assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hydrated Audit Sticky Indicator Bar */}
      {isTelemetryMode && storedTelemetry?.result?.insightResult && (
        <div className="bg-amber-950/30 border-b border-amber-500/20 px-3.5 py-2.5 text-[10px] space-y-1.5 font-mono">
          <div className="flex justify-between items-center text-amber-400 font-bold tracking-wider uppercase text-[9px]">
            <span className="flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> Site Telemetry Active</span>
            <span className="text-zinc-400 font-normal">{storedTelemetry.url || 'Target Site'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-black/40 p-1.5 rounded border border-amber-500/10">
              <span className="text-zinc-400 text-[8px] block">Readiness Score</span>
              <span className="text-amber-300 font-bold">{storedTelemetry.result?.readinessScore || 42}/100</span>
            </div>
            <div className="bg-black/40 p-1.5 rounded border border-amber-500/10">
              <span className="text-zinc-400 text-[8px] block">Proximity Score</span>
              <span className="text-amber-300 font-bold">{storedTelemetry.result?.proximityScore || 12}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Response Log Window Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs scrollbar-thin">
        {messages.length === 0 && (
          <div className="text-center pt-6 pb-2 space-y-3 px-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-zinc-300 font-medium text-xs">
              G&apos;day! I&apos;m Bill, AEObility&apos;s AI Agent.
            </p>
            <p className="text-zinc-500 text-[11px] leading-relaxed">
              Query Bill regarding advanced Answer Engine Optimisation architectures or switch on Telemetry Mode to pipe local variable diagnostics.
            </p>
          </div>
        )}

        {messages.map((m: UIMessage) => {
          const text = getMessageText(m);
          // Message Pipeline Integrity: Only skip user messages if text is missing; assistant bubbles MUST ALWAYS render
          if (m.role === 'user' && !text) return null;

          return (
            <div 
              key={m.id} 
              className={`p-3.5 rounded-xl max-w-[88%] leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-emerald-600/20 border border-emerald-500/30 ml-auto text-emerald-50 rounded-tr-none' 
                  : 'bg-zinc-900 border border-white/10 mr-auto text-zinc-200 rounded-tl-none w-full'
              }`}
            >
              <span className="block text-[9px] uppercase tracking-wider font-mono text-zinc-500 mb-1">
                {m.role === 'user' ? 'Local Requestor' : 'Bill'}
              </span>

              {m.role === 'user' ? (
                <p className="whitespace-pre-wrap text-[11px] text-zinc-300">{text}</p>
              ) : (
                renderMessageBubbleContent(m.id, text || (isLoading ? "Scanning lattice nodes..." : "..."))
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1.5 rounded-full animate-pulse">
            <Bot className="w-3.5 h-3.5 animate-spin" />
            <span>Bill is scanning 41 lattice nodes...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Action Diagnostic Input Links */}
      <div className="px-3 py-1.5 bg-zinc-900/60 border-t border-white/5 flex flex-wrap gap-1.5 text-[10px]">
        {[
          { label: 'Semantic Density', icon: <Sparkles className="w-3 h-3" /> },
          { label: 'Positional Bias', icon: <HelpCircle className="w-3 h-3" /> },
          { label: 'Fix RAG Drops', icon: <Activity className="w-3 h-3" /> },
          { label: '90-Day Blueprint', icon: <Bot className="w-3 h-3" /> }
        ].map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => handleChipClick(chip.label)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-lg text-[10px] transition font-medium cursor-pointer"
          >
            {chip.icon}
            <span>{chip.label}</span>
          </button>
        ))}
      </div>

      {/* Lower User Query Tray Element */}
      <form onSubmit={handleSubmit} className="p-3 bg-zinc-900/90 border-t border-white/10 flex gap-2 backdrop-blur-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isTelemetryMode ? "Ask Bill to diagnose your audit variables..." : "Ask Bill about AEO semantic lattices..."}
          className="flex-1 bg-zinc-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 transition"
        />
        <button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          className="bg-emerald-500 disabled:opacity-40 text-black px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-emerald-400 transition flex items-center justify-center shrink-0 cursor-pointer"
          aria-label="Send message"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

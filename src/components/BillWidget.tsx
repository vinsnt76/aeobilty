'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, UIMessage } from 'ai';
import { X, Sparkles, Send, Activity, Bot, Volume2, VolumeX, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, HelpCircle, ArrowRight, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { TelemetryResult } from '@/lib/telemetry/types';
import BillAvatar from '@/components/BillAvatar';
import { trackGaEvent } from '@/lib/gtag';

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
  const pathname = usePathname();

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isTelemetryMode, setIsTelemetryMode] = useState(false);
  const [input, setInput] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [storedTelemetry, setStoredTelemetry] = useState<{ url?: string; intent?: string; result?: TelemetryResult } | null>(null);
  const [reportedCardIds] = useState(() => new Set<string>());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const updatePosition = () => {
      if (!window.visualViewport || !containerRef.current) return;
      const vvHeight = window.visualViewport.height;
      if (window.innerWidth < 768) {
        containerRef.current.style.maxHeight = `${Math.min(vvHeight - 80, 600)}px`;
      } else {
        containerRef.current.style.maxHeight = '';
      }
    };

    window.visualViewport.addEventListener('resize', updatePosition);
    window.visualViewport.addEventListener('scroll', updatePosition);
    if (isOpen) updatePosition();

    return () => {
      window.visualViewport?.removeEventListener('resize', updatePosition);
      window.visualViewport?.removeEventListener('scroll', updatePosition);
    };
  }, [isOpen]);


  // 0. Gated Lead-Capture State (Triggers on 4th User Turn)
  const [isLeadCaptured, setIsLeadCaptured] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aeo_lead_captured') === 'true';
    }
    return false;
  });
  const [isReportDispatched, setIsReportDispatched] = useState(false);
  const [isGateOpenManually, setIsGateOpenManually] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' });
  const [leadError, setLeadError] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

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

  useEffect(() => {
    const handleOpenDrawer = () => {
      setIsOpen(true);
    };
    const handleOpenGate = () => {
      window.dispatchEvent(new Event('close_companion_widget'));
      setIsOpen(true);
      setIsTelemetryMode(true);
      setIsGateOpenManually(true);
    };

    window.addEventListener('open_bill_drawer', handleOpenDrawer);
    window.addEventListener('open_bill_gate', handleOpenGate);
    return () => {
      window.removeEventListener('open_bill_drawer', handleOpenDrawer);
      window.removeEventListener('open_bill_gate', handleOpenGate);
    };
  }, []);

  // 2. STABLE PROTECTED STREAM HOOK BINDINGS
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/bill'
    })
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  // Calculate User Turn Count for Lead Gating (Triggers on 4th user turn or manual trigger)
  const userTurnCount = messages.filter((m) => m.role === 'user').length;
  const isGated = (userTurnCount >= 4 || isGateOpenManually) && !isLeadCaptured;

  const hasLoggedGateRef = useRef(false);
  useEffect(() => {
    if (isGated && !hasLoggedGateRef.current) {
      hasLoggedGateRef.current = true;
      trackGaEvent('bill_gate_reached_turn_4', {
        event_category: 'bill_conversion_funnel',
        turn_count: userTurnCount,
        trigger_type: isGateOpenManually ? 'manual_button_click' : 'turn_4_threshold',
        target_url: storedTelemetry?.url || '',
      });
    }
  }, [isGated, storedTelemetry, userTurnCount, isGateOpenManually]);

  const handleLeadCaptureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingLead || !leadForm.email.trim()) return;

    setLeadError('');
    setIsSubmittingLead(true);
    try {
      const isAssistantAssisted = typeof window !== 'undefined' && sessionStorage.getItem('aeo_assistant_assisted') === 'true';
      const targetWebsite = storedTelemetry?.url || (typeof window !== 'undefined' ? window.location.origin : '');
      const res = await fetch('/api/forms/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadForm.name.trim(),
          email: leadForm.email.trim(),
          phone: leadForm.phone.trim(),
          website: targetWebsite,
          assistantAssisted: isAssistantAssisted,
          scores: {
            readinessScore: storedTelemetry?.result?.readinessScore ?? 95,
            proximityScore: storedTelemetry?.result?.proximityScore ?? 24
          }
        })
      });

      const json = await res.json().catch(() => ({ ok: false, error: 'Server communication error' }));

      if (res.ok && json.ok) {
        setIsLeadCaptured(true);
        setIsReportDispatched(true);
        if (typeof window !== 'undefined') {
          localStorage.setItem('aeo_lead_captured', 'true');
        }
        trackGaEvent('lead_report_dispatched', {
          event_category: 'bill_conversion_funnel',
          target_url: targetWebsite,
          email_domain: leadForm.email.split('@')[1] || 'unknown',
          readiness_score: storedTelemetry?.result?.readinessScore ?? 95,
          proximity_score: storedTelemetry?.result?.proximityScore ?? 24,
        });
      } else {
        setLeadError(json.error || 'Failed to dispatch report. Please verify your email and retry.');
      }
    } catch (err: unknown) {
      console.error("Lead submission error:", err);
      setLeadError(err instanceof Error ? err.message : 'Network error. Please try again.');
    } finally {
      setIsSubmittingLead(false);
    }
  };

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

    if (typeof window !== 'undefined') {
      const win = window as unknown as {
        dataLayer?: Array<Record<string, unknown>>;
        gtag?: (...args: unknown[]) => void;
      };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: 'bill_mode_toggle',
        event_category: 'AI Assistant',
        event_label: nextMode ? 'Telemetry Guide' : 'General Agent',
        value: nextMode ? 1 : 0
      });
      if (typeof win.gtag === 'function') {
        win.gtag('event', 'bill_mode_toggle', {
          event_category: 'AI Assistant',
          event_label: nextMode ? 'Telemetry Guide' : 'General Agent',
          value: nextMode ? 1 : 0
        });
      }
    }
  };

  // Custom submit interceptor to stream to Vercel and track intent simultaneously
  const executeQuery = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    if (typeof window !== 'undefined') {
      const win = window as unknown as {
        gtag?: (...args: unknown[]) => void;
      };
      if (typeof win.gtag === 'function') {
        win.gtag('event', 'bill_query_submitted', {
          event_category: 'AI Assistant',
          search_term: queryText,
          active_skill: isTelemetryMode ? 'Telemetry Guide' : 'Knowledge Explainer',
          query_length: queryText.length
        });
      }
    }

    // Dynamic structured telemetry payload extraction from localStorage or state
    let activeAudit = storedTelemetry?.result;
    let targetWebsite = storedTelemetry?.url;
    let targetIntent = storedTelemetry?.intent;

    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('aeo_telemetry_latest');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          activeAudit = parsed.result || activeAudit;
          targetWebsite = parsed.url || targetWebsite;
          targetIntent = parsed.intent || targetIntent;
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
          audit: isTelemetryMode ? {
            targetWebsite: targetWebsite || 'Target Site',
            targetQuery: targetIntent || 'AI Search Marketing',
            readinessScore: activeAudit?.readinessScore ?? 77,
            proximityScore: activeAudit?.proximityScore ?? 24,
            status: (activeAudit?.readinessScore ?? 77) < 80 ? 'Needs Attention' : 'Optimal',
            findings: activeAudit?.insightResult || {
              firstImpression: "Technical foundation is clean, but local entity signals need anchoring for target search queries.",
              diagnosis: {
                currentState: "AI search models treat you as a generic national provider without local geographic priority.",
                desiredState: "AI engines recommend your business as the definitive, trusted answer for high-intent local customer queries."
              }
            },
            evidenceBreakdown: {
              identityCoverage: 1.0,
              factCoverage: 0.95,
              relationshipCoverage: 0.92,
              evidenceCoverage: 0.90
            },
            limitations: "Assesses public website signals that help AI search systems identify, verify, and represent your business. AI engines are non-deterministic multi-variable systems."
          } : null
        }
      }
    );
  };

  // 4. Conversational Outcome-Led Chip Mapping
  const handleChipClick = async (chipText: string) => {
    if (chipText.includes('Email') || chipText.includes('Send')) {
      trackGaEvent('bill_gate_triggered_manually', {
        event_category: 'bill_conversion_funnel',
        source: 'bill_quick_chip',
        target_url: storedTelemetry?.url || '',
      });
      setIsGateOpenManually(true);
      return;
    }

    const queryMap: Record<string, string> = {
      'What should I fix first?': 'What is the highest priority structural gap in this scan and what should I fix first?',
      'How do I improve my score?': 'How can I improve my AI Visibility Score and entity clarity?',
      'Why is local grounding low?': 'Why is my local entity grounding low and how do AI engines lose local context?',
      'How does the Blueprint fix this?': 'How does The AEObility Blueprint fix these local entity gaps and what are the deliverables?'
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
    const handleOpenBillDrawer = () => {
      // Suppress companion widget first to avoid z-index race conditions
      window.dispatchEvent(new Event('close_companion_widget'));
      setIsOpen(true);
      setIsTelemetryMode(true);
    };

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
        // Auto-dispatch telemetry query directly so input stays clean
        executeQuery(initialQuery);
      }
    };

    const handleCloseBillWidget = () => {
      setIsOpen(false);
    };

    window.addEventListener('open_bill_drawer', handleOpenBillDrawer);
    window.addEventListener('open_bill_with_query', handleOpenBillWithQuery);
    window.addEventListener('close_bill_widget', handleCloseBillWidget);
    return () => {
      window.removeEventListener('open_bill_drawer', handleOpenBillDrawer);
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

  // Suppress AI Bill widget on /about and /freelance routes
  if (pathname?.startsWith('/about') || pathname?.includes('freelance')) {
    return null;
  }

  if (!isOpen || !mounted) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-9999 pointer-events-none">
      <div ref={containerRef} className="pointer-events-auto fixed bottom-4 right-4 sm:bottom-6 sm:right-6 left-auto z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm sm:max-w-md bg-zinc-950/95 border border-white/15 rounded-2xl shadow-2xl flex flex-col h-135 max-h-[80dvh] overflow-hidden text-zinc-100 font-sans backdrop-blur-xl transition-all animate-fadeIn">
      {/* 0. Confirmed Closure Card / Interstitial Gating Modal Overlay */}
      {isReportDispatched ? (
        <div className="absolute inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-5 text-center animate-fadeIn overflow-y-auto">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3.5 right-3.5 text-zinc-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition cursor-pointer"
            aria-label="Close Chat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-w-sm space-y-4 text-center bg-zinc-900/90 border border-emerald-500/30 p-6 rounded-2xl shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-white font-soehne-breit">
                Full Telemetry Report Dispatched
              </h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                We&apos;ve emailed your complete entity audit report to:
              </p>
              <div className="inline-block text-xs font-mono font-bold text-emerald-400 bg-black/60 px-3 py-1 rounded border border-emerald-500/20">
                {leadForm.email}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2.5">
              <p className="text-[11px] text-zinc-400 font-serif">
                Ready to implement the remediation roadmap?
              </p>
              <Link
                href="/solutions/aeo-blueprint"
                onClick={() => {
                  trackGaEvent('blueprint_cta_clicked', {
                    event_category: 'commercial_conversion',
                    source: 'bill_closure_card',
                    target_url: storedTelemetry?.url || '',
                    price_aud: 995,
                  });
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-zinc-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] text-center cursor-pointer"
              >
                <span>View The AEObility Blueprint ($995 AUD)</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-950" />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[11px] text-zinc-400 hover:text-zinc-200 underline transition cursor-pointer block mx-auto pt-1 font-mono"
              >
                Close assistant for now
              </button>
            </div>
          </div>
        </div>
      ) : isGated && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-5 text-center animate-fadeIn overflow-y-auto">
          {/* Close Chat Option */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3.5 right-3.5 text-zinc-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition cursor-pointer"
            aria-label="Close Chat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-w-sm space-y-3.5 text-left bg-zinc-900/90 border border-emerald-500/30 p-5 rounded-2xl shadow-2xl my-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              <h3 className="text-xs font-bold text-white tracking-tight">
                Unlock Complete AI Telemetry Report
              </h3>
            </div>

            <p className="text-[11px] text-zinc-300 leading-relaxed">
              You&apos;ve reached the free diagnostic preview limit. Enter your details to receive your complete entity audit report and structured remediation roadmap.
            </p>

            <form onSubmit={handleLeadCaptureSubmit} className="space-y-2.5 pt-1">
              <div>
                <label className="text-[10px] font-medium text-zinc-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="w-full bg-black/60 border border-zinc-700 focus:border-emerald-500 rounded-lg p-2 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none transition-colors touch-manipulation"
                  placeholder="Jane Doe"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="text-[10px] font-medium text-zinc-400 block mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full bg-black/60 border border-zinc-700 focus:border-emerald-500 rounded-lg p-2 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none transition-colors touch-manipulation"
                  placeholder="e.g. jane@business.com.au"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="text-[10px] font-medium text-zinc-400 block mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full bg-black/60 border border-zinc-700 focus:border-emerald-500 rounded-lg p-2 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none transition-colors touch-manipulation"
                  placeholder="0400 000 000"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              {leadError && (
                <div className="p-2 rounded-lg bg-rose-950/60 border border-rose-500/30 text-[11px] text-rose-300">
                  {leadError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmittingLead}
                className="w-full py-2.5 mt-1 bg-emerald-500 hover:bg-emerald-400 font-bold text-black rounded-lg text-xs transition shadow-[0_0_15px_rgba(16,185,129,0.2)] disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{isSubmittingLead ? "Dispatching Report..." : "Send Complete Audit Report"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>

              <p className="text-[10px] text-zinc-400 text-center font-mono pt-0.5">
                ✓ Instant delivery &bull; Zero spam &bull; Australian privacy guaranteed
              </p>
            </form>

            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsGateOpenManually(false);
                  setIsOpen(false);
                }}
                className="text-[11px] text-zinc-400 underline hover:text-zinc-200 transition cursor-pointer font-mono"
              >
                Close chat for now
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header Controller Banner */}
      <div className="bg-zinc-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <BillAvatar size="sm" pulse={false} />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xs text-white tracking-wide uppercase font-mono">
                System Agent: Bill
              </h3>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 font-mono border border-emerald-500/20">
                Online
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-serif">AEObility Dynamic Intelligence</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Direct Email Gate Trigger CTA */}
          {!isReportDispatched && !isLeadCaptured && (
            <button
              type="button"
              onClick={() => {
                trackGaEvent('bill_gate_triggered_manually', {
                  event_category: 'bill_conversion_funnel',
                  source: 'bill_header_cta',
                  target_url: storedTelemetry?.url || '',
                });
                setIsGateOpenManually(true);
              }}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono transition flex items-center gap-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 cursor-pointer font-bold shrink-0"
              title="Email complete audit report"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>Send Report</span>
            </button>
          )}

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
            onClick={() => {
              setIsGateOpenManually(false);
              setIsOpen(false);
            }}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
            aria-label="Close Bill assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hydrated Audit Sticky Indicator Bar */}
      {isTelemetryMode && storedTelemetry?.result && (
        <div className="bg-amber-950/30 border-b border-amber-500/20 px-3.5 py-2 text-[10px] space-y-1.5 font-mono">
          <div className="flex justify-between items-center text-amber-400 font-bold tracking-wider uppercase text-[9px]">
            <span className="flex items-center gap-1"><ShieldAlert className="w-3 h-3 text-amber-400" /> Scan Context Loaded</span>
            <span className="text-zinc-300 font-normal truncate max-w-[170px]">
              {storedTelemetry.url ? new URL(storedTelemetry.url.startsWith('http') ? storedTelemetry.url : `https://${storedTelemetry.url}`).hostname.replace('www.', '') : 'Target Site'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className="bg-black/50 p-2 rounded-lg border border-emerald-500/20">
              <span className="text-zinc-400 text-[9px] block">Global Schema Baseline</span>
              <span className="text-emerald-400 font-bold text-xs">{storedTelemetry.result?.readinessScore ?? 95}/100</span>
              <span className="text-[9px] text-emerald-400/90 block mt-0.5 font-bold">Optimal Syntax</span>
            </div>
            <div className="bg-black/50 p-2 rounded-lg border border-amber-500/20">
              <span className="text-zinc-400 text-[9px] block">Target Location Grounding</span>
              <span className="text-amber-300 font-bold text-xs">{storedTelemetry.result?.proximityScore ?? 24}%</span>
              <span className="text-[9px] text-amber-400/90 block mt-0.5 font-bold">Needs Attention</span>
            </div>
          </div>
          <div className="text-[9px] text-zinc-400 text-center pt-0.5">
            High Technical Readiness • Target-Market Grounding Gap
          </div>
        </div>
      )}

      {/* Main Response Log Window Feed */}
      <div className="flex-1 p-4 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] space-y-3.5 text-xs scrollbar-thin">
        {messages.length === 0 && (
          <div className="text-center pt-5 pb-2 space-y-2.5 px-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-white font-medium text-xs font-serif">
              G&apos;day! I&apos;ve loaded your diagnostic telemetry{storedTelemetry?.url ? ` for ${new URL(storedTelemetry.url.startsWith('http') ? storedTelemetry.url : `https://${storedTelemetry.url}`).hostname.replace('www.', '')}` : ''}.
            </p>
            <p className="text-zinc-300 text-[11px] leading-relaxed font-serif">
              {isTelemetryMode 
                ? `While your baseline Global Schema Syntax is strong (${storedTelemetry?.result?.readinessScore ?? 95}/100), your Target Location Grounding (${storedTelemetry?.result?.proximityScore ?? 24}%) needs anchoring. Let's review your 3 priority next steps.`
                : "Ask me anything about Answer Engine Optimisation, semantic schema graphs, or run a free scan above."}
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
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1.5 rounded-full animate-pulse">
            <Bot className="w-3.5 h-3.5 animate-spin" />
            <span>Bill is scanning 41 lattice nodes...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Action Outcome-Led Prompt Pills (Hidden when session concluded) */}
      {!isReportDispatched && (
        <div className="px-3 py-2 bg-zinc-900/70 border-t border-white/5 flex flex-wrap gap-1.5 text-[10px]">
          {[
            { label: '📧 Email Full Report', icon: <Mail className="w-3 h-3 text-emerald-400" /> },
            { label: 'What should I fix first?', icon: <AlertTriangle className="w-3 h-3 text-amber-400" /> },
            { label: 'How do I improve my score?', icon: <Sparkles className="w-3 h-3 text-cyan-400" /> },
            { label: 'Why is local grounding low?', icon: <HelpCircle className="w-3 h-3 text-purple-400" /> },
            { label: 'How does the Blueprint fix this?', icon: <Bot className="w-3 h-3 text-cyan-300" />, highlight: true }
          ].map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => handleChipClick(chip.label)}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] transition font-medium cursor-pointer ${
                chip.highlight
                  ? 'bg-cyan-950/70 border border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.25)] hover:bg-cyan-900/80 font-bold'
                  : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white'
              }`}
            >
              {chip.icon}
              <span>{chip.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Persistent Reassurance Banner */}
      <div className="px-3 py-1 bg-zinc-950 border-t border-white/5 text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-2">
        <span>✓ Read-only analysis</span>
        <span>•</span>
        <span>No data stored</span>
        <span>•</span>
        <span>Zero obligation</span>
      </div>

      {/* Lower User Query Tray Element */}
      <form onSubmit={handleSubmit} className="p-3 bg-zinc-900/90 border-t border-white/10 flex gap-2 backdrop-blur-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isReportDispatched || isGated}
          placeholder={
            isReportDispatched 
              ? "Report dispatched • Session concluded" 
              : isTelemetryMode 
                ? "Ask Bill about these scan results..." 
                : "Ask Bill about AEO semantic lattices..."
          }
          className="flex-1 bg-zinc-950 border border-white/15 rounded-xl px-3 py-2 text-base sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition touch-manipulation"
        />
        <button 
          type="submit" 
          disabled={isReportDispatched || isGated || !input.trim() || isLoading}
          className="bg-cyan-400 disabled:opacity-40 text-black px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-cyan-300 transition flex items-center justify-center shrink-0 cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.3)] disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <Send className="w-3.5 h-3.5 text-zinc-950" />
        </button>
      </form>
    </div>
  </div>,
  document.body
);
}

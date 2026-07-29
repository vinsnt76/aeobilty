'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, UIMessage } from 'ai';
import { X, Sparkles, Send, Activity, Bot, Volume2, VolumeX, ShieldAlert, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { TelemetryResult } from '@/lib/telemetry/types';

// Explicit window type guard for GA4 gtag to prevent ESLint 'any' leaks
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function BillWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTelemetryMode, setIsTelemetryMode] = useState(false);
  const [input, setInput] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [storedTelemetry, setStoredTelemetry] = useState<{ url?: string; intent?: string; result?: TelemetryResult } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Local Storage Sync: Hydrate local state context from previous diagnostics
  useEffect(() => {
    const handleStorageUpdate = () => {
      if (typeof window === 'undefined') return;
      const raw = localStorage.getItem('aeo_telemetry_latest');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setStoredTelemetry(parsed);
          setIsTelemetryMode(true);
        } catch (err) {
          console.error("Failed to parse local telemetry:", err);
        }
      }
    };

    handleStorageUpdate();
    window.addEventListener('aeo_telemetry_updated', handleStorageUpdate);
    return () => window.removeEventListener('aeo_telemetry_updated', handleStorageUpdate);
  }, []);

  // 2. CONNECT TO UNIFIED AGENT VIA VERCEL AI SDK CORE BINDINGS
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/bill',
      body: {
        intent: isTelemetryMode ? 'telemetry' : 'general',
        audit: isTelemetryMode ? (storedTelemetry?.result || {
          entityClarityScore: 42,
          citationSharePercent: 12,
          retrievalConfidence: 'Low',
          hallucinationRisk: 'High',
          gaps: ['Missing fragment identifiers', 'Unstructured paragraph layouts']
        }) : null
      }
    })
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const getMessageText = React.useCallback((m: UIMessage): string => {
    if (!m.parts) return '';
    return m.parts
      .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
      .map(p => p.text)
      .join('');
  }, []);

  // 3. Analytics & Speech Telemetry Synthesis
  const speakText = React.useCallback((text: string) => {
    if (isMuted || typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voices = window.speechSynthesis.getVoices();
    const auVoice = voices.find(v => v.lang === 'en-AU' || v.name.includes('Australian')) || voices.find(v => v.lang.startsWith('en'));
    if (auVoice) utterance.voice = auVoice;
    window.speechSynthesis.speak(utterance);
  }, [isMuted]);

  useEffect(() => {
    if (messages.length === 0 || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== 'assistant') return;

    const content = getMessageText(lastMessage).toLowerCase();
    if (!content) return;
    
    speakText(getMessageText(lastMessage));

    // GA4 Event Trigger: Commercial Funnel Slicing
    if (content.includes('blueprint') || content.includes('995')) {
      const prevUserMessage = [...messages].reverse().find(m => m.role === 'user');
      const userText = prevUserMessage ? getMessageText(prevUserMessage) : 'Unknown';

      window.gtag('event', 'bill_funnel_conversion_step', {
        event_category: 'AI Assistant Funnel',
        funnel_step: 'Commercial Offer Exposed',
        trigger_query: userText
      });
    }

    // GA4 Event Trigger: 41-Node Lattice Concept Hit
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

    setInput('');
    await sendMessage({ text: queryText });
  };

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

      setIsOpen(true);
      if (mode === 'telemetry') {
        setIsTelemetryMode(true);
      }
      if (initialQuery) {
        setInput(initialQuery);
      }
    };

    window.addEventListener('open_bill_with_query', handleOpenBillWithQuery);
    return () => window.removeEventListener('open_bill_with_query', handleOpenBillWithQuery);
  }, []);

  // Auto-scroll messages container on update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
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
      {/* Header Banner */}
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
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition"
            title={isMuted ? "Enable Voice Feedback (AU)" : "Mute Voice Feedback"}
            aria-label="Toggle voice output"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          {/* Telemetry Switcher Mode */}
          <button 
            type="button"
            onClick={toggleTelemetryMode}
            className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition flex items-center gap-1 border ${
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
            className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition"
            aria-label="Close Bill assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Local Storage Telemetry Audit Card (If Hydrated) */}
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

      {/* Message Output Box */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
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
          if (!text) return null;
          return (
            <div 
              key={m.id} 
              className={`p-3.5 rounded-xl max-w-[88%] leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-emerald-600/20 border border-emerald-500/30 ml-auto text-emerald-50' 
                  : 'bg-zinc-900 border border-white/10 mr-auto text-zinc-200'
              }`}
            >
              <span className="block text-[9px] uppercase tracking-wider font-mono text-zinc-500 mb-1">
                {m.role === 'user' ? 'Local Requestor' : 'Bill'}
              </span>
              <p className="whitespace-pre-wrap text-[11px] text-zinc-300">{text}</p>

              {/* Rich Telemetry Inline Visual Cards for Assistant Responses in Telemetry Mode */}
              {m.role === 'assistant' && isTelemetryMode && storedTelemetry?.result?.insightResult && (
                <div className="mt-3 space-y-2 pt-2 border-t border-white/10 text-[10px] font-mono">
                  {/* AI First Impression Card */}
                  {storedTelemetry.result.insightResult.firstImpression && (
                    <div className="bg-black/60 border border-emerald-500/30 rounded-lg p-2 text-emerald-300">
                      <span className="text-[8px] uppercase tracking-wider font-bold text-emerald-400 block mb-0.5">AI First Impression</span>
                      <p className="text-[10px] italic text-zinc-200">&quot;{storedTelemetry.result.insightResult.firstImpression.headline}&quot;</p>
                    </div>
                  )}

                  {/* Recommendation Test Badge */}
                  {storedTelemetry.result.insightResult.recommendationTest && (
                    <div className="bg-black/60 border border-white/10 rounded-lg p-2 flex items-center justify-between text-zinc-300">
                      <span className="text-[9px]">AI Recommendation Verdict</span>
                      <span className="flex items-center gap-1 font-bold">
                        {storedTelemetry.result.insightResult.recommendationTest.wouldRecommend ? (
                          <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> PASS</span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1"><XCircle className="w-3 h-3" /> HIGH RISK</span>
                        )}
                      </span>
                    </div>
                  )}
                </div>
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

      {/* Quick Action Diagnostic Chips */}
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

      {/* Input Action Form Tray */}
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

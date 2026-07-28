'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, UIMessage } from 'ai';
import { X, Sparkles, Send, Activity, Bot } from 'lucide-react';

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Connect cleanly to our unified edge endpoint via DefaultChatTransport
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/bill',
      body: {
        intent: isTelemetryMode ? 'telemetry' : 'general',
        audit: isTelemetryMode ? {
          entityClarityScore: 42,
          citationSharePercent: 12,
          retrievalConfidence: 'Low',
          hallucinationRisk: 'High',
          gaps: ['Missing fragment identifiers', 'Unstructured paragraph layouts']
        } : null
      }
    })
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const getMessageText = (m: UIMessage): string => {
    if (!m.parts) return '';
    return m.parts
      .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
      .map(p => p.text)
      .join('');
  };

  // Track deep funnel-level sequence transitions via message array synthesis
  useEffect(() => {
    if (messages.length === 0 || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== 'assistant') return;

    const content = getMessageText(lastMessage).toLowerCase();
    if (!content) return;
    
    // 📊 Funnel Event 1: Captures when Bill dynamically shifts into the Blueprint Commercial Funnel
    if (content.includes('blueprint') || content.includes('995')) {
      const prevUserMessage = [...messages].reverse().find(m => m.role === 'user');
      const userText = prevUserMessage ? getMessageText(prevUserMessage) : 'Unknown';

      window.gtag('event', 'bill_funnel_conversion_step', {
        event_category: 'AI Assistant Funnel',
        funnel_step: 'Commercial Offer Exposed',
        trigger_query: userText
      });
    }

    // 📊 Funnel Event 2: Captures when Bill switches into technical explanation mode
    if (content.includes('lattice') || content.includes('bias') || content.includes('schema')) {
      window.gtag('event', 'bill_lattice_node_hit', {
        event_category: 'AI Assistant Knowledge',
        matched_concept: content.includes('bias') ? 'Positional Bias' : content.includes('lattice') ? 'Semantic Lattice' : 'Schema Structure'
      });
    }
  }, [messages]);

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const textToSend = input.trim();

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'bill_query_submitted', {
        event_category: 'AI Assistant',
        search_term: textToSend,
        active_skill: isTelemetryMode ? 'Telemetry Guide' : 'Knowledge Explainer',
        query_length: textToSend.length
      });
    }

    setInput('');
    await sendMessage({ text: textToSend });
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
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full border border-emerald-500/30 shadow-2xl backdrop-blur-md hover:scale-105 transition-all duration-300 group"
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
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-zinc-950/95 border border-white/15 rounded-2xl shadow-2xl flex flex-col h-[520px] max-h-[85vh] overflow-hidden text-zinc-100 font-sans backdrop-blur-xl transition-all animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-zinc-900/80 px-4 py-3.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-xs text-white tracking-wide flex items-center gap-1.5">
              Bill
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </h3>
            <p className="text-[10px] text-zinc-400">AEObility AI-Native Agent</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
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
            {isTelemetryMode ? 'Telemetry: ON' : 'Telemetry Mode'}
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

      {/* Message Output Box */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
        {messages.length === 0 && (
          <div className="text-center pt-10 pb-6 space-y-3 px-4">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-zinc-300 font-medium text-xs">
              G&apos;day! I&apos;m Bill, AEObility&apos;s AI Agent.
            </p>
            <p className="text-zinc-500 text-[11px] leading-relaxed">
              Ask me about Answer Engine Optimisation frameworks, entity graphs, or toggle Telemetry Mode to diagnose visibility gaps.
            </p>
          </div>
        )}

        {messages.map((m: UIMessage) => {
          const text = getMessageText(m);
          if (!text) return null;
          return (
            <div 
              key={m.id} 
              className={`p-3 rounded-xl max-w-[88%] leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-emerald-600/20 border border-emerald-500/30 ml-auto text-emerald-50' 
                  : 'bg-zinc-900 border border-white/10 mr-auto text-zinc-200'
              }`}
            >
              <span className="block text-[9px] uppercase tracking-wider font-mono text-zinc-500 mb-1">
                {m.role === 'user' ? 'You' : 'Bill'}
              </span>
              <p className="whitespace-pre-wrap">{text}</p>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 p-2.5 rounded-lg w-max animate-pulse">
            <Bot className="w-3.5 h-3.5 animate-spin" />
            <span>Bill is formulating response...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Tray */}
      <form onSubmit={handleSubmit} className="p-3 bg-zinc-900/90 border-t border-white/10 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isTelemetryMode ? "Ask Bill to diagnose your audit payload..." : "Ask Bill about AEO semantic lattices..."}
          className="flex-1 bg-zinc-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 transition"
        />
        <button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          className="bg-emerald-500 disabled:opacity-40 text-black px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-emerald-400 transition flex items-center justify-center shrink-0"
          aria-label="Send message"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Sparkles, ArrowRight, AlertTriangle, ExternalLink, Command } from 'lucide-react';
import { SearchQueryResponse } from '@/lib/search/types';

export default function AnswerSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchQueryResponse | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global Keyboard & Custom Event Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open_answer_search_modal', handleOpenModal);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open_answer_search_modal', handleOpenModal);
    };
  }, [isOpen]);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setResult(null);
      setLoading(false);
    }
  }, [isOpen]);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResult(null);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/search/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery })
      });

      if (res.ok) {
        const data: SearchQueryResponse = await res.json();
        setResult(data);
      }
    } catch (err) {
      console.error('Search request failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleHandoffToAIBill = () => {
    setIsOpen(false);
    window.dispatchEvent(
      new CustomEvent('open_bill_with_query', {
        detail: { query: query || 'Site search inquiry' }
      })
    );
  };

  if (!isOpen) return null;

  const matchPercentage = result
    ? Math.round(result.similarityScore * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md transition-all animate-fadeIn">
      {/* Overlay Backdrop Click */}
      <div 
        className="fixed inset-0 -z-10" 
        onClick={() => setIsOpen(false)} 
        aria-hidden="true" 
      />

      {/* Modal Container */}
      <div className="w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all">
        {/* Search Header Input */}
        <form onSubmit={handleFormSubmit} className="relative flex items-center border-b border-white/10 px-4 py-3.5 bg-zinc-900/60">
          <Search className="w-5 h-5 text-emerald-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.length > 2) {
                handleSearch(e.target.value);
              } else if (e.target.value.length === 0) {
                setResult(null);
              }
            }}
            placeholder="Ask AEObility... (e.g. What is AEO?, GEO Services, Shopify AEO)"
            className="w-full bg-transparent text-white placeholder-zinc-400 text-base focus:outline-none focus:ring-0"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResult(null);
                inputRef.current?.focus();
              }}
              className="p-1 text-zinc-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-xs font-mono border border-white/10 hover:text-white"
          >
            ESC
          </button>
        </form>

        {/* Content Body */}
        <div className="p-5 max-h-[70vh] overflow-y-auto space-y-4">
          {loading && (
            <div className="flex items-center justify-center py-10 space-x-3 text-emerald-400">
              <Sparkles className="w-5 h-5 animate-spin" />
              <span className="text-sm font-medium text-zinc-300">
                Evaluating IA/SLM vector matrix...
              </span>
            </div>
          )}

          {!loading && !result && !query && (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-white font-semibold text-base">Answer Engine Diagnostic Search</h4>
              <p className="text-zinc-400 text-xs max-w-sm mx-auto">
                Search site entities live. Answers are synthesised directly from AEObility&apos;s structured IA &amp; SLM architecture.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['What is AEO?', 'GEO Marketing', 'AEO vs SEO', 'Shopify AEO'].map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => {
                      setQuery(sample);
                      handleSearch(sample);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs text-zinc-300 transition-colors"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!loading && result && (
            <div className="space-y-4">
              {/* Hard Fallback State (< 50% Match) */}
              {result.isFallback && (
                <div className="p-5 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Off-Site Architecture Query</span>
                    </div>
                    <span className="text-xs text-amber-400/80 font-mono">
                      {matchPercentage}% Match
                    </span>
                  </div>
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    {result.answer}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleHandoffToAIBill}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all"
                    >
                      <span>→ Ask AI Bill in the Workspace</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Caution Band State (50% <= Match < 65%) */}
              {result.isCaution && result.topMatch && (
                <div className="p-5 rounded-xl bg-zinc-900/80 border border-amber-500/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Best guess based on current site content</span>
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {matchPercentage}% Match
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium text-sm flex items-center justify-between">
                      <span>{result.topMatch.h1}</span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-emerald-500/20">
                        {result.topMatch.schemaType}
                      </span>
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {result.answer}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-white/10">
                    <Link
                      href={result.topMatch.url}
                      onClick={() => setIsOpen(false)}
                      className="w-full sm:w-auto flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center justify-center space-x-1.5 border border-white/10 transition-colors"
                    >
                      <span>View Page: {result.topMatch.pageName}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={handleHandoffToAIBill}
                      className="w-full sm:w-auto py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center justify-center space-x-1.5 border border-emerald-500/40 transition-colors"
                    >
                      <span>→ Escalate to AI Bill</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* High Confidence State (Match >= 65%) */}
              {!result.isFallback && !result.isCaution && result.topMatch && (
                <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Verified AEO Grounded Answer</span>
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">
                      {matchPercentage}% Match
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium text-sm">{result.topMatch.h1}</h4>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                        {result.topMatch.schemaType}
                      </span>
                    </div>
                    <p className="text-zinc-200 text-sm leading-relaxed">
                      {result.answer}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={result.topMatch.url}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                    >
                      <span>Explore {result.topMatch.pageName}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={handleHandoffToAIBill}
                      className="text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      Ask AI Bill for details →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Microcopy */}
        <div className="px-5 py-3 bg-zinc-900/90 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Powered by AEObility IA/SLM Architecture</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-zinc-400">
            Press <kbd className="px-1 py-0.5 rounded bg-zinc-800 border border-white/10 text-[10px]">⌘K</kbd> anywhere
          </span>
        </div>
      </div>
    </div>
  );
}

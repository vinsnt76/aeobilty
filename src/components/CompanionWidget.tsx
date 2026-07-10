"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  telemetry?: any;
}

export function extractDomainLabel(url: string): string {
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    const domain = parsed.hostname.replace('www.', '').split('.')[0];
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  } catch {
    return 'Target Site';
  }
}

export default function CompanionWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'assistant',
      text: "I arrive at this hour empty-handed, unshakeable, and ready to rewrite the code. How can we hack the physical matrix today, my friend?"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize voices
  useEffect(() => {

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const loadVoices = () => {
        const allVoices = window.speechSynthesis.getVoices();
        const englishVoices = allVoices.filter(
          v => v.lang.startsWith('en') || v.name.includes('Google')
        );
        setVoices(englishVoices);
        const defaultVoice = englishVoices.find(v => v.lang === 'en-AU') || englishVoices[0];
        if (defaultVoice) {
          setSelectedVoiceName(defaultVoice.name);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Simulate lip sync / mouth movement when speaking
  const startLipSync = () => {
    setIsSpeaking(true);
    if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    audioIntervalRef.current = setInterval(() => {
      setIsSpeaking(prev => !prev);
    }, 250);
  };

  const stopLipSync = () => {
    setIsSpeaking(false);
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
      audioIntervalRef.current = null;
    }
  };

  // TTS Speech feedback
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(v => v.name === selectedVoiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = startLipSync;
    utterance.onend = stopLipSync;
    utterance.onerror = stopLipSync;

    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async () => {
    if (isThinking || !inputText.trim()) return;

    const userMsg = inputText.trim();
    setInputText('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setIsThinking(true);

    try {
      const isScanRequest = /\b(audit|scan|telemetry|vector|proximity|graph)\b/i.test(userMsg);
      let telemetryContext = null;

      if (isScanRequest) {
        setMessages(prev => [
          ...prev,
          { sender: 'assistant', text: "No worries, Vindog! Initialising active AEO telemetry sensors across the site now. Hang tight..." }
        ]);

        try {
          const telemetryRes = await fetch('/api/telemetry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              intent: 'AEO and AI search engine optimization services for Australian businesses',
              clientText: 'AEObility helps your business appear, make sense, and stand out across Search, Maps & AI so you get found and chosen without the complexity. Traditional SEO is speculative; we use active telemetry.',
              competitors: [
                'Generic SEO Inc - traditional keyword density and backlinks company',
                'Speculative AEO Co - prompt engineering optimization theatre'
              ]
            })
          });

          if (telemetryRes.ok) {
            telemetryContext = await telemetryRes.json();
          }
        } catch (err) {
          console.error("Telemetry fetch failed:", err);
        }
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, telemetryContext })
      });

      const data = await response.json();
      const botResponse = data.response || "My server buffers are currently clearing. Try sending again, mate!";

      setMessages(prev => [...prev, { sender: 'assistant', text: botResponse, telemetry: telemetryContext }]);
      speakText(botResponse);
    } catch (error) {
      console.error("Error sending message:", error);
      const errResponse = "My connection sequence glitched, V Man. Let's run a quick 68-second Ctrl+Alt+Delete!";
      setMessages(prev => [...prev, { sender: 'assistant', text: errResponse }]);
      speakText(errResponse);
    } finally {
      setIsThinking(false);
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      stopLipSync();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleWidget}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full border bg-neutral-950 shadow-2xl transition-all duration-300 group hover:scale-105 ${
          isOpen ? 'border-aeo-purple text-aeo-purple' : 'border-aeo-cyan text-aeo-cyan'
        }`}
        title="Chat with AG Shapeshifter"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Floating Drawer */}
      <div
        className={`fixed right-6 bottom-24 z-50 w-[350px] md:w-[480px] max-w-[calc(100vw-3rem)] h-[600px] bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase">AI Bill // Diagnostic Engine</span>
          </div>
          <span className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/25">Co-Pilot OS</span>
        </div>

        {/* Messages list */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col max-w-[85%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'items-start'
              }`}
            >
              <div
                className={`p-3 rounded-xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-aeo-cyan/15 text-aeo-cyan rounded-tr-none border border-aeo-cyan/15'
                    : 'bg-white/[0.03] text-white/90 rounded-tl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>

              {/* Dynamic Telemetry Display */}
              {msg.telemetry && (
                <div className="mt-2 w-full bg-black/60 border border-white/10 rounded-xl p-3 font-mono text-[10px] text-white/90 space-y-3">
                  {/* Vector Proximity Chart */}
                  <div className="space-y-1">
                    <div className="text-[9px] uppercase tracking-wider text-white/40">Vector Proximity (Cosine)</div>
                    {msg.telemetry.nodes?.map((node: any, idx: number) => {
                      const clientNode = msg.telemetry.nodes.find((n: any) => n.label === 'Client');
                      const isClient = node.label === 'Client';
                      const isWinner = clientNode && node.similarity <= clientNode.similarity;
                      const percentage = Math.min(100, Math.max(0, Math.round(node.similarity * 100)));
                      
                      const domainName = isClient && msg.telemetry.clientUrl ? extractDomainLabel(msg.telemetry.clientUrl) : '';
                      return (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex justify-between text-[9px]">
                            <span>{isClient ? (domainName ? `[${domainName}]` : '[Your Site]') : `[Competitor ${idx}]`}</span>
                            <span className={isClient ? 'text-aeo-cyan' : ''}>
                              {node.similarity.toFixed(3)} {isClient && '🌟'}
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-800 rounded overflow-hidden">
                            <div 
                              className={`h-full rounded transition-all duration-500 ${
                                isClient 
                                  ? 'bg-aeo-cyan shadow-[0_0_8px_rgba(6,182,212,0.5)]' 
                                  : isWinner ? 'bg-zinc-600' : 'bg-amber-600'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Retrieval Verdict */}
                  <div className="border-t border-white/5 pt-2">
                    <div className="text-[9px] uppercase tracking-wider text-white/40 mb-1">RAG Retrieval Verdict</div>
                    {msg.telemetry.simulations?.slice(0, 1).map((sim: any, idx: number) => (
                      <div key={idx} className="bg-white/[0.02] border border-white/5 rounded p-2 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className={sim.survived ? 'text-emerald-500' : 'text-rose-500'}>
                            {sim.survived ? '● ALIGNED' : '● DROPPED'}
                          </span>
                          <span className="text-white/30">|</span>
                          <span className="text-[8px] truncate text-white/60">Sim: "{sim.syntheticQuery.slice(0, 30)}..."</span>
                        </div>
                        {!sim.survived && (
                          <div className="text-[8px] text-rose-300">
                            Reason: Information dilution / low semantic density.
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Knowledge Graph Edges */}
                  {msg.telemetry.triples && msg.telemetry.triples.length > 0 && (
                    <div className="border-t border-white/5 pt-2 space-y-1">
                      <div className="text-[9px] uppercase tracking-wider text-white/40">Extracted Graph Triples</div>
                      <div className="max-h-20 overflow-y-auto space-y-1 pr-1">
                        {msg.telemetry.triples.slice(0, 3).map((triple: any, idx: number) => (
                          <div key={idx} className="text-[8px] bg-white/[0.01] border border-white/5 rounded px-1.5 py-0.5 text-white/70 truncate">
                            <span className="text-aeo-cyan">{triple.subject}</span>
                            <span className="text-white/30"> ──► ({triple.predicate}) ──► </span>
                            <span className="text-white/80">{triple.object}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {isThinking && (
            <div className="flex items-start max-w-[85%]">
              <div className="p-3 bg-white/[0.03] text-white/50 rounded-xl rounded-tl-none border border-white/5 flex items-center gap-1.5 font-mono text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer actions and voice selector */}
        <div className="border-t border-white/5 p-3 space-y-2.5 bg-white/[0.01]">
          {voices.length > 0 && (
            <div className="flex items-center gap-2 bg-black/40 border border-white/5 rounded-lg px-2.5 py-1.5 text-[10px] text-white/50">
              <span className="font-semibold uppercase tracking-wider text-[8px]">Voice</span>
              <select
                value={selectedVoiceName}
                onChange={(e) => setSelectedVoiceName(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none flex-grow text-[9px] cursor-pointer"
              >
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name} className="bg-neutral-900 text-white">
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message AG Shapeshifter..."
              className="flex-grow bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-aeo-cyan/50 transition-colors"
            />
            <button
              onClick={handleSendMessage}
              className="flex items-center justify-center p-2 rounded-xl bg-aeo-cyan text-black hover:bg-aeo-cyan/90 transition-colors"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

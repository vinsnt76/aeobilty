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
      text: "AI Bill active. Ready to run technical diagnostics or clarify search visibility metrics. Submit your URL to begin."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [telemetryData, setTelemetryData] = useState<any>(null);

  // Gatekeeper Mode states
  const [onboardStage, setOnboardStage] = useState<'URL' | 'INTENT' | 'EMAIL' | 'DONE'>('URL');
  const [onboardUrl, setOnboardUrl] = useState('');
  const [onboardIntent, setOnboardIntent] = useState('');
  const [onboardEmail, setOnboardEmail] = useState('');
  const [onboardLoading, setOnboardLoading] = useState(false);
  const [onboardError, setOnboardError] = useState('');

  const runTelemetryScan = async (url: string, intent: string) => {
    setOnboardLoading(true);
    setOnboardError('');
    setIsThinking(true);

    // Start background fetch
    const fetchPromise = fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, intent })
    }).then(async (res) => {
      if (!res.ok) {
        let errMsg = 'Visibility telemetry scan failed.';
        try {
          const errData = await res.json();
          if (errData.error) errMsg = errData.error;
        } catch(e) {}
        throw new Error(errMsg);
      }
      return res.json();
    });

    const steps = [
      "🔎 Reading your homepage...",
      "✓ Found your primary navigation",
      "🔎 Identifying your products...",
      "✓ Detected commercial entities",
      "🔎 Measuring topical relevance...",
      "✓ Comparing against similar businesses",
      "🔎 Checking technical accessibility...",
      "✓ Analysing structured data",
      "🧠 Building your AI visibility profile..."
    ];
    
    for (const stepMsg of steps) {
      setMessages(prev => [...prev, { sender: 'assistant', text: stepMsg }]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    try {
      const resultData = await fetchPromise;
      
      const latestData = { url, intent, result: resultData };
      localStorage.setItem('aeo_telemetry_latest', JSON.stringify(latestData));
      setTelemetryData(latestData);
      
      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: `I've already identified your biggest visibility opportunity.\n\nWould you like me to send the full executive report with every recommendation to your email?`,
          telemetry: resultData
        }
      ]);
      setOnboardStage('EMAIL');
    } catch (err: any) {
      console.error(err);
      setOnboardError(err.message || 'Diagnostic failed. Verify connection.');
      setMessages(prev => [...prev, { sender: 'assistant', text: 'Sorry, the diagnostic scan failed. Please try again.' }]);
    } finally {
      setOnboardLoading(false);
      setIsThinking(false);
    }
  };

  const handleEmailCapture = async (email: string) => {
    setOnboardEmail(email);
    try {
      await fetch('/api/forms/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: onboardUrl, intent: onboardIntent })
      });
      setOnboardStage('DONE');
      setMessages(prev => [
        ...prev,
        { sender: 'assistant', text: `Thanks! I've sent the full insights to ${email}.\n\nYou can now ask me any questions about your visibility metrics above.` }
      ]);
    } catch (e) {
      // ignore
      setOnboardStage('DONE');
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const loadTelemetryFromStorage = () => {
    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem('aeo_telemetry_latest');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setTelemetryData(parsed);

        // If the chat currently only has the default greeting, overwrite with AEO welcome message
        setMessages([
          {
            sender: 'assistant',
            text: `AEO Telemetry context loaded for ${parsed.url} targeting intent "${parsed.intent}". Vector alignments, retrieval simulations, and entity graph structures are updated. What technical details should we clarify?`,
            telemetry: parsed.result
          }
        ]);
      } catch (err) {
        console.error("Failed to parse telemetry storage:", err);
      }
    }
  };

  useEffect(() => {
    loadTelemetryFromStorage();
    window.addEventListener('aeo_telemetry_updated', loadTelemetryFromStorage);
    
    // Initial greeting if no telemetry
    if (!localStorage.getItem('aeo_telemetry_latest')) {
      setMessages([
        {
          sender: 'assistant',
          text: "👋 Hi, I'm Bill.\n\nI don't optimise websites. I measure how AI systems understand them.\n\nLet's see how your business looks through the eyes of ChatGPT and Gemini.\n\nWhat's your website URL?"
        }
      ]);
      setOnboardStage('URL');
    } else {
      setOnboardStage('DONE');
    }
    
    // Event listener for external triggers to open a new fresh session
    const handleOpenNewSession = () => {
      setIsOpen(true);
      localStorage.removeItem('aeo_telemetry_latest');
      setTelemetryData(null);
      setOnboardStage('URL');
      setOnboardUrl('');
      setOnboardIntent('');
      setOnboardEmail('');
      setMessages([
        {
          sender: 'assistant',
          text: "👋 Hi, I'm Bill.\n\nI don't optimise websites. I measure how AI systems understand them.\n\nLet's see how your business looks through the eyes of ChatGPT and Gemini.\n\nWhat's your website URL?"
        }
      ]);
    };

    window.addEventListener('open_new_bill_session', handleOpenNewSession);

    return () => {
      window.removeEventListener('aeo_telemetry_updated', loadTelemetryFromStorage);
      window.removeEventListener('open_new_bill_session', handleOpenNewSession);
    };
  }, []);

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
      // Conversational Onboarding Interception
      if (onboardStage !== 'DONE') {
        if (onboardStage === 'URL') {
          let normalizedUrl = userMsg.trim();
          if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
            if (normalizedUrl.startsWith('https') && !normalizedUrl.includes('://')) {
              normalizedUrl = normalizedUrl.replace(/^https[^a-zA-Z0-9]*/i, 'https://');
            } else if (normalizedUrl.startsWith('http') && !normalizedUrl.includes('://')) {
              normalizedUrl = normalizedUrl.replace(/^http[^a-zA-Z0-9]*/i, 'http://');
            } else {
              normalizedUrl = 'https://' + normalizedUrl;
            }
          }
          setOnboardUrl(normalizedUrl);
          setMessages(prev => [...prev, { sender: 'assistant', text: `Thanks.\n\nWhat search would you like customers to find you for?\n\nExample:\n"best mortgage broker Perth"\n"industrial storage solutions"` }]);
          setOnboardStage('INTENT');
        } else if (onboardStage === 'INTENT') {
          setOnboardIntent(userMsg);
          setMessages(prev => [...prev, { sender: 'assistant', text: `Perfect.\n\nI'll analyse how AI search engines understand:\n\nWebsite: ${onboardUrl}\nIntent: ${userMsg}` }]);
          runTelemetryScan(onboardUrl, userMsg);
        } else if (onboardStage === 'EMAIL') {
          handleEmailCapture(userMsg);
        }
        setIsThinking(false);
        return;
      }

      const isScanRequest = /\b(audit|scan|telemetry|vector|proximity|graph)\b/i.test(userMsg);
      let telemetryContext = null;

      if (isScanRequest) {
        setMessages(prev => [
          ...prev,
          { sender: 'assistant', text: "No worries, Vindog! Initialising active AEO telemetry sensors across the site now. Hang tight..." }
        ]);

        try {
          const telemetryRes = await fetch('/api/diagnostic', {
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
        body: JSON.stringify({ 
          message: userMsg, 
          telemetryContext: telemetryContext || (telemetryData ? telemetryData.result : null) 
        })
      });

      const data = await response.json();
      const botResponse = data.response || "My server buffers are currently clearing. Try sending again, mate!";

      setMessages(prev => [
        ...prev, 
        { 
          sender: 'assistant', 
          text: botResponse, 
          telemetry: telemetryContext || (telemetryData ? telemetryData.result : null) 
        }
      ]);
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
        id="companion-widget-toggle"
        onClick={toggleWidget}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full border bg-neutral-950 shadow-2xl transition-all duration-300 group hover:scale-105 overflow-hidden ${
          isOpen ? 'border-aeo-purple text-aeo-purple' : 'border-aeo-cyan text-aeo-cyan'
        }`}
        title="Chat with AI Bill"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <img src="/char-mouth-closed.png" alt="AI Bill" className="w-full h-full object-cover animate-pulse" />
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
            <div className="relative h-6 w-6 rounded-full overflow-hidden border border-white/10 bg-neutral-900 flex-shrink-0">
              <img src="/char-mouth-closed.png" alt="AI Bill Profile" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-emerald-500 border border-black" />
            </div>
            <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase">AI Bill // Diagnostic Engine</span>
          </div>
          <span className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/25">Co-Pilot OS</span>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs">
            <>
              {messages.map((msg, i) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={i}
                    className={`flex gap-2 max-w-[85%] ${
                      isUser ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row'
                    }`}
                  >
                    {!isUser && (
                      <div className="flex-shrink-0 h-6 w-6 rounded-full overflow-hidden border border-white/10 bg-neutral-900 mt-1">
                        <img src="/char-mouth-closed.png" alt="AI Bill" className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow">
                        <div
                          className={`p-3 rounded-xl leading-relaxed text-[11px] whitespace-pre-wrap ${
                            isUser
                              ? 'bg-aeo-cyan/15 text-aeo-cyan rounded-tr-none border border-aeo-cyan/15'
                              : 'bg-white/[0.03] text-white/90 rounded-tl-none border border-white/5'
                          }`}
                        >
                        {msg.text}
                      </div>

                  {/* Dynamic Telemetry Display */}
                  {msg.telemetry?.insightResult && (
                    <div className="mt-2 w-full space-y-4">
                      
                      {/* Signature: AI First Impression */}
                      <div className="bg-black/60 border border-aeo-cyan/20 rounded-xl p-3 font-mono text-[10px] text-white/90 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
                        <div className="text-[9px] uppercase tracking-wider text-aeo-cyan mb-2">AI First Impression</div>
                        <div className="text-[11px] leading-relaxed italic text-white/80">
                          "{msg.telemetry.insightResult.firstImpression.headline}"
                        </div>
                        <div className="mt-2 space-y-1">
                          {msg.telemetry.insightResult.firstImpression.reasoning.map((r: string, i: number) => (
                            <div key={i} className="text-[10px] text-white/60">{r}</div>
                          ))}
                        </div>
                      </div>

                      {/* Blind Spot & Recommendation Test */}
                      <div className="bg-black/60 border border-white/10 rounded-xl p-3 space-y-3">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-amber-400 mb-1">Biggest Blind Spot</div>
                          <div className="text-[10px] font-semibold text-white/90">{msg.telemetry.insightResult.blindSpot.title}</div>
                          <div className="text-[10px] text-white/70">{msg.telemetry.insightResult.blindSpot.description}</div>
                        </div>

                        <div className="pt-3 border-t border-white/5">
                          <div className="text-[9px] uppercase tracking-wider text-aeo-purple mb-2">AI Recommendation Test</div>
                          <div className="text-[10px] text-white/60 mb-1">"If someone asked an AI about this, would it recommend you?"</div>
                          <div className="flex gap-2 items-start mt-1.5">
                            <span className="text-lg leading-none">
                              {msg.telemetry.insightResult.recommendationTest.wouldRecommend ? '✅' : '❌'}
                            </span>
                            <div>
                              <div className="text-[11px] font-bold text-white leading-none">{msg.telemetry.insightResult.recommendationTest.verdict}</div>
                              <div className="text-[10px] text-white/70 mt-1">{msg.telemetry.insightResult.recommendationTest.reasoning}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              </div>
            );
          })}

              {isThinking && (
                <div className="flex items-start max-w-[85%]">
                  <div className="p-3 bg-white/[0.03] text-white/50 rounded-xl rounded-tl-none border border-white/5 flex items-center gap-1.5 font-mono text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </>
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

            {/* Quick Action Diagnostic Buttons */}
            {telemetryData && (
              <div className="flex flex-wrap gap-1.5 pb-2">
                <button
                  onClick={() => setInputText("Explain my Vector Proximity similarity score vs competitor.")}
                  className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2.5 py-1 rounded-lg text-white/70 transition-colors cursor-pointer"
                >
                  Explain Proximity
                </button>
                <button
                  onClick={() => setInputText("What do these extracted Semantic Graph Triples represent?")}
                  className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2.5 py-1 rounded-lg text-white/70 transition-colors cursor-pointer"
                >
                  Explain Graph Triples
                </button>
                <button
                  onClick={() => setInputText("Why was my content dropped in the RAG retrieval simulation?")}
                  className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2.5 py-1 rounded-lg text-white/70 transition-colors cursor-pointer"
                >
                  Explain RAG Status
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem('aeo_telemetry_latest');
                    setTelemetryData(null);
                    setMessages([
                      {
                        sender: 'assistant',
                        text: "AI Bill active. Ready to run technical diagnostics or clarify search visibility metrics. Submit your URL to begin."
                      }
                    ]);
                  }}
                  className="text-[9px] bg-rose-950/40 border border-rose-500/20 hover:bg-rose-950/80 px-2.5 py-1 rounded-lg text-rose-300 transition-colors cursor-pointer ml-auto"
                >
                  Reset Audit
                </button>
              </div>
            )}

            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message AI Bill..."
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

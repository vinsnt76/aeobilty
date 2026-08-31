"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Send } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { TelemetryResult } from '@/lib/telemetry/types';
import { CompanionCard } from '@/lib/search/types';
import BillAvatar from '@/components/BillAvatar';
import { trackGaEvent } from '@/lib/gtag';

interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  telemetry?: TelemetryResult;
  cards?: CompanionCard[];
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
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'assistant',
      text: "G’day. Bill here. Ready to increase your visibility. Ask anything."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [telemetryData, setTelemetryData] = useState<{ url?: string; clientUrl?: string; intent?: string; result?: TelemetryResult } | null>(null);

  type BillState = "HIDDEN" | "ANALYSING" | "INTRODUCTION" | "INSIGHT_REVEAL" | "EMAIL_CAPTURE" | "CONSULTANT" | "FOLLOW_UP";
  const [billState, setBillState] = useState<BillState>('HIDDEN');
  const [onboardEmail, setOnboardEmail] = useState('');

  const handleEmailCapture = async (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessages(prev => [...prev, { sender: 'assistant', text: "That doesn't look like a valid email address. Could you double-check it for me?" }]);
      return;
    }

    // Domain validation against crawled site
    const emailDomain = email.split('@')[1]?.toLowerCase();
    const siteUrl = telemetryData?.clientUrl || telemetryData?.url || '';
    let siteDomain = '';
    try {
      siteDomain = new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`).hostname.replace('www.', '').toLowerCase();
    } catch {
      siteDomain = '';
    }

    if (siteDomain && emailDomain !== siteDomain) {
      setMessages(prev => [...prev, { sender: 'assistant', text: `For security reasons, please use an email address ending in @${siteDomain} to access this proprietary report.` }]);
      return;
    }

    setOnboardEmail(email);
    window.dispatchEvent(new Event('bill_email_submitted'));
    trackGaEvent('bill_email_submitted', { event_category: 'AI Assistant', email });
    try {
      await fetch('/api/forms/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: telemetryData?.url, intent: telemetryData?.intent })
      });
      setBillState('CONSULTANT');
      window.dispatchEvent(new Event('bill_consultation_started'));
      trackGaEvent('bill_consultation_started', { event_category: 'AI Assistant' });
      setMessages(prev => [
        ...prev,
        { sender: 'assistant', text: `Thanks! I've sent the full insights to ${email}.\n\nYou can now ask me:\n• Why is my score low?\n• What should I fix first?\n• How do I compare to competitors?\n• Explain my AI First Impression` }
      ]);
    } catch (e: unknown) {
      console.error(e);
      // ignore
      setBillState('CONSULTANT');
      window.dispatchEvent(new Event('bill_consultation_started'));
      trackGaEvent('bill_consultation_started', { event_category: 'AI Assistant' });
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const updatePosition = () => {
      if (!window.visualViewport || !drawerRef.current) return;
      const vvHeight = window.visualViewport.height;
      if (window.innerWidth < 768) {
        drawerRef.current.style.maxHeight = `${Math.min(vvHeight - 100, 600)}px`;
      } else {
        drawerRef.current.style.maxHeight = '';
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

  const loadTelemetryFromStorage = () => {

    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem('aeo_telemetry_latest');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setTelemetryData(parsed);
      } catch (err) {
        console.error("Failed to parse telemetry storage:", err);
      }
    }
  };

  useEffect(() => {
    // Event listener for external triggers to open a new fresh session
    const handleOpenNewSession = () => {
      // Close BillWidget drawer if open to prevent visual collision
      window.dispatchEvent(new Event('close_bill_widget'));
      setIsOpen(true);
      window.dispatchEvent(new Event('bill_opened'));
      const raw = localStorage.getItem('aeo_telemetry_latest');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setTelemetryData(parsed);
          const blindSpot = parsed.result?.insightResult?.blindSpot;
          const intent = parsed.intent;
          
          setBillState('INTRODUCTION');
          setMessages([
            {
              sender: 'assistant',
              text: `👋 Hi, I'm Bill.\nI've finished reviewing your website.`
            },
            {
              sender: 'assistant',
              text: `A quick note:\nThis isn't an SEO ranking score.\nI'm measuring how clearly AI systems can understand your business, products, and expertise.`
            },
            {
              sender: 'assistant',
              text: `The biggest thing I noticed:\n${blindSpot?.title || 'An alignment gap'}\n\n${blindSpot?.description || 'Your semantic signals are weak.'}\n\nThis means you may appear when someone searches for "${intent}", but you lose authority for related semantic searches.`
            }
          ]);
          window.dispatchEvent(new Event('bill_first_insight_viewed'));

          setTimeout(() => {
            setMessages(prev => [...prev, {
              sender: 'assistant',
              text: `I've uncovered 5 more opportunities that could improve how AI understands and recommends your business.\n\nI'll prepare your full AI Visibility Report, including:\n✓ Competitor gaps\n✓ Missing business entities\n✓ Content opportunities\n✓ Priority recommendations\n\nWhere should I send it?`
            }]);
            setBillState('EMAIL_CAPTURE');
            window.dispatchEvent(new Event('bill_email_requested'));
          }, 4000);
        } catch (err) {
          console.error("Failed parsing telemetry JSON:", err);
        }
      }
    };

    const handleCloseCompanion = () => {
      setIsOpen(false);
    };

    window.addEventListener('aeo_telemetry_updated', loadTelemetryFromStorage);
    window.addEventListener('open_new_bill_session', handleOpenNewSession);
    window.addEventListener('close_companion_widget', handleCloseCompanion);
    window.addEventListener('open_bill_drawer', handleCloseCompanion);
    window.addEventListener('open_bill_with_query', handleCloseCompanion);

    return () => {
      window.removeEventListener('aeo_telemetry_updated', loadTelemetryFromStorage);
      window.removeEventListener('open_new_bill_session', handleOpenNewSession);
      window.removeEventListener('close_companion_widget', handleCloseCompanion);
      window.removeEventListener('open_bill_drawer', handleCloseCompanion);
      window.removeEventListener('open_bill_with_query', handleCloseCompanion);
    };
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const openDeepTelemetryDrawer = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event('close_companion_widget'));
    router.push('/diagnostic');
    window.dispatchEvent(new Event('open_bill_drawer'));
  };

  const handleSendMessage = async (overrideText?: string) => {
    const textToSend = (typeof overrideText === 'string' ? overrideText : inputText).trim();
    if (isThinking || !textToSend) return;

    setInputText('');
    setMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    setIsThinking(true);

    const userMsg = textToSend;

    try {
      // Conversational Onboarding / Pre-Audit Search Interception
      if (billState !== 'CONSULTANT') {
        if (billState === 'EMAIL_CAPTURE') {
          await handleEmailCapture(userMsg);
        } else {
          // Direct URL Submission Interception
          const isDirectUrlSubmission = /^https?:\/\//i.test(userMsg) || (/\.[a-z]{2,}/i.test(userMsg) && !userMsg.includes(' '));
          if (isDirectUrlSubmission) {
            setMessages(prev => [
              ...prev,
              { sender: 'assistant', text: `Diagnostic mode initiated for ${userMsg}. Launching live telemetry drawer...` }
            ]);
            openDeepTelemetryDrawer();
            setIsThinking(false);
            return;
          }

          // Instant RAG Pre-Audit Internal Search
          try {
            const res = await fetch('/api/search/answer', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ query: userMsg, routeContext: pathname })
            });
            if (res.ok) {
              const data = await res.json();
              const answerText = data.answer || "I've searched our knowledge base. Submit your site URL to run a live diagnostic audit!";
              setMessages(prev => [
                ...prev, 
                { 
                  sender: 'assistant', 
                  text: answerText,
                  cards: data.cards
                }
              ]);
              if (data.triggerBillScan) {
                openDeepTelemetryDrawer();
              }
            }
          } catch (err) {
            console.error("Pre-audit RAG search failed:", err);
          }
        }
        setIsThinking(false);
        return;
      }

      const isScanRequest = /\b(audit|scan|telemetry|vector|proximity|graph)\b/i.test(userMsg);
      let telemetryContext = null;

      if (isScanRequest) {
        setMessages(prev => [
          ...prev,
          { sender: 'assistant', text: "Understood. Initiating active AEO telemetry sensors across the site now. Hang tight..." }
        ]);

        try {
          const telemetryRes = await fetch('/api/diagnostic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              intent: 'AEO and AI search engine optimisation services for Australian businesses',
              clientText: 'AEObility helps your business appear, make sense, and stand out across Search, Maps & AI so you get found and chosen without the complexity. Traditional SEO is speculative; we use active telemetry.',
              competitors: [
                'Generic SEO Inc - traditional keyword density and backlinks company',
                'Speculative AEO Co - prompt engineering optimisation theatre'
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
    } catch (error) {
      console.error("Error sending message:", error);
      const errResponse = "My connection sequence glitched, V Man. Let's run a quick 68-second Ctrl+Alt+Delete!";
      setMessages(prev => [...prev, { sender: 'assistant', text: errResponse }]);
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
  };

  // Suppress AI Bill companion widget on /about, /freelance, and /diagnostic routes
  if (pathname?.startsWith('/about') || pathname?.includes('freelance') || pathname?.startsWith('/diagnostic')) {
    return null;
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        id="companion-widget-toggle"
        onClick={toggleWidget}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 left-auto z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border bg-neutral-950 shadow-2xl transition-all duration-300 group hover:scale-105 overflow-hidden touch-manipulation ${
          isOpen ? 'border-aeo-purple text-aeo-purple' : 'border-aeo-cyan text-aeo-cyan'
        }`}
        title="Chat with AI Bill"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <BillAvatar size="lg" pulse status={telemetryData ? 'online' : 'online'} />
        )}
      </button>

      {/* Floating Drawer */}
      <div
        ref={drawerRef}
        className={`fixed right-4 sm:right-6 bottom-20 sm:bottom-24 left-auto z-50 w-[calc(100vw-2rem)] sm:w-[480px] max-w-[480px] h-[520px] sm:h-[600px] max-h-[calc(100dvh-6rem)] bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Drawer Header Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-neutral-900/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold font-mono tracking-wide text-white uppercase">AI Bill</span>
            <span className="text-[10px] text-zinc-400 font-mono border-l border-white/10 pl-2">Online</span>
          </div>
          <div className="flex items-center gap-2">
            {telemetryData && (
              <button
                type="button"
                onClick={openDeepTelemetryDrawer}
                className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 hover:bg-aeo-cyan/20 px-2 py-0.5 rounded border border-aeo-cyan/25 transition cursor-pointer touch-manipulation"
              >
                Telemetry ↗
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer touch-manipulation"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Section: Centered Larger Avatar under Top Bar */}
        <div className="flex flex-col items-center justify-center pt-4 pb-3 border-b border-white/5 bg-gradient-to-b from-neutral-900/60 to-transparent shrink-0">
          <BillAvatar size="lg" pulse status="online" />
          <h4 className="mt-2 text-xs font-mono font-bold tracking-wider text-white uppercase">AI Bill</h4>
          <p className="text-[10px] text-zinc-400 font-mono">AEObility Search & UX Guide</p>
        </div>

        {billState === 'CONSULTANT' && telemetryData && (
          <div className="bg-black/60 border-b border-white/10 p-3 text-[10px] space-y-2 relative z-10 shadow-md">
            <div className="flex justify-between items-center text-white/50 uppercase tracking-wider mb-1">
              <span>AI Bill&apos;s Summary</span>
            </div>
            <div>
              <span className="text-white/40">Current perception:</span>
              <div className="text-white/90">&quot;{telemetryData.result?.insightResult?.diagnosis?.currentState}&quot;</div>
            </div>
            <div>
              <span className="text-white/40">Opportunity:</span>
              <div className="text-aeo-cyan">&quot;{telemetryData.result?.insightResult?.diagnosis?.desiredState}&quot;</div>
            </div>
            <div>
              <span className="text-white/40">Biggest improvement:</span>
              <div className="text-white/90">{telemetryData.result?.insightResult?.summary?.nextAction}</div>
            </div>
          </div>
        )}

        <div className="flex-grow overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] p-4 space-y-4 text-xs">

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
                      <div className="flex-shrink-0 relative h-6 w-6 rounded-full overflow-hidden border border-white/10 bg-neutral-900 mt-1">
                        <Image src="/char-mouth-closed.png" alt="AI Bill" fill sizes="24px" className="object-cover" />
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
                        {msg.cards && msg.cards.length > 0 && (
                          <div className="mt-2.5 space-y-2 w-full pt-1 border-t border-white/10">
                            {msg.cards.map((card, cardIdx) => (
                              <a
                                key={cardIdx}
                                href={card.url}
                                onClick={(e) => {
                                  if (card.type === 'action') {
                                    e.preventDefault();
                                    openDeepTelemetryDrawer();
                                  }
                                }}
                                className="block p-2.5 rounded-lg bg-black/60 border border-white/10 hover:border-aeo-cyan/50 hover:bg-neutral-900 transition group cursor-pointer"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-[11px] font-bold text-white group-hover:text-aeo-cyan transition">{card.title}</span>
                                  <span className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/20 shrink-0">
                                    {card.ctaText || 'View ➔'}
                                  </span>
                                </div>
                                {card.description && (
                                  <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">{card.description}</p>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

                  {/* Dynamic Telemetry Display */}
                  {msg.telemetry?.insightResult && (
                    <div className="mt-2 w-full space-y-4">
                      
                      {/* Signature: AI First Impression */}
                      <div className="bg-black/60 border border-aeo-cyan/20 rounded-xl p-3 font-mono text-[10px] text-white/90 shadow-[0_0_15px_rgba(0,205,216,0.05)]">
                        <div className="text-[9px] uppercase tracking-wider text-aeo-cyan mb-2">AI First Impression</div>
                        <div className="text-[11px] leading-relaxed italic text-white/80">
                          &quot;{msg.telemetry.insightResult?.firstImpression?.headline}&quot;
                        </div>
                        <div className="mt-2 space-y-1">
                          {msg.telemetry.insightResult?.firstImpression?.reasoning?.map((r: string, i: number) => (
                            <div key={i} className="text-[10px] text-white/60">{r}</div>
                          ))}
                        </div>
                      </div>

                      {/* Blind Spot & Recommendation Test */}
                      <div className="bg-black/60 border border-white/10 rounded-xl p-3 space-y-3">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-amber-400 mb-1">Biggest Blind Spot</div>
                          <div className="text-[10px] font-semibold text-white/90">{msg.telemetry.insightResult?.blindSpot?.title}</div>
                          <div className="text-[10px] text-white/70">{msg.telemetry.insightResult?.blindSpot?.description}</div>
                        </div>

                        <div className="pt-3 border-t border-white/5">
                          <div className="text-[9px] uppercase tracking-wider text-aeo-purple mb-2">AI Recommendation Test</div>
                          <div className="text-[10px] text-white/60 mb-1">&quot;If someone asked an AI about this, would it recommend you?&quot;</div>
                          <div className="flex gap-2 items-start mt-1.5">
                            <span className="text-lg leading-none">
                              {msg.telemetry.insightResult?.recommendationTest?.wouldRecommend ? '✅' : '❌'}
                            </span>
                            <div>
                              <div className="text-[11px] font-bold text-white leading-none">{msg.telemetry.insightResult?.recommendationTest?.verdict}</div>
                              <div className="text-[10px] text-white/70 mt-1">{msg.telemetry.insightResult?.recommendationTest?.reasoning}</div>
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
              
              {billState === 'EMAIL_CAPTURE' && (
                <div className="mt-4 p-4 bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-white/20 rounded-xl space-y-3 shadow-[0_0_15px_rgba(0,205,216,0.05)] max-w-[90%]">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={onboardEmail}
                      onChange={e => setOnboardEmail(e.target.value)}
                      className="flex-grow bg-black/60 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-aeo-cyan text-base sm:text-[11px] touch-manipulation"
                      onKeyDown={e => {
                        if (e.key === 'Enter') handleEmailCapture(onboardEmail);
                      }}
                    />
                    <button
                      onClick={() => handleEmailCapture(onboardEmail)}
                      className="px-4 py-2 bg-white text-black font-semibold rounded-lg text-[11px] hover:bg-white/90 transition-colors"
                    >
                      Send My Report & Continue With Bill
                    </button>
                  </div>
                </div>
              )}
            </>
          <div ref={messagesEndRef} />
        </div>

        {/* Footer Tray */}
        <div className="border-t border-white/10 p-3 space-y-2.5 bg-neutral-950 shrink-0">
          {/* Main Input Form */}
          {billState !== 'EMAIL_CAPTURE' && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search AEObility or ask Bill anything..."
                spellCheck={false}
                suppressHydrationWarning
                className="flex-grow bg-neutral-900 border border-white/15 rounded-xl px-3 py-2 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-aeo-cyan transition-colors touch-manipulation"
              />
              <button
                type="submit"
                disabled={isThinking || !inputText.trim()}
                className="flex items-center justify-center p-2 rounded-xl bg-aeo-cyan text-black hover:bg-aeo-cyan/90 disabled:opacity-40 transition-colors cursor-pointer shrink-0"
                title="Send Message / Search"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Personality Chips under the input bar */}
          {!telemetryData && billState !== 'CONSULTANT' && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <button
                type="button"
                onClick={() => handleSendMessage("What AEO services do you offer?")}
                className="text-[9px] bg-aeo-cyan/10 border border-aeo-cyan/20 hover:bg-aeo-cyan/20 px-2 py-0.5 rounded-md text-aeo-cyan transition cursor-pointer"
              >
                Find a Service
              </button>
              <a
                href="/contact"
                className="text-[9px] bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/30 px-2 py-0.5 rounded-md text-emerald-400 font-semibold transition cursor-pointer flex items-center gap-1"
              >
                Get a Quote ➔
              </a>
              <button
                type="button"
                onClick={() => openDeepTelemetryDrawer()}
                className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2 py-0.5 rounded-md text-zinc-300 transition cursor-pointer"
              >
                Scan My Site ➔
              </button>
              <button
                type="button"
                onClick={() => handleSendMessage("What is AEO?")}
                className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2 py-0.5 rounded-md text-zinc-300 transition cursor-pointer"
              >
                Explain AEO
              </button>
              <button
                type="button"
                onClick={() => handleSendMessage("Where is pricing?")}
                className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2 py-0.5 rounded-md text-zinc-300 transition cursor-pointer"
              >
                Show Pricing
              </button>
            </div>
          )}

          {/* Quick Action Diagnostic Buttons when telemetry exists */}
          {billState === 'CONSULTANT' && telemetryData && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <button
                type="button"
                onClick={() => handleSendMessage("What is the highest priority structural gap and what should I fix first?")}
                className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2.5 py-1 rounded-lg text-white/80 transition-colors cursor-pointer"
              >
                What to fix first
              </button>
              <button
                type="button"
                onClick={() => handleSendMessage("How can I improve my AI Visibility Score and entity clarity?")}
                className="text-[9px] bg-white/5 border border-white/10 hover:bg-white/10 px-2.5 py-1 rounded-lg text-white/80 transition-colors cursor-pointer"
              >
                Improve score
              </button>
              <button
                type="button"
                onClick={() => handleSendMessage("How does The AEObility Blueprint fix these local entity gaps and what are the deliverables?")}
                className="text-[9px] bg-aeo-cyan/15 border border-aeo-cyan/40 hover:bg-aeo-cyan/25 px-2.5 py-1 rounded-lg text-aeo-cyan font-bold transition-colors cursor-pointer"
              >
                View Blueprint ($995) ➔
              </button>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem('aeo_telemetry_latest');
                  setTelemetryData(null);
                  setMessages([
                    {
                      sender: 'assistant',
                      text: "G’day. Bill here. Ready to increase your visibility. Ask anything."
                    }
                  ]);
                }}
                className="text-[9px] bg-rose-950/40 border border-rose-500/20 hover:bg-rose-950/80 px-2.5 py-1 rounded-lg text-rose-300 transition-colors cursor-pointer ml-auto"
              >
                Reset Audit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

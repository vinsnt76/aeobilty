"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './card.css';

export default function VinceBakerPage() {
  const [walletUrl, setWalletUrl] = useState<string | null>(null);
  const [shareTooltip, setShareTooltip] = useState('Share');

  useEffect(() => {
    fetch('/api/wallet-pass')
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          setWalletUrl(data.url);
        }
      })
      .catch((err) => console.error("Error fetching Google Wallet pass link:", err));
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Vinnie Baker - AEObility',
      text: 'Vinnie Baker - Founder, AEO & AI Automation Specialist',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareTooltip('Link Copied!');
        setTimeout(() => {
          setShareTooltip('Share');
        }, 2000);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    }
  };

  return (
    <main className="card-page-container">
      {/* Hidden Entity Schema */}
      <script
        id="vince-baker-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vinnie Baker",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "AEObility",
              "url": "https://aeobility.com.au"
            },
            "sameAs": [
              "https://www.linkedin.com/in/vince-baker/"
            ]
          })
        }}
      />
      <div className="card-container">
        <div className="card-image">
          <Image
            src="/Profile-Picture-Vinnie.png"
            alt="Vinnie Baker"
            width={320}
            height={320}
            priority
            className="object-cover"
          />
        </div>
        <div className="card-description">
          <h1>Vinnie Baker</h1>
          <h2>Founder, AEO & AI Automation Specialist</h2>
          
          <div className="card-about">
            <span className="greeting">Hi there! I&apos;m Vinnie</span>
            <p className="value-statement">
              I help Australian small businesses get found and chosen across Search, Maps, and AI platforms. With a focus on AI Search Optimisation (AEO), local SEO, and practical AI automation, I help brands build visible, trustworthy digital footprints.
            </p>
            <div className="linkedin-follow-link" style={{ marginTop: '1rem' }}>
              <a
                href="https://www.linkedin.com/in/vince-baker/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link-text"
                style={{ color: '#00f0ff', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'underline' }}
              >
                Connect with Vinnie Baker on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/vince-baker/"
              className="card-hover-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="card-tooltip-text" id="fade">
                LinkedIn
              </span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/vinsnt76"
              className="card-hover-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="card-tooltip-text" id="fade">
                GitHub
              </span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="tel:0480286282"
              className="card-hover-text"
            >
              <span className="card-tooltip-text" id="fade">
                Phone
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              href="mailto:vince@aeobility.com.au"
              className="card-hover-text"
            >
              <span className="card-tooltip-text" id="fade">
                Email
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="/my-portfolio"
              className="card-hover-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="card-tooltip-text" id="fade">
                Resume
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <button
              onClick={handleShare}
              className="card-hover-text"
            >
              <span className="card-tooltip-text" id="fade">
                {shareTooltip}
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>

          {walletUrl && (
            <div className="google-wallet-btn-container">
              <a
                href={walletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="google-wallet-btn"
              >
                <Image
                  src="/google-wallet-icon.png"
                  alt="Add to Google Wallet"
                  width={150}
                  height={47}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}


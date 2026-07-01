"use client";

import React, { useState, useEffect } from 'react';
import '../../vince-baker/card.css';

const Contact: React.FC = () => {
  const [walletUrl, setWalletUrl] = useState<string | null>(null);

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

  return (
    <section id="contact" className="w-full flex flex-col items-center py-20 scroll-mt-24 bg-black text-white">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">
        Get in <span className="text-gradient-aeo">Touch.</span>
      </h2>
      <div className="card-container scale-95 md:scale-100 hover:scale-[1.02] transition-transform duration-300">
        <div className="card-image">
          <img src="/Profile-Picture-Vinnie.png" alt="Vince Baker" />
        </div>
        <div className="card-description">
          <h1>Vince Baker</h1>
          <h2>Founder, AEO & AI Automation Specialist</h2>
          
          <div className="card-about">
            <span className="greeting">Hi there! I'm Vince</span>
            <p className="value-statement">
              I help Australian small businesses get found and chosen across Search, Maps, and AI platforms. With a focus on AI Search Optimisation (AEO), local SEO, and practical AI automation, I help brands build visible, trustworthy digital footprints.
            </p>
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
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              href="mailto:vince.yumi@gmail.com"
              className="card-hover-text"
            >
              <span className="card-tooltip-text" id="fade">
                Email
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {walletUrl && (
            <div className="google-wallet-btn-container">
              <a
                href={walletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="google-wallet-btn"
              >
                <img
                  src="/google-wallet-icon.png"
                  alt="Add to Google Wallet"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
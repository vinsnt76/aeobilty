import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5 text-white/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Logo / Text */}
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-aeo-cyan"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2L2 10L16 18L30 10L16 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 22L16 30L30 22"
              stroke="#bd00ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold tracking-wider text-white">
            AEO<span className="text-aeo-cyan font-light">bility</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs font-medium">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#blueprint" className="hover:text-white transition-colors">
            Blueprint
          </a>
          <a href="#usp" className="hover:text-white transition-colors">
            USP
          </a>
          <a href="#audit-form" className="hover:text-white transition-colors">
            Contact
          </a>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-[10px] text-white/30 font-light">
          © {new Date().getFullYear()} AEObility. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

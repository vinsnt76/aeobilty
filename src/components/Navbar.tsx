'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: '90-Day Blueprint', href: '/#blueprint' },
    { name: 'USP', href: '/#usp' },
    { name: 'AEO Services', href: '/services/aeo' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <nav className="w-full bg-black/60 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <svg
            className="w-8 h-8 text-aeo-cyan group-hover:scale-105 transition-transform"
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
            <path
              d="M2 16L16 24L30 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
          </svg>
          <span className="text-xl font-bold tracking-wider text-white">
            AEO<span className="text-aeo-cyan font-light">bility</span>
          </span>
        </Link>

        {/* Desktop Menu links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/75">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-aeo-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/#audit-form"
            className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase border border-aeo-cyan/35 text-aeo-cyan rounded-full hover:bg-aeo-cyan hover:text-black hover:border-aeo-cyan transition-all"
          >
            Free Audit
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors relative z-50"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center md:hidden transition-all duration-300">
          <div className="flex flex-col items-center gap-8 text-lg font-bold text-white/85">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-aeo-cyan transition-all duration-200 py-2 border-b border-transparent hover:border-aeo-cyan"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#audit-form"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3.5 text-sm font-bold tracking-wider uppercase border border-aeo-cyan text-aeo-cyan rounded-full hover:bg-aeo-cyan hover:text-black transition-all"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

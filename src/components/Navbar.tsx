"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Calendar, ArrowRight, X, Phone, Search } from 'lucide-react';
import MobileMenuButton from '@/components/navigation/MobileMenuButton';
import MobileMenuOverlay from '@/components/navigation/MobileMenuOverlay';
import MobileMenuAccordion from '@/components/navigation/MobileMenuAccordion';
import { NAVIGATION_DATA } from '@/components/navigation/NavData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-black/5 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" aria-label="AEObility Home" className="flex items-center group">
            {/* Desktop Full Logo */}
            <Image
              src="/aeobility-logo-light.svg"
              alt="AEObility Logo"
              width={180}
              height={40}
              className="h-10 w-auto object-contain hidden lg:block group-hover:scale-105 transition-transform"
              priority
            />
            {/* Mobile Standalone Circular Logo Badge (32px x 32px) */}
            <div className="flex lg:hidden h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1e1e1e] backdrop-blur-md border border-cyan-500/30 group-hover:border-cyan-400 active:scale-95 transition-all shadow-[0_0_10px_rgba(6,182,212,0.15)] shrink-0 overflow-hidden">
              <Image
                src="/aeobility-icon-dark.svg"
                alt="AEObility Icon"
                width={28}
                height={28}
                className="h-[28px] w-[28px] object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-4 xl:gap-8 text-sm font-semibold text-black/80" ref={dropdownRef}>
              {NAVIGATION_DATA.map((link) => {
                if (link.children) {
                  const isAnySubActive = link.children.some(sub => pathname === sub.href) || (link.href && pathname === link.href);
                  const isCurrentDropdownOpen = activeDropdown === link.title;
                  return (
                    <div
                      key={link.title}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(link.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={link.href || '#'}
                        className={`flex items-center gap-1.5 py-2 hover:text-aeo-cyan transition-colors focus:outline-none cursor-pointer ${
                          isAnySubActive ? 'text-aeo-cyan' : ''
                        }`}
                      >
                        <span>{link.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCurrentDropdownOpen ? 'rotate-180' : ''}`} />
                      </Link>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl border border-black/10 rounded-xl p-2 shadow-2xl transition-all duration-200 origin-top-left z-50 ${
                          isCurrentDropdownOpen
                            ? 'opacity-100 scale-100 translate-y-0 visible'
                            : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                        }`}
                      >
                        {link.children.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${
                                isSubActive
                                  ? 'bg-aeo-cyan/10 text-aeo-cyan font-bold'
                                  : 'hover:bg-black/5 text-black/80 hover:text-black font-medium'
                              }`}
                            >
                              <span>{subItem.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                const isActive = link.href ? pathname === link.href : false;
                return (
                  <Link
                    key={link.title}
                    href={link.href || '#'}
                    className={`hover:text-aeo-cyan transition-colors py-2 ${
                      isActive ? 'text-aeo-cyan' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Action Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Phone Call Quick Link */}
              <a
                href="tel:0480286282"
                aria-label="Call AEObility (0480 286 282)"
                title="Call AEObility (0480 286 282)"
                className="flex min-h-[40px] min-w-[40px] h-10 w-10 items-center justify-center rounded-xl bg-[#1e1e1e] backdrop-blur-md text-cyan-300 border border-cyan-500/30 hover:bg-zinc-800 hover:text-cyan-200 hover:border-cyan-400 active:scale-95 transition-all shadow-sm"
              >
                <Phone className="h-4 w-4" />
              </a>

              {/* Calendar / Booking Quick Link */}
              <Link
                href="/book"
                aria-label="Book Strategy Session"
                title="Book Strategy Session"
                className="flex min-h-[40px] min-w-[40px] h-10 w-10 items-center justify-center rounded-xl bg-[#1e1e1e] backdrop-blur-md text-purple-300 border border-purple-500/30 hover:bg-zinc-800 hover:text-purple-200 hover:border-purple-400 active:scale-95 transition-all shadow-sm"
              >
                <Calendar className="h-4 w-4" />
              </Link>

              {/* Internal Search Quick Link (⌘K) */}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open_answer_search_modal'))}
                aria-label="Search Site Architecture (⌘K)"
                title="Search Site Architecture (⌘K)"
                className="flex min-h-[40px] min-w-[40px] h-10 w-10 items-center justify-center rounded-xl bg-[#1e1e1e] backdrop-blur-md text-cyan-300 border border-cyan-500/30 hover:bg-zinc-800 hover:text-cyan-200 hover:border-cyan-400 active:scale-95 transition-all shadow-sm"
              >
                <Search className="h-4 w-4" />
              </button>

              <Link
                href="/diagnostic"
                className="px-4 py-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-pink-500 to-aeo-purple text-white rounded-full hover:opacity-90 transition-all shadow-md border-0 ml-1"
              >
                Visibility Score
              </Link>
            </div>
          </div>

          {/* Mobile Right Action Stack & Hamburger Menu Toggle Button Island */}
          <div className="flex items-center gap-2.5 sm:gap-3 lg:hidden">
            {/* Phone Call Quick Link */}
            <a
              href="tel:0480286282"
              aria-label="Call AEObility"
              className="flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center rounded-xl bg-[#1e1e1e] backdrop-blur-md text-cyan-300 border border-cyan-500/30 hover:bg-zinc-800 hover:text-cyan-200 hover:border-cyan-400 active:scale-95 transition-all shadow-sm"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Calendar / Booking Quick Link */}
            <Link
              href="/book"
              aria-label="Book Strategy Session"
              className="flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center rounded-xl bg-[#1e1e1e] backdrop-blur-md text-purple-300 border border-purple-500/30 hover:bg-zinc-800 hover:text-purple-200 hover:border-purple-400 active:scale-95 transition-all shadow-sm"
            >
              <Calendar className="h-4 w-4" />
            </Link>

            {/* Internal Search Quick Link (⌘K) */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open_answer_search_modal'))}
              aria-label="Search Site Architecture (⌘K)"
              className="flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center rounded-xl bg-[#1e1e1e] backdrop-blur-md text-cyan-300 border border-cyan-500/30 hover:bg-zinc-800 hover:text-cyan-200 hover:border-cyan-400 active:scale-95 transition-all shadow-sm"
            >
              <Search className="h-4 w-4" />
            </button>

            <MobileMenuButton isOpen={isOpen} onToggle={() => setIsOpen(prev => !prev)} />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Island (Mounted to document.body via Portal at z-[10000]) */}
      <MobileMenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {/* Mobile Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center">
            <Image
              src="/aeobility-logo-dark.svg"
              alt="AEObility Logo"
              width={140}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Search Trigger Button (⌘K) */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(false);
            window.dispatchEvent(new CustomEvent('open_answer_search_modal'));
          }}
          className="w-full mt-3 flex items-center justify-between py-2.5 px-4 text-xs font-semibold bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors text-left"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-aeo-cyan" />
            <span>Search...</span>
          </div>
          <kbd className="px-2 py-0.5 text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 border border-aeo-cyan/20 rounded font-bold">⌘K</kbd>
        </button>

        {/* Accordion Content */}
        <MobileMenuAccordion onClose={() => setIsOpen(false)} />

        {/* Bottom CTA Funnel Actions */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <span className="text-[10px] font-bold text-aeo-cyan uppercase tracking-widest block mb-2 font-mono">
            Discovery &amp; Strategy
          </span>

          <Link
            href="/diagnostic"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between w-full py-3 px-4 text-xs font-bold bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black rounded-xl hover:scale-[1.01] transition-transform shadow-lg"
          >
            <span>Run Free Visibility Scan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/solutions/aeo-blueprint"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between w-full py-3 px-4 text-xs font-bold bg-white/5 border border-white/15 text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <span>View the Blueprint</span>
            <ArrowRight className="w-4 h-4 text-aeo-cyan" />
          </Link>
        </div>
      </MobileMenuOverlay>
    </>
  );
}

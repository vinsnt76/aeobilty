"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Calendar, ArrowRight, X, Phone } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            {/* Desktop Full Logo */}
            <Image
              src="/aeobility-logo-light.svg"
              alt="AEObility Logo"
              width={180}
              height={40}
              className="h-10 w-auto object-contain hidden lg:block group-hover:scale-105 transition-transform"
              priority
            />
            {/* Mobile Icon Logo */}
            <Image
              src="/aeobility-icon-light.svg"
              alt="AEObility Icon"
              width={36}
              height={36}
              className="h-9 w-9 object-contain block lg:hidden group-hover:scale-105 transition-transform"
              priority
            />
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
                              {subItem.description && (
                                <p className="text-[11px] font-normal text-black/50 line-clamp-1 mt-0.5">
                                  {subItem.description}
                                </p>
                              )}
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
            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black hover:text-aeo-cyan transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Call
              </Link>
              <Link
                href="/diagnostic"
                className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-pink-500 to-aeo-purple text-white rounded-full hover:opacity-90 transition-all shadow-md border-0"
              >
                Visibility Score
              </Link>
            </div>
          </div>

          {/* Mobile Right Action Stack & Hamburger Menu Toggle Button Island */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Phone Call Quick Link */}
            <a
              href="tel:+61400000000"
              aria-label="Call AEObility"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 border border-black/10 text-aeo-cyan hover:bg-aeo-cyan/10 active:scale-95 transition-all"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Calendar / Scan Quick Link */}
            <Link
              href="/diagnostic"
              aria-label="Run Visibility Scan or Book Session"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 border border-black/10 text-aeo-purple hover:bg-aeo-purple/10 active:scale-95 transition-all"
            >
              <Calendar className="h-4 w-4" />
            </Link>

            <MobileMenuButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Island (Mounted to document.body via Portal at z-[10000]) */}
      <MobileMenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {/* Mobile Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/aeobility-icon-light.svg"
              alt="AEObility Icon"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-bold text-sm tracking-wider text-white uppercase">AEObility Menu</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Accordion Content */}
        <MobileMenuAccordion />

        {/* Bottom CTA Funnel Actions */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <span className="text-[10px] font-bold text-aeo-cyan uppercase tracking-widest block mb-2 font-mono">
            Discovery &amp; Strategy
          </span>

          <Link
            href="/diagnostic"
            className="flex items-center justify-between w-full py-3 px-4 text-xs font-bold bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black rounded-xl hover:scale-[1.01] transition-transform shadow-lg"
          >
            <span>Run Free Visibility Scan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/solutions/aeo-blueprint"
            className="flex items-center justify-between w-full py-3 px-4 text-xs font-bold bg-white/5 border border-white/15 text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <span>View $995 Blueprint</span>
            <ArrowRight className="w-4 h-4 text-aeo-cyan" />
          </Link>

          <Link
            href="/contact"
            className="block w-full py-2.5 text-center text-xs font-semibold text-white/60 hover:text-white transition-colors"
          >
            Need Help? Contact Our Team
          </Link>
        </div>
      </MobileMenuOverlay>
    </>
  );
}

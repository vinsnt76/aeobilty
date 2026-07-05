'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsMobileSubmenuOpen(false);
    }
  };

  const toggleMobileSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileSubmenuOpen(!isMobileSubmenuOpen);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Homepage', href: '/' },
    { name: 'AEO Services', href: '/services' },
    { name: 'AEO Packages', href: '/solutions' },
    {
      name: 'Knowledge Hub',
      href: '/knowledge-hub',
      dropdownItems: [
        { name: 'Hub Overview', href: '/knowledge-hub' },
        { name: 'What is AEO?', href: '/services/aeo/definition' },
        { name: 'Is AEO just SEO?', href: '/services/aeo/comparison' },
        { name: 'How to Make AI-Readable', href: '/services/aeo/procedures' },
        { name: 'What Stops AI Showing Up', href: '/services/aeo/constraints' },
        { name: 'Costs & Timing', href: '/services/aeo/costs-timing' },
      ],
    },
    { name: 'About Us', href: '/about' },
    { name: 'Contact & Support', href: '/contact' },
  ];

  // Helper to check if a link is active
  const isActive = (href: string, exact = false) => {
    if (exact) return pathname === href;
    if (href === '/') return pathname === '/';
    // If it's a hash link, we don't treat it as active page unless pathname is '/'
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

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
              stroke={isOpen ? '#000000' : 'currentColor'}
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
              stroke={isOpen ? '#000000' : 'currentColor'}
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
          </svg>
          <span className={`text-xl font-bold tracking-wider transition-colors ${isOpen ? 'text-black' : 'text-white'}`}>
            AEO<span className="text-aeo-cyan font-light">bility</span>
          </span>
        </Link>

        {/* Desktop Menu links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/75">
          {navLinks.map((link) => {
            if (link.dropdownItems) {
              const isAnySubActive = link.dropdownItems.some(sub => pathname === sub.href);
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 py-2 hover:text-aeo-cyan transition-colors focus:outline-none cursor-pointer ${
                      isAnySubActive ? 'text-aeo-cyan' : ''
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-1 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl transition-all duration-200 origin-top-left z-50 ${
                      isDropdownOpen
                        ? 'opacity-100 scale-100 translate-y-0 visible'
                        : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                    }`}
                  >
                    {link.dropdownItems.map((subItem) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className={`block px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                            isSubActive
                              ? 'bg-aeo-cyan/10 text-aeo-cyan'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-aeo-cyan transition-colors ${
                  active ? 'text-aeo-cyan' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
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
          className={`md:hidden p-2 transition-colors relative z-50 ${
            isOpen ? 'text-black hover:text-black/70' : 'text-white/80 hover:text-white'
          }`}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-start items-center md:hidden overflow-y-auto pt-24 pb-12 transition-all duration-300">
          <div className="flex flex-col items-center gap-6 text-base font-bold text-black w-full px-8">
            {navLinks.map((link) => {
              if (link.dropdownItems) {
                const isAnySubActive = link.dropdownItems.some(sub => pathname === sub.href);
                return (
                  <div key={link.name} className="w-full flex flex-col items-center">
                    <button
                      onClick={toggleMobileSubmenu}
                      className={`flex items-center gap-1.5 py-2 hover:text-aeo-purple transition-all duration-200 text-lg ${
                        isAnySubActive ? 'text-aeo-purple' : 'text-black'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileSubmenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Collapsible Accordion items */}
                    {isMobileSubmenuOpen && (
                      <div className="flex flex-col items-center gap-3 mt-2 bg-black/[0.03] border border-black/5 rounded-xl py-3 px-4 w-full max-w-xs transition-all duration-300">
                        {link.dropdownItems.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={`text-sm py-1 transition-colors ${
                                isSubActive ? 'text-aeo-purple font-bold' : 'text-black/60 hover:text-black'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-aeo-purple transition-all duration-200 py-2 text-lg ${
                    active ? 'text-aeo-purple' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/#audit-form"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3.5 text-sm font-bold tracking-wider uppercase bg-black border border-aeo-cyan text-aeo-cyan rounded-full hover:bg-aeo-cyan hover:text-black transition-all"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


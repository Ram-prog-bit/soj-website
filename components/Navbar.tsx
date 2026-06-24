"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Resources", href: "#resources" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-9 left-0 right-0 z-50 bg-white/97 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <span className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-[10px] font-bold tracking-widest shadow-sm shrink-0">
              SOJ
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-[0.18em] group-hover:text-brand-600 transition-colors">
                Serving Our
              </span>
              <span className="text-sm font-bold text-navy-900 tracking-wide group-hover:text-brand-700 transition-colors">
                Justice
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-brand-700 font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              className="ml-1 px-4 py-2 bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:-translate-y-px whitespace-nowrap"
            >
              Support the Mission
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-md text-slate-500 hover:text-brand-700 hover:bg-stone-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-stone-100 bg-white">
          <div className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-slate-600 hover:text-brand-700 font-medium transition-colors border-b border-stone-50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-1">
              <a
                href="#get-involved"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center py-2.5 bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Support the Mission
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

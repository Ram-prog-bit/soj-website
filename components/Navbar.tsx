"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Resources", href: "#resources" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-9 left-0 right-0 z-[60] transition-all duration-300 ease-soft-spring",
        scrolled || open
          ? "bg-canvas/85 backdrop-blur-md border-b border-stone-200/80 shadow-soft"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="group rounded-lg transition-transform duration-300 hover:-translate-y-px"
            aria-label="Serving Our Justice — return to top"
          >
            <Logo className="transition-opacity group-hover:opacity-90" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-500 transition-transform duration-300 ease-soft-spring group-hover:scale-x-100" />
              </a>
            ))}
            <Button href="#get-involved" size="sm" className="ml-2">
              Support the Mission
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:text-brand-700 hover:bg-white/60 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-stone-200/80 bg-canvas/95 backdrop-blur-md"
          >
            <div className="space-y-0.5 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <Button
                  href="#get-involved"
                  size="md"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Support the Mission
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

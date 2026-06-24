"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  WhiskIcon,
  CupcakeLinerIcon,
  MixingBowlIcon,
  RollingPinIcon,
  MeasuringCupIcon,
  RecipeCardIcon,
  SteamLines,
} from "@/components/Illustrations";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

/* Flour-dust / sparkle particles — purely decorative, reduced-motion safe */
const PARTICLES = [
  { left: "12%", top: "30%", size: 4, dur: 7, delay: 0 },
  { left: "22%", top: "62%", size: 3, dur: 9, delay: 1.4 },
  { left: "34%", top: "22%", size: 5, dur: 8, delay: 0.6 },
  { left: "47%", top: "70%", size: 3, dur: 10, delay: 2.1 },
  { left: "63%", top: "28%", size: 4, dur: 7.5, delay: 1.1 },
  { left: "72%", top: "58%", size: 5, dur: 9.5, delay: 0.3 },
  { left: "83%", top: "36%", size: 3, dur: 8.5, delay: 1.8 },
  { left: "90%", top: "66%", size: 4, dur: 7, delay: 2.6 },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream-50 via-canvas to-canvas"
    >
      {/* ── Ambient warmth ─────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        {/* soft glow blobs */}
        <div className="soj-blob absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="soj-blob absolute top-1/3 -right-28 w-[32rem] h-[32rem] rounded-full bg-gold-300/30 blur-3xl [animation-delay:-6s]" />
        <div className="soj-blob absolute -bottom-32 left-1/3 w-[34rem] h-[34rem] rounded-full bg-brand-100/50 blur-3xl [animation-delay:-12s]" />
        {/* faint dotted texture */}
        <div className="absolute inset-0 soj-dot-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      {/* ── Floating baking illustrations (subtle, decorative) ── */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none select-none">
        <WhiskIcon className="hidden md:block absolute top-32 left-[8%] w-12 h-12 text-brand-400/35 [--soj-rot:-12deg] soj-float-tilt" />
        <RollingPinIcon className="hidden lg:block absolute top-44 right-[12%] w-14 h-14 text-gold-500/35 [--soj-rot:14deg] soj-float-tilt [animation-delay:-3s]" />
        <MeasuringCupIcon className="hidden lg:block absolute bottom-40 left-[14%] w-12 h-12 text-brand-300/40 soj-float [animation-delay:-2s]" />
        <CupcakeLinerIcon className="hidden md:block absolute bottom-28 right-[9%] w-12 h-12 text-gold-500/35 soj-float-slow" />

        {/* mixing bowl + rising steam cluster */}
        <div className="hidden xl:flex flex-col items-center absolute top-[26%] right-[20%] soj-float-slow">
          <SteamLines className="w-6 h-8 text-brand-400/45 mb-0.5" />
          <MixingBowlIcon className="w-14 h-14 text-brand-400/40" />
        </div>

        {/* floating recipe card */}
        <div className="hidden xl:block absolute top-[34%] left-[19%] soj-float [animation-delay:-4s]">
          <div className="rotate-[-8deg] rounded-2xl border border-brand-200/60 bg-white/60 backdrop-blur-sm shadow-soft p-3">
            <RecipeCardIcon className="w-9 h-9 text-brand-500/60" />
          </div>
        </div>

        {/* particles */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="soj-particle absolute rounded-full bg-gold-400/60"
            style={
              {
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                ["--soj-dur" as string]: `${p.dur}s`,
                ["--soj-delay" as string]: `${p.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-40 pb-28 sm:pt-44 sm:pb-32"
      >
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            Student-Led Advocacy Initiative
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-display font-semibold tracking-tight text-navy-900 text-balance text-[2.6rem] leading-[1.07] sm:text-6xl lg:text-[4.25rem]"
        >
          Helping communities through{" "}
          <span className="soj-gradient-text">advocacy, awareness,</span> and
          care.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600"
        >
          Serving Our Justice is a student-led initiative raising awareness and
          sharing verified resources around domestic abuse — through education,
          outreach, and community fundraising. We make information easier to
          find, conversations easier to start, and action easier to take.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-3.5 justify-center"
        >
          <Button href="#resources" size="lg">
            Find Resources
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
          <Button href="#get-involved" size="lg" variant="secondary">
            Get Involved
          </Button>
        </motion.div>

        {/* Trust row — small recipe-card-style chips */}
        <motion.ul
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5 text-sm"
        >
          {["Verified Resources", "Student-Led", "Community Fundraising"].map(
            (label) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 text-slate-600 shadow-soft"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                {label}
              </li>
            )
          )}
        </motion.ul>

        {/* Gentle safety reassurance (mirrors the safety bar) */}
        <motion.p
          variants={item}
          className="mt-8 inline-flex items-center gap-1.5 text-xs text-slate-500"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
          SOJ is not an emergency service —{" "}
          <a
            href="#resources"
            className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-600 transition-colors"
          >
            find verified support
          </a>
          .
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to learn more about SOJ"
        className="group absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-brand-600 transition-colors"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-current motion-safe:animate-bounce" />
        </span>
      </a>
    </section>
  );
}

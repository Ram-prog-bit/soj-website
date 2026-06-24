"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────
   Scroll-reveal primitives (framer-motion)

   · Reveal       — single element fades + lifts into view on scroll
   · StaggerGroup — parent that staggers its StaggerChild descendants
   · StaggerChild — child item revealed as part of a group

   All motion collapses to a clean instant fade (no transform) when
   the user prefers reduced motion — content always renders.
   ───────────────────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** vertical travel distance in px */
  y?: number;
  delay?: number;
  /** seconds */
  duration?: number;
  /** how much of the element must be visible before it triggers */
  amount?: number;
}

export function Reveal({
  children,
  className,
  y = 22,
  delay = 0,
  duration = 0.7,
  amount = 0.3,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  /** seconds between each child */
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
  amount = 0.2,
}: StaggerGroupProps) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export function StaggerChild({ children, className, y = 20 }: StaggerChildProps) {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

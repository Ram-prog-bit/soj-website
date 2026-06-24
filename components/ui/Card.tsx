import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────
   Card primitives — premium surfaces shared across sections.

   · Card     — rounded, warm-shadowed surface with a hover lift
   · IconChip — the rounded gradient icon header used on cards
   ───────────────────────────────────────────────────────────── */

export function Card({
  children,
  className,
  interactive = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-3xl bg-white border border-stone-200/70 shadow-soft",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-t-3xl",
        "before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent",
        interactive &&
          "transition-all duration-300 ease-soft-spring hover:-translate-y-1 hover:shadow-lift hover:border-brand-200",
        className
      )}
    >
      {children}
    </Tag>
  );
}

const chipTones = {
  brand: "from-brand-50 to-brand-100/70 text-brand-700 ring-brand-100",
  gold: "from-gold-300/25 to-gold-400/15 text-gold-600 ring-gold-300/40",
  navy: "from-navy-50 to-navy-100/70 text-navy-700 ring-navy-100",
  emerald: "from-emerald-50 to-emerald-100/70 text-emerald-700 ring-emerald-100",
} as const;

export function IconChip({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof chipTones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-inset shadow-inset-top",
        "w-12 h-12 shrink-0",
        chipTones[tone],
        className
      )}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

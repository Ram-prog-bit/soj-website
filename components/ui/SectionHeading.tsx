import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import type { ReactNode } from "react";

/* Shared section header: eyebrow → display title → intro.
   `tone="light"` recolors text for dark-background sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";

  return (
    <Reveal
      className={cn(
        align === "center" ? "text-center mx-auto" : "text-left",
        align === "center" && "max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2.5 mb-5",
          align === "center" && "justify-center"
        )}
      >
        <span
          className={cn(
            "h-px w-7",
            isLight ? "bg-gold-400/60" : "bg-gradient-to-r from-transparent to-brand-400"
          )}
        />
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            isLight ? "text-gold-300" : "text-brand-700"
          )}
        >
          {eyebrow}
        </span>
        <span
          className={cn(
            "h-px w-7",
            isLight ? "bg-gold-400/60" : "bg-gradient-to-l from-transparent to-brand-400",
            align === "left" && "hidden"
          )}
        />
      </div>

      <h2
        className={cn(
          "font-display font-semibold tracking-tight text-balance",
          "text-[2rem] sm:text-4xl lg:text-[2.7rem] leading-[1.1]",
          isLight ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl",
            isLight ? "text-white/60" : "text-slate-500"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/* ─────────────────────────────────────────────────────────────
   SOJ Illustration System
   ---------------------------------------------------------------
   A single, cohesive set of custom inline-SVG illustrations.

   Visual language (kept consistent across every mark):
   · 24×24 grid · 1.6 stroke · round caps + joins · no fills
   · soft, minimal, modern — baking warmth without novelty
   · all use `currentColor` → color with Tailwind text-* utilities
   · all decorative → aria-hidden

   No external dependencies, no raster assets.
   ───────────────────────────────────────────────────────────── */

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

interface MotifProps {
  className?: string;
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({
  className = "w-6 h-6",
  strokeWidth = 1.6,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      strokeWidth={strokeWidth}
      {...base}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ── Baking line illustrations ───────────────────────────────── */

export function WhiskIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3.4v4.8" />
      <ellipse cx="12" cy="8.6" rx="2.8" ry="1.1" />
      <path d="M9.4 9c-.7 4 .8 8.1 2.6 11.2" />
      <path d="M14.6 9c.7 4-.8 8.1-2.6 11.2" />
      <path d="M12 9.2v11.4" />
      <path d="M9.7 13.2h4.6M10.2 16.6h3.6" />
    </Svg>
  );
}

export function MixingBowlIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 11.4h18" />
      <path d="M4.6 11.4a7.4 7.4 0 0 0 14.8 0" />
      <path d="M8.4 11.4c.5-2.4 6.7-2.4 7.2 0" />
      <path d="M12 4v2.6" />
    </Svg>
  );
}

/* Cupcake liner — the pleated paper cup, on its own (a signature mark) */
export function CupcakeLinerIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5.6 8.5h12.8l-1.5 9.6a1.7 1.7 0 0 1-1.68 1.4H8.78a1.7 1.7 0 0 1-1.68-1.4L5.6 8.5Z" />
      <path d="M9 9l-.5 10M12 9v10.5M15 9l.5 10" />
      <path d="M5.6 8.5h12.8" />
    </Svg>
  );
}

export function CupcakeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6.4 10.6a5.6 5.6 0 0 1 11.2 0" />
      <path d="M5.9 10.6h12.2l-1.07 7.9a1.6 1.6 0 0 1-1.58 1.4H8.53a1.6 1.6 0 0 1-1.58-1.4L5.9 10.6Z" />
      <path d="M9.5 11.1l-.4 8.1M14.5 11.1l.4 8.1" />
      <circle cx="12" cy="5.2" r="1.15" />
    </Svg>
  );
}

export function RollingPinIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="5.5" y="8.5" width="13" height="7" rx="3.5" />
      <path d="M2.5 12h3M18.5 12h3" />
      <path d="M2.5 10.6v2.8M21.5 10.6v2.8" />
    </Svg>
  );
}

export function WoodenSpoonIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <ellipse cx="12" cy="6.6" rx="3.4" ry="4.1" />
      <path d="M12 10.7v9.7" />
    </Svg>
  );
}

export function MeasuringCupIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 7.5h11v6.2a4.5 4.5 0 0 1-4.5 4.5H9.5A4.5 4.5 0 0 1 5 13.7V7.5Z" />
      <path d="M16 9h2.2a2 2 0 0 1 0 4H16" />
      <path d="M8 10.5h2M8 13h3" />
    </Svg>
  );
}

/* ── Advocacy / community line illustrations ─────────────────── */

export function HeartIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 20.2l-1.34-1.2C6.4 15.2 4 13 4 10.1 4 7.9 5.7 6.2 7.9 6.2c1.27 0 2.5.6 3.3 1.55l.8.94.8-.94A4.3 4.3 0 0 1 16.1 6.2C18.3 6.2 20 7.9 20 10.1c0 2.9-2.4 5.1-6.66 8.9L12 20.2Z" />
    </Svg>
  );
}

export function RibbonIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9.2 13.6 6.4 20.4l2.9-1 1.4 2.6 2-5.2" />
      <path d="M14.8 13.6l2.8 6.8-2.9-1-1.4 2.6-2-5.2" />
      <path d="M12 4.2c2.6 0 4.7 2.1 4.7 4.7S14.6 13.6 12 13.6 7.3 11.5 7.3 8.9 9.4 4.2 12 4.2Z" />
    </Svg>
  );
}

/* Community circle — figures joined in a ring */
export function CommunityCircleIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="5.4" r="1.9" />
      <circle cx="5.6" cy="16.4" r="1.9" />
      <circle cx="18.4" cy="16.4" r="1.9" />
      <path d="M10.4 6.8 7.2 14.9M13.6 6.8l3.2 8.1M7.5 16.4h9" />
    </Svg>
  );
}

export function RecipeCardIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="5" width="16" height="14" rx="2.4" />
      <path d="M4 9h16" />
      <circle cx="7" cy="7" r="0.5" />
      <circle cx="9" cy="7" r="0.5" />
      <path d="M7.5 12.2h4M7.5 15h9M12.6 12.2h3.9" />
    </Svg>
  );
}

export function BookIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 6.6C10.5 5.6 8 5.1 6 5.3v12.6c2-.2 4.5.3 6 1.3 1.5-1 4-1.5 6-1.3V5.3c-2-.2-4.5.3-6 1.3Z" />
      <path d="M12 6.6v12.6" />
    </Svg>
  );
}

export function MegaphoneIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 10.5v3a1.5 1.5 0 0 0 1.5 1.5H7l9.5 4V5L7 9H5.5A1.5 1.5 0 0 0 4 10.5Z" />
      <path d="M7 15v3.2A1.8 1.8 0 0 0 8.8 20M19.5 9.5a3.5 3.5 0 0 1 0 5" />
    </Svg>
  );
}

export function SignalIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="13.5" r="1.8" />
      <path d="M8.6 10.3a5 5 0 0 0 0 6.9M15.4 10.3a5 5 0 0 1 0 6.9" />
      <path d="M6.1 7.8a8.6 8.6 0 0 0 0 12M17.9 7.8a8.6 8.6 0 0 1 0 12" />
    </Svg>
  );
}

export function SparkIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3.5c.3 3.6 1.9 5.2 5.5 5.5-3.6.3-5.2 1.9-5.5 5.5-.3-3.6-1.9-5.2-5.5-5.5 3.6-.3 5.2-1.9 5.5-5.5Z" />
      <path d="M18.5 14.5c.15 1.6.85 2.3 2.5 2.5-1.65.2-2.35.9-2.5 2.5-.15-1.6-.85-2.3-2.5-2.5 1.65-.2 2.35-.9 2.5-2.5Z" />
    </Svg>
  );
}

/* ── Decorative motifs ───────────────────────────────────────── */

/* Steam wisps — animate with the `soj-steam` class on a parent */
export function SteamLines({ className = "w-6 h-8" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 24 28"
      className={`soj-steam ${className}`}
      {...base}
      strokeWidth={1.6}
      aria-hidden="true"
    >
      <path d="M7 26c-1.7-2.2 1.7-3.2 0-5.4s1.7-3.2 0-5.4" />
      <path d="M12 26c-1.7-2.2 1.7-3.2 0-5.4s1.7-3.2 0-5.4" />
      <path d="M17 26c-1.7-2.2 1.7-3.2 0-5.4s1.7-3.2 0-5.4" />
    </svg>
  );
}

/* Sprinkle / seed scatter — mixes dots and tiny sprinkles */
export function SprinkleDots({ className = "w-24 h-24" }: MotifProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="10" cy="18" r="2" />
      <rect x="27" y="10" width="2.6" height="7" rx="1.3" transform="rotate(38 28.3 13.5)" />
      <circle cx="54" cy="16" r="2" />
      <rect x="77" y="20" width="2.6" height="7" rx="1.3" transform="rotate(-28 78.3 23.5)" />
      <circle cx="90" cy="46" r="2" />
      <rect x="14" y="50" width="2.6" height="7" rx="1.3" transform="rotate(62 15.3 53.5)" />
      <circle cx="41" cy="60" r="2" />
      <rect x="66" y="58" width="2.6" height="7" rx="1.3" transform="rotate(18 67.3 61.5)" />
      <circle cx="28" cy="84" r="2" />
      <rect x="56" y="80" width="2.6" height="7" rx="1.3" transform="rotate(-42 57.3 83.5)" />
      <circle cx="84" cy="80" r="2" />
    </svg>
  );
}

/* Soft bowl-rim curve — a gentle section accent (uses currentColor fill) */
export function BowlArcDivider({ className = "w-full h-12" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 1440 60"
      className={className}
      preserveAspectRatio="none"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 60 C 380 4, 1060 4, 1440 60 Z" />
    </svg>
  );
}

/* Continuous wave divider — flows one section's color into the next.
   Set text-* to the *incoming* (next) section color. */
export function WaveDivider({ className = "w-full h-16" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      className={className}
      preserveAspectRatio="none"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 40 C 240 88, 480 -8, 720 24 C 960 56, 1200 88, 1440 36 L 1440 80 L 0 80 Z" />
    </svg>
  );
}

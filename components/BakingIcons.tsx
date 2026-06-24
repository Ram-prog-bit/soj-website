/* ─────────────────────────────────────────────────────────────
   SOJ Baking Visual Accent System

   Lightweight inline-SVG icons + decorative motifs that give the
   site a tasteful baking/cooking warmth while staying advocacy-first.

   - All icons use `currentColor` (color them with Tailwind text-*).
   - Consistent 1.5 stroke width, rounded joins.
   - All are decorative → aria-hidden by default.
   - No external dependencies, no image assets.
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

/* ── Line icons (24×24) ─────────────────────────────────────── */

export function CupcakeIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth={strokeWidth} {...base} aria-hidden="true">
      <path d="M6.5 10.5a5.5 5.5 0 0 1 11 0" />
      <path d="M6 10.5h12l-1.05 7.8a1.6 1.6 0 0 1-1.58 1.4H8.63a1.6 1.6 0 0 1-1.58-1.4L6 10.5Z" />
      <path d="M9.6 11l-.4 8M14.4 11l.4 8" />
      <circle cx="12" cy="5.3" r="1.1" />
    </svg>
  );
}

export function MixingBowlIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth={strokeWidth} {...base} aria-hidden="true">
      <path d="M3 11.5h18" />
      <path d="M4.5 11.5a7.5 7.5 0 0 0 15 0" />
      <path d="M8.5 11.5c.5-2.3 6.5-2.3 7 0" />
      <path d="M12 4.2v2.4" />
    </svg>
  );
}

export function WhiskIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth={strokeWidth} {...base} aria-hidden="true">
      <path d="M12 3.5v5" />
      <ellipse cx="12" cy="9" rx="2.7" ry="1.1" />
      <path d="M9.6 9.5c-.6 4 .9 8 2.4 11" />
      <path d="M14.4 9.5c.6 4-.9 8-2.4 11" />
      <path d="M12 9.4v11.1" />
      <path d="M9.9 13.3h4.2M10.4 16.5h3.2" />
    </svg>
  );
}

export function SparkIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth={strokeWidth} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.7 5.7l1.6 1.6M16.7 16.7l1.6 1.6M18.3 5.7l-1.6 1.6M7.3 16.7l-1.6 1.6" />
    </svg>
  );
}

export function BookIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth={strokeWidth} {...base} aria-hidden="true">
      <path d="M12 6.6C10.5 5.6 8 5.1 6 5.3v12.6c2-.2 4.5.3 6 1.3 1.5-1 4-1.5 6-1.3V5.3c-2-.2-4.5.3-6 1.3Z" />
      <path d="M12 6.6v12.6" />
    </svg>
  );
}

export function HeartArcIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth={strokeWidth} {...base} aria-hidden="true">
      <path d="M12 19.4l-1.15-1.02C7 15 4.6 12.85 4.6 10.15 4.6 8.1 6.2 6.5 8.25 6.5c1.2 0 2.34.56 3.05 1.44l.7.86.7-.86A3.98 3.98 0 0 1 15.75 6.5c2.05 0 3.65 1.6 3.65 3.65 0 2.7-2.4 4.85-6.25 8.23L12 19.4Z" />
    </svg>
  );
}

export function SignalIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth={strokeWidth} {...base} aria-hidden="true">
      <circle cx="12" cy="13.5" r="1.8" />
      <path d="M8.6 10.3a5 5 0 0 0 0 6.9M15.4 10.3a5 5 0 0 1 0 6.9" />
      <path d="M6.1 7.8a8.6 8.6 0 0 0 0 12M17.9 7.8a8.6 8.6 0 0 1 0 12" />
    </svg>
  );
}

/* ── Decorative motifs ──────────────────────────────────────── */

/* Steam wisps — three rising curls */
export function SteamLines({ className = "w-6 h-8" }: MotifProps) {
  return (
    <svg viewBox="0 0 24 28" className={className} {...base} strokeWidth={1.5} aria-hidden="true">
      <path d="M7 26c-1.7-2.2 1.7-3.2 0-5.4s1.7-3.2 0-5.4" />
      <path d="M12 26c-1.7-2.2 1.7-3.2 0-5.4s1.7-3.2 0-5.4" />
      <path d="M17 26c-1.7-2.2 1.7-3.2 0-5.4s1.7-3.2 0-5.4" />
    </svg>
  );
}

/* Sprinkle / seed scatter — mix of dots and tiny sprinkles */
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

/* Bowl-rim / cupcake-liner curve — section divider.
   Color the curve via text-* (uses currentColor). */
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

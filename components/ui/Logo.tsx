import { cn } from "@/lib/cn";

/* ─────────────────────────────────────────────────────────────
   SOJ Logo — inline SVG (single source of truth)

   Replaces the heavy PNG brand files in the live UI:
   crisp at any size, tiny payload, animatable, and the wordmark
   recolors for light vs. dark surfaces.

   The plum gradient is defined ONCE globally in app/layout.tsx
   (id="soj-emblem-grad"), so multiple emblems share it with no
   duplicate ids and no render-counter hydration risk.

   · <Emblem />  — the plum disc mark on its own
   · <Logo />    — emblem + "SOJ / Serving Our Justice" wordmark
   ───────────────────────────────────────────────────────────── */

export function Emblem({
  className = "w-9 h-9",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 52 52"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <circle cx="26" cy="26" r="25" fill="url(#soj-emblem-grad)" />
      <circle
        cx="26"
        cy="26"
        r="21"
        fill="none"
        stroke="#d8b06a"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      {/* steam */}
      <g stroke="#f0e6d2" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M20 13 q-2.6 3.8 0 7.6" strokeOpacity="0.85" />
        <path d="M26 10.5 q-2.8 4.4 0 9.2" strokeOpacity="0.92" />
        <path d="M32 13 q2.6 3.8 0 7.6" strokeOpacity="0.85" />
      </g>
      {/* community bowl */}
      <ellipse cx="26" cy="29" rx="11.5" ry="2.7" fill="#f0e6d2" />
      <path d="M14.5 29 Q26 43 37.5 29 Z" fill="#f0e6d2" />
      <circle cx="26" cy="33.6" r="1.8" fill="#d8b06a" />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
  showTagline = true,
}: {
  className?: string;
  /** "dark" → ink wordmark for light surfaces · "light" → cream wordmark for dark surfaces */
  tone?: "dark" | "light";
  showTagline?: boolean;
}) {
  const name = tone === "light" ? "#f7f0e2" : "#211a26";
  const tag = tone === "light" ? "rgba(216,170,207,0.85)" : "#753167";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Emblem className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-semibold tracking-tight"
          style={{ color: name, fontSize: "1.18rem", lineHeight: 1 }}
        >
          SOJ
        </span>
        {showTagline && (
          <span
            className="font-medium"
            style={{
              color: tag,
              fontSize: "0.62rem",
              letterSpacing: "0.04em",
              marginTop: "2px",
            }}
          >
            Serving Our Justice
          </span>
        )}
      </span>
    </span>
  );
}

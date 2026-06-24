# SOJ Brand Identity System

## Current Live Logo System (PNG seal set)

The website currently uses a set of four illustrated circular **seal logos** (PNG). These are the canonical, live brand marks:

| File | Role | Where it is used live |
|---|---|---|
| `public/branding/soj-logo-primary.png` | Primary — light/white backgrounds | Brand preview page; default for light surfaces |
| `public/branding/soj-logo-transparent.png` | Transparent — any background | **Navbar** (52×52px) |
| `public/branding/soj-logo-dark.png` | Dark-optimized | **Footer** (72×72px) |
| `public/branding/soj-logo-translucent.png` | Translucent/frosted | **Hero** background watermark (240px, `opacity-0.08`) |

The seal depicts a warm cooking/baking bowl with the SOJ monogram and the "Serving Our Justice" wordmark — preserving the baking/fundraising cue while staying serious and nonprofit-like. A live reference of all four variants is at `/brand` (`app/brand/page.tsx`, `noindex`).

> **Legacy note:** Everything below ("Warmth Arc Badge", `components/SOJBadge.tsx`, `public/soj-badge.svg`, `public/soj-logo.svg`, `public/soj-logo-stacked.svg`, and the badge micro-interaction CSS) documents the **previous SVG badge system**. It is retained for the **favicon** (`app/icon.svg`, still the SVG badge) and the **OG image** (`app/opengraph-image.tsx`), but `SOJBadge.tsx` and the three `public/soj-*.svg` files are **no longer rendered in the Navbar/Footer/Hero** and are kept only as unused legacy assets.

---

## Concept: Warmth Arc Badge (legacy SVG / favicon heritage)

The SOJ mark is a circular badge containing a monogram, an arc, two liner walls, and three accent marks. Each element carries meaning:

- **Circle**: Unity, wholeness, community — a shape without edges or exclusions.
- **SOJ monogram**: Tracked, uppercase letterforms. Authority without coldness.
- **Liner walls**: Two very faint angled hairlines rising from the arc endpoints, flaring slightly outward. They read as the sides of a cupcake liner or baking cup at larger sizes (64px+) and are invisible at 16px. Together with the arc, they form a subtle U-shape that abstracts a baking vessel / community container.
- **Warmth arc** (bottom): A fuller, rounder bowl arc — the control point sits near the circle's bottom edge so the curve is more deliberate. Reads simultaneously as a cupcake-liner base, a community embrace, and a warm bowl. Abstract first, baking-inspired second.
- **Three seed marks**: Arranged in a gentle arc above the warmth arc — center mark is 1px higher than the outer two, giving an organic (not mechanical) pattern. They read as seeds, sprinkles, or bread texture. Invisible at 16px, subtle at 32px, intentional at 64px+.
- **Gradient fill**: Top-left lighter warm plum (#893d79) → bottom-right richer deep plum (#5d2550). Adds depth and warmth, distinguishing the badge from flat alternatives.

### Why this reads as "baked-good-inspired" without becoming a bakery brand

The liner walls + deeper arc together form a cross-sectional abstract of a cupcake liner — but at small sizes only the arc is visible, which reads as a bowl or embrace. The three seeds add the baking texture detail. The overall effect is: advocacy brand first (the circle, monogram, and wordmark carry this), baking-fundraising cue second (only apparent at closer inspection). The plum and navy palette is nonprofit-grade, not confectionery-grade.

---

## Logo Micro-interaction (legacy — applied to the unused SVG badge)

> This section describes the hover micro-interaction built for the **legacy `SOJBadge` SVG component**, which is no longer rendered. The live PNG navbar logo uses only a simple Tailwind `group-hover:scale-[1.04] group-hover:-translate-y-px` lift. The CSS rules below remain in `globals.css` but are currently inert.

The navbar badge had a CSS-only hover micro-interaction. No JavaScript, no animation libraries.

### What happens on hover (mouse/pointer devices only)

1. **Badge lifts**: `scale(1.03)` + `translateY(-1px)` — 300ms ease-out. The badge subtly rises, like warmth being emitted.
2. **Arc glows**: `stroke-opacity` 0.28 → 0.52 + `filter: drop-shadow(0 0 2px rgba(255,175,215,0.38))` — 350ms ease-out. A warm pinkish-white glow around the arc, like radiant heat from a baked good.
3. **Inner ring brightens**: opacity 0.12 → 0.19 — adds perceived depth.
4. **Seeds rise**: outer seeds `translateY(-1.5px)`, center seed `translateY(-2px)` — 400ms ease-out. The center rises slightly more, giving an organic arc to the lift (not a rigid row moving).

### On focus (keyboard navigation)

Arc brightens (stroke-opacity and drop-shadow) only — no scale or translate. Keeps the interaction predictable for screen reader / keyboard users.

### Touch devices

The entire hover block is wrapped in `@media (hover: hover) and (pointer: fine)`. Touch-only devices never trigger hover states — no sticky-hover on mobile tap.

### Reduced motion

`@media (prefers-reduced-motion: reduce)` removes all transforms (scale, translate, translateY) and all `filter` properties. Only the arc opacity brightens (stroke-opacity 0.28 → 0.44) as a color-only change. Respects user preference completely.

### Implementation

- `components/SOJBadge.tsx` — SVG elements have class names: `soj-badge-svg`, `soj-arc`, `soj-ring`, `soj-liner`, `soj-dots`, `soj-dot-1`, `soj-dot-2`, `soj-dot-3`
- `components/Navbar.tsx` — badge gets Tailwind `group-hover:scale-[1.03] group-hover:-translate-y-px transition-transform duration-300 ease-out`
- `app/globals.css` — all CSS animation rules. The `<a>` wrapper has class `group`.
- Footer badge: no hover interaction (it is not a navigation element).

---

## Color Palette

| Token | Hex | Use |
|---|---|---|
| brand-700 | `#753167` | Primary brand plum — badge fill base, CTA buttons, accent text |
| brand-600 | `#893d79` | Gradient top-left — hover states, lighter interactions |
| brand-800 | `#5d2550` | Gradient bottom-right — deep accent, richer feel |
| brand-300 | `#d8aacf` | Accent text on dark backgrounds |
| brand-200 | `#ead0e4` | Hero gradient highlight |
| brand-50  | `#faf5f8` | Page background tint |
| navy-950  | `#0d1220` | Darkest navy — footer, dark sections, OG image bg |
| navy-900  | `#192339` | Body text, wordmark "Justice" text |
| navy-800  | `#243254` | Borders, section backgrounds |

---

## Logo Assets

**Live (in use):**

| File | Use |
|---|---|
| `public/branding/soj-logo-primary.png` | Primary seal — light backgrounds, `/brand` |
| `public/branding/soj-logo-transparent.png` | Navbar logo (52×52px) |
| `public/branding/soj-logo-dark.png` | Footer logo (72×72px) |
| `public/branding/soj-logo-translucent.png` | Hero watermark (240px, opacity 0.08) |
| `app/icon.svg` | Favicon — auto-discovered by Next.js App Router (legacy SVG badge, kept for crisp 16px) |
| `app/opengraph-image.tsx` | Auto-generated OG PNG (1200×630) via next/og |

**Legacy (retained, not rendered):**

| File | Status |
|---|---|
| `components/SOJBadge.tsx` | Unused — superseded by PNG seal logos |
| `public/soj-badge.svg` | Unused legacy icon-only mark |
| `public/soj-logo.svg` | Unused legacy horizontal wordmark |
| `public/soj-logo-stacked.svg` | Unused legacy stacked wordmark |

---

## Badge Geometry Reference (36×36 master)

```
Circle r=18, center (18,18)
Gradient: #893d79 top-left → #5d2550 bottom-right
Inner ring: r=15.5, white 12% opacity
Liner walls: M9 28 L8 23.5  and  M27 28 L28 23.5  (white 14%, 0.8px)
Warmth arc: M9 28 Q18 36.5 27 28  (white 28%, 1.4px)
Seed dots: (13.5,25.5) (18,24.5) (22.5,25.5)  r=1.0, white 22%
SOJ text: x=18 y=21, size=9.5, Inter 700, letter-spacing 1.8
```

---

## Usage Rules

**Do use:**
- Badge on all brand communications, web pages, print materials
- Horizontal logo on letterheads and wide-format contexts
- Stacked logo on square crops, event materials, printed cards
- brand-700 plum as the primary accent color
- navy-900 for all body text

**Do not:**
- Stretch, rotate, or recolor the badge
- Place the badge on low-contrast backgrounds without an overlay
- Use the arc motif alone as a standalone mark — it requires the SOJ monogram for context
- Combine the badge with any other mark, mascot, or illustration
- Imply 501(c)(3) status — SOJ does not have it

---

## Accuracy Rules (non-negotiable)

- SOJ is a **student-led advocacy and resource-sharing initiative**, not an emergency service
- SOJ does **not** provide counseling, therapy, legal advice, shelter, housing, crisis intervention, hotline support, safety planning, case management, or any professional service
- SOJ does **not** have 501(c)(3) status
- All resource links are to verified external organizations; they are for information only
- Fundraising language must remain conditional ("intent to fundraise" / "if and when")

---

## Typography

| Use | Font | Weight | Notes |
|---|---|---|---|
| "SERVING OUR" label | Inter | 600 SemiBold | All-caps, tracked wide |
| "Justice" wordmark | Inter | 700 Bold | Title case |
| SOJ monogram | Inter | 700 Bold | All-caps, letter-spacing 1.8 |
| Body copy | Inter | 400 | 1.6× line-height |
| Headings | Inter | 700 | Tight tracking |

---

## Background Motif

A warmth arc SVG motif (echoing the badge arc) is used as a very-low-opacity ambient element in the Hero section. Rules:

- Opacity: `opacity-[0.07]` maximum
- Color: brand-300/brand-400 range on dark backgrounds
- Always with `blur-3xl` and `pointer-events-none aria-hidden`
- Never on white/light backgrounds

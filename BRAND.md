# SOJ Brand Identity System

## Concept: Warmth Arc Badge

The SOJ mark is a circular badge containing a monogram, a subtle arc, and three accent marks. Each element carries meaning:

- **Circle**: Unity, wholeness, community — a shape without edges or exclusions.
- **SOJ monogram**: Clear, legible letterforms in a tracked, uppercase type. Authority without coldness.
- **Warmth arc** (bottom of badge): A gentle bowl arc that reads simultaneously as a baking bowl, an embrace, and an upward-facing cup — an abstract nod to the baking/fundraising identity while remaining professional enough for advocacy contexts.
- **Three accent marks**: Arranged in a gentle arc above the warmth arc. They read as seeds, bread texture, or simply decorative marks. They are intentionally small enough to disappear at 16px but visible at 32px+.
- **Gradient fill** (top-left lighter → bottom-right richer): Adds depth and a sense of warmth radiating from the upper-left, as if lit by soft light. This distinguishes the badge from flat-fill alternatives at larger sizes.

---

## Color Palette

| Token | Hex | Use |
|---|---|---|
| brand-700 | `#753167` | Primary brand plum — badge fill base, CTA buttons, accent text |
| brand-600 | `#893d79` | Gradient top-left — hover states, lighter interactions |
| brand-800 | `#5d2550` | Gradient bottom-right — deep accent, richer feel |
| brand-300 | `#d8aacf` | Light mode accent text on dark backgrounds |
| brand-200 | `#ead0e4` | Hero gradient highlight, very light touch of brand color |
| brand-50  | `#faf5f8` | Page background tint |
| navy-950  | `#0d1220` | Darkest navy — footer, dark sections |
| navy-900  | `#192339` | Body text, wordmark "Justice" text |
| navy-800  | `#243254` | Borders, section backgrounds |

---

## Logo Assets

| File | Use |
|---|---|
| `public/soj-badge.svg` | Icon-only (36×36), for external use or embedding |
| `public/soj-logo.svg` | Full horizontal logo (220×44) — primary wordmark, light bg |
| `public/soj-logo-stacked.svg` | Stacked logo (150×110) — square contexts, prints, cards |
| `app/icon.svg` | Favicon — auto-discovered by Next.js App Router |
| `app/opengraph-image.tsx` | Auto-generated OG PNG (1200×630) via next/og |
| `components/SOJBadge.tsx` | React component — used in Navbar and Footer |

---

## Usage Rules

**Do use:**
- Badge on all brand communications, web pages, print materials
- Horizontal logo on letterheads and wide-format contexts
- Stacked logo on square crops, badges, event materials
- Brand-700 plum as the primary accent color
- Navy-900 for all body text

**Do not:**
- Stretch, rotate, or recolor the badge
- Place the badge on low-contrast backgrounds without a white or dark overlay
- Use a version of the badge without the SOJ monogram (too abstract)
- Combine the badge with any other mark or mascot
- Claim the badge represents a registered trademark or 501(c)(3) status

---

## Accuracy Rules (non-negotiable)

The visual brand must always appear alongside content that is accurate:

- SOJ is a **student-led advocacy and resource-sharing initiative**, not an emergency service
- SOJ does **not** provide counseling, therapy, legal advice, shelter, housing, crisis intervention, hotline support, safety planning, case management, or any professional service
- SOJ does **not** have 501(c)(3) status (do not imply it in any brand material)
- All resource links must be to verified external organizations; they are shared for information only
- Fundraising language must remain conditional ("if and when")

---

## Typography

| Use | Font | Weight | Notes |
|---|---|---|---|
| "SERVING OUR" label | Inter | 600 (SemiBold) | All-caps, tracked wide |
| "Justice" wordmark | Inter | 700 (Bold) | Title case |
| SOJ monogram | Inter | 700 (Bold) | All-caps, tracked very wide |
| Body copy | Inter | 400 | 1.6× line-height |
| Headings | Inter | 700 | Tight tracking (-0.01em to -0.02em) |

---

## Background Motif

A warmth arc SVG motif (echoing the badge arc) is used as a very-low-opacity ambient element in the Hero section and can be used sparingly in other dark-background sections. Guidelines:

- Opacity: 5–8% maximum
- Color: brand-300 `#d8aacf` or `#c07db5` on dark backgrounds
- Always accompanied by `blur-3xl` and `pointer-events-none`
- Never on white/light backgrounds (use color blocks or brand-50 tint instead)

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOJ Brand Assets — Internal Reference",
  robots: { index: false, follow: false },
};

const logos = [
  {
    title: "Navbar Lockup",
    subtitle: "Simplified header logo — emblem + wordmark",
    file: "soj-navbar-lockup.svg",
    src: "/branding/soj-navbar-lockup.svg",
    bg: "bg-white",
    border: "border border-stone-200",
    usage:
      "Used in the site navbar. Cleaner and more readable than the full seal at small header sizes.",
    w: 210,
    h: 64,
  },
  {
    title: "Primary",
    subtitle: "Light backgrounds, print, white contexts",
    file: "soj-logo-primary.png",
    src: "/branding/soj-logo-primary.png",
    bg: "bg-white",
    border: "border border-stone-200",
    usage: "Default full seal for any light or white surface.",
    w: 160,
    h: 160,
  },
  {
    title: "Transparent",
    subtitle: "Digital overlays, any colored background",
    file: "soj-logo-transparent.png",
    src: "/branding/soj-logo-transparent.png",
    bg: "bg-stone-100",
    border: "border border-stone-200",
    usage: "Full seal with a transparent background. Works on any background color.",
    w: 160,
    h: 160,
  },
  {
    title: "Dark",
    subtitle: "Dark backgrounds, footer, dark sections",
    file: "soj-logo-dark.png",
    src: "/branding/soj-logo-dark.png",
    bg: "bg-navy-950",
    border: "border border-navy-800",
    usage: "Used in the footer and as a hero background watermark.",
    w: 160,
    h: 160,
  },
  {
    title: "Translucent",
    subtitle: "Decorative use, alternate treatments",
    file: "soj-logo-translucent.png",
    src: "/branding/soj-logo-translucent.png",
    bg: "bg-navy-900",
    border: "border border-navy-800",
    usage: "Frosted/muted version for subtle watermarks or alternate contexts.",
    w: 160,
    h: 160,
  },
];

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-brand-50 py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/branding/soj-logo-primary.png"
              alt="SOJ"
              width={52}
              height={52}
            />
            <div>
              <h1 className="text-2xl font-bold text-navy-900 leading-none">
                SOJ Brand Assets
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Internal reference — not linked in public navigation
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-stone-200 mt-6" />
        </div>

        {/* Logo grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {logos.map((logo) => (
            <div
              key={logo.title}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Logo display area */}
              <div
                className={`${logo.bg} ${logo.border} flex flex-col items-center justify-center py-10 px-6 gap-2 min-h-[200px]`}
              >
                <Image
                  src={logo.src}
                  alt={logo.title}
                  width={logo.w}
                  height={logo.h}
                  className="h-auto w-auto max-h-[130px] max-w-[85%] object-contain"
                />
              </div>
              {/* Label area */}
              <div className="bg-white border-t border-stone-100 px-5 py-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-sm text-navy-900">
                      {logo.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {logo.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 mt-2 font-mono">
                      /branding/{logo.file}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-brand-600/60 bg-brand-50 border border-brand-200/50 px-2 py-0.5 rounded-full mt-0.5">
                    {logo.title}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-3 border-t border-stone-50 pt-3">
                  {logo.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Color reference */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm mb-6">
          <h2 className="text-sm font-semibold text-navy-900 mb-4 uppercase tracking-wider">
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "brand-700", hex: "#753167", label: "Primary plum" },
              { name: "brand-600", hex: "#893d79", label: "Light plum" },
              { name: "brand-800", hex: "#5d2550", label: "Deep plum" },
              { name: "navy-900", hex: "#192339", label: "Body navy" },
              { name: "navy-950", hex: "#0d1220", label: "Dark navy" },
              { name: "brand-300", hex: "#d8aacf", label: "Rose" },
              { name: "brand-200", hex: "#ead0e4", label: "Blush" },
              { name: "brand-50", hex: "#faf5f8", label: "Cream" },
            ].map((color) => (
              <div key={color.name} className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg shrink-0 border border-black/10"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p className="text-[10px] font-mono text-slate-500 leading-none">
                    {color.hex}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-none">
                    {color.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage rules */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-navy-900 mb-3 uppercase tracking-wider">
            Quick Usage Rules
          </h2>
          <ul className="space-y-1.5 text-sm text-slate-500">
            <li>· Use the <strong className="text-navy-900">Navbar Lockup</strong> in the site header — it stays readable at small sizes.</li>
            <li>· Use <strong className="text-navy-900">Primary</strong> (full seal) on white or light backgrounds.</li>
            <li>· Use <strong className="text-navy-900">Transparent</strong> (full seal) on colored surfaces.</li>
            <li>· Use <strong className="text-navy-900">Dark</strong> on dark navy or dark-background sections.</li>
            <li>· Use <strong className="text-navy-900">Translucent</strong> for watermarks or decorative overlays only — never as the primary mark.</li>
            <li>· Do not stretch, rotate, or recolor any version.</li>
            <li>· SOJ is a student-led initiative — do not imply 501(c)(3) status in any brand material.</li>
          </ul>
        </div>

        <p className="text-center text-xs text-slate-300 mt-8">
          SOJ — Serving Our Justice &mdash; Internal brand reference &mdash; Not indexed by search engines
        </p>
      </div>
    </main>
  );
}

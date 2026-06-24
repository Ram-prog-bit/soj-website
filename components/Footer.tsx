import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SprinkleDots, SteamLines } from "@/components/Illustrations";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Resources", href: "#resources" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-navy-800 bg-navy-950">
      <SprinkleDots
        aria-hidden
        className="pointer-events-none absolute right-10 top-8 w-32 h-32 text-gold-400/[0.06]"
      />
      <SteamLines
        aria-hidden
        className="pointer-events-none absolute left-[7%] top-10 w-8 h-10 text-brand-300/[0.08]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand + mission */}
          <div className="lg:col-span-2">
            <Logo tone="light" className="mb-5" />

            <p className="mb-4 max-w-md text-sm leading-relaxed text-white/50">
              Student-led awareness, resource-sharing, outreach, and fundraising
              in support of women affected by domestic abuse.
            </p>

            <div className="mb-4 h-px w-12 bg-brand-700/40" />

            <p className="max-w-md text-xs leading-relaxed text-white/45">
              SOJ is a student-led awareness, outreach, resource-sharing, and
              fundraising initiative. SOJ is not an emergency service and does
              not provide counseling, legal advice, shelter, or crisis
              intervention. If someone is in immediate danger, they should
              contact local emergency services.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/45 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-navy-800/60 py-6 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {year} Serving Our Justice (SOJ) &mdash; Student-led advocacy
            and resource-sharing initiative.
          </p>
          <a
            href="#resources"
            className="group inline-flex items-center gap-1 text-xs font-semibold text-brand-400/70 transition-colors hover:text-brand-300"
          >
            Find Resources
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

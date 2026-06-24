import SOJBadge from "@/components/SOJBadge";

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
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Wordmark + mission */}
          <div className="lg:col-span-2">
            {/* Two-line wordmark */}
            <div className="flex items-center gap-3 mb-5">
              <SOJBadge size={36} className="shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-semibold text-brand-300/50 uppercase tracking-[0.18em]">
                  Serving Our
                </span>
                <span className="text-base font-bold text-white">Justice</span>
              </div>
            </div>

            <p className="text-white/45 text-sm leading-relaxed max-w-md mb-4">
              Student-led awareness, resource-sharing, outreach, and fundraising
              in support of women affected by domestic abuse.
            </p>

            {/* Accent divider */}
            <div className="w-12 h-px bg-brand-700/40 mb-4" />

            <p className="text-white/45 text-xs leading-relaxed max-w-md">
              SOJ is a student-led awareness, outreach, resource-sharing, and
              fundraising initiative. SOJ is not an emergency service and does
              not provide counseling, legal advice, shelter, or crisis
              intervention. If someone is in immediate danger, they should
              contact local emergency services.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.15em] mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800/60 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-xs">
            &copy; {year} Serving Our Justice (SOJ) &mdash; Student-led
            advocacy and resource-sharing initiative.
          </p>
          <a
            href="#resources"
            className="text-brand-500/60 hover:text-brand-400 text-xs transition-colors font-semibold"
          >
            Find Resources &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}

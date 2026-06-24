const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Resources", href: "#resources" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-[10px] font-bold tracking-widest shrink-0">
                SOJ
              </span>
              <span className="text-white font-semibold text-sm">
                Serving Our Justice
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-md">
              Student-led awareness, resource-sharing, outreach, and fundraising
              in support of women affected by domestic abuse.
            </p>
            <p className="text-white/25 text-xs leading-relaxed mt-4 max-w-md">
              SOJ is not an emergency service and does not provide counseling,
              legal advice, shelter, or crisis intervention. If someone is in
              immediate danger, please contact local emergency services.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-white/75 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {year} Serving Our Justice (SOJ). Student-led nonprofit
            initiative.
          </p>
          <a
            href="#resources"
            className="text-brand-400/70 hover:text-brand-400 text-xs transition-colors font-medium"
          >
            Find Resources &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}

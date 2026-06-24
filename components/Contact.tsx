const contactCategories = [
  {
    icon: "👋",
    label: "Volunteer Interest",
    description: "Want to help with campaigns, outreach, or digital work",
  },
  {
    icon: "🔗",
    label: "Resource Suggestions",
    description: "Know of a verified resource we should include",
  },
  {
    icon: "💛",
    label: "Fundraising Ideas",
    description: "Ideas for projects that could support SOJ's mission",
  },
  {
    icon: "✉️",
    label: "General Questions",
    description: "Anything else about SOJ, our work, or how to connect",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-900/15 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-8 h-0.5 bg-brand-700 mx-auto mb-4" />
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-white mb-5">
            Contact Form Launching Soon
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            We are setting up a simple contact form for volunteers, resource
            suggestions, partnership questions, and general inquiries.
          </p>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-2xl p-8 sm:p-10">
          {/* Category list */}
          <div className="mb-8">
            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
              What you can reach us about
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {contactCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-start gap-3 bg-navy-800/50 border border-navy-700/50 rounded-lg px-4 py-3"
                >
                  <span className="text-base shrink-0 mt-0.5" aria-hidden>
                    {cat.icon}
                  </span>
                  <div>
                    <p className="text-white/75 text-sm font-semibold leading-tight">
                      {cat.label}
                    </p>
                    <p className="text-white/35 text-xs mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA — disabled until form is ready */}
          <div className="border-t border-navy-700 pt-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <p className="text-white/50 text-sm font-medium">
                Contact form coming soon
              </p>
              <p className="text-white/30 text-xs mt-0.5">
                Check back shortly — we are setting this up now.
              </p>
            </div>
            <button
              disabled
              aria-disabled="true"
              className="inline-flex items-center gap-2 bg-brand-700/40 text-white/40 font-semibold px-7 py-3 rounded-lg cursor-not-allowed text-sm shrink-0 select-none"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

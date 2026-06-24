export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white mb-5">
          Want to Get Involved?
        </h2>
        <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Use our contact form to reach the SOJ team. We are currently building
          our outreach network and welcome students, families, and community
          members who want to help, partner, or learn more.
        </p>

        <div className="bg-navy-900 border border-navy-700 rounded-2xl p-8 sm:p-10 text-left">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
                Reach Us
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Our contact form is the best way to get in touch with the SOJ
                team. We aim to respond to all inquiries within a few business
                days.
              </p>
            </div>
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
                What to Expect
              </p>
              <ul className="space-y-1.5">
                {[
                  "Volunteer opportunities",
                  "Partnership inquiries",
                  "Resource suggestions",
                  "General questions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form CTA — form coming soon */}
          <div className="border-t border-navy-700 pt-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-white/40 text-sm">
              Contact form launching soon — check back shortly.
            </p>
            <button
              disabled
              className="inline-flex items-center gap-2 bg-brand-700/50 text-white/50 font-semibold px-7 py-3 rounded-lg cursor-not-allowed text-sm"
              aria-disabled="true"
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

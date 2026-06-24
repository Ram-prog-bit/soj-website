export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white mb-5">
          Get in Touch
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Have questions about SOJ, want to volunteer, suggest a resource, or
          explore a partnership? We&apos;d love to hear from you. Reach out
          directly and our team will respond as soon as possible.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 sm:p-10 text-left">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Email Us
              </p>
              <a
                href="mailto:contact@servingjustice.org"
                className="text-white font-medium hover:text-brand-400 transition-colors break-all"
              >
                contact@servingjustice.org
              </a>
              <p className="text-slate-500 text-xs mt-1">
                (Placeholder — update with real email)
              </p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Follow Us
              </p>
              <p className="text-slate-300 text-sm">
                Social media links coming soon.
              </p>
            </div>
          </div>

          <a
            href="mailto:contact@servingjustice.org"
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-brand-700/25 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}

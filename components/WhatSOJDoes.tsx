const does = [
  "Raises awareness through student-led education and outreach",
  "Shares verified external resources from established, independent organizations",
  "Supports responsible conversations about healthy relationships and support systems",
  "Organizes fundraising and outreach efforts to benefit established organizations",
  "Builds digital tools that make SOJ's mission easier to understand and share",
];

const doesNot = [
  "Emergency response or crisis services",
  "Crisis intervention of any kind",
  "Counseling or therapy",
  "Legal advice or legal representation",
  "Shelter, housing, or direct protective services",
];

export default function WhatSOJDoes() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-8 h-0.5 bg-brand-700 mx-auto mb-4" />
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Transparency
          </p>
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Our Scope & Role
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            We want to be clear about what SOJ is and what it is not. This
            transparency helps you understand when and how our work can be
            meaningful.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* What SOJ Does */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-emerald-900 font-bold text-lg">
                What SOJ Does
              </h3>
            </div>
            <ul className="space-y-3">
              {does.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-emerald-900/80 text-sm leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What SOJ Does Not Provide */}
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-stone-200 text-slate-600 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
              <h3 className="text-slate-800 font-bold text-lg">
                What SOJ Does Not Provide
              </h3>
            </div>
            <ul className="space-y-3 mb-6">
              {doesNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="w-3 h-0.5 bg-slate-300 block" />
                  </span>
                  <span className="text-slate-500 text-sm leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-stone-200 pt-5">
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                For urgent or professional support, see the{" "}
                <a
                  href="#resources"
                  className="text-brand-700 font-semibold hover:text-brand-600 transition-colors underline underline-offset-2"
                >
                  verified resources listed below
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

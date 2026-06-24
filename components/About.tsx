const approach = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
    title: "Making Information Easier to Find",
    description:
      "Many people want to help but don't know where to start. SOJ exists to make awareness, resource-sharing, and community action more accessible for students and supporters who care about this issue.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Student-Led and Community-Focused",
    description:
      "Our work is rooted in the communities we are part of — campuses, schools, and neighborhoods where students have real power to drive conversations and shape the culture around this issue.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    ),
    title: "Connecting Awareness to Action",
    description:
      "From resource guides to fundraising drives and outreach, we translate concern into tangible work — building the infrastructure for sustained, student-led advocacy on behalf of those affected.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
              About SOJ
            </p>
            <h2 className="text-4xl font-bold text-navy-900 leading-tight mb-6">
              A Community Built on{" "}
              <span className="text-brand-700">Advocacy & Care</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              Serving Our Justice was founded to fill a gap in student-led
              advocacy: too many people want to take action on issues like
              domestic abuse but are unsure where to start or how to
              contribute. SOJ was created to change that — making awareness,
              resource-sharing, and community action more accessible.
            </p>

            <p className="text-slate-600 leading-relaxed mb-5">
              SOJ is founded and led by a dedicated student committed to
              building something meaningful. The organization&apos;s
              Co-President and Website &amp; Digital Presence Lead works
              alongside the founder to shape SOJ&apos;s digital platform and
              grow its outreach and community network.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-stone-200 pl-4">
              SOJ is not an emergency service or professional support
              organization. We focus on awareness, education, resource-sharing,
              and fundraising — and we actively direct people to the
              organizations that provide direct, professional support to
              survivors.
            </p>
          </div>

          {/* Right — approach cards */}
          <div className="space-y-4">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Our Approach
            </p>
            {approach.map((item) => (
              <div
                key={item.title}
                className="bg-stone-50 border border-stone-100 rounded-xl p-6 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

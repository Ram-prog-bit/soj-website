const ways = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Volunteer",
    description:
      "Bring your skills and time to help run campaigns, events, and programs. No experience required — just a willingness to help.",
    cta: "Reach Out to Volunteer",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    title: "Help with Outreach",
    description:
      "Assist with tabling events, speaking engagements, social media, and community education efforts that spread SOJ&apos;s message.",
    cta: "Join Our Outreach Team",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Support Fundraising",
    description:
      "Participate in or help organize fundraising drives that direct contributions toward organizations serving domestic abuse survivors.",
    cta: "Support a Drive",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: "Share Resources",
    description:
      "Help us grow our resource library by suggesting verified organizations, hotlines, and materials we can point our community toward.",
    cta: "Suggest a Resource",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Get Involved
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            There are many ways to contribute. Every action, large or small,
            helps us build a stronger, safer community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {ways.map((way) => (
            <div
              key={way.title}
              className="border border-slate-100 rounded-xl p-8 hover:border-brand-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-14 h-14 bg-brand-50 text-brand-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
                {way.icon}
              </div>
              <h3 className="text-slate-900 font-semibold text-xl mb-3">
                {way.title}
              </h3>
              <p
                className="text-slate-500 text-sm leading-relaxed mb-5"
                dangerouslySetInnerHTML={{ __html: way.description }}
              />
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-brand-700 text-sm font-semibold hover:text-brand-600 transition-colors"
              >
                {way.cta}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

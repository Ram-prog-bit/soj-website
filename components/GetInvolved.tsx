const pathway = [
  {
    step: "Learn",
    description: "Understand the issue and SOJ's approach",
  },
  {
    step: "Share",
    description: "Spread awareness in your community",
  },
  {
    step: "Support",
    description: "Fundraise and contribute to the cause",
  },
  {
    step: "Act",
    description: "Volunteer and help build the initiative",
  },
];

const ways = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Volunteer",
    description:
      "Bring your skills and time to help plan and run SOJ's campaigns, outreach events, and digital initiatives. No prior experience required — just a commitment to showing up.",
    cta: "Reach Out to Volunteer",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fundraise",
    description:
      "Help organize or participate in SOJ fundraising efforts. When fundraising projects are active, proceeds are intended to support established organizations that provide professional services to those affected by domestic abuse.",
    cta: "Support a Fundraiser",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: "Share Resources",
    description:
      "Know of a verified organization, hotline, or educational resource that should be listed on our site? Help us keep our resource library accurate and up to date.",
    cta: "Suggest a Resource",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Join the Mission",
    description:
      "Whether you are a student, educator, or community member — there is a place for you in the SOJ community. Reach out to learn how you can connect and contribute.",
    cta: "Get in Touch",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-8 h-0.5 bg-brand-700 mx-auto mb-4" />
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Get Involved
          </p>
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            There are many ways to contribute to SOJ&apos;s mission. You do
            not need to be an expert — just someone who cares and wants to help.
          </p>
        </div>

        {/* Pathway visual — Learn → Share → Support → Act */}
        <div className="relative mb-14 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {pathway.map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                {/* Connecting line (desktop only) */}
                {i < pathway.length - 1 && (
                  <span className="hidden sm:block absolute top-5 left-[calc(50%+22px)] right-0 h-px bg-stone-200 z-0" />
                )}
                {/* Step circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-brand-50 border-2 border-brand-200 text-brand-700 font-bold text-sm flex items-center justify-center mb-2.5 shrink-0">
                  {i + 1}
                </div>
                <p className="text-navy-900 font-bold text-sm">{item.step}</p>
                <p className="text-slate-400 text-xs mt-0.5 leading-snug px-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {ways.map((way) => (
            <div
              key={way.title}
              className="border border-stone-100 rounded-xl p-7 hover:border-brand-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-brand-50 text-brand-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                {way.icon}
              </div>
              <h3 className="text-navy-900 font-bold text-lg mb-2">
                {way.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {way.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-brand-700 text-sm font-semibold hover:text-brand-600 transition-colors"
              >
                {way.cta}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const verified = [
  {
    category: "Immediate Support",
    tag: "Hotline",
    tagColor: "bg-red-50 text-red-700 border-red-200",
    title: "National Domestic Violence Hotline",
    description:
      "Provides 24/7 confidential support, safety planning, and referrals to local programs for anyone experiencing domestic violence or concerned about a loved one.",
    href: "https://www.thehotline.org",
    phone: "1-800-799-7233",
  },
  {
    category: "Teen & Relationship Education",
    tag: "Youth Focus",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "loveisrespect",
    description:
      "Dedicated to engaging, educating, and empowering young people to prevent and end abusive relationships. Offers 24/7 phone, chat, and text support.",
    href: "https://www.loveisrespect.org",
    phone: "1-866-331-9474",
  },
  {
    category: "Legal Information",
    tag: "Legal Info",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "WomensLaw.org",
    description:
      "Provides state-by-state legal information for survivors, including guidance on restraining orders, custody, immigration status, and knowing your rights.",
    href: "https://www.womenslaw.org",
    phone: null,
  },
  {
    category: "Illinois / Local Resources",
    tag: "Illinois",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Illinois Coalition Against Domestic Violence (ICADV)",
    description:
      "Illinois statewide coalition supporting survivors of domestic violence through the 24/7 Illinois DV Helpline, local advocacy organizations, and state-wide resources.",
    href: "https://www.icadv.org",
    phone: "1-877-863-6338",
  },
];

const upcoming = [
  {
    tag: "Mental Health",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    title: "Counseling & Mental Health Support",
    description:
      "We are reviewing verified mental health and counseling resources for survivors. This section will be updated as resources are confirmed.",
  },
  {
    tag: "Housing & Safety",
    tagColor: "bg-slate-50 text-slate-600 border-slate-200",
    title: "Shelter & Housing Resources",
    description:
      "We are curating a directory of local and national shelter and housing resources for survivors and their families.",
  },
  {
    tag: "Community",
    tagColor: "bg-green-50 text-green-700 border-green-200",
    title: "Community Support Networks",
    description:
      "Peer support organizations and community networks are currently being reviewed for inclusion in our resource library.",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Subtle bg shape */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-50/30 blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-8 h-0.5 bg-brand-700 mx-auto mb-4" />
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Resources
          </p>
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Finding Help & Support
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            SOJ curates and shares links to verified external organizations. We
            do not provide counseling, legal advice, shelter, or crisis
            intervention — but we make it easier to find those who do.
          </p>
        </div>

        {/* Emergency disclaimer */}
        <div className="max-w-3xl mx-auto mb-12 bg-red-50 border border-red-200 rounded-xl p-5 flex gap-4 items-start">
          <svg
            className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <p className="text-red-800 text-sm leading-relaxed">
            <strong>Important:</strong> SOJ is not an emergency service. If
            someone is in immediate danger, please contact{" "}
            <strong>local emergency services (911)</strong> or call the{" "}
            <strong>National Domestic Violence Hotline</strong> directly. Do
            not wait.
          </p>
        </div>

        {/* Verified resources */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-navy-900 font-semibold text-lg">
            Verified External Resources
          </h3>
          <span className="text-slate-400 text-xs">
            Last reviewed: June 2026
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {verified.map((res) => (
            <div
              key={res.title}
              className="bg-white border border-stone-100 rounded-xl p-6 flex flex-col hover:border-brand-200 hover:shadow-md transition-all duration-200"
            >
              {/* Category + tag row */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest">
                  {res.category}
                </span>
                <span className="text-slate-200">·</span>
                <span
                  className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${res.tagColor}`}
                >
                  {res.tag}
                </span>
              </div>

              <h4 className="text-navy-900 font-semibold mb-2">{res.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {res.description}
              </p>

              {res.phone && (
                <p className="text-slate-500 text-xs font-semibold mt-3 font-mono">
                  {res.phone}
                </p>
              )}

              <a
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-brand-700 text-sm font-semibold hover:text-brand-600 transition-colors"
              >
                Visit Website
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Upcoming resources */}
        <div className="border-t border-stone-200 pt-10">
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-navy-900 font-semibold text-lg">
              Additional Resources
            </h3>
            <span className="text-xs font-semibold bg-stone-100 text-slate-500 border border-stone-200 px-2.5 py-1 rounded-full">
              Being reviewed
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcoming.map((res) => (
              <div
                key={res.title}
                className="bg-white/50 border border-dashed border-stone-200 rounded-xl p-6 flex flex-col"
              >
                <span
                  className={`self-start text-xs font-semibold border px-2.5 py-1 rounded-full mb-4 opacity-60 ${res.tagColor}`}
                >
                  {res.tag}
                </span>
                <h4 className="text-slate-600 font-semibold mb-2">
                  {res.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {res.description}
                </p>
                <p className="mt-4 text-slate-300 text-xs">
                  Additional verified resources are being reviewed — check back
                  soon.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-slate-400 text-xs mt-10 max-w-xl mx-auto leading-relaxed">
          The organizations above are independent external resources. SOJ
          shares these links for awareness and resource purposes only, and has
          no affiliation with or responsibility for the services they provide.
        </p>
      </div>
    </section>
  );
}

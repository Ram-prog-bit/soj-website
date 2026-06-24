const resources = [
  {
    title: "National Domestic Violence Hotline",
    description:
      "24/7 confidential support for anyone experiencing domestic violence, seeking resources, or questioning unhealthy aspects of a relationship.",
    tag: "Hotline",
    note: "Real link will be added once verified.",
    href: "#",
  },
  {
    title: "Local Shelter &amp; Housing Resources",
    description:
      "Information about safe housing options and emergency shelters available in your area for survivors and their families.",
    tag: "Housing",
    note: "Real link will be added once verified.",
    href: "#",
  },
  {
    title: "Legal Aid &amp; Advocacy",
    description:
      "Resources connecting survivors with legal advocacy services, protective orders, and rights education from professional organizations.",
    tag: "Legal",
    note: "Real link will be added once verified.",
    href: "#",
  },
  {
    title: "Mental Health &amp; Counseling",
    description:
      "External organizations that provide trauma-informed counseling and mental health services to survivors of abuse.",
    tag: "Counseling",
    note: "Real link will be added once verified.",
    href: "#",
  },
  {
    title: "Educational Materials",
    description:
      "Articles, guides, and toolkits on recognizing abuse, understanding healthy relationships, and how to support someone you care about.",
    tag: "Education",
    note: "Real link will be added once verified.",
    href: "#",
  },
  {
    title: "Community Support Networks",
    description:
      "Peer support groups and community organizations that offer connection, solidarity, and non-clinical support to those affected.",
    tag: "Community",
    note: "Real link will be added once verified.",
    href: "#",
  },
];

const tagColors: Record<string, string> = {
  Hotline: "bg-red-50 text-red-700 border-red-200",
  Housing: "bg-blue-50 text-blue-700 border-blue-200",
  Legal: "bg-amber-50 text-amber-700 border-amber-200",
  Counseling: "bg-purple-50 text-purple-700 border-purple-200",
  Education: "bg-green-50 text-green-700 border-green-200",
  Community: "bg-teal-50 text-teal-700 border-teal-200",
};

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Resources
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Finding Help &amp; Support
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We curate and share links to verified external organizations that
            provide direct support. SOJ does not provide professional counseling,
            legal advice, or crisis intervention services.
          </p>
        </div>

        {/* Emergency disclaimer */}
        <div className="max-w-3xl mx-auto mb-12 bg-red-50 border border-red-200 rounded-xl p-5 flex gap-4 items-start">
          <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <p className="text-red-800 text-sm leading-relaxed">
            <strong>Important:</strong> SOJ is not an emergency service. If
            someone is in immediate danger, please contact your{" "}
            <strong>local emergency services (911)</strong> or call the{" "}
            <strong>National Domestic Violence Hotline</strong> directly. Do not
            wait.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div
              key={res.title}
              className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col hover:border-brand-200 hover:shadow-md transition-all duration-200"
            >
              <span
                className={`self-start text-xs font-semibold border px-2.5 py-1 rounded-full mb-4 ${tagColors[res.tag]}`}
              >
                {res.tag}
              </span>
              <h3
                className="text-slate-900 font-semibold mb-2"
                dangerouslySetInnerHTML={{ __html: res.title }}
              />
              <p
                className="text-slate-500 text-sm leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: res.description }}
              />
              <p className="text-slate-400 text-xs italic mt-4">{res.note}</p>
              <a
                href={res.href}
                className="mt-4 inline-flex items-center gap-1.5 text-brand-700 text-sm font-medium hover:text-brand-600 transition-colors"
              >
                View Resource
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

const activities = [
  {
    number: "01",
    title: "Awareness Campaigns",
    description:
      "We organize events, social media campaigns, and informational sessions to bring domestic abuse awareness into the public conversation — especially among young people.",
  },
  {
    number: "02",
    title: "Fundraising Projects",
    description:
      "Through student-led drives and community events, we raise funds that are directed to established organizations providing shelter, legal aid, and services to survivors.",
  },
  {
    number: "03",
    title: "Community Outreach",
    description:
      "We engage students, educators, and local community members to foster conversations about healthy relationships, warning signs, and how to support those affected.",
  },
  {
    number: "04",
    title: "Resource Sharing",
    description:
      "We curate and share verified resources — hotlines, support networks, and educational materials — so that people who need help can find it more easily.",
  },
  {
    number: "05",
    title: "Digital Advocacy",
    description:
      "Through our website and digital platforms, we amplify important messages, share stories (with consent), and build a broader community of supporters and advocates.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Concrete actions that move us closer to our mission every day.
          </p>
        </div>

        <div className="space-y-5">
          {activities.map((item) => (
            <div
              key={item.number}
              className="flex gap-6 bg-slate-50 border border-slate-100 hover:border-brand-200 rounded-xl p-7 transition-all duration-200 group"
            >
              <span className="text-3xl font-bold text-brand-200 group-hover:text-brand-300 transition-colors shrink-0 leading-none mt-1">
                {item.number}
              </span>
              <div>
                <h3 className="text-slate-900 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

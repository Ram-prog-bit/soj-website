import { SprinkleDots } from "@/components/BakingIcons";

const initiatives = [
  {
    status: "In Progress",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
    dotColor: "bg-blue-500",
    title: "Website & Resource Library",
    description:
      "Building and maintaining SOJ's website as the foundation of our digital outreach. This includes the resource library, program pages, and ongoing content review.",
    detail: "Currently building — this site is the active result of this initiative.",
  },
  {
    status: "Ongoing",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotColor: "bg-emerald-500",
    title: "Verified Resource Review",
    description:
      "Researching and vetting external organizations, hotlines, and educational materials to add to our resource library. Resources are added only after being reviewed for accuracy and relevance.",
    detail: "Ongoing — resources are reviewed before being added to the site.",
  },
  {
    status: "Planning Stage",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    dotColor: "bg-amber-400",
    title: "Student Outreach Planning",
    description:
      "Developing SOJ's approach to student and community outreach, including educational event formats, campus engagement strategies, and awareness content for our network.",
    detail: "In planning — formats and strategies are actively being developed.",
  },
  {
    status: "Planning Stage",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    dotColor: "bg-amber-400",
    title: "Fundraising Project Planning",
    description:
      "Identifying and designing fundraising initiatives intended to benefit established organizations that provide direct services to those affected by domestic abuse.",
    detail: "In planning — project structure and beneficiary organization selection in progress.",
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Subtle decorative shape */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-50/40 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      {/* Sprinkle accent */}
      <SprinkleDots className="absolute bottom-10 left-6 w-28 h-28 text-gold-400/[0.12] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-8 h-0.5 bg-brand-700 mx-auto mb-4" />
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Current Initiatives
          </p>
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Where We Are Right Now
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            SOJ is a growing initiative. Here is an honest look at what we are
            currently working on — in-progress, not just aspirational.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-cream-200/70 rounded-xl p-7 hover:border-brand-200 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              {/* Status badge */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-2.5 py-1 rounded-full ${item.statusColor}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                  {item.status}
                </span>
              </div>

              <h3 className="text-navy-900 font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Honest detail note */}
              <div className="mt-5 pt-4 border-t border-stone-100">
                <p className="text-slate-400 text-xs italic leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

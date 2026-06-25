import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerChild } from "@/components/motion/Reveal";

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
    <section id="initiatives" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Current Initiatives"
          title="Where we are right now"
          intro="SOJ is a growing initiative. Here is an honest look at what we are currently working on — in progress, not just aspirational."
        />

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 gap-5">
          {initiatives.map((item) => (
            <StaggerChild key={item.title} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl border border-stone-200/70 bg-white p-7 shadow-soft transition-all duration-300 ease-soft-spring hover:-translate-y-1 hover:shadow-card hover:border-brand-200">
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${item.statusColor}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${item.dotColor}`} />
                  {item.status}
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-stone-100 pt-4">
                  <p className="text-xs italic leading-relaxed text-slate-500">
                    {item.detail}
                  </p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

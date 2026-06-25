import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { IconChip } from "@/components/ui/Card";
import {
  RecipeCardIcon,
  CommunityCircleIcon,
  MegaphoneIcon,
  WhiskIcon,
} from "@/components/Illustrations";

const approach = [
  {
    Icon: RecipeCardIcon,
    title: "Making information easier to find",
    description:
      "Many people want to help but don't know where to start. SOJ exists to make awareness, resource-sharing, and community action more accessible for students and supporters who care about this issue.",
  },
  {
    Icon: CommunityCircleIcon,
    title: "Student-led and community-focused",
    description:
      "Our work is rooted in the communities we are part of — campuses, schools, and neighborhoods where students have real power to drive conversations and shape the culture around this issue.",
  },
  {
    Icon: MegaphoneIcon,
    title: "Connecting awareness to action",
    description:
      "From resource guides to fundraising drives and outreach, we translate concern into tangible work — building the infrastructure for sustained, student-led advocacy on behalf of those affected.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — narrative */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-px w-7 bg-gradient-to-r from-transparent to-brand-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                About SOJ
              </span>
            </div>

            <h2 className="font-display font-semibold tracking-tight text-navy-900 text-[2rem] sm:text-4xl lg:text-[2.7rem] leading-[1.1] text-balance">
              A community built on{" "}
              <span className="soj-gradient-text">advocacy &amp; care.</span>
            </h2>

            <div className="mt-7 space-y-5 text-slate-600 leading-relaxed">
              <p>
                Serving Our Justice was founded to fill a gap in student-led
                advocacy: too many people want to take action on issues like
                domestic abuse but are unsure where to start or how to
                contribute. SOJ was created to change that — making awareness,
                resource-sharing, and community action more accessible.
              </p>
              <p>
                SOJ is founded and led by a dedicated student committed to
                building something meaningful. The organization&apos;s
                Co-President and Website &amp; Digital Presence Lead works
                alongside the founder to shape SOJ&apos;s digital platform and
                grow its outreach and community network.
              </p>
            </div>

            {/* Scope note — warm callout card */}
            <div className="mt-8 flex gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
              <WhiskIcon className="w-6 h-6 shrink-0 text-brand-500 mt-0.5" />
              <p className="text-sm leading-relaxed text-slate-600">
                SOJ is not an emergency service or professional support
                organization. We focus on awareness, education,
                resource-sharing, and fundraising — and we actively direct
                people to the organizations that provide direct, professional
                support to survivors.
              </p>
            </div>
          </Reveal>

          {/* Right — approach cards */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-6">
              Our approach
            </p>
            <StaggerGroup className="space-y-4">
              {approach.map((item) => (
                <StaggerChild key={item.title}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-stone-200/70 bg-white p-6 shadow-soft transition-all duration-300 ease-soft-spring hover:-translate-y-1 hover:shadow-card hover:border-brand-200">
                    <IconChip>
                      <item.Icon className="w-6 h-6" />
                    </IconChip>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerChild>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

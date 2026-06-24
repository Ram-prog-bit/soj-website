import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconChip } from "@/components/ui/Card";
import { StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import {
  MegaphoneIcon,
  BookIcon,
  RecipeCardIcon,
  CupcakeIcon,
  CommunityCircleIcon,
} from "@/components/Illustrations";

const pillars = [
  {
    Icon: MegaphoneIcon,
    title: "Awareness",
    description:
      "We believe the first step toward change is visibility. SOJ brings honest, respectful conversations about domestic abuse into community spaces — breaking silence and reducing stigma.",
  },
  {
    Icon: BookIcon,
    title: "Education",
    description:
      "We share accessible information about the signs of abuse, what healthy relationships look like, and what options exist for those affected — so that knowledge is never a barrier to action.",
  },
  {
    Icon: RecipeCardIcon,
    title: "Resource Sharing",
    description:
      "We research and share verified links to external organizations — hotlines, legal information, and support resources — making it easier to find established help without having to search alone.",
  },
  {
    Icon: CupcakeIcon,
    title: "Fundraising",
    description:
      "SOJ organizes and plans student-led fundraising efforts. When fundraising projects are active, proceeds are intended to support established organizations that provide direct services to those affected by domestic abuse.",
  },
  {
    Icon: CommunityCircleIcon,
    title: "Community Outreach",
    description:
      "We engage students, educators, and community members in open conversations about healthy relationships, warning signs, and how to be a meaningful ally for those affected by domestic abuse.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Mission"
          title="What we stand for"
          intro="Every effort SOJ makes connects back to five core commitments — the values that shape our work and guide our advocacy."
        />

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <StaggerChild key={pillar.title} className="h-full">
              <Card className="h-full p-7">
                <IconChip className="mb-5">
                  <pillar.Icon className="w-6 h-6" />
                </IconChip>
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {pillar.description}
                </p>
              </Card>
            </StaggerChild>
          ))}

          {/* Closing accent tile — keeps the 6-cell grid balanced + warm */}
          <StaggerChild className="h-full">
            <div className="flex h-full flex-col justify-center rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white shadow-card">
              <p className="font-display text-2xl font-semibold leading-snug">
                Awareness, turned into action.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                These commitments are not separate efforts — together they form
                one continuous push toward a safer, more informed community.
              </p>
            </div>
          </StaggerChild>
        </StaggerGroup>
      </div>
    </section>
  );
}

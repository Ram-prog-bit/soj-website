import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChip } from "@/components/ui/Card";
import { StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import {
  MegaphoneIcon,
  CupcakeIcon,
  BookIcon,
  CommunityCircleIcon,
  SignalIcon,
  SprinkleDots,
} from "@/components/Illustrations";

const programs = [
  {
    number: "01",
    title: "Awareness Campaigns",
    Icon: MegaphoneIcon,
    description:
      "We create and share educational content, support informational events, and run campaigns designed to bring domestic abuse awareness into community conversations — especially among students and young adults who may not have had exposure to these topics before.",
  },
  {
    number: "02",
    title: "Fundraising Projects",
    Icon: CupcakeIcon,
    description:
      "SOJ organizes and plans student-led fundraising drives and community events. When fundraising projects are active, proceeds are intended to support established organizations that provide direct services to those affected by domestic abuse.",
  },
  {
    number: "03",
    title: "Resource Guides",
    Icon: BookIcon,
    description:
      "We research, curate, and share verified resources — national hotlines, legal information, and support organizations — so that anyone seeking help can find it more quickly, without needing to know where to look first.",
  },
  {
    number: "04",
    title: "Community Outreach",
    Icon: CommunityCircleIcon,
    description:
      "We engage students, educators, and local community members in open, constructive conversations about healthy relationships, recognizing warning signs, and how to support someone you care about who may be affected.",
  },
  {
    number: "05",
    title: "Digital Advocacy",
    Icon: SignalIcon,
    description:
      "Through this website and our digital platforms, we amplify awareness content, share resources, and build a broader network of students and supporters. We believe digital reach is one of the most powerful tools available to a student-led organization.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-canvas py-24 sm:py-28">
      <SprinkleDots
        aria-hidden
        className="pointer-events-none absolute right-6 top-16 w-28 h-28 text-gold-400/15"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="What we do"
          intro="Our programs reflect our commitment to meaningful, student-led advocacy — turning awareness into action at every level we can reach."
        />

        <StaggerGroup className="mt-14 space-y-4">
          {programs.map((item) => (
            <StaggerChild key={item.number}>
              <article className="group relative flex gap-5 sm:gap-7 overflow-hidden rounded-3xl border border-stone-200/70 bg-white p-6 sm:p-8 shadow-soft transition-all duration-300 ease-soft-spring hover:-translate-y-1 hover:shadow-card hover:border-brand-200">
                {/* ghost numeral */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-5 select-none font-display text-[7rem] font-semibold leading-none text-stone-100 transition-colors duration-300 group-hover:text-brand-50"
                >
                  {item.number}
                </span>

                <div className="relative flex flex-col items-center gap-2">
                  <IconChip>
                    <item.Icon className="w-6 h-6" />
                  </IconChip>
                  <span className="text-[11px] font-bold tracking-wider text-stone-300 transition-colors group-hover:text-brand-400">
                    {item.number}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

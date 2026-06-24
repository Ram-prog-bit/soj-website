import { Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconChip } from "@/components/ui/Card";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import {
  CupcakeIcon,
  RecipeCardIcon,
  HeartIcon,
  WhiskIcon,
  MixingBowlIcon,
} from "@/components/Illustrations";

const pathway = [
  { step: "Learn", description: "Understand the issue and SOJ's approach" },
  { step: "Share", description: "Spread awareness in your community" },
  { step: "Support", description: "Fundraise and contribute to the cause" },
  { step: "Act", description: "Volunteer and help build the initiative" },
];

const ways = [
  {
    Icon: Users,
    title: "Volunteer",
    description:
      "Bring your skills and time to help plan and run SOJ's campaigns, outreach events, and digital initiatives. No prior experience required — just a commitment to showing up.",
    cta: "Reach Out to Volunteer",
  },
  {
    Icon: CupcakeIcon,
    title: "Fundraise",
    description:
      "Help organize or participate in SOJ fundraising efforts. When fundraising projects are active, proceeds are intended to support established organizations that provide professional services to those affected by domestic abuse.",
    cta: "Support a Fundraiser",
  },
  {
    Icon: RecipeCardIcon,
    title: "Share Resources",
    description:
      "Know of a verified organization, hotline, or educational resource that should be listed on our site? Help us keep our resource library accurate and up to date.",
    cta: "Suggest a Resource",
  },
  {
    Icon: HeartIcon,
    title: "Join the Mission",
    description:
      "Whether you are a student, educator, or community member — there is a place for you in the SOJ community. Reach out to learn how you can connect and contribute.",
    cta: "Get in Touch",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="relative overflow-hidden bg-gradient-to-b from-canvas via-cream-50 to-cream-100/60 py-24 sm:py-28"
    >
      {/* Faint baking accents — decorative */}
      <WhiskIcon
        aria-hidden
        className="soj-float-tilt pointer-events-none absolute left-[4%] top-24 hidden w-16 h-16 text-brand-300/25 [--soj-rot:-10deg] lg:block"
      />
      <MixingBowlIcon
        aria-hidden
        className="soj-float pointer-events-none absolute bottom-28 right-[4%] hidden w-16 h-16 text-gold-400/30 lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Involved"
          title="Join our community"
          intro="There are many ways to contribute to SOJ's mission. You do not need to be an expert — just someone who cares and wants to help."
        />

        {/* Pathway: Learn → Share → Support → Act */}
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pathway.map((item, i) => (
              <li
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                {i < pathway.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[calc(50%+24px)] right-0 top-5 hidden h-px bg-gradient-to-r from-brand-300 to-transparent sm:block"
                  />
                )}
                <span className="relative z-10 mb-2.5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-200 bg-white text-sm font-bold text-brand-700 shadow-soft">
                  {i + 1}
                </span>
                <p className="text-sm font-bold text-navy-900">{item.step}</p>
                <p className="mt-0.5 px-1 text-xs leading-snug text-slate-500">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Ways to help */}
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {ways.map((way) => (
            <StaggerChild key={way.title} className="h-full">
              <Card className="group h-full p-7">
                <IconChip className="mb-5">
                  <way.Icon className="w-6 h-6" />
                </IconChip>
                <h3 className="mb-2 font-display text-xl font-semibold text-navy-900">
                  {way.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">
                  {way.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
                >
                  {way.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </Card>
            </StaggerChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

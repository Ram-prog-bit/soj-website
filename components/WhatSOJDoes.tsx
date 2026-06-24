import { Check, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const does = [
  "Raises awareness through student-led education and outreach",
  "Shares verified external resources from established, independent organizations",
  "Supports responsible conversations about healthy relationships and support systems",
  "Organizes fundraising and outreach efforts to benefit established organizations",
  "Builds digital tools that make SOJ's mission easier to understand and share",
];

const doesNot = [
  "Emergency response or crisis services",
  "Crisis intervention of any kind",
  "Counseling or therapy",
  "Legal advice or legal representation",
  "Shelter, housing, or direct protective services",
];

export default function WhatSOJDoes() {
  return (
    <section className="relative bg-canvas py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transparency"
          title="Our scope & role"
          intro="We want to be clear about what SOJ is and what it is not. This transparency helps you understand when and how our work can be meaningful."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* What SOJ Does */}
          <Reveal>
            <div className="h-full rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  <Check className="w-5 h-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-emerald-900">
                  What SOJ does
                </h3>
              </div>
              <ul className="space-y-3.5">
                {does.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 w-4 h-4 shrink-0 text-emerald-600" />
                    <span className="text-sm leading-relaxed text-emerald-950/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* What SOJ Does Not Provide */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-stone-200/70 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-slate-500 ring-1 ring-inset ring-stone-200">
                  <Minus className="w-5 h-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  What SOJ does not provide
                </h3>
              </div>
              <ul className="space-y-3.5 mb-7">
                {doesNot.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Minus className="mt-0.5 w-4 h-4 shrink-0 text-slate-300" />
                    <span className="text-sm leading-relaxed text-slate-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-stone-200/70 pt-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  For urgent or professional support, see the{" "}
                  <a
                    href="#resources"
                    className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-600 transition-colors"
                  >
                    verified resources listed below
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

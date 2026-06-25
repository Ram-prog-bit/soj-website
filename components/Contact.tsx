import { HandHeart, Link2, Heart, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { WaveDivider } from "@/components/Illustrations";

const contactCategories = [
  {
    Icon: HandHeart,
    label: "Volunteer Interest",
    description: "Want to help with campaigns, outreach, or digital work",
  },
  {
    Icon: Link2,
    label: "Resource Suggestions",
    description: "Know of a verified resource we should include",
  },
  {
    Icon: Heart,
    label: "Fundraising Ideas",
    description: "Ideas for projects that could support SOJ's mission",
  },
  {
    Icon: Mail,
    label: "General Questions",
    description: "Anything else about SOJ, our work, or how to connect",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 pb-24 pt-28 sm:pb-28">
      {/* Wave transition: the warm cream section above pours down into the navy.
          Flipped + pinned to the section top so it stays inside the
          overflow-hidden bounds (a negative translate would be clipped). */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -scale-y-100 text-cream-100 pointer-events-none"
      >
        <WaveDivider className="w-full h-14 sm:h-20" />
      </div>

      {/* soft glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-900/25 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span className="h-px w-7 bg-gold-400/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                Contact
              </span>
              <span className="h-px w-7 bg-gold-400/60" />
            </div>
            <h2 className="font-display text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
              Contact form launching soon
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              This contact form will be for volunteer interest, resource
              suggestions, fundraising ideas, and general questions. It should
              not be used for emergencies or urgent support.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="rounded-4xl border border-navy-700/80 bg-navy-900/80 p-8 shadow-card backdrop-blur-sm sm:p-10">
            {/* Categories */}
            <div className="mb-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                What you can reach us about
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactCategories.map((cat) => (
                  <div
                    key={cat.label}
                    className="flex items-start gap-3 rounded-2xl border border-navy-700/60 bg-navy-800/50 px-4 py-3.5 transition-colors hover:border-brand-700/60 hover:bg-navy-800"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-900/40 text-brand-300">
                      <cat.Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-tight text-white/80">
                        {cat.label}
                      </p>
                      <p className="mt-0.5 text-xs text-white/55">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-emergency disclaimer */}
            <div className="mb-6 rounded-2xl border border-navy-700/60 bg-navy-800/60 px-4 py-3.5">
              <p className="text-sm leading-relaxed text-white/55">
                <strong className="font-semibold text-white/80">
                  Not for emergencies.
                </strong>{" "}
                Please do not use this contact form for emergencies or urgent
                help. SOJ is not monitored as a crisis service. For immediate
                support, use the{" "}
                <a
                  href="#resources"
                  className="font-semibold text-brand-300 underline underline-offset-2 transition-colors hover:text-brand-200"
                >
                  verified resources listed above
                </a>
                .
              </p>
            </div>

            {/* CTA — disabled until form is ready */}
            <div className="flex flex-col items-start justify-between gap-4 border-t border-navy-700/80 pt-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-white/50">
                  Contact form coming soon
                </p>
                <p className="mt-0.5 text-xs text-white/45">
                  Check back shortly — we are setting this up now.
                </p>
              </div>
              <button
                disabled
                aria-disabled="true"
                className="inline-flex shrink-0 cursor-not-allowed select-none items-center gap-2 rounded-xl bg-brand-700/40 px-7 py-3 text-sm font-semibold text-white/40"
              >
                <Mail className="h-4 w-4" />
                Send a Message
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

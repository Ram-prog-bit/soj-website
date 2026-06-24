import { Reveal } from "@/components/motion/Reveal";
import {
  CommunityCircleIcon,
  MegaphoneIcon,
  BookIcon,
  HeartIcon,
} from "@/components/Illustrations";

const items = [
  { Icon: CommunityCircleIcon, label: "Student-Led", sub: "Built by students, for community" },
  { Icon: MegaphoneIcon, label: "Awareness & Education", sub: "Open, respectful conversations" },
  { Icon: BookIcon, label: "Verified Resources", sub: "Reviewed, established organizations" },
  { Icon: HeartIcon, label: "Community Fundraising", sub: "Supporting direct-service partners" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-canvas border-y border-stone-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <ul className="grid grid-cols-2 lg:grid-cols-4 divide-stone-200/70 lg:divide-x">
            {items.map(({ Icon, label, sub }) => (
              <li
                key={label}
                className="flex items-center gap-3.5 px-2 py-6 lg:px-7"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-navy-900">
                    {label}
                  </span>
                  <span className="block text-xs text-slate-500 leading-snug">
                    {sub}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

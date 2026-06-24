import { AlertTriangle, Info, ExternalLink, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";

const verified = [
  {
    category: "Immediate Support",
    tag: "Hotline",
    tagColor: "bg-red-50 text-red-700 border-red-200",
    title: "National Domestic Violence Hotline",
    description:
      "A national organization offering 24/7 confidential support and local referrals to those affected by domestic violence. SOJ links to this resource for awareness — contact the hotline directly for support.",
    href: "https://www.thehotline.org",
    phone: "1-800-799-7233",
    phoneLabel: "Hotline:",
  },
  {
    category: "Teen & Relationship Education",
    tag: "Youth Focus",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "loveisrespect",
    description:
      "An organization focused on healthy relationship education and support for teens and young adults. Phone, chat, and text services are offered directly by loveisrespect — not by SOJ.",
    href: "https://www.loveisrespect.org",
    phone: "1-866-331-9474",
    phoneLabel: "Call:",
  },
  {
    category: "Legal Information",
    tag: "Legal Info",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "WomensLaw.org",
    description:
      "An external site providing plain-language legal information by state. SOJ shares this for educational awareness only — SOJ does not provide legal advice.",
    href: "https://www.womenslaw.org",
    phone: null,
    phoneLabel: null,
  },
  {
    category: "Illinois / Local Resources",
    tag: "Illinois",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Illinois Domestic Violence Helpline",
    description:
      "Illinois DHS and The Network list the Illinois DV Helpline as a confidential 24/7 resource connecting callers to local support. SOJ shares this external resource for awareness only and does not operate the helpline.",
    href: "https://the-network.org/illinois-domestic-violence-hotline/",
    phone: "1-877-863-6338",
    phoneLabel: "Illinois DV Helpline:",
    buttonLabel: "Visit Official Resource",
  },
];

const upcoming = [
  {
    tag: "Mental Health",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    title: "Counseling & Mental Health Support",
    description:
      "We are reviewing verified mental health and counseling resources for potential inclusion. This section will be updated as resources are confirmed.",
  },
  {
    tag: "Housing & Safety",
    tagColor: "bg-slate-50 text-slate-600 border-slate-200",
    title: "Shelter & Housing Resources",
    description:
      "We are researching shelter and housing resources from established organizations to add to our resource library.",
  },
  {
    tag: "Community",
    tagColor: "bg-green-50 text-green-700 border-green-200",
    title: "Community Support Networks",
    description:
      "Peer support organizations and community networks are currently being reviewed for inclusion in our resource library.",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-brand-50/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resources"
          title="Finding help & support"
          intro="SOJ shares links to verified external organizations for awareness and education. SOJ does not provide emergency services, counseling, legal advice, shelter, crisis intervention, or professional support."
        />

        {/* Emergency disclaimer */}
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
            <p className="text-sm leading-relaxed text-red-800">
              <strong>Important:</strong> SOJ is not an emergency service. If
              someone is in immediate danger, they should contact{" "}
              <strong>local emergency services</strong>. For confidential support
              and referrals, they can contact the{" "}
              <strong>National Domestic Violence Hotline</strong> or another
              verified external organization directly.
            </p>
          </div>
        </Reveal>

        {/* Use This Site Safely */}
        <Reveal className="mx-auto mt-5 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
            <div>
              <p className="mb-1 text-sm font-semibold text-slate-700">
                Use This Site Safely
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                If visiting resource websites could create risk, use a safer
                device or a trusted support system when possible. SOJ does not
                intentionally collect visitor information through this static
                website. External resource websites may have their own privacy
                practices. SOJ does not provide direct crisis support.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Verified resources header row */}
        <div className="mt-14 flex items-center justify-between">
          <h3 className="font-display text-xl font-semibold text-navy-900">
            Verified External Resources
          </h3>
          <span className="text-xs text-slate-400">Last reviewed: June 2026</span>
        </div>

        {/* Resource Review Note */}
        <div className="mt-4 rounded-2xl border border-stone-200 bg-cream-50 p-4">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Resource Review Note
          </p>
          <p className="text-sm leading-relaxed text-slate-500">
            Resources are selected from official or established organizations and
            are reviewed periodically for accuracy. SOJ shares these links for
            awareness and education only.
          </p>
          <p className="mt-1.5 text-xs text-slate-400">
            If a resource link is broken or inaccurate, please let the SOJ team
            know once the contact form launches.
          </p>
        </div>

        {/* Verified cards */}
        <StaggerGroup className="mt-6 grid gap-5 sm:grid-cols-2">
          {verified.map((res) => (
            <StaggerChild key={res.title} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl border border-stone-200/70 bg-white p-6 shadow-soft transition-all duration-300 ease-soft-spring hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    {res.category}
                  </span>
                  <span className="text-stone-300">·</span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${res.tagColor}`}
                  >
                    {res.tag}
                  </span>
                </div>

                <h4 className="mb-2 font-semibold text-navy-900">{res.title}</h4>
                <p className="flex-1 text-sm leading-relaxed text-slate-500">
                  {res.description}
                </p>

                {res.phone && (
                  <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-slate-600">
                    <Phone className="h-3.5 w-3.5 text-brand-500" />
                    <span className="font-sans text-slate-400">
                      {res.phoneLabel}
                    </span>
                    {res.phone}
                  </p>
                )}

                <div className="mt-4">
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${res.title} website in a new tab`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-brand-200 bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-700 transition-all duration-200 hover:border-brand-300 hover:bg-brand-100"
                  >
                    {res.buttonLabel ?? "Visit Website"}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Opens external site
                  </p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>

        {/* Upcoming resources */}
        <div className="mt-14 border-t border-stone-200 pt-10">
          <div className="mb-6 flex items-center gap-3">
            <h3 className="font-display text-xl font-semibold text-navy-900">
              Additional Resources
            </h3>
            <span className="rounded-full border border-stone-200 bg-stone-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
              Being reviewed
            </span>
          </div>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((res) => (
              <StaggerChild key={res.title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-dashed border-stone-300 bg-white/50 p-6">
                  <span
                    className={`mb-4 w-fit rounded-full border px-2.5 py-1 text-xs font-semibold opacity-70 ${res.tagColor}`}
                  >
                    {res.tag}
                  </span>
                  <h4 className="mb-2 font-semibold text-slate-600">
                    {res.title}
                  </h4>
                  <p className="flex-1 text-sm leading-relaxed text-slate-400">
                    {res.description}
                  </p>
                  <p className="mt-4 text-xs text-slate-300">
                    Additional verified resources are being reviewed — check back
                    soon.
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-slate-500">
          The organizations listed above are independent external resources. SOJ
          shares these links for awareness and education only and has no
          affiliation with or responsibility for the services they provide.
        </p>
      </div>
    </section>
  );
}

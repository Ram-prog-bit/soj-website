import { Crown, MonitorSmartphone, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconChip } from "@/components/ui/Card";
import { StaggerGroup, StaggerChild } from "@/components/motion/Reveal";

const roles = [
  {
    role: "Founder",
    tone: "gold" as const,
    Icon: Crown,
    description:
      "Leads SOJ's mission, direction, and organizational vision. Responsible for establishing the initiative, shaping its values, and guiding its growth as a student-led advocacy organization.",
  },
  {
    role: "Co-President & Website / Digital Presence Lead",
    tone: "brand" as const,
    Icon: MonitorSmartphone,
    description:
      "Builds and manages SOJ's digital platform, online presence, and web strategy. Supports outreach planning, shapes how SOJ communicates externally, and works alongside the Founder to develop the organization's reach.",
  },
  {
    role: "Student Contributors",
    tone: "navy" as const,
    Icon: Users,
    description:
      "Support SOJ's awareness efforts, resource review, outreach planning, and fundraising projects. Student contributors are the backbone of the initiative — bringing diverse skills, perspectives, and commitment to the cause.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative bg-canvas py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership & Roles"
          title="Who leads SOJ"
          intro="SOJ is entirely student-led. Every role is held by a student committed to building this initiative responsibly and meaningfully."
        />

        <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-6">
          {roles.map((item) => (
            <StaggerChild key={item.role} className="h-full">
              <Card className="h-full p-7">
                <IconChip tone={item.tone} className="mb-5">
                  <item.Icon className="w-5 h-5" />
                </IconChip>
                <h3 className="font-display text-base font-semibold leading-snug text-navy-900 mb-3">
                  {item.role}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </Card>
            </StaggerChild>
          ))}
        </StaggerGroup>

        <p className="mt-8 text-center text-xs text-slate-400">
          Role descriptions are used in place of full names at this stage of the
          organization.
        </p>
      </div>
    </section>
  );
}

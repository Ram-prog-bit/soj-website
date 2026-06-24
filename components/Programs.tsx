const programs = [
  {
    number: "01",
    title: "Awareness Campaigns",
    description:
      "We create and share educational content, support informational events, and run campaigns designed to bring domestic abuse awareness into community conversations — especially among students and young adults who may not have had exposure to these topics before.",
  },
  {
    number: "02",
    title: "Fundraising Projects",
    description:
      "SOJ organizes and plans student-led fundraising drives and community events. When fundraising projects are active, proceeds are intended to support established organizations that provide direct services to those affected by domestic abuse.",
  },
  {
    number: "03",
    title: "Resource Guides",
    description:
      "We research, curate, and share verified resources — national hotlines, legal information, and support organizations — so that anyone seeking help can find it more quickly, without needing to know where to look first.",
  },
  {
    number: "04",
    title: "Community Outreach",
    description:
      "We engage students, educators, and local community members in open, constructive conversations about healthy relationships, recognizing warning signs, and how to support someone you care about who may be affected.",
  },
  {
    number: "05",
    title: "Digital Advocacy",
    description:
      "Through this website and our digital platforms, we amplify awareness content, share resources, and build a broader network of students and supporters. We believe that digital reach is one of the most powerful tools available to a student-led organization.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-8 h-0.5 bg-brand-700 mx-auto mb-4" />
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Programs
          </p>
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            What We Do
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our programs reflect our commitment to meaningful, student-led
            advocacy — turning awareness into action at every level we can reach.
          </p>
        </div>

        <div className="space-y-4">
          {programs.map((item) => (
            <div
              key={item.number}
              className="flex gap-6 bg-stone-50 border border-stone-100 hover:border-brand-200 hover:bg-brand-50/20 rounded-xl p-7 transition-all duration-200 group"
            >
              <span className="text-3xl font-bold text-stone-200 group-hover:text-brand-200 transition-colors shrink-0 leading-none mt-1 select-none">
                {item.number}
              </span>
              <div>
                <h3 className="text-navy-900 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

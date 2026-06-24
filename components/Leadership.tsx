const roles = [
  {
    role: "Founder",
    description:
      "Leads SOJ's mission, direction, and organizational vision. Responsible for establishing the initiative, shaping its values, and guiding its growth as a student-led advocacy organization.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    role: "Co-President & Website/Digital Presence Lead",
    description:
      "Builds and manages SOJ's digital platform, online presence, and web strategy. Supports outreach planning, shapes how SOJ communicates externally, and works alongside the Founder to develop the organization's reach.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
        />
      </svg>
    ),
  },
  {
    role: "Student Contributors",
    description:
      "Support SOJ's awareness efforts, resource review, outreach planning, and fundraising projects. Student contributors are the backbone of the initiative — bringing diverse skills, perspectives, and commitment to the cause.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-8 h-0.5 bg-brand-700 mx-auto mb-4" />
          <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Leadership & Roles
          </p>
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Who Leads SOJ
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            SOJ is entirely student-led. Every role is held by a student
            committed to building this initiative responsibly and meaningfully.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((item) => (
            <div
              key={item.role}
              className="bg-stone-50 border border-stone-100 rounded-xl p-7 hover:border-brand-200 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-navy-900 font-bold text-base mb-3 leading-snug">
                {item.role}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          Role descriptions are used in place of full names at this stage of
          the organization.
        </p>
      </div>
    </section>
  );
}

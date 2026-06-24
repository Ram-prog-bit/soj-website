export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-700 text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
              A Community Built on{" "}
              <span className="text-brand-700">Advocacy &amp; Care</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Serving Our Justice (SOJ) is a student-led nonprofit initiative
              focused on supporting women affected by domestic abuse. We believe
              that communities have the power to create change through awareness,
              education, and compassionate outreach.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              SOJ was founded and is led by a passionate student committed to
              making a difference. Our Co-President and website &amp; digital
              presence lead works alongside our founder to grow SOJ&apos;s reach
              and build a strong online community.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are not an emergency service or a crisis intervention
              organization. Instead, we focus on awareness campaigns, resource
              sharing, community education, and fundraising to support
              organizations that provide direct services to survivors.
            </p>
          </div>

          {/* Stats / highlight cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "Awareness", label: "Campaigns to educate communities" },
              { value: "Outreach", label: "Connecting people with real support" },
              { value: "Education", label: "Workshops and advocacy programs" },
              { value: "Fundraising", label: "Supporting survivors and services" },
            ].map((item) => (
              <div
                key={item.value}
                className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-brand-200 hover:bg-brand-50/50 transition-colors"
              >
                <p className="text-brand-700 text-lg font-bold mb-1">{item.value}</p>
                <p className="text-slate-500 text-sm leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

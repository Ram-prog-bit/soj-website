import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-brand-700/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-navy-700/20 blur-3xl pointer-events-none" />

      {/* Warmth arc motif — echoes the badge, ambient glow only */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-40 blur-3xl opacity-[0.07]">
        <svg viewBox="0 0 1440 160" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 160 Q720 0 1440 160" stroke="#c07db5" strokeWidth="120" strokeLinecap="round" />
        </svg>
      </div>

      {/* Logo watermark — dark version blends with dark hero, cream/gold elements ghost through */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-6 sm:right-12 pointer-events-none select-none opacity-[0.10]"
      >
        <Image
          src="/branding/soj-logo-dark.png"
          alt=""
          width={240}
          height={240}
          className="select-none"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/60 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-10">
          Student-Led Advocacy Initiative
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-7 tracking-tight">
          Student-led advocacy for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-200">
            awareness, resources,
          </span>{" "}
          and support.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-11">
          Serving Our Justice is a student-led initiative raising awareness and
          sharing resources around domestic abuse through education, outreach,
          resource-sharing, and fundraising. We work to make information easier
          to find, conversations easier to start, and community action easier
          to build.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#resources"
            className="px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/30 hover:-translate-y-0.5"
          >
            Find Resources
          </a>
          <a
            href="#get-involved"
            className="px-8 py-3.5 bg-white/8 hover:bg-white/14 text-white font-semibold rounded-lg border border-white/15 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get Involved
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

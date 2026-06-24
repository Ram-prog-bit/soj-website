export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950"
    >
      {/* Subtle decorative circles */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-brand-700/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-700/20 border border-brand-700/30 text-brand-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          Student-Led Nonprofit Initiative
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Serving Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
            Justice
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          A student-led initiative dedicated to raising awareness, sharing
          resources, and advocating for women affected by domestic abuse through
          education, outreach, and community support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-brand-700/25 hover:-translate-y-0.5"
          >
            Learn More
          </a>
          <a
            href="#get-involved"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get Involved
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

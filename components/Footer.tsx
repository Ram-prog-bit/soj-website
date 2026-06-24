export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-sm font-bold shrink-0">
            S
          </span>
          <div>
            <p className="text-white font-semibold text-sm">Serving Our Justice</p>
            <p className="text-slate-400 text-xs">
              Awareness · Education · Advocacy · Community
            </p>
          </div>
        </div>
        <p className="text-slate-500 text-xs text-center sm:text-right">
          &copy; {year} Serving Our Justice (SOJ). Student-led nonprofit initiative.
          <br className="hidden sm:block" />
          <span className="text-slate-600">
            {" "}Not an emergency service.
          </span>
        </p>
      </div>
    </footer>
  );
}

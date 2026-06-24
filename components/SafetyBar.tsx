import { ShieldAlert, ArrowRight } from "lucide-react";

export default function SafetyBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-navy-950 text-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-xs">
        <ShieldAlert className="hidden sm:block w-3.5 h-3.5 shrink-0 text-gold-400" aria-hidden />
        <span className="hidden sm:inline">
          SOJ is not an emergency service. If someone is in immediate danger,
          they should contact local emergency services.
        </span>
        <span className="sm:hidden font-medium">Not an emergency service —</span>
        <a
          href="#resources"
          className="group inline-flex items-center gap-1 whitespace-nowrap font-semibold text-brand-300 underline-offset-2 hover:text-brand-200 hover:underline transition-colors"
        >
          Find resources
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

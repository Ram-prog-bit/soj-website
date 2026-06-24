export default function SafetyBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-navy-950 text-white/75 text-xs py-2.5 text-center px-4">
      <span className="hidden sm:inline">
        SOJ is not an emergency service. If someone is in immediate danger,
        they should contact local emergency services.{" "}
      </span>
      <span className="sm:hidden">Not an emergency service — </span>
      <a
        href="#resources"
        className="text-brand-300 hover:text-brand-200 underline underline-offset-2 font-semibold transition-colors whitespace-nowrap"
      >
        Find resources &rarr;
      </a>
    </div>
  );
}

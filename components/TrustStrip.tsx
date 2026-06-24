const items = [
  "Student-Led Initiative",
  "Awareness & Education",
  "Resource-Sharing",
  "Fundraising & Outreach",
  "Not an Emergency Service",
];

export default function TrustStrip() {
  return (
    <div className="bg-navy-900 border-b border-navy-800 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
              <span className="text-white/65 text-xs sm:text-sm font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

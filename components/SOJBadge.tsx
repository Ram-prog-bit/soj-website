interface SOJBadgeProps {
  size?: number;
  className?: string;
}

export default function SOJBadge({ size = 36, className = "" }: SOJBadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Gradient: lighter warm plum top-left → richer deep plum bottom-right */}
        <linearGradient id="soj-badge-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#893d79" />
          <stop offset="100%" stopColor="#5d2550" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="18" cy="18" r="18" fill="url(#soj-badge-grad)" />

      {/* Inner ring — depth layer */}
      <circle
        cx="18"
        cy="18"
        r="15.5"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="0.8"
      />

      {/* Warmth arc — reads as bowl / community embrace / baking bowl */}
      <path
        d="M9 27.5 Q18 35 27 27.5"
        stroke="white"
        strokeOpacity="0.28"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Accent marks — three-seed baking texture, barely visible at small sizes */}
      <circle cx="13.5" cy="25.5" r="1.0" fill="white" fillOpacity="0.22" />
      <circle cx="18" cy="24.5" r="1.0" fill="white" fillOpacity="0.22" />
      <circle cx="22.5" cy="25.5" r="1.0" fill="white" fillOpacity="0.22" />

      {/* SOJ monogram */}
      <text
        x="18"
        y="21"
        textAnchor="middle"
        fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
        fontWeight={700}
        fontSize={9.5}
        fill="white"
        letterSpacing="1.8"
      >
        SOJ
      </text>
    </svg>
  );
}

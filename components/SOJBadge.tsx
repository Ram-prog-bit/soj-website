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
      {/* Filled circle — brand plum */}
      <circle cx="18" cy="18" r="18" fill="#753167" />

      {/* Inner ring — adds depth */}
      <circle
        cx="18"
        cy="18"
        r="15.5"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="0.8"
      />

      {/* Warmth arc — bottom of circle, reads as bowl / community embrace / baking bowl */}
      <path
        d="M9 27.5 Q18 35 27 27.5"
        stroke="white"
        strokeOpacity="0.22"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Accent marks — subtle baking-inspired texture, barely visible at small sizes */}
      <circle cx="14.5" cy="25" r="0.85" fill="white" fillOpacity="0.18" />
      <circle cx="21.5" cy="25" r="0.85" fill="white" fillOpacity="0.18" />

      {/* SOJ monogram */}
      <text
        x="18"
        y="21.5"
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

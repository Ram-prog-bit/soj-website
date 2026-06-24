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
      className={`soj-badge-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="soj-badge-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#893d79" />
          <stop offset="100%" stopColor="#5d2550" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="18" cy="18" r="18" fill="url(#soj-badge-grad)" />

      {/* Inner ring */}
      <circle
        className="soj-ring"
        cx="18"
        cy="18"
        r="15.5"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="0.8"
      />

      {/* Liner walls — cupcake-liner sides, very faint
          Invisible at 16px, hairlines at 32px, visible at 64px+ */}
      <path
        className="soj-liner"
        d="M9 28 L8 23.5"
        stroke="white"
        strokeOpacity="0.14"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        className="soj-liner"
        d="M27 28 L28 23.5"
        stroke="white"
        strokeOpacity="0.14"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Warmth arc — cupcake-liner base / community bowl
          Deeper curve (control at edge of circle) = fuller, more deliberate bowl */}
      <path
        className="soj-arc"
        d="M9 28 Q18 36.5 27 28"
        stroke="white"
        strokeOpacity="0.28"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Three seed / sprinkle marks — sit inside the liner bowl */}
      <g className="soj-dots">
        <circle className="soj-dot-1" cx="13.5" cy="25.5" r="1.0" fill="white" fillOpacity="0.22" />
        <circle className="soj-dot-2" cx="18" cy="24.5" r="1.0" fill="white" fillOpacity="0.22" />
        <circle className="soj-dot-3" cx="22.5" cy="25.5" r="1.0" fill="white" fillOpacity="0.22" />
      </g>

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

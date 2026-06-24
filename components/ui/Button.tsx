import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  // Plum, with a soft sheen sweep + lift on hover
  primary:
    "soj-sheen-host bg-brand-700 text-white shadow-soft hover:bg-brand-600 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  // Light, bordered — for placement on warm/light surfaces
  secondary:
    "bg-white text-navy-900 border border-stone-200 shadow-soft hover:border-brand-300 hover:text-brand-700 hover:-translate-y-0.5 hover:shadow-card",
  // Transparent, for dark surfaces
  ghost:
    "bg-white/10 text-white border border-white/15 backdrop-blur-sm hover:bg-white/16 hover:border-white/30 hover:-translate-y-0.5",
  // Quiet inline-style button
  subtle:
    "bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 hover:border-brand-200",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-lg gap-1.5",
  md: "text-sm px-6 py-3 rounded-xl gap-2",
  lg: "text-base px-8 py-3.5 rounded-xl gap-2",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps &
  (
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center font-semibold whitespace-nowrap",
    "transition-all duration-300 ease-soft-spring will-change-transform",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    sizes[size],
    variants[variant],
    className
  );

  const sheen = variant === "primary" ? <span className="soj-sheen" aria-hidden="true" /> : null;

  if (typeof props.href === "string") {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...rest}>
        {sheen}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {sheen}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

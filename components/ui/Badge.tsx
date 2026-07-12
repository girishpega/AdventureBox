import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "mint";
  className?: string;
}

const variantStyles = {
  default: "bg-surface-lavender text-brand-primary",
  accent: "bg-brand-accent/20 text-[#D4A017]",
  mint: "bg-brand-mint/20 text-[#00A884]",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
        variantStyles[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl sm:text-4xl font-bold tracking-tight",
  h3: "text-2xl sm:text-3xl font-semibold",
  h4: "text-xl sm:text-2xl font-semibold",
};

export function Heading({
  as: Tag = "h2",
  children,
  className = "",
  gradient = false,
}: HeadingProps) {
  return (
    <Tag
      className={[
        "font-[family-name:var(--font-fredoka)] text-text-primary",
        levelStyles[Tag],
        gradient
          ? "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}

"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { Theme } from "@/types";
import type { AdventurePhase } from "@/types/adventure";

const PHASES: AdventurePhase[] = ["open", "story", "play", "create", "celebrate"];

interface AdventureShellProps {
  theme: Theme;
  children: ReactNode;
  currentPhase?: AdventurePhase;
}

export function AdventureShell({
  theme,
  children,
  currentPhase,
}: AdventureShellProps) {
  const currentIndex = currentPhase ? PHASES.indexOf(currentPhase) : -1;

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: theme.colors.background }}
    >
      <header style={{ backgroundColor: theme.colors.background }}>
        <div className="mx-auto max-w-3xl px-4 pt-4 sm:px-6">
          <div className="flex h-12 items-center justify-between sm:h-14">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-text-secondary transition-all hover:scale-105 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label="Go home"
            >
              <span aria-hidden="true">🏠</span>
              <span className="hidden sm:inline">Home</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-xl" role="img" aria-label={theme.name}>
                {theme.emoji}
              </span>
              <span className="font-[family-name:var(--font-fredoka)] text-base font-bold text-text-primary sm:text-lg">
                {theme.name}
              </span>
            </div>

            <div className="w-16" aria-hidden="true" />
          </div>

          {currentPhase && (
            <div
              className="flex items-center justify-center gap-2 pb-3"
              aria-label={`Step ${currentIndex + 1} of ${PHASES.length}`}
            >
              {PHASES.map((_, index) => (
                <span
                  key={index}
                  className={[
                    "transition-all duration-500",
                    index <= currentIndex
                      ? "animate-sparkle text-base"
                      : "text-sm opacity-30",
                    index === currentIndex ? "scale-125" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-hidden="true"
                >
                  {index <= currentIndex ? "✨" : "·"}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-6 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}

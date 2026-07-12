import Link from "next/link";
import type { ReactNode } from "react";
import type { Theme } from "@/types";
import { Badge, Button, Container } from "@/components/ui";
import { PlaceholderIllustration } from "@/components/ui/PlaceholderIllustration";

const ADVENTURE_BEATS = [
  { id: "open", label: "Open", emoji: "📦" },
  { id: "story", label: "Story", emoji: "📖" },
  { id: "play", label: "Play", emoji: "🎮" },
  { id: "create", label: "Create", emoji: "🎨" },
  { id: "celebrate", label: "Celebrate", emoji: "🎉" },
] as const;

interface AdventureLayoutProps {
  theme: Theme;
  children?: ReactNode;
}

export function AdventureLayout({ theme, children }: AdventureLayoutProps) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      <header
        className="border-b border-black/5"
        style={{ backgroundColor: theme.colors.background }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link
              href="/"
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
            >
              ← Back to shelf
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{theme.emoji}</span>
              <span className="font-[family-name:var(--font-fredoka)] text-lg font-bold text-text-primary">
                {theme.name} Adventure
              </span>
            </div>
            <Badge variant="accent">Preview</Badge>
          </div>
        </Container>
      </header>

      <main>
        <Container className="py-8 sm:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 w-48 animate-float sm:w-56">
              <PlaceholderIllustration theme={theme.id} />
            </div>

            <h1 className="font-[family-name:var(--font-fredoka)] text-3xl font-bold text-text-primary sm:text-4xl">
              Your {theme.name} box awaits!
            </h1>
            <p className="mt-3 text-lg text-text-secondary">
              {theme.tagline}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="mb-6 text-center font-[family-name:var(--font-fredoka)] text-xl font-semibold text-text-primary">
              The Adventure Journey
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {ADVENTURE_BEATS.map((beat, index) => (
                <div key={beat.id} className="flex items-center gap-3">
                  <div
                    className="flex flex-col items-center rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-card)] sm:px-6 sm:py-4"
                    style={{ borderTop: `4px solid ${theme.colors.primary}` }}
                  >
                    <span className="text-2xl sm:text-3xl">{beat.emoji}</span>
                    <span className="mt-1 text-xs font-bold uppercase tracking-wide text-text-secondary sm:text-sm">
                      {beat.label}
                    </span>
                  </div>
                  {index < ADVENTURE_BEATS.length - 1 && (
                    <span className="hidden text-2xl text-text-muted sm:inline">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[var(--radius-card)] bg-white p-8 text-center shadow-[var(--shadow-card)]">
            <p className="text-lg text-text-secondary">
              Gameplay coming in the next sprint! This layout template shows
              where your adventure will unfold.
            </p>
            {children}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                variant="primary"
                size="lg"
                disabled
                style={{ backgroundColor: theme.colors.primary }}
              >
                Open the Box
              </Button>
              <Link href="/">
                <Button variant="ghost" size="lg">
                  Choose another theme
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

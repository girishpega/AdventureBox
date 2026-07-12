import Link from "next/link";
import type { Theme } from "@/types";
import { Card } from "./Card";
import { PlaceholderIllustration } from "./PlaceholderIllustration";
import { isPlayableTheme } from "@/lib/adventures";

interface ThemeCardProps {
  theme: Theme;
}

export function ThemeCard({ theme }: ThemeCardProps) {
  const playable = isPlayableTheme(theme.id);

  return (
    <Link href={`/adventure/${theme.id}`} className="group block">
      <Card
        hover
        padding="sm"
        className={[
          "h-full overflow-hidden border-2 border-transparent transition-colors group-hover:border-brand-primary/20",
          playable ? "ring-2 ring-brand-secondary/20" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
          <PlaceholderIllustration
            theme={theme.id}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-2xl shadow-sm backdrop-blur-sm">
            {theme.emoji}
          </span>
          {playable && (
            <span className="absolute left-3 top-3 animate-sparkle rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand-primary shadow-sm backdrop-blur-sm">
              ✨ New
            </span>
          )}
        </div>

        <div className="space-y-2 px-1">
          <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
            {theme.name}
          </h3>
          <p className="text-sm text-text-secondary">{theme.tagline}</p>

          <div className="pt-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105"
              style={{ backgroundColor: theme.colors.primary }}
            >
              {playable ? "✨ Play Now" : "🎁 Explore"}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

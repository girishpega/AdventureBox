import type { StorySummary } from "@/types/story";

interface ComingSoonCardProps {
  story: StorySummary;
}

export function ComingSoonCard({ story }: ComingSoonCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.04]">
      <div className="relative flex aspect-[16/10] w-full shrink-0 items-center justify-center bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10">
        <span className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-brand-primary sm:text-2xl">
          ✨ Coming Soon
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
        <h2 className="mb-1 line-clamp-2 font-[family-name:var(--font-fredoka)] text-lg font-bold leading-tight text-text-primary sm:text-xl">
          {story.title}
        </h2>

        <p className="mb-3 text-xs font-semibold text-text-muted sm:text-sm">
          Ages {story.age} · {story.readingMinutes} min read
        </p>

        <span className="mt-auto flex h-11 w-full items-center justify-center rounded-full bg-surface-lavender text-sm font-bold text-text-muted sm:h-12 sm:text-base">
          Premium artwork in progress
        </span>
      </div>
    </article>
  );
}

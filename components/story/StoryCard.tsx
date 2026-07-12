import Link from "next/link";
import { coverUrl } from "@/lib/storyAssets";
import type { StorySummary } from "@/types/story";
import { StoryBundleImage } from "./StoryBundleImage";

interface StoryCardProps {
  story: StorySummary;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        <StoryBundleImage
          src={coverUrl(story.slug)}
          alt={`${story.title} cover`}
          className="h-full"
          priority
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
        <h2 className="mb-1 line-clamp-2 font-[family-name:var(--font-fredoka)] text-lg font-bold leading-tight text-text-primary sm:text-xl">
          {story.title}
        </h2>

        <p className="mb-3 text-xs font-semibold text-text-muted sm:text-sm">
          Ages {story.age} · {story.readingMinutes} min read
        </p>

        <Link href={`/stories/${story.slug}`} className="mt-auto">
          <span className="flex h-11 w-full items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:h-12 sm:text-base">
            Read Story ✨
          </span>
        </Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import { coverUrl } from "@/lib/storyAssets";
import type { StorySummary } from "@/types/story";
import { StoryBundleImage } from "./StoryBundleImage";

interface StoryCardProps {
  story: StorySummary;
  size?: "default" | "large";
}

export function StoryCard({ story, size = "default" }: StoryCardProps) {
  const isLarge = size === "large";

  return (
    <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-surface-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]">
      <div
        className={[
          "relative w-full shrink-0 overflow-hidden",
          isLarge ? "aspect-[4/3]" : "aspect-[16/10]",
        ].join(" ")}
      >
        <StoryBundleImage
          src={coverUrl(story.slug)}
          alt={`${story.title} cover`}
          className="h-full transition-transform duration-500 group-hover:scale-[1.02]"
          priority
        />
      </div>

      <div
        className={[
          "flex min-h-0 flex-1 flex-col",
          isLarge ? "px-6 pb-6 pt-5" : "px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4",
        ].join(" ")}
      >
        <h2
          className={[
            "mb-1 line-clamp-2 font-[family-name:var(--font-fredoka)] font-bold leading-tight text-text-primary",
            isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
          ].join(" ")}
        >
          {story.title}
        </h2>

        <p className="mb-4 text-sm font-medium text-text-muted">
          Ages {story.age} · {story.readingMinutes} min read
        </p>

        <Link href={`/stories/${story.slug}`} className="mt-auto">
          <span className="flex h-12 w-full items-center justify-center rounded-full bg-brand-primary text-base font-bold text-white shadow-[0_4px_16px_rgba(201,75,110,0.25)] transition-all hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(201,75,110,0.35)] active:scale-[0.98]">
            Read Story
          </span>
        </Link>
      </div>
    </article>
  );
}

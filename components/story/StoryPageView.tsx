"use client";

import type { StoryPage } from "@/types/story";
import { StoryIllustrationPlaceholder } from "./StoryIllustrationPlaceholder";

interface StoryPageViewProps {
  page: StoryPage;
  pageIndex: number;
  storySlug: string;
  storyTitle: string;
  direction: "forward" | "back";
  isTransitioning: boolean;
  transitionKey: string;
  interactionRevealed: boolean;
  onInteraction: () => void;
}

export function StoryPageView({
  page,
  pageIndex,
  storySlug,
  storyTitle,
  direction,
  isTransitioning,
  transitionKey,
  interactionRevealed,
  onInteraction,
}: StoryPageViewProps) {
  const isFirstPage = pageIndex === 0;
  const hasInteraction = Boolean(page.interaction);
  const displayText =
    hasInteraction && interactionRevealed && page.interaction
      ? page.interaction.revealText
      : page.text;

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-6 sm:px-8 sm:py-8">
      {isFirstPage && (
        <p className="mb-4 text-center font-[family-name:var(--font-fredoka)] text-xs font-medium tracking-[0.2em] text-white/40 uppercase sm:mb-5 sm:text-sm">
          {storyTitle}
        </p>
      )}

      <div
        key={transitionKey}
        className={[
          "flex w-full max-w-4xl flex-col items-center",
          direction === "forward" ? "story-page-forward" : "story-page-back",
          isTransitioning ? "story-page-exit" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="mb-6 w-full overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:mb-8 sm:rounded-3xl">
          <div className="aspect-[4/5] w-full sm:aspect-[3/4]">
            <StoryIllustrationPlaceholder
              storySlug={storySlug}
              pageIndex={pageIndex}
              interactive={hasInteraction && interactionRevealed}
              className="h-full rounded-none"
            />
          </div>
        </div>

        <p className="max-w-lg text-center font-[family-name:var(--font-fredoka)] text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {displayText}
        </p>

        {hasInteraction && page.interaction && !interactionRevealed && (
          <button
            type="button"
            onClick={onInteraction}
            className="mt-8 animate-pulse-glow rounded-full border-2 border-white/25 bg-white/10 px-8 py-4 font-[family-name:var(--font-fredoka)] text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15 active:scale-95 sm:text-xl"
          >
            {page.interaction.buttonLabel}
          </button>
        )}

        {hasInteraction && page.interaction && !interactionRevealed && (
          <p className="mt-3 text-sm text-white/45">{page.interaction.prompt}</p>
        )}
      </div>
    </div>
  );
}

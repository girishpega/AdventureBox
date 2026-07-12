"use client";

import type { StoryPage } from "@/types/story";
import { pageUrl } from "@/lib/storyAssets";
import { StoryBundleImage } from "./StoryBundleImage";

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
    <div className="flex min-h-0 flex-1 flex-col items-center overflow-hidden px-4 pt-3 pb-1 sm:px-6 sm:pt-4">
      {isFirstPage && (
        <p className="mb-2 shrink-0 text-center font-[family-name:var(--font-fredoka)] text-xs font-medium tracking-[0.2em] text-white/40 uppercase sm:mb-3 sm:text-sm">
          {storyTitle}
        </p>
      )}

      <div
        key={transitionKey}
        className={[
          "flex min-h-0 w-full max-w-4xl flex-1 flex-col items-center",
          direction === "forward" ? "story-page-forward" : "story-page-back",
          isTransitioning ? "story-page-exit" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="mb-3 flex min-h-0 w-full flex-1 items-center justify-center sm:mb-4">
          <div className="story-illustration-frame overflow-hidden rounded-2xl bg-[#0d2e26] shadow-[0_24px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:rounded-3xl">
            <StoryBundleImage
              src={pageUrl(storySlug, pageIndex)}
              alt={`${storyTitle} — page ${pageIndex + 1}`}
              className="h-full rounded-none"
              fit="contain"
              priority={pageIndex === 0}
            />
          </div>
        </div>

        <div className="w-full max-w-lg shrink-0 text-center">
          <p className="font-[family-name:var(--font-fredoka)] text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            {displayText}
          </p>

          {hasInteraction && page.interaction && !interactionRevealed && (
            <button
              type="button"
              onClick={onInteraction}
              className="mt-4 animate-pulse-glow rounded-full border-2 border-white/25 bg-white/10 px-7 py-3 font-[family-name:var(--font-fredoka)] text-base font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15 active:scale-95 sm:mt-5 sm:px-8 sm:py-4 sm:text-lg"
            >
              {page.interaction.buttonLabel}
            </button>
          )}

          {hasInteraction && page.interaction && !interactionRevealed && (
            <p className="mt-2 text-sm text-white/45">{page.interaction.prompt}</p>
          )}
        </div>
      </div>
    </div>
  );
}

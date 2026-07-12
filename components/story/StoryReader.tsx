"use client";

import { useCallback, useEffect, useState } from "react";
import { READER_THEME } from "@/lib/storyAssets";
import type { StoryBundle } from "@/types/story";
import { StoryEndScreen } from "./StoryEndScreen";
import { StoryPageView } from "./StoryPageView";

interface StoryReaderProps {
  story: StoryBundle;
}

export function StoryReader({ story }: StoryReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [interactionRevealed, setInteractionRevealed] = useState(false);
  const totalPages = story.pages.length;
  const isComplete = currentPage >= totalPages;
  const page = story.pages[currentPage];
  const needsInteraction = Boolean(page?.interaction) && !interactionRevealed;
  const theme = READER_THEME;

  const goNext = useCallback(() => {
    if (isTransitioning || currentPage >= totalPages || needsInteraction) return;
    setDirection("forward");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => prev + 1);
      setInteractionRevealed(false);
      setIsTransitioning(false);
    }, 380);
  }, [currentPage, totalPages, isTransitioning, needsInteraction]);

  const goPrev = useCallback(() => {
    if (isTransitioning || currentPage <= 0) return;
    setDirection("back");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => prev - 1);
      setInteractionRevealed(false);
      setIsTransitioning(false);
    }, 380);
  }, [currentPage, isTransitioning]);

  const readAgain = useCallback(() => {
    setDirection("back");
    setInteractionRevealed(false);
    setCurrentPage(0);
  }, []);

  const handleInteraction = useCallback(() => {
    setInteractionRevealed(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        if (!isComplete && !needsInteraction) goNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (!isComplete) goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, isComplete, needsInteraction]);

  if (isComplete) {
    return <StoryEndScreen story={story} onReadAgain={readAgain} />;
  }

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div
      className="story-reader relative flex h-[100dvh] flex-col overflow-hidden"
      style={{ backgroundColor: theme.night }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 20%, ${theme.primary}33 0%, transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 80% 80%, ${theme.accent}18 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <StoryPageView
          page={page}
          pageIndex={currentPage}
          storySlug={story.slug}
          storyTitle={story.title}
          direction={direction}
          isTransitioning={isTransitioning}
          transitionKey={`${currentPage}-${direction}`}
          interactionRevealed={interactionRevealed}
          onInteraction={handleInteraction}
        />

        <div className="flex shrink-0 flex-col items-center gap-3 px-6 pb-5 pt-1 sm:gap-4 sm:pb-6 sm:pt-2">
          <div className="flex gap-2" aria-label={`Page ${currentPage + 1} of ${totalPages}`}>
            {story.pages.map((_, index) => (
              <span
                key={index}
                className={[
                  "h-1.5 rounded-full transition-all duration-500",
                  index === currentPage
                    ? "w-8"
                    : index < currentPage
                      ? "w-1.5 opacity-50"
                      : "w-1.5 opacity-20",
                ].join(" ")}
                style={{
                  backgroundColor: index <= currentPage ? theme.accent : "white",
                }}
                aria-hidden="true"
              />
            ))}
          </div>

          {!needsInteraction && (
            <div className="flex w-full max-w-md items-center justify-center gap-4">
              {!isFirstPage && (
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={isTransitioning}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white/70 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white active:scale-95 disabled:opacity-40"
                  aria-label="Previous page"
                >
                  ←
                </button>
              )}

              <button
                type="button"
                onClick={goNext}
                disabled={isTransitioning}
                className="flex h-16 min-w-[200px] flex-1 items-center justify-center rounded-full text-lg font-bold shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all hover:scale-[1.03] active:scale-[0.97] disabled:opacity-60 sm:min-w-[240px] sm:text-xl"
                style={{ backgroundColor: theme.accent, color: theme.night }}
                aria-label={isLastPage ? "Finish story" : "Next page"}
              >
                {isLastPage ? "The End ✨" : "Next →"}
              </button>

              {!isFirstPage && <span className="w-14" aria-hidden="true" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import type { PictureBook } from "@/types/story";

interface StoryEndScreenProps {
  story: PictureBook;
  onReadAgain: () => void;
}

export function StoryEndScreen({ story, onReadAgain }: StoryEndScreenProps) {
  const { theme, sticker, endMessage } = story;

  return (
    <div
      className="story-reader relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: theme.night }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${theme.primary}44 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 story-end-enter max-w-lg">
        {sticker ? (
          <div className="animate-sticker-pop mx-auto mb-6 max-w-xs rounded-2xl border-4 border-dashed bg-white/95 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.3)]" style={{ borderColor: theme.accent }}>
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
              ✨ New Sticker! ✨
            </p>
            <div className="my-3 text-6xl">{sticker.emoji}</div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
              {sticker.label}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{sticker.description}</p>
          </div>
        ) : (
          <span className="mb-6 block text-5xl animate-twinkle sm:text-6xl" role="img" aria-hidden="true">
            ✨
          </span>
        )}

        <h2 className="mb-3 font-[family-name:var(--font-fredoka)] text-4xl font-bold text-white sm:text-5xl">
          The End
        </h2>

        <p className="mb-8 font-[family-name:var(--font-fredoka)] text-2xl sm:text-3xl" style={{ color: theme.accent }}>
          {endMessage ?? "Sweet dreams."}
        </p>

        <p className="mb-8 text-base text-white/45 sm:text-lg">
          More stories are waiting for you.
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onReadAgain}
            className="flex h-14 min-w-[220px] items-center justify-center rounded-full text-lg font-bold shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all hover:scale-[1.03] active:scale-[0.97] sm:h-16 sm:min-w-[240px] sm:text-xl"
            style={{ backgroundColor: theme.accent, color: theme.night }}
          >
            Read Again ✨
          </button>

          <Link
            href="/stories"
            className="font-[family-name:var(--font-fredoka)] text-sm text-white/40 transition-colors hover:text-white/70"
          >
            ← All Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

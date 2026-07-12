"use client";

import Link from "next/link";
import Image from "next/image";
import { READER_THEME, stickerUrl } from "@/lib/storyAssets";
import type { StoryBundle } from "@/types/story";

interface StoryEndScreenProps {
  story: StoryBundle;
  onReadAgain: () => void;
}

export function StoryEndScreen({ story, onReadAgain }: StoryEndScreenProps) {
  const { sticker, endMessage } = story;
  const showStickerImage = story.hasStickerArt;

  return (
    <div
      className="story-reader relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: READER_THEME.background }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${READER_THEME.primary}15 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 story-end-enter max-w-lg">
        {sticker ? (
          <div
            className="animate-sticker-pop mx-auto mb-6 max-w-xs rounded-3xl border-4 border-dashed bg-surface-white p-6 shadow-[var(--shadow-card-hover)]"
            style={{ borderColor: READER_THEME.accent }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
              ✨ New Sticker! ✨
            </p>
            {showStickerImage ? (
              <div className="relative mx-auto my-3 h-24 w-24">
                <Image
                  src={stickerUrl(story.slug)}
                  alt={sticker.label}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="my-3 block text-6xl" aria-hidden="true">
                ✨
              </span>
            )}
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

        <h2 className="mb-3 font-[family-name:var(--font-fredoka)] text-4xl font-bold text-text-primary sm:text-5xl">
          The End
        </h2>

        <p
          className="mb-8 font-[family-name:var(--font-fredoka)] text-2xl sm:text-3xl"
          style={{ color: READER_THEME.primary }}
        >
          {endMessage ?? "Sweet dreams."}
        </p>

        <p className="mb-8 text-base text-text-secondary sm:text-lg">
          More stories are waiting for you.
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onReadAgain}
            className="flex h-14 min-w-[220px] items-center justify-center rounded-full text-lg font-bold text-white shadow-[0_8px_32px_rgba(201,75,110,0.25)] transition-all hover:scale-[1.03] active:scale-[0.97] sm:h-16 sm:min-w-[240px] sm:text-xl"
            style={{ backgroundColor: READER_THEME.primary }}
          >
            Read Again ✨
          </button>

          <Link
            href="/stories"
            className="font-[family-name:var(--font-fredoka)] text-sm text-text-muted transition-colors hover:text-brand-primary"
          >
            ← All Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

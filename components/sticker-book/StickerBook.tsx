"use client";

import { useSyncExternalStore } from "react";
import {
  getStickerBookDisplay,
  STICKER_CATALOG,
  type StickerDefinition,
} from "@/lib/stickerBook";

type DisplaySticker = StickerDefinition & {
  earned: boolean;
  earnedAt?: string;
};

const SERVER_STICKERS: DisplaySticker[] = STICKER_CATALOG.map((sticker) => ({
  ...sticker,
  earned: false,
}));

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot(): DisplaySticker[] {
  return getStickerBookDisplay();
}

function getServerSnapshot(): DisplaySticker[] {
  return SERVER_STICKERS;
}

export function StickerBook() {
  const stickers = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const earnedCount = stickers.filter((s) => s.earned).length;

  return (
    <div>
      <p className="mb-6 text-center text-lg text-text-secondary">
        {earnedCount === 0
          ? "Complete an adventure to earn your first sticker!"
          : `${earnedCount} sticker${earnedCount === 1 ? "" : "s"} collected — keep exploring!`}
      </p>

      <div
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        role="list"
        aria-label="My Sticker Book"
      >
        {stickers.map((sticker) => (
          <div
            key={sticker.id}
            role="listitem"
            className={[
              "relative flex flex-col items-center rounded-[var(--radius-card)] p-5 text-center transition-all duration-300",
              sticker.earned
                ? "bg-white shadow-[var(--shadow-card-hover)] hover:scale-[1.02]"
                : "bg-surface-lavender/60 shadow-[var(--shadow-soft)]",
            ].join(" ")}
            aria-label={
              sticker.earned
                ? `${sticker.label} sticker earned`
                : `${sticker.label} sticker locked`
            }
          >
            {!sticker.earned && (
              <span
                className="absolute right-2 top-2 text-lg opacity-70"
                aria-hidden="true"
              >
                🔒
              </span>
            )}

            <div
              className={[
                "mb-3 flex h-20 w-20 items-center justify-center rounded-2xl text-5xl transition-transform duration-500",
                sticker.earned
                  ? "bg-gradient-to-br from-brand-accent/30 to-brand-secondary/20"
                  : "bg-white/50 grayscale opacity-50",
              ].join(" ")}
              aria-hidden="true"
            >
              {sticker.emoji}
            </div>

            <h3
              className={[
                "font-[family-name:var(--font-fredoka)] text-base font-bold sm:text-lg",
                sticker.earned ? "text-text-primary" : "text-text-muted",
              ].join(" ")}
            >
              {sticker.label}
            </h3>

            {sticker.earned ? (
              <span className="mt-1 text-xs font-semibold text-brand-primary">
                ✨ Earned!
              </span>
            ) : (
              <span className="mt-1 text-xs text-text-muted">Coming soon...</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

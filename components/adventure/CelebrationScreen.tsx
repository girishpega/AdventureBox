"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { Confetti } from "./Confetti";
import { StickerReward } from "./StickerReward";
import type { AdventureCelebration } from "@/types/adventure";
import type { ThemeColors } from "@/types";

interface CelebrationScreenProps {
  celebration: AdventureCelebration;
  colors: ThemeColors;
  characterEmoji: string;
  unicornEmoji: string;
  onPlayAgain: () => void;
}

export function CelebrationScreen({
  celebration,
  colors,
  characterEmoji,
  unicornEmoji,
  onPlayAgain,
}: CelebrationScreenProps) {
  return (
    <>
      <Confetti active count={60} />

      <div className="relative flex flex-col items-center text-center">
        <div className="animate-rainbow-burst pointer-events-none absolute -top-8 h-40 w-40 rounded-full opacity-40" />

        <div className="mb-2 flex items-center gap-2">
          <span className="animate-sparkle text-2xl" aria-hidden="true">✨</span>
          <span className="animate-celebrate text-6xl sm:text-7xl" role="img" aria-label="Trophy">
            🏆
          </span>
          <span className="animate-sparkle text-2xl" aria-hidden="true">✨</span>
        </div>

        <h1
          className="font-[family-name:var(--font-fredoka)] text-3xl font-bold sm:text-4xl"
          style={{ color: colors.primary }}
        >
          {celebration.title}
        </h1>

        <p className="mt-3 text-xl font-semibold text-text-primary">
          {celebration.message}
        </p>

        <div className="my-6 flex items-end gap-4">
          <span className="text-5xl animate-float" role="img" aria-label="Princess Lily">
            {characterEmoji}
          </span>
          <span className="mb-2 text-3xl" aria-hidden="true">💕</span>
          <span className="text-5xl animate-wiggle" role="img" aria-label="Sparkles the unicorn">
            {unicornEmoji}
          </span>
        </div>

        <div className="mb-2 flex gap-3" aria-hidden="true">
          <span className="animate-twinkle text-2xl">⭐</span>
          <span className="text-3xl">🌈</span>
          <span className="animate-twinkle text-2xl">⭐</span>
        </div>

        <p className="mb-8 max-w-md text-lg text-text-secondary">
          {celebration.thankYou}
        </p>

        <div className="mb-8 w-full max-w-sm">
          <StickerReward sticker={celebration.sticker} />
        </div>

        <div className="flex w-full max-w-sm flex-col gap-3">
          <Button
            size="lg"
            onClick={onPlayAgain}
            style={{ backgroundColor: colors.primary }}
            className="min-h-[56px] w-full text-lg transition-transform hover:scale-105 active:scale-95"
          >
            Play Again 🔄
          </Button>
          <Link href="/" className="w-full">
            <Button
              variant="ghost"
              size="lg"
              fullWidth
              className="min-h-[48px] text-base transition-transform hover:scale-105 active:scale-95"
            >
              Choose Another Adventure
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

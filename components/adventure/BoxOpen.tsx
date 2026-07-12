"use client";

import { useState } from "react";
import { PlaceholderIllustration } from "@/components/ui/PlaceholderIllustration";
import { enableSound, playSound } from "@/lib/sounds";
import type { ThemeColors } from "@/types";

interface BoxOpenProps {
  colors: ThemeColors;
  characterEmoji: string;
  characterName: string;
  onOpen: () => void;
}

export function BoxOpen({
  colors,
  characterEmoji,
  characterName,
  onOpen,
}: BoxOpenProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpen) return;
    enableSound();
    playSound("boxOpen");
    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
      setTimeout(onOpen, 1000);
    }, 900);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mx-auto mb-8 w-60 sm:w-72">
        {!isOpen ? (
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            className={[
              "relative w-full rounded-3xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary focus-visible:ring-offset-4",
              isOpening
                ? "animate-box-shake animate-treasure-wiggle scale-110 shadow-[0_0_40px_rgba(253,203,110,0.6)]"
                : "animate-breathe hover:scale-105 active:scale-95",
            ].join(" ")}
            style={{
              boxShadow: isOpening
                ? `0 0 60px ${colors.accent}88`
                : `0 8px 32px ${colors.primary}22`,
            }}
            aria-label="Tap the magical treasure box to open"
          >
            <PlaceholderIllustration theme="box" />
            {isOpening && (
              <>
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{ backgroundColor: `${colors.accent}33` }}
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  <span className="animate-sparkle text-3xl">✨</span>
                  <span className="animate-sparkle text-4xl" style={{ animationDelay: "0.3s" }}>⭐</span>
                  <span className="animate-sparkle text-3xl" style={{ animationDelay: "0.6s" }}>✨</span>
                </div>
              </>
            )}
          </button>
        ) : (
          <div className="animate-fade-in-up py-4">
            <div
              className="text-8xl animate-celebrate sm:text-9xl"
              role="img"
              aria-label={characterName}
            >
              {characterEmoji}
            </div>
          </div>
        )}
      </div>

      {!isOpen && !isOpening && (
        <>
          <h1 className="font-[family-name:var(--font-fredoka)] text-3xl font-bold text-text-primary sm:text-4xl">
            Tap the box!
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            Something magical is inside...
          </p>
        </>
      )}

      {isOpen && (
        <div className="animate-fade-in-up">
          <h1 className="font-[family-name:var(--font-fredoka)] text-3xl font-bold text-text-primary sm:text-4xl">
            Hi! I&apos;m {characterName}!
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            Let&apos;s go on an adventure together!
          </p>
        </div>
      )}
    </div>
  );
}

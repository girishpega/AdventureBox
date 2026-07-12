"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { StoryIllustration } from "./StoryIllustration";
import type { StoryScene } from "@/types/adventure";
import type { ThemeColors } from "@/types";

interface StorySequenceProps {
  scenes: StoryScene[];
  colors: ThemeColors;
  onComplete: () => void;
}

export function StorySequence({ scenes, colors, onComplete }: StorySequenceProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const scene = scenes[currentScene];
  const isLastScene = currentScene === scenes.length - 1;

  const handleNext = () => {
    if (isLastScene) {
      onComplete();
    } else {
      setCurrentScene((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="mb-4 flex gap-3"
        aria-label={`Scene ${currentScene + 1} of ${scenes.length}`}
      >
        {scenes.map((_, index) => (
          <span
            key={index}
            className={[
              "transition-all duration-500",
              index === currentScene
                ? "scale-125 text-xl"
                : index < currentScene
                  ? "text-base opacity-80"
                  : "text-sm opacity-30",
            ].join(" ")}
            aria-hidden="true"
          >
            {index <= currentScene ? "⭐" : "·"}
          </span>
        ))}
      </div>

      <div key={scene.id} className="w-full max-w-lg animate-fade-in-up">
        <div className="mb-6 aspect-[5/4] w-full overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
          <StoryIllustration type={scene.illustration} className="h-full w-full" />
        </div>

        <div className="text-center">
          <span className="mb-3 inline-block text-4xl" role="img" aria-hidden="true">
            {scene.emoji}
          </span>
          <p className="font-[family-name:var(--font-fredoka)] text-xl font-semibold leading-relaxed text-text-primary sm:text-2xl">
            {scene.text}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Button
          size="lg"
          onClick={handleNext}
          style={{ backgroundColor: colors.primary }}
          className="min-h-[56px] min-w-[180px] text-lg transition-transform hover:scale-105 active:scale-95"
          aria-label={isLastScene ? "Start the challenge" : "Next scene"}
        >
          {isLastScene ? "Let's Go! ✨" : "Next ✨"}
        </Button>
      </div>
    </div>
  );
}

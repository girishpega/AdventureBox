"use client";

import { useState, useCallback } from "react";
import type { PlayableAdventure, AdventurePhase } from "@/types/adventure";
import type { Theme } from "@/types";
import { AdventureShell } from "./AdventureShell";
import { BoxOpen } from "./BoxOpen";
import { StorySequence } from "./StorySequence";
import { CelebrationScreen } from "./CelebrationScreen";
import { MazeGame } from "@/games/maze";

interface AdventureFlowProps {
  adventure: PlayableAdventure;
  theme: Theme;
}

export function AdventureFlow({ adventure, theme }: AdventureFlowProps) {
  const [phase, setPhase] = useState<AdventurePhase>("open");

  const resetAdventure = useCallback(() => {
    setPhase("open");
  }, []);

  const renderPhase = () => {
    switch (phase) {
      case "open":
        return (
          <BoxOpen
            colors={adventure.colors}
            characterEmoji={adventure.story.characterEmoji}
            characterName={adventure.story.characterName}
            onOpen={() => setPhase("story")}
          />
        );

      case "story":
        return (
          <StorySequence
            scenes={adventure.story.scenes}
            colors={adventure.colors}
            onComplete={() => setPhase("play")}
          />
        );

      case "play":
        return (
          <div className="flex flex-col items-center">
            <p className="mb-6 text-center font-[family-name:var(--font-fredoka)] text-xl font-semibold text-text-primary sm:text-2xl">
              {adventure.maze.hint}
            </p>
            <MazeGame
              grid={adventure.maze.grid as (0 | 1)[][]}
              start={adventure.maze.start}
              goal={adventure.maze.goal}
              playerEmoji={adventure.maze.playerEmoji}
              goalEmoji={adventure.maze.goalEmoji}
              colors={adventure.maze.colors}
              onComplete={() => setPhase("celebrate")}
            />
          </div>
        );

      case "celebrate":
        return (
          <CelebrationScreen
            celebration={adventure.story.celebration}
            colors={adventure.colors}
            characterEmoji={adventure.story.characterEmoji}
            unicornEmoji={adventure.maze.playerEmoji}
            onPlayAgain={resetAdventure}
          />
        );
    }
  };

  return (
    <AdventureShell theme={theme} currentPhase={phase}>
      {renderPhase()}
    </AdventureShell>
  );
}

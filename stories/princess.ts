import type { PlayableAdventure } from "@/types/adventure";
import { getThemeById } from "@/lib/themes";

const princessTheme = getThemeById("princess")!;

export const princessAdventure: PlayableAdventure = {
  id: "princess-unicorn",
  themeId: "princess",
  colors: princessTheme.colors,
  story: {
    characterName: "Princess Lily",
    characterEmoji: "👸",
    scenes: [
      {
        id: "scene-1",
        illustration: "garden",
        emoji: "🦄",
        text: "Princess Lily rushes into the garden. \"My unicorn Sparkles can't find the Rainbow Star!\"",
      },
      {
        id: "scene-2",
        illustration: "star",
        emoji: "⭐",
        text: "Can you help Sparkles travel through the magical maze?",
      },
      {
        id: "scene-3",
        illustration: "happy",
        emoji: "🌈",
        text: "Sparkles finds the Rainbow Star! The whole garden glows. Thank you, brave helper!",
      },
    ],
    celebration: {
      title: "You Did It!",
      message: "The Rainbow Star shines again!",
      thankYou: "Princess Lily hugs Sparkles and smiles at you. You're a Rainbow Helper!",
      sticker: {
        id: "rainbow-helper",
        emoji: "🦄",
        label: "Rainbow Helper",
        description: "You helped Sparkles find the star!",
      },
    },
  },
  maze: {
    grid: [
      [1, 1, 1, 0, 1],
      [0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    start: { row: 0, col: 0 },
    goal: { row: 4, col: 4 },
    playerEmoji: "🦄",
    goalEmoji: "⭐",
    hint: "✨ Help Sparkles reach the Rainbow Star!",
    colors: {
      wall: "#C2185B",
      path: "#FFF0F6",
      pathHighlight: "#FDCB6E",
      start: "#55EFC4",
      goal: "#FDCB6E",
      player: "#E84393",
      decoration: "#74B9FF",
    },
  },
};

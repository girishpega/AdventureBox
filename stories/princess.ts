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
  coloring: {
    title: "Color the Crown!",
    hint: "🖍 Tap each part to color Sparkles' magical crown!",
    emoji: "👑",
    viewBox: "0 0 200 180",
    palette: [
      "#FF6B6B",
      "#FF9F43",
      "#FECA57",
      "#55EFC4",
      "#48DBFB",
      "#54A0FF",
      "#A29BFE",
      "#FD79A8",
      "#E84393",
      "#FDCB6E",
    ],
    regions: [
      {
        id: "left-spike",
        label: "left spike",
        path: "M 30 90 L 55 25 L 80 90 Z",
      },
      {
        id: "center-spike",
        label: "center spike",
        path: "M 75 90 L 100 10 L 125 90 Z",
      },
      {
        id: "right-spike",
        label: "right spike",
        path: "M 120 90 L 145 25 L 170 90 Z",
      },
      {
        id: "left-jewel",
        label: "left jewel",
        path: "M 48 55 m -10 0 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0",
      },
      {
        id: "center-jewel",
        label: "center jewel",
        path: "M 100 40 m -12 0 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0",
      },
      {
        id: "right-jewel",
        label: "right jewel",
        path: "M 152 55 m -10 0 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0",
      },
      {
        id: "band",
        label: "crown band",
        path: "M 25 90 L 175 90 L 165 115 L 35 115 Z",
      },
      {
        id: "base",
        label: "crown base",
        path: "M 35 115 L 165 115 L 155 145 L 45 145 Z",
      },
    ],
    outlinePaths: [
      "M 55 25 L 48 55",
      "M 100 10 L 100 40",
      "M 145 25 L 152 55",
    ],
  },
};

import type { Theme } from "@/types";

export const themes: Theme[] = [
  {
    id: "princess",
    name: "Princess",
    tagline: "Castles, crowns & magical quests",
    emoji: "👑",
    colors: {
      primary: "#E84393",
      secondary: "#FD79A8",
      accent: "#FDCB6E",
      background: "#FFF0F6",
    },
    illustration: "castle",
    available: true,
  },
  {
    id: "dinosaurs",
    name: "Dinosaurs",
    tagline: "Roar into prehistoric fun",
    emoji: "🦕",
    colors: {
      primary: "#00B894",
      secondary: "#55EFC4",
      accent: "#FDCB6E",
      background: "#E8FFF8",
    },
    illustration: "dinosaur",
    available: true,
  },
  {
    id: "space",
    name: "Space",
    tagline: "Blast off to the stars",
    emoji: "🚀",
    colors: {
      primary: "#6C5CE7",
      secondary: "#A29BFE",
      accent: "#FDCB6E",
      background: "#F0EEFF",
    },
    illustration: "rocket",
    available: true,
  },
  {
    id: "animals",
    name: "Animals",
    tagline: "Meet furry forest friends",
    emoji: "🦊",
    colors: {
      primary: "#E17055",
      secondary: "#FAB1A0",
      accent: "#FDCB6E",
      background: "#FFF5EE",
    },
    illustration: "forest",
    available: true,
  },
];

export function getThemeById(id: string): Theme | undefined {
  return themes.find((theme) => theme.id === id);
}

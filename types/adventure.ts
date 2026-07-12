import type { ThemeColors } from "./index";

export type AdventurePhase = "open" | "story" | "play" | "create" | "celebrate";

export interface ColoringRegion {
  id: string;
  label: string;
  /** SVG path d attribute */
  path: string;
}

export interface ColoringConfig {
  title: string;
  hint: string;
  emoji: string;
  /** Bright child-friendly palette (8–10 colors) */
  palette: string[];
  regions: ColoringRegion[];
  /** SVG viewBox dimensions */
  viewBox: string;
  /** Outline paths rendered on top (not fillable) */
  outlinePaths?: string[];
}

export interface StoryScene {
  id: string;
  illustration: "garden" | "star" | "happy" | string;
  text: string;
  emoji: string;
}

export interface StickerReward {
  id: string;
  emoji: string;
  label: string;
  description: string;
}

export interface AdventureCelebration {
  title: string;
  message: string;
  thankYou: string;
  sticker: StickerReward;
}

export interface AdventureStory {
  characterName: string;
  characterEmoji: string;
  scenes: StoryScene[];
  celebration: AdventureCelebration;
}

export interface MazeThemeColors {
  wall: string;
  path: string;
  pathHighlight: string;
  start: string;
  goal: string;
  player: string;
  decoration: string;
}

export interface MazeConfig {
  /** 0 = wall, 1 = path */
  grid: number[][];
  start: { row: number; col: number };
  goal: { row: number; col: number };
  playerEmoji: string;
  goalEmoji: string;
  hint?: string;
  playTitle?: string;
  playDescription?: string;
  colors: MazeThemeColors;
}

export interface PlayableAdventure {
  id: string;
  themeId: string;
  story: AdventureStory;
  maze: MazeConfig;
  coloring: ColoringConfig;
  colors: ThemeColors;
}

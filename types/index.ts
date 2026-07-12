export type ThemeId = "princess" | "dinosaurs" | "space" | "animals";

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface Theme {
  id: ThemeId;
  name: string;
  tagline: string;
  emoji: string;
  colors: ThemeColors;
  illustration: string;
  available: boolean;
}

export type AdventureBeat = "open" | "story" | "play" | "create" | "celebrate";

export interface AdventureBeatConfig {
  id: AdventureBeat;
  label: string;
  description: string;
}

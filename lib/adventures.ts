import type { PlayableAdventure } from "@/types/adventure";
import type { ThemeId } from "@/types";
import { princessAdventure } from "@/stories/princess";

const adventures: Record<string, PlayableAdventure> = {
  princess: princessAdventure,
};

export function getAdventureByThemeId(
  themeId: ThemeId
): PlayableAdventure | undefined {
  return adventures[themeId];
}

export function isPlayableTheme(themeId: string): boolean {
  return themeId in adventures;
}

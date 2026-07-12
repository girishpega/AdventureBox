/**
 * Sticker book — localStorage persistence for earned adventure stickers.
 * No accounts, no backend.
 */

export interface StickerDefinition {
  id: string;
  emoji: string;
  label: string;
  description: string;
}

export interface EarnedSticker extends StickerDefinition {
  earnedAt: string;
}

const STORAGE_KEY = "adventurebox-stickers";

/** All stickers in the book — earned or locked. */
export const STICKER_CATALOG: StickerDefinition[] = [
  {
    id: "rainbow-helper",
    emoji: "🦄",
    label: "Rainbow Helper",
    description: "You helped Sparkles find the star!",
  },
  {
    id: "dino-explorer",
    emoji: "🦕",
    label: "Dino Explorer",
    description: "Explore prehistoric lands!",
  },
  {
    id: "space-hero",
    emoji: "🚀",
    label: "Space Hero",
    description: "Blast off to the stars!",
  },
  {
    id: "princess-artist",
    emoji: "👑",
    label: "Princess Artist",
    description: "Create magical crown art!",
  },
];

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getEarnedStickers(): EarnedSticker[] {
  if (!isBrowser()) return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as EarnedSticker[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function hasSticker(stickerId: string): boolean {
  return getEarnedStickers().some((s) => s.id === stickerId);
}

export function earnSticker(sticker: StickerDefinition): EarnedSticker | null {
  if (!isBrowser()) return null;

  const existing = getEarnedStickers();
  if (existing.some((s) => s.id === sticker.id)) {
    return existing.find((s) => s.id === sticker.id) ?? null;
  }

  const earned: EarnedSticker = {
    ...sticker,
    earnedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, earned]));
    window.dispatchEvent(new Event("adventurebox-stickers-updated"));
  } catch {
    return earned;
  }

  return earned;
}

export function getStickerBookDisplay(): Array<
  StickerDefinition & { earned: boolean; earnedAt?: string }
> {
  const earned = getEarnedStickers();
  return STICKER_CATALOG.map((sticker) => {
    const match = earned.find((e) => e.id === sticker.id);
    return {
      ...sticker,
      earned: Boolean(match),
      earnedAt: match?.earnedAt,
    };
  });
}

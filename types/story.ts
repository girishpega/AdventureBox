export interface StoryPage {
  text: string;
  interaction?: {
    prompt: string;
    buttonLabel: string;
    revealText: string;
  };
}

export interface StorySticker {
  label: string;
  description: string;
}

export interface StoryBundleData {
  title: string;
  age: string;
  readingMinutes: number;
  collection: string;
  hero: string;
  endMessage?: string;
  sticker?: StorySticker;
  pages: StoryPage[];
  /** Optional per-story publishing overrides (inherits from publisher/ by default) */
  publishing?: {
    isbn?: string;
    edition?: string;
    seriesNumber?: number;
  };
}

export interface StoryBundle extends StoryBundleData {
  slug: string;
  published: boolean;
  hasStickerArt: boolean;
}

export interface StorySummary {
  slug: string;
  title: string;
  age: string;
  readingMinutes: number;
  collection: string;
  hero: string;
  pageCount: number;
  published: boolean;
}

/** @deprecated Use StoryBundle */
export type PictureBook = StoryBundle;

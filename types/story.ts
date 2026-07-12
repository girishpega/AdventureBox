export interface StoryPage {
  id: string;
  text: string;
  illustrationDescription: string;
  interaction?: {
    prompt: string;
    buttonLabel: string;
    revealText: string;
  };
}

export interface StorySticker {
  emoji: string;
  label: string;
  description: string;
}

export interface PictureBook {
  slug: string;
  title: string;
  emoji: string;
  subtitle?: string;
  ageRange: string;
  readingMinutes: number;
  coverIllustrationDescription: string;
  endMessage?: string;
  sticker?: StorySticker;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    night: string;
  };
  pages: StoryPage[];
}

export interface StorySummary {
  slug: string;
  title: string;
  emoji: string;
  subtitle?: string;
  ageRange: string;
  readingMinutes: number;
  coverIllustrationDescription: string;
  theme: PictureBook["theme"];
  pageCount: number;
}

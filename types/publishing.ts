export type PublishingPageType =
  | "copyright"
  | "about-publisher"
  | "about-hero"
  | "collection"
  | "end"
  | "version";

export interface PublisherIdentity {
  name: string;
  brand: string;
  legalName: string;
  contact: { email: string };
  tagline: string;
  mission: string;
  website: string;
  copyrightHolder: string;
  version: string;
  collections: Record<
    string,
    {
      title: string;
      hero: string;
      storyCount: number;
      ageRange: string;
      status: string;
    }
  >;
}

export interface PublishingPage {
  type: PublishingPageType;
  title: string;
  content: string;
}

export interface StoryMetadata {
  schemaVersion: string;
  publisher: string;
  contact: string;
  title: string;
  language: string;
  ageRange: string;
  keywords: string[];
  categories: {
    amazonBisac: string[];
    kindleCategory: string;
  };
}

export interface PublishableStory {
  slug: string;
  title: string;
  age: string;
  readingMinutes: number;
  collection: string;
  hero: string;
  endMessage?: string;
  pageCount: number;
  hasStickerArt: boolean;
  publisher: PublisherIdentity;
  publishingPages: PublishingPage[];
  metadata: StoryMetadata;
}

export interface IllustrationIntegrityResult {
  slug: string;
  status: "PASS" | "HOLD" | "WARN";
  issues: string[];
  assets: {
    cover: { width: number; height: number; aspectRatio: number };
    pages: number;
    sticker: boolean;
  };
}

export interface IllustrationIntegrityReport {
  version: string;
  reviewedAt: string;
  stories: IllustrationIntegrityResult[];
  summary: {
    pass: number;
    hold: number;
    warn: number;
  };
}

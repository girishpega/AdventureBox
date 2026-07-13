import "server-only";

import fs from "fs";
import path from "path";
import { ELLIE_STORY_SLUGS, STORY_SLUGS, type StorySlug } from "@/stories/index";
import type { StoryBundle, StoryBundleData, StorySummary } from "@/types/story";

import ellieBalloonData from "@/stories/ellie-and-the-missing-birthday-balloon/story.json";
import ellieBubbleData from "@/stories/ellie-and-the-bubble-that-wouldnt-pop/story.json";
import ellieCloudData from "@/stories/ellie-and-the-sleepy-little-cloud/story.json";
import ellieDuckData from "@/stories/ellie-and-the-tiny-lost-duck/story.json";
import ellieFireflyData from "@/stories/ellie-and-the-first-firefly/story.json";
import ellieHiccupData from "@/stories/ellie-and-the-very-loud-hiccup/story.json";
import ellieKiteData from "@/stories/ellie-and-the-rainbow-kite/story.json";
import ellieRaindropData from "@/stories/ellie-and-the-brave-little-raindrop/story.json";
import ellieUnicornData from "@/stories/ellie-and-the-tiny-unicorn/story.json";
import pipData from "@/stories/pip-and-the-sleepy-star-parade/story.json";

const BUNDLE_DATA: Record<StorySlug, StoryBundleData> = {
  "ellie-and-the-tiny-lost-duck": ellieDuckData,
  "ellie-and-the-bubble-that-wouldnt-pop": ellieBubbleData,
  "ellie-and-the-very-loud-hiccup": ellieHiccupData,
  "ellie-and-the-first-firefly": ellieFireflyData,
  "ellie-and-the-rainbow-kite": ellieKiteData,
  "ellie-and-the-sleepy-little-cloud": ellieCloudData,
  "ellie-and-the-missing-birthday-balloon": ellieBalloonData,
  "ellie-and-the-tiny-unicorn": ellieUnicornData,
  "ellie-and-the-brave-little-raindrop": ellieRaindropData,
  "pip-and-the-sleepy-star-parade": pipData,
};

const BUNDLES_DIR = path.join(process.cwd(), "stories");

export function isStoryPublished(slug: StorySlug): boolean {
  return fs.existsSync(path.join(BUNDLES_DIR, slug, "cover.webp"));
}

function hasStickerAsset(slug: StorySlug): boolean {
  return fs.existsSync(path.join(BUNDLES_DIR, slug, "sticker.webp"));
}

function loadBundle(slug: StorySlug): StoryBundle {
  const data = BUNDLE_DATA[slug];
  return {
    slug,
    ...data,
    published: isStoryPublished(slug),
    hasStickerArt: hasStickerAsset(slug),
  };
}

function toSummary(bundle: StoryBundle): StorySummary {
  return {
    slug: bundle.slug,
    title: bundle.title,
    age: bundle.age,
    readingMinutes: bundle.readingMinutes,
    collection: bundle.collection,
    hero: bundle.hero,
    pageCount: bundle.pages.length,
    published: bundle.published,
  };
}

export function getAllStories(): StorySummary[] {
  return STORY_SLUGS.map((slug) => toSummary(loadBundle(slug)));
}

export function getEllieStories(): StorySummary[] {
  return ELLIE_STORY_SLUGS.map((slug) => toSummary(loadBundle(slug)));
}

export function getPublishedStories(): StorySummary[] {
  return getAllStories().filter((story) => story.published);
}

export function getStoryBySlug(slug: string): StoryBundle | undefined {
  if (!(STORY_SLUGS as readonly string[]).includes(slug)) {
    return undefined;
  }
  return loadBundle(slug as StorySlug);
}

export function getPublishedStoryBySlug(slug: string): StoryBundle | undefined {
  const bundle = getStoryBySlug(slug);
  if (!bundle?.published) {
    return undefined;
  }
  return bundle;
}

export function getPublishedStorySlugs(): StorySlug[] {
  return STORY_SLUGS.filter((slug) => isStoryPublished(slug));
}

export function getAllStorySlugs(): StorySlug[] {
  return [...STORY_SLUGS];
}

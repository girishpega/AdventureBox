import { stories } from "@/stories/library";
import type { PictureBook, StorySummary } from "@/types/story";

export function getAllStories(): StorySummary[] {
  return stories.map(toSummary);
}

export function getStoryBySlug(slug: string): PictureBook | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return stories.map((story) => story.slug);
}

function toSummary(story: PictureBook): StorySummary {
  return {
    slug: story.slug,
    title: story.title,
    emoji: story.emoji,
    subtitle: story.subtitle,
    ageRange: story.ageRange,
    readingMinutes: story.readingMinutes,
    coverIllustrationDescription: story.coverIllustrationDescription,
    theme: story.theme,
    pageCount: story.pages.length,
  };
}

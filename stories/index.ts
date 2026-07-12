export const STORY_SLUGS = [
  "ellie-and-the-tiny-lost-duck",
  "ellie-and-the-bubble-that-wouldnt-pop",
  "pip-and-the-sleepy-star-parade",
] as const;

export type StorySlug = (typeof STORY_SLUGS)[number];

export const ELLIE_STORY_SLUGS = [
  "ellie-and-the-tiny-lost-duck",
  "ellie-and-the-bubble-that-wouldnt-pop",
] as const;

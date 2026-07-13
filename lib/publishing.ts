import "server-only";

import fs from "fs";
import path from "path";
import type { StoryBundle } from "@/types/story";
import type {
  PublishableStory,
  PublisherIdentity,
  PublishingPage,
  StoryMetadata,
} from "@/types/publishing";

import publisherData from "@/publisher/identity/publisher.json";

const PUBLISHER_ROOT = path.join(process.cwd(), "publisher");

export const PUBLISHER: PublisherIdentity = publisherData as PublisherIdentity;

function readPublisherMarkdown(relativePath: string): string {
  return fs.readFileSync(path.join(PUBLISHER_ROOT, relativePath), "utf-8");
}

function interpolate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => vars[key] ?? "");
}

export function getPublishingPages(bundle: StoryBundle): PublishingPage[] {
  const year = String(new Date().getFullYear());
  const vars = {
    year,
    copyrightHolder: PUBLISHER.copyrightHolder,
    editionDate: `${year} Edition`,
    isbn: "Pending",
    endMessage: bundle.endMessage ?? "The end.",
    platformVersion: PUBLISHER.version,
    bundleVersion: "1.0",
    publishDate: new Date().toISOString().slice(0, 10),
  };

  return [
    {
      type: "copyright",
      title: "Copyright",
      content: interpolate(readPublisherMarkdown("templates/copyright.md"), vars),
    },
    {
      type: "about-publisher",
      title: "About WonderBerry",
      content: readPublisherMarkdown("identity/about-wonderberry.md"),
    },
    {
      type: "about-hero",
      title: "About Ellie",
      content: readPublisherMarkdown("identity/about-ellie.md"),
    },
    {
      type: "collection",
      title: "The Ellie Collection",
      content: readPublisherMarkdown("identity/collection-ellie.md"),
    },
    {
      type: "end",
      title: "The End",
      content: interpolate(readPublisherMarkdown("templates/end-page.md"), vars),
    },
    {
      type: "version",
      title: "Edition",
      content: interpolate(readPublisherMarkdown("templates/version.md"), vars),
    },
  ];
}

export function getStoryMetadata(bundle: StoryBundle): StoryMetadata {
  return {
    schemaVersion: "1.0",
    publisher: PUBLISHER.name,
    contact: PUBLISHER.contact.email,
    title: bundle.title,
    language: "en-US",
    ageRange: bundle.age,
    keywords: ["picture book", "bedtime", "Ellie", "elephant", "children", "WonderBerry"],
    categories: {
      amazonBisac: ["JUV010000", "JUV019000"],
      kindleCategory: "Children's eBooks > Animals > Elephants",
    },
  };
}

export function toPublishableStory(bundle: StoryBundle): PublishableStory {
  return {
    slug: bundle.slug,
    title: bundle.title,
    age: bundle.age,
    readingMinutes: bundle.readingMinutes,
    collection: bundle.collection,
    hero: bundle.hero,
    endMessage: bundle.endMessage,
    pageCount: bundle.pages.length,
    hasStickerArt: bundle.hasStickerArt,
    publisher: PUBLISHER,
    publishingPages: getPublishingPages(bundle),
    metadata: getStoryMetadata(bundle),
  };
}

/** Text for print/kindle — uses revealText when interaction present */
export function getPrintText(page: StoryBundle["pages"][number]): string {
  if (page.interaction?.revealText) {
    return page.interaction.revealText;
  }
  return page.text;
}

export const ILLUSTRATION_INTEGRITY_STANDARD = {
  readerFit: "contain" as const,
  cardFit: "contain" as const,
  printFit: "contain" as const,
  forbidden: ["cover", "stretch", "zoom-crop"] as const,
  pageAspectRatio: 3 / 2,
  coverAspectRatio: 2 / 3,
} as const;

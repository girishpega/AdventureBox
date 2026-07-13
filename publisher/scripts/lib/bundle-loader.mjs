import { readFileSync, existsSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const ROOT = process.cwd();

export const GOLD_MASTER_SLUG = "ellie-and-the-tiny-lost-duck";

export async function loadGoldMasterBundle() {
  const slug = GOLD_MASTER_SLUG;
  const storyPath = join(ROOT, "stories", slug, "story.json");
  const story = JSON.parse(readFileSync(storyPath, "utf-8"));
  const mastersDir = join(ROOT, "publisher", "gold-master", slug, "masters");
  const storiesDir = join(ROOT, "stories", slug);

  const pages = [];
  for (let i = 0; i < story.pages.length; i++) {
    const num = String(i + 1).padStart(2, "0");
    const candidates = [
      join(mastersDir, `page-${num}.png`),
      join(mastersDir, `page${num}.png`),
      join(storiesDir, `page${num}.webp`),
    ];
    const imagePath = candidates.find((p) => existsSync(p)) ?? null;
    pages.push({
      index: i,
      text: getPrintText(story.pages[i]),
      imagePath,
    });
  }

  return {
    slug,
    story,
    coverPath:
      (existsSync(join(mastersDir, "cover.png")) && join(mastersDir, "cover.png")) ||
      join(storiesDir, "cover.webp"),
    pages,
    mastersDir,
    storiesDir,
  };
}

export function getPrintText(page) {
  if (page.interaction?.revealText) return page.interaction.revealText;
  return page.text;
}

export function loadPublisherMarkdown(relativePath) {
  return readFileSync(join(ROOT, "publisher", relativePath), "utf-8");
}

export function interpolate(template, vars) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? "");
}

export function getPublishingVars(story) {
  const year = String(new Date().getFullYear());
  return {
    year,
    copyrightHolder: "WonderBerry Publishing",
    editionDate: `${year} Edition`,
    isbn: "Pending",
    endMessage: story.endMessage ?? "The end.",
    platformVersion: "0.8.1",
    bundleVersion: "1.0",
    publishDate: new Date().toISOString().slice(0, 10),
  };
}

export function markdownToPlain(md) {
  return md
    .replace(/^#+ .+$/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/^---$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function getExportPageSequence(story) {
  const vars = getPublishingVars(story);
  return [
    {
      type: "cover",
      title: story.title,
      imageKey: "cover",
    },
    {
      type: "text",
      title: "Copyright",
      content: markdownToPlain(
        interpolate(loadPublisherMarkdown("templates/copyright.md"), vars)
      ),
    },
    {
      type: "text",
      title: "About WonderBerry",
      content: markdownToPlain(loadPublisherMarkdown("identity/about-wonderberry.md")),
    },
    {
      type: "text",
      title: "About Ellie",
      content: markdownToPlain(loadPublisherMarkdown("identity/about-ellie.md")),
    },
    ...story.pages.map((page, i) => ({
      type: "story",
      title: `Page ${i + 1}`,
      text: getPrintText(page),
      pageIndex: i,
    })),
    {
      type: "text",
      title: "The End",
      content: markdownToPlain(
        interpolate(loadPublisherMarkdown("templates/end-page.md"), vars)
      ),
    },
    {
      type: "text",
      title: "The Ellie Collection",
      content: markdownToPlain(loadPublisherMarkdown("identity/collection-ellie.md")),
    },
    {
      type: "text",
      title: "Edition",
      content: markdownToPlain(
        interpolate(loadPublisherMarkdown("templates/version.md"), vars)
      ),
    },
  ];
}

export function getWebsitePageSequence(story) {
  return story.pages.map((page, i) => ({
    type: "story",
    title: `Page ${i + 1}`,
    text: page.interaction && !page.interaction.revealText ? page.text : getPrintText(page),
    pageIndex: i,
  }));
}

export async function getImageDimensions(imagePath) {
  const meta = await sharp(imagePath).metadata();
  return { width: meta.width ?? 0, height: meta.height ?? 0 };
}

/** object-contain: fit image in box, return draw dimensions */
export function containLayout(imgW, imgH, boxW, boxH) {
  const scale = Math.min(boxW / imgW, boxH / imgH);
  const w = imgW * scale;
  const h = imgH * scale;
  return {
    width: w,
    height: h,
    x: (boxW - w) / 2,
    y: (boxH - h) / 2,
    scale,
  };
}

export async function imageToPngBuffer(imagePath) {
  return sharp(imagePath).png().toBuffer();
}

export async function imageToJpegBuffer(imagePath, width, height) {
  return sharp(imagePath)
    .resize(width, height, { fit: "contain", background: BG })
    .jpeg({ quality: 92 })
    .toBuffer();
}

const BG = { r: 255, g: 248, b: 240 };

export { ROOT };

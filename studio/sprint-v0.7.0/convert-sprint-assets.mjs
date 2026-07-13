import sharp from "sharp";
import { mkdirSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const SPRINT = join(process.cwd(), "studio", "sprint-v0.7.0", "raw");
const PAGE_W = 1536;
const PAGE_H = 1024;

const STORIES = [
  "ellie-and-the-rainbow-kite",
  "ellie-and-the-sleepy-little-cloud",
  "ellie-and-the-missing-birthday-balloon",
  "ellie-and-the-tiny-unicorn",
  "ellie-and-the-brave-little-raindrop",
];

async function convertStory(slug) {
  const rawDir = join(SPRINT, slug);
  const outDir = join(process.cwd(), "stories", slug);
  mkdirSync(outDir, { recursive: true });

  const BG = { r: 255, g: 248, b: 240 };
  const files = readdirSync(rawDir).filter((f) => f.endsWith(".png"));
  for (const file of files) {
    const base = file.replace(/\.png$/, "");
    const isSticker = base === "sticker";
    const isCover = base === "cover";
    const out = isSticker ? "sticker.webp" : `${base}.webp`;

    let pipeline = sharp(join(rawDir, file));
    if (isSticker) {
      pipeline = pipeline.resize(512, 512, { fit: "contain", background: BG });
    } else if (isCover) {
      // Portrait cover master — preserve 2:3, never crop
      pipeline = pipeline.resize(1024, 1536, { fit: "contain", background: BG });
    } else {
      pipeline = pipeline.resize(PAGE_W, PAGE_H, { fit: "contain", background: BG });
    }

    await pipeline.webp({ quality: 88 }).toFile(join(outDir, out));
    console.log(`${slug}/${out}`);
  }
}

for (const slug of STORIES) {
  if (existsSync(join(SPRINT, slug))) {
    await convertStory(slug);
  }
}

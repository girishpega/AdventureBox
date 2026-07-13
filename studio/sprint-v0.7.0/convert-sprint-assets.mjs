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

  const files = readdirSync(rawDir).filter((f) => f.endsWith(".png"));
  for (const file of files) {
    const base = file.replace(/\.png$/, "");
    const isSticker = base === "sticker";
    const w = isSticker ? 512 : PAGE_W;
    const h = isSticker ? 512 : PAGE_H;
    const out = isSticker ? "sticker.webp" : `${base}.webp`;

    await sharp(join(rawDir, file))
      .resize(w, h, { fit: "cover", position: "centre" })
      .webp({ quality: 88 })
      .toFile(join(outDir, out));
    console.log(`${slug}/${out}`);
  }
}

for (const slug of STORIES) {
  if (existsSync(join(SPRINT, slug))) {
    await convertStory(slug);
  }
}

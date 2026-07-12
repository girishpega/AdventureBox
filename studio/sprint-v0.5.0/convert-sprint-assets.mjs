import sharp from "sharp";
import { mkdirSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const SPRINT = join(process.cwd(), "studio", "sprint-v0.5.0", "raw");
const PAGE_W = 1536;
const PAGE_H = 1024;

const STORIES = [
  "ellie-and-the-very-loud-hiccup",
  "ellie-and-the-first-firefly",
];

function convertStory(slug) {
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

    sharp(join(rawDir, file))
      .resize(w, h, { fit: "cover", position: "centre" })
      .webp({ quality: 88 })
      .toFile(join(outDir, out))
      .then(() => console.log(`${slug}/${out}`))
      .catch((e) => console.error(`FAIL ${slug}/${file}:`, e.message));
  }
}

for (const slug of STORIES) {
  if (existsSync(join(SPRINT, slug))) {
    convertStory(slug);
  }
}

import sharp from "sharp";
import { mkdirSync, copyFileSync } from "fs";
import { join } from "path";

const SRC = "/Users/girishmalleboyena_1/.cursor/projects/Users-girishmalleboyena-1-AdventureBox-AdventureBox-1/assets";
const TARGETS = [
  join(process.cwd(), "stories", "ellie-and-the-bubble-that-wouldnt-pop"),
  join(process.cwd(), "public", "stories", "ellie-and-the-bubble-that-wouldnt-pop"),
];

const PAGE_W = 1536;
const PAGE_H = 1024;

const assets = [
  { src: "bubble-cover.png", out: "cover.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page01-v2.png", out: "page01.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page02.png", out: "page02.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page03.png", out: "page03.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page04-v2.png", out: "page04.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page05.png", out: "page05.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page06.png", out: "page06.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page07.png", out: "page07.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page08.png", out: "page08.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page09.png", out: "page09.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-page10.png", out: "page10.webp", w: PAGE_W, h: PAGE_H },
  { src: "bubble-sticker.png", out: "sticker.webp", w: 512, h: 512 },
];

for (const dir of TARGETS) {
  mkdirSync(dir, { recursive: true });
}

for (const asset of assets) {
  const input = join(SRC, asset.src);
  const buffer = await sharp(input)
    .resize(asset.w, asset.h, { fit: "cover", position: "centre" })
    .webp({ quality: 88 })
    .toBuffer();

  for (const dir of TARGETS) {
    await sharp(buffer).toFile(join(dir, asset.out));
  }
  console.log(`converted ${asset.out}`);
}

// Keep story.json in sync
const storyJson = join(process.cwd(), "stories", "ellie-and-the-bubble-that-wouldnt-pop", "story.json");
for (const dir of TARGETS) {
  if (!dir.includes("public")) continue;
  copyFileSync(storyJson, join(dir, "story.json"));
}

console.log("done");

#!/usr/bin/env node
/**
 * Recover production masters for HOLD stories.
 * Run: node publisher/scripts/recover-masters.mjs
 */

import { mkdirSync, copyFileSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const BG = { r: 255, g: 248, b: 240 };

const EXTERNAL_ASSETS =
  "/Users/girishmalleboyena_1/.cursor/projects/Users-girishmalleboyena-1-AdventureBox-AdventureBox-1/assets";

async function recoverDuck() {
  const slug = "ellie-and-the-tiny-lost-duck";
  const goldDir = join(ROOT, "publisher", "gold-master", slug, "masters");
  const rawDir = join(ROOT, "studio", "sprint-v0.5.0", "raw", slug);
  const storyDir = join(ROOT, "stories", slug);
  mkdirSync(goldDir, { recursive: true });
  mkdirSync(rawDir, { recursive: true });

  const studioAssets = join(ROOT, "studio", "assets");
  const files = [
    { studio: "cover.png", gold: "cover.png", raw: "cover.png", webp: "cover.webp" },
    { studio: "page-01.png", gold: "page-01.png", raw: "page01.png", webp: "page01.webp" },
    { studio: "page-02.png", gold: "page-02.png", raw: "page02.png", webp: "page02.webp" },
    { studio: "page-03.png", gold: "page-03.png", raw: "page03.png", webp: "page03.webp" },
    { studio: "page-04.png", gold: "page-04.png", raw: "page04.png", webp: "page04.webp" },
    { studio: "page-05.png", gold: "page-05.png", raw: "page05.png", webp: "page05.webp" },
  ];

  for (const f of files) {
    const source = join(studioAssets, f.studio);
    if (!existsSync(source)) {
      console.error(`MISSING ${source}`);
      continue;
    }
    copyFileSync(source, join(goldDir, f.gold));
    copyFileSync(source, join(rawDir, f.raw));
    await sharp(source)
      .resize(1536, 1024, { fit: "contain", background: BG })
      .webp({ quality: 88 })
      .toFile(join(storyDir, f.webp));
    console.log(`duck: ${f.gold} → gold-master + raw + webp`);
  }

  writeFileSync(
    join(goldDir, "MASTER.json"),
    JSON.stringify(
      {
        slug,
        recoveredAt: new Date().toISOString(),
        source: "studio/assets/",
        coverDimensions: "1536×1024 landscape (native master)",
        status: "RECOVERED",
      },
      null,
      2
    )
  );
}

async function recoverBubble() {
  const slug = "ellie-and-the-bubble-that-wouldnt-pop";
  const rawDir = join(ROOT, "studio", "sprint-v0.5.0", "raw", slug);
  const storyDir = join(ROOT, "stories", slug);
  mkdirSync(rawDir, { recursive: true });

  if (!existsSync(EXTERNAL_ASSETS)) {
    console.error("Bubble external assets not found — skip");
    return;
  }

  const assets = [
    { src: "bubble-cover.png", raw: "cover.png", webp: "cover.webp" },
    { src: "bubble-page01-v2.png", raw: "page01.png", webp: "page01.webp" },
    { src: "bubble-page02.png", raw: "page02.png", webp: "page02.webp" },
    { src: "bubble-page03.png", raw: "page03.png", webp: "page03.webp" },
    { src: "bubble-page04-v2.png", raw: "page04.png", webp: "page04.webp" },
    { src: "bubble-page05.png", raw: "page05.png", webp: "page05.webp" },
    { src: "bubble-page06.png", raw: "page06.png", webp: "page06.webp" },
    { src: "bubble-page07.png", raw: "page07.png", webp: "page07.webp" },
    { src: "bubble-page08.png", raw: "page08.png", webp: "page08.webp" },
    { src: "bubble-page09.png", raw: "page09.png", webp: "page09.webp" },
    { src: "bubble-page10.png", raw: "page10.png", webp: "page10.webp" },
    { src: "bubble-sticker.png", raw: "sticker.png", webp: "sticker.webp", sticker: true },
  ];

  for (const a of assets) {
    const source = join(EXTERNAL_ASSETS, a.src);
    if (!existsSync(source)) {
      console.error(`MISSING ${source}`);
      continue;
    }
    copyFileSync(source, join(rawDir, a.raw));
    if (a.sticker) {
      await sharp(source)
        .resize(512, 512, { fit: "contain", background: BG })
        .webp({ quality: 88 })
        .toFile(join(storyDir, a.webp));
    } else if (a.raw === "cover.png") {
      const meta = await sharp(source).metadata();
      const isPortrait = (meta.height ?? 0) > (meta.width ?? 0);
      if (isPortrait) {
        await sharp(source)
          .resize(1024, 1536, { fit: "contain", background: BG })
          .webp({ quality: 88 })
          .toFile(join(storyDir, a.webp));
      } else {
        await sharp(source)
          .resize(1536, 1024, { fit: "contain", background: BG })
          .webp({ quality: 88 })
          .toFile(join(storyDir, a.webp));
      }
    } else {
      await sharp(source)
        .resize(1536, 1024, { fit: "contain", background: BG })
        .webp({ quality: 88 })
        .toFile(join(storyDir, a.webp));
    }
    console.log(`bubble: ${a.raw} → raw + webp`);
  }
}

await recoverDuck();
await recoverBubble();
console.log("\nMaster recovery complete.");

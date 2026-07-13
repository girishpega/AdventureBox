#!/usr/bin/env node
/**
 * Re-convert cover.webp from raw PNG using contain (no crop).
 * Preserves portrait 2:3 aspect ratio with warm whitespace padding.
 * Run: node publisher/scripts/reconvert-covers.mjs
 */

import sharp from "sharp";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();
const BG = { r: 255, g: 248, b: 240 }; // #FFF8F0 reader background

const SLUGS = readdirSync(join(ROOT, "stories")).filter((d) =>
  d.startsWith("ellie-and-the-")
);

async function findRawCover(slug) {
  for (const sprint of ["sprint-v0.7.0", "sprint-v0.5.0", "sprint-v0.6.0"]) {
    const p = join(ROOT, "studio", sprint, "raw", slug, "cover.png");
    if (existsSync(p)) return p;
  }
  return null;
}

async function reconvertCover(slug) {
  const raw = await findRawCover(slug);
  if (!raw) {
    console.log(`SKIP ${slug} — no raw cover.png found`);
    return false;
  }

  const meta = await sharp(raw).metadata();
  const isPortrait = (meta.height ?? 0) > (meta.width ?? 0);

  if (!isPortrait) {
    // Already landscape — contain into 1536×1024 without crop
    await sharp(raw)
      .resize(1536, 1024, { fit: "contain", background: BG })
      .webp({ quality: 88 })
      .toFile(join(ROOT, "stories", slug, "cover.webp"));
  } else {
    // Portrait master — preserve 2:3, pad to fit in max 1536×1536 canvas for web
    const maxW = 1024;
    const maxH = 1536;
    await sharp(raw)
      .resize(maxW, maxH, { fit: "contain", background: BG })
      .webp({ quality: 88 })
      .toFile(join(ROOT, "stories", slug, "cover.webp"));
  }

  const out = await sharp(join(ROOT, "stories", slug, "cover.webp")).metadata();
  console.log(`OK ${slug}/cover.webp → ${out.width}×${out.height}`);
  return true;
}

let count = 0;
for (const slug of SLUGS) {
  if (await reconvertCover(slug)) count++;
}
console.log(`\nRe-converted ${count} covers with contain (no crop).`);

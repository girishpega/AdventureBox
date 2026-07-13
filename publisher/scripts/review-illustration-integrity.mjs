#!/usr/bin/env node
/**
 * Illustration Integrity Reviewer — automated checks
 * Run: node publisher/scripts/review-illustration-integrity.mjs
 */

import sharp from "sharp";
import { existsSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();
const STORIES_DIR = join(ROOT, "stories");
const REPORTS_DIR = join(ROOT, "publisher", "reports");

const ELLIE_SLUGS = [
  "ellie-and-the-tiny-lost-duck",
  "ellie-and-the-bubble-that-wouldnt-pop",
  "ellie-and-the-very-loud-hiccup",
  "ellie-and-the-first-firefly",
  "ellie-and-the-rainbow-kite",
  "ellie-and-the-sleepy-little-cloud",
  "ellie-and-the-missing-birthday-balloon",
  "ellie-and-the-tiny-unicorn",
  "ellie-and-the-brave-little-raindrop",
];

const PAGE_ASPECT = 3 / 2;
const COVER_ASPECT = 2 / 3;
const ASPECT_TOLERANCE = 0.05;

async function readImageDimensions(filePath) {
  const meta = await sharp(filePath).metadata();
  return { width: meta.width ?? 0, height: meta.height ?? 0 };
}

function findRawCover(slug) {
  for (const sprint of ["sprint-v0.7.0", "sprint-v0.5.0", "sprint-v0.6.0"]) {
    const p = join(ROOT, "studio", sprint, "raw", slug, "cover.png");
    if (existsSync(p)) return p;
  }
  return null;
}

function nearAspect(ratio, target) {
  return Math.abs(ratio - target) / target <= ASPECT_TOLERANCE;
}

async function reviewStory(slug) {
  const dir = join(STORIES_DIR, slug);
  const issues = [];
  const coverPath = join(dir, "cover.webp");

  if (!existsSync(coverPath)) {
    return { slug, status: "HOLD", issues: ["Missing cover.webp"], assets: {} };
  }

  const coverDim = await readImageDimensions(coverPath);
  const coverRatio = coverDim.width / coverDim.height;
  const rawCover = findRawCover(slug);

  if (nearAspect(coverRatio, PAGE_ASPECT)) {
    if (rawCover) {
      const rawDim = await readImageDimensions(rawCover);
      const rawRatio = rawDim.width / rawDim.height;
      if (!nearAspect(rawRatio, PAGE_ASPECT)) {
        issues.push(
          `CROP DETECTED: raw cover portrait (${rawDim.width}×${rawDim.height}) → webp landscape (${coverDim.width}×${coverDim.height})`
        );
      }
    } else {
      issues.push(
        `Cover is landscape (${coverDim.width}×${coverDim.height}) — no raw master to verify (stories 1–2 need archive recovery)`
      );
    }
  } else if (!nearAspect(coverRatio, COVER_ASPECT)) {
    issues.push(`Cover aspect ratio ${coverRatio.toFixed(3)} — expected portrait 2:3 or landscape 3:2`);
  } else if (!rawCover) {
    issues.push("No raw cover.png in studio — cannot verify portrait cover master");
  }

  const pages = readdirSync(dir).filter((f) => /^page\d+\.webp$/.test(f));
  for (const page of pages) {
    const dim = await readImageDimensions(join(dir, page));
    const ratio = dim.width / dim.height;
    if (!nearAspect(ratio, PAGE_ASPECT)) {
      issues.push(`${page}: ${dim.width}×${dim.height} aspect ${ratio.toFixed(3)} ≠ 3:2`);
    }
  }

  const sticker = existsSync(join(dir, "sticker.webp"));
  if (!sticker && slug !== "ellie-and-the-tiny-lost-duck") {
    issues.push("Missing sticker.webp");
  }
  if (!sticker && slug === "ellie-and-the-tiny-lost-duck") {
    issues.push("INFO: Story #1 has no sticker.webp (legacy)");
  }

  const hasCrop = issues.some((i) => i.includes("CROP"));
  const status = hasCrop ? "HOLD" : issues.some((i) => i.includes("no raw master")) ? "HOLD" : issues.length ? "WARN" : "PASS";

  return {
    slug,
    status,
    issues,
    assets: {
      cover: { width: coverDim.width, height: coverDim.height, aspectRatio: coverRatio },
      pages: pages.length,
      sticker,
    },
  };
}

const stories = await Promise.all(ELLIE_SLUGS.map(reviewStory));
const summary = {
  pass: stories.filter((s) => s.status === "PASS").length,
  hold: stories.filter((s) => s.status === "HOLD").length,
  warn: stories.filter((s) => s.status === "WARN").length,
};

const report = {
  version: "0.8.0",
  reviewedAt: new Date().toISOString(),
  stories,
  summary,
};

mkdirSync(REPORTS_DIR, { recursive: true });
writeFileSync(join(REPORTS_DIR, "integrity-report.json"), JSON.stringify(report, null, 2));

console.log("Illustration Integrity Review — Ellie Collection\n");
for (const s of stories) {
  const icon = s.status === "PASS" ? "✅" : s.status === "HOLD" ? "🛑" : "⚠️";
  console.log(`${icon} ${s.status}  ${s.slug}`);
  for (const issue of s.issues) console.log(`     - ${issue}`);
}
console.log(`\nSummary: ${summary.pass} PASS, ${summary.warn} WARN, ${summary.hold} HOLD`);
console.log(`Report: publisher/reports/integrity-report.json`);

process.exit(summary.hold > 0 ? 1 : 0);

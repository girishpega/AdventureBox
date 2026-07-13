#!/usr/bin/env node
/**
 * Export Gold Master through full publishing pipeline.
 * Run: node publisher/scripts/export-gold-master.mjs
 */

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  loadGoldMasterBundle,
  getExportPageSequence,
  getWebsitePageSequence,
  GOLD_MASTER_SLUG,
  ROOT,
} from "./lib/bundle-loader.mjs";
import { createStoryPdf, createCoverWrapPdf } from "./lib/pdf-builder.mjs";
import { createFixedLayoutEpub, createKindleCoverJpeg } from "./lib/epub-builder.mjs";

const OUT = join(ROOT, "publisher", "exports", "output", GOLD_MASTER_SLUG);
mkdirSync(OUT, { recursive: true });

const bundle = await loadGoldMasterBundle();
const { story, coverPath, pages } = bundle;
const exportSequence = getExportPageSequence(story);
const websiteSequence = getWebsitePageSequence(story);

function imageResolver(page) {
  if (page.type === "cover") return coverPath;
  if (page.type === "story") {
    const p = pages[page.pageIndex];
    return p?.imagePath;
  }
  return null;
}

// Manifest for Agent 18 validation
const manifest = {
  version: "0.8.1",
  slug: GOLD_MASTER_SLUG,
  title: story.title,
  exportedAt: new Date().toISOString(),
  exportPageCount: exportSequence.length,
  websiteStoryPageCount: websiteSequence.length,
  exportSequence: exportSequence.map((p) => ({
    type: p.type,
    title: p.title,
    text: p.text ?? p.content?.slice(0, 80) ?? null,
  })),
  websiteSequence: websiteSequence.map((p) => ({
    type: p.type,
    title: p.title,
    text: p.text,
  })),
  storyTexts: story.pages.map((p) =>
    p.interaction?.revealText ? p.interaction.revealText : p.text
  ),
};

writeFileSync(join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));

// 1. Printable PDF (8.5×8.5, no bleed)
const printablePdf = await createStoryPdf(exportSequence, imageResolver, {
  label: "printable",
  includeBleed: false,
});
writeFileSync(join(OUT, "printable.pdf"), await printablePdf.save());

// 2. Paperback interior PDF (8.5×8.5 with bleed)
const paperbackPdf = await createStoryPdf(exportSequence, imageResolver, {
  label: "paperback-interior",
  includeBleed: true,
});
writeFileSync(join(OUT, "paperback-interior.pdf"), await paperbackPdf.save());

// 3. Paperback cover wrap
const paperbackCover = await createCoverWrapPdf(coverPath, story.title, {
  pageCount: exportSequence.length,
});
writeFileSync(join(OUT, "paperback-cover.pdf"), await paperbackCover.save());

// 4. Hardcover cover mock (wider spine assumption for mock)
const hardcoverCover = await createCoverWrapPdf(coverPath, story.title, {
  pageCount: 75,
  paperType: "white",
});
writeFileSync(join(OUT, "hardcover-cover-mock.pdf"), await hardcoverCover.save());

// 5. Kindle EPUB
const epubBuffer = await createFixedLayoutEpub(bundle, exportSequence, imageResolver);
writeFileSync(join(OUT, "kindle.epub"), epubBuffer);

// 6. Kindle cover JPEG (2560×1600)
const kindleCover = await createKindleCoverJpeg(coverPath);
writeFileSync(join(OUT, "kindle-cover.jpg"), kindleCover);

console.log(`Gold Master export complete → ${OUT}`);
console.log(`  printable.pdf`);
console.log(`  paperback-interior.pdf`);
console.log(`  paperback-cover.pdf`);
console.log(`  hardcover-cover-mock.pdf`);
console.log(`  kindle.epub`);
console.log(`  kindle-cover.jpg`);
console.log(`  manifest.json`);

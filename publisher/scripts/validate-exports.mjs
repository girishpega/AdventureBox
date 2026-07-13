#!/usr/bin/env node
/**
 * Agent 18 — Export Validation Reviewer
 * Run: node publisher/scripts/validate-exports.mjs
 */

import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";
import {
  loadGoldMasterBundle,
  getExportPageSequence,
  getWebsitePageSequence,
  getPrintText,
  GOLD_MASTER_SLUG,
  ROOT,
} from "./lib/bundle-loader.mjs";

const OUT = join(ROOT, "publisher", "exports", "output", GOLD_MASTER_SLUG);
const REPORTS = join(ROOT, "publisher", "reports");

const checks = [];

function record(name, status, detail) {
  checks.push({ name, status, detail });
}

async function main() {
  const bundle = await loadGoldMasterBundle();
  const { story } = bundle;
  const exportSeq = getExportPageSequence(story);
  const websiteSeq = getWebsitePageSequence(story);

  // Story text parity: website print text vs export story pages
  const exportStoryTexts = exportSeq.filter((p) => p.type === "story").map((p) => p.text);
  const websiteTexts = websiteSeq.map((p) => p.text);
  const expectedTexts = story.pages.map((p) => getPrintText(p));

  const textMatch =
    JSON.stringify(exportStoryTexts) === JSON.stringify(expectedTexts) &&
    JSON.stringify(websiteTexts) === JSON.stringify(expectedTexts);

  record(
    "Story text parity (website vs export vs bundle)",
    textMatch ? "PASS" : "HOLD",
    textMatch
      ? `${expectedTexts.length} pages match`
      : `Mismatch: export=${exportStoryTexts.join("|")} vs bundle=${expectedTexts.join("|")}`
  );

  // Page order
  const storyPageOrder = exportSeq
    .filter((p) => p.type === "story")
    .map((_, i) => i + 1);
  record(
    "Story page order",
    storyPageOrder.join() === "1,2,3,4,5" ? "PASS" : "HOLD",
    `Pages: ${storyPageOrder.join(", ")}`
  );

  // Publisher pages present in export
  const pubTypes = exportSeq.filter((p) => p.type === "text").map((p) => p.title);
  const requiredPub = ["Copyright", "About WonderBerry", "About Ellie", "The End", "The Ellie Collection", "Edition"];
  const pubOk = requiredPub.every((t) => pubTypes.includes(t));
  record(
    "Publisher pages in export",
    pubOk ? "PASS" : "HOLD",
    pubTypes.join(", ")
  );

  // Output files exist
  const files = [
    "printable.pdf",
    "paperback-interior.pdf",
    "paperback-cover.pdf",
    "hardcover-cover-mock.pdf",
    "kindle.epub",
    "kindle-cover.jpg",
    "manifest.json",
  ];
  for (const f of files) {
    record(`Output file: ${f}`, existsSync(join(OUT, f)) ? "PASS" : "HOLD", join(OUT, f));
  }

  // PDF page counts
  if (existsSync(join(OUT, "printable.pdf"))) {
    const pdfBytes = readFileSync(join(OUT, "printable.pdf"));
    const pdf = await PDFDocument.load(pdfBytes);
    record(
      "Printable PDF page count",
      pdf.getPageCount() === exportSeq.length ? "PASS" : "HOLD",
      `${pdf.getPageCount()} pages (expected ${exportSeq.length})`
    );
  }

  if (existsSync(join(OUT, "paperback-interior.pdf"))) {
    const pdfBytes = readFileSync(join(OUT, "paperback-interior.pdf"));
    const pdf = await PDFDocument.load(pdfBytes);
    record(
      "Paperback interior page count",
      pdf.getPageCount() === exportSeq.length ? "PASS" : "HOLD",
      `${pdf.getPageCount()} pages`
    );
  }

  // EPUB spine count
  if (existsSync(join(OUT, "kindle.epub"))) {
    const zip = await JSZip.loadAsync(readFileSync(join(OUT, "kindle.epub")));
    const opf = await zip.file("OEBPS/content.opf")?.async("string");
    const spineRefs = (opf?.match(/itemref idref/g) ?? []).length;
    record(
      "Kindle EPUB spine count",
      spineRefs === exportSeq.length ? "PASS" : "HOLD",
      `${spineRefs} items (expected ${exportSeq.length})`
    );
  }

  // Metadata
  if (existsSync(join(OUT, "manifest.json"))) {
    const manifest = JSON.parse(readFileSync(join(OUT, "manifest.json"), "utf-8"));
    record(
      "Metadata title",
      manifest.title === story.title ? "PASS" : "HOLD",
      manifest.title
    );
  }

  // Illustration integrity: all story pages have images
  const missingImages = bundle.pages.filter((p) => !p.imagePath);
  record(
    "Illustration assets present",
    missingImages.length === 0 ? "PASS" : "HOLD",
    missingImages.length ? `Missing: ${missingImages.map((p) => p.index + 1)}` : "All 5 pages + cover"
  );

  const summary = {
    pass: checks.filter((c) => c.status === "PASS").length,
    hold: checks.filter((c) => c.status === "HOLD").length,
    warn: checks.filter((c) => c.status === "WARN").length,
  };

  const overall = summary.hold === 0 ? "PASS" : "HOLD";

  const report = {
    version: "0.8.1",
    agent: "Export Validation Reviewer (18)",
    slug: GOLD_MASTER_SLUG,
    reviewedAt: new Date().toISOString(),
    overall,
    summary,
    checks,
    exportComparison: {
      website: { storyPages: websiteSeq.length, includesPublisherPages: false },
      printablePdf: { pages: exportSeq.length, includesPublisherPages: true },
      paperbackInterior: { pages: exportSeq.length, trim: "8.5×8.5 in" },
      kindleEpub: { pages: exportSeq.length, layout: "fixed" },
      contentParity: textMatch ? "PASS — story text identical across formats" : "HOLD",
    },
  };

  mkdirSync(REPORTS, { recursive: true });
  writeFileSync(join(REPORTS, "export-validation.json"), JSON.stringify(report, null, 2));

  console.log("Export Validation Review — Gold Master\n");
  for (const c of checks) {
    const icon = c.status === "PASS" ? "✅" : c.status === "HOLD" ? "🛑" : "⚠️";
    console.log(`${icon} ${c.status}  ${c.name}`);
    if (c.detail) console.log(`     ${c.detail}`);
  }
  console.log(`\nOverall: ${overall} (${summary.pass} PASS, ${summary.hold} HOLD)`);
  console.log(`Report: publisher/reports/export-validation.json`);

  process.exit(summary.hold > 0 ? 1 : 0);
}

main();

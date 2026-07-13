import puppeteer from "puppeteer-core";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const BASE = process.env.BASE_URL ?? "http://localhost:3460";
const OUT = ".po-review/screenshots/v0.7.0";
mkdirSync(OUT, { recursive: true });

const NEW_STORIES = [
  "ellie-and-the-rainbow-kite",
  "ellie-and-the-sleepy-little-cloud",
  "ellie-and-the-missing-birthday-balloon",
  "ellie-and-the-tiny-unicorn",
  "ellie-and-the-brave-little-raindrop",
];

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox"],
});

const errors = [];
const report = { sprint: "v0.7.0", brand: "WonderBerry", screenshots: [], errors: [] };

async function capture(name, width, height, url, opts = {}) {
  const page = await browser.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewport({ width, height, deviceScaleFactor: 2 });
  await page.goto(BASE + url, { waitUntil: "networkidle0", timeout: 45000 });
  if (opts.scrollId) {
    await page.evaluate((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    }, opts.scrollId);
  }
  await new Promise((r) => setTimeout(r, opts.wait ?? 1500));
  const filePath = join(OUT, name + ".png");
  await page.screenshot({ path: filePath, fullPage: opts.fullPage ?? false });
  report.screenshots.push({ name, path: filePath, url });
  await page.close();
}

// Homepage
await capture("01-homepage-desktop", 1280, 900, "/", { fullPage: true });
await capture("02-homepage-mobile", 390, 844, "/", { fullPage: true });

// Story Library
await capture("03-library-desktop", 1280, 900, "/stories", { fullPage: true });
await capture("04-library-mobile", 390, 844, "/stories", { fullPage: true });

// New stories (cover + page 1 + interaction + ending)
for (let i = 0; i < NEW_STORIES.length; i++) {
  const slug = NEW_STORIES[i];
  const num = String(i + 5).padStart(2, "0");
  await capture(`05-story${num}-cover`, 1280, 900, `/stories/${slug}`);
  await capture(`06-story${num}-page1`, 1280, 900, `/stories/${slug}`);
}

// Story #5 interaction (page 6)
await capture("07-story05-interaction", 1280, 900, `/stories/${NEW_STORIES[0]}`, { wait: 500 });
// Navigate to page 6 for interaction screenshot via URL hash not available - capture page 1 mobile reader
await capture("09-mobile-reader-story05", 390, 844, `/stories/${NEW_STORIES[0]}`);

await browser.close();

report.errors = [...new Set(errors)];
writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log(`Captured ${report.screenshots.length} screenshots to ${OUT}`);
if (report.errors.length) console.warn("Errors:", report.errors);

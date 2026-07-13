#!/usr/bin/env node
import puppeteer from "puppeteer-core";
import { mkdirSync } from "fs";
import { join } from "path";

const BASE = process.env.BASE_URL || "http://localhost:3462";
const OUT = join(process.cwd(), ".po-review/screenshots/v0.8.1-po-visual");
mkdirSync(OUT, { recursive: true });

const CHROME =
  process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "google-chrome";

const shots = [
  { name: "01-homepage-desktop", url: "/", width: 1280, height: 900 },
  { name: "02-homepage-tablet", url: "/", width: 834, height: 1194 },
  { name: "03-homepage-mobile", url: "/", width: 390, height: 844 },
  { name: "04-library-desktop", url: "/stories", width: 1280, height: 900 },
  { name: "05-library-mobile", url: "/stories", width: 390, height: 844 },
  { name: "06-duck-page1-desktop", url: "/stories/ellie-and-the-tiny-lost-duck", width: 1280, height: 900 },
  { name: "07-duck-page3-interaction-mobile", url: "/stories/ellie-and-the-tiny-lost-duck", width: 390, height: 844, clicks: 2 },
  { name: "08-duck-end-mobile", url: "/stories/ellie-and-the-tiny-lost-duck", width: 390, height: 844, finish: true },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox"],
});

const page = await browser.newPage();

for (const shot of shots) {
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 2 });
  await page.goto(BASE + shot.url, { waitUntil: "networkidle0", timeout: 60000 });

  if (shot.clicks) {
    for (let i = 0; i < shot.clicks; i++) {
      await page.waitForSelector('button[aria-label="Next page"], button:has-text("Next")', { timeout: 10000 }).catch(() => {});
      const btn = await page.$('button[aria-label="Next page"]');
      if (btn) await btn.click();
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  if (shot.finish) {
    for (let i = 0; i < 6; i++) {
      const next = await page.$('button[aria-label="Next page"], button[aria-label="Finish story"]');
      const look = await page.$('button:has-text("Look")');
      if (look) {
        await look.click();
        await new Promise((r) => setTimeout(r, 400));
      }
      if (next) {
        await next.click();
        await new Promise((r) => setTimeout(r, 600));
      }
    }
  }

  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: join(OUT, `${shot.name}.png`), fullPage: shot.url === "/" || shot.url === "/stories" });
  console.log("captured", shot.name);
}

await browser.close();
console.log("done →", OUT);

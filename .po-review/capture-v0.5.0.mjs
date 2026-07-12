import puppeteer from "puppeteer-core";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const BASE = process.env.BASE_URL ?? "http://localhost:3460";
const OUT = ".po-review/screenshots/v0.5.0";
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox"],
});

const errors = [];
const report = {
  sprint: "v0.5.0",
  stories: {},
  errors: [],
};

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
  await page.screenshot({
    path: join(OUT, name + ".png"),
    fullPage: opts.fullPage ?? false,
  });
  const data = await page.evaluate(() => ({
    text: document.body.innerText.slice(0, 800),
    imgs: [...document.querySelectorAll("img")].map((i) => ({
      src: i.src,
      alt: i.alt,
      w: i.naturalWidth,
      h: i.naturalHeight,
    })),
  }));
  await page.close();
  return data;
}

async function walkStory(slug, prefix) {
  const storyReport = { pageShots: [] };
  const page = await browser.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await page.goto(`${BASE}/stories/${slug}`, { waitUntil: "networkidle0", timeout: 45000 });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: join(OUT, `${prefix}-cover.png`) });

  for (let i = 0; i < 10; i++) {
    await new Promise((r) => setTimeout(r, 600));
    const text = await page.evaluate(() => document.body.innerText);
    const img = await page.evaluate(() => document.querySelector("img")?.src ?? "");
    storyReport.pageShots.push({ page: i + 1, text: text.slice(0, 150), img });

    if (i === 0) await page.screenshot({ path: join(OUT, `${prefix}-page1.png`) });
    if (i === 5) await page.screenshot({ path: join(OUT, `${prefix}-interaction.png`) });
    if (i === 9) await page.screenshot({ path: join(OUT, `${prefix}-ending.png`) });

    const interact = await page.evaluateHandle(() =>
      [...document.querySelectorAll("button")].find((b) =>
        /hold|glow|look|poke/i.test(b.textContent ?? "")
      )
    );
    const interactEl = interact.asElement();
    if (interactEl) {
      await interactEl.click();
      await new Promise((r) => setTimeout(r, 500));
    }

    const next = await page.$(
      'button[aria-label="Next page"], button[aria-label="Finish story"]'
    );
    if (next) await next.click();
  }

  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: join(OUT, `${prefix}-sticker.png`) });
  storyReport.endingText = await page.evaluate(() => document.body.innerText);
  await page.close();
  return storyReport;
}

report.homeDesktop = await capture("01-homepage-desktop", 1280, 900, "/");
report.homeMobile = await capture("02-homepage-mobile", 390, 844, "/", { fullPage: true });
report.libraryDesktop = await capture("03-library-desktop", 1280, 900, "/stories");
report.libraryMobile = await capture("04-library-mobile", 390, 844, "/stories", { fullPage: true });

report.stories.hiccup = await walkStory("ellie-and-the-very-loud-hiccup", "05-story3");
report.stories.firefly = await walkStory("ellie-and-the-first-firefly", "06-story4");

report.errors = errors;
await browser.close();
writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log("visual review done", errors.length, "console errors");

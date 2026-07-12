import puppeteer from "puppeteer-core";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const BASE = "http://localhost:3460";
const OUT = ".po-review/screenshots/visual-review";
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox"],
});

const errors = [];
const report = { pageShots: [] };

async function capture(name, width, height, url, opts = {}) {
  const page = await browser.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewport({ width, height, deviceScaleFactor: 2 });
  await page.goto(BASE + url, { waitUntil: "networkidle0", timeout: 30000 });
  if (opts.scrollId) {
    await page.evaluate((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    }, opts.scrollId);
  }
  await new Promise((r) => setTimeout(r, opts.wait ?? 1200));
  await page.screenshot({
    path: join(OUT, name + ".png"),
    fullPage: opts.fullPage ?? false,
  });
  const data = await page.evaluate(() => ({
    text: document.body.innerText.slice(0, 600),
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

report.homeDesktop = await capture("01-homepage-desktop", 1280, 900, "/");
report.homeMeetEllie = await capture("01-homepage-meet-ellie", 1280, 900, "/", {
  scrollId: "stories",
});
report.homeMobile = await capture("01-homepage-mobile", 390, 844, "/", { fullPage: true });
report.libraryDesktop = await capture("02-library-desktop", 1280, 900, "/stories");
report.libraryMobile = await capture("02-library-mobile", 390, 844, "/stories", {
  fullPage: true });

const page = await browser.newPage();
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
await page.goto(BASE + "/stories/ellie-and-the-tiny-lost-duck", {
  waitUntil: "networkidle0",
});
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: join(OUT, "03-story1-cover.png") });

for (let i = 0; i < 5; i++) {
  await new Promise((r) => setTimeout(r, 600));
  const text = await page.evaluate(() => document.body.innerText);
  const img = await page.evaluate(() => document.querySelector("img")?.src ?? "");
  report.pageShots.push({ page: i + 1, text: text.slice(0, 120), img });

  if (i === 0) await page.screenshot({ path: join(OUT, "03-story1-page1.png") });
  if (i === 2) await page.screenshot({ path: join(OUT, "03-story1-interaction.png") });
  if (i === 3) await page.screenshot({ path: join(OUT, "03-story1-best-page.png") });

  const poke = await page.evaluateHandle(() =>
    [...document.querySelectorAll("button")].find((b) => /look|poke/i.test(b.textContent ?? ""))
  );
  const pokeEl = poke.asElement();
  if (pokeEl) {
    await pokeEl.click();
    await new Promise((r) => setTimeout(r, 500));
  }

  const next = await page.$(
    'button[aria-label="Next page"], button[aria-label="Finish story"]'
  );
  if (next) await next.click();
}

await new Promise((r) => setTimeout(r, 800));
await page.screenshot({ path: join(OUT, "03-story1-ending.png") });
report.endingText = await page.evaluate(() => document.body.innerText);
await page.close();

report.libraryForBubble = await capture("04-story2-coming-soon", 1280, 900, "/stories");
report.errors = errors;

await browser.close();
writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log("done", errors.length, "errors");

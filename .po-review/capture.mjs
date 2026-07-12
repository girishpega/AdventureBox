import puppeteer from "puppeteer-core";
import { mkdirSync } from "fs";
import { join } from "path";

const BASE = "http://localhost:3456";
const OUT = join(process.cwd(), ".po-review", "screenshots");
mkdirSync(OUT, { recursive: true });

const CHROME =
  process.platform === "darwin"
    ? "/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome"
    : "google-chrome";

const shots = [
  { name: "01-homepage-desktop", url: "/", width: 1280, height: 900 },
  { name: "01-homepage-mobile", url: "/", width: 390, height: 844 },
  { name: "02-library-desktop", url: "/stories", width: 1280, height: 900 },
  { name: "02-library-mobile", url: "/stories", width: 390, height: 844 },
  { name: "03-story1-opening", url: "/stories/ellie-and-the-tiny-lost-duck", width: 1280, height: 900 },
  { name: "03-story1-middle", url: "/stories/ellie-and-the-tiny-lost-duck", width: 1280, height: 900, page: 2 },
  { name: "03-story1-ending", url: "/stories/ellie-and-the-tiny-lost-duck", width: 1280, height: 900, finish: true },
  { name: "04-story2-cover", url: "/stories/ellie-and-the-bubble-that-wouldnt-pop", width: 1280, height: 900 },
  { name: "04-story2-funny", url: "/stories/ellie-and-the-bubble-that-wouldnt-pop", width: 1280, height: 900, page: 3 },
  { name: "04-story2-interaction", url: "/stories/ellie-and-the-bubble-that-wouldnt-pop", width: 1280, height: 900, page: 5 },
  { name: "04-story2-ending", url: "/stories/ellie-and-the-bubble-that-wouldnt-pop", width: 1280, height: 900, finish: true },
  { name: "05-mobile-story2", url: "/stories/ellie-and-the-bubble-that-wouldnt-pop", width: 390, height: 844, page: 5 },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const shot of shots) {
  const page = await browser.newPage();
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 2 });
  await page.goto(`${BASE}${shot.url}`, { waitUntil: "networkidle0", timeout: 30000 });

  if (shot.page) {
    for (let i = 0; i < shot.page; i++) {
      await page.waitForSelector('button[aria-label="Next page"], button[aria-label="Finish story"]', { timeout: 10000 });
      const btn = await page.$('button[aria-label="Next page"], button[aria-label="Finish story"]');
      if (btn) await btn.click();
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  if (shot.finish) {
    const pageCount = shot.url.includes("bubble") ? 10 : 5;
    for (let i = 0; i < pageCount; i++) {
      const poke = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll("button"));
        return buttons.find((b) => /poke|look/i.test(b.textContent ?? ""));
      });
      const pokeEl = poke.asElement();
      if (pokeEl) {
        await pokeEl.click();
        await new Promise((r) => setTimeout(r, 400));
      }
      const next = await page.$('button[aria-label="Next page"], button[aria-label="Finish story"]');
      if (!next) break;
      await next.click();
      await new Promise((r) => setTimeout(r, 500));
    }
    await new Promise((r) => setTimeout(r, 800));
  }

  await page.screenshot({ path: join(OUT, `${shot.name}.png`), fullPage: shot.width < 500 });
  console.log(`saved ${shot.name}`);
  await page.close();
}

await browser.close();
console.log("done");

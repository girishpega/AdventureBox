import puppeteer from "puppeteer-core";
import { mkdirSync } from "fs";
import { join } from "path";

const BASE = process.env.BASE_URL ?? "http://localhost:3456";
const OUT = join(process.cwd(), ".po-review", "screenshots", "reader-polish");
mkdirSync(OUT, { recursive: true });

const CHROME =
  process.platform === "darwin"
    ? "/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome"
    : "google-chrome";

const viewports = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "tablet", width: 834, height: 1194 },
  { name: "mobile", width: 390, height: 844 },
];

const stories = [
  "ellie-and-the-tiny-lost-duck",
  "ellie-and-the-bubble-that-wouldnt-pop",
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const vp of viewports) {
  for (const slug of stories) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto(`${BASE}/stories/${slug}`, { waitUntil: "networkidle0", timeout: 30000 });
    await page.screenshot({ path: join(OUT, `${vp.name}-${slug}-page1.png`) });

    // interaction page for duck (page 3) and bubble (page 6)
    const interactionPage = slug.includes("duck") ? 2 : 5;
    for (let i = 0; i < interactionPage; i++) {
      const btn = await page.$('button[aria-label="Next page"]');
      if (btn) await btn.click();
      await new Promise((r) => setTimeout(r, 500));
    }
    await page.screenshot({ path: join(OUT, `${vp.name}-${slug}-interaction.png`) });
    await page.close();
    console.log(`saved ${vp.name} ${slug}`);
  }
}

await browser.close();
console.log("done");

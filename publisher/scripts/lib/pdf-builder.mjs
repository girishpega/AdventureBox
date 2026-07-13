import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import {
  containLayout,
  getImageDimensions,
  imageToPngBuffer,
} from "./bundle-loader.mjs";

const PAGE_BG = rgb(1, 0.973, 0.941); // #FFF8F0
const TEXT_COLOR = rgb(0.239, 0.173, 0.18); // #3D2C2E

export const TRIM_8_5 = 612; // 8.5" × 72 pt
export const MARGIN = 36; // 0.5"
export const BLEED = 9; // 0.125"

export async function createStoryPdf(pages, imageResolver, options = {}) {
  const {
    trimSize = TRIM_8_5,
    margin = MARGIN,
    includeBleed = false,
  } = options;

  const bleed = includeBleed ? BLEED : 0;
  const pageSize = trimSize + bleed * 2;
  const pdf = await PDFDocument.create();
  pdf.setTitle(pages[0]?.title ?? "WonderBerry Story");
  pdf.setProducer("WonderBerry Publishing Export Pipeline v0.8.1");
  pdf.setCreator("WonderBerry Publishing");

  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  for (const page of pages) {
    const pdfPage = pdf.addPage([pageSize, pageSize]);
    pdfPage.drawRectangle({
      x: 0,
      y: 0,
      width: pageSize,
      height: pageSize,
      color: PAGE_BG,
    });

    const contentX = bleed + margin;
    const contentW = trimSize - margin * 2;
    const contentH = trimSize - margin * 2;

    if (page.type === "cover" || page.type === "story") {
      const imagePath = imageResolver(page);
      if (imagePath) {
        const png = await imageToPngBuffer(imagePath);
        const img = await pdf.embedPng(png);
        const dim = await getImageDimensions(imagePath);
        const imageBoxH = page.type === "cover" ? contentH * 0.88 : contentH * 0.62;
        const layout = containLayout(dim.width, dim.height, contentW, imageBoxH);
        pdfPage.drawImage(img, {
          x: contentX + layout.x,
          y: pageSize - bleed - margin - layout.y - layout.height,
          width: layout.width,
          height: layout.height,
        });
      }

      if (page.type === "cover") {
        pdfPage.drawText(page.title, {
          x: contentX,
          y: bleed + margin,
          size: 14,
          font: fontBold,
          color: TEXT_COLOR,
          maxWidth: contentW,
        });
      }

      if (page.type === "story" && page.text) {
        pdfPage.drawText(page.text, {
          x: contentX,
          y: bleed + margin + contentH * 0.28,
          size: 16,
          font: fontBold,
          color: TEXT_COLOR,
          maxWidth: contentW,
          lineHeight: 22,
        });
      }
    } else if (page.type === "text") {
      pdfPage.drawText(page.title, {
        x: contentX,
        y: pageSize - bleed - margin - 24,
        size: 18,
        font: fontBold,
        color: TEXT_COLOR,
      });

      const lines = wrapText(page.content, 70);
      let y = pageSize - bleed - margin - 56;
      for (const line of lines) {
        if (y < bleed + margin) break;
        pdfPage.drawText(line, {
          x: contentX,
          y,
          size: 10,
          font,
          color: TEXT_COLOR,
          maxWidth: contentW,
        });
        y -= 14;
      }
    }
  }

  return pdf;
}

function wrapText(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function createCoverWrapPdf(coverPath, title, options = {}) {
  const { trimW = 8.5, trimH = 8.5, pageCount = 12, paperType = "white" } = options;
  const spineIn =
    paperType === "cream" ? pageCount * 0.0025 : pageCount * 0.002252;
  const bleedIn = 0.125;
  const totalW = (trimW * 2 + spineIn + bleedIn * 2) * 72;
  const totalH = (trimH + bleedIn * 2) * 72;

  const pdf = await PDFDocument.create();
  const page = pdf.addPage([totalW, totalH]);
  page.drawRectangle({ x: 0, y: 0, width: totalW, height: totalH, color: PAGE_BG });

  const png = await imageToPngBuffer(coverPath);
  const img = await pdf.embedPng(png);
  const dim = await getImageDimensions(coverPath);
  const frontW = trimW * 72;
  const frontH = trimH * 72;
  const frontX = bleedIn * 72 + trimW * 72 + spineIn * 72;
  const frontY = bleedIn * 72;
  const layout = containLayout(dim.width, dim.height, frontW, frontH);
  page.drawImage(img, {
    x: frontX + layout.x,
    y: frontY + layout.y,
    width: layout.width,
    height: layout.height,
  });

  const font = await pdf.embedFont(StandardFonts.HelveticaBold);
  page.drawText(title, {
    x: frontX + 20,
    y: frontY + 20,
    size: 12,
    font,
    color: TEXT_COLOR,
  });
  page.drawText("WonderBerry Publishing", {
    x: bleedIn * 72 + 20,
    y: frontY + frontH - 30,
    size: 10,
    font,
    color: TEXT_COLOR,
  });

  return pdf;
}

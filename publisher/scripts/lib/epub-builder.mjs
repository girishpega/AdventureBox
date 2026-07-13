import JSZip from "jszip";
import { imageToJpegBuffer } from "./bundle-loader.mjs";

export async function createFixedLayoutEpub(bundle, pageSequence, imageResolver) {
  const zip = new JSZip();
  const slug = bundle.slug;
  const title = bundle.story.title;

  zip.file("mimetype", "application/epub+zip", { compression: "STORE" });

  zip.file(
    "META-INF/container.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`
  );

  const manifestItems = [];
  const spineItems = [];
  let itemIndex = 1;

  for (const page of pageSequence) {
    const id = `page${String(itemIndex).padStart(3, "0")}`;
    let imageHref = null;

    if (page.type === "cover" || page.type === "story") {
      const imagePath = imageResolver(page);
      if (imagePath) {
        imageHref = `images/${id}.jpg`;
        const jpeg = await imageToJpegBuffer(imagePath, 1200, 800);
        zip.file(`OEBPS/${imageHref}`, jpeg);
        manifestItems.push(
          `<item id="img-${id}" href="${imageHref}" media-type="image/jpeg"/>`
        );
      }
    }

    const xhtml = buildPageXhtml(page, imageHref, title);
    zip.file(`OEBPS/text/${id}.xhtml`, xhtml);
    manifestItems.push(
      `<item id="${id}" href="text/${id}.xhtml" media-type="application/xhtml+xml"/>`
    );
    spineItems.push(`<itemref idref="${id}"/>`);
    itemIndex++;
  }

  zip.file(
    "OEBPS/styles/style.css",
    `body { margin: 0; padding: 0; background: #FFF8F0; font-family: Helvetica, sans-serif; }
.page { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px; box-sizing: border-box; }
.illustration { max-width: 100%; max-height: 65vh; object-fit: contain; }
.text { text-align: center; font-size: 1.4rem; font-weight: 600; color: #3D2C2E; margin-top: 1.5rem; line-height: 1.4; }
.text-page { padding: 2rem; max-width: 40rem; margin: 0 auto; }
.text-page h1 { font-size: 1.5rem; margin-bottom: 1rem; }
.text-page p { font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap; }`
  );

  manifestItems.push(
    `<item id="css" href="styles/style.css" media-type="text/css"/>`
  );

  zip.file(
    "OEBPS/content.opf",
    `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">wonderberry-${slug}</dc:identifier>
    <dc:title>${escapeXml(title)}</dc:title>
    <dc:language>en-US</dc:language>
    <dc:creator>WonderBerry Publishing</dc:creator>
    <dc:publisher>WonderBerry Publishing</dc:publisher>
    <meta property="dcterms:modified">${new Date().toISOString().slice(0, 19)}Z</meta>
    <meta property="rendition:layout">pre-paginated</meta>
    <meta property="rendition:orientation">landscape</meta>
  </metadata>
  <manifest>
    ${manifestItems.join("\n    ")}
  </manifest>
  <spine>
    ${spineItems.join("\n    ")}
  </spine>
</package>`
  );

  return zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
}

function buildPageXhtml(page, imageHref, bookTitle) {
  if (page.type === "text") {
    const paras = page.content
      .split(/\n\n+/)
      .map((p) => `<p>${escapeXml(p.trim())}</p>`)
      .join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${escapeXml(page.title)}</title><link rel="stylesheet" type="text/css" href="../styles/style.css"/></head>
<body><div class="page text-page"><h1>${escapeXml(page.title)}</h1>${paras}</div></body>
</html>`;
  }

  const img = imageHref
    ? `<img class="illustration" src="../${imageHref}" alt="${escapeXml(page.title)}"/>`
    : "";
  const text = page.text ? `<p class="text">${escapeXml(page.text)}</p>` : "";
  const heading =
    page.type === "cover" ? `<p class="text">${escapeXml(bookTitle)}</p>` : text;

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${escapeXml(page.title)}</title><link rel="stylesheet" type="text/css" href="../styles/style.css"/></head>
<body><div class="page">${img}${page.type === "cover" ? heading : text || heading}</div></body>
</html>`;
}

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function createKindleCoverJpeg(coverPath) {
  return imageToJpegBuffer(coverPath, 1600, 2560);
}

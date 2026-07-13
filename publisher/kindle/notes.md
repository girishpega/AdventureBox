# Kindle Publishing Notes

**Format:** Fixed-layout EPUB 3  
**Cover:** 2560 × 1600 px JPEG, sRGB, 1.6:1 ratio

---

## Why Fixed Layout

Picture books require illustration integrity. Reflowable EPUB would reflow text around images unpredictably. Fixed layout preserves the reader experience: illustration on top, text below.

---

## Interaction Pages

Digital-only tap interactions map to `revealText` in Kindle/print exports.

---

## Font Embedding

Fredoka (Google Fonts) — verify OFL license permits EPUB embedding before upload.

---

## Testing

1. Export EPUB via future `publisher/exports/kindle/` pipeline
2. Open in Kindle Previewer
3. Test on Kindle Paperwhite simulator (6" screen)
4. Verify no crop on any illustration

---

*WonderBerry Publishing · Kindle · v0.8.0*

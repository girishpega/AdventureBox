# Website Export

**Status:** ✅ Live  
**Route:** `/stories/[slug]`

---

## Source

- `stories/{slug}/story.json`
- `stories/{slug}/page*.webp`, `cover.webp`, `sticker.webp`
- Publisher identity via `lib/publishing.ts` (future: copyright/end pages in reader)

## Layout Rules

- Illustration: `object-contain` in 3:2 frame
- Text: below illustration, never over faces
- Interaction: tap button below text (digital-only)
- End screen: sticker reward + endMessage

## No Export Step Required

The website IS the primary export destination. Other formats derive from the same bundle.

---

*WonderBerry Publishing · Export Architecture*

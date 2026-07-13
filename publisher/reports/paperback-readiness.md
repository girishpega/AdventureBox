# Paperback Readiness — Ellie Collection

**Status:** NOT READY (asset resolution + cover pipeline)  
**Target trim:** 8.5 × 8.5"  
**Agent gate:** Illustration Integrity Reviewer (17) + Print Production Director (11)

---

## Page Count Estimate (per story)

| Section | Pages |
|---------|-------|
| Copyright | 1 |
| About WonderBerry | 1 |
| About Ellie | 1 |
| Story pages | 5–10 |
| End page | 1 |
| Collection page | 1 |
| **Total (10-page story)** | **~15 interior** |

Ellie stories with 10 pages + publishing front/back matter ≈ **15 pages** — well within KDP 24-page minimum **only if** we add filler (blank pages, sticker page, activity) OR combine as anthology.

**Blocker:** Single 10-page story = ~15 pages → **below KDP 24-page minimum**.

### Options (Product Owner decision)

1. **Anthology:** "Ellie Bedtime Treasury" — 3 stories per volume
2. **Padding pages:** Sticker collection page, "About this story", blank endpapers
3. **Extended edition:** Add author note, illustration gallery, collection preview pages

---

## File Checklist

| Item | Status | Notes |
|------|--------|-------|
| Interior PDF at 300 DPI | ❌ | Exporter not built |
| Cover wrap PDF | ❌ | Needs portrait cover masters |
| Trim size locked | ⚠️ | Recommend 8.5×8.5" |
| Gutter margin (0.375") | ✅ | Spec documented |
| Bleed (0.125") | ✅ | Spec documented |
| Typography spec | ⚠️ | Fredoka — verify KDP embed |
| ISBN | ❌ | Not assigned |
| Metadata | ⚠️ | Template ready |

---

## Illustration Resolution Gap

| Asset | Current | Required @ 8.5×8.5" page | Gap |
|-------|---------|--------------------------|-----|
| Page art | 1536×1024 px | ~2550×2550 px @ 300 DPI full page | **Upscale or re-export from masters** |
| Cover (webp) | 1536×1024 (cropped from portrait) | 2550×2550+ @ 300 DPI | **Re-convert from raw PNG** |

**Illustration Integrity:** Page interiors use contain layout — acceptable for print with whitespace. Cover webp files were cropped by convert script — **must re-convert from raw PNGs**.

---

## Recommendation

1. Fix cover conversion pipeline (contain, not cover)
2. Build `publisher/exports/paperback/` exporter
3. Resolve 24-page minimum via anthology or padding strategy
4. Order KDP proof before listing

---

*Paperback Readiness Report · v0.8.0 · Awaiting Product Owner review*

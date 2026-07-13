# Amazon KDP Specifications — Official Reference

**Last researched:** July 2026  
**Sources:** [KDP Help — Bleed and Margins](https://kdp.amazon.com/en_US/help/topic/GVBQ3CMEQW3W2VL6), [KDP Cover Calculator](https://kdp.amazon.com/cover-calculator)

Do not guess. Always verify against the live KDP Cover Calculator before final export.

---

## Print (Paperback & Hardcover)

| Requirement | Specification |
|-------------|---------------|
| Interior format | PDF |
| Cover format | PDF or TIFF (single wrap: back + spine + front) |
| Resolution | **300 DPI minimum** (all raster images) |
| Bleed | **0.125"** (3.2 mm) on top, bottom, outside edges |
| Color | CMYK recommended; sRGB accepted |
| Max file size | 650 MB |
| Fonts | Embedded or outlined |
| Transparency | Flatten before export |

### Trim Sizes (Picture Book Candidates)

| Trim | Use case |
|------|----------|
| **8.5 × 8.5"** | Recommended for Ellie — square, premium nursery shelf |
| 8 × 10" | Alternative if vertical layout preferred |
| 8.25 × 8.25" | KDP square option |
| 7 × 10" | Trade picture book |

### Interior Margins (Minimum — KDP Enforced)

| Page count | Inside (gutter) margin |
|------------|---------------------|
| 24–150 | 0.375" |
| 151–300 | 0.5" |
| 301–500 | 0.625" |
| 501–700 | 0.75" |
| 701–828 | 0.875" |

**Outside / top / bottom:** 0.25" minimum without bleed; 0.375" with bleed.

**WonderBerry recommendation:** Use **0.5" safe zone** on all sides for illustration integrity. Place text outside illustration area entirely.

### Cover Wrap

- Dimensions = f(trim size, page count, paper type)
- Use KDP Cover Calculator — never hardcode spine width
- Bleed: 0.125" on all four outer edges of full wrap
- Safe margin: 0.5" from trim; 0.5" from spine (paperback) / 0.625" (hardcover)

### Hardcover-Specific

- Case laminate cover
- Same interior PDF requirements as paperback
- **Page count:** 75–550 pages
- More limited trim size options than paperback
- Minimum inside margin may differ — verify at upload time

---

## Kindle (eBook)

| Requirement | Specification |
|-------------|---------------|
| Cover format | JPEG or TIFF |
| Cover ratio | **1.6:1** (height : width) |
| Recommended pixels | **2560 × 1600** |
| Minimum longest side | 1000 px |
| Color space | sRGB |
| Bleed | **None** — front cover only |
| Max file size | 50 MB |
| DPI metadata | 72 DPI acceptable (screen-only) |

### Interior (EPUB)

- Fixed-layout EPUB recommended for picture books (illustration + text per page)
- Images: high quality, sRGB
- No bleed required
- Text must not overlay illustration faces (WonderBerry standard)

---

## Metadata (All Formats)

| Field | Notes |
|-------|-------|
| Title | Match digital reader exactly |
| Subtitle | Optional — age band or series |
| Author | WonderBerry Publishing (or pen name — PO decision) |
| Description | 150–400 words; no HTML in plain text fields |
| Keywords | 7 keyword slots on KDP |
| Categories | BISAC / Amazon browse categories |
| Age range | 4–6 for Ellie Collection |
| ISBN | Optional for KDP (Amazon assigns free ISBN if none) |

---

## Common Rejection Reasons

1. Wrong bleed dimensions
2. Interior page size ≠ selected trim size
3. Images below 300 DPI
4. Cover spine width miscalculation
5. Critical text in bleed/trim zone
6. Fonts not embedded

---

*WonderBerry Publishing · Amazon Research · v0.8.0*

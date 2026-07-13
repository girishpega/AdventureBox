# Amazon Readiness Report — Ellie Collection

**Version:** 0.8.0  
**Status:** RESEARCH COMPLETE — UPLOAD NOT READY  
**Researched:** July 2026

---

## Executive Summary

WonderBerry has completed Amazon KDP specification research and publishing architecture design. **No format is upload-ready today.** Primary blockers: illustration resolution for 300 DPI print, cover crop pipeline (fix in progress), page count minimums for single-story paperback/hardcover, and EPUB/PDF exporters not yet built.

---

## Format Readiness Matrix

| Format | Research | Architecture | Assets | Exporter | Upload Ready |
|--------|----------|--------------|--------|----------|--------------|
| Website Reader | ✅ | ✅ | ✅ | ✅ | ✅ |
| Printable PDF | ✅ | ✅ | ⚠️ | ❌ | ❌ |
| Paperback | ✅ | ✅ | ❌ | ❌ | ❌ |
| Hardcover | ✅ | ✅ | ❌ | ❌ | ❌ |
| Kindle EPUB | ✅ | ✅ | ⚠️ | ❌ | ❌ |

---

## Official KDP Requirements (Verified)

| Spec | Paperback | Hardcover | Kindle |
|------|-----------|-----------|--------|
| Interior | PDF, 300 DPI | PDF, 300 DPI | EPUB |
| Cover | PDF wrap, 300 DPI | PDF wrap, 300 DPI | JPEG 2560×1600 |
| Bleed | 0.125" | 0.125" | None |
| Min pages | 24 | 75 | N/A |
| Max file | 650 MB | 650 MB | 50 MB (cover) |

**Calculator:** https://kdp.amazon.com/cover-calculator  
**Margins:** https://kdp.amazon.com/en_US/help/topic/GVBQ3CMEQW3W2VL6

---

## Recommended Product Strategy

| SKU | Format | Feasibility |
|-----|--------|-------------|
| Individual story (×9) | Kindle | ✅ Best first Amazon SKU |
| Individual story (×9) | Paperback | ⚠️ Needs 24-page padding or anthology split |
| Ellie Collection | Hardcover anthology | ✅ Meets 75-page minimum |
| Ellie Collection | Paperback anthology | ✅ Meets 24-page minimum |

---

## Critical Actions Before Upload

1. **Fix cover assets** — re-convert from portrait PNG masters (no crop)
2. **Illustration Integrity PASS** — Agent 17 sign-off on all 9 stories
3. **Build Kindle EPUB exporter** — fastest revenue path
4. **Resolve page count** — PO decision on padding vs anthology
5. **Upscale or re-export** page art to 300 DPI at target trim size
6. **Assign ISBNs** or use KDP free ISBN
7. **Order physical proof** before listing

---

## Detailed Reports

- [Paperback Readiness](./paperback-readiness.md)
- [Hardcover Readiness](./hardcover-readiness.md)
- [Kindle Readiness](./kindle-readiness.md)
- [Illustration Integrity](./illustration-integrity.md)

---

*Amazon Readiness Report · WonderBerry Publishing · v0.8.0 · Awaiting Product Owner review*

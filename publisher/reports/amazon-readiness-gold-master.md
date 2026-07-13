# Amazon Readiness — Gold Master Checklist

**Story:** Ellie and the Tiny Lost Duck  
**Trim size:** 8.5 × 8.5"  
**Sources:** [KDP Help](https://kdp.amazon.com/en_US/help/topic/GVBQ3CMEQW3W2VL6), [Cover Calculator](https://kdp.amazon.com/cover-calculator)

---

## Paperback Interior

| Requirement | Spec | Status | Notes |
|-------------|------|--------|-------|
| File format | PDF | ✅ PASS | `paperback-interior.pdf` generated |
| Trim size match | 8.5×8.5" | ✅ PASS | 612pt pages |
| Page count minimum | 24 pages | 🛑 HOLD | 12 pages — need padding or anthology |
| Page count maximum | 828 pages | ✅ PASS | N/A |
| Resolution | 300 DPI minimum | 🛑 HOLD | 1536px ≈ 180 DPI at 8.5" width |
| Inside margin (12 pages) | 0.375" min | ✅ PASS | 0.5" used |
| Outside margin | 0.25" min | ✅ PASS | 0.5" used |
| Bleed | 0.125" if enabled | ✅ PASS | Optional bleed in export |
| Fonts embedded | Required | ⚠️ PASS* | Standard Helvetica embedded (*Fredoka pending) |
| Max file size | 650 MB | ✅ PASS | Well under limit |
| Color space | CMYK recommended | ⚠️ HOLD | sRGB in current export — convert for upload |

---

## Paperback Cover

| Requirement | Spec | Status | Notes |
|-------------|------|--------|-------|
| File format | PDF or TIFF | ✅ PASS | `paperback-cover.pdf` generated |
| Full wrap | Back + spine + front | ✅ PASS | Mock wrap with Calculator spine formula |
| Resolution | 300 DPI | 🛑 HOLD | Same master resolution gap |
| Bleed | 0.125" outer edges | ✅ PASS | Included in wrap |
| Spine width | From Calculator | ✅ PASS | pageCount × 0.002252" (white paper) |
| Safe margin | 0.5" from trim/spine | ✅ PASS | Title in safe zone |
| Barcode zone | Back cover clear | ⚠️ HOLD | Not yet designed |

---

## Hardcover

| Requirement | Spec | Status | Notes |
|-------------|------|--------|-------|
| Interior PDF | Same as paperback | ✅ PASS | Same interior file |
| Page count minimum | 75 pages | 🛑 HOLD | 12 pages — documented limitation |
| Page count maximum | 550 pages | ✅ PASS | N/A |
| Cover mock | Case laminate wrap | ✅ PASS | `hardcover-cover-mock.pdf` (75-page spine mock) |
| Upload ready | — | 🛑 HOLD | Mock only — not uploadable |

---

## Kindle eBook

| Requirement | Spec | Status | Notes |
|-------------|------|--------|-------|
| Interior format | EPUB | ✅ PASS | `kindle.epub` fixed-layout |
| Cover format | JPEG or TIFF | ✅ PASS | `kindle-cover.jpg` |
| Cover ratio | 1.6:1 (H:W) | ✅ PASS | 1600×2560 contain |
| Cover min longest side | 1000 px | ✅ PASS | 2560 px |
| Recommended cover | 2560×1600 | ✅ PASS | Generated |
| Color space | sRGB | ✅ PASS | JPEG sRGB |
| Bleed | None | ✅ PASS | Front cover only |
| Max cover size | 50 MB | ✅ PASS | Well under limit |
| Fixed layout | Recommended for picture books | ✅ PASS | pre-paginated EPUB |
| Kindle Previewer test | Manual | ⚠️ HOLD | PO must verify in app |

---

## Metadata (KDP Dashboard)

| Field | Status | Notes |
|-------|--------|-------|
| Title | ✅ PASS | Ellie and the Tiny Lost Duck |
| Publisher | ✅ PASS | WonderBerry Publishing |
| Contact | ✅ PASS | wonderberrypublishing@gmail.com |
| Description | ⚠️ HOLD | Template only — needs marketing copy |
| Keywords (7) | ⚠️ HOLD | Defined in standards — not uploaded |
| Categories | ⚠️ HOLD | BISAC codes in metadata template |
| Age range | ✅ PASS | 4–6 |
| ISBN | ⚠️ HOLD | Pending assignment |

---

## Overall Amazon Readiness

| Format | Upload Ready |
|--------|--------------|
| Kindle | ⚠️ NEAR — EPUB + cover generated; Previewer test pending |
| Paperback | 🛑 NO — page count + DPI + CMYK |
| Hardcover | 🛑 NO — page count minimum |

**Pipeline proven. Amazon upload requires PO decisions on padding strategy and print resolution.**

---

*Amazon Readiness · Gold Master · v0.8.1 · Awaiting Product Owner review*

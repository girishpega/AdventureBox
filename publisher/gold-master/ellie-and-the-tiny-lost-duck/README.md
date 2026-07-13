# WonderBerry Gold Master

**Story:** Ellie and the Tiny Lost Duck  
**Slug:** `ellie-and-the-tiny-lost-duck`  
**Status:** Gold Master for all publishing validation

Every exporter, workflow, and quality gate must pass against this story before scaling to the full Ellie Collection.

## Master Assets

Production PNG masters live in `masters/` (recovered from `studio/assets/`).

| File | Dimensions | Notes |
|------|------------|-------|
| `cover.png` | 1536×1024 | Native landscape cover (not cropped) |
| `page-01.png` … `page-05.png` | 1536×1024 | Story pages |

## Validation Outputs

Exports written to `publisher/exports/output/ellie-and-the-tiny-lost-duck/`:

- `printable.pdf` — home/print PDF
- `paperback-interior.pdf` — KDP interior (8.5×8.5" trim)
- `paperback-cover.pdf` — KDP cover wrap mock
- `hardcover-cover-mock.pdf` — hardcover wrap mock (documented limitation)
- `kindle.epub` — fixed-layout EPUB
- `manifest.json` — page order and text for validation

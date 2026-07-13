# WonderBerry Publishing Standards v1.0

**Status:** FROZEN — permanent publishing standard  
**Effective:** v0.8.1  
**Gold Master:** Ellie and the Tiny Lost Duck

This document defines how every WonderBerry story is published across all destinations. No exporter may violate these standards.

---

## 1. Illustration Rules

| Rule | Standard |
|------|----------|
| Fit mode | **object-contain** only — never `cover`, never stretch |
| Crop | **NEVER** — no ears, feet, trunks, tails, or faces cropped |
| Zoom | **NEVER** — no Ken Burns, no zoom-into-crop |
| Distortion | **NEVER** — aspect ratio always preserved |
| Quality | Never downsample below source; never upsample to fake 300 DPI |
| Layout adapts | Increase whitespace, margins, padding — not artwork |
| Text placement | **Below** illustration — never over faces |
| Buttons | Digital only — never in print/kindle exports |

**Agent gate:** Illustration Integrity Reviewer (17)

---

## 2. Typography

| Context | Standard |
|---------|----------|
| Display font | Fredoka (web) / Helvetica Bold (PDF/EPUB fallback until Fredoka embed verified) |
| Story text size | 16–24pt print; 1.4rem EPUB; 2xl–4xl web reader |
| Publisher pages | 10–18pt print; proportional web |
| Line height | Generous — 1.4–1.6 |
| Color | `#3D2C2E` (text primary) |
| Hyphenation | Avoid orphans — no single word alone on last line |

---

## 3. Margins & Safe Zones

| Format | Margin |
|--------|--------|
| Web reader | px-4–6 padding, illustration in 3:2 frame |
| Printable PDF | 0.5" all sides |
| KDP interior minimum | 0.375" gutter (24–150 pages); 0.25" outside |
| WonderBerry safe zone | **0.5"** all sides for print |
| KDP cover safe | 0.5" from trim; 0.5" from spine (paperback) |

---

## 4. Whitespace

When illustration aspect ratio ≠ page aspect ratio:

1. Add whitespace (background `#FFF8F0`)
2. Center illustration
3. Never crop to fill

Whitespace is preferred over crop. Always.

---

## 5. Bleed

| Format | Bleed |
|--------|-------|
| KDP print interior | 0.125" optional — only if background extends to edge |
| KDP cover wrap | 0.125" all outer edges |
| WonderBerry interior | No bleed on illustration pages (contain + margins) |
| Kindle | None |

---

## 6. Cover Design

| Property | Standard |
|----------|----------|
| Master | Highest-resolution PNG available — never cropped from portrait to landscape |
| Title | Lower third safe zone — overlay at export, not baked into art |
| Brand | WonderBerry Publishing mark ≤ 8% cover height |
| Thumbnail test | Character recognizable at 120px width |
| Kindle cover | 2560×1600 px JPEG, sRGB, 1.6:1, no bleed |

---

## 7. Publisher Pages (Inherited)

Every export includes, in order:

1. Cover
2. Copyright
3. About WonderBerry
4. About Character (Ellie)
5. Story pages
6. End page (story `endMessage`)
7. Collection page
8. Version page

Source: `publisher/templates/` + `publisher/identity/` via `lib/publishing.ts`

---

## 8. Copyright Page

- Copyright © {year} WonderBerry Publishing
- Contact: wonderberrypublishing@gmail.com
- All rights reserved
- ISBN placeholder until assigned

Template: `publisher/templates/copyright.md`

---

## 9. Metadata

| Field | Source |
|-------|--------|
| Title | story.json `title` |
| Publisher | WonderBerry Publishing |
| Contact | wonderberrypublishing@gmail.com |
| Age | story.json `age` |
| Language | en-US |
| Keywords | picture book, bedtime, Ellie, elephant, WonderBerry |

Template: `publisher/templates/metadata.template.json`

---

## 10. Amazon Standards (KDP)

| Spec | Value |
|------|-------|
| Interior | PDF, 300 DPI minimum |
| Cover wrap | PDF, KDP Cover Calculator dimensions |
| Bleed | 0.125" |
| Trim (recommended) | 8.5 × 8.5" |
| Paperback min pages | 24 |
| Hardcover min pages | 75 |
| Kindle cover | 2560×1600 JPEG |
| Kindle interior | Fixed-layout EPUB |

Reference: `publisher/amazon/kdp-specs.md`

---

## 11. Kindle Standards

- Fixed-layout EPUB 3
- `object-fit: contain` on all illustrations
- Interaction pages use `revealText` only
- No tap prompts in export
- Cover: front only, 2560×1600, sRGB

Reference: `publisher/kindle/notes.md`

---

## 12. PDF Standards

| Type | Spec |
|------|------|
| Printable | 8.5×8.5", no bleed, home printing |
| Paperback interior | 8.5×8.5" + 0.125" bleed optional |
| Paperback cover | Full wrap from Calculator |
| Hardcover mock | Documented limitation if page count < 75 |

Illustration: contain in defined box; text below art.

---

## 13. Export Validation

Every export run must pass Agent 18 (Export Validation Reviewer):

- Same story text across website, PDF, EPUB
- Same page order for story pages
- Same artwork references
- Publisher pages present in print/kindle
- No manual editing between formats

---

## 14. Gold Master Protocol

Before scaling to 9 stories:

1. All gates PASS on `ellie-and-the-tiny-lost-duck`
2. Export pipeline proven end-to-end
3. Product Owner sign-off

Gold master assets: `publisher/gold-master/ellie-and-the-tiny-lost-duck/masters/`

---

*WonderBerry Publishing Standards v1.0 · FROZEN · Awaiting Product Owner review*

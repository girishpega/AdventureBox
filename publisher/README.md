# WonderBerry Publishing Architecture

**Version:** 0.8.0  
**Mission:** One Story Bundle → Multiple Destinations

---

## Core Principle

```
Story Bundle (source of truth)
        │
        ├── Website Reader      ✅ Live
        ├── Printable PDF       🔲 Phase 6
        ├── Amazon Paperback    🔲 Phase 6
        ├── Amazon Hardcover    🔲 Phase 6
        ├── Kindle EPUB         🔲 Phase 6
        └── YouTube Story       🔲 Future
```

No duplicate content. Publisher identity pages inherit automatically. Illustrations never adapt to software — software adapts to illustrations.

---

## Directory Structure

```
publisher/
├── identity/          # WonderBerry Publishing brand, about pages
├── templates/         # Copyright, end page, metadata, version
├── amazon/            # KDP specs, trim sizes, format guides
├── kindle/            # EPUB-specific notes
├── exports/           # Exporter design per destination
├── metadata/          # Collection-level metadata
├── copyright/         # Legal notices
├── assets/            # Publisher logos, marks (future)
├── reports/           # Readiness reports per format
└── scripts/           # Integrity review, future exporters
```

```
stories/{slug}/        # Story Bundle (unchanged)
├── story.json
├── cover.webp
├── page01.webp … pageNN.webp
└── sticker.webp
```

---

## Story Bundle + Publisher Inheritance

Every story bundle inherits publisher pages via `lib/publishing.ts`:

| Page | Source |
|------|--------|
| Copyright | `publisher/templates/copyright.md` |
| About WonderBerry | `publisher/identity/about-wonderberry.md` |
| About Ellie | `publisher/identity/about-ellie.md` |
| Collection | `publisher/identity/collection-ellie.md` |
| End page | `publisher/templates/end-page.md` + story `endMessage` |
| Version | `publisher/templates/version.md` |
| Metadata | `publisher/templates/metadata.template.json` + story fields |

---

## Illustration Integrity Layer

**Agent 17 — Illustration Integrity Reviewer** gates all exports.

| Surface | Fit mode | Status |
|---------|----------|--------|
| Story Reader | `object-contain` | ✅ |
| Library cards | `object-contain` + whitespace | ✅ v0.8.0 |
| Printable PDF | contain + margins | 🔲 |
| Kindle EPUB | contain + fixed layout | 🔲 |
| Cover (digital) | portrait master, no crop | ⚠️ Fix pipeline |

---

## Export Pipeline (Designed, Not Built)

### 1. Website (`exports/website.md`)
Already live via Next.js Story Reader. Source: story.json + webp assets.

### 2. Printable PDF (`exports/printable-pdf.md`)
Parent download — same layout as reader, publishing pages prepended/appended.

### 3. Amazon Paperback (`exports/amazon-paperback.md`)
300 DPI PDF interior + wrap cover from KDP Calculator dimensions.

### 4. Amazon Hardcover (`exports/amazon-hardcover.md`)
Anthology-first (75+ pages). Case laminate wrap.

### 5. Kindle EPUB (`exports/kindle-epub.md`)
Fixed-layout, revealText for interaction pages, 2560×1600 cover.

### 6. YouTube (`exports/youtube.md`)
Future: page art + narration timeline from same bundle.

---

## Agent Integration

```
Creative Director PASS (digital)
        ↓
Illustration Integrity Reviewer (17) ──HOLD──→ Fix assets
        ↓ PASS
Print Production Director (11) ── parallel track
        ↓
Product Owner (print/kindle release)
```

Agent 11 activates with v0.8.0 publishing mission. Agent 17 is **ACTIVE** immediately.

---

## Quality Bar

Every decision answers: *"Will this reduce the work required to publish the next 100 books?"*

Reusable templates, inherited publisher pages, one bundle format, one integrity standard.

---

## Out of Scope (v0.8.0)

- Story #10, Pip, new characters
- Payments, login, database
- Actual PDF/EPUB binary generation (architecture only)

---

*WonderBerry Publishing Architecture · v0.8.0 · Awaiting Product Owner review*

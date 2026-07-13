# WonderBerry v0.8.0 — Publishing Edition
## Product Owner Review Dashboard

**Status:** Awaiting Product Owner Review  
**Do NOT commit until approved.**

---

## Mission Shift

WonderBerry is now **WonderBerry Publishing** — a professional publishing platform.

- Ellie Collection (9 stories): **COMPLETE — content frozen**
- No Story #10, no Pip, no new characters
- One Story Bundle → Website, PDF, Paperback, Hardcover, Kindle, YouTube (architecture)

---

## Build & Lint

| Check | Status |
|-------|--------|
| `npm run lint` | ✅ PASS |
| `npm run build` | ✅ PASS (9 story routes + static pages) |
| TypeScript | ✅ PASS |
| Illustration Integrity (automated) | ⚠️ 7 PASS / 2 HOLD |

---

## Deliverables Checklist

| Deliverable | Location | Status |
|-------------|----------|--------|
| Publishing Architecture | `publisher/README.md` | ✅ |
| Amazon Readiness Report | `publisher/reports/amazon-readiness.md` | ✅ |
| Paperback Readiness | `publisher/reports/paperback-readiness.md` | ✅ |
| Hardcover Readiness | `publisher/reports/hardcover-readiness.md` | ✅ |
| Kindle Readiness | `publisher/reports/kindle-readiness.md` | ✅ |
| Illustration Integrity Report | `publisher/reports/illustration-integrity.md` | ✅ |
| Publishing Agent Documentation | `publisher/PUBLISHING_AGENTS.md` + `agents/17_*.md` | ✅ |
| Story Bundle Enhancements | `lib/publishing.ts`, `types/publishing.ts` | ✅ |
| Publisher Identity | `publisher/identity/` | ✅ |
| Product Owner Review Dashboard | This file | ✅ |

---

## Publisher Identity

| Field | Value |
|-------|-------|
| Publisher | WonderBerry Publishing |
| Contact | wonderberrypublishing@gmail.com |
| Collection | The Ellie Collection (9 stories, complete) |
| Reusable pages | Copyright, About WonderBerry, About Ellie, Collection, End, Version |

Every story inherits publisher pages via `lib/publishing.ts` → `toPublishableStory()`.

---

## Illustration Integrity Summary

| Surface | Before | After v0.8.0 |
|---------|--------|--------------|
| Story Reader | ✅ contain | ✅ contain |
| Library cards | ❌ object-cover (cropped) | ✅ object-contain + whitespace |
| Cover webp (stories 5–9) | ❌ cropped to landscape | ✅ re-converted portrait 1024×1536 |
| Convert script | ❌ fit: cover | ✅ fit: contain |

### HOLD (2 stories)

| Story | Issue |
|-------|-------|
| Ellie and the Tiny Lost Duck | No raw cover.png in studio — cover may be cropped |
| Ellie and the Bubble That Wouldn't Pop | No raw cover.png in studio — cover may be cropped |

**Action:** Recover portrait cover masters from archive, run `node publisher/scripts/reconvert-covers.mjs`

---

## Amazon Readiness (Executive)

| Format | Upload Ready | Blocker |
|--------|--------------|---------|
| Website Reader | ✅ Yes | — |
| Kindle EPUB | ❌ No | Exporter not built; 2 cover HOLDs |
| Paperback | ❌ No | 24-page minimum; 300 DPI gap; exporter not built |
| Hardcover | ❌ No | 75-page minimum (anthology only); exporter not built |
| Printable PDF | ❌ No | Exporter not built |

**Recommended first Amazon SKU:** Individual story Kindle editions (after cover HOLDs resolved)

---

## New Agent

**Agent 17 — Illustration Integrity Reviewer** (`agents/17_illustration_integrity_reviewer.md`)  
**Status:** ACTIVE

**Agent 11 — Print Production Director**  
**Status:** ACTIVATED (v0.8.0)

---

## Files Changed

### Publishing Workspace (new)
- `publisher/` — identity, templates, amazon, kindle, exports, metadata, copyright, assets, reports, scripts

### Code
- `lib/publishing.ts` — publisher inheritance, `toPublishableStory()`, print text helper
- `types/publishing.ts` — publishing types
- `components/story/StoryCard.tsx` — contain mode for covers (illustration integrity)
- `components/layout/Footer.tsx` — WonderBerry Publishing + contact email

### Agents
- `agents/17_illustration_integrity_reviewer.md` — NEW, ACTIVE
- `agents/11_print_production_director.md` — activated

### Assets
- `stories/ellie-and-the-rainbow-kite/cover.webp` — re-converted (portrait)
- `stories/ellie-and-the-sleepy-little-cloud/cover.webp` — re-converted
- `stories/ellie-and-the-missing-birthday-balloon/cover.webp` — re-converted
- `stories/ellie-and-the-tiny-unicorn/cover.webp` — re-converted
- `stories/ellie-and-the-brave-little-raindrop/cover.webp` — re-converted

### Studio
- `studio/sprint-v0.7.0/convert-sprint-assets.mjs` — contain mode (no crop)

---

## Release Recommendation

**HOLD commit** — architecture and integrity fixes are ready for PO review.

| Decision | Recommendation |
|----------|----------------|
| Commit v0.8.0 publishing architecture? | ✅ Yes — after PO approval |
| Ship website changes (StoryCard, Footer)? | ✅ Yes — improves illustration integrity |
| Upload to Amazon? | ❌ Not yet — build exporters first |
| Recover duck/bubble cover masters? | ⚠️ Required before print/kindle |
| Build Kindle exporter next sprint? | ✅ Recommended — fastest Amazon path |

---

## Quick Commands

```bash
# Illustration integrity review
node publisher/scripts/review-illustration-integrity.mjs

# Re-convert covers from raw PNGs (no crop)
node publisher/scripts/reconvert-covers.mjs

# Build verification
npm run lint && npm run build
```

---

## Emotional Test

Open the story library. Cover thumbnails should show **full artwork** with warm whitespace — never cropped ears or feet.

---

*WonderBerry Publishing v0.8.0 · Awaiting Product Owner Review · Do NOT commit*

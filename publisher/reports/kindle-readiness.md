# Kindle Readiness — Ellie Collection

**Status:** PARTIAL — website reader ready; EPUB exporter not built  
**Cover target:** 2560 × 1600 px (1.6:1), JPEG, sRGB

---

## Current State

| Component | Status | Notes |
|-----------|--------|-------|
| Website reader | ✅ | object-contain, text below art |
| Kindle cover JPEG | ❌ | Must derive from portrait cover master |
| Fixed-layout EPUB | ❌ | Exporter not built |
| Metadata template | ✅ | `publisher/templates/metadata.template.json` |
| Age range | ✅ | 4–6 |
| Interaction pages | ⚠️ | Print uses revealText only; Kindle needs static fallback |

---

## Kindle Cover Spec

| Field | Value |
|-------|-------|
| Dimensions | 2560 × 1600 px (recommended) |
| Ratio | 1.6:1 height:width |
| Format | JPEG or TIFF |
| Color | sRGB |
| Bleed | None |
| Max size | 50 MB |

**Action:** Export cover from portrait master (1024×1536 raw PNG), add title typography in safe zone, scale to 2560×1600.

---

## Fixed-Layout EPUB Requirements

1. One HTML page per story page
2. Illustration: full width, object-contain semantics
3. Text: below illustration (match reader layout)
4. Interaction pages: show `revealText` as final text (no tap)
5. Include publishing pages: copyright, about, end
6. Font embedding: Fredoka (verify license for EPUB)

---

## Interaction → Kindle Mapping

```json
{
  "text": "The wind whooshed past.",
  "interaction": {
    "prompt": "Tap to feel the wind!",
    "buttonLabel": "Whoosh! 🌬️",
    "revealText": "Up, up, up!"
  }
}
```

**Kindle page text:** "Up, up, up!" (use revealText)  
**Optional footnote:** Omit tap prompt in print/kindle — digital-only UX

---

## Readiness Checklist

| Item | Status |
|------|--------|
| Cover 2560×1600 | ❌ |
| EPUB per story | ❌ |
| KDP metadata filled | ⚠️ Template only |
| Fixed-layout validated | ❌ |
| Kindle Previewer test | ❌ |

---

## Recommendation

Kindle is the **fastest path to Amazon** after cover fix:

1. Build `publisher/exports/kindle/` EPUB generator
2. Generate cover from uncropped portrait master
3. Test in Kindle Previewer
4. Single-story Kindle editions viable (no 24-page minimum)

---

*Kindle Readiness Report · v0.8.0 · Awaiting Product Owner review*

# Amazon Paperback Export

**Status:** 🔲 Designed  
**Spec reference:** `publisher/amazon/kdp-specs.md`

---

## Input

`PublishableStory` + 300 DPI illustration masters

## Output

```
publisher/exports/output/{slug}/paperback-interior.pdf
publisher/exports/output/{slug}/paperback-cover.pdf
publisher/exports/output/{slug}/KDP-metadata.json
```

## Interior Layout (8.5 × 8.5" trim)

```
┌─────────────────────────┐
│      [margin 0.5"]      │
│   ┌─────────────────┐   │
│   │  Illustration   │   │  object-contain
│   │  (3:2 centered) │   │  whitespace OK
│   └─────────────────┘   │
│                         │
│      Story text         │  Fredoka 20pt
│                         │
└─────────────────────────┘
```

## Cover Wrap

- Use KDP Cover Calculator with final page count
- Portrait front art from raw PNG master (1024×1536+)
- Spine: title + WonderBerry mark
- Back: logline, age, barcode zone clear

## Pre-Upload Checklist

- [ ] Illustration Integrity PASS (Agent 17)
- [ ] 300 DPI verified
- [ ] Page count ≥ 24 (or anthology)
- [ ] Fonts embedded
- [ ] Bleed correct if enabled

---

*WonderBerry Publishing · Export Architecture*

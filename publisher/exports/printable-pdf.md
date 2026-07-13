# Printable PDF Export

**Status:** 🔲 Designed — exporter not implemented  
**Priority:** High (parent gift use case)

---

## Input

```
StoryBundle + PublishableStory (lib/publishing.ts)
```

## Output

```
publisher/exports/output/{slug}/printable.pdf
```

## Page Order

1. Cover (portrait, uncropped)
2. Copyright
3. About WonderBerry
4. About Ellie
5. Story pages 1–N (illustration top, text bottom)
6. End page (endMessage)
7. Collection page
8. Version page

## Layout Spec

| Element | Rule |
|---------|------|
| Trim | Letter (8.5×11) for home printing OR 8.5×8.5 for print-shop |
| Illustration | Scale to fit width, preserve aspect ratio, center |
| Margins | 0.5" minimum all sides |
| Text | Fredoka, 18–24pt, below art |
| Interaction | Use revealText only |
| Bleed | Optional for professional print; none for home PDF |

## Technology Options

- `@react-pdf/renderer` — React components → PDF
- `puppeteer` — render HTML page layout → PDF
- `sharp` + PDF library — image placement with precise DPI

**Recommendation:** Puppeteer HTML template matching reader CSS — one layout, two outputs.

---

*WonderBerry Publishing · Export Architecture*

# Kindle EPUB Export

**Status:** 🔲 Designed  
**Format:** Fixed-layout EPUB 3

---

## Input

`PublishableStory` + portrait cover master

## Output

```
publisher/exports/output/{slug}/kindle.epub
publisher/exports/output/{slug}/kindle-cover.jpg  (2560×1600)
```

## Page Template (XHTML per page)

```html
<div class="page">
  <img src="page01.webp" class="illustration" /> <!-- object-fit: contain -->
  <p class="text">{{ text or revealText }}</p>
</div>
```

## CSS Rules

```css
.illustration {
  max-width: 100%;
  height: auto;
  object-fit: contain; /* NEVER cover */
}
.text {
  font-family: Fredoka, sans-serif;
  text-align: center;
  margin-top: 1em;
}
```

## Cover Generation

1. Start from portrait PNG master (uncropped)
2. Composite title typography in lower third safe zone
3. Export JPEG 2560×1600 sRGB

## Validation

- Kindle Previewer (desktop)
- Fixed-layout reflow disabled
- All images embedded

---

*WonderBerry Publishing · Export Architecture*

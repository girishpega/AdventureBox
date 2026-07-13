# YouTube Story Export (Future)

**Status:** 🔲 Planned  
**Activation:** When Narration Director (Agent 12) activates

---

## Concept

One Story Bundle produces a timed slideshow video:

| Track | Source |
|-------|--------|
| Visuals | page*.webp sequenced |
| Narration | TTS or recorded audio per page text |
| Music | Optional ambient bed |
| End card | WonderBerry Publishing logo + contact |

## Timeline Format (proposed)

```json
{
  "slug": "ellie-and-the-rainbow-kite",
  "durationSeconds": 180,
  "scenes": [
    { "page": 1, "startMs": 0, "durationMs": 12000, "text": "..." }
  ]
}
```

## Illustration Rules

Same as all exports: contain scaling, no crop, no Ken Burns zoom into faces.

---

*WonderBerry Publishing · Export Architecture · Future*

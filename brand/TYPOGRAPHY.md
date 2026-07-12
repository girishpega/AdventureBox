# AdventureBox · Typography System

Typography that whispers to children and reassures parents.

---

## Brand Philosophy

AdventureBox type should feel **handed down, not downloaded** — like the font on the spine of a book that's been read a hundred times.

**Three rules:**
1. **Rounded over sharp** — no serifs, no cold geometric sans
2. **Large over small** — if a 4-year-old can't see it, it doesn't exist
3. **Quiet over loud** — typography supports the illustration, never fights it

---

## Primary Typeface — Fredoka

**Role:** Display, story text, headlines, buttons, book titles  
**Source:** Google Fonts (already loaded in AdventureBox)  
**Why Fredoka:** Rounded terminals feel friendly without being infantile. Geometric enough for UI, warm enough for bedtime. Distinctive — not Inter, not Roboto, not system default.

### Fredoka Weights Used

| Weight | Value | Usage |
|--------|-------|-------|
| Medium | 500 | Story titles (small caps), metadata labels |
| Semibold | 600 | Story text, card titles, navigation |
| Bold | 700 | Headlines, CTA buttons, book cover titles |
| Regular | 400 | Rarely used — only long parent-facing copy |

---

## Secondary Typeface — Nunito

**Role:** Body copy, metadata, page indicators, parent-facing UI  
**Source:** Google Fonts (already loaded as `--font-nunito`)  
**Why Nunito:** Soft humanist sans. Pairs perfectly with Fredoka. Readable at small sizes for "Ages 4–6 · 3 min read" without feeling clinical.

### Nunito Weights Used

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Descriptions, footer, secondary copy |
| Semibold | 600 | Badges, page indicators, labels |
| Bold | 700 | Emphasis in parent-facing content only |

---

## Type Scale

### Story Reader (immersive — child-facing)

| Element | Font | Size (mobile → desktop) | Weight | Line height | Color |
|---------|------|-------------------------|--------|-------------|-------|
| Story text | Fredoka | 28px → 36px → 48px | 600 | 1.35 | `#FFF9F0` |
| Story title (page 1) | Fredoka | 12px → 14px | 500 | 1.2 | `white/40%` |
| Page indicator | Nunito | 12px | 600 | 1.0 | `white/40%` |
| CTA button | Fredoka | 18px → 20px | 700 | 1.0 | `#2D1B00` on gold |
| End screen headline | Fredoka | 40px → 52px | 700 | 1.1 | `#FFF9F0` |
| End screen subline | Fredoka | 24px → 32px | 600 | 1.2 | Character accent |

### Story Library (discovery — parent + child)

| Element | Font | Size | Weight | Line height | Color |
|---------|------|------|--------|-------------|-------|
| Page headline | Fredoka | 24px → 32px | 700 | 1.2 | `#2D3436` |
| Section label | Nunito | 12px → 14px | 700 | 1.0 | `#6C5CE7` |
| Card title | Fredoka | 18px → 20px | 700 | 1.25 | `#2D3436` |
| Card description | Nunito | 14px → 15px | 400 | 1.45 | `#636E72` |
| Card metadata | Nunito | 12px → 13px | 600 | 1.0 | `#B2BEC3` |
| Card CTA | Fredoka | 14px → 16px | 700 | 1.0 | `#FFFFFF` |

### Book Covers (print + digital)

| Element | Font | Size (relative) | Weight | Treatment |
|---------|------|-----------------|--------|-----------|
| Book title | Fredoka | 8–10% of cover height | 700 | Cream or gold, subtle shadow |
| Subtitle | Nunito | 3% of cover height | 600 | Below title, tracked |
| Brand mark | Fredoka | 2.5% of cover height | 600 | Bottom center |

---

## Story Text Rules

These are non-negotiable for every AdventureBox story:

| Rule | Specification |
|------|---------------|
| **Maximum lines** | 2 per page |
| **Maximum words** | 12 per page |
| **Minimum size** | 28px on mobile |
| **Alignment** | Center only |
| **Position** | Below illustration, never overlaid |
| **Whitespace** | Minimum 24px above and below text block |
| **Contrast** | `#FFF9F0` on dark bg, `#2D3436` on light bg |

---

## Letter-Spacing

| Context | Tracking |
|---------|----------|
| Story text | `-0.01em` (slightly tight — feels read aloud) |
| Uppercase labels | `+0.12em` to `+0.15em` |
| Book cover titles | `-0.02em` |
| Body / descriptions | `0` (default) |

---

## Typography Pairing Examples

### Story page (dark background)
```
                    ← Fredoka 500, 12px, tracked, white/40%
        ELLIE AND THE TINY LOST DUCK

        ┌─────────────────────────┐
        │     [ILLUSTRATION]      │
        └─────────────────────────┘

              Peep!               ← Fredoka 600, 36px, #FFF9F0
     The duck was in her trunk!

            Page 4 of 5           ← Nunito 600, 12px, white/40%

          [    Next →    ]        ← Fredoka 700, 20px, #2D1B00 on gold
```

### Library card (light background)
```
        ⭐                          ← emoji, not type
   Pip and the Sleepy Star Parade  ← Fredoka 700, 20px, #2D3436
   A gentle bedtime adventure...   ← Nunito 400, 14px, #636E72
   Ages 4–6 · 3 min read           ← Nunito 600, 12px, #B2BEC3
        [ Read Story ✨ ]           ← Fredoka 700, 16px, white on purple
```

---

## Cover Title Treatment

Book cover titles use **Fredoka Bold** with a subtle depth effect:

- Primary text: `#FFF9F0` or `#FDCB6E` (depending on cover darkness)
- Shadow: 2px offset, 40% opacity, same hue as background
- Optional: very subtle gradient on title text (gold → cream)
- Never outline/stroke text — shadow only

**Line breaks:** Break on natural phrase boundaries, not arbitrary width.

```
PIP AND THE          ← line 1
SLEEPY STAR PARADE   ← line 2

ELLIE AND THE        ← line 1
TINY LOST DUCK       ← line 2
```

---

## Typography Do-Nots

- ❌ Serif fonts (Georgia, Times) — wrong era, wrong warmth
- ❌ System fonts (-apple-system, Arial) — generic, not branded
- ❌ ALL CAPS story text — feels like shouting at children
- ❌ Italic story text — hard to read for early readers
- ❌ Text over illustrations — breaks the picture book contract
- ❌ More than 2 font families anywhere in the product
- ❌ Font size below 12px for anything child-adjacent
- ❌ Comic Sans (obviously)

---

## Future Considerations

| Need | Recommendation |
|------|----------------|
| **Read-aloud mode** | Fredoka at 32px+, highlight word-by-word in `#FDCB6E` |
| **Dyslexia-friendly option** | Nunito at 18px+, increased line-height 1.6, letter-spacing +0.05em |
| **Localized stories** | Fredoka supports Latin extended; test Hindi/regional separately |
| **Print books** | Fredoka licensed under OFL — print-ready |

---

*AdventureBox Typography System v1.0*

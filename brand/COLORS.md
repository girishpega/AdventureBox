# AdventureBox · Color System

A color system built for wonder — warm enough for bedtime, bright enough for joy.

---

## Brand Philosophy

AdventureBox colors should feel like **opening a treasure box at golden hour** — not like a SaaS dashboard, not like a candy store explosion.

**Three rules:**
1. Warm over cold (except intentional night scenes)
2. Soft over sharp (no pure `#FF0000` or `#0000FF`)
3. Purpose over decoration (every color earns its place)

---

## Core Brand Colors

### Primary — Adventure Purple
The box. The brand. The magic container.

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-primary` | `#6C5CE7` | Buttons, links, brand mark, UI accents |
| `brand-primary-dark` | `#5A4BD6` | Hover states, pressed buttons |
| `brand-primary-light` | `#A29BFE` | Backgrounds, soft highlights, Nova's world |

### Secondary — Story Pink
Warmth, heart, emotional beats.

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-secondary` | `#FD79A8` | Celebrations, friendship moments, sunset skies |
| `brand-secondary-light` | `#FFF0F6` | Soft backgrounds, card tints |

### Accent — Treasure Gold
Joy, reward, the "again!" moment.

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-accent` | `#FDCB6E` | Next buttons, stickers, Pip's glow, starlight |
| `brand-accent-light` | `#FFEAA7` | Highlights, duckling yellow, warm glows |
| `brand-accent-dark` | `#D4A017` | Text on gold buttons |

---

## Extended Palette

### Sky & Wonder

| Token | Hex | Usage |
|-------|-----|-------|
| `sky-day` | `#74B9FF` | Daytime skies, water reflections |
| `sky-dusk` | `#A29BFE` | Dusk, Nova stories, transition moments |
| `sky-night` | `#1A1040` | Night stories, Pip's world, reader backgrounds |
| `sky-night-deep` | `#0A0620` | Deep night, full-bleed story reader |

### Nature & Life

| Token | Hex | Usage |
|-------|-----|-------|
| `meadow-green` | `#55EFC4` | Grass, Ellie stories, life, growth |
| `meadow-deep` | `#00B894` | Shadows, bushes, forest floor |
| `river-teal` | `#00CEC9` | Finn stories, water, play |
| `earth-warm` | `#6D4C41` | Sage stories, bark, cozy interiors |
| `earth-light` | `#DFE6E9` | Ellie's highlights, soft fur/feathers |

### Surface & Text (UI)

| Token | Hex | Usage |
|-------|-----|-------|
| `surface-cream` | `#FFF9F0` | App background, library page, warmth |
| `surface-white` | `#FFFFFF` | Cards, stickers, clean surfaces |
| `surface-lavender` | `#F3F0FF` | Subtle tinted backgrounds |
| `text-primary` | `#2D3436` | Headlines, story text on light bg |
| `text-secondary` | `#636E72` | Descriptions, metadata |
| `text-muted` | `#B2BEC3` | Page indicators, hints |
| `text-on-dark` | `#FFF9F0` | Story text on night backgrounds |

---

## Character Color Assignments

Each character owns a color world — used on covers, stickers, and story UI accents.

| Character | Primary | Accent | Background mood |
|-----------|---------|--------|-----------------|
| **Pip** ⭐ | `#FDCB6E` Gold | `#A29BFE` Violet | `#0A0620` Deep night |
| **Ellie** 🐘 | `#B2BEC3` Gray | `#55EFC4` Meadow | `#E8FFF8` Soft mint |
| **Finn** 🦦 | `#00CEC9` Teal | `#FDCB6E` Gold | `#E0F7FA` Light aqua |
| **Nova** 🦊 | `#E17055` Rust | `#A29BFE` Violet | `#F3F0FF` Lavender |
| **Sage** 🦉 | `#6D4C41` Bark | `#FDCB6E` Amber | `#FFF9F0` Warm cream |

When a story opens, the reader UI tints to that character's world (already implemented for Pip and Ellie).

---

## Story Mood Palettes

Each story uses 5–6 colors maximum in illustrations:

### Bedtime / Wonder (Pip)
`#0A0620` · `#1A1040` · `#6C5CE7` · `#A29BFE` · `#FDCB6E` · `#FFF9F0`

### Friendship / Heart (Ellie)
`#E8FFF8` · `#55EFC4` · `#00B894` · `#B2BEC3` · `#FFEAA7` · `#FD79A8`

### Play / Joy (Finn)
`#E0F7FA` · `#00CEC9` · `#55EFC4` · `#8D6E63` · `#FDCB6E` · `#74B9FF`

### Discovery / Magic (Nova)
`#F3F0FF` · `#A29BFE` · `#6C5CE7` · `#E17055` · `#FDCB6E` · `#1A1040`

### Cozy / Story (Sage)
`#FFF9F0` · `#6D4C41` · `#DFE6E9` · `#FDCB6E` · `#FD79A8` · `#636E72`

---

## UI Color Rules

| Element | Color | Notes |
|---------|-------|-------|
| **Primary CTA** | Character accent or `#FDCB6E` | Golden, inviting, large |
| **Story reader bg** | Character night/background | Full immersion |
| **Library page bg** | `#FFF9F0` Cream | Warm, light, welcoming |
| **Story cards** | `#FFFFFF` on cream | Clean, framed |
| **Progress dots** | Character accent | Active = wide bar |
| **Success / sticker** | Gold `#FDCB6E` border | Reward moment |

---

## Accessibility

| Pairing | Contrast ratio | Pass? |
|---------|---------------|-------|
| `#2D3436` on `#FFF9F0` | 12.4:1 | ✅ AAA |
| `#FFF9F0` on `#0A0620` | 16.8:1 | ✅ AAA |
| `#2D1B00` on `#FDCB6E` | 10.2:1 | ✅ AAA |
| `#636E72` on `#FFF9F0` | 5.8:1 | ✅ AA |
| `#FDCB6E` on `#FFFFFF` | 1.4:1 | ❌ Never use for text |

**Rule:** Never place gold text on white. Never place muted text on dark without testing.

---

## Color Do-Nots

- ❌ Pure black `#000000` — use `#0A0620` or `#2D3436`
- ❌ Pure white backgrounds in story reader — breaks immersion
- ❌ Neon saturation — `#00FF00`, `#FF00FF`, electric blue
- ❌ More than 6 colors in a single illustration
- ❌ Gray shadows — shadows are always warm (purple, brown, or green tinted)
- ❌ Same palette for every story — character worlds must differ

---

## CSS Token Reference

*(For when code resumes — tokens already partially in `globals.css`)*

```css
--brand-primary: #6C5CE7;
--brand-secondary: #FD79A8;
--brand-accent: #FDCB6E;
--brand-sky: #74B9FF;
--brand-mint: #55EFC4;
--surface-cream: #FFF9F0;
--surface-white: #FFFFFF;
--surface-lavender: #F3F0FF;
--text-primary: #2D3436;
--text-secondary: #636E72;
--text-muted: #B2BEC3;
--night-deep: #0A0620;
--night-sky: #1A1040;
```

---

*AdventureBox Color System v1.0*

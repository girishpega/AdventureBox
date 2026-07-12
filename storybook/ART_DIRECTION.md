# Art Direction Bible
## *Ellie and the Tiny Lost Duck*

This document is the single source of truth for visual consistency across all five pages. Every illustration brief, AI generation prompt, and human artist handoff must reference this file first.

---

## Overall Visual Style

**Style name:** *Painterly Storybook Realism*

A fusion of:

- **Pixar** — character appeal, expressive eyes, emotional readability
- **Beatrix Potter** — soft watercolor texture, natural environments, gentle scale
- **Modern Caldecott Honor books** — rich color, visible brushwork, no flat digital look

**Medium appearance:** Digital watercolor and gouache on textured cold-press paper. Visible brush strokes in skies, grass, and fur/feather textures. Soft edges — no hard vector outlines. Subtle paper grain throughout.

**What this is NOT:**
- Not flat cartoon / mobile game art
- Not photorealistic 3D render
- Not anime or chibi
- Not clip art
- Not SVG placeholders or geometric shapes

---

## Character Consistency

### Ellie — Baby Elephant (Main Character)

| Attribute | Specification |
|-----------|---------------|
| **Age** | Elephant calf, approximately 3 years old |
| **Size** | Small for an elephant — roughly waist-height to a human child |
| **Body** | Round, soft, slightly clumsy proportions. Big head relative to body. |
| **Color** | Warm gray-violet (#B2BEC3 base, #DFE6E9 highlights, #636E72 shadows) |
| **Ears** | Oversized, floppy, slightly pink at inner edges |
| **Eyes** | Large amber-brown (#6D4C41), long dark lashes, white catchlights always visible |
| **Trunk** | Short, stubby, highly expressive — curls when curious, droops when sad, sprays when surprised |
| **Expression range** | Curious → Tender → Determined → Shocked-delighted → Peaceful |
| **Personality in pose** | Always gentle. Never aggressive. Movements are soft and rounded. |

**Ellie must look identical across all 5 pages.** Same gray tone, same eye shape, same ear size. Only expression and pose change.

---

### Tiny Duck — Duckling (Supporting Character)

| Attribute | Specification |
|-----------|---------------|
| **Size** | No bigger than Ellie's foot. Very small. |
| **Body** | Round, fluffy ball of down |
| **Color** | Pale butter-yellow (#FFEAA7 body, #FDCB6E accents, hint of orange at cheeks) |
| **Eyes** | Small, dark, glistening — oversized relative to head (appeal) |
| **Beak** | Tiny orange (#E17055) |
| **Wings** | Small, fluffy, slightly too big for body |
| **Expression range** | Worried → Hopeful → Hidden → Cheeky-proud → Happy |
| **First appearance** | Page 2 |

**Tiny Duck must be instantly recognizable on every appearance.** Same yellow tone, same fluffiness, same beak color.

---

## Environment Consistency

**Setting:** A single continuous meadow — the same location across all five pages, shown from different angles and times of day.

| Element | Specification |
|---------|---------------|
| **Meadow grass** | Lush, varied height, soft green (#55EFC4 to #00B894) |
| **Wildflowers** | Buttercups, lavender, pale pink clover, dandelions — scattered naturally, never arranged |
| **Hills** | Gentle rolling hills in background, soft focus |
| **Sky** | Progresses from afternoon blue → golden hour → sunset across the book |
| **Trees** | None dominant — open meadow feel. Distant tree line optional on horizon. |
| **Water** | One small puddle (Page 2). Water splash from trunk (Page 4). |
| **Wildlife accents** | Butterflies, dragonflies, ladybugs, fireflies (Pages 1, 3, 5) — small, never competing with main characters |

**Time of day progression:**

| Page | Time | Sky |
|------|------|-----|
| 1 | Late afternoon | Cornflower blue → peach-gold horizon |
| 2 | Afternoon (softened) | Diffused warm light, slight cloud cover |
| 3 | Mid-afternoon | Bright, dappled sunlight |
| 4 | Golden hour peak | Richest warm light in the book |
| 5 | Sunset → dusk | Peach, rose, lavender bands. First stars. Fireflies. |

---

## Color Palette

### Primary Palette

| Name | Hex | Usage |
|------|-----|-------|
| Meadow Green | `#55EFC4` | Grass, environment |
| Deep Meadow | `#00B894` | Grass shadows, bushes |
| Ellie Gray | `#B2BEC3` | Ellie's body |
| Ellie Highlight | `#DFE6E9` | Ellie's highlights |
| Duckling Yellow | `#FFEAA7` | Duck's body |
| Duckling Gold | `#FDCB6E` | Duck accents, button gold |
| Sky Blue | `#74B9FF` | Daytime sky |
| Sunset Peach | `#FD79A8` | Sunset sky, warmth |
| Sunset Gold | `#FDCB6E` | Golden hour light |
| Warm Cream | `#FFF9F0` | Text color on dark backgrounds |

### Page Saturation Guide

| Page | Saturation | Notes |
|------|------------|-------|
| 1 | Medium-low | Quiet, hushed wonder |
| 2 | Medium | Tender, intimate |
| 3 | Medium-high | Playful, bright |
| 4 | **Highest** | Visual climax — laugh moment |
| 5 | Medium, warm | Soft, atmospheric, dreamy |

---

## Typography Recommendations

*(For when images are placed in the existing reader — no new components required)*

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Story text | Fredoka | 28–36px | 600 | `#FFF9F0` |
| Page indicator | Nunito | 12px | 600 | `white/40%` |
| Next button | Fredoka | 18–20px | 700 | `#2D1B00` on `#FDCB6E` |
| Story title (Page 1 only) | Fredoka | 14px uppercase | 500 | `white/40%`, tracked |

**Rules:**
- Maximum 2 lines of story text per page
- Text always below illustration — never overlaid on art
- Generous whitespace between illustration and text (minimum 24px)
- Text centered horizontally

---

## Composition Rules

1. **Illustration dominates** — 65–70% of viewport height. Art is the hero.
2. **Character eye-line** — Ellie and Duck should make eye contact with each other or with something in-frame, never stare blankly at camera (except Page 4 surprise).
3. **Child's eye level** — Camera at or below adult knee height. The world feels big and magical.
4. **Breathing room** — Never fill 100% of the frame. Sky, grass, or soft blur always frames the subject.
5. **Focal point** — One clear focal point per page. Child's eye knows where to look within 1 second.
6. **No text in illustrations** — All text is rendered by the app, not baked into art.
7. **Safe zones** — Keep critical character detail out of bottom 15% (text zone overlay in app).
8. **Portrait orientation** — All illustrations 4:5 aspect ratio (e.g. 1200×1500px or 2400×3000px).

---

## Negative Prompts

Include these in every GPT Image / Midjourney / DALL·E generation to avoid off-brand results:

```
Avoid: photorealistic, 3D render, CGI, anime, chibi, cartoon network style, 
flat vector, clip art, stock photo, dark or scary mood, sharp harsh outlines, 
text or words in image, watermark, signature, logo, blurry faces, deformed 
anatomy, extra limbs, wrong number of fingers, human characters, urban 
environment, night scene (except page 5 dusk), rain, storm, predators, 
blood, weapons, screens, devices, modern objects, oversaturated neon colors, 
low quality, jpeg artifacts, duplicate characters, inconsistent character 
design, adult elephant proportions, scary teeth, aggressive expression
```

---

## Animation Guidelines

*(For existing reader — no new components)*

| Principle | Rule |
|-----------|------|
| **Subtlety** | If a parent notices the animation, it's too much |
| **Purpose** | Every animation serves the story beat |
| **Reduced motion** | All animations respect `prefers-reduced-motion` |
| **No loops that distract** | Ambient motion only on Pages 1 and 5 |

See individual PAGE files for per-page animation suggestions.

---

## File Naming Convention

When production images are generated:

```
storybook/assets/
  ellie-page-01-the-peep.png
  ellie-page-02-the-lost-one.png
  ellie-page-03-the-search.png
  ellie-page-04-the-surprise.png
  ellie-page-05-best-friends.png
```

Recommended resolution: **2400 × 3000px** (4:5 at 300 DPI print quality).

---

## Approval Checklist

Before any illustration is approved for production:

- [ ] Ellie looks the same as previous pages (gray tone, ear shape, eye color)
- [ ] Tiny Duck matches established design (yellow, fluff, orange beak)
- [ ] Meadow environment feels like the same place
- [ ] Sky time-of-day matches page progression
- [ ] No text baked into image
- [ ] No scary, dark, or aggressive elements
- [ ] A 5-year-old would smile looking at it
- [ ] A parent would hang it on a wall

---

*Art Direction Bible v1.0 · AdventureBox · Ellie and the Tiny Lost Duck*

# Page 3 of 5 — *The Search*

---

## Story Text

> "Where did you go?"  
> Tap the grass to help Ellie look.

*(Exactly 2 short sentences. Do not alter. Page 3 includes the single interactive moment in the story.)*

---

## Page Layout Specification

```
┌─────────────────────────────────────┐
│                                     │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │   FULL PAGE ILLUSTRATION    │    │  70% viewport height
│  │   Ellie searching meadow    │    │  4:5 aspect ratio
│  │   (3 tappable grass areas)  │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│     "Where did you go?"             │  Fredoka 600, centered
│     Tap the grass to help           │  Line 2 slightly smaller or
│     Ellie look.                     │  same size — max 2 sentences
│                                     │
│            Page 3 of 5              │
│                                     │
│    [  Look! 👀  ]  ← interaction   │  Replaces Next until tapped
│                                     │  Then: [  Next →  ]
└─────────────────────────────────────┘
```

**Interaction note:** On this page only, the Next button is replaced by a "Look! 👀" button until the child taps. After tap, text updates to "Peep!" and Next appears. See PAGE_04 for the reveal payoff.

---

## Production Illustration Prompt

*(GPT Image / DALL·E 3 / Midjourney v6 — copy verbatim)*

```
Premium children's picture book illustration, full-bleed single page, portrait 
orientation 4:5 aspect ratio.

CHARACTERS: Ellie the baby elephant — same established design: warm gray-violet 
(#B2BEC3), floppy ears, amber-brown eyes, short trunk. She is peering behind 
a large leafy bush, trunk pushing foliage aside, ONE eye and half her face 
visible around the bush edge. Expression: comically focused and determined — 
brows furrowed, tongue slightly visible at corner of mouth, the face of a 
child playing hide-and-seek. Playful, not frustrated.

IMPORTANT: Tiny Duck the duckling is NOT visible anywhere in this image — 
he is hidden for the story reveal on Page 4.

ENVIRONMENT: Same meadow, mid-afternoon, brighter than Page 2. Three distinct 
visual "search zones" composed naturally in the frame:
(1) A large leafy bush center-right that Ellie peers behind
(2) A hollow fallen log lower-left, mossy, inviting peek
(3) A tall clump of yellow wildflowers and grass lower-center-right

Dragonflies hover in mid-ground. Dandelion seeds float in air. A ladybug on 
a blade of grass in extreme foreground for scale and child delight. Butterflies 
in background.

LIGHTING: Bright cheerful dappled sunlight as if filtering through invisible 
tree canopy above. Warm greens and golds dominate. Medium-high saturation — 
most energetic environment in the book so far.

COLORS: Vivid meadow greens (#55EFC4, #00B894), golden dandelions (#FDCB6E), 
Ellie's gray-violet, bright sky blue patches (#74B9FF), yellow flower accents.

CAMERA: Slightly wider shot than Page 2. Ellie center-left behind bush. 
Search zones spread across lower two-thirds of frame. Invites the child's eye 
to wander and explore the image. Moderate depth of field.

STYLE: Pixar-meets-Beatrix Potter painterly digital watercolor. Slightly more 
playful energy than previous pages — gentle humor in Ellie's expression. 
Think Pixar short film still frame. Caldecott Honor book quality.

MOOD: Playful anticipation. A treasure hunt in sunshine. The page that invites 
a child to participate.

TECHNICAL: No text, no words, no UI buttons, no letters, no watermark, no 
signature, no border. Single illustration only. High detail, print-ready quality.
```

---

## Suggested Camera Angle

Wider medium shot. Ellie center-left. Three search zones across lower frame.

---

## Lighting

Bright dappled afternoon sunlight. Highest energy lighting before Page 4 climax.

---

## Mood

**Playful anticipation.** A treasure hunt. Invitation to participate.

---

## Color Palette

| Color | Hex | Role |
|-------|-----|------|
| Vivid Green | `#55EFC4` | Grass, leaves |
| Deep Green | `#00B894` | Bush, shadows |
| Dandelion Gold | `#FDCB6E` | Floating seeds, flowers |
| Ellie Gray | `#B2BEC3` | Ellie |
| Sky Blue | `#74B9FF` | Sky patches |
| Ladybug Red | `#E17055` | Foreground accent |

---

## Animation Suggestion

- **Page turn in:** Standard forward page turn.
- **Interactive zones:** The three search areas (bush, log, flower clump) have a barely perceptible soft glow pulse (opacity 0.8 → 1.0, 3s loop) to invite tapping — only on this page.
- **On tap ("Look! 👀"):** Tapped zone scales 1.0 → 1.04 → 1.0 over 300ms. Brief golden ripple. Text crossfades to "Peep!" Illustration wiggles 2° once (400ms). Then Next button appears.
- **Do not:** auto-advance, use sound without opt-in, or make glow obvious to adults.

---

*Page 3 Brief · Ellie and the Tiny Lost Duck · AdventureBox Publishing*

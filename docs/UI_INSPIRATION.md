# AdventureBox — UI Inspiration

## Design north star

> **If Pixar made a toy box, and Nintendo opened it, and Duolingo taught it to celebrate — that's AdventureBox.**

We are not building enterprise software. We are not building an educational dashboard. We are building a **magical object** that happens to live on a screen.

---

## Reference studios and what we steal

### Pixar — Emotional architecture

**What they do:** Every story has a clear emotional want. The opening image sets the tone. The ending pays off the promise.

**What we steal:**
- Every adventure opens with a **visual promise** (the box on the shelf — what could be inside?)
- Every adventure closes with an **emotional payoff** (celebration that resolves the story's tension)
- Characters have **one defining trait** (Luma is shy but brave; not complex backstories)
- Color palettes shift with emotion: soft pastels for calm, bright bursts for celebration

**Pixar films to study:**
- *Short films* (Lou, Piper, For the Birds) — complete emotional arcs in under 5 minutes
- *Inside Out* — emotion as character design
- *Coco* — celebration as climax

**Applied to AdventureBox:**
- The box opening is our "Pixar lamp moment" — the brand signature
- Story scenes use cinematic framing (wide shot → close-up → reaction shot)
- Celebration is the emotional climax, not an afterthought

---

### Nintendo — Joyful interaction

**What they do:** Every button press feels good. Difficulty is fair. Surprises are delightful, never punishing.

**What we steal:**
- **Juice** — every tap produces visual + sound + haptic feedback
- **Fair challenge** — adaptive difficulty, no punishment, gentle retry
- **Surprise boxes** — the literal box metaphor; opening something unknown
- **Iconic simplicity** — Mario doesn't need a tutorial; neither does AdventureBox

**Nintendo games to study:**
- *Super Mario Odyssey* — moons as celebration rewards (our stickers)
- *Animal Crossing* — gentle pacing, no failure, collection as motivation
- *Kirby* — accessible to young children, depth for older ones

**Applied to AdventureBox:**
- The box shake-and-open animation is our "coin sound" — the signature interaction
- Mazes never punish — wrong turns bounce, not break
- Stickers are our "moons" — collectible, celebratory, no grind

---

### Duolingo — Delightful design system

**What they do:** The "Juicy" design language — rounded, bright, bouncy, expressive. Celebrations for every win. Characters with personality.

**What we steal:**
- **Juicy UI** — rounded corners, bold colors, bouncy animations, expressive characters
- **Micro-celebrations** — small wins celebrated immediately (maze complete → sparkle burst)
- **Character personality** — Luma giggles, cheers, looks sad — she is alive
- **Bite-sized sessions** — 8–15 minutes, not hour-long sessions

**What we explicitly do NOT steal:**
- Streaks and guilt mechanics
- Leaderboards and competition
- Notification nagging
- Energy/lives systems
- The owl's passive-aggressive tone

**Applied to AdventureBox:**
- Rounded UI elements, 16px+ corner radius
- Characters react to touch (tap Luma → giggle)
- Each activity completion triggers a mini-celebration before the final one

---

### Toca Boca / Sago Mini — Digital toy philosophy

**What they do:** Apps as toys, not games. No scores, no timers, no levels. Open play. Co-play friendly.

**What we steal:**
- **No instructions** — the interface teaches through design
- **Multi-touch** — parent and child can interact simultaneously
- **Imperfection** — "dirt in the corners," quirky details, warmth over polish
- **Gender-neutral** — themes appeal across stereotypes (dinosaurs aren't "for boys")

**Applied to AdventureBox:**
- No text instructions on the child screen
- Co-play moments built into the story (parent reads, child taps)
- Visual style is warm and slightly imperfect — hand-drawn feel, not sterile vector

---

## Visual design language

### Color palette

| Role | Color | Usage |
|---|---|---|
| **Primary** | Soft lavender `#B8A9E8` | Box, UI chrome, calm moments |
| **Secondary** | Warm gold `#F5D76E` | Celebrations, rewards, sparkles |
| **Accent** | Coral pink `#FF8A80` | CTAs, interactive elements |
| **Background** | Cream white `#FFF8F0` | Main background — warm, not clinical |
| **Text** | Soft brown `#5D4037` | Parent screens only — never on child screens |
| **Success** | Mint green `#A8E6CF` | Completion states, positive feedback |

Adventures may shift accent colors per theme:
- Unicorn: lavender + pink
- Dinosaur: sage green + amber
- Space: deep blue + silver
- Princess: rose + gold

### Typography

| Context | Style |
|---|---|
| Child screens | No text. Voice and icons only. |
| Parent screens | Rounded sans-serif (Nunito, Quicksand, or similar) |
| Story narration | Display serif for storybook feel (optional, parent co-play mode) |
| Celebration | Bold, bouncy display font for sticker names |

### Illustration style

- **Hand-drawn digital** — Procreate or similar, not sterile vector
- **Soft outlines** — no harsh black lines
- **Warm textures** — subtle paper grain, watercolor washes
- **Expressive characters** — large eyes, simple mouths, clear emotions
- **Consistent universe** — all adventures feel like they live in the same world

### Animation principles

| Principle | Detail |
|---|---|
| **Bounce** | Elements enter with spring physics (not linear) |
| **Anticipation** | Box shakes before opening. Character winds up before jumping. |
| **Follow-through** | Confetti keeps falling after the burst. Crown settles on head. |
| **Squash & stretch** | Characters deform slightly on bounce — alive, not rigid |
| **Duration** | Child animations: 300–600ms. Celebration: up to 2s. Never longer. |

### Sound design

| Moment | Sound |
|---|---|
| Box tap | Soft thud + magical shimmer |
| Box open | Music box chime + sparkle cascade |
| Scene transition | Gentle whoosh |
| Maze move | Soft tap + sparkle trail |
| Memory match | Flip: card swoosh. Match: ding! Mismatch: gentle boop. |
| Coloring | Satisfying paint brush sound |
| Celebration | Triumphant but gentle 5-second jingle |
| Character giggle | Warm, not cartoon-squeaky |

All sounds should feel **warm and acoustic** — not electronic or harsh.

---

## Screen inventory (Sprint 0)

### Child screens

| Screen | Key elements |
|---|---|
| **Shelf** | Wooden shelf, one glowing box, child's name on nameplate, warm background |
| **Box open** | Full-screen animation: shake → glow → open → sparkles → Luma appears |
| **Story scene** | Full-bleed illustration, narration auto-plays, tap-to-advance sparkle button |
| **Maze** | Top-down view, drag Luma, sparkle trail, rainbow gate at end |
| **Memory** | Card grid, flip animation, friends characters on cards |
| **Coloring** | Crown line art, 6-color palette, tap-to-fill, done button |
| **Celebration** | Confetti, Luma with crown, sticker reveal, cheering friends |

### Parent screens

| Screen | Key elements |
|---|---|
| **Welcome** | Warm illustration, "AdventureBox" wordmark, "Get started" |
| **Child setup** | Name input, age picker (4–10), "Start adventure" |
| **How it works** | 3 simple panels: themed adventures, safe for kids, no ads |
| **Gate** | PIN or biometric to access settings |
| **Settings** | Child name/age, screen time, adventure history, privacy policy |

---

## Interaction patterns

### The box open (signature interaction)

This is our most important UI moment — the "Pixar lamp" of AdventureBox.

```
1. Box sits on shelf, gently pulsing glow
2. Child taps → box bounces (squash & stretch)
3. Box shakes (3 quick wobbles)
4. Lid lifts with light beam shooting up
5. Sparkles cascade out
6. Character peeks over edge
7. Character jumps out with arms wide
8. Transition to story (gentle fade)
```

Total duration: 3–4 seconds. Must feel magical every time.

### Touch targets

| Element | Minimum size |
|---|---|
| Buttons | 64 × 64 pt |
| Maze drag area | Full screen |
| Memory cards | 80 × 80 pt minimum |
| Color palette swatches | 48 × 48 pt |
| Box tap area | Full box illustration |

### Feedback on every touch

Every tap produces:
1. Visual response (scale, color change, or animation)
2. Sound (appropriate to context)
3. Haptic (light tap on iOS)

No "dead" UI. Every surface is alive.

---

## Anti-patterns (what we avoid)

| Anti-pattern | Why | Instead |
|---|---|---|
| Hamburger menus | Children don't understand them | No menus on child screens |
| Text instructions | Pre-readers can't read | Voice + visual demonstration |
| Loading spinners | Breaks magic | Pre-load content; show character animation while waiting |
| Modal dialogs | Confusing for children | Inline transitions |
| Scroll views | Children don't scroll well | One screen = one moment |
| Settings on child screen | Breaks immersion | Parent gate only |
| Red/green error states | Feels like school | Gentle bounce-back on wrong answers |
| Countdown timers | Creates anxiety | No timers, ever |
| Star ratings | Feels like evaluation | Celebration, not grading |

---

## Mood board references

### Visual tone
- Studio Ghibli backgrounds (soft, warm, detailed)
- Toca Boca character design (simple, expressive, quirky)
- Duolingo's Juicy UI (rounded, bright, bouncy)
- Classic pop-up books (layered, surprising, tactile)

### Emotional tone
- Pixar shorts (complete arc, emotional payoff)
- Mister Rogers (calm, safe, warm)
- Bluey (playful, co-play friendly, parent-respecting)

### Interaction tone
- Nintendo (fair, joyful, surprising)
- Sago Mini (no instructions, open play)
- Monument Valley (beautiful, intuitive, no failure)

---

## Design deliverables for Sprint 0

| Deliverable | Tool | Priority |
|---|---|---|
| Box open animation (storyboard) | Figma / Procreate | P0 |
| Shelf screen mockup | Figma | P0 |
| Story scene 1 illustration | Procreate | P0 |
| Luma character sheet (5 emotions) | Procreate | P0 |
| Maze layout (paper + digital) | Figma | P0 |
| Memory card designs | Figma | P1 |
| Crown coloring page | Procreate / PDF | P0 |
| Celebration screen mockup | Figma | P0 |
| Color palette + type specimen | Figma | P1 |
| Parent setup wireframes | Figma | P1 |
| Sound mood board (reference tracks) | Playlist | P2 |

---

## The test

Show any screen to a 5-year-old without explanation.

- If they reach for it → we succeeded
- If they ask "what do I do?" → we failed
- If they smile → we nailed it

# AdventureBox v0.2.0 — First Playable Adventure

**Release date:** July 12, 2026  
**Tag:** `v0.2.0`

---

## Summary

AdventureBox v0.2.0 delivers the first complete, playable adventure — a Princess & Unicorn journey that a child can finish in 3–5 minutes. A child opens a magical box, follows a three-scene story, guides Sparkles the unicorn through a maze, and earns a Rainbow Helper sticker at celebration.

This release proves the AdventureBox format works end-to-end: story, play, celebrate — with no accounts, no backend, and no reading required.

---

## Features

### Playable Princess Adventure (`/adventure/princess`)

| Phase | Experience |
|---|---|
| **Open** | Tap the breathing treasure box — glow, sparkles, Princess Lily appears |
| **Story** | 3 illustrated scenes featuring Princess Lily and Sparkles the unicorn |
| **Play** | Maze mini-game — guide Sparkles to the Rainbow Star |
| **Celebrate** | Confetti, trophy, Princess hug, Rainbow Helper sticker, Play Again |

### Reusable Maze Engine (`games/maze/`)

- Deterministic grid-based maze (no random generation)
- Touch/tap and keyboard (arrow keys) controls
- Large 48px+ cells for small fingers
- No timer, lives, score, or failure screen
- Unlimited retries
- Theme-configurable colors and emojis

### Content-Driven Architecture

- Adventure content in `stories/princess.ts`
- Adventure lookup via `lib/adventures.ts`
- Playable themes route to `AdventureFlow`; others keep preview layout
- Future themes only need a new story config + registration

---

## UX Improvements

- **Landing page** updated to v0.2.0 — "✨ Ready to play", direct "🦄 Start Adventure" CTA, Princess card shows "✨ Play Now"
- **Software language removed** — phase badges replaced with sparkle ✨ progress dots; "Shelf" → "🏠 Home"
- **Story polish** — Princess Lily and Sparkles are named characters with warm, child-friendly dialogue
- **Scene 3 repaired** — Princess, unicorn, rainbow star, and garden glow all visible
- **Single box interaction** — tap the treasure box only; no duplicate button
- **Maze intro** reduced to one sentence: "✨ Help Sparkles reach the Rainbow Star!"
- **Celebration enhanced** — rainbow burst, Princess 💕 Unicorn hug, large sticker reveal, Choose Another Adventure
- **Micro-animations** — box breathe, twinkle, confetti, button scale; all respect `prefers-reduced-motion`

---

## Accessibility

- 48px minimum maze cells; 56px minimum buttons
- Arrow key navigation in maze
- `aria-label` on interactive elements
- `focus-visible` rings throughout
- `prefers-reduced-motion` disables all animations
- Semantic HTML (`header`, `main`, `button`)

---

## Performance

- Zero new npm dependencies
- All illustrations are inline SVG (no image assets)
- Static generation for all adventure routes
- CSS-only animations (no animation libraries)
- Deterministic confetti positioning
- Build and lint pass cleanly

---

## Known Limitations

- Only the Princess theme is fully playable; Dinosaurs, Space, and Animals remain preview-only
- Maze uses tap-adjacent-cell movement (not drag-to-move)
- Story illustrations are placeholder SVG art, not final artwork
- No sound effects or narration
- No child name personalization
- Stickers are session-only (not persisted between visits)
- Create beat (coloring activity) deferred to v0.3

---

## Next Sprint (v0.3)

- Drag-to-move maze controls for more tactile feel
- Sound effects (box open chime, success cheer)
- Persist earned stickers in localStorage
- Coloring activity (Create beat)
- Second playable theme (Dinosaurs or Space)
- Child name personalization via parent setup screen
- Final illustrated artwork replacing placeholder SVGs

---

## Review Gates

| Gate | Result |
|---|---|
| Engineering Review | ✅ PASS |
| Product Owner Review | ✅ PASS |
| Child Experience Review | ✅ PASS |
| Parent Trust Review | ✅ PASS |
| Accessibility Review | ✅ PASS |
| Performance Review | ✅ PASS |

---

*AdventureBox v0.2.0 — The first magical box is open.*

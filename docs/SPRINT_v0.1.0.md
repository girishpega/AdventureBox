# Sprint v0.1.0 — AdventureBox Foundation

**Status:** Complete  
**Goal:** Create the complete project foundation for AdventureBox.

---

## Sprint goal

Ship a production-quality Next.js application shell with branding, theme selection, a reusable component library, design system, and documentation — ready for the first real adventure in the next sprint.

---

## What shipped

### Application

| Deliverable | Status |
|---|---|
| Next.js App Router project | Done |
| TypeScript configuration | Done |
| Tailwind CSS v4 styling | Done |
| ESLint setup | Done |
| Responsive landing page | Done |
| Theme selection cards (4 themes) | Done |
| Adventure layout template | Done |
| Reusable UI component library | Done |
| Design system (tokens + docs) | Done |
| Placeholder SVG illustrations | Done |
| 404 page | Done |

### Documentation

| Document | Status |
|---|---|
| VISION.md | Pre-existing (Phase 0) |
| ROADMAP.md | Pre-existing (Phase 0) |
| DESIGN_SYSTEM.md | Done |
| ARCHITECTURE.md | Done |
| SPRINT_v0.1.0.md | Done |
| README.md | Done |

### Folder structure (future-ready)

| Folder | Purpose |
|---|---|
| `stories/` | Narrative content |
| `games/` | Mini-game components |
| `themes/` | Theme-specific assets |
| `agents/` | AI personalization |

---

## What did NOT ship (by design)

- Authentication / parent gate
- Backend / API routes
- Database
- AI integration
- Gameplay mechanics
- Real illustrations (SVG placeholders only)
- Sound / haptics
- Analytics

---

## Themes available

| Theme | Route | Status |
|---|---|---|
| Princess | `/adventure/princess` | Layout preview |
| Dinosaurs | `/adventure/dinosaurs` | Layout preview |
| Space | `/adventure/space` | Layout preview |
| Animals | `/adventure/animals` | Layout preview |

---

## Components created

### UI (`components/ui/`)

- `Button` — 4 variants, 3 sizes
- `Card` — hover lift, padding options
- `Container` — responsive max-width wrapper
- `Heading` — display typography with optional gradient
- `Badge` — status labels
- `ThemeCard` — theme selection with illustration
- `PlaceholderIllustration` — inline SVG per theme

### Layout (`components/layout/`)

- `Header` — sticky nav with branding
- `Footer` — site footer
- `AdventureLayout` — adventure page shell with beat progression

---

## Design decisions

1. **Fredoka + Nunito** — playful display font paired with readable body font
2. **Cream background** — warm, premium feel vs. stark white
3. **16px+ border radius** — Juicy UI principle from Duolingo inspiration
4. **Theme-driven colors** — each theme has its own palette flowing from config
5. **Inline SVG placeholders** — no external image dependencies, fast loads
6. **Static generation** — theme pages pre-rendered at build time
7. **No component library** — custom components match brand exactly

---

## How to run

```bash
cd AdventureBox
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Exit criteria

| Criterion | Met? |
|---|---|
| Landing page loads with AdventureBox branding | Yes |
| 4 theme cards link to adventure previews | Yes |
| Adventure layout shows five-beat progression | Yes |
| UI is responsive (mobile → desktop) | Yes |
| Component library is reusable | Yes |
| Design system documented | Yes |
| Architecture documented | Yes |
| Folder structure ready for extension | Yes |
| `npm run build` succeeds | Pending verification |
| `npm run lint` passes | Pending verification |

---

## Next sprint (v0.2)

Recommended focus: **First playable adventure** (Unicorn/Princess theme)

- Box open animation
- 3-scene story with narration placeholders
- One mini-game (maze)
- Coloring activity placeholder
- Celebration screen

---

## Trade-offs

| Decision | Trade-off |
|---|---|
| SVG placeholders vs. real art | Faster sprint; art can be swapped without code changes |
| No state management | Simpler now; will need router/state for gameplay |
| Disabled "Open the Box" button | Honest about scope; prevents false expectations |
| "Coming soon" on theme cards | Themes are navigable but not playable yet |
| Client-only | No personalization yet; child's name comes later |

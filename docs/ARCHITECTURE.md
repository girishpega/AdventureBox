# AdventureBox — Architecture

Sprint v0.1.0 — Foundation

---

## Overview

AdventureBox is a **client-only Next.js application** using the App Router. There is no backend, database, authentication, or AI integration in this sprint. The architecture prioritizes a clean folder structure that future sprints can extend without refactoring.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Linting | ESLint (eslint-config-next) |
| Fonts | Fredoka (display), Nunito (body) via next/font |

---

## Folder structure

```
AdventureBox/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Design tokens, Tailwind theme
│   ├── not-found.tsx       # 404 page
│   └── adventure/
│       └── [theme]/
│           └── page.tsx    # Adventure layout template
├── components/
│   ├── ui/                 # Reusable UI component library
│   └── layout/             # Page-level layout components
├── lib/
│   ├── design-tokens.ts    # Color, spacing, shadow tokens
│   └── themes.ts           # Theme definitions and lookup
├── types/
│   └── index.ts            # Shared TypeScript types
├── stories/                # Future: narrative content
├── games/                  # Future: mini-game logic
├── themes/                 # Future: theme-specific assets
├── agents/                 # Future: AI personalization
├── public/                 # Static assets
└── docs/                   # Product and technical documentation
```

---

## Routing

| Route | Page | Purpose |
|---|---|---|
| `/` | Landing page | Branding, theme selection, how-it-works |
| `/adventure/[theme]` | Adventure template | Per-theme layout preview |
| `*` | 404 | Friendly not-found page |

Themes are statically generated at build time via `generateStaticParams`.

---

## Component architecture

### UI layer (`components/ui/`)

Stateless, reusable primitives:

- `Button` — action triggers
- `Card` — content containers
- `Container` — responsive width wrapper
- `Heading` — typographic hierarchy
- `Badge` — status labels
- `ThemeCard` — theme selection card
- `PlaceholderIllustration` — inline SVG placeholders

Barrel export via `components/ui/index.ts`.

### Layout layer (`components/layout/`)

Page-composition components:

- `Header` — site navigation
- `Footer` — site footer
- `AdventureLayout` — adventure page shell with beat progression

---

## Data flow

```
lib/themes.ts  →  ThemeCard / AdventureLayout  →  Pages
lib/design-tokens.ts  →  globals.css  →  Tailwind classes  →  Components
```

No external data fetching. All content is static or derived from `lib/themes.ts`.

---

## Type system

Core types in `types/index.ts`:

- `ThemeId` — union of valid theme identifiers
- `Theme` — full theme configuration
- `ThemeColors` — per-theme color palette
- `AdventureBeat` — five-beat arc identifiers

---

## Future extension points

### Stories (`stories/`)

Will hold narrative schemas, scene definitions, and narration scripts. Expected format: JSON or MDX per adventure beat.

### Games (`games/`)

Will hold mini-game components (maze, memory, coloring). Each game will be a self-contained React component accepting theme context.

### Themes (`themes/`)

Will hold theme-specific assets (illustrations, sounds, character definitions) beyond the shared palette in `lib/themes.ts`.

### Agents (`agents/`)

Will hold AI personalization logic (name insertion, difficulty adaptation). Designed to run behind the curtain — children never interact with AI directly.

### Adventure format

The five-beat arc is already reflected in `AdventureLayout`:

```
Open → Story → Play → Create → Celebrate
```

Future sprints will replace the placeholder content area with a state machine or step router.

---

## Build and deploy

```bash
npm run dev      # Local development
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

No environment variables required for v0.1.0.

---

## Constraints (by design)

| Not included | Rationale |
|---|---|
| Authentication | Parent gate comes in Phase 1 |
| Backend / API | Static content only for foundation |
| Database | No persistent state yet |
| AI integration | Rails-not-prompts AI in Phase 1+ |
| State management library | No complex state yet; React props suffice |
| Component library dependency | Custom components match brand exactly |

---

## Principles

1. **Extend, don't refactor** — folder structure anticipates future modules
2. **Static first** — fast loads, simple deploys, child-friendly performance
3. **Theme-driven** — colors and content flow from theme config
4. **Component composition** — small primitives, composed layouts

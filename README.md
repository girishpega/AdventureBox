# AdventureBox

**Magical themed adventures for curious kids.**

AdventureBox delivers complete adventure experiences — story, play, create, and celebrate — in a format children experience as magic and parents experience as safe.

> Every child has a box of adventures waiting for them.

---

## What is AdventureBox?

AdventureBox is not a library, not a chat, and not a game portal. It's a **themed adventure box** that unfolds in five beats:

```
Open → Story → Play → Create → Celebrate
```

A child picks a theme (Princess, Dinosaurs, Space, Animals), opens their box, and lives a complete 8–15 minute adventure.

---

## Sprint v0.1.0 — Foundation

This sprint ships the **project foundation**:

- Landing page with AdventureBox branding
- Theme selection cards
- Reusable UI component library
- Adventure layout template (no gameplay yet)
- Design system with colors, typography, spacing, buttons, and cards
- Documentation and folder structure for future development

---

## Quick start

### Prerequisites

- Node.js 18+
- npm

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Project structure

```
AdventureBox/
├── app/                 # Next.js pages (App Router)
├── components/
│   ├── ui/              # Reusable UI components
│   └── layout/          # Page layout components
├── lib/                 # Themes, design tokens, utilities
├── types/               # TypeScript type definitions
├── stories/             # Future: narrative content
├── games/               # Future: mini-game logic
├── themes/              # Future: theme-specific assets
├── agents/              # Future: AI personalization
├── docs/                # Product & technical documentation
└── public/              # Static assets
```

---

## Documentation

| Document | Description |
|---|---|
| [VISION.md](docs/VISION.md) | Product vision and competitive positioning |
| [ROADMAP.md](docs/ROADMAP.md) | Phased development roadmap |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Colors, typography, components, motion |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Technical architecture and extension points |
| [SPRINT_v0.1.0.md](docs/SPRINT_v0.1.0.md) | This sprint's deliverables and decisions |

---

## Tech stack

- **Next.js 16** — App Router, static generation
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling
- **ESLint** — Code quality
- **Fredoka + Nunito** — Google Fonts

---

## Development workflow

1. **Read the docs** — Start with `docs/VISION.md` and `docs/ROADMAP.md`
2. **Check the sprint doc** — `docs/SPRINT_v0.1.0.md` for current scope
3. **Follow the design system** — `docs/DESIGN_SYSTEM.md` for UI decisions
4. **Use existing components** — Check `components/ui/` before creating new ones
5. **Extend folder structure** — Add content to `stories/`, `games/`, etc.

### Branch naming (suggested)

```
sprint/v0.2.0-first-adventure
feature/box-open-animation
fix/theme-card-hover
```

### What NOT to build yet

- Authentication
- Backend / API
- Database
- AI integration
- Real gameplay

These come in future sprints per the roadmap.

---

## Design principles

1. **Playful, premium, child-friendly** — Juicy UI with rounded corners and warm colors
2. **Delightful UX over feature count** — Every interaction should feel good
3. **Reusable and simple** — Small components, composed layouts
4. **No overengineering** — Build only what this sprint needs

---

## License

Private — All rights reserved.

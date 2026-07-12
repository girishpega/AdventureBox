# AdventureBox Design System

Sprint v0.1.0 — Foundation

---

## Design north star

> If Pixar made a toy box, and Nintendo opened it, and Duolingo taught it to celebrate — that's AdventureBox.

The UI should feel **playful**, **premium**, and **child-friendly**. Every interaction should reward curiosity without overwhelming young users.

---

## Color palette

### Brand colors

| Token | Hex | Usage |
|---|---|---|
| `brand-primary` | `#6C5CE7` | Primary actions, links, brand accents |
| `brand-secondary` | `#FD79A8` | Secondary highlights, warmth |
| `brand-accent` | `#FDCB6E` | Celebrations, rewards, sparkles |
| `brand-sky` | `#74B9FF` | Informational accents |
| `brand-mint` | `#55EFC4` | Success states, nature themes |

### Surface colors

| Token | Hex | Usage |
|---|---|---|
| `surface-cream` | `#FFF9F0` | Page background |
| `surface-white` | `#FFFFFF` | Cards, elevated surfaces |
| `surface-lavender` | `#F3F0FF` | Subtle highlights, badges |

### Text colors

| Token | Hex | Usage |
|---|---|---|
| `text-primary` | `#2D3436` | Headings, body text |
| `text-secondary` | `#636E72` | Supporting text |
| `text-muted` | `#B2BEC3` | Placeholders, hints |

### Theme colors

Each adventure theme has its own palette defined in `lib/themes.ts`:

- **Princess** — Pink (`#E84393`) on blush (`#FFF0F6`)
- **Dinosaurs** — Emerald (`#00B894`) on mint (`#E8FFF8`)
- **Space** — Purple (`#6C5CE7`) on lavender (`#F0EEFF`)
- **Animals** — Coral (`#E17055`) on peach (`#FFF5EE`)

---

## Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display | Fredoka | 600–700 | Headings, brand name, theme titles |
| Body | Nunito | 400–600 | Paragraphs, labels, buttons |

### Scale

| Level | Size (mobile → desktop) |
|---|---|
| H1 | 2.25rem → 3.75rem |
| H2 | 1.875rem → 2.25rem |
| H3 | 1.5rem → 1.875rem |
| Body | 1rem → 1.125rem |
| Small | 0.75rem → 0.875rem |

---

## Spacing

Based on a 4px grid:

| Token | Value |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

---

## Border radius

| Token | Value | Usage |
|---|---|---|
| sm | 8px | Small chips |
| md | 16px | Inputs |
| lg | 20px | Illustrations |
| xl | 24px | Cards |
| 2xl | 32px | Buttons, large containers |

Minimum corner radius for interactive elements: **16px** (Juicy UI principle).

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| soft | `0 4px 20px rgba(108,92,231,0.12)` | Subtle elevation |
| card | `0 8px 32px rgba(45,52,54,0.08)` | Cards at rest |
| card-hover | `0 12px 40px rgba(108,92,231,0.18)` | Cards on hover |
| button | `0 4px 14px rgba(108,92,231,0.35)` | Primary buttons |

---

## Components

### Button

Variants: `primary`, `secondary`, `ghost`, `theme`  
Sizes: `sm`, `md`, `lg`

- Rounded pill shape (32px radius)
- Active state scales to 98%
- Focus ring for accessibility

### Card

- White background on cream page
- Optional hover lift (-4px translate)
- Configurable padding: `sm`, `md`, `lg`

### ThemeCard

- Theme-colored background
- Placeholder illustration with emoji badge
- Links to adventure layout preview

### Badge

Variants: `default`, `accent`, `mint`  
Used for sprint labels, status indicators.

---

## Motion

| Animation | Duration | Usage |
|---|---|---|
| float | 3s ease-in-out | Hero illustrations |
| sparkle | 2s ease-in-out | Decorative sparkles |
| wiggle | 2s ease-in-out | Playful emphasis |
| hover lift | 300ms | Cards on hover |
| button press | 200ms | Active scale |

Keep animations gentle — no jarring transitions for young children.

---

## Accessibility

- Minimum touch target: 44×44px
- Focus visible rings on all interactive elements
- Semantic HTML (`header`, `main`, `footer`, `nav`)
- `aria-hidden` on decorative illustrations
- Color contrast meets WCAG AA for text

---

## Implementation

Design tokens live in:

- `lib/design-tokens.ts` — programmatic tokens
- `app/globals.css` — CSS custom properties and Tailwind theme
- `lib/themes.ts` — per-theme color overrides

Components in `components/ui/` consume tokens via Tailwind classes and CSS variables.

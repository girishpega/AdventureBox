# WonderBerry v0.6.0 — Brand Identity Sprint

**Status:** Awaiting Product Owner Visual Approval  
**Do NOT commit until approved.**

## Live Preview

Server running at: **http://localhost:3460**

## What Changed

### Brand
- Renamed AdventureBox → **WonderBerry**
- Tagline: **Little Stories. Big Wonder.**
- New berry logo (strawberry icon + wordmark)

### Color System
| Token | Color | Use |
|-------|-------|-----|
| Warm Berry | `#C94B6E` | Primary buttons, brand accent |
| Golden Sunshine | `#F5B942` | Secondary, tagline accent |
| Fresh Meadow Green | `#5AAF6E` | Accent |
| Sky Blue | `#7EC8E3` | Supporting |
| Lavender | `#C5B4E3` | Supporting |
| Cream | `#FFF8F0` | Background |

### Homepage (Complete Rethink)
1. **Hero** — WonderBerry, tagline, "A cozy home for bedtime adventures", Read Tonight CTA
2. **Featured Collection** — Meet Ellie, 4 story cards
3. **Why Families Love WonderBerry** — 4 benefit cards
4. **Parent Promise** — No ads, no overstimulation, no endless scrolling
5. **Footer** — Brand, tagline, nav links, copyright

### Navigation (Simplified)
- Home
- Stories
- For Parents

**Hidden:** Sticker Book, Adventures, Games, Play Now CTA

### Story Library
- Premium bookstore feel with large covers, warm gradient background
- Header with WonderBerry branding

### Story Reader
- Warm cream background (no dark mode)
- Picture-book frame with soft shadows
- Large readable typography
- Gentle page transitions preserved

### Micro-interactions
- Card hover lift
- Gentle button bounce on hero CTA
- Soft shadow transitions

## Screenshots

All screenshots in `.po-review/screenshots/v0.6.0/`:

| # | File | Description |
|---|------|-------------|
| 1 | `01-homepage-desktop.png` | Full homepage (desktop) |
| 2 | `02-homepage-mobile.png` | Full homepage (mobile) |
| 3 | `03-library-desktop.png` | Story Library (desktop) |
| 4 | `04-library-mobile.png` | Story Library (mobile) |
| 5 | `05-story01-page1.png` | Story #1 — Tiny Lost Duck |
| 6 | `05-story02-page1.png` | Story #2 — Bubble |
| 7 | `05-story03-page1.png` | Story #3 — Hiccup |
| 8 | `05-story04-page1.png` | Story #4 — Firefly |
| 9 | `09-mobile-reader.png` | Mobile reader |

## Files Changed (Tier 1 — User-Facing)

- `app/globals.css` — WonderBerry color palette
- `app/layout.tsx` — Metadata
- `app/page.tsx` — Complete homepage redesign
- `app/for-parents/page.tsx` — WonderBerry copy
- `app/not-found.tsx` — WonderBerry copy
- `app/stories/page.tsx` — Metadata
- `app/stories/[slug]/page.tsx` — Metadata
- `components/layout/Header.tsx` — Logo, simplified nav
- `components/layout/Footer.tsx` — Brand footer
- `components/story/StoryLibrary.tsx` — Premium library
- `components/story/StoryCard.tsx` — Enhanced cards
- `components/story/StoryReader.tsx` — Warm light theme
- `components/story/StoryPageView.tsx` — Picture-book feel
- `components/story/StoryEndScreen.tsx` — Warm light theme
- `components/ui/Button.tsx` — Berry palette
- `lib/design-tokens.ts` — Token mirror
- `lib/storyAssets.ts` — Reader theme

## Emotional Test

Open http://localhost:3460 and ask:

> "I wish this existed when I was a child."

## Next Steps

1. Product Owner reviews screenshots and live site
2. Provide visual feedback or approval
3. Commit only after approval

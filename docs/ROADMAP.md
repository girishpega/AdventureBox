# AdventureBox — Roadmap

## Philosophy

We ship **complete adventures**, not feature lists.

Each phase delivers a child-ready experience that can be put in front of a real family and produce wonder. We do not ship infrastructure the child cannot feel.

---

## Phase 0 — Discovery & Definition (Current)

**Status:** In progress  
**Goal:** Align on what AdventureBox is before writing code.

| Deliverable | Status |
|---|---|
| Mission, Vision, Principles | Done |
| Competitive analysis | Done |
| Adventure format definition | Done |
| Sprint 0 scope | Done |
| UI inspiration & design language | Done |
| Parent trust model | Defined |
| Age band strategy | Defined |

**Exit criteria:** Team agrees on one adventure (Unicorn) and can describe the five-beat arc in detail.

---

## Phase 1 — The First Box (Sprint 0 → v0.1)

**Timeline:** 4–6 weeks  
**Goal:** One magical Unicorn Adventure, end to end.

### What ships

| Beat | Experience |
|---|---|
| **Open** | Animated box on a shelf. Child taps. Box shakes, glows, opens. |
| **Story** | 3–4 illustrated scenes with narration. Child's name woven in. Unicorn needs help. |
| **Play** | One maze ("help the unicorn cross the rainbow bridge") + one memory game ("match the unicorn's friends"). |
| **Create** | One coloring page (the unicorn's crown). Save to gallery. |
| **Celebrate** | Confetti, music, sticker reward, character says child's name. |

### What does NOT ship

- Multiple themes
- Parent dashboard (beyond basic gate)
- Accounts / child profiles
- Offline mode
- Co-play mode
- In-app purchases
- Second adventure

### Success metrics

| Metric | Target |
|---|---|
| Adventure completion rate | > 70% of starts |
| Celebration reached | > 60% of starts |
| Parent "would recommend" (informal test, n=10 families) | > 8/10 |
| Child asks for another adventure unprompted | > 5/10 |
| Time to complete | 8–15 minutes |

### Technical foundations (minimal)

- Adventure format schema (five-beat JSON structure)
- Theme template system (rails for AI personalization)
- Content safety pipeline (pre-publish validation)
- Parent gate (simple PIN or biometric)
- Local gallery for saved coloring

---

## Phase 2 — The Shelf (v0.2 → v0.5)

**Timeline:** 8–12 weeks after v0.1  
**Goal:** A shelf of 4–6 themed boxes. Repeatable adventure production.

### Features

| Feature | Rationale |
|---|---|
| **4 core themes** | Unicorn, Dinosaur, Space, Princess |
| **Age bands** | Little Adventurers (4–6) vs Big Explorers (7–10) |
| **Adventure shelf UI** | Visual box collection, opened boxes show sticker |
| **Sticker book** | Collectible rewards from celebrations |
| **Parent settings** | Child name, age band, screen time limit, adventure history |
| **Co-play mode** | Parent reads story option, pass-the-iPad prompts |
| **Content pipeline** | Repeatable process to produce a new themed adventure |

### Success metrics

| Metric | Target |
|---|---|
| Adventures per child per week | > 2 |
| Theme diversity (no single theme > 50% of plays) | Balanced |
| 7-day return rate | > 40% |
| Parent NPS (informal) | > 50 |

---

## Phase 3 — Trust & Growth (v0.6 → v1.0)

**Timeline:** 12–16 weeks after v0.5  
**Goal:** Production-ready app with parent trust infrastructure and business model.

### Features

| Feature | Rationale |
|---|---|
| **Parent transparency portal** | "How AdventureBox works" — AI use, data policy, content safety |
| **COPPA compliance** | Verifiable parental consent, data deletion, no third-party sharing |
| **Offline activities** | Maze, coloring, memory work without network once adventure starts |
| **Seasonal boxes** | Holiday, birthday, back-to-school themed adventures |
| **Sibling profiles** | Up to 3 children, separate sticker books |
| **Subscription model** | Free first box; subscription for shelf access |
| **Share celebration** | Parent can save/share celebration moment (not child-initiated) |

### Business model (draft)

| Tier | What |
|---|---|
| **Free** | 1 adventure (Unicorn), unlimited replays |
| **AdventureBox Plus** | Full shelf, new boxes monthly, seasonal boxes, sibling profiles |

No ads. No data selling. No energy systems. No loot boxes.

### Success metrics

| Metric | Target |
|---|---|
| Free → paid conversion | > 5% |
| Monthly churn | < 8% |
| App Store rating | > 4.5 |
| COPPA audit readiness | Pass |

---

## Phase 4 — The Universe (v1.1+)

**Timeline:** Post-launch, driven by data  
**Goal:** Expand the world based on what children actually love.

### Possibilities (not commitments)

| Idea | Trigger to build |
|---|---|
| **Recurring characters** | Children reference characters across adventures unprompted |
| **Custom adventure** | Parents request it; we build carefully, not open-ended AI |
| **Offline-first mode (PEKO-style)** | Travel use case validated by parent feedback |
| **Physical box tie-in** | Partnership or print-on-demand sticker books |
| **Localized adventures** | International expansion with native narration |
| **School/library mode** | Institutional demand validated |

### What we will NOT build (unless evidence changes)

- Open-ended AI chat for children
- User-generated content
- Social features between children
- Competitive leaderboards
- Educational curriculum alignment
- Worksheet export

---

## Roadmap principles

1. **One box at a time.** Each adventure is a product, not content filler.
2. **Child-first validation.** Every phase tested with real children before expanding.
3. **Parent trust is infrastructure.** Not a feature — a foundation built from Sprint 0.
4. **Say no by default.** The roadmap is what we choose not to build, as much as what we build.

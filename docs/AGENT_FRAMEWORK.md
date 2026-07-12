# AdventureBox Agent Framework

**Version:** v0.3.0 — Creative Agent Framework  
**Status:** Awaiting Product Owner review

---

## Why AdventureBox Uses Specialized Agents

AdventureBox is built by one developer on weekends. That constraint is a feature — it forces discipline. Without a studio structure, solo creators drift: stories get inconsistent, Ellie changes shape, scope explodes, and "just one more feature" kills the weekend.

Specialized agents solve this by **separating hats**:

| Problem without agents | Agent solution |
|------------------------|----------------|
| Writer "fixes" art in prompts | Story Writer never generates images |
| Engineer rewrites cute line for layout | Platform Engineer never edits creative |
| Ship because it's Saturday night | Product Owner blocks without review PASS |
| Parent concerns mixed with child fun metrics | Parent and Child reviewers have separate rubrics |
| Brand drift across story #7 | Creative Director final gate on canon |

This is how Pixar runs dailies — adapted for a folder of markdown files and one tired developer on Sunday evening.

### Not an engineering pattern

These agents are **not** LLM bot configurations or microservices. They are **roles** documented in [`agents/`](../agents/). When you work on AdventureBox, you read the relevant agent file, adopt that mindset, produce that agent's outputs, and hand off explicitly.

The framework scales to hundreds of stories because **the pipeline stays the same** — only the story folder changes.

---

## The Eight Agents

| Agent | One-line mission |
|-------|------------------|
| **Story Writer** | Words that make children say "Again!" |
| **Art Director** | One visual world per book |
| **Illustrator** | Execute briefs; QA every pixel |
| **Platform Engineer** | Ship in reader; never touch creative |
| **Product Owner** | Protect scope and releases |
| **Child Reviewer** | Fun, wonder, replay — only |
| **Parent Reviewer** | Trust, safety, bedtime — only |
| **Creative Director** | Brand authority; may reject anything |

Full definitions: [`agents/README.md`](../agents/README.md)

---

## How Stories Flow

### 1. Scope first

Nothing starts without Product Owner written approval. Scope defines title, page count, age band, hero, interaction, and explicit **out of scope** — the weekend protection list.

### 2. Creative production chain

```
Story Writer → Art Director → Illustrator
```

Sequential, not parallel. Art needs story beats. Illustration needs art bible.

**Story Writer** produces the manuscript: logline, emotional arc, page text, scene descriptions, interaction spec.

**Art Director** produces the visual bible: character locks, palette, prompts, cover brief, composition rules.

**Illustrator** generates assets in page order with QA checklist and side-by-side review.

Reference production: [`storybook/`](../storybook/) (*Ellie and the Tiny Lost Duck*).

### 3. Review chain

```
Child Reviewer → Parent Reviewer → Creative Director
```

Each gate has PASS/FAIL and a defined return path. Reviews are **role-played with rubrics** when real users aren't available; real child testing uses [`docs/testing/CHILD_TEST_SCRIPT.md`](./testing/CHILD_TEST_SCRIPT.md).

### 4. Integration and release

```
Creative Director PASS → Platform Engineer → Product Owner → Commit
```

Engineering starts **only** after creative approval. Commit happens **only** after release approval.

Full diagram: [`agents/WORKFLOW.md`](../agents/WORKFLOW.md)

---

## How Reviews Work

### Separation of concerns

Reviews fail when one person checks everything and compromises. AdventureBox splits:

| Reviewer | Sees the world as… | Dimensions |
|----------|-------------------|------------|
| Child Reviewer | Curious 5-year-old | Fun, wonder, curiosity, smiles, replay |
| Parent Reviewer | Bedtime reader | Trust, safety, length, readability, calm, recommend |
| Creative Director | Studio head | Brand, Ellie, premium craft, publishing quality |

Child Reviewer never checks COPPA. Parent Reviewer never checks giggle count. Platform Engineer never appears in review.

### PASS / FAIL is binary

"No notes" is not PASS. Each reviewer completes their rubric and issues:

```
CHILD REVIEW PASS: [Title] · Smiles: Page 2, Page 4 · Replay: Yes
```

or

```
PARENT REVIEW FAIL: [Title] · Failed: calmness · Page 5 too stimulating · Revise
```

### Revision loops

Failures return to the **lowest fixable agent**:

| Failure | Returns to |
|---------|------------|
| Child or Parent (text/tone) | Story Writer |
| Child or Parent (visual safety) | Art Director → Illustrator |
| Creative Director (visual) | Art Director → Illustrator |
| Creative Director (narrative) | Story Writer (+ re-review if material) |

Maximum **2 revision cycles** per reviewer, then Product Owner HOLD.

### Review order is fixed

Child before Parent before Creative Director. A story that fails the child on wonder but passes a parent's safety check still **does not ship**.

---

## How Releases Are Approved

### Two Product Owner gates

1. **Scope approval** — before Story Writer starts
2. **Release approval** — after Platform Engineer preview

Between them, three creative review PASSes and one Creative Director PASS are mandatory.

### Release checklist (summary)

Product Owner verifies:

- Scope fidelity (no smuggled features)
- Child + Parent + Creative Director PASS documented
- No placeholder assets in reader
- Parent trust surfaces still accurate
- Version bump and release notes ready
- Weekend scope respected

### PASS → Commit

Only Product Owner authorizes commit:

```
RELEASE PASS: [Title] · v0.3.x · Commit authorized
```

### HOLD → Return

HOLD includes **return path** — which agent fixes what. No ambiguous "needs work."

### HARD STOP

Safety, privacy regression, or Ellie canon violation in production → halt, do not patch forward.

Full rules: [`agents/05_product_owner.md`](../agents/05_product_owner.md)

---

## Relationship to Product Principles

The agent framework implements [`PRODUCT_PRINCIPLES.md`](./PRODUCT_PRINCIPLES.md):

| Principle | Agent enforcement |
|-----------|-------------------|
| Wonder before technology | Story Writer never mentions AI; Engineer never exposes it |
| Complete adventures | Product Owner scope includes full arc |
| Rails, not prompts | Story Writer structure; fixed page beats |
| Two audiences | Child + Parent separate reviewers |
| Play, not school | Parent Reviewer rejects educational tone |
| Celebration is sacred | Story Writer lands end line; Engineer wires celebration |
| Small, polished, complete | Product Owner weekend scope limits |

---

## Relationship to Brand

Creative agents reference [`brand/`](../brand/) as source of truth:

- **Art Director + Illustrator** → illustration style, colors, typography
- **Creative Director** → Ellie canon via [`focus-sprint/ELLIE_CHARACTER_SHEET.md`](../focus-sprint/ELLIE_CHARACTER_SHEET.md)
- **Story Writer** → character personality from [`brand/CHARACTERS.md`](../brand/CHARACTERS.md)

A story that passes reviews but drifts from brand **still fails** at Creative Director.

---

## How Future Agents Can Be Added

The framework is extensible. New agents **insert into the workflow** — they do not replace existing roles.

### Extension rules

1. **Single mission** — one agent, one clear output
2. **Defined handoff** — inputs, outputs, message template
3. **No overlap** — if two agents edit the same artifact, merge or split differently
4. **Review agents stay narrow** — never add "General QA" that duplicates Child + Parent + Creative Director
5. **Document insertion point** in WORKFLOW.md before first use

### Candidate future agents

| Agent | Insert after | Before | Purpose |
|-------|--------------|--------|---------|
| **Sound Designer** | Illustrator | Platform Engineer | Page-turn sounds, celebration audio |
| **Narration Director** | Story Writer | Art Director | Read-aloud pacing, emphasis marks |
| **Interaction Designer** | Story Writer | Art Director | Tap targets, adventure game specs |
| **Localization Editor** | Parent Review | Creative Director | Translate without losing calm tone |
| **QA Engineer** | Platform Engineer | Product Owner | Automated a11y/perf regression |
| **Marketing Writer** | Product Owner release | External comms | App Store copy from approved logline |

### Adding an agent — checklist

- [ ] Create `agents/NN_agent_name.md` with full template (mission, I/O, never, success, handoff)
- [ ] Update [`agents/README.md`](../agents/README.md) team table
- [ ] Update [`agents/WORKFLOW.md`](../agents/WORKFLOW.md) diagram and phases
- [ ] Update this document's future agents table
- [ ] Product Owner approves framework change (meta-scope)

### What not to add

- "Full stack" agents that write + illustrate + code
- Agents that skip review gates
- Agents that commit without Product Owner
- Per-story custom workflows (breaks scale)

---

## Operating Model — Solo Developer as Studio

### Session ritual

1. Open the story folder
2. Read current phase in WORKFLOW.md
3. Open current agent file
4. Produce that agent's deliverables only
5. Write handoff message (templates in agent files)
6. Switch hats — explicitly

### Artifacts per story

```
stories/[slug]/          or          storybook/
├── README.md            Publishing summary (Story Writer)
├── ART_DIRECTION.md     Visual bible (Art Director)
├── COVER.md             Cover brief (Art Director)
├── PAGE_01.md …         Page briefs + prompts
├── assets/              Production PNGs (Illustrator)
└── REVIEWS.md           Optional: PASS/FAIL log (recommended)
```

### Scale target

One developer · one story per weekend · hundreds of stories over years · consistent quality via same pipeline.

---

## Version History

| Version | Milestone |
|---------|-----------|
| v0.2.x | Creative Foundation — brand, Ellie, first premium story, Story Reader |
| **v0.3.0** | **Creative Agent Framework — this document** |
| v0.4.x+ | Stories produced exclusively through agent pipeline |

---

## Further Reading

| Document | Purpose |
|----------|---------|
| [`agents/README.md`](../agents/README.md) | Team roster and folder guide |
| [`agents/WORKFLOW.md`](../agents/WORKFLOW.md) | Full pipeline with revision loops |
| [`docs/MISSION.md`](./MISSION.md) | Why AdventureBox exists |
| [`docs/PRODUCT_PRINCIPLES.md`](./PRODUCT_PRINCIPLES.md) | Decision framework |
| [`storybook/README.md`](../storybook/README.md) | Reference premium story package |
| [`docs/testing/CHILD_TEST_SCRIPT.md`](./testing/CHILD_TEST_SCRIPT.md) | Real child observation protocol |

---

*AdventureBox Agent Framework · v0.3.0 · The operating system for a weekend publishing studio · Awaiting Product Owner review*

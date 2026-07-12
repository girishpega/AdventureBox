# AdventureBox Creative Team

**Version:** v0.3.1 — Future Studio Agents  
**Status:** Awaiting Product Owner review

---

## What This Is

This folder is the **operating system** for AdventureBox's publishing studio.

AdventureBox is not built story-by-story in isolation. It is built by a **small creative team** — eight active agents today, five documented for tomorrow — each with a clear mission, inputs, outputs, and handoff rules. One developer runs the studio on weekends. These agents ensure every future premium story ships with Pixar-level consistency, not one-off improvisation.

This is **not** engineering documentation. It is how a children's publishing studio operates.

---

## The Team — Active (v0.3.0)

These eight agents run **today's** story pipeline. Use them for every weekend sprint.

| # | Agent | Role | Authority |
|---|-------|------|-----------|
| 01 | [Story Writer](./01_story_writer.md) | Writes every word the child hears or reads | Creative |
| 02 | [Art Director](./02_art_director.md) | Owns visual consistency and illustration briefs | Creative |
| 03 | [Illustrator](./03_illustrator.md) | Generates and QA's production artwork | Creative |
| 04 | [Platform Engineer](./04_platform_engineer.md) | Ships stories in the reader — never edits creative | Engineering |
| 05 | [Product Owner](./05_product_owner.md) | Protects scope, approves releases | Product |
| 06 | [Child Reviewer](./06_child_reviewer.md) | Tests fun, wonder, and replay desire | Review |
| 07 | [Parent Reviewer](./07_parent_reviewer.md) | Tests trust, safety, and bedtime fit | Review |
| 08 | [Creative Director](./08_creative_director.md) | Final creative authority — protects the brand | Creative |

---

## Future Studio Agents — Inactive (v0.3.1)

These five agents are **documented but inactive**. They do not participate in today's workflow. They activate when AdventureBox reaches approximately **20 stories**, **5 characters**, **printable books**, **audiobooks**, or **multiple languages**.

| # | Agent | Role | Activates when |
|---|-------|------|----------------|
| 09 | [Lore Keeper](./09_lore_keeper.md) | Protects continuity — canon, timeline, relationships | ~10+ stories, crossovers, memory fails |
| 10 | [Library Curator](./10_library_curator.md) | Organizes collections, shelves, recommendations | ~8+ stories, crowded library |
| 11 | [Print Production Director](./11_print_production_director.md) | PDF, KDP, print QA | First print SKU approved |
| 12 | [Narration Director](./12_narration_director.md) | Read-aloud pacing, emotion, sound timing | Audiobook / narration feature |
| 13 | [Translation & Localization](./13_translation_localization.md) | Translate without losing magic | First non-English locale |

See [`docs/AGENT_FRAMEWORK.md`](../docs/AGENT_FRAMEWORK.md) — Future Expansion.

---

## How to Use This Folder

### Starting a new story

1. Read [WORKFLOW.md](./WORKFLOW.md) end-to-end.
2. Product Owner approves scope (title, age band, theme, page count).
3. Run agents in order. Do not skip reviews.
4. Only commit after Product Owner release approval.

### During production

- Each agent reads their own file before acting.
- Each agent reads the **Inputs** section of the next agent's file before handoff.
- Revision loops are mandatory — not optional polish.

### Reference documents (outside this folder)

| Document | Used by |
|----------|---------|
| [`docs/MISSION.md`](../docs/MISSION.md) | All agents |
| [`docs/PRODUCT_PRINCIPLES.md`](../docs/PRODUCT_PRINCIPLES.md) | Product Owner, Story Writer, reviewers |
| [`docs/VISION.md`](../docs/VISION.md) | Product Owner, Creative Director |
| [`brand/`](../brand/) | Art Director, Illustrator, Creative Director |
| [`focus-sprint/ELLIE_CHARACTER_SHEET.md`](../focus-sprint/ELLIE_CHARACTER_SHEET.md) | Art Director, Illustrator |
| [`storybook/ART_DIRECTION.md`](../storybook/ART_DIRECTION.md) | Art Director, Illustrator (reference template) |

---

## Workflow at a Glance

See [WORKFLOW.md](./WORKFLOW.md) for the full diagram with revision loops.

```
Product Owner (scope)
    ↓
Story Writer
    ↓
Art Director
    ↓
Illustrator
    ↓
Child Reviewer ──fail──→ Story Writer
    ↓ pass
Parent Reviewer ──fail──→ Story Writer
    ↓ pass
Creative Director ──fail──→ Art Director (+ Illustrator)
    ↓ pass
Platform Engineer
    ↓
Product Owner (release)
    ↓
Commit
```

---

## Adding Future Agents

Agents 09–13 are pre-documented. Additional agents (Sound Designer, QA Engineer, Marketing Writer) slot into the workflow when needed — they do not replace existing roles.

| Agent | Insertion point | Status |
|-------|-----------------|--------|
| Lore Keeper | After Story Writer, before Art Director | Documented — inactive |
| Narration Director | After story text locked; parallel to art | Documented — inactive |
| Print Production Director | After Creative Director PASS; parallel track | Documented — inactive |
| Translation & Localization | After English ships | Documented — inactive |
| Library Curator | After Platform Engineer; before release | Documented — inactive |
| Sound Designer | After Illustrator, before Platform Engineer | Not yet documented |
| QA Engineer | After Platform Engineer, before Product Owner | Not yet documented |

See [`docs/AGENT_FRAMEWORK.md`](../docs/AGENT_FRAMEWORK.md) for activation rules and extension checklist.

---

## Quality Bar

Every AdventureBox premium story should sit comfortably beside:

- *The Gruffalo* — Julia Donaldson
- *The Very Hungry Caterpillar* — Eric Carle
- Pixar picture book editions

If a story would not survive on a parent's bedside table, it does not ship.

---

*AdventureBox Creative Team · v0.3.1 · No code · No commits · Awaiting Product Owner review*

# AdventureBox Creative Team

**Version:** v0.3.0 — Creative Agent Framework  
**Status:** Awaiting Product Owner review

---

## What This Is

This folder is the **operating system** for AdventureBox's publishing studio.

AdventureBox is not built story-by-story in isolation. It is built by a **small creative team** — eight specialized agents — each with a clear mission, inputs, outputs, and handoff rules. One developer runs the studio on weekends. These agents ensure every future premium story ships with Pixar-level consistency, not one-off improvisation.

This is **not** engineering documentation. It is how a children's publishing studio operates.

---

## The Team

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

When AdventureBox grows, new agents slot into the workflow — they do not replace existing ones.

| Future agent | Likely insertion point |
|--------------|------------------------|
| Sound Designer | After Illustrator, before Platform Engineer |
| Narration Director | After Story Writer, before Art Director |
| Localization Editor | After Parent Review, before Creative Director |
| QA Engineer | After Platform Engineer, before Product Owner release |

See [`docs/AGENT_FRAMEWORK.md`](../docs/AGENT_FRAMEWORK.md) for extension rules.

---

## Quality Bar

Every AdventureBox premium story should sit comfortably beside:

- *The Gruffalo* — Julia Donaldson
- *The Very Hungry Caterpillar* — Eric Carle
- Pixar picture book editions

If a story would not survive on a parent's bedside table, it does not ship.

---

*AdventureBox Creative Team · v0.3.0 · No code · No commits · Awaiting Product Owner review*

# AdventureBox — Product Principles

Permanent principles for AdventureBox engineering and publishing decisions.

---

## AdventureBox is a publishing studio

AdventureBox is **not** a website. It is a children's publishing studio.

The website is **one reader** of our stories — not the product itself.

---

## Story Bundle is the source of truth

Every story ships as a **Story Bundle**:

```
stories/<slug>/
  story.json
  cover.webp
  page01.webp … pageNN.webp
  sticker.webp (optional)
```

The bundle is the **only** source of truth.

Website, PDF, Amazon KDP, Kindle, YouTube, and future mobile apps all consume the **same bundle**.

---

## Roles

| Layer | Responsibility |
|-------|----------------|
| **Studio** (`studio/`) | Creates — prompts, moodboards, character sheets, work-in-progress art |
| **Story Bundle** (`stories/`) | Ships — finished story text + premium artwork |
| **Website** | Displays — homepage, library, and reader only |

The website must **never** generate illustrations.  
The website must **never** own illustrations.  
It simply displays Story Bundle assets.

---

## Placeholder policy

**Published stories never use placeholder artwork.**

If premium artwork is not ready, show **✨ Coming Soon** — never SVG fallbacks.

---

## Simplicity over cleverness

This project is maintained by **one developer**.

When choosing between simple and clever — **always choose simple**.

Do not introduce engineering complexity unless it removes significant long-term manual work.

No sync scripts. No CMS. No publishing pipelines. No duplicate illustration systems.

---

## Reusability

Every Story Bundle should be reusable across:

- Website reader
- PDF export
- YouTube slides
- Kindle / print (KDP)

One bundle. Many channels.

---

## Decision test

Before building anything, ask:

1. Does this strengthen the Story Bundle as source of truth?
2. Does this keep the website a reader — not a publisher?
3. Would a solo developer still maintain this in five years?

If not — don't build it.

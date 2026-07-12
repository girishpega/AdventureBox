# Focus Sprint: One Character. One Story. One Smile.

**AdventureBox MVP · Ellie and the Tiny Lost Duck**

---

## Sprint Verdict Target

Creative Review Board said **HOLD** because we built a universe before building one unforgettable character.

This sprint fixes that.

| Before | After |
|--------|-------|
| 5 characters | **1 face: Ellie** 🐘 |
| Story library | **1 story** |
| Text mood board | **Visual mood board** |
| Missing box icon | **AdventureBox designed** |
| SVG placeholders | **Production illustrations** |

**Pip** → supporting character, future stories only.  
**Finn, Nova, Sage** → [FUTURE_IDEAS.md](./FUTURE_IDEAS.md)

---

## Package Contents

| # | Deliverable | File |
|---|-------------|------|
| 1 | Premium book cover | [COVER.md](./COVER.md) · `assets/cover.png` |
| 2 | Five illustrated pages | [pages/](./pages/) · `assets/page-01.png` … `page-05.png` |
| 3 | Ellie character sheet | [ELLIE_CHARACTER_SHEET.md](./ELLIE_CHARACTER_SHEET.md) · `assets/ellie-character-sheet.png` |
| 4 | AdventureBox icon | [ADVENTUREBOX_ICON.md](./ADVENTUREBOX_ICON.md) · `assets/adventurebox-icon.png` |
| 5 | Visual mood board | [MOOD_BOARD.md](./MOOD_BOARD.md) · `assets/moodboard/` |
| 6 | Reality check | Below |

---

## Story Text (Locked)

| Page | Line 1 | Line 2 |
|------|--------|--------|
| 1 | Ellie heard a peep. | Something tiny was calling. |
| 2 | A duckling sat alone. | Ellie knelt down softly. |
| 3 | "Where did you go?" | Tap the grass to help Ellie look. |
| 4 | Peep! | The duck was in her trunk! |
| 5 | Side by side they walked. | The meadow glowed goodnight. |

---

## Reality Check

*Honest assessment after asset generation. No code was written.*

### Would a parent stop scrolling to open this?

**Likely yes** for the cover and page 4. The golden-hour meadow cover with Ellie kneeling toward Tiny Duck reads as **picture book**, not app. It has the warmth of a Scholastic bedtime title. The AdventureBox icon (purple box, golden star clasp, light spilling out) finally gives the brand a visual anchor the character roster never did.

**Caveat:** Title and wordmark are not yet composited onto the cover — Product Owner must approve final cover lockup.

### Would a 5-year-old ask for this story again?

**Probably yes** if page 4 lands in person. The trunk splash is genuinely funny. Page 2's size contrast creates instant empathy. Page 5's sunset walk is cozy closure.

**Caveat:** Real child test not yet run. This remains a hypothesis until a 5-year-old sees page 4 unprompted.

### Would this look at home beside Scholastic, Usborne, or Disney?

**Cover and pages: approaching yes.** Painterly texture, golden light, emotional readability — the bar is met for MVP review.

**Not yet:** Spine design, endpapers, title page, ISBN block, author line. Those come after PO approves illustrations.

### Known issues (fix before print)

| Issue | Detail | Fix |
|-------|--------|-----|
| Eye color drift | Page 4 Ellie reads blue-eyed; canon is amber-brown | Regenerate page 4 against character sheet |
| Cross-page consistency | Ellie gray tone varies slightly page to page | Use character sheet as img2img reference |
| Page 3 text | "Tap the grass…" is UI instruction, not pure story | Accept for digital; optional print variant |
| Cover lockup | No title/wordmark on cover art yet | Design overlay in Figma |

### Sprint verdict

| Criterion | Pass? |
|-----------|-------|
| Ellie feels like a real character | **Yes** — character sheet + cover prove it |
| Cover looks premium | **Yes** — pending title overlay |
| Five pages feel like a picture book | **Yes** — with page 4 eye-color fix |
| AdventureBox is recognizable | **Yes** — box icon works |
| Excited to read aloud | **Yes** — team should read it tonight |

**Recommend:** Product Owner visual review → fix page 4 eyes → child test → then drop assets into existing reader (no new architecture).

---

*Do not commit · Await Product Owner visual review*

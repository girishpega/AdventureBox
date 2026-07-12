# AdventureBox — Child Test Script

**Purpose:** Observe how a real child (ages 4–10) experiences the Princess adventure without coaching. This is not a usability lab — it's a smile test.

**Version tested:** v0.2.1  
**Adventure:** Princess & Unicorn (`/adventure/princess`)  
**Duration:** 15–20 minutes total (including setup and parent debrief)

---

## Before You Begin

### Setup

1. Use a tablet or phone if possible — that's how most children will play
2. Open `/adventure/princess` in a fresh browser (or clear localStorage for a true first-time experience)
3. Set volume to a comfortable level (sound activates on first tap)
4. Have paper ready for notes — don't record video unless the parent explicitly consents

### Who should be in the room

- **The child** (primary user)
- **One parent or guardian** (observer, not coach)
- **You** (silent observer with notes)

---

## How to Observe

### Your job

Watch. Take notes. Do not help unless the child is visibly distressed.

### What to watch for

| Moment | Watch for |
|---|---|
| **Landing page** | Does the child know where to tap? Do they notice the box? |
| **Box open** | Immediate smile? Hesitation? Do they understand "tap the box"? |
| **Story** | Do they tap "Next" without prompting? Do they look at illustrations or text? |
| **Maze** | Do they discover tap-to-move or arrow keys? Do they get frustrated? |
| **Coloring** | Do they understand tap-to-fill? Do they find undo/reset? |
| **Celebration** | Smile? Excitement about sticker? Do they want to play again? |
| **Sticker book** | Do they navigate back to see their sticker? Do locked stickers intrigue them? |

### Note template

```
Child age: ___
Device: ___
Date: ___

Box open:     😊 / 😐 / 😟   Notes: ___
Story:        😊 / 😐 / 😟   Notes: ___
Maze:         😊 / 😐 / 😟   Notes: ___
Coloring:     😊 / 😐 / 😟   Notes: ___
Celebration:  😊 / 😐 / 😟   Notes: ___

Needed help at: ___
Asked to play again: Yes / No
Total time: ___ minutes
```

---

## Questions for Parents (After the Session)

Ask these **after** the child has left or is occupied — not in front of them.

1. Would you hand this to your child again without worry?
2. Did anything feel unsafe, confusing, or too long?
3. Would you recommend AdventureBox to another parent?
4. Did the "For Parents" page answer your questions?
5. Was the session length appropriate (3–5 minutes)?
6. Did you notice anything that made you trust or distrust the experience?

---

## Success Criteria

The sprint passes child testing when **all** of the following are true:

| Criterion | Target |
|---|---|
| Child completes adventure without adult coaching | Yes |
| Child smiles at least twice during the session | Yes |
| Child understands box open without explanation | Yes |
| Child reaches celebration | Yes |
| Child wants to play again (unprompted or when asked) | Yes |
| Parent says they would trust it again | Yes |
| Session completes in under 8 minutes | Yes |

**Partial pass:** Child completes with one hint (e.g., "try tapping the box") — note what needed help and fix in next sprint.

**Fail:** Child abandons before celebration, shows frustration, or parent expresses distrust.

---

## Things NOT to Say During Testing

Do **not** coach the child. Avoid:

| Don't say | Why |
|---|---|
| "Tap the box!" | Tests whether UI communicates itself |
| "Use the arrow keys" | Tests discoverability of maze controls |
| "Pick a color first" | Tests coloring UX clarity |
| "Click Next" | Tests button affordance |
| "You're doing great!" | Creates performance pressure |
| "This is an app I built" | Shifts from natural play to politeness |
| "There's a sticker at the end" | Tests intrinsic motivation |

### If the child is stuck for 30+ seconds

Wait. Note the timestamp and what they're looking at.

If still stuck at 60 seconds, you may say **one** neutral prompt:

> "What do you think you should tap?"

That's it. No further hints.

### If the child is distressed or bored

Stop the session gently. Note where they stopped. That's valuable data.

---

## After Testing

1. File notes in the sprint review
2. List top 3 delight moments
3. List top 3 friction moments
4. Recommend PASS or HOLD for release
5. Propose fixes only for friction that blocked smiles — not preferences

---

## Remember

> The goal is observation, not coaching.

We're not testing whether the child is smart enough for AdventureBox. We're testing whether AdventureBox is magical enough for the child.

If they smile, we win.

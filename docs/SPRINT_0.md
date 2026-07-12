# AdventureBox — Sprint 0

## Sprint goal

**Prove the adventure format works.**

Ship one complete Unicorn Adventure that a real child (age 4–7) can play from box-open to celebration — and ask to play again.

No code required in this sprint. This document defines what Sprint 0 produces and how we validate it.

---

## Sprint 0 is NOT about

- Building an app
- Choosing a tech stack
- Designing a logo
- Setting up CI/CD
- Writing API specs

## Sprint 0 IS about

- Defining the exact experience beat by beat
- Creating a clickable prototype or storyboard
- Testing with 5–10 real families
- Proving the five-beat arc produces wonder

---

## The adventure: Unicorn Adventure

### Theme

A shy unicorn named **Luma** has lost the colors of the Rainbow Bridge. The child helps Luma find them by listening to a story, solving a maze, matching friends, coloring a crown, and celebrating at the Rainbow Festival.

### Emotional arc

| Beat | Emotion | Child feeling |
|---|---|---|
| Open | Anticipation | "What's inside?!" |
| Story | Empathy | "I want to help Luma!" |
| Play | Determination | "I can do this!" |
| Create | Pride | "This is MY crown!" |
| Celebrate | Joy | "We did it!" |

---

## Beat-by-beat specification

### Beat 1: Open (30 seconds)

**What the child sees:**
- A wooden shelf with one glowing box
- The box has a unicorn emblem and the child's name on a tiny nameplate
- The box shakes gently, glows, and opens with a soft chime
- Sparkles float out. Luma the unicorn peeks out.

**Interactions:**
- Single tap to open
- No text. No menu. No choices.

**Sound:**
- Magical chime (think: music box + wind chimes)
- Soft gasp from Luma

**Success criteria:**
- Child taps without instruction
- Child shows visible excitement (smile, lean in, vocal reaction)

---

### Beat 2: Story (2–3 minutes)

**What the child sees:**
- 3 illustrated scenes, full screen, with narration
- Scene transitions are gentle wipes (not jarring cuts)

**Scene 1 — The Problem**
> "High above the Cloud Kingdom, there was a unicorn named Luma. Luma loved rainbows more than anything. But one morning, the Rainbow Bridge lost all its colors! Luma was so sad."

**Scene 2 — The Call**
> "Luma looked at [child's name] and whispered, 'Will you help me find the colors?'"

**Scene 3 — The Journey Begins**
> "Together, Luma and [child's name] set off across the Sparkle Meadow. But the path was tangled! They would need to be brave and clever."

**Interactions:**
- Tap to advance scenes (big "next" sparkle button)
- Optional: child taps Luma to hear her giggle

**Personalization (AI backstage):**
- Child's name appears in narration (collected during parent setup)
- Optional: child's favorite color mentioned as "Luma's favorite color too"

**Success criteria:**
- Child listens to all 3 scenes without skipping
- Child can retell the problem in their own words ("The rainbow lost its colors!")

---

### Beat 3: Play (3–5 minutes)

#### Activity 3a: Maze — "Cross the Sparkle Meadow"

**What the child sees:**
- A simple top-down maze with Luma at the start and a rainbow gate at the end
- Flowers and butterflies as decorations (not obstacles)
- Luma leaves a sparkle trail as she moves

**Mechanics:**
- Drag Luma through the maze (not tap-to-move — dragging feels more tactile)
- No timer. No dead ends that punish. Wrong turns just bounce gently.
- Age band 4–6: 3-turn maze. Age band 7–10: 5-turn maze with one simple junction.

**On completion:**
- Rainbow gate glows. Luma cheers. "You found the way!"

#### Activity 3b: Memory — "Match Luma's Friends"

**What the child sees:**
- 6 cards (3 pairs): a fairy, a dragon, a bunny — all Luma's friends
- Cards flip with a satisfying animation

**Mechanics:**
- Standard memory match
- Age band 4–6: 4 cards (2 pairs). Age band 7–10: 6 cards (3 pairs).
- No penalty for wrong matches. Cards just flip back with a gentle "try again" sound.

**On completion:**
- All friends appear together and wave. "Luma's friends are here to help!"

**Success criteria:**
- Child completes both activities without frustration (no tears, no abandonment)
- Child completes both within 5 minutes

---

### Beat 4: Create (2–3 minutes)

**What the child sees:**
- A beautiful line-art crown with unicorn horn and stars
- A palette of 6 colors (not 24 — choice paralysis is real for young children)
- Brush is large, forgiving, and makes a satisfying "paint" sound

**Mechanics:**
- Tap color, drag to fill regions (tap-to-fill, not free-draw — cleaner results for ages 4–6)
- Age band 7–10: optional free-draw mode with thinner brush
- "Done" button appears after at least 3 regions are colored

**On completion:**
- Crown animates onto Luma's head
- Luma bows. "This crown is beautiful, [child's name]!"

**Save:**
- Crown saved to a simple gallery (accessible from parent settings in later sprints)

**Success criteria:**
- Child colors at least half the crown
- Child shows the screen to a parent or sibling ("Look what I made!")

---

### Beat 5: Celebrate (30–60 seconds)

**What the child sees:**
- Full-screen celebration: confetti, rainbow light, music
- Luma wearing the child's crown, dancing
- All friends from the memory game appear and cheer
- A sticker appears: "Rainbow Helper" with the child's name and date

**Sound:**
- Triumphant but gentle music (not loud or startling)
- Luma says: "Thank you, [child's name]! You saved the Rainbow Bridge!"

**Interactions:**
- Tap confetti to make more fall
- Tap sticker to stick it in the sticker book (placeholder in Sprint 0)
- "Open another box?" button appears after 10 seconds (disabled in Sprint 0 — only one box)

**Success criteria:**
- Child smiles or laughs during celebration
- Child taps the sticker
- Child asks to play again or asks about another box

---

## Sprint 0 deliverables

| # | Deliverable | Format | Owner |
|---|---|---|---|
| 1 | Beat-by-beat storyboard (all 5 beats) | Figma or paper | Design |
| 2 | Clickable prototype (beats 1, 2, 5 minimum) | Figma prototype | Design |
| 3 | Narration script with personalization points | Google Doc | Content |
| 4 | Maze + memory game paper prototypes | Physical printout | Design |
| 5 | Coloring page (crown line art) | PDF / Procreate | Illustration |
| 6 | Celebration animation (storyboard or Lottie) | Figma / After Effects | Animation |
| 7 | Parent setup flow (name + age) | Wireframe | Design |
| 8 | Content safety rules document | Markdown | Product |
| 9 | Family test protocol | Markdown | Product |
| 10 | Test results from 5–10 families | Report | Product |

---

## Family test protocol

### Who to test with

- 5–10 families
- Children aged 4–7 (core Sprint 0 band)
- Mix of boys and girls
- At least 2 families where parent is skeptical of screen time
- At least 1 family where parent is skeptical of AI

### How to test

1. **Parent setup** (2 min): Parent enters child's name and age on a simple form (paper or Google Form).
2. **Hand iPad to child** (no instructions from parent).
3. **Observe silently** for the full adventure (8–15 min).
4. **Ask child** (after): "What happened? Who did you help? What was your favorite part?"
5. **Ask parent** (after): "How did that feel? Would you let them do another? Any concerns?"

### What to measure

| Signal | How |
|---|---|
| Engagement | Did the child finish? Where did they drop off? |
| Wonder | Facial expressions, vocal reactions, leaning in |
| Comprehension | Can the child retell the story? |
| Pride | Did they show the coloring to someone? |
| Trust | Parent comfort level (1–5 scale) |
| Repeat desire | Did the child ask to play again? |

### Pass / fail

**Sprint 0 passes if:**

- ≥ 70% of children complete the adventure (reach celebration)
- ≥ 60% of children show the coloring or celebration to someone
- ≥ 50% of children ask to play again
- ≥ 80% of parents rate comfort at 4 or 5
- 0 parents raise safety concerns they won't move past

**Sprint 0 fails if:**

- Any child cries or shows frustration during play activities
- Any parent refuses a second session
- Average completion time exceeds 20 minutes (too long for the age band)
- Any child says "what do I type?" or "what do I do?" before tapping the box

---

## Content safety rules (Sprint 0)

| Rule | Detail |
|---|---|
| No open-ended AI | All story text is templated with variable slots |
| No new characters | Only Luma, fairy, dragon, bunny — predefined |
| No scary content | No darkness, no villains, no loud sounds, no failure |
| No external links | Child screen has zero navigation out |
| No data collection from child | Only name and age, entered by parent |
| No social features | No sharing initiated by child |
| Name validation | No profanity, no special characters, max 20 chars |

---

## What comes after Sprint 0

If Sprint 0 passes:

1. **Sprint 1:** Build the Unicorn Adventure as a native app (iOS first)
2. **Sprint 2:** Add Dinosaur Adventure using the same five-beat template
3. **Sprint 3:** Build the shelf UI and sticker book

If Sprint 0 fails:

1. Analyze drop-off points
2. Revise the failing beat(s)
3. Re-test with 5 new families
4. Do not write code until the format is validated

---

## Sprint 0 timeline

| Week | Activity |
|---|---|
| Week 1 | Storyboard all 5 beats. Write narration script. Create crown coloring art. |
| Week 2 | Build clickable prototype (Figma). Paper prototypes for maze and memory. |
| Week 3 | Internal team walkthrough. Fix obvious issues. |
| Week 4 | Family testing (5–10 families). Collect results. |
| Week 5 | Analyze results. Go/no-go decision. |

**Total: 5 weeks. Zero code.**

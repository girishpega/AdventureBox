# Publishing Agent Documentation — v0.8.0

**WonderBerry Publishing Edition**

---

## Active Publishing Agents

| Agent | File | Status | Role |
|-------|------|--------|------|
| **17 Illustration Integrity Reviewer** | `agents/17_illustration_integrity_reviewer.md` | **ACTIVE** | Block cropped/distorted artwork |
| **11 Print Production Director** | `agents/11_print_production_director.md` | **ACTIVE** | PDF, KDP, print specs |
| **18 Export Validation Reviewer** | `agents/18_export_validation_reviewer.md` | **ACTIVE** | Compare all export destinations |
| **08 Creative Director** | `agents/08_creative_director.md` | Active | Brand authority |

---

## Publishing Pipeline (v0.8.0)

```
Ellie Collection COMPLETE (9 stories, content frozen)
        ↓
Illustration Integrity Reviewer (17)
        ↓ PASS
Print Production Director (11) — parallel with digital
        ↓
Product Owner — publishing release
```

---

## Agent 17 — Quick Reference

**Run automated review:**
```bash
node publisher/scripts/review-illustration-integrity.mjs
```

**Fix cover crop pipeline:**
```bash
node publisher/scripts/reconvert-covers.mjs
```

**HOLD triggers:** Any crop, stretch, aspect ratio violation, text over faces.

---

## Agent 11 — Quick Reference

**Outputs (when built):**
- `publisher/exports/output/{slug}/interior.pdf`
- `publisher/exports/output/{slug}/cover.pdf`
- KDP metadata JSON

**Specs:** `publisher/amazon/kdp-specs.md`

---

## Inactive Agents (Unchanged)

Agents 09, 10, 12, 13 remain inactive. Agents 14–16 do not exist.

---

## Content Freeze

- No Story #10
- No Pip, Nova, Finn, Sage
- No new characters
- Ellie Collection (9 stories) is COMPLETE

---

*WonderBerry Publishing · Agent Documentation · v0.8.0*

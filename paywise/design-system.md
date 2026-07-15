# Paywise — Component Library (source of truth)

Governs font, colour, buttons, inputs, spacing for the Paywise prototype (HDFC health-insurance assignment). Apply these rules to every edit. Canonical reference: the "Component Library" screen inside `index.html` + `uploads/Component Library.png`.

---

## Color System — WCAG AAA compliant

**Core rule:** Text stays **dark (7:1+)**. Colour lives in **fills, tints, icons & borders (3:1)**. Never colour alone — always pair with an icon/label (✓ covered, ✗ excluded).

### Text & surfaces (dark on light — the AAA base)
| Role | Hex | Contrast |
|------|-----|----------|
| Ink (primary text) | `#081220` | 18:1 |
| Secondary | `#3C4656` | 9:1 |
| Muted | `#4C5666` | 7:1 |
| Page (background) | `#F5F8FC` | — |
| Card | `#FFFFFF` | — |

### Semantic colour families (each: Tint / Fill / Text)
| Family | Meaning | Text hex | Notes |
|--------|---------|----------|-------|
| **Blue** | Trust / Primary — links & accents (link is primary) | `#1E40AF` (6.6:1) | Fill/button white 6.3:1; tint = ink on tint 14:1 |
| **Emerald** | Health / Covered — positive, what's covered | `#065F46` (7.9:1) | Fill/icon white 4.8:1 |
| **Violet** | AI — the assistant / recommendations | `#5B2186` (8.9:1) | Fill/accent white 4.7:1 |
| **Amber** | Value / Best — badges, highlights | `#92400E` (8:1) | Fill/badge ink 8:1 |
| **Red** | Exclusions / Error — what's not covered | `#991B1B` (7.7:1) | Icon white 3.9:1 |

### Interaction + sizing rules
- Body **16px min** — never below **14px** for meaningful text · line-height **≥ 1.4**
- Tap targets **≥ 44×44px** · icon buttons padded to size
- **Focus ring: 2px `#2563EB` + 2px offset** on every interactive element
- Primary button states: Default / Hover / Pressed / Focus / Disabled

---

## Type System

Display & headings: **Bricolage Grotesque** · UI & body: **Inter** · min 12px · line-height ≥ 1.4

| Style | Font / size / lh | Example |
|-------|------------------|---------|
| Display – Hero | Bricolage ExtraBold · 30/36 | ₹10 Lakhs |
| Heading 1 | Bricolage Bold · 24/30 | Being healthy lowers risk. |
| Heading 2 | Bricolage Bold · 19/26 | Compare plans |
| Heading 3 – Card | Inter SemiBold · 16/22 | Aster ActivSecure |
| Label – Eyebrow | Inter Bold · 12/16 · +0.6 tracking · UPPERCASE | COVER AMOUNT |
| Body | Inter Regular · 16/24 | These can happen to anyone. |
| Body Medium | Inter Medium · 16/24 | View full plan details → |
| Caption | Inter Regular · 12/16 | Aster Health Insurance · ₹10L cover |
| Price | Inter ExtraBold · 18/22 | ₹18/day |

---

## Button System

Ink is primary. Emerald = confirm/success · Red = destructive · Blue = links.

**Variants:** Primary (ink) · Secondary (outline) · Success (emerald, "✓ Confirm") · Ghost ("Skip for now") · Link ("View details →") · Destructive (red, "Cancel")

**Sizes:** Large 50h · Medium 42h · Small 34h

**With icons:** Leading ("+ Add money") · Trailing ("Continue →") · Icon-only

**Full-width sticky-footer CTA** = the primary flow CTA (e.g. "Continue with Aster ActivSecure"). Fills content width, pinned above the home indicator on every step.

---

## Inputs
- **Search bar:** "Search for bills, services, or merchants"
- **AI chat input:** "Ask ✨ AI about this recommendation" (trailing send button)
- **Cover amount selector:** segmented tiles ₹5L (₹11/day) · ₹10L (₹18/day, violet "+ Recommended" selected) · ₹25L (₹34/day)

## Badges & Tags
AI recommends (violet, "✨ AI recommends") · Best value (dark amber, "★ Best overall value") · Rating (★★★★★ 4.8) · For You · Recommended (emerald, "✓ Recommended") · Risk/ochre ("20% co-pay")

## Component inventory (defined in the library)
- Check / X items (green ✓ covered · red ✗ not covered)
- Risk scenario cards (Unexpected injury / accident / Medical emergency)
- AI insight card (violet — "RECOMMENDED COVER · ₹10 Lakhs" + reasons)
- Savings visualisation (green savings bar vs red emergency bar)
- Icon grid items (To Mobile, To Bank, Electricity, Water, Recharge, Gas, Mutual Funds, Insurance)
- Plan cards: Featured (amber "Best overall value" border) · Compact · Detail cards bottom sheet (What's covered / Why AI recommends / What's not covered) · Glossary card ("KEY TERMS IN SIMPLE ENGLISH": room-rent limit, waiting period, no-claim bonus, co-pay)
- Status bar (Light/Paper + Dark/Ink, 9:41) · Nav header (← title) · Profile header (Hello, Rohan · Mumbai) · Bottom navigation (Home · Insurance · center action · Investments · History) · Drag handle · Progress stepper (Choose → Pay → Done)

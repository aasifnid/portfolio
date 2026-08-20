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

### Surface roles (which token goes where)
- **Page** `Neutral/Page #F5F8FC` — the screen background.
- **Card** `Neutral/Card #FFFFFF` — content cards / list rows (risk cards, plan cards, list items).
- **Icon chip** `Blue/Tint #E9F1FF` — the rounded-8 square behind a line icon (icon grids). Glyph = `Blue/Fill #1D4ED8`.
- **Semantic mini-surface** — check-circles use `Emerald/Tint`, AI/insight cards use `Violet/Tint`, etc. (tint bg + matching text token).
- **Borders & tracks** — always `Border/Line #DCE3EC`. One border token everywhere.

**Every fill and stroke is bound to a Figma color variable** (the AAA Palette collection) — no raw hex in the UI layers. Illustration artwork inside hero/AI cards is exempt.

### Interaction + sizing rules
- Body **16px min** — never below **14px** for meaningful text · line-height **≥ 1.4**
- Tap targets **≥ 44×44px** · icon buttons padded to size
- **Focus ring: 2px `#2563EB` + 2px offset** on every interactive element
- Primary button states: Default / Hover / Pressed / Focus / Disabled

---

## Type System

Display & headings: **Bricolage Grotesque** · UI & body: **Inter** · min 12px · line-height ≥ 1.4

**Bifurcated by viewport** — desktop sizes step up from mobile so headings hold weight on wide layouts while body stays readable. Figma styles are namespaced `Type/Mobile/*` and `Type/Desktop/*`.

| Style | Font | Mobile (size/lh) | Desktop (size/lh) | Example |
|-------|------|------------------|-------------------|---------|
| Display · Hero | Bricolage ExtraBold | 30/36 | 42/50 | ₹10 Lakhs |
| Heading 1 | Bricolage Bold | 24/30 | 32/40 | Being healthy lowers risk. |
| Heading 2 | Bricolage Bold | 20/28 | 24/32 | Compare plans |
| Heading 3 · Card | Inter SemiBold | 16/22 | 18/26 | Aster ActivSecure |
| **Card title · Bold** | Inter Bold | 16/22 | 18/26 | Aster ActivSecure |
| Label · Eyebrow | Inter Bold · +0.6 · UPPER | 12/16 | 14/20 | COVER AMOUNT |
| Body | Inter Regular | 16/24 | 18/28 | These can happen to anyone. |
| **Body Small** | Inter Regular | 14/20 | 16/24 | None of these ask whether you smoke. |
| Body Medium | Inter Medium | 16/24 | 18/28 | View full plan details → |
| **Button · label** | Inter Semi Bold | 16/24 | 18/26 | Explore protection |
| **Link · inline** | Inter Semi Bold | 14/20 | 16/24 | See why → |
| **Label · Strong** | Inter Bold | 14/20 | 16/24 | Non-smoker |
| Caption | Inter Regular | 12/16 | 14/20 | Aster Health Insurance · ₹10L cover |
| **Icon · Tab label** | Inter Medium | 12/16 | 16/24 | To Mobile · Bills · Home |
| Price | Inter ExtraBold | 18/22 | 22/28 | ₹18/day |

Additions this pass:
- **Card title · Bold** — heavier weight for card headers that need to pop over Semi Bold.
- **Body Small** (14px mobile) — dense supporting lines that shouldn't drop to 12px caption; also the min size for input placeholders.
- **Link · inline** (Semi Bold 14) — inline text CTAs (See why →, See all).
- **Label · Strong** (Bold 14) — emphasis chip titles (Non-smoker, No alcohol).
- **Icon · Tab label** (Medium 12) — icon-grid labels + bottom-nav labels; active tab = Semi Bold weight override.
- **Button · label** (Semi Bold 16) — primary/secondary button text (e.g. "Explore protection"). Distinct from Heading 3 so buttons stay semantically separate.

---

## Spacing System

8-based scale. **Every gap and padding must be a token below** — never 6/10/14/18/22.

| Token | Value | Where it's used |
|-------|-------|-----------------|
| xs | 4 | icon ↔ label, chip internals, tightest stacks |
| sm | 8 | items inside one tile/chip |
| md-s | 12 | bottom-nav top padding, avatar ↔ name |
| **md** | **16** | **title → content inside a section** · card / banner / input inner padding · status-bar top inset · related items in a cluster |
| **lg** | **24** | **page side gutter (L/R)** · comfortable bottom padding above the fixed nav |
| **xl** | **32** | **section → section (vertical)** |

### The four rules that carry a screen (replicate everywhere)
1. **Page gutter = 24** on the left and right of all content (Top + Body). Fixed bottom nav uses 16 sides.
2. **Section → section = 32.** Every titled block (Money transfers, Bills, Investments, Travel) is 32 below the previous one, and the hero/banner cluster is 32 above the first section.
3. **Title → content inside a section = 16.** A section header sits 16 above its grid/list.
4. **Inner padding of any card, banner, or input = 16.**

Top-of-screen cluster (status bar → header → search → insight → hero → chips → banner) flows at a uniform **16**. No stray values.

**Desktop (1280):** gutter **40**, section → section **40**; the **16** intra-section rhythm and **16** card/input padding hold unchanged. Nav bar vertical padding 24 (home) / 16 (sub-page back-nav).

---

## Corner Radius

Tokenized as Figma variables (`Radius` collection). Bound to every element's corners — change a token, everything updates.

| Token | Value | Use |
|-------|-------|-----|
| `radius/sm` | 8 | tight/compact elements (optional) |
| `radius/md` | 12 | medium elements (optional) |
| **`radius/base`** | **16** | **default — every surface, card, tile, input, chip** |
| `radius/pill` | 999 | buttons, badges, avatars, circles (fully round) |

**Rule:** `base` (16) is the standard on all rectangular surfaces; `pill` (999) for anything fully round. `sm`/`md` exist for future tightening but aren't the default.

## Elevation & Shadows

One card elevation, saved as the effect style **`Elevation/Card`**: a two-layer shadow (soft ambient + tight contact).

| Layer | Offset | Blur | Color | Opacity |
|-------|--------|------|-------|---------|
| Ambient | 0, 8 | 24 | `#0D1730` | 6% |
| Contact | 0, 1 | 3 | `#0D1730` | 4% |

**Where it applies:** desktop **card containers** (section cards, banners, plan/risk/AI cards). **Mobile stays flat** — sections sit directly on the page with `Border/Line` borders, not cards, so elevation is intentionally not used there. Depth is expressed per form factor: shadow on desktop's sparse large containers, borders on mobile's dense surfaces.

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

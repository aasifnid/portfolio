---
type: calibration
agent: Folio
date-created: 2026-04-10
---

# Folio Calibration Log

Corrections and confirmed approaches from Aasif. Used to improve Folio's output over time.

---

## Session 1 — 2026-04-10 — LEAP SEL Tools case study

### Font pairing — superseded 2026-05-16
~~Plus Jakarta Sans + DM Sans~~ was the original pairing. Replaced by **Outfit (display) + DM Sans (body)** as the canonical 2-font system — see Session 3 below for the full MD3 type system. Do not default to Playfair Display + Inter for Aasif's work — he finds serif fonts too thin.


### Metric highlighting — confirmed
Stat numbers should use a **subtle neutral-200 background box** to differentiate from surrounding body text — NOT bold gold color. Gold on stats reads as too loud. The box creates the visual separation; dark text is enough.

The failure/anomaly stat (0.06% Calm Zone) should have:
- Same neutral-200 background but `--gold-100` tint with a gold left border
- Slightly smaller font size to signal it's contextually different
- Full-width spanning the grid

### Color consistency — rule
All uppercase label elements (section eyebrows, overview labels, cover-meta labels, decision numbers) must use the same `--gold-700` color and `0.08em` letter-spacing. Do not use `--neutral-700` for any uppercase label. This includes `.cover-meta-label` — confirmed 2026-04-11.

### Spacing — section-label before h2
When `.section-label` directly precedes an `h2`, add `.section-label + h2 { margin-top: 8px }`. The default h2 `margin-top: 40px` creates too large a gap and looks like broken layout.

### Images — workflow
Figma MCP does not export full-screen PNG screenshots — it returns design context and sub-element asset URLs (7-day expiry). For permanent images:
1. Open Figma file, find the node by ID (shown in each placeholder label)
2. Export → PNG → 2x
3. Save to `~/Desktop/portfolio/projects/[slug]/images/`
4. Replace `<div class="screen-placeholder">` with `<img src="images/[filename]">`

Simple screens (green circles, basic layouts) can be CSS-reconstructed directly in HTML.

### Case study structure — confirmed
The 7-section architecture worked well for this project. One addition: when there are 6+ design decisions, use the **decision card** component (left gold border, decision number label, title, reasoning paragraph) instead of prose paragraphs. Aasif responded well to this format.

The honest failure metric (0.06% Calm Zone adoption) should be named explicitly and explained — Aasif appreciated this framing and it strengthens the case study's credibility.

**Root cause (updated 2026-04-10):** The low adoption is primarily a content depth problem, not an activation UX problem. Calm Zone shipped with a single breathing exercise; Riddle Zone had a varied, game-like activity library. Teachers had less reason to direct students to Calm Zone because the tool offered less. The fix is expanding the activity library first — activation UX second. Frame the 0.06% as a split signal: 94% completion (tool worked) vs. 0.06% adoption (content too thin to recommend).

---

## Session 2 — 2026-04-15 — SEL Tools case study: data update + browser chrome frames

### Numbers update — confirmed workflow
When Aasif provides fresh Mixpanel screenshots, do a targeted replacement pass:
1. Read all source images first to extract updated numbers before touching the HTML
2. Map each source image to the specific stat or caption it updates
3. Flag numbers that changed significantly and explain why before updating — don't silently swap
4. Numbers that stayed the same (3.4 min, 42s, 7s, 13s) — confirm explicitly, don't assume

### Declining metrics — frame as maturation, not regression
When a usage metric drops over time (e.g. reattempts: 21.7% → 13.85%), check if it signals mastery/efficiency before treating it as a negative. In this case: reattempt rate dropped because students got better at choosing the right activity on the first try after 10 weeks of use. The framing: "Reattempt rate dropped from 21.7% to 13.85% over 10 weeks — students choosing the right activity first try, more often." Calculate the exact duration from Mixpanel timestamps rather than approximating.

### Browser chrome frame system — confirmed
All case study images (product screens + data screenshots) now use a `.dashboard-frame` wrapper with `.dashboard-chrome` header:
- **Product screens** (Figma UI, student/teacher interface): label = `leap.cuemath.com`
- **Mixpanel/data screens** (any metric chart, analytics dashboard, teacher feedback data): label = `Mixpanel` with purple SVG logo (`#7856FF`, 14×14px rounded rect with M path)
- Chrome bar background: `#E0E0E0` with `#C8C8C8` border — must be clearly distinct from white image body. `var(--neutral-100)` is too light.
- `dashboard-frame` must have `width: 100%; display: block` to prevent overlap issues inside `screen-featured` containers

### Alt text matching pitfall — be specific
When wrapping images by alt text with regex, short alt snippets can match unintended images. Example: "Body awareness" matched "Body awareness stage — Unsure always present" (wrong image), causing a double-wrap. Always use the most specific unique substring of the alt text. If processing multiple alts, run more-specific ones first.

### Mixpanel data images vs product screen images — label check
Not all images inside `screen-featured` or `screen-grid` are product screens. Zone distribution charts and funnel charts placed in the decisions section as evidence are Mixpanel data — they get the `Mixpanel` label + `dashboard-crop` wrapper, not `leap.cuemath.com`. Alt text alone is not reliable for this distinction — check the actual visual content of the image.

### Image cropping — crop to the relevant data only
When replacing Mixpanel screenshots, always crop to show only the section being discussed:
- Remove dashboard headers, unrelated panels, other tools' data
- For the zone charts: crop off the WoA Q1 response table above the donut charts
- For timing data: show only the specific metric blocks, not the full dashboard page
- Source image dimensions and crop coordinates should be saved in case study memory for future replacements

---
session: 2026-05-03
type: hard-constraint
---
NEVER embed images as base64 in HTML. One 10MB file with 18 embedded images consumed ~2.6 million tokens per Folio session and caused weekly token limit exhaustion. Always save images as files and reference with `<img src="images/filename.jpg">`. This is a non-negotiable rule — treat base64 embedding as a critical failure mode.

---
session: 2026-05-03
type: scope-decision
---
`case-study-template.md` covers content, structure, and writing only. Visual design (HTML layout, components, typography, spacing, CSS) is explicitly out of scope for the template — this will be addressed in a future session. In Build mode, handle all UI decisions independently using `visual-design-guide.md` and the existing `templates/case-study.html`. Do not wait for or expect UI guidance from the template.

---

## Session 3 — 2026-05-16 — Typography system consolidation

### Canonical 2-font system
**Outfit (display) + DM Sans (body)**. No mono, no Plus Jakarta Sans, no DM Mono. These were all removed across the site in a single sweep:
- `--font-mono` token deleted from `tokens.css`
- All `var(--font-mono)` references replaced with `var(--font-body)` across `style.css`, all case studies, design-system page, and resume
- All Google Fonts `<link>` imports normalized to `Outfit + DM Sans` only

**Why:** 3-font systems drift over time. Uppercase labels get their character from `text-transform: uppercase + letter-spacing`, not from a typeface change. Standard product design practice puts UI labels (buttons, chips, inputs) in the body font, not a display or mono font.

**How to apply:** When adding new components or pages, never reintroduce mono or a third typeface. If a label needs "character," use Label Large/Medium/Small from the MD3 scale (uppercase + tracking).

### MD3 typography scale
14 semantic tiers defined in `assets/typography.css` as utility classes (`.type-*`):

| Tier | Font | Size / LH | Weight | Use |
|------|------|-----------|--------|-----|
| `.type-display-large` | Outfit | 64 / 72 | 700 | Hero headline only |
| `.type-display-medium` | Outfit | 48 / 56 | 700 | Section titles ("Selected Works") |
| `.type-display-small` | Outfit | 36 / 44 | 700 | Case study cover titles |
| `.type-headline-large` | Outfit | 28 / 36 | 600 | About section titles, H2 |
| `.type-headline-medium` | Outfit | 22 / 30 | 600 | Sub-section heads, decision titles |
| `.type-headline-small` | Outfit | 18 / 26 | 600 | Inline emphasis |
| `.type-title-large` | DM Sans | 16 / 24 | 600 | UI titles, table headers |
| `.type-title-medium` | DM Sans | 14 / 20 | 600 | Button labels (CTAs) |
| `.type-body-large` | DM Sans | 18 / 30 | 400 | Hero sub, long-form |
| `.type-body-medium` | DM Sans | 16 / 26 | 400 | Default body |
| `.type-body-small` | DM Sans | 14 / 22 | 400 | Captions |
| `.type-label-large` | DM Sans | 14 / 20 | 600 + 0.08em caps | Section eyebrows |
| `.type-label-medium` | DM Sans | 12 / 16 | 600 + 0.10em caps | Tags, phase labels |
| `.type-label-small` | DM Sans | 11 / 14 | 600 + 0.12em caps | Tiny tags |

**Why MD3 naming over Cuemath prefix style (aH1/UB1):** Aasif is targeting Google. MD3 semantic naming aligns with Google's design language. Names describe purpose, not the font, so future font swaps don't require renaming tokens.

**How to apply:** Prefer adding utility classes (`<span class="type-label-large">`) on HTML elements. Avoid inline `font-family/size/weight` declarations in CSS rules — those reintroduce drift. When updating existing rules, reference the MD3 tier values rather than copy-pasting font metrics.

### CTA + chip font rule
Buttons (`.btn-primary`, `.btn-ghost`) and chips (`.chat-chip`) use **DM Sans semibold** — not Outfit, not Space Mono. Standard practice: body font for UI labels. Visual emphasis comes from background/border, not weight or typeface.

**How to apply:** Any new interactive element (button, chip, tag, link styled as CTA) defaults to `.type-title-medium`. Do not use Outfit on a CTA.

---

## Session 4 — 2026-05-30 — Spoken narration register (interview scripts)

### The spoken-register sweet spot — found by overshooting both sides
When writing Feel Check's interview narration script, the right register is a **seamless senior-designer flow: connected, full sentences that sound like a person talking confidently across a table.** Two failure modes, both rejected by Aasif:

1. **Too poetic / composed** → "reads like AI." Tells: writerly phrases like "carrying whatever the day had handed them" (borderline-OK), "the emotional gap was real," "turned it from a side-observation into a funded project," lists of 5–6 parallel images making the same point.
2. **Too plain / simplified** → "feels childlike and immature, not a senior designer." Tells: short choppy sentences, signpost fragments like "Here's the problem." / "Like I said," / "So here's what we built." Breaks storytelling flow.

**The fix is never "use simpler words" to escape the AI feel.** It's surgical: keep the senior flow and connected sentences, and only swap out the 2–3 specific phrases that sound corporate/composed. Flattening the whole thing into plain English overcorrects into childlike.

**Director-lens content rules for spoken openings (Google L3/L4 hiring panel):**
- Lead with the insight/surprising fact, not mood. "Nobody had it on the roadmap" + quantified cost ("nearly half the class, every class") is the hook.
- ONE vivid human image, not a list of six — a list signals you didn't trust one to land.
- Every sentence must carry one of: problem, evidence, user cost, business cost, or role. Mood-only sentences get cut.
- Business cost = one tight sentence proving you *think* in those terms; don't spell out the full churn→referral→revenue cascade.
- Opening + problem to first solution beat ≈ 70s, not 160s. Pace itself signals seniority.
- A touch of warmth is on-brand for an emotional-design product (shows the EQ that qualifies him) — but one beat, then pivot to rigor.

### Page vs. spoken narration — what to say aloud vs. leave on the page
The case study page is the **complete record**; the spoken walkthrough is a **curated highlight reel**. Never narrate the page line-by-line — selecting *is* the senior signal; reading everything looks like an inability to prioritize. Every candidate item passes 3 tests before earning a spot in the script:
1. **Already said it?** (e.g., a lesson already covered as a decision) → cut, repetition reads as padding.
2. **Distinct signal?** Two items making the same point → merge or pick one.
3. **Want it remembered?** ~20s/item budget — spend on highest signal, put the strongest LAST.

Worked example (Feel Check Lessons): 4 page lessons → 2 spoken. Audio lesson cut (already in D3), the two "delight/agency" lessons merged into one, the "measured ready not learned" honesty lesson kept and placed last. The unspoken items are NOT wasted — they become **probe ammunition** ("any other takeaways?"). General rule: voice carries the *why/story*; page carries the *full evidence + depth*; overlap only where reflection is inherently personal.

---

## Session 5 — 2026-06-14 — Feel Check system diagram (flowchart component)

### Diagrams must read as flowcharts — not styled stacks
When building a system/architecture diagram, Aasif wants an actual **flowchart**: clear directional connectors with **arrowheads** showing branch and convergence, not a vertical stack of cards with faint divider lines + text labels. First attempt used near-invisible `--line` connectors and tiny "splits into…" captions instead of arrows — rejected as "not clear" / "doesn't look like a flowchart." Use dark right-angle connector lines (~`#2B2B33`) and CSS-triangle arrowheads pointing into each node.

### One consistent box style, differentiate by COLOR not by treatment
Don't mix box treatments in one diagram (e.g. gradient-fill canvas + plain views + gradient-bar action). That reads as "different styles, not needed." Use **one card pattern** (icon chip + uppercase colored heading + body) and differentiate nodes by **hue** from the data palette (purple / blue / green / amber). Take styling cues from a reference image when given.

### Tokens are not mandatory for one-off diagram components
Aasif: "it's not mandatory to use our tokens to match this diagram, just pick elements from design system like font, color." For a self-contained case-study visual, hardcoding hex/values pulled from the system (Space Grotesk/Inter, the palette hues) is fine — don't contort the component to thread every value through `var(--token)`. Tokens stay mandatory for shared/site-wide CSS.

### Spacing + density
Compact the heading→body gap inside nodes (~3px), but add generous space *between* boxes (connector zones ~64–148px). Tight inside, airy between.

### Verify rendering myself — but in the REAL layout context
Headless Chrome screenshot loop: build a test HTML linking the real `common-assets` CSS, inject the component via `sed`, render desktop + mobile PNGs, Read them. **Critical miss the first time:** I rendered the component on a bare `<body>` (full ~1000px width) and it looked fine — but the real page wraps it in `<article class="cs">` (an 800px reading column) with `.wide{width:100%}`. The narrower real width is what made the layout collapse. ALWAYS wrap the test in `<article class="cs">` so `.wide` resolves to the true width. `.cs` = `max-width:var(--read)` = 800px; `.wide` = 100% of that.

### Flowchart connectors: keep content nodes in normal flow; never absolutely-position a text box
First flowchart attempt absolutely-positioned the Action box (`position:absolute;top:50%`) to do side-entry convergence (arrows into Action's left/right sides, per the reference). It **overlapped the view cards** the moment text wrapped to 3 lines and the container was narrower than my test — "messy output." Two rules that fixed it:
1. **Content nodes stay in document flow.** Connectors are the only absolutely-positioned elements. A box whose height depends on text must never be `position:absolute` inside a fixed-height zone.
2. **Prefer top-entry convergence** (two risers → labeled horizontal bar → center trunk → down-arrow into the next node's top) over side-entry. It's robust to text height and trivial to make responsive. Side-entry looks closer to a hand-drawn reference but is fragile.

### Aligning connectors to columns: calc-key them to a fixed column-gap
To make branch/converge connectors land dead-center on each card without drift: give `.fc-views` an exact `column-gap` (e.g. 40px) and position drops/risers at `left:calc(25% - 10px)` / `left:calc(75% + 10px)` — where the offset = gap/4. Math: with gap G, column centers sit at `25% - G/4` and `75% + G/4` of the full-width connector row. Cards fill their columns (`align-items:stretch`), so card-center === column-center === connector-x, at any container width. The horizontal bar uses `left:calc(25% - 10px);right:calc(25% - 10px)`. Mask the bar behind a centered label with a white-bg `.fc-lab` so the connector reads "—— LABEL ——".

### The clean target spec (Feel Check system diagram, matched 2026-06-14)
Gradient-soft canvas (purple→pink) with no icon-circle; blue/green/amber view+action cards each with a soft-tint icon circle. Titles: Space Grotesk 700, **sentence case** (not uppercase), ~21px, colored per node (canvas stays near-black `#15151A`). Body Inter ~15.5px `#3F3F49`, 6px under title. Connector lines `#71717D` with 8px CSS-triangle arrowheads; labels uppercase `#8A8A99` 11px on a white mask. Card radius 16px, padding 22×26.

---

## Session 6 — 2026-06-17 — ALWAYS use the design system; never invent a component

**The miss (Aasif called it out, rightly):** asked to make the "Open in Figma" CTA the *primary* CTA, I invented a gradient-filled button instead of opening the design system first. The DS already defined **primary = ink fill → accent hover → 2px accent focus ring** ("Get in touch"). I shipped an off-system third style. Hard rule going forward: **before styling any CTA/component, open `design-system/index.html` and use the documented component. Never create a new visual treatment when one is defined.**

**Root cause worth remembering:** the DS documents `.btn` / `.btn-primary` / `.btn-secondary`, but those styles lived **only inside the design-system page's local `<style>`** — they were never in shared `common-assets/style.css`. So the real pages had no usable primary button, which is how bespoke one-offs (`.figma-link`) crept in. **Fix applied 2026-06-17:** promoted the button component into shared CSS (base `.btn` + `.btn-primary` ink→accent + `.btn-secondary` outline→soft-gradient + `:focus-visible` ring + disabled), added `.cs .btn{margin-top:24px}` for body spacing, switched all four case-study Figma CTAs to `class="btn btn-primary"`, removed `.figma-link`. Note: the DS *labels* "Open in Figma" as the Secondary example — but Aasif's product call is that the case-study Figma CTA is **Primary** (ink fill).

**General principle:** when adding/changing a component, check whether the design system already defines it. If yes → use/extend the shared token/class. If the documented component isn't wired into shared CSS yet → promote it to shared CSS (don't fork a local copy). Keep [[feedback_design_system_sync]] in force.

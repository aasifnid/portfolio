---
type: calibration
agent: Folio
date-created: 2026-04-10
---

# Folio Calibration Log

Corrections and confirmed approaches from Aasif. Used to improve Folio's output over time.

---

## Session 1 — 2026-04-10 — LEAP SEL Tools case study

### Font pairing — confirmed
**Plus Jakarta Sans (headings) + DM Sans (body)** is the confirmed default pairing. Closest free equivalent to Cuemath's proprietary Athletics + Untitled Sans. Wide, geometric, open letterforms. Do not default to Playfair Display + Inter for Aasif's work — he finds serif fonts too thin.


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
3. Save to `~/Desktop/portfolio/work/[slug]/images/`
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

---
type: knowledge
topic: Visual Design Guide
agent: Folio
---

# Visual Design Guide

**Build mode:** Copy `templates/case-study.html`, populate `{{PLACEHOLDER}}` values. Do not regenerate CSS — the template has the complete design system.

This file documents tokens, the component inventory, and rules. Reference it when reviewing output or adding components.

---

## Component Inventory

All CSS is in the template. HTML snippets below — structure and when to use.

### Cover
Order: `.cover-eyebrow` → `h1` → `.lede` → `.cover-meta` → `.hero`

- `.lede` — 1-sentence problem hook, max 25 words. Earns attention before body copy.
- `.cover-meta` — flex row: My Role / Platform / Timeline / Outcome

```html
<div class="cover">
  <p class="cover-eyebrow">2024 · Product Designer · Cuemath</p>
  <h1>Project Title</h1>
  <p class="lede">One sentence: user problem and stakes. Max 25 words.</p>
  <div class="cover-meta">
    <div class="cover-meta-item">
      <span class="cover-meta-label">My role</span>
      <span class="cover-meta-value">Lead UX Designer</span>
    </div>
    <!-- repeat for Platform, Timeline, Outcome -->
  </div>
  <div class="hero"><!-- INSERT: Hero screen --></div>
</div>
```

### Overview strip (`.overview`)
Bordered 3-column grid: Problem / Role / Outcome. Appears after cover before Section 01.

### Section header (`.section-head`)
```html
<div class="section-head">
  <span class="section-num">01</span>
  <span class="section-label">The Problem</span>
</div>
```
Always 01–07. Gives reviewers a triage map.

### Pull quote (`blockquote`)
Key research insight. Max 1 per section. Display font, gold-500 left border.

### Narrative block (`.narrative`)
1–3 paragraphs of decision reasoning or context. Gold-400 left border. Signals "this is the argument."

### Highlight box (`.highlight`)
Single stat, data point, or key fact. Gold-100 background, gold-500 left border. Max 1 per section.

### Insight callout (`.insight-callout`)
Numbered — use when there are 2–3 equally important research findings (instead of a single pull quote).
```html
<div class="insight-callout">
  <span class="insight-number">01</span>
  <div><strong>Headline</strong><p>Implication for design direction.</p></div>
</div>
```

### Decision comparison card (`.decision-grid`)
2 real alternatives — chosen (gold-100 bg, gold border) vs rejected (0.65 opacity).
```html
<div class="decision-grid">
  <div class="decision-card rejected">
    <span class="decision-label">Considered</span>
    <strong>Option A</strong><p>What it was. Ruled out because X.</p>
  </div>
  <div class="decision-card chosen">
    <span class="decision-label">Chosen</span>
    <strong>Option B</strong><p>Why this. Trade-off: Y.</p>
  </div>
</div>
```

### Before/After (`.before-after`)
2-column grid for redesign projects. Label each side with `.before-after-label`.

### Screen placeholders
- `.screen-placeholder` — full-width featured screen (400px min-height)
- `.screen-placeholder-sm` — process grid screen (240px min-height)
- Both: neutral-200 background + neutral-300 border

### Outcome stats (`.outcome-stats`)
Bordered 2-column grid. Primary stat: add `.featured` class (3px gold top border).

---

## Template Rules

1. Google Fonts CDN only — no `@font-face` with local files
2. Link `../../assets/tokens.css` and `../../assets/style.css` — no inline design system CSS
3. Images go in `images/` folder, referenced as `<img src="images/filename.jpg">` — never base64
4. No JavaScript — page must render with JS disabled
5. Standard HTML5 — no custom elements or web components

---

## What Not To Do

- No `#FFFFFF` — always `--neutral-100`
- No `font-weight: 700` on body text
- No shadows, gradients, or decorative rounded cards
- No colors outside the token palette
- No more than 1 pull quote per section
- No captions that describe the screen — captions explain the decision

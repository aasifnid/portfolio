# Design System — Aasif Anwar Portfolio

**Version:** 2.0  
**Last Updated:** 2026-05-13  
**Single Source of Truth:** `assets/tokens.css`

All design decisions are centralized in CSS variables. This document is the reference guide.

---

## 1. Typography System

### Font Stack: 3 Fonts Maximum

| Font | Family | Weights | Use |
|------|--------|---------|-----|
| **Outfit** | Geometric, friendly sans-serif | 600, 700, 800 | Display headings, section titles, card titles |
| **DM Sans** | Humanist sans-serif | 400, 500, 600, italic | Body text, descriptions, captions |
| **Space Mono** | Monospace | 400, 700 | Navigation, buttons, labels, metadata |

**CSS Variables:**
```css
--font-display: 'Outfit', sans-serif;
--font-body: 'DM Sans', sans-serif;
--font-mono: 'Space Mono', monospace;
```

---

### Type Scale: 12 Fixed + 5 Responsive

#### Fixed Sizes
```css
--text-xs:    11px   /* smallest labels */
--text-sm:    12px   /* small labels, captions */
--text-base:  14px   /* button text, small body */
--text-md:    15px   /* body text variant */
--text-body:  16px   /* default body size */
--text-lg:    17px   /* body large variant */
--text-xl:    20px   /* subheadings */
--text-2xl:   24px   /* card titles, medium headings */
--text-3xl:   28px   /* section titles */
--text-4xl:   32px   /* large section headers */
--text-5xl:   44px   /* page subtitle */
--text-6xl:   56px   /* large hero */
```

#### Responsive Sizes (clamp)
```css
--text-hero:       clamp(36px, 4.5vw, 64px)      /* hero headline */
--text-h1:         clamp(28px, 6vw, 56px)        /* large headings */
--text-section:    clamp(24px, 4vw, 32px)        /* section title fallback */
--text-intro:      clamp(28px, 5vw, 40px)        /* intro overlay */
--text-blockquote: clamp(36px, 5vw, 56px)        /* large blockquote */
```

---

### Font Weights

```css
--fw-regular:    400   /* body, default */
--fw-medium:     500   /* emphasis in body, buttons */
--fw-semibold:   600   /* strong emphasis, labels */
--fw-bold:       700   /* headings, dark labels */
--fw-extrabold:  800   /* hero, display */
```

---

### Line Heights: 4 Standard Values

```css
--lh-tight:  1.0    /* labels, inline elements */
--lh-snug:   1.3    /* headings, display */
--lh-normal: 1.6    /* body default, readable */
--lh-loose:  1.7    /* large copy, blockquotes */
```

---

### Letter Spacing: 5 Standard Values

```css
--ls-tight:    -0.03em   /* large display, tight (h1, hero) */
--ls-snug:     -0.02em   /* display titles (h2, h3) */
--ls-micro:    -0.01em   /* headings, subtle */
--ls-normal:    0em      /* body, no adjustment */
--ls-label:     0.08em   /* small labels, metadata */
--ls-caps:      0.12em   /* uppercase labels (section eyebrows) */
--ls-expanded:  0.16em   /* expanded uppercase (less common) */
```

---

## 2. Color System

### Surface & Borders
```css
--color-bg:       #F8F5EF   /* warm parchment background */
--color-surface:  #FFFFFF   /* white cards */
--color-border:   #E0D9CF   /* subtle warm border */
--color-border-2: #C4BAB0   /* strong hover/focus border */
```

### Ink (Text)
```css
--color-ink:    #141210   /* near-black, maximum contrast */
--color-ink-2:  #4A4540   /* warm dark secondary */
--color-ink-3:  #8A8480   /* muted warm gray */
```

### Accent (Gold)
```css
--gold-100: #FBF3E8   /* lightest tint */
--gold-400: #DFA44C   /* medium */
--gold-500: #C4862A   /* primary accent */
--gold-700: #A06820   /* darkest */
```

### Color Palette (6 families × 6 shades)
See `memory/portfolio_color_palette.md` for complete reference.

**Key primary shades:**
- Purple 4: #FF80F4
- Blue 4: #33CCFF
- Green 4: #00E573
- Orange 4: #FF884C
- Yellow 4: #FFB700
- Red 4: #FF5B4D

---

## 3. Spacing System

Base unit: **8px**

```css
--s1:  4px      /* micro spacing */
--s2:  8px      /* base unit */
--s3:  12px     /* element spacing */
--s4:  16px     /* component spacing */
--s5:  20px     /* section padding */
--s6:  24px     /* generous padding */
--s8:  32px     /* large spacing */
--s10: 40px     /* extra large */
--s12: 48px     /* hero padding */
--s16: 64px     /* massive spacing */
--s20: 80px     /* section separation */
--s24: 96px     /* page-level gaps */
```

---

## 4. Component Styles

### Cards
```css
--card-border: 1px solid var(--color-border);
--card-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px var(--color-border);
--card-shadow-hover: 0 20px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
--card-border-radius: 0px;  /* sharp edges, no rounding */
```

**Card Anatomy:**
- Default: white background, subtle border, light shadow on hover
- Colored variant: colored section (shade 1), white bottom section
- Meta information: Space Mono, 12px, muted gray text

---

### Buttons & CTAs

#### Primary Button
```css
--btn-primary-bg: #0D0D0D;
--btn-primary-text: #F8F5EF;
--btn-primary-hover: #2D2B28;
--btn-primary-padding: 12px 22px;
--btn-primary-font: 'Space Mono', monospace;
--btn-primary-size: 13px;
--btn-primary-weight: 500;
--btn-primary-letter-spacing: 0.03em;
```

#### Ghost Button
```css
--btn-ghost-bg: #FFFFFF;
--btn-ghost-border: 1px solid var(--color-border);
--btn-ghost-text: var(--color-ink-2);
--btn-ghost-hover-bg: #F5F5F5;
--btn-ghost-hover-border: var(--color-border-2);
```

---

## 5. Design Principles

### Sharp, Clean Design Language
- **Border-radius:** 0px (no rounding) — sharp edges throughout
- **Transitions:** 0.15s ease (consistent timing)
- **Shadows:** Minimal, subtle (depth without loudness)
- **Spacing:** Generous (breathing room is intentional)

### Typography Hierarchy
1. **Display** (Outfit, 600/700/800) — section breaks, page structure
2. **Body** (DM Sans, 400/500/600) — narrative, content, readability
3. **Mono** (Space Mono, 400/700) — technical, metadata, labels

### Color Restraint
- **Neutral base** (warm parchment + white)
- **Accent system** (6 colors × 6 shades for intentional emphasis)
- **Avoid:** Random color application; every color choice should map to the palette

---

## 6. Component Patterns

### Section Layout
```
[Section Title] ← 28px Outfit 700, ls: -0.01em
━━━━━━━━━━━━━━  ← shimmer line (--color-border)

[Content Grid]  ← 16px DM Sans 400, lh: 1.6
```

### Work Card
```
╔════════════════════════════════════════╗
║ Meta      ← Space Mono, 12px, fw: 600 ║
║ Title     ← Outfit, 24px, fw: 700     ║
║ Desc      ← DM Sans, 14px, fw: 400    ║
║           (color: --color-surface)     ║
╚════════════════════════════════════════╝
  [Visual Background] ← 280px min-height
```

### Recommendation Card
```
┌──────────────────────────────┐
│ Quote                        │ ← 14px DM Sans, italic
│ [white background]           │
├──────────────────────────────┤
│ [Avatar] Name  ← Outfit 14px │ ← colored bg (shade 1)
│           Role  ← Space Mono │
└──────────────────────────────┘
```

---

## 7. Responsive Behavior

### Breakpoints (Mobile-First)
- **Mobile:** 320px–640px
- **Tablet:** 640px–768px
- **Desktop:** 768px+

### Typography Adjustments
- Sections/cards: reduced padding at mobile
- Font sizes: use clamp() for smooth scaling
- Spacing: reduce from --s-units at mobile breakpoints

---

## 8. Implementation Rules

### When Adding New Elements
1. **Check the scale first** — Is there a token for this size? (if not, use nearest)
2. **Use CSS variables** — Never hard-code colors, fonts, or sizes
3. **Consistent letter-spacing** — Only use the 5 defined values
4. **Line-height with purpose** — Match your content type (heading, body, label)
5. **Card/button patterns** — Reuse existing component styles

### Adding a New Font Size
Only add if it doesn't fit the 12-size scale. Add to `tokens.css`:
```css
--text-newsize: 18px;  /* describe purpose */
```

### Updating Colors
New colors go in `memory/portfolio_color_palette.md`, then reference from there.

---

## 9. Maintenance

**Source of Truth:** `/Users/aasif/Desktop/portfolio/assets/tokens.css`

All design tokens are centralized. If you need to change a color, font, size, or spacing value, update it **once** in tokens.css and it cascades to the entire site.

**Never:**
- Hard-code hex colors in component CSS
- Use arbitrary font sizes
- Create new letter-spacing values
- Add new border-radius values

**Always:**
- Use CSS variables from tokens.css
- Reference this guide when making new components
- Keep spacing on the 8px grid
- Test responsive behavior at 320px, 768px, 1920px


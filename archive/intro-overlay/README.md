# Intro Overlay — Archived 2026-05-25

The splash screen that played on homepage load ("Portfolio 2026 · Built with AI"). Archived because — at the FAANG L3/L4 interview stage — leading the portfolio with build-method disclosure positioned the work around the wrong message (tools, not design judgment). Footer attribution still handles transparency.

May revisit post-interviews or for a different use case (e.g. a side project intro).

## Final state before archival

- **Timing:** 800ms display + 300ms fade (1.1s total)
- **Content:** "Portfolio 2026" eyebrow + "Built with AI" headline (tools list already dropped)
- **Behavior:** once per tab (sessionStorage), click-anywhere-to-dismiss
- **Pre-paint flicker fix:** `<head>` script checks sessionStorage before first paint

## To restore

Paste the code chunks below into `index.html` in the indicated locations.

### 1. Pre-paint script (in `<head>`, after `<title>`)

```html
<script>
  /* Pre-paint check: if this tab has already seen the splash, hide the overlay before first paint (no flash). */
  try { if (sessionStorage.getItem('intro-seen')) document.documentElement.classList.add('intro-hide'); } catch (e) {}
</script>
```

### 2. Pre-paint CSS (in `<head>`, separate `<style>` block)

```html
<style>
  .intro-hide #intro-overlay { display: none !important; }
</style>
```

### 3. Mobile responsive CSS (inside `@media (max-width: 480px)` block in `<style>`)

```css
/* Intro overlay */
.intro-eyebrow { font-size: var(--text-xs); letter-spacing: 0.08em; margin-bottom: 32px; }
.intro-statement { font-size: clamp(28px, 5vw, 40px); margin-bottom: 8px; line-height: 1.2; }
.intro-tools {
  font-size: var(--text-xs); letter-spacing: 0.08em; margin-top: 32px;
  padding: 0 16px; max-width: 100%; line-height: 1.6; text-align: center;
}
.intro-tools-sep { margin: 0 6px; }
```

### 4. Main intro CSS (in the main `<style>` block)

```css
/* ─── Intro overlay ─── */
#intro-overlay {
  position: fixed; inset: 0; z-index: 99999;
  background: var(--color-ink);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  transition: opacity 0.3s ease;
  cursor: pointer;
}
#intro-overlay.fade-out { opacity: 0; pointer-events: none; }

.intro-eyebrow {
  font-family: "Outfit", sans-serif; font-size: clamp(14px, 2vw, 18px); font-weight: var(--fw-semibold);
  letter-spacing: -0.01em;
  color: rgba(255,255,255,0.45); margin-bottom: 48px;
}
.intro-statement {
  font-family: "Outfit", sans-serif;
  font-size: clamp(48px, 6vw, 64px);
  font-weight: var(--fw-bold); letter-spacing: -0.02em; line-height: 1.2;
  color: #FFFFFF; text-align: center;
  margin-bottom: 12px;
}
.intro-statement strong {
  font-weight: var(--fw-bold); color: #FFFFFF; display: inline;
}
.intro-tools {
  font-family: "DM Sans", sans-serif; font-size: clamp(13px, 1.5vw, 16px); font-weight: var(--fw-regular);
  letter-spacing: 0;
  color: rgba(255,255,255,0.45); margin-top: 40px;
}
.intro-tools-sep { color: rgba(255,255,255,0.25); margin: 0 6px; }
```

### 5. HTML element (immediately after `<body>`)

```html
<div id="intro-overlay" title="Click to skip">
  <p class="intro-eyebrow">Portfolio 2026</p>
  <p class="intro-statement">Built with <strong><span style="color: var(--color-accent);">AI</span></strong></p>
</div>
```

### 6. JS controller (in the main `<script>` block)

```js
/* ── Intro overlay — plays once per TAB (sessionStorage). Pre-paint check in <head> prevents flash on refresh / re-nav. ── */
(function() {
  var overlay = document.getElementById('intro-overlay');
  if (!overlay) return;
  var hide = function() {
    overlay.style.display = 'none';
    overlay.style.visibility = 'hidden';
    overlay.style.pointerEvents = 'none';
  };
  try {
    if (sessionStorage.getItem('intro-seen')) { hide(); return; }
    sessionStorage.setItem('intro-seen', '1');
  } catch (e) { /* storage blocked — play overlay this time */ }
  var dismiss = function() {
    overlay.classList.add('fade-out');
    setTimeout(hide, 300);
  };
  overlay.addEventListener('click', dismiss);
  setTimeout(dismiss, 800);
})();
```

## Earlier tools-list variant (if reviving with tool name-drop)

Replace the HTML element in step 5 with:

```html
<div id="intro-overlay" title="Click to skip">
  <p class="intro-eyebrow">Portfolio 2026</p>
  <p class="intro-statement">Built with <strong><span style="color: var(--color-accent);">AI</span></strong></p>
  <div style="width: 60px; height: 1px; background: rgba(255,255,255,0.3); margin: 32px 0;"></div>
  <p class="intro-tools">
    Claude Code <span class="intro-tools-sep">·</span> Wispr Flow <span class="intro-tools-sep">·</span> Figma <span class="intro-tools-sep">·</span> Vercel
  </p>
</div>
```

---
type: reference-standard
agent: Folio
date: 2026-05-30
status: active
description: "The Feel Check case study is the canonical benchmark. Every other case study (page + script) is audited against these 7 dimensions. Load at the start of any case-study fix or alignment pass."
---

# Feel Check Reference Standard

Feel Check is the finalized benchmark case study. When fixing/aligning any other case study, audit it against all 7 dimensions below. Each point is a **rule**, not a suggestion. Extracted from the live page + tokens.css (2026-05-30).

## 1. Storytelling
- Discovery-by-accident origin — problem found while doing something else (signals you *find* problems, aren't handed them).
- Every decision is a CONFLICT story, never a feature description. Shape: spec said X → I doubted/pushed → evidence → resolution → insight.
- One bolded pull-quote insight per decision (the line carrying the judgment).
- Honesty built in: a real mistake + an unmeasured gap stated plainly. Close on the open question, NOT a victory lap.
- Cost is always dual — user cost AND business cost.

## 2. Content structure
- Cover: H1 → ~50-word lede (problem + solution) → context meta (Role / Team / Timeline) → 2 headline outcome stats → hero image.
- 5 numbered sections: 01 The Problem · 02 Role · 03 Decisions · 04 Impact · 05 Lessons. Big 01–05 numerals as metadata labels.
- One UNNUMBERED bridge between Role and Decisions: "How it works" (overview line + video + 3-step image grid + Figma link). The product reveal — deliberately not numbered.
- Every section = H2 + short intro paragraph + evidence. Never heading → straight into data.
- Repeatable blocks: decision cards (`Decision N — title` + prose), alternatives cards (picked one highlighted), stat-hero + stat-cluster, routing/phase tables, image grids (3-up, pairs).
- A caption under EVERY piece of media. No orphan images.
- Sticky section nav (5 links) + "Next case study" card at end.

## 3. Simplicity in language
- Short sentences, fragments for punch ("It showed up mid-class. By then, half the session was gone.").
- Concrete over abstract ("a tough exam, a fight at home", not "external stressors").
- First person: "I" for ownership, "we" for team. Consistent.
- One em-dash per sentence max — never two.
- Numbers stated plainly and early, not buried in clauses.

## 4. Narrative spine
Problem → cause → dual cost → "no system existed" → solution overview → 3 tension-driven decisions → impact measured AGAINST the original goal → honest reflection on the limit. Every decision resolves a tension. Impact loops back to the Problem's promise. Arc ends DOWN into honesty.

## 5. Jargon-free text
- Clinical/technical terms named once, then humanized (Wheel of Awareness, RULER explained in plain English, never assumed).
- No internal platform jargon (LEAP never appears).
- Acronyms expanded on first use. (Known watch-item: "SEL" appeared once unexpanded on Feel Check — the bar is expand-or-drop.)
- Jargon discipline can itself be a documented decision (FC D2: clinical words → kid words).

## 6. UI style (tokens)
- Two fonts only: Outfit (display/headings) + DM Sans (body). No third face.
- Ink: primary #0D0D0D, body #4D4D4D, secondary #6B6B6B; page #FAFAFA, surface #FFFFFF, border #DADADA.
- One accent sitewide: purple-4 #FF80F4 (+ purple-1 #FFE0FD fill). No per-case-study brand color.
- Sharp edges everywhere — border-radius 0. Only true circles allowed.
- 8px spacing system: section 64 / block 32 / bond 16. Nothing off-grid (no 6/10/14px).
- Color beyond purple appears ONLY where it's the product's own semantic system (e.g. zone chips), never decoration.
- Single reading column, generous whitespace, captions small + muted.

## 7. UX design language (behavior)
- Sticky section nav with scroll-spy (active tab follows scroll).
- Scroll-progress bar at top.
- Scroll-reveal fade-ins (data-animate + IntersectionObserver) with noscript fallback.
- Custom cursor dot that grows on hover over interactive elements.
- Lightbox zoom on every .cs-img.
- Ambient muted looping flow video → click for fullscreen + sound.
- Perf: fetchpriority=high on hero, lazy-load below fold.
- Continuity: Figma deep-link + "Next case study" hand-off + mobile burger nav.

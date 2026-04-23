---
type: brief
project: Social Emotional Learning (SEL) Tools
slug: leap-sel-tools
date: 2026-04-10
updated: 2026-04-13
status: built
agent: folio
---

# Brief — Social Emotional Learning (SEL) Tools

## 1. Context
Cuemath's LEAP platform — live 1:1 math tutoring, grades 1–8, primarily India. Sessions run evenings, after school, often back-to-back with other activities. Jan–Feb 2026 design and build, live by end of February. B2B testing with 90 shortlisted teachers before full rollout.

## 2. The Problem
Students weren't arriving ready to learn. They joined straight from play, arguments, difficult school days, afternoon restlessness. Teachers had no visibility into a student's emotional state on entry and no tools to help them transition. The session would start; the teacher would have to figure it out or push through. The emotional gap between a child's life and the learning session was entirely unaddressed.

## 3. My Role
Product Designer — sole designer on the project. End-to-end ownership: research brief translation, concept development, IA for 5 tools, UI design across three grade bands (G1–2, G3–4, G5–8), teacher training tool design (Tutor Guide Task), and collaboration with Roots Consulting Agency on content architecture.

## 3b. RULER Combinations Logic (from spreadsheet)
- Body has 3 states: Tight/Fast/Restless, Loose/Slow/Calm, Unsure
- Each body state filters available Heart options; each Heart selection filters Mind options
- Final output: one of four colour zones (Green / Blue / Yellow / Red) from Zone of Regulation framework
- Every combination is explicitly mapped — no undefined paths
- Unsure + Unsure + Unsure → NA (no zone) → routes to curated fallback regulation activities
- Partial Unsure paths (e.g. Unsure body + Calm heart + Few thoughts) still resolve to a zone
- Grade-differentiated tabs: G3-4 and G5-8 have separate combination matrices
- Source file: `/Users/aasif.anwar/Documents/Cuemath/Project Backup_Cuemath/Ruler Combinations.xlsx`

## 4. Research / Discovery
- Partnered with Roots Consulting (SEL specialists) who brought grade-level emotional vocabulary frameworks and evidence-based regulation strategies
- Three frameworks used: Wheel of Awareness (Dr. Dan Siegel), RULER (Yale Center for Emotional Intelligence), Zone of Regulation (Leah Kuypers)
- Design challenge: make clinical frameworks feel like a natural, low-friction part of a tutoring session — not a clinical assessment
- Key data post-launch: 20–22% of students select "Unsure" on body awareness (G3-4: 22.3%, G5-8: 20.2%) — the hardest dimension. This validated the "Unsure" as a first-class option design decision.
- Green zone dominant across both cohorts — most students arrive calm/happy. Tool reliably surfaces this to teachers.

## 5. Key Insight
The brief from Roots gave the content. The design question was how to make evidence-based SEL feel like it belonged inside a math tutoring session — not imported from a school counselling office. Every structural choice (sequential filtering, teacher as observer, grade differentiation) came from that tension.

## 6. Key Decisions
1. Teacher as observer, not controller — student owns Feel Check entirely; teacher has screen sync but no intervention capability
2. Sequential Wheel of Awareness filtering — body determines heart options; heart determines mind options; mirrors how awareness actually builds
3. Grade differentiation — two distinct layers (G3–4 and G5–8), not "simplified". G3–4 uses concrete/sensory-first vocabulary; G5–8 uses nuanced/reflective vocabulary. G1–2 was descoped — vocabulary and self-reflection demands were not grade-appropriate; deferred as a separate problem.
4. Sticker category shuffle — Persistence was at 65.4% share (pre-shuffle); diagnosed as position bias not preference; randomised opening category → normalised to FOCUS 25.4% / PERSISTENCE 25.3% / GROWTH_MINDSET 23.2% / MATH_TALK 16.6% / TEAM_WORK 9.4%
5. Descoped animation to ship on time — regulation activity videos kept (highest impact); static icons everywhere else
6. Non-blocking teacher feedback floater — bottom-right, minimisable, never modal → 96.31% completion at 4.35 seconds

## 7. Outcome

**Teacher base:** ~10,000 teachers total at Cuemath. Current data covers the feature-gated rollout — rolled out in batches to trained teachers only (small pilot first, then extended to ~500 teachers). Real enrolled teachers and students throughout. Full rollout to all ~10,000 teachers is next.

### Stickers
- **500–650 active teachers** (steady state); peak 777 on Dec 19, 2025
- **132,875+ stickers shared** (33,090 pre-shuffle + 99,785 post-shuffle)
- **1.78 stickers/session** average — habitual use, not one-tap-and-close
- Category distribution post-shuffle: FOCUS 25.4% / PERSISTENCE 25.3% / GROWTH_MINDSET 23.2% / MATH_TALK 16.6% / TEAM_WORK 9.4%
- **Position 1 bias persists within categories** — second slot in grid gets 32.2% of taps vs. 16.7% for first slot. Teachers scan briefly rather than defaulting to the first item. Implication: curation of slot 1 matters more than slot 0.
- 41% of teachers in light-use band (<5/month); 6.5% power users (55+/month). Activation is the growth lever.

### Feel Check
- **7.72s** avg time to process emotion zone (WOA → zone selection)
- **13.79s** avg time selecting an emotion within a zone
- **118.19s** avg time on regulation strategy screen — students engage with content, not just tap through
- Body awareness hardest to name: G3-4 22.3% unsure, G5-8 20.2% unsure (confirms "Unsure" as first-class option was correct)

### Teacher Feedback
- **95.96%** overall submission rate since Feb 26
- **4s** avg submission time overall
- Per-tool breakdown: Feel Check 97.14% (3s avg) / Focus Zone 96.6% / Riddle Zone 78.9%
- Average Feel Check duration: **3.4 min** (spec: 4–5 min) — directly from Mixpanel dashboard
- Regulation activity: **2 min avg** per session (inclusive of 21.7% who tried a second activity)
- Riddle Zone lower (78.9%) at higher volume — likely feedback fatigue. Honest limitation.
- Regulation questions highest at 98.7% — teachers more confident rating observable behaviour (what they see) vs. inferred emotional states (what they interpret)
- Top reason teachers activate Riddle Zone: "Wanted to play" (1,634) — signals teacher agency, not compliance

### Riddle Zone (Energizers)
- **67%** voluntary reattempt rate
- **93.76s** avg activity completion time — calibrated: not trivial, not attention-losing
- Only 8% skip via cross button — and those who skip wait **249 seconds (~4 min)** first. Students commit.
- 91% of "Take a Break" icon clicks → session started. High intent signal.
- Peak 560 DAU (Jan 6, 2026); typical weekday 450–550; stable since mid-January
- Category split: Rebus 46.7% + Brain Teaser 32.8% = 79.5% of all starts (G3-8). G1-2 prefers visual/spatial (Maze, Spot the Difference, Match).

### Calm Zone
- **0.06%** adoption rate — fewer than 1 in 1,000 break sessions choose Calm Zone
- **94%** completion rate among the few who enter — the experience works; adoption doesn't
- Weekly unique users: 6–8 (single digits)

## 8. Reflection — Calm Zone Root Cause (Final)

**First diagnosis (wrong):** Content depth problem — Calm Zone had one breathing exercise, Riddle Zone had a varied library.

**Second diagnosis (partially right):** Activation surface failure — teachers knew when to use it but the tool wasn't surfaced at the right moment.

**Correct diagnosis:** Presentation layer conflict. Calm Zone and Energizers share the same "Take a Break" entry point. Energizers naturally wins that competition — the 25-min notification matches the low-energy/reset use case perfectly. Calm Zone addresses early frustration, which can appear at any point and requires a different teacher judgment call. When both tools compete for the same moment, Calm Zone gets overlooked — not because teachers didn't know better, but because the design never gave it its own space.

**Platform philosophy note:** Cuemath does not use system-driven intervention triggers. Teacher judgment is sovereign — top 1% tutors are trusted to read student state. The fix must stay within that philosophy.

**The correct fix:** Give Calm Zone its own separate access path, independent of the Energizers notification. Not automation. Not more content. A presentation layer fix.

## 9. Figma Screens
None provided. HTML built with labelled placeholders.

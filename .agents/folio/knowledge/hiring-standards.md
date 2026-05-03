---
type: knowledge
topic: Google L3/L4 Hiring Standards — No-Loophole Gatekeeper Framework (Final)
agent: Folio
updated: 2026-04-13
---

# Hiring Standards — No-Loophole Gatekeeper Framework

## The No-Loophole Integrated Framework

### 1. Narrative & Impact Structure (STAR-R + HEART)

**Narrative Spine (STAR-R)**
Situation → Task → Action → Result → Reflection.
- Actions must be specific and decision-linked
- Reflection must expose a real flaw or miscalculation — no reflection = not hireable

**Impact Validation (HEART)**
Within "Result," require at least one of: Happiness, Engagement, Adoption, Retention, or Task Success — or strong behavioral proxies. Reject vague outcomes.

### 2. Systemic Integrity (Architectural Lens)

**Taxonomy & Naming**
Replace vague labels with rule-based definitions. Every entity must be explicitly defined.

**Object-Oriented UX**
For every system entity, require:
- States
- Properties
- Relationships to parent/child systems

Missing definitions = failure.

**Mental Model Alignment**
Map system behavior to user expectations. Identify mismatches or learning costs.

### 3. Strategic Alignment (L4 Signal)

**Constraints (MANDATORY)**
Force articulation of:
- Technical constraints: API, frontend limitations, performance/scalability trade-offs
- Business constraints: KPIs, trade-offs, stakeholder priorities

If absent → mark as non-L4 thinking.

**Conflict as Optimization**
Reframe disagreements as optimization problems. Define variables and trade-offs. Reject "we aligned" statements — they are content-free.

### 4. Failure & Edge-Case Design

**Rule of Extremes** — validate every system against:
- Zero state
- First-time use
- Max capacity / Overflow
- Invalid inputs
- Failure states

If missing → flag as incomplete system thinking.

**Accessibility (WCAG 2.1 AA)**
Treat A11y (interaction logic, contrast logic, feedback clarity) as structural, not optional. Absent = failure signal.

---

## Core Decision Models (Enforced Internally — Do Not Name in Output)

| Model | What to verify |
|-------|---------------|
| Problem Framing Stack | User goal + Business objective + Constraints + Failure definition — all four present? |
| System Design Logic | Inputs → Transformations → Outputs; State transitions; System boundaries defined? |
| Decision Model | Minimum 2 options + Trade-offs + Final rationale. Single-option = red flag. |
| Interaction Cost Model | Cognitive load + Interaction cost + Error probability — explicitly reasoned? |

---

## Google's 5 Hiring Criteria

### 1. Quality of Thinking
Reasoning visible. Alternatives considered. Decision rationale explicit ("I chose X over Y because..."). Case study must be interesting without the screens.
**Red flag:** Goes from problem to final design. Reasoning is "I felt" without evidence.

### 2. Communication Clarity
Problem in one sentence. Each section answers one question. Reading time under 8 minutes.
**Red flag:** 4-paragraph problem explanation. Chronological ordering. Internal jargon unexplained.

### 3. User Centricity
Decisions grounded in user evidence. Problem in user's words. Edge cases addressed.
**Red flag:** "The PM asked for X" as design rationale. Research listed without showing what changed.

### 4. Design Craft
Consistent quality. Interaction states shown. At least 1–2 process artifacts proving investigation, not execution.
**Red flag:** Happy-path only. No process artifacts.

### 5. Impact
A metric, even rough. Qualitative outcome if no metrics. Honest if it didn't ship.
**Red flag:** "We launched it" with no follow-up.

---

## What Kills a Portfolio Review (Severity Order)

0. **"Toured deliverables"** — screens with no decision-making visible → immediate pass
1. **No visible process** — final screens only
2. **Unclear role** — "we designed..." throughout
3. **No user evidence** — every decision is "I felt"
4. **No outcome** — "we launched it" and nothing more
5. **Too long** — can't read in 7–10 minutes


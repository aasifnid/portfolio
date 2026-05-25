# UX Portfolio Case Study Template
**Standard reference for L3/L4 UX Designer (Individual Contributor) roles at Google, Amazon, Microsoft, and similar.**

> **Scope:** This template covers content, structure, and writing only — what to say, how to say it, and how to organise it. Visual design (layout, components, typography, spacing, HTML/CSS) is handled separately and is not part of this document.

---

## Foundational Principles

1. **Tour the thinking, not the deliverables.** A weak case study walks through screens in the order they were made. A strong one walks through the *thinking* — decisions, trade-offs, reframings. Every section, artifact, and caption should answer "what did I figure out, and why does it matter?" — not "here is what I made."
2. **The 30-second scan rule.** Reviewers spend 3–5 minutes per portfolio on first pass; the first 30 seconds decide whether they keep reading. What the project was, what you did, and what it achieved must be visible above the fold, before the tabs.
3. **STAR underneath, design vocabulary on top.** The framework is Situation–Task–Action–Result. The published labels are Context · Role · Process · Outcome · Reflection. Never use the STAR words as published headers.
4. **One header set across the entire portfolio.** Don't vary tab names per project. Consistency reads as a body of work.
5. **"I" vs "we" is non-negotiable.** Every section must make your specific contribution unambiguous. Reviewers cannot grade work they can't attribute.
6. **Tie every decision to reasoning.** No screen, flow, or artifact appears without a sentence explaining the decision it represents.
7. **Honesty earns trust.** Mixed results, killed concepts, and reflective failures consistently outscore polished-but-vague claims.
8. **Avoid marketing language.** *Revolutionary, delightful, magic, journey, breakthrough* — these signal performance over substance.
9. **Write the way you talk.** Read every sentence out loud. If you wouldn't say it to a colleague over coffee, rewrite it. Specifically remove:
    - **Corporate verbs:** *leverage, utilize, facilitate, drive, enable, empower, unlock, streamline* → *use, help, made it possible, sped up.*
    - **Abstract collective nouns** when you mean specific people: *stakeholders, end-users, touchpoints* → *the PM, the support team, parents, our three pilot tutors.*
    - **Throat-clearing transitions:** *It's important to note that, Furthermore, In essence.* Cut. Start with the actual point.
    - **Tidy three-part lists** where reality was messier. Cut to two or one.
    - **Performative compression:** *not a guess, but a baseline.* Once per case study at most.
    - **Adjective stacking:** *seamless, intuitive, robust, scalable.* Pick one or none. Show, don't claim.
    - **Constraint apology:** *"Due to time constraints, we couldn't run testing"* → *"With three weeks to launch, I used session recordings as proxy — same drop-off, same step."* Show the judgment you made inside the constraint, not the limitation around it.
    - **Passive voice hiding ownership:** *"The decision was made to..."* → *"I decided to..."* If "was + past participle" can be replaced with an actor + verb, replace it.
    - **Vague intensifiers:** very, quite, rather, incredibly, extremely. Cut all of them.
10. **Terminology consistency.** One word per concept, used everywhere — title, hero, tabs, captions, metadata. If your users are tutors, they're tutors throughout. Same rule for product nouns, action verbs, and metric names.
11. **Every research footprint must be paired with what it revealed.** *"Tested with 417 students"* is evidence, not a finding. Sample size and insight belong in the same sentence.
12. **Watch for repetition in adjacent paragraphs.** Same phrase, rhythm, or word twice within three paragraphs reads as performative. Vary or cut.
13. **Trust the plainer word.** Near-miss phrasing (*"sight into"* instead of *"insight into"*) draws attention to itself. Use the plain word.
14. **Section sub-headlines should be narrative, not categorical.** Pose the question the section answers. Replace *"Research"* with *"Why do parents stop trusting the report after three weeks?"* Replace *"Ideation"* with *"Three ways to surface the signal — and why we killed two of them."*

---

## Length & Proportions

Target total: **900–1,400 words across all five tabs** — a 6–8 minute full read.

| Section | % of body | Word target | Reading time |
|---|---|---|---|
| Hero (above tabs) | — | 80–150 | ~30 sec |
| Context | ~10% | 100–150 | ~1 min |
| Role | ~10% | 80–120 | ~30 sec |
| Process | 60–65% | 550–850 | 4–5 min |
| Outcome | 15–20% | 150–250 | ~1 min |
| Reflection | 5–10% | 80–150 | ~30 sec |

Under 900 words usually means Process is too thin. Over 1,400 usually means Context or Role is bloated, or Process has slid into deliverable-touring. Cut from Context first, Process second — look for "what I made" prose that should be "what I decided" prose.

---

## Final Header Set

**Context · Role · Process · Outcome · Reflection**

Five tabs. Single words. Map cleanly to STAR for any reviewer who knows the framework.

---

# STRUCTURE

## 0. Hero (above the tabs)

The 30-second scan zone. By the time the reviewer scrolls past, they should know what the project was, what you did, and what it achieved.

**Project title.** Format: *"[Project name] — [one-line description of what it does, for whom]."*
Example: *Loop — a daily standup tool for remote engineering teams.*

**One-line punchline.** Pulled from Outcome, not Context. Lead with the value. Concrete number or scale beats clever phrasing.
Example: *Replaced the 30-minute morning meeting with a 90-second async check-in. Used by 200+ teams in the first quarter.*

**TLDR / Overview (3–4 sentences), in this order:**
1. What was the problem?
2. What did you design/build?
3. What did it achieve, with proof?

The hero must contain at least one outcome statement. A research footprint alone (*"validated with 400 users"*) is evidence, not an outcome. If the project hasn't shipped, use a qualitative outcome — specific user behavior change, stakeholder decision, or follow-on work unlocked. Never end the hero at *"we validated it."*

**At-a-glance metadata (three columns):**
- **My Role:** e.g., *Product Designer (0→1)* or *Lead Designer, end-to-end*
- **The Team:** composition with counts, e.g., *1 PM, 3 Eng, 1 Researcher*
- **Timeline:** concrete dates, e.g., *8 weeks — Dec 2025 → Feb 2026*

**Optional:** one restrained hero visual. Not a screen dump.

---

## 1. CONTEXT (~10%)

**Purpose:** Establish why this work needed to happen.

### Open with the user failure state

The first paragraph names the **specific moment, step, or metric where users were breaking down** — not the broad problem space. Where a real user, on a real screen, stopped, struggled, churned, or got it wrong.

Weak: *Onboarding had usability issues affecting retention.*
Strong: *38% of new users dropped off on the third step of onboarding — the screen where they had to verify their tax ID. Support tickets that week alone outnumbered the entire month before.*

### Must include
- The user failure state (opening)
- The product or business moment — what existed, what its role was
- The users and their situation
- The triggering signal — metric, complaint, opportunity, or mandate
- Why it mattered — business stakes AND user stakes
- Broad environmental constraints — tech, regulatory, market timing, organizational

### Must not include
- Your role (belongs in Role)
- Your solution (belongs in Process / Outcome)
- Methods used (belongs in Process)

### Strong pattern
> *"[Product] served [users] doing [job]. In [time period], we saw [specific signal]. [User voice or data point]. The cost of inaction was [business consequence]."*

---

## 2. ROLE (~10%)

**Purpose:** Make your specific contribution unambiguous within 60 seconds.

### Must include
- Role title and seniority on this project
- Scope — what surface, feature, or system you owned end-to-end
- Collaborators and what they owned (PM, eng, research, content, legal)
- Success metrics agreed at the start
- Constraints specific to your work — timeline, headcount, tech, organizational
- **Out-of-scope items** — what you didn't own. Often missing from junior portfolios; signals judgment.

### Must not include
- The work itself (belongs in Process)
- Vague team-level claims (*"we shipped..."*)

### Strong pattern
> *"I led [scope] from [phase] to [phase], partnering with [PM] on [responsibility] and [N engineers] on [responsibility]. Success was defined as [primary metric] with [secondary metric] as a guardrail. [Specific thing] was out of scope; [name/role] owned that."*

---

## 3. PROCESS (60–65%) — the core

**Purpose:** Show your thinking, decisions, and judgment. This is what separates L4 from L3.

Six subsections below as internal structure. Not all are required for every case study, but each one that appears should be substantial.

#### 3.1 Discovery / Research

Every research moment follows a four-step structure:

1. **What I investigated.** The specific question, hypothesis, or unknown. *("Why are parents abandoning the report after week three?")*
2. **What I found.** Concrete user behavior or quote, not methodology summary. *("Parents read week one fully, skim week two, stop opening from week three because the same metrics repeat with no narrative arc.")*
3. **How it reframed the problem.** What the team had assumed, and how this finding changed the question. *("We had been designing for first-impression clarity. The real problem was the report had no story across time.")*
4. **How it informed direction.** The design decision, principle, or constraint that came out of it. *("Pushed us from optimizing the single-week template to designing a four-week narrative.")*

The four steps shouldn't appear as numbered headers in the published case study — they should read as one tight paragraph. If a research moment is missing any of the four, cut it or expand it. Call out counterintuitive findings explicitly; the reframe in step 3 is where reviewers look for judgment.

#### 3.2 Synthesis & Framing
- How you reframed the problem
- Surface problem vs. real problem
- The JTBD, principle, or working hypothesis you committed to

#### 3.3 Exploration
- Minimum 3 alternatives considered
- What was promising about each, and why you killed the ones you killed
- **Show messy artifacts** — sketches, whiteboards, post-its. Messy artifacts signal more rigor than pristine final mocks.

#### 3.4 Decisions & Trade-offs — *the L4 signal. Make it loud.*
- The hard calls you made
- What you traded off — speed vs. learnability, density vs. accessibility, business goal vs. user need
- How you decided — data, principles, stakeholder alignment

#### 3.5 Craft & Iteration
- Final flow, system, or component
- **Rule of Extremes** — validate against all six: zero state, first-time use, max capacity / overflow, invalid inputs, failure states, accessibility (WCAG 2.1 AA). Missing any of these flags incomplete system thinking at the L4 bar.
- Iteration cycles with engineering and feedback loops
- Show before/after when you iterated. Show the second-to-last version, not just the final — iteration is the story.

#### 3.6 Validation
- How you tested — usability, A/B, dogfood, beta
- What changed based on testing
- **What you got wrong** — what testing revealed that you'd missed

**Visuals.** Text carries decisions and reasoning; visuals carry evidence — screens, flows, before/afters. Never write what a visual already communicates.

**Caption rule.** Every screen or artifact needs a decision caption, not a description. *"Profile view showing student progress"* — fails, that's a description. *"Reframed from 'time spent' to 'concepts mastered' — parents read session time as a learning quality proxy, which it isn't"* — passes, that's a decision.

---

## 4. OUTCOME (15–20%)

**Purpose:** Demonstrate impact honestly.

### Must include
- Quantitative results — with baselines and timeframes
- Qualitative results — user quotes, stakeholder feedback, adoption signals
- What shipped — scope, scale, users reached
- What didn't work as expected

### Order of preference for metrics
1. Direct user behavior change — drop-off, completion, time-on-task, error rate
2. Business metric — revenue, retention, NPS, support ticket volume
3. Adoption — users reached, teams or surfaces that adopted the work
4. Qualitative — user quotes, stakeholder feedback
5. Process wins — design system contribution, methodology shared, follow-on work unlocked

### Google HEART framework

Google measures UX impact against five signals: **Happiness · Engagement · Adoption · Retention · Task Success.** At least one (or a direct behavioral proxy) must be present in the Outcome section. A metric that doesn't map to any of these signals vague impact — reviewers at Google will notice. Use HEART as a self-check: *which signal does this metric actually represent?*

### If metrics aren't available
- Be explicit about why (*"We didn't have analytics on this surface"* / *"Project shipped after my tenure"*)
- Substitute with research validation, qualitative signals, or stakeholder outcomes
- Never fabricate or hand-wave

### Strong pattern (clean win)
> *"Shipped to [scale] in [timeframe]. [Primary metric] moved from [X] to [Y] over [period]. [Secondary metric] showed [result]. [Qualitative signal]. [Honest note on what didn't move]."*

### Structure for partial wins, mixed results, and failures

When the result was mixed, write it in four parts:

1. **What we expected.** Hypothesis, predicted outcome, target metric. *("Expected first-week retention to rise from 42% to 55%.")*
2. **What actually happened.** The real result, with numbers. No softening. *("Retention rose to 47% — short of target, and the gain didn't hold past week three.")*
3. **Why it happened.** The diagnosis. What you learned about the user, product, or assumption that turned out wrong. *("Users completed the new flow but reverted to the old workaround for their second session. We had solved first-time experience without examining repeat-use.")*
4. **What changed because of it.** The decision, follow-on work, or principle you carried forward. *("Pushed us to instrument repeat-session behavior in V2.")*

---

## 5. REFLECTION (5–10%)

**Purpose:** Show growth, judgment, and forward thinking. The second L4-vs-L3 separator after Process.

### Should include
- What you'd do differently with hindsight
- What this work taught you about design, users, or yourself
- What's next for the project — V2, follow-on work
- How this changed your approach on future projects

### Tone
Honest, specific, non-defensive. Avoid generic platitudes (*"I learned the value of user research"*), humblebragging (*"I should have led even more"*), and excuses (*"If only we'd had more time…"*).

### Strong patterns
> *"If I were starting over, I would have [specific choice] earlier — I learned that [insight]."*

> *"The next iteration is exploring [direction] because [signal we saw in production]."*

---

# PRE-PUBLISH CHECKLIST

### Hero
- [ ] Punchline is in the first line, not buried
- [ ] TLDR covers problem / what I did / what it achieved
- [ ] At-a-glance shows Role, Team, Timeline with specifics
- [ ] Hero contains an outcome statement, not just a validation footprint

### Context
- [ ] Opens with a specific user failure state — moment, step, or metric where users broke down
- [ ] Problem is concrete, with data or user voice
- [ ] Stakes explicit — business AND user
- [ ] No solution hints

### Role
- [ ] "I" vs "we" unambiguous throughout
- [ ] Scope and out-of-scope both stated
- [ ] Success metrics named

### Process
- [ ] Sub-headlines are narrative, not categorical
- [ ] Every research moment follows the four-step structure
- [ ] At least 3 alternatives shown and killed (with reasons)
- [ ] At least 2 named trade-offs
- [ ] Edge cases and accessibility addressed
- [ ] At least one messy artifact (sketch, whiteboard, post-its)
- [ ] Every screen has a "why" caption, not a "what" caption
- [ ] Touring thinking, not deliverables

### Outcome
- [ ] Metrics have baselines and timeframes
- [ ] Honest about what didn't work
- [ ] Quantitative + qualitative both present (or absence explained)
- [ ] Mixed results / partial wins use the four-part structure

### Reflection
- [ ] Specific, not generic
- [ ] Forward-looking element present (V2 or applied learning)
- [ ] Non-defensive tone

### Cross-cutting
- [ ] Total length 900–1,400 words
- [ ] Same header set as other case studies
- [ ] No marketing fluff
- [ ] No formulaic phrasing (*"In the Action phase, I…"*)
- [ ] Read-aloud test passed — sounds like you talking, not an essay or LLM
- [ ] Terminology consistent throughout (one word per concept)
- [ ] Every research footprint paired with a finding
- [ ] No phrase, rhythm, or near-miss expression repeats within three paragraphs

---

# PORTFOLIO-LEVEL RULES

- **Quality bar applies to every clickable case study.** A portfolio is judged by its weakest visible case study. If one doesn't pass the checklist, hide or archive it.
- **Group case studies by category when wide-ranging.** Professional product, game design, academic — separate them visibly. Categories can have different structures suited to the medium.
- **Lead with the strongest case study, not the most recent.**
- **Demonstrate range in the first three.** End-to-end product + a systems or platform project + a craft- or research-heavy project signals senior-level breadth. Three of the same shape reads as midweight.
- **Same header set within a category.** Be internally consistent within each group.
- **Every clickable case study should answer "why is this here?" within 30 seconds.** Older or off-domain work needs a hero line that frames why it earns its spot — what skill, instinct, or range it demonstrates that the professional work doesn't.
- **Connect work to India context explicitly — mandatory for Google Pay and Google India roles.** Don't assume the reviewer makes the connection. If your work involved low-literacy users → *"Users with varying digital fluency — consistent with Google India's NBU audience."* Tier 2/3 cities → name them. Trust-sensitive or high-stakes contexts → *"Trust design in high-stakes contexts — education parallels fintech."* Device or network constraints → *"Performance-aware design."*
- **Handle NDA and unreleased work honestly.** Confidential metrics: *"Specific metrics are confidential, but directionally: the change had a measurable positive effect on [outcome type]."* Unreleased work: label it — *"This project was deprioritised before launch"* — present the process and what you'd have measured. Never present speculative work as shipped. Portfolio-killer at Google.

---

*End of template.*

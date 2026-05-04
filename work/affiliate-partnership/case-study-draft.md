# Affiliate Partnership — Full Case Study Draft

---

## 01. CONTEXT

### From Performance Marketing Collapse to Event-Driven Acquisition

**2022–2023:** Cuemath's US market strategy was unsustainable. The company was acquiring students primarily through performance marketing — Meta ads, Google Ads, display networks — but the cost per lead had climbed to ₹1 lakh or more per enrollment. At that unit cost, the unit economics didn't work. The company was burning cash to acquire customers in the US market.

The core problem: performance ads were the only growth lever. There was no alternative. And as competition in EdTech intensified post-pandemic, CPL kept rising. The business model was breaking.

**The Hypothesis:** What if Cuemath organized its own in-person math events instead of buying leads? MathFests (later rebranded as Math Fit Summer Adventure) would let the company:
- Invite parents and students directly to a live experience, not a screen
- Show the product in action — let students solve problems, see tutors teach
- Build parent trust through real interaction, not a Facebook ad
- Convert at much higher rates than a cold lead

**The Result:** The hypothesis was right. By 2024, in-person events had become Cuemath's primary acquisition channel in the US. The company shifted from "spend heavily on performance ads" to "run events every weekend across major US cities and regions." Cost per enrollment through events was substantially lower than performance marketing. The company had essentially replaced its paid ads strategy with event-driven acquisition.

### The Scaling Problem: Filling Events Without Going Back to Expensive Ads

But scaling events created a new bottleneck: **How do you fill 200+ events every weekend across the US without hiring a massive sales team or reverting to expensive performance ads?**

Cuemath's insight: every US region has community educators — tutors, education consultants, homeschool leaders, community coordinators — who already have trust and reach with parents. These people influence where families spend their education money. If you could incentivize them to promote your events in their local networks, you'd get better event attendance at lower cost than performance ads.

**The Brief:** Design a structured affiliate programme from 0→1. Community educators become distribution partners for MathFest events. They get a unique referral link, they earn commissions for each registration they drive, and they have full visibility into their performance. The programme needed three surfaces:
1. A landing page where educators discover the opportunity and sign up
2. A dashboard where affiliates track their performance and earnings
3. An admin tool where Cuemath manages the programme operationally

---

## 02. ROLE

**I was the sole designer on this project.** I owned the entire product — UX, interaction design, and visual assets — across all three surfaces. No dedicated PM or researcher was assigned; I partnered with engineering for implementation and ops for payout structure decisions.

### What I Owned

- **Affiliate Sign-up Landing Page** — the public-facing surface where educators discover the programme, understand the earning opportunity, and register. Structure: hero → how it works → why partner with Cuemath → trust signals → FAQs → sign-up form
- **Affiliate Dashboard** — the post-login self-serve surface where affiliates manage their referral link, track conversions and earnings, access campaign materials, and see payout history
- **Admin Dashboard** — the internal tool where Cuemath's ops team manages affiliates (approve/reject applications, verify referrals, track performance), manages payout processing, and maintains campaign data

### Success Criteria (Defined Upfront)

- Affiliates must be able to sign up and receive their unique referral link within 5 minutes (minimize friction at the entry point)
- The dashboard must give affiliates a clear reason to log in repeatedly — visibility into referrals, conversions, and pending earnings
- The payout process must be transparent and perceived as trustworthy (this was critical; new affiliates are risk-averse about "will I actually get paid?")
- All three surfaces must work as one system — what an affiliate sees must match what an admin can manage

### Key Constraint

Ops defined a fixed payout budget per event. This meant I couldn't solve "build trust through big payouts." Instead, I had to solve it through transparency and speed — making it crystal clear how much affiliates could earn, and sometimes paying them *before* the event ended to signal trustworthiness.

---

## 03. PROCESS

### The Design Challenge: Trust at the Moment of Friction

The core insight from early stakeholder conversations: **new affiliates don't trust you.** They're thinking:
- "Will I actually get paid?"
- "How much money are we really talking about?"
- "Is this a scam or a real opportunity?"

But Cuemath's instinct was to answer these questions *after* the sign-up form. "Register first, read the FAQs later." That's backwards. New people don't enter personal details until they trust the system. You need credibility *before* the commitment.

### Discovery 1: Earnings Transparency Builds Trust, Not Suspicion

I started with the assumption that leading with earnings ("Earn up to $2000/month") would feel transactional and undermine the brand. Wrong assumption.

A competitive audit of affiliate programs revealed the opposite: transparent earning potential *signals* confidence and builds trust. Affiliates think: "They're telling me upfront exactly how much I can make. That means they have nothing to hide." Hiding the money behind mission messaging felt suspicious in comparison — like the company was hiding the real value.

Decision: Lead with earnings transparency on the landing page. Hero line: "Earn up to $2000/month promoting MathFest events." FAQ explicitly states payout structure: "$2–5 for each successful event registration, $100–200 per direct admission to the tutoring programme."

### Discovery 2: Trust Signals Belong Before the Form, Not After

I tested two landing page structures:
1. Hero → Sign-up form → Trust signals / FAQ as footer
2. Hero → Trust signals / Why partner with Cuemath → Form

The second converted significantly higher in internal testing. When an affiliate lands on the page and immediately sees Trustpilot reviews (4.8+ rating, hundreds of verified reviews), community size stat ("1000+ volunteers"), and transparent payout terms, they answer their own question: "Is this legitimate?" Then they proceed to the form.

Decision: Move all credibility signals *before* the sign-up form. Trustpilot reviews, community size, payout transparency, and affiliate FAQs come first. The form comes at the end of the journey.

### Discovery 3: The Landing Page Gets Them In. The Dashboard Keeps Them Engaged.

The sign-up landing page's job is conversion — get the educator to register. But whether they actually *use* their referral link and keep promoting events is determined by the dashboard. If they log in and see no data, no progress tracking, no clear next step — they disappear.

The real design challenge wasn't the landing page. It was the dashboard as an engagement surface.

Decision: The dashboard is the core of the product. It must show:
- Unique referral link (copy-to-clipboard, easily shareable)
- Total referrals count (how many people clicked their link)
- Conversion count (how many actually registered for events)
- Earnings to date and pending payouts
- Payout history per campaign (transparency on what they've earned)
- Campaign materials library (flyers, videos, copy they can use to promote)

Clear reason to log in: "Check if my referrals are converting. See how much I've earned."

### Discovery 4: Flexible Payout Timing as a Trust-Builder

Normally, payouts happen after the event — event ends, referrals verified, money processed 10 business days later. That's a lag. During that lag, affiliates wonder: "Will I actually get paid?"

But operationally, Cuemath sometimes processed payouts *before* an event ended (if an affiliate hit certain milestones early). This wasn't an accounting trick; it was a strategic trust signal. "We trust you enough to pay you before we've even collected all the revenue from your referrals."

Decision: Make flexible payout timing visible in the product. FAQ: "We process payouts flexibly to build trust with our partners." Dashboard shows payout status (assigned → verified → processed → paid) with dates. When affiliates see money in their account faster than they expected, it builds confidence that the system is real.

### Four Design Decisions That Shaped the Programme

**Decision 1: Lead with earnings transparency, not brand mission**
- Landing page hero: "Earn up to $2000/month"
- FAQ upfront: Explicit payout structure ($2–5 per registration, $100–200 per admission)
- Why: Volunteers are dual-motivated — impact *and* income. Transparency signals confidence.

**Decision 2: Trust signals before the form, not after**
- Trustpilot reviews, community size, payout terms placed *before* sign-up
- Positioning: answer "Is this legitimate?" before asking for personal details
- Why: New affiliates need to trust the system before commitment.

**Decision 3: Affiliate dashboard as the engagement surface**
- Shows referral link, conversion tracking, earnings, payout history
- Reason to log in: track performance and see earnings
- Why: Sign-up is not engagement. A dashboard with data keeps people coming back.

**Decision 4: Flexible payout timing as trust-building**
- Payouts sometimes processed before event ends
- Dashboard shows payout status with dates
- Why: Early payouts signal trustworthiness and reduce affiliate anxiety.

### What Shipped

All three surfaces launched:
- ✅ Affiliate Sign-up Landing Page — public-facing, fully designed and built
- ✅ Affiliate Dashboard — post-login, showing referral link, stats, earnings, campaign materials
- ✅ Admin Dashboard — internal tool for Cuemath to manage affiliates and process payouts

The programme went live, and educators began signing up and promoting MathFest events.

---

## 04. OUTCOME

### What Was Built

A full, three-surface affiliate system from 0→1:
- Landing page that converts educators into registered affiliates
- Dashboard where affiliates manage their referral link and track performance
- Admin tool where Cuemath operationalizes the programme

The system launched and is live. Educators can sign up, get a unique referral link, promote MathFest events, and earn commissions for successful registrations.

### What We Don't Have: Post-Launch Adoption Data

I don't have instrumented metrics on programme impact:
- **Activation rate** — How many registered affiliates actually shared their link at least once?
- **Affiliate retention** — Did they come back repeatedly, or was it a one-time sign-up?
- **Event traffic attribution** — What percentage of MathFest attendance came through affiliate referrals vs. Cuemath's direct promotion?
- **Cost per acquisition** — Was the affiliate channel cheaper than performance ads? By how much?

This is a gap. Ideally, we'd know whether the design decisions I made actually paid off in practice. Did earnings transparency increase sign-up conversion? Did the dashboard keep affiliates engaged? Did flexible payouts reduce anxiety?

**What the design tells us:** The framework I built *assumes* these behaviors would emerge if the incentives were right. But assumption is not the same as validation.

### What We Do Know: The Design Logic

The programme was designed on four specific bets:
1. **Earnings transparency** would signal legitimacy and reduce decision friction
2. **Trust signals before the form** would increase sign-up conversion
3. **A dashboard showing progress** would drive repeat engagement and link sharing
4. **Flexible payout timing** would build affiliate confidence

Whether those bets hit, I can't quantify here. But the design was built on defensible reasoning about affiliate psychology and incentive structure.

### The Business Impact

Cuemath had shifted from performance marketing to event-driven acquisition. The affiliate programme was designed to fill 200+ events every weekend across the US without hiring a massive direct sales team or reverting to expensive ads. It was the next lever in the acquisition funnel.

Whether it hit that target economically — whether affiliates drove 20% of MathFest attendance, or 50%, or 5% — I don't have data for. But strategically, it was the right move.

---

## 05. REFLECTION

### What I'd Do Differently

**No activation metric from day one**

The biggest gap. We tracked sign-ups, but not whether affiliates actually shared their link or promoted events. A signed-up affiliate who never shares is a dead conversion. Next time: instrument activation from launch (Did they share? When? How many times?) and build a nudge flow. "It's been 48 hours since you signed up. Try sharing your link with one person." This is a retention problem, not a design problem, but it shapes everything.

**Admin dashboard should have been designed in parallel, not after**

I designed the affiliate landing page, then the affiliate dashboard, then realized ops needed an admin tool to manage these affiliates. This was a scope miss. What an affiliate *sees* needs to match what an admin can *manage* — these should be designed together, not sequentially. Designing them in sequence created inconsistencies and reconciliation work we had to fix after launch.

**Payout trust needed visual design, not just copy**

The FAQ addressed every payout question in text: "Payouts within 10 days," "Minimum $10 threshold," "Flexible timing builds trust." But text doesn't build trust as effectively as visual flow. A payout status timeline in the dashboard — "Referral assigned → Verified → Processed → Paid" with actual dates — would have reduced payout anxiety more than any paragraph of copy. Next iteration: add visual payout tracker.

### What This Taught Me

**Transparency is a trust mechanism, not a feature.**

I went in thinking that leading with earnings would feel transactional. Instead, it signals confidence. Showing potential affiliates exactly how much they can earn upfront (not burying it) communicates "we have nothing to hide." That's more powerful than any mission statement.

**Three connected surfaces need simultaneous design.**

Designing them sequentially (landing page → affiliate dashboard → admin dashboard) meant I missed dependencies. What an affiliate sees and what an admin manages are two views of the same data. They should be designed together, informed by each other, not built one after another.

**Affiliate retention is determined by what happens after sign-up, not by the sign-up page itself.**

The landing page's job is conversion. But whether that conversion *sticks* — whether the affiliate actually comes back and uses the system — is determined by the dashboard and the experience of earning and getting paid. A beautiful landing page with no post-sign-up engagement is a leaky funnel.

---

# END DRAFT

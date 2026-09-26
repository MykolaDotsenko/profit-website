# PROFIT Field → Economics Reveal — Static vs Motion Farmer Test v1

Status: **BLOCKED until WWW-002 produces a surviving art-direction base**  
Date: 2026-09-26

Canonical basis:
- `docs/website-blueprint-v1.md`
- `docs/modern-visual-effects-deep-pass-2026.md`
- `docs/ai/IMPLEMENTATION_PLAN.md`
- `prototypes/field-economics-reveal/README.md`

## 1. Decision

Determine whether controlled motion helps a target farmer understand PROFIT's information path faster or more correctly than the best static composition.

This test does **not** ask whether motion looks better.

Primary question:

> Does motion improve comprehension of **farm reality → data/source → economic interpretation → evidence/confidence → decision** without increasing distraction, false precision, unsupported causal interpretation, mobile weakness, accessibility loss, or disproportionate technical cost?

## 2. Gate

Do not run this test before:

- WWW-000 hero-message validation has completed;
- WWW-001 has produced three independent art directions;
- WWW-002 has produced a surviving art-direction base or a sufficiently narrow survivor set.

Do not use the existing motion prototype as the visual base if it biases the art-direction choice.

## 3. Controlled scenario

Use exactly the same scenario in Static A and Motion B.

### Farm context

- Field: **Field 24**
- Crop: **Wheat**
- Area: **41.7 ha**

### Operational/data context

Use only as contextual/source information:

- Nitrogen: **164 kg/ha**
- Rainfall: **421 mm**
- Yield: **5.1 t/ha**

Do **not** imply that any one of these factors caused the economic result.

### Economic interpretation

**€221 / ha**  
**Operating profit**

This is a **statistics-calibrated synthetic value**, aligned with the current Field Profitability metric definition. Its calibration is documented in `docs/experiments/www-000-statistical-surrogate-v1.md`. It remains hypothetical and is not customer evidence.

### Evidence

**HYPOTHETICAL EXAMPLE**

### Confidence

**Confidence: Not assessed**

### Decision question

Use a question, not a fabricated recommendation:

**What would you investigate before changing the plan for this field?**

The design may expose a next action such as:

**Review field economics**

Do not invent an agronomic or financial recommendation.

## 4. Variant A — Static control

All meaning must be visible simultaneously.

Required elements:

1. approved real agricultural image or clearly illustrative material;
2. static field boundary;
3. operational/data context with source/provenance cues;
4. dominant economic interpretation;
5. evidence + confidence directly adjacent to the economic value;
6. decision question;
7. CTA / next action.

The static composition is also the reduced-motion information baseline.

### Static acceptance

A participant should be able to identify without animation:

- which field/context is being discussed;
- what the operational/data values represent;
- what €221/ha means;
- that the example is hypothetical;
- that confidence has not been assessed;
- what they would investigate/do next.

If Static A fails this, do not test Motion B yet. Fix the composition first.

## 5. Variant B — Minimal motion

Duplicate Variant A exactly.

Motion may only direct attention/order.

### Sequence

1. **Farm reality already visible**
2. **Field boundary draws**
   - purpose: establish scope
3. **Operational/data context appears**
   - purpose: establish source/context
4. **Economic interpretation receives emphasis**
   - purpose: shift attention to economic meaning
5. **Evidence/confidence remain visually coupled to the metric**
   - do not create a period where the number looks more authoritative than its evidence
6. **Decision question / next action resolves**
   - purpose: complete the decision-support path

### Do not use in the controlled B variant

- financial count-up;
- bounce/pop markers;
- decorative parallax;
- farm blur/dimming unless independently justified;
- long pinned/sticky scrollytelling;
- kinetic typography;
- glow/particle effects;
- generic "data flying into dashboard" choreography;
- GSAP;
- WebGL/Three.js.

## 6. Implementation ladder for Variant B

Use the least complex implementation that can run the test.

1. static SVG field boundary;
2. SVG stroke/path animation;
3. native CSS opacity/translate/emphasis;
4. CSS scroll-driven animation only as progressive enhancement;
5. small JavaScript only if the controlled test cannot be implemented reliably otherwise.

Do not introduce GSAP for v1 of this test.

View Transitions are out of scope for the internal reveal. They may be tested separately for:
- field exhibit → detailed economics;
- metric → methodology/evidence detail.

## 7. Motion-element ledger

Before implementation, complete this table.

| Element | What information does motion explain? | What is lost if static? | Simpler option | Mobile plan | Reduced-motion plan | Keep? |
|---|---|---|---|---|---|---|
| Field-boundary draw | Establish field scope | TBD | Static boundary | TBD | Static boundary visible | TEST |
| Data/context reveal | Establish source/context order | TBD | Static labels | TBD | Labels visible | TEST |
| Metric emphasis | Direct attention to economics | TBD | Typography/contrast | TBD | Metric already dominant | TEST |
| Evidence/confidence | Calibrate interpretation | Nothing may be lost | Always visible | TBD | Always visible | SEMANTICS REQUIRED |
| Decision reveal | Complete decision path | TBD | Static question | TBD | Question visible | TEST |

Any element without a clear information benefit defaults to REMOVE.

## 8. Participants

Exploratory cohort:

**12–18 target farm decision-makers**

Relevant to the current field/crop profitability wedge.

Record:
- role;
- farm type;
- approximate scale;
- country/region;
- digital-tool confidence;
- whether they currently compare field-level economics.

Do not mix investor responses into this decision.

## 9. Assignment

For primary measures, use a between-first-exposure design.

Counterbalance:

- Group 1 sees Static A first.
- Group 2 sees Motion B first.

Collect all primary measures before showing the alternative.

After primary measures, show the second version for comparative feedback.

Reason:
seeing Motion first may teach the intended sequence and contaminate Static comprehension; seeing Static first may teach the content and reduce the apparent value of Motion.

## 10. Participant script

Do not explain the intended sequence before exposure.

### First exposure

Show the assigned variant.

For Motion B:
- normal user-controlled scroll;
- no instruction to "watch the animation";
- do not force a fixed playback pace.

### Primary questions

1. **What is this showing you?**
2. **What does €221/ha mean?**
3. **What do the nitrogen, rainfall and yield values represent?**
4. **How certain should you be about this result?**
5. **Is this real observed/verified customer value or something else?**
6. **What would you do next?**
7. **Did anything imply that a particular factor caused the margin? If so, what?**

Then hide the screen.

### Recall

Ask:

- Which field/farm detail do you remember?
- Which economic result do you remember?
- What evidence label do you remember?
- What confidence information do you remember?
- What next action/question do you remember?
- What visual movement/effect do you remember?

### Trust probe

Ask:

- What would you verify before acting?
- Did the presentation feel transparent, uncertain, overconfident, or theatrical?
- Did any part look more precise than the information justified?

### Distraction probe

Ask:

- What did you notice first?
- Did anything move before you had time to read it?
- Did the movement help you understand the relationship or just attract attention?

## 11. Timing

Record:

- time to first correct economic interpretation;
- time to correctly identify evidence/confidence;
- time to state a reasonable next action/question.

Do not treat longer dwell time as success.

Motion that forces the user to wait for meaning has a cost.

## 12. Correct interpretation rubric

### PASS

Participant can explain substantially:

**This is a specific field/context. PROFIT is showing source/context data, an economic interpretation of €221/ha margin, that it is only a hypothetical example with confidence not assessed, and that I should investigate/review before changing a decision.**

### CONCERN

Participant understands economics but:
- misses evidence/confidence;
- overstates certainty;
- cannot connect data/source to economic interpretation;
- cannot identify next action.

### REJECT signal

Participant concludes:
- one displayed factor definitely caused the margin;
- €221/ha is observed/verified customer value;
- the animation itself is the main takeaway;
- this is primarily a satellite/visualization demo rather than decision support.

## 13. Primary comparison dimensions

| Dimension | Static A | Motion B |
|---|---|---|
| Economic comprehension | | |
| Evidence interpretation | | |
| Confidence interpretation | | |
| Information-lineage reconstruction | | |
| Unsupported causal inference | | |
| Time to understand | | |
| Economic-result recall | | |
| Evidence/confidence recall | | |
| Decision recall | | |
| Effect recall | N/A | |
| Calibrated trust | | |
| Distraction | | |
| Mobile task success | | |
| Reduced-motion information parity | baseline | |

Use:
- PASS
- CONCERN
- REJECT
- NEEDS EVIDENCE

Do not create a cosmetic /100 winner score.

## 14. Mobile test

Use ~390 px.

Same content.

Variant B must not:
- require wide spatial choreography;
- pan around the field;
- hide economic evidence under sticky layers;
- make users scroll through a long animation before reading the conclusion.

Record:
- task completion;
- missed information;
- accidental scrolling past the meaning;
- smoothness;
- whether motion remains helpful.

## 15. Reduced-motion test

Force `prefers-reduced-motion: reduce`.

Expected result:
**the complete Static A information state**.

Required:
- field boundary visible;
- data/source context visible;
- economic interpretation visible;
- HYPOTHETICAL EXAMPLE visible;
- Confidence: Not assessed visible;
- decision question visible.

Any loss of meaning = REJECT.

## 16. Performance comparison

Record the delta introduced by Motion B:

- client JS bytes;
- animation/runtime dependencies;
- asset weight;
- main-thread/CPU behavior;
- LCP risk;
- INP risk;
- CLS risk;
- mobile smoothness.

For the first experiment, target:
- zero animation runtime dependency;
- zero GSAP;
- no additional heavy media;
- no layout shift caused by animation.

## 17. Generic-effect challenge

Show or describe the motion without PROFIT name/logo/content.

Ask the team:

**Could this exact choreography be transferred unchanged to a generic AI analytics, crypto, fintech or design-agency website?**

If yes:
- it has low brand-distinctiveness value;
- it may still survive if comprehension value is strong;
- do not call it a signature.

## 18. Kill criteria

Kill Motion B or reduce it to a simpler cue if any material pattern occurs:

- Static A explains the information as well or better;
- Motion B does not materially improve comprehension/recall;
- time to correct understanding worsens;
- users remember movement more strongly than economic meaning;
- motion increases unsupported causal interpretation;
- evidence/confidence recall is worse;
- users read €221/ha before understanding HYPOTHETICAL EXAMPLE / Confidence: Not assessed;
- mobile is materially weaker;
- reduced-motion loses information;
- motion delays access to the decision/CTA;
- performance/runtime cost is disproportionate;
- the same benefit can be achieved by static hierarchy or one SVG cue;
- choreography is generic creative-tech with no PROFIT-specific explanatory role.

## 19. Promotion criteria

### Keep as static only

If Motion B fails to add material value.

### Keep one motion element

If a single element, such as field-boundary draw, helps while the full sequence does not.

### Validated PROFIT motion pattern

Only if Motion B materially improves farmer comprehension/recall or information-lineage reconstruction without material penalties.

### Signature motion

Do **not** use this label from this test alone.

Signature status requires later recognition evidence across multiple PROFIT surfaces.

## 20. Result template

### Cohort
-

### Art direction used
-

### Static A
- Comprehension:
- Evidence/confidence:
- Time:
- Trust:
- Failure patterns:

Decision:
PASS / CONCERN / REJECT / NEEDS EVIDENCE

### Motion B
- Comprehension:
- Evidence/confidence:
- Time:
- Trust:
- Distraction:
- Mobile:
- Reduced motion:
- Performance:
- Failure patterns:

Decision:
PASS / CONCERN / REJECT / NEEDS EVIDENCE

### Motion elements retained
-

### Motion elements killed
-

### Final motion decision
- Static only / simplified cue / validated pattern / needs more evidence

### Remaining uncertainty
-

### Reconsider if
-

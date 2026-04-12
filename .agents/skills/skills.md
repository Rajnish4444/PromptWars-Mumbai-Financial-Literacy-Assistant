# SKILLS.md

## Skill: Product alignment check
Before implementing any feature, verify:
- Does this teach a financial concept?
- Is it interactive?
- Is it beginner-friendly?
- Is it still a learning tool rather than a planner?
- Can the value be demonstrated clearly in under 30 seconds?

If the answer is no, reshape the feature before building.

---

## Skill: Beginner-first writing
When writing UI copy:
- use short sentences
- avoid jargon
- define terms immediately
- prefer examples from everyday life
- explain “why it matters”
- avoid intimidating financial language

Bad:
“Optimize long-term capital allocation through diversified exposure.”

Good:
“Spreading money across different investments can reduce risk.”

---

## Skill: Educational simulator design
For every simulator:
- include a small plain-language intro
- keep inputs minimal
- show instant deterministic output
- explain what changed and why
- include a warning that this is educational, not financial advice
- provide a text/table fallback for any chart

---

## Skill: Safe AI tutor design
When implementing AI features:
- keep prompts educational
- forbid financial advice and product recommendations
- prefer structured JSON responses
- validate all parsed output
- handle unavailable/errored AI gracefully
- never let AI own the math

Preferred AI response shapes:
- concept explanation
- key takeaway bullets
- common mistake list
- short quiz question set
- recommended next lesson

---

## Skill: Judge-oriented implementation
Prefer changes that improve:
- clarity of demo
- code readability
- testability
- accessibility
- visible Google services usage
- simple architecture

When forced to choose:
- choose fewer polished features over many shallow ones

---

## Skill: Angular implementation quality
Prefer:
- standalone components
- feature-based folders
- route lazy loading
- signals for derived/local state
- pure functions for calculations
- reusable shared UI states
- strict typing
- thin components

Avoid:
- unnecessary global state
- tightly coupled Firebase logic in components
- large monolithic pages
- hidden magic behavior

---

## Skill: Accessibility review
For every page:
- verify heading hierarchy
- verify tab order
- verify focus visibility
- verify labels and helper text
- verify live feedback is announced when needed
- verify chart alternatives exist
- verify color contrast assumptions are not required

---

## Skill: Testing review
For every feature:
- test calculations
- test empty/loading/error states
- test at least one successful user flow
- test one important edge case
- prefer deterministic tests over brittle snapshot-heavy tests
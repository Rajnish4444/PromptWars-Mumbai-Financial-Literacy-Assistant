# AGENTS.md

## Project
**Name:** FinLit Lab  
**Goal:** Build a beginner-friendly financial literacy web app that helps users understand saving, budgeting, and investing in a simple and interactive way.

## Product intent
This project is a **financial literacy learning tool**, not a financial planner, not a portfolio manager, and not a personal finance tracker.

The app should help users:
- understand key concepts
- explore “what-if” outcomes interactively
- test their knowledge
- ask follow-up questions in simple language
- build confidence step by step

## Judging priorities
Optimize for:
1. Problem statement alignment
2. Code quality
3. Security
4. Efficiency
5. Testing
6. Accessibility
7. Google services usage

## Approved stack
- Angular 21
- TypeScript strict mode
- Angular Material
- Firebase App Hosting
- Firebase Authentication
- Cloud Firestore
- Firebase AI Logic
- Firebase App Check
- Vitest for unit/integration tests
- Playwright for end-to-end tests

## Required product sections
- Home
- Learn
- Simulate
- Quiz
- AI Tutor
- Progress

## Non-negotiable product rules
- The app must focus on **learning**, not financial planning.
- Do not ask users for unnecessary sensitive financial data.
- Do not frame features as advice or recommendations for real investments.
- All content must be understandable to beginners.
- Prefer plain English and define jargon immediately.
- Every feature must feel interactive, not just informational.

## Non-negotiable engineering rules
- Use standalone Angular components only.
- Use route-level lazy loading.
- Use signals for local reactive state where appropriate.
- Keep business logic in pure TypeScript functions.
- Keep components thin and services/domain logic separate.
- Use strict typing everywhere.
- Avoid unnecessary dependencies and complex state libraries.
- Prefer simple architecture that can be explained to judges in 2 minutes.

## AI usage rules
AI is allowed to:
- explain concepts simply
- compare concepts
- summarize simulator outputs in beginner-friendly language
- generate quiz questions
- generate study plans and next-step learning suggestions

AI is not allowed to:
- perform the final deterministic calculations for simulators
- provide personalized financial advice
- recommend specific financial products
- make claims that are not grounded in the app’s educational scope

If AI output is used in the UI:
- require structured JSON where possible
- validate shape before rendering
- provide fallback states if AI fails
- never block core learning flows on AI availability

## Simulation rules
All educational simulators must use deterministic TypeScript logic for:
- savings growth
- compound interest
- simple budgeting breakdowns
- inflation impact
- risk/return comparison scenarios

These functions must:
- be pure
- be unit tested
- handle invalid input safely
- be documented clearly

## Accessibility rules
- Use semantic HTML and proper heading order.
- All interactive elements must be keyboard accessible.
- Maintain visible focus states.
- Use accessible names for controls.
- Charts must have table or text alternatives.
- Do not rely on color alone to convey meaning.
- Respect reduced-motion preferences.
- Prefer Angular Material or native controls where possible.

## Security rules
- No secrets in the repo.
- Use Firebase Auth for user-scoped data.
- Use Firestore rules to enforce per-user access.
- Use App Check where applicable.
- Store only the minimum data needed for learning progress.
- Test security rules with emulators.
- Treat all client input as untrusted.

## Testing rules
Every meaningful feature must include:
- unit tests for logic
- component tests for key UI states
- at least one end-to-end path for major user flows

Core flows to cover:
- opening and completing a learning module
- using a simulator
- completing a quiz
- using the AI tutor success and fallback states
- viewing saved progress

## Output expectations for every task
Before making changes:
1. Inspect the repo
2. Summarize what already exists
3. Propose a short plan

When implementing:
1. Make the smallest complete change
2. Update tests
3. Keep copy beginner-friendly
4. Avoid unrelated refactors

After implementing:
1. Summarize changed files
2. Summarize commands run
3. Note remaining risks or gaps
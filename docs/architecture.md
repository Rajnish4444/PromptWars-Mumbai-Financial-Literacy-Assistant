# Architecture

## Frontend
- Angular 21
- standalone components
- Angular Material
- signals for local and derived UI state
- route-level lazy loading

## Pages
- /
- /learn
- /simulate
- /quiz
- /tutor
- /progress

## Feature folders
- src/app/features/learn
- src/app/features/simulate
- src/app/features/quiz
- src/app/features/tutor
- src/app/features/progress
- src/app/core
- src/app/shared

## Core domain layer
Place deterministic logic in:
- src/app/core/finance

This includes:
- compound interest
- savings growth
- inflation impact
- budget split examples
- simple comparison scenarios

## Firebase usage
- Auth for user identity
- Firestore for progress and quiz attempts
- AI Logic for tutor explanations and question generation
- App Check for abuse reduction

## Design principle
Core learning features should continue to work even if AI fails.
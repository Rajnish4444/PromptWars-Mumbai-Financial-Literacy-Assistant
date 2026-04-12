# Test Strategy

## Unit tests
Test pure simulation logic:
- savings growth
- compound interest
- inflation effect
- budget breakdown examples
- scenario comparison helpers

## Component tests
Test:
- Learn module rendering
- Quiz scoring and feedback
- Simulator input/output states
- AI tutor loading/error/success states
- Progress page states

## End-to-end tests
Cover:
- complete a lesson
- use a simulator
- finish a quiz
- use the AI tutor
- view updated progress

## Security tests
- Firestore rule tests with emulator
- verify per-user access isolation

## Quality gates
- lint passes
- unit tests pass
- build passes
- e2e critical flows pass
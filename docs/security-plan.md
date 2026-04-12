# Security Plan

## Principles
- store minimal user data
- all user-owned documents are scoped by uid
- no secrets committed
- AI is educational only
- validate all client input
- handle service errors safely

## Firebase protections
- Firebase Authentication
- Firestore security rules
- App Check
- local emulator tests for rules

## UI protections
- escape and validate AI responses before rendering
- parse structured responses safely
- avoid dangerous HTML rendering
- provide safe fallback states

## Data minimization
Do not collect:
- bank data
- account balances
- exact financial identity details
- unnecessary personal information
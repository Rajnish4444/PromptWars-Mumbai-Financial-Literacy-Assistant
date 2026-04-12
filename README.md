# FinLit Lab 🚀
*An interactive, hyper-accessible financial literacy platform designed to turn complex money concepts into engaging, beginner-friendly simulations.*

## 📖 The Problem
Financial education is often filled with jargon, predatory up-selling, and dry spreadsheets. Beginners need a safe sandbox to test their hypotheses about saving, investing, and budgeting *without* the risk of losing real money or being funneled into a sponsored ETF pipeline.

## 🛠 Our Solution
**FinLit Lab** is an interactive educational suite specifically engineered to solve this alignment problem. It features:
- **Interactive Learn Modules:** Bite-sized text cards explaining core concepts (Compound Interest, Inflation) combined with immediate "Knowledge Check" quizzes.
- **Deterministic Simulators:** Instant, client-side TypeScript charting tools allowing users to visibly slide their savings rate or risk tolerance to see the long-term impact in graphical format.
- **Safe AI Tutor:** Powered by **Google Gemini Developer API**, this tutor is explicitly sandboxed to *block* personalized financial advice. It serves *only* to simplify jargon or explain simulator outputs, creating a completely safe environment.
- **Progress Tracking:** Leveraging **Firebase Authentication** and **Firestore persistence**, users passively track their topic mastery, generating a dynamic educational dashboard highlighting their weak points.

## 💻 Tech Stack
- **Framework**: Angular 19 (Standalone, Signals architecture).
- **Styling**: SCSS, Angular Material, Custom SVG animations.
- **Backend/DB**: Firebase Authentication, Firestore Rules, App Check.
- **AI**: Google Vertex AI / Gemini integration.

## 🏃🏽 Development Set Up
This repository leverages the **Firebase Local Emulator Suite** ensuring safe, zero-cost development loops.

```bash
# Provide dependencies
npm install 

# Run tests
npm run test

# Boot up local instance
npm run start
```

## 🔒 Security
Data mutations are fiercely protected via strict `firestore.rules`.
No cross-pollution of user scores is permitted. See [Security Summary](docs/security-summary.md) for deeper architecture specifics mapping to AI prompt constraints.

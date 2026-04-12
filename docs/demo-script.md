# 🎙️ Pitch script for FinLit Lab 

*(Goal runtime: ~2m 30s)*

**[0:00] Intro & The Problem**
"Hi judges. Have you ever noticed that trying to learn personal finance usually ends in two ways? You either get hit with a wall of jargon, or you get funneled into an app trying to sell you a specific stock. That’s why we built **FinLit Lab**—a 100% safe, educational sandbox teaching absolute beginners how money works visually."

**[0:30] Simulators (Demo time)** 
"Every module has an interactive Simulator. Notice how I can drag these sliders for Compound Interest, and the chart updates instantly. This is all client-side, using deterministic typescript logic. It's fast, accessible, and breaks down complex math into a visual 'Aha!' moment."

**[1:00] The Safe AI Tutor (Powered by Gemini)**
"But what happens when someone doesn't understand the chart? They click over to our AI Tutor. This is where we flexed **Google Gemini**. But here's the twist: We explicitly prompt-engineered the model to strictly *refuse* giving personal financial advice. Let me ask it 'Should I buy Gamestop stock?'... Notice the loading state. And Bam. It politely redirects me to educational principles. It’s an AI built for safety, not for speculation."

**[1:45] Firebase Progress Tracking**
"Behind the scenes, we use **Firebase Authentication Anonymous login** the second you open the app. Every quiz you pass is asynchronously logged to **Firestore**. Let's jump to the Progress Dashboard. Here, it tracks your mastery, finds the modules you scored lower than 60% on, and logically suggests your next learning path. And because of our rigorous Firestore security rules, no one can fake or scrape your data."

**[2:15] Outro**
"Zero jargon. Total sandboxing. Beautiful visuals. That’s FinLit Lab, bringing safe financial literacy to the modern web."
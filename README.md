# 🌟 Rishav Agrawal - Personal Data Science & AI Portfolio (Next.js)

A high-performance, modern, animated personal portfolio web application built with **Next.js (App Router)**, **React**, and **TypeScript** for **Rishav Agrawal**, showcasing expertise in **Data Science**, **Machine Learning**, **Retrieval-Augmented Generation (RAG)**, and **Data Structures & Algorithms (DSA)**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio live.

---

## 🛠️ Scripts

- `npm run dev` - Starts the development server at [http://localhost:3000](http://localhost:3000)
- `npm run build` - Builds the application for production
- `npm run start` - Runs the built production server
- `npm run lint` - Runs ESLint code quality checks

---

## 📂 Project Architecture

```
Project/
├── app/
│   ├── globals.css              # Cyber-glassmorphism styles, glowing orbs & animations
│   ├── layout.tsx               # Root layout, Google Fonts, Font Awesome CDN & metadata
│   └── page.tsx                 # Main application page
├── components/
│   ├── ParticleBackground.tsx   # Interactive HTML5 Constellation Canvas with mouse physics
│   ├── Navbar.tsx               # Sticky navbar with mobile drawer & emerald theme toggle
│   ├── Hero.tsx                 # Dynamic typewriter effect & animated metrics counters
│   ├── About.tsx                # Data science philosophy & core focus cards
│   ├── Skills.tsx               # 4 categorized technical skill matrix cards
│   ├── Projects.tsx             # Featured ML & RAG project cards with live action buttons
│   ├── InteractiveLab.tsx       # Live interactive labs:
│   │                            #  1. Gurgaon Housing Price Estimator (ML model simulation)
│   │                            #  2. RAG AI Assistant Interactive Pipeline Simulator
│   │                            #  3. DSA Algorithmic Playground & 1-click code copier
│   │
│   ├── Journey.tsx              # Growth milestones timeline with glowing nodes
│   ├── Contact.tsx              # Contact info & interactive form with feedback state
│   ├── ProjectModal.tsx         # Deep-dive architecture modal with pipeline flowcharts
│   └── Footer.tsx               # Footer with copyright and smooth back-to-top button
├── package.json                 # Next.js scripts and dependencies
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## 🌟 Key Features

1. **Interactive Real-Time Labs**:
   - **Gurgaon Housing ML Valuation Estimator**: Interactive sliders for BHK, Area, Luxury Score, and Sector dropdown that computes valuations and feature impacts in real time.
   - **RAG Teaching Assistant Pipeline**: 4-step pipeline simulator (Embeddings -> Vector DB Search -> Chunk Reranking -> Grounded LLM Response).
   - **DSA Algorithmic Visualizer**: Live code viewers for fundamental patterns (Two Sum, Binary Search, Sliding Window) with 1-click code copying and complexity breakdowns.

2. **Cyberpunk & Glassmorphic Design**:
   - Deep-space palette with glowing cyan, indigo, and purple accents.
   - Interactive constellation canvas with cursor physics.
   - Magic wand button to toggle glowing emerald theme accent.

3. **Production Next.js Architecture**:
   - Fully typed components with TypeScript.
   - Fast client-side transitions and responsive mobile design.

---

## 🌐 1-Click Deployment to Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new). Simply connect your GitHub repository, and Vercel will build and deploy automatically with instant SSL.

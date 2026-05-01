# 🗳️ ElectionPath

ElectionPath is a modern, interactive, and mobile-first educational platform designed to help citizens, students, and first-time voters understand the election process in a clear, engaging, and non-partisan way.

## 🌟 Core Features

- **📍 Interactive Election Journey:** A guided, step-by-step roadmap from voter registration to counting day. Each stage features "Why it matters," "Who is involved," and common pitfalls.
- **🤖 AI-Powered Civic Assistant:** A high-performance chatbot powered by **Groq (Llama 3.3 70B)**. It is context-aware, meaning it knows which part of the site you are currently reading to provide tailored help.
- **🌗 Premium Dual-Theme Engine:** Features an elegant 'Premium White Mode' and a sleek 'Premium Dark Mode' built on a custom Ivory/Charcoal palette, breaking away from standard corporate blue designs.
- **🎯 Hero Navigation Hybrid:** An interactive hero section featuring quick-access pills and tabs that act as the central dashboard for the platform.
- **📅 Election Schedule:** A status-aware vertical timeline showing completed, active, and upcoming election phases.
- **📚 Smart Glossary:** A searchable dictionary of election jargon (like *Constituency*, *Manifesto*, etc.) with interactive accordions.
- **✅ Knowledge Quiz:** A fun way to check your understanding with instant feedback, hints, and scoring.
- **🛡️ Trust & Transparency:** A strictly neutral, factual, and non-political design system inspired by government transparency portals but with a premium startup aesthetic.
- **📱 Mobile-First Design:** Fully responsive layout that looks stunning on phones, tablets, and desktops.

## 🏗️ Technology Stack

- **Frontend:** React (Vite), Tailwind CSS, Framer Motion (Animations), Lucide Icons.
- **Backend:** Node.js, Express.
- **AI Engine:** Groq API (Llama 3.3 70B model).
- **Security:** Backend proxy for API calls and `.env` environment variables.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.
- A **Groq API Key** (placed in a `.env` file).

### Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.

### Running the Project
You need to run both the backend AI server and the frontend development server:

**Terminal 1 (Backend AI Proxy):**
```bash
node server.js
```

**Terminal 2 (Frontend UI):**
```bash
npm run dev
```

## 🔒 Security Note
This project uses a backend proxy (`server.js`) to ensure that your **Groq API Key** is never exposed to the client-side code, keeping your credentials secure.

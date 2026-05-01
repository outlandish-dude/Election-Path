# ElectionPath Architecture Overview

ElectionPath is a high-performance, interactive educational platform designed to simplify the election process for first-time voters and students.

## 🏗️ Tech Stack

### Frontend
- **Framework:** React 18 (via Vite)
- **Styling:** Tailwind CSS (Modern, mobile-first, civic-themed utility-first styling)
- **Animations:** Framer Motion (Smooth section reveals and chat transitions)
- **Icons:** Lucide React (Clean, professional civic iconography)

### Backend (AI Engine)
- **Runtime:** Node.js
- **Server:** Express.js
- **AI Integration:** Groq API (using the Llama 3 70B model via OpenAI-compatible SDK)
- **Security:** `dotenv` (API keys are strictly server-side and never exposed to the client)

## 🧩 Core Components

1.  **Hero Section:** High-impact introduction with CTA navigation.
2.  **Election Journey:** Interactive, multi-stage roadmap of the electoral process.
3.  **Timeline Calendar:** A vertical, status-aware schedule showing completed, active, and upcoming phases.
4.  **Glossary:** Searchable dictionary of political jargon with interactive accordions.
5.  **Quiz:** State-managed interactive learning assessment with instant feedback.
6.  **AI Civic Assistant:** 
    - **Groq-Powered:** Uses Llama 3 70B for near-instant, high-quality civic explanations.
    - **Context Awareness:** Automatically detects which section the user is viewing via scroll-tracking and passes it as context to the AI.
    - **Guardrails:** Strictly non-partisan system prompt to prevent political bias.

## 🔐 Security & Optimization
- **Backend Proxy:** The frontend communicates with `server.js` on port 3001, which acts as a secure proxy for Groq API calls.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.
- **State Management:** React hooks for local data handling and chat history.
- **Accessibility:** Semantic HTML5 structure with ARIA labels.

## 📡 Data Flow
1. User enters query in `AssistantWidget`.
2. Widget fetches current scroll position to determine page context.
3. Request sent to `POST /api/chat` (Backend).
4. Backend retrieves `GROQ_API_KEY`, calls Groq API with system prompt + user message + context.
5. AI response returned and rendered with typing animations.

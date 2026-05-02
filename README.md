# 🗳️ ElectionPath

**ElectionPath** is a modern, interactive civic-tech platform designed to simplify the election process for students, first-time voters, and the general public.

It transforms complex election procedures into a **clear, guided, and AI-powered learning experience**.

---

## 🚀 Live Demo

🌐 Deployed on Google Cloud Run
👉 https://election-path-996339334653.us-central1.run.app/

---

## 💡 Problem Statement

Understanding the election process can be confusing due to:

* Complex terminology
* Multiple stages and rules
* Lack of accessible explanations

ElectionPath solves this by providing a **step-by-step, interactive, and AI-assisted guide**.

---

## ✨ Key Features

### 🗺️ Interactive Election Journey

* Step-by-step roadmap:
  Registration → Nomination → Campaign → Voting → Counting → Results
* Each stage includes:

  * What happens
  * Why it matters
  * Who is involved
  * Common mistakes

---

### 🤖 AI-Powered Civic Assistant

* Context-aware chatbot
* Explains concepts in simple, neutral language
* Adapts responses based on the section the user is viewing

---

### ⚡ Dual AI Architecture (High Reliability)

* **Primary:** Google Gemini API
* **Fallback:** Groq (LLaMA 3)

Ensures:

* No downtime
* Fast responses
* Graceful failure handling

---

### 📅 Election Timeline

* Visual representation of election phases
* Status-based flow (upcoming, active, completed)

---

### 📚 Smart Glossary

* Simplified definitions of election-related terms
* Beginner-friendly explanations

---

### 🧠 Knowledge Quiz

* Interactive questions
* Instant feedback
* Reinforces understanding

---

### 🎨 Premium UI/UX

* Clean, modern design
* Premium White & Dark modes
* Smooth animations and transitions
* Mobile-first responsive layout

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Framer Motion
* Lucide Icons

### Backend

* Node.js
* Express

### AI Integration

* Google Gemini API (Primary)
* Groq API (Fallback)

### Deployment

* Google Cloud Run

---

## 🧠 Architecture Overview

User → Frontend → Backend API → AI Layer

AI Layer Logic:

1. Try Gemini API
2. If failure → fallback to Groq
3. If both fail → return safe default response

This ensures **high availability and reliability**.

---

## 🔒 Security Practices

* API keys stored using environment variables
* No sensitive data exposed to frontend
* `.env` excluded via `.gitignore`
* Backend proxy protects AI APIs

---

## ⚙️ Local Setup

### Prerequisites

* Node.js installed
* API keys (Gemini / Groq)

---

### Installation

```bash
npm install
```

---

### Run Backend

```bash
node server.js
```

---

### Run Frontend

```bash
npm run dev
```

---

## ☁️ Deployment (Google Cloud Run)

This project is deployed using Google Cloud Run:

```bash
gcloud run deploy election-path \
--source . \
--allow-unauthenticated
```

Environment variables are securely configured during deployment.

---

## 🎯 Key Highlights

* Built using AI-assisted development (Prompt-driven approach)
* Focus on **clarity, accessibility, and real-world usability**
* Designed as a **product**, not just a project
* Uses Google Cloud infrastructure for scalability

---

## 📌 Hackathon Context

This project was developed as part of:

**Prompt Wars Virtual — Challenge 2: Election Process Education**

Goal:
To create an assistant that explains election processes in an interactive and easy-to-understand way.

---

## 🤝 Connect

* LinkedIn: https://www.linkedin.com/in/rajdeepdutta27/
* GitHub: https://github.com/outlandish-dude

---

## 📄 Disclaimer

This project is developed for educational purposes as part of a hackathon challenge.
It is a neutral, non-partisan platform and does not promote any political party, candidate, or ideology.

Users are encouraged to refer to official sources for authoritative information.

---

## © Copyright

© Rajdeep Dutta. All rights reserved.

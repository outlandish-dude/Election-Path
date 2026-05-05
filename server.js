import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from 'openai';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '10kb' }));

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { reply: "Too many requests, please try again later.", source: "limit" }
});

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// AI Configuration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// Using gemini-1.5-flash as primary, but will fallback to gemini-pro if needed
const flashModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const proModel = genAI.getGenerativeModel({ model: "gemini-pro" });

// Groq fallback
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const localFallbackMap = {
  "registration": "Voter registration is the process of adding your name to the official list of voters.",
  "nomination": "Nomination is where candidates declare their intention to run for office.",
  "campaign": "Campaigning is where candidates share their visions with voters.",
  "voting": "Voting is the act of casting your ballot to choose representatives.",
  "counting": "Counting is the secure process of totaling all valid votes.",
  "general": "Elections follow a path: Registration, Nomination, Campaign, Voting, and Counting."
};

const getLocalFallback = (context, message) => {
  const ctx = (context || 'general').toLowerCase();
  const msg = (message || '').toLowerCase();
  if (msg.includes('regist') || ctx.includes('regist')) return localFallbackMap.registration;
  if (msg.includes('nominat') || ctx.includes('nominat')) return localFallbackMap.nomination;
  if (msg.includes('campaign') || ctx.includes('campaign')) return localFallbackMap.campaign;
  if (msg.includes('vote') || msg.includes('polling') || ctx.includes('vote')) return localFallbackMap.voting;
  if (msg.includes('count') || ctx.includes('count')) return localFallbackMap.counting;
  return localFallbackMap.general;
};

app.get('/health', (req, res) => res.status(200).send('OK'));

app.post('/api/chat', apiLimiter, async (req, res) => {
    const { message, context } = req.body;
    const prompt = `System: You are an Election Education Assistant. Explain election processes in simple, neutral, non-partisan language.
Context: ${context || 'General'}
User: ${message}`;

    try {
      if (!process.env.GEMINI_API_KEY) throw new Error("API Key Missing");
      
      // Try Flash first
      try {
        const result = await flashModel.generateContent(prompt);
        return res.status(200).json({ reply: result.response.text(), source: "gemini-flash" });
      } catch (flashError) {
        console.warn("Flash failed, trying Pro:", flashError.message);
        try {
          const result = await proModel.generateContent(prompt);
          return res.status(200).json({ reply: result.response.text(), source: "gemini-pro" });
        } catch (proError) {
          console.warn("Pro failed, trying Groq:", proError.message);
          // Try Groq as fallback
          if (process.env.GROQ_API_KEY) {
            const completion = await groq.chat.completions.create({
              messages: [{ role: "user", content: prompt }],
              model: "llama-3.3-70b-versatile",
            });
            return res.status(200).json({ 
              reply: completion.choices[0].message.content, 
              source: "groq" 
            });
          }
          throw proError; // Rethrow if no Groq key
        }
      }
    } catch (e) {
      console.error("All AI models failed:", e.message);
      return res.status(200).json({ 
        reply: getLocalFallback(context, message), 
        source: "local_fallback" 
      });
    }
});

app.get('*', (req, res) => {
  if (req.path.includes('.') || req.path.startsWith('/api')) {
    return res.status(404).send('Not Found');
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;

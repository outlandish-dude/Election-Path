import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from "@google/generative-ai";

import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});

// Initialize Groq Client
const groqClient = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `
You are an Election Education Assistant.

Your job:
* Explain election processes in simple, clear language
* Be neutral, factual, and non-political
* Never promote any party, candidate, or ideology
* Break down complex topics into easy steps
* Use examples when helpful
* Keep answers concise but informative

Tone:
* Friendly, calm, and trustworthy
* Like a smart teacher explaining to a first-time voter

Important Rule:
If user asks: "Who should I vote for?" or similar political opinions, you must respond:
"I'm here to explain the election process, not suggest choices."
    `;

app.post('/api/chat', async (req, res) => {
  const { message, context } = req.body;

  try {
    // STEP 1: Try Gemini
    const geminiResponse = await geminiModel.generateContent([
      systemPrompt,
      `User is currently viewing: ${context || 'General Election Info'}`,
      message
    ]);

    const reply = geminiResponse.response.text();
    return res.status(200).json({ 
      reply, 
      source: "gemini" 
    });

  } catch (geminiError) {
    console.error("Gemini failed:", geminiError.message);

    try {
      // STEP 2: Fallback to Groq
      const completion = await groqClient.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: `Context: ${context || 'General Election Info'}\n\n${message}`,
          },
        ],
        temperature: 0.5,
        max_tokens: 500,
      });

      const reply = completion.choices[0].message.content;
      return res.status(200).json({ 
        reply, 
        source: "groq" 
      });

    } catch (groqError) {
      console.error("Groq also failed:", groqError.message);

      // FINAL FALLBACK (never fail UI)
      return res.status(200).json({
        reply: "I'm currently experiencing high load, but elections typically follow stages like registration, nomination, campaigning, voting, and counting. How can I help you understand the process better?",
        source: "fallback"
      });
    }
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

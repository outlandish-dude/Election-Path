import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, context } = req.body;

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

User is currently viewing: ${context || 'General Election Info'}
    `;

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error from Groq API:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

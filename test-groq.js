import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

async function main() {
  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "user", content: "Say test" }
      ],
    });
    console.log("Success:", completion.choices[0].message.content);
  } catch (error) {
    console.error("Error connecting to Groq:", error);
  }
}

main();

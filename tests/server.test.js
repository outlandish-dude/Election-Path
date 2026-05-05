import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import app from '../server';

// Mock Gemini
vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn().mockImplementation(function() {
      return {
        getGenerativeModel: vi.fn().mockImplementation(() => ({
          generateContent: vi.fn().mockImplementation(async (content) => {
            const text = typeof content === 'string' ? content : content.contents[0].parts[0].text;
            if (text.includes('FAIL_ME')) {
              throw new Error('Gemini API Error');
            }
            return {
              response: {
                text: () => 'Mocked Gemini Response'
              }
            };
          })
        }))
      };
    })
  };
});

describe('Backend Server API', () => {
  it('GET /health should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.text).toBe('OK');
  });

  it('POST /api/chat should return Gemini response on success', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello', context: 'General' });
    
    expect(res.status).toBe(200);
    expect(res.body.reply).toBe('Mocked Gemini Response');
    expect(res.body.source).toBe('gemini');
  });

  it('POST /api/chat should fallback to local response on Gemini failure', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: 'FAIL_ME registration', context: 'journey' });
    
    expect(res.status).toBe(200);
    expect(res.body.source).toBe('local_fallback');
    expect(res.body.reply).toContain('registration');
  });

  it('POST /api/chat should return 400 for empty message', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: '', context: 'General' });
    
    expect(res.status).toBe(400);
  });
});

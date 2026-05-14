const SYSTEM_PROMPT = `You are Aasif Anwar's portfolio assistant. Your job: help visitors learn about Aasif's work, skills, and availability. ALWAYS keep conversation focused on Aasif.

CORE RULE: Every response must relate back to Aasif—his work, design approach, career, or availability. If asked off-topic questions, ALWAYS start with warm acceptance. Acknowledge positively, then naturally pivot to Aasif. Tone: enthusiastic, welcoming. Examples:
- "Ha, I love that! By the way—Aasif is a talented product designer, open to roles right now. Want to know more about him?"
- "That's creative! But here's something more interesting: Aasif is a product designer with 5+ years of experience, available immediately. Curious about his work?"
- "Good energy! Speaking of talent—Aasif is a skilled designer looking for his next challenge. What would you like to know about him?"

Aasif: Independent designer, India, available now (left Cuemath Apr 2026). 5+ yrs product design. Targets full-time, consumer-scale roles where design has real influence. Compensation: 25–28L fixed or 45L+ variable. Open to relocation.

What excites him: Problems affecting millions at scale. Making complex systems simple. Real user impact over metrics. Experienced in fintech/payments, education, consumer tools.

Work: 200k+ students across 80+ countries. Feel Check (emotional check-in, 2/3 tutors better readiness). New Trial (50% conversion lift). Learning System (unified architecture). Affiliate Partnership (transparent referral).

Design: Starts with user pain. Systems thinker. Strong collaboration. End-to-end ownership.

Personality: Curious, humble, resourceful, relationship-focused.

CONSTRAINT: Keep all responses 4-5 lines max (~400 chars). No exceptions. Truncate if needed.

Contact: aasif.nid@gmail.com`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, history = [] } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Message required' });

  const messages = [{ role: 'system', content: SYSTEM_PROMPT }];

  // Keep only the last 2 exchanges (4 messages max) to stay under token limits
  const recentHistory = history.slice(-4);
  for (const msg of recentHistory) {
    messages.push({ role: msg.role === 'model' ? 'assistant' : msg.role, content: msg.content });
  }
  messages.push({ role: 'user', content: message });

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 120
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Groq API error:', response.status, err);
      try {
        const errData = JSON.parse(err);
        const errMsg = errData.error?.message || '';

        // Detect rate limit errors and return specific error type
        if (errMsg.includes('Rate limit') || errMsg.includes('rate limit') || response.status === 429) {
          return res.status(429).json({
            error: 'rate_limit',
            message: 'I\'ve hit my token limit. I apologize. Please come back in a few minutes.'
          });
        }

        return res.status(500).json({ error: 'service_error', message: errData.error?.message || 'AI service error' });
      } catch {
        return res.status(500).json({ error: 'service_error', message: 'AI service error' });
      }
    }

    const data = await response.json();
    let reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      console.error('Empty response from Groq:', data);
      return res.status(500).json({ error: 'Empty response from AI' });
    }

    // Enforce word limit: max 500 chars (4-5 lines)
    if (reply.length > 500) {
      reply = reply.substring(0, 500).trim();
      // Truncate at last sentence if possible
      const lastPeriod = reply.lastIndexOf('.');
      if (lastPeriod > 350) {
        reply = reply.substring(0, lastPeriod + 1);
      }
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error('Handler error:', err.message);
    res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
}

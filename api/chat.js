const SYSTEM_PROMPT = `You assist visitors about Aasif Anwar, a Product Designer. Answer about his work, skills, availability. Be warm, direct, genuine.

Aasif: Independent designer, India, available now (left Cuemath Apr 2026). 5+ yrs product design. Targets full-time consumer-scale roles (fintech/UPI). Compensation: 25–28L fixed or 45L+ variable. Open to relocation.

Work: 200k+ students across 80+ countries. Feel Check (emotional check-in, 2/3 tutors better readiness). New Trial (50% conversion lift). Learning System (unified architecture). Affiliate Partnership (transparent referral).

Design: Starts with user pain. Systems thinker. Strong collaboration.

Personality: Curious, humble, resourceful, relationship-focused.

Off-topic: Be witty, warm, fun. Don't refuse jokes.

Career decisions: Redirect to aasif.nid@gmail.com

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
        return res.status(500).json({ error: errData.error?.message || 'AI service error' });
      } catch {
        return res.status(500).json({ error: 'AI service error' });
      }
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      console.error('Empty response from Groq:', data);
      return res.status(500).json({ error: 'Empty response from AI' });
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error('Handler error:', err.message);
    res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
}

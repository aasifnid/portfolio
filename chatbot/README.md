# Chatbot

The portfolio chatbot. Context lives here; the runtime function lives at `/api/chat.js` (Vercel requires that path — Vercel serverless functions must be inside `/api/`).

## Files

- `context.md` — long-form context about Aasif used to inform the system prompt
- `knowledge-base.md` — knowledge base / response patterns the chatbot draws from
- `../api/chat.js` — the live Vercel function (system prompt is currently hardcoded inline; update there when chatbot copy changes)

## When updating the chatbot

1. Edit `context.md` and `knowledge-base.md` here
2. Sync any user-facing changes into the `SYSTEM_PROMPT` constant in `/api/chat.js`
3. Deploy

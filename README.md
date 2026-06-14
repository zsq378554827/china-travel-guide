# China Travel Guide MVP

Astro MVP for the China Travel Guide project.

## Local development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` when configuring integrations.

- `PUBLIC_SITE_URL`: production site URL used for sitemap and canonical links.
- `PUBLIC_TIANDITU_KEY`: Tianditu Web API key. Without it, the homepage map shows a transparent Spike status and keeps HTML city links available.
- `PUBLIC_CHECKOUT_URL`: Lemon Squeezy or Gumroad checkout URL. Without it, purchase CTAs point to `/unlock/#checkout-note`.

## Current scope

- Homepage `/`
- Unlock page `/unlock/`
- Terms and privacy pages
- Checklist and city/free-guide placeholder routes so MVP navigation does not point to 404s

# China Travel Guide MVP

Astro MVP for the China Travel Guide project.

## Local development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` when configuring integrations.

- `PUBLIC_SITE_URL`: production site URL used for canonical links, `robots.txt`, and sitemap files.
- `PUBLIC_TIANDITU_KEY`: Tianditu Web API key. Without it, the homepage map shows a transparent Spike status and keeps HTML city links available.
- `PUBLIC_CHECKOUT_URL`: Lemon Squeezy or Gumroad checkout URL. Without it, purchase CTAs point to `/unlock/#checkout-note`.
- `PUBLIC_GA_MEASUREMENT_ID`: optional GA4 measurement ID. When set, the layout loads Google Analytics.
- `PUBLIC_PLAUSIBLE_DOMAIN`: optional Plausible domain. When set, the layout loads Plausible.

The site emits three lightweight analytics events when GA4 or Plausible is configured:

- `city_click`
- `unlock_click`
- `checkout_click`

## Cloudflare Pages deployment

Recommended first-public-URL sequence:

1. Push this repository to GitHub.
2. In Cloudflare Pages, connect the GitHub repository.
3. Use build command `npm run build`.
4. Use output directory `dist`.
5. Do not set `PUBLIC_TIANDITU_KEY`, `PUBLIC_CHECKOUT_URL`, or analytics variables for the first deploy.
6. After Cloudflare returns the `https://*.pages.dev` URL, set `PUBLIC_SITE_URL` to that URL and redeploy.
7. Verify `/`, `/unlock/`, `/china-travel-checklist/`, one city page, one attraction page, one setup guide, `/robots.txt`, `/sitemap.xml`, `/sitemap-index.xml`, and canonical URLs.

Optional CLI deploy after `wrangler login`:

```bash
npm run build
npx wrangler pages deploy ./dist --project-name=china-travel-guide
```

Keep real API keys, checkout URLs, and analytics IDs in Cloudflare Pages environment variables or local `.env`; do not commit them.

## Current scope

- Homepage `/`
- Unlock page `/unlock/`
- Terms and privacy pages
- Checklist, city routes, itinerary previews, attraction pages, setup guides, and success page so MVP navigation does not point to 404s

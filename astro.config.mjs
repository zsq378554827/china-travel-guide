import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://china-travel-guide-bq8.pages.dev",
  integrations: [
    sitemap({
      filter: (page) => !/\/map-concept-(a|b|c)\/?$/.test(page),
    }),
  ],
});

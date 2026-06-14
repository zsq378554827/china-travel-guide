import { resolvedSiteUrl } from "@data/site";

export const prerender = true;

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${resolvedSiteUrl}/sitemap.xml`,
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

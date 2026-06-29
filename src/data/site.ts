export const site = {
  name: "China Travel Guide",
  description:
    "Free first-day China city guides, arrival setup tips, and a downloadable Arrival Pack for first-time visitors.",
  price: "$9.90",
  updatedLabel: "Last updated: June 14, 2026",
};

export const defaultSiteUrl = "https://china-travel-guide-bq8.pages.dev";
export const resolvedSiteUrl = (import.meta.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");

export const checkoutUrl = import.meta.env.PUBLIC_CHECKOUT_URL || "/unlock/#checkout-note";

export const navLinks = [
  { label: "Cities", href: "/#cities" },
  { label: "Free Guides", href: "/#cities" },
  { label: "Travel Prep", href: "/#travel-prep" },
  { label: "Arrival Pack", href: "/#arrival-pack" },
];

export const footerLinks = [
  { label: "Cities", href: "/#cities" },
  { label: "Free Guides", href: "/#cities" },
  { label: "Arrival Checklist", href: "/arrival-checklist/" },
  { label: "Travel Prep", href: "/#travel-prep" },
  { label: "Arrival Pack", href: "/unlock/" },
  { label: "Payments", href: "/travel-prep/payment-internet/" },
  { label: "Tickets", href: "/travel-prep/transport-tickets/" },
  { label: "Terms", href: "/terms/" },
  { label: "Privacy", href: "/privacy/" },
];

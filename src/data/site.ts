export const site = {
  name: "China Travel Guide",
  description:
    "Free 1-day China city guides for first-time visitors, with complete current 2-day, 3-day, arrival setup, and printable PDF packs.",
  price: "$9.90",
  updatedLabel: "Last updated: June 14, 2026",
};

export const defaultSiteUrl = "https://china-travel-guide-bq8.pages.dev";
export const resolvedSiteUrl = (import.meta.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");

export const checkoutUrl = import.meta.env.PUBLIC_CHECKOUT_URL || "/unlock/#checkout-note";

export const navLinks = [
  { label: "Cities", href: "/#cities" },
  { label: "Free 1-Day Guides", href: "/#cities" },
  { label: "Arrival Checklist", href: "/china-travel-checklist/" },
  { label: "Travel Setup", href: "/china-travel-checklist/#setup-guides" },
];

export const footerLinks = [
  { label: "Cities", href: "/#cities" },
  { label: "Free 1-Day Guides", href: "/#cities" },
  { label: "Arrival Checklist", href: "/china-travel-checklist/" },
  { label: "Travel Setup", href: "/china-travel-checklist/#setup-guides" },
  { label: "Payments", href: "/how-to-pay-in-china/" },
  { label: "Tickets", href: "/china-ticket-booking-guide/" },
  { label: "Terms", href: "/terms/" },
  { label: "Privacy", href: "/privacy/" },
];

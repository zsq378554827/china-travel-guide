export const site = {
  name: "China Travel Guide",
  description:
    "Free first-day China city guides, arrival setup tips, and a printable China Arrival Pack for first-time visitors.",
  price: "$9.90",
  updatedLabel: "Last updated: June 14, 2026",
};

export const defaultSiteUrl = "https://china-travel-guide-bq8.pages.dev";
export const resolvedSiteUrl = (import.meta.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");

export const checkoutUrl = import.meta.env.PUBLIC_CHECKOUT_URL || "/unlock/#checkout-note";

export const navLinks = [
  { label: "Cities", href: "/#cities" },
  { label: "Free Guides", href: "/#cities" },
  { label: "Travel Setup", href: "/china-travel-checklist/#setup-guides" },
  { label: "Arrival Checklist", href: "/china-travel-checklist/" },
  { label: "Arrival Pack", href: "/unlock/" },
];

export const footerLinks = [
  { label: "Cities", href: "/#cities" },
  { label: "Free Guides", href: "/#cities" },
  { label: "Arrival Checklist", href: "/china-travel-checklist/" },
  { label: "Travel Setup", href: "/china-travel-checklist/#setup-guides" },
  { label: "Arrival Pack", href: "/unlock/" },
  { label: "Payments", href: "/how-to-pay-in-china/" },
  { label: "Tickets", href: "/china-ticket-booking-guide/" },
  { label: "Terms", href: "/terms/" },
  { label: "Privacy", href: "/privacy/" },
];

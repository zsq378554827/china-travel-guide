export type SetupGuide = {
  slug: string;
  href: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  summary: string;
  basics: string[];
  steps: {
    title: string;
    text: string;
  }[];
  commonIssues: string[];
  freeChecklist: string[];
  paidPreview: string[];
  related: {
    label: string;
    href: string;
  }[];
};

export const setupGuides: SetupGuide[] = [
  {
    slug: "how-to-pay-in-china",
    href: "/how-to-pay-in-china/",
    title: "How to Pay in China",
    h1: "How to Pay in China as a First-Time Visitor",
    eyebrow: "Payments",
    description:
      "A practical China payment setup guide for first-time visitors covering mobile wallets, card backups, cash, and common payment issues.",
    summary:
      "Payment setup is one of the biggest friction points for first-time China trips. Use this free guide as a preflight checklist, then use the full setup pack for step-by-step screenshots and troubleshooting.",
    basics: ["Set up at least one mobile wallet before arrival.", "Keep a backup card and small cash reserve.", "Check fees, limits, and verification screens inside each app."],
    steps: [
      { title: "Prepare a payment wallet", text: "Install and verify your preferred wallet before you need it at a station, restaurant, or attraction." },
      { title: "Add a backup method", text: "Keep another card, wallet, or cash option ready in case one payment flow fails." },
      { title: "Test with a small purchase", text: "Use a low-pressure transaction first so you can solve verification problems before a time-sensitive payment." },
      { title: "Save offline proof", text: "Keep hotel address, booking confirmations, and emergency cash separate from your phone wallet." },
    ],
    commonIssues: ["Card verification can fail while traveling.", "Some small vendors may prefer QR payments.", "App screens, fees, and limits can change."],
    freeChecklist: ["Install wallet app", "Add card", "Confirm identity steps", "Carry small cash", "Save bank support contact"],
    paidPreview: ["Alipay setup flow", "WeChat Pay backup flow", "Card failure troubleshooting", "Cash and ATM backup notes", "Offline payment emergency card"],
    related: [
      { label: "China Travel Apps", href: "/china-travel-apps/" },
      { label: "China Travel Checklist", href: "/china-travel-checklist/" },
      { label: "Unlock the full setup pack", href: "/unlock/" },
    ],
  },
  {
    slug: "china-public-transport-guide",
    href: "/china-public-transport-guide/",
    title: "China Public Transport Guide",
    h1: "China Public Transport Guide for First-Time Visitors",
    eyebrow: "Metro, bus, taxi",
    description:
      "A first-time visitor guide to using metro, bus, taxi, and Chinese address backups in China without overcomplicating your trip.",
    summary:
      "For a short first trip, the goal is not to master every transport option. It is to know when to use metro, when to use taxi, and what to save offline before your phone signal or payment flow gets stressful.",
    basics: ["Use metro for predictable city travel.", "Use taxi or ride-hailing for luggage, late nights, or hard transfers.", "Keep hotel and attraction names in Chinese."],
    steps: [
      { title: "Save your base area", text: "Keep your hotel name, address, phone number, and nearest metro station in Chinese and English." },
      { title: "Choose transport by friction", text: "Metro is best for predictable cross-city moves; taxi is better with luggage or limited time." },
      { title: "Prepare station exits", text: "Large stations can have many exits. Save the exit letter or landmark before you leave mobile signal." },
      { title: "Build buffers", text: "Add time for security checks, transfers, queues, and app verification." },
    ],
    commonIssues: ["Wrong station exit can add long walks.", "Taxi drivers may need Chinese addresses.", "Peak-hour transfers can be slower than expected."],
    freeChecklist: ["Hotel address in Chinese", "Nearest metro station", "Taxi pickup point", "Offline map pins", "Backup route"],
    paidPreview: ["Metro QR setup", "Taxi address cards", "Airport and rail transfers", "City-by-city station notes", "Transport backup scripts"],
    related: [
      { label: "High-Speed Rail Guide", href: "/china-high-speed-rail-guide/" },
      { label: "How to Pay in China", href: "/how-to-pay-in-china/" },
      { label: "Unlock the full setup pack", href: "/unlock/" },
    ],
  },
  {
    slug: "china-high-speed-rail-guide",
    href: "/china-high-speed-rail-guide/",
    title: "China High-Speed Rail Guide",
    h1: "China High-Speed Rail Guide for First-Time Visitors",
    eyebrow: "High-speed rail",
    description:
      "A practical China high-speed rail guide for first-time visitors covering station planning, passport names, arrival buffers, and train-day mistakes.",
    summary:
      "China's high-speed rail can be one of the easiest ways to move between cities, but first-time visitors should treat station choice, passport details, and arrival buffers as core planning items.",
    basics: ["Match passport details exactly when booking.", "Check the station name, not only the city name.", "Arrive early enough for security, navigation, and boarding."],
    steps: [
      { title: "Confirm the station", text: "Many cities have multiple rail stations. Save the exact departure station in Chinese and English." },
      { title: "Use passport details consistently", text: "Keep the same name order and document number across booking, ticket pickup, and boarding checks." },
      { title: "Plan station arrival time", text: "Build time for security, ticket problems, walking distance, and platform access." },
      { title: "Save train-day backups", text: "Keep the train number, station, hotel address, and next-city transport plan offline." },
    ],
    commonIssues: ["Wrong station is a common expensive mistake.", "Large stations can take longer than expected.", "Passport-name mismatch can create ticket problems."],
    freeChecklist: ["Exact station name", "Train number", "Passport details", "Arrival buffer", "Next-city hotel address"],
    paidPreview: ["Rail booking checklist", "Station transfer templates", "Passport-name troubleshooting", "Missed train backup plan", "First China rail day timeline"],
    related: [
      { label: "Public Transport Guide", href: "/china-public-transport-guide/" },
      { label: "China Travel Apps", href: "/china-travel-apps/" },
      { label: "Unlock the full setup pack", href: "/unlock/" },
    ],
  },
  {
    slug: "china-travel-apps",
    href: "/china-travel-apps/",
    title: "China Travel Apps",
    h1: "China Travel Apps to Set Up Before Your First Trip",
    eyebrow: "Apps",
    description:
      "A simple China travel apps checklist for first-time visitors covering payment, messaging, maps, translation, booking, and offline backups.",
    summary:
      "The right app setup reduces friction, but the real win is redundancy: payments, translation, maps, bookings, and hotel details should not depend on one app working perfectly.",
    basics: ["Install core apps before travel.", "Verify accounts while you still have stable service.", "Save essential travel details outside app-only screens."],
    steps: [
      { title: "Set up communication", text: "Prepare messaging and translation options before you need help at a station, hotel, or attraction." },
      { title: "Set up payments", text: "Install wallet apps and add backup payment methods before arrival." },
      { title: "Set up maps and transport", text: "Save Chinese place names, station names, and hotel addresses in your chosen map app." },
      { title: "Set up offline backups", text: "Export or screenshot confirmations, emergency contacts, and address cards." },
    ],
    commonIssues: ["SMS verification may fail abroad or after arrival.", "Some app features depend on identity or payment checks.", "Single-app dependency is risky on travel days."],
    freeChecklist: ["Payment wallet", "Messaging", "Translation", "Maps", "Booking app", "Offline screenshots"],
    paidPreview: ["App setup order", "Verification checklist", "Offline backup pack", "Emergency phrase cards", "City-specific app notes"],
    related: [
      { label: "How to Pay in China", href: "/how-to-pay-in-china/" },
      { label: "Ticket Booking Guide", href: "/china-ticket-booking-guide/" },
      { label: "Unlock the full setup pack", href: "/unlock/" },
    ],
  },
  {
    slug: "china-ticket-booking-guide",
    href: "/china-ticket-booking-guide/",
    title: "China Ticket Booking Guide",
    h1: "China Ticket Booking Guide for Attractions and First-Time Visitors",
    eyebrow: "Tickets",
    description:
      "A practical China attraction ticket booking guide covering passport names, QR codes, booking windows, confirmation screenshots, and backup plans.",
    summary:
      "For famous China attractions, ticket friction often comes from timing, passport-name rules, and confirmation details. This free guide keeps the basics visible before you build a full itinerary.",
    basics: ["Book high-demand attractions early when possible.", "Use passport details exactly as required.", "Save confirmation codes and QR screens offline."],
    steps: [
      { title: "Identify high-demand sights", text: "Treat major attractions like Forbidden City, Great Wall routes, and Terracotta Warriors as planning anchors." },
      { title: "Check passport-name rules", text: "Use the same document details across booking and entry checks." },
      { title: "Save confirmations offline", text: "Do not rely only on live app access at the gate." },
      { title: "Plan a backup sight", text: "Every city day should have a slower backup if tickets, weather, or energy fail." },
    ],
    commonIssues: ["Tickets can sell out.", "Name or passport mismatch can block entry.", "QR codes and booking screens may need internet or app access."],
    freeChecklist: ["Target attraction", "Booking window", "Passport name", "QR code screenshot", "Backup attraction"],
    paidPreview: ["City-by-city booking reminders", "Passport-name checklist", "Ticket failure backup plans", "Attraction pairing table", "Printable booking tracker"],
    related: [
      { label: "China Travel Checklist", href: "/china-travel-checklist/" },
      { label: "Forbidden City guide", href: "/attractions/forbidden-city/" },
      { label: "Unlock the full setup pack", href: "/unlock/" },
    ],
  },
];

export const setupGuideBySlug = new Map(setupGuides.map((guide) => [guide.slug, guide]));

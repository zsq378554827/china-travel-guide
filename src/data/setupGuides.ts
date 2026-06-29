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
  officialSources?: {
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
      "Payment setup is one of the biggest friction points for first-time China trips. Use this free guide as a preflight checklist, then use the Arrival Pack for step-by-step screenshots and troubleshooting.",
    basics: [
      "Set up at least one mobile wallet before arrival.",
      "Keep a backup card and small cash reserve.",
      "Check fees, limits, and verification screens inside each app; public guidance says fee waivers often depend on transaction amount and provider rules.",
    ],
    steps: [
      { title: "Prepare a payment wallet", text: "Install and verify your preferred wallet before you need it at a station, restaurant, or attraction." },
      { title: "Add a backup method", text: "Keep another card, wallet, or cash option ready in case one payment flow fails." },
      { title: "Test with a small purchase", text: "Use a low-pressure transaction first so you can solve verification problems before a time-sensitive payment." },
      { title: "Save offline proof", text: "Keep hotel address, booking confirmations, and emergency cash separate from your phone wallet." },
    ],
    commonIssues: [
      "Card verification can fail while traveling.",
      "Some small vendors may prefer QR payments.",
      "Fee thresholds, promotions, and refund handling can change; trust the payment page shown in the app.",
    ],
    freeChecklist: ["Install wallet app", "Add card", "Confirm identity steps", "Check fee threshold in app", "Carry small cash", "Save bank support contact"],
    paidPreview: ["Alipay setup flow", "WeChat Pay backup flow", "Card failure troubleshooting", "Cash and ATM backup notes", "Offline payment emergency card"],
    related: [
      { label: "Travel Apps", href: "/travel-prep/apps/" },
      { label: "China Travel Checklist", href: "/china-travel-checklist/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "Shanghai guide to WeChat Pay / Alipay for overseas cards", href: "https://english.shanghai.gov.cn/en-BankingServices/20231215/fe3a293d065f40e0a7f740aa88edb050.html" },
      { label: "Beijing payment services for inbound visitors", href: "https://english.beijing.gov.cn/specials/paymentservices/" },
      { label: "WeChat Pay international-card fee waiver notice", href: "https://english.beijing.gov.cn/specials/paymentservices/news/202505/t20250528_4100629.html" },
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
    basics: ["Use metro for predictable city travel.", "Use taxi or ride-hailing for luggage, late nights, or hard transfers.", "Keep hotel and attraction names in Chinese for drivers, station staff, and backup routes."],
    steps: [
      { title: "Save your base area", text: "Keep your hotel name, address, phone number, and nearest metro station in Chinese and English." },
      { title: "Choose transport by friction", text: "Metro is best for predictable cross-city moves; taxi is better with luggage or limited time." },
      { title: "Prepare station exits", text: "Large stations can have many exits. Save the exit letter or landmark before you leave mobile signal." },
      { title: "Build buffers", text: "Add time for security checks, transfers, queues, and app verification." },
    ],
    commonIssues: ["Wrong station exit can add long walks.", "Taxi drivers may need Chinese addresses.", "Airport, station, and metro app rules vary by city.", "Peak-hour transfers can be slower than expected."],
    freeChecklist: ["Hotel address in Chinese", "Nearest metro station", "Taxi pickup point", "Offline map pins", "Backup route"],
    paidPreview: ["Metro QR setup", "Taxi address cards", "Airport and rail transfers", "City-by-city station notes", "Transport backup scripts"],
    related: [
      { label: "High-Speed Rail Guide", href: "/china-high-speed-rail-guide/" },
      { label: "How to Pay in China", href: "/how-to-pay-in-china/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "Beijing new-arrival transportation guide", href: "https://english.beijing.gov.cn/latest/specials/essentialtipsfornewarrivals/transportation/202408/t20240830_3785706.html" },
      { label: "Shanghai metro guide for international visitors", href: "https://english.shanghai.gov.cn/en-Transportation/20231214/c727f5e15eff4b8c9340651dd95f3f7c.html" },
    ],
  },
  {
    slug: "can-foreigners-use-alipay-in-china",
    href: "/can-foreigners-use-alipay-in-china/",
    title: "Can Foreigners Use Alipay in China?",
    h1: "Can Foreigners Use Alipay in China?",
    eyebrow: "Alipay",
    description:
      "A first-time visitor FAQ on using Alipay in China with an overseas card, including setup timing, backup payments, and common failure points.",
    summary:
      "Many visitors can use Alipay by installing the app, choosing the international traveler flow when available, and linking an eligible overseas bank card. Treat this as a pre-trip setup task, not something to solve at a crowded counter.",
    basics: [
      "Download Alipay before departure and complete account setup while you still have stable SMS and email access.",
      "Link an eligible overseas card and follow the verification prompts shown in the app.",
      "Use Alipay as one payment option, not your only option; keep WeChat Pay, a card, and small cash as backups.",
    ],
    steps: [
      { title: "Install and register early", text: "Finish the basic account setup before travel so SMS, email, and card verification problems do not block your first day." },
      { title: "Link an overseas card", text: "Use the app's current card-linking flow and confirm the accepted network, billing details, and any fee prompt shown before payment." },
      { title: "Test with a small purchase", text: "Try a low-pressure payment before relying on Alipay for tickets, taxis, or a restaurant queue." },
      { title: "Keep a second payment path", text: "Save a backup wallet, physical card, and small cash reserve for vendors or app flows that fail." },
    ],
    commonIssues: [
      "SMS or identity verification can fail while traveling.",
      "Some payment functions, limits, and fees depend on app rules and card issuer rules.",
      "Refunds may go through the original payment path and can take time.",
      "A working Alipay setup does not guarantee every merchant or service will accept every card-linked transaction.",
    ],
    freeChecklist: ["Install Alipay", "Verify account", "Link eligible card", "Check fee prompt", "Test small purchase", "Prepare backup payment"],
    paidPreview: ["Alipay setup flow", "Pre-trip verification checklist", "Payment failure troubleshooting", "Refund and duplicate-payment notes", "Offline backup card"],
    related: [
      { label: "How to Pay in China", href: "/how-to-pay-in-china/" },
      { label: "Can tourists use WeChat Pay?", href: "/can-tourists-use-wechat-pay-in-china/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "Alipay+ guide for paying in the Chinese mainland", href: "https://www.alipayplus.com/pay-in-the-chinese-mainland/" },
      { label: "China government payment guide for overseas visitors", href: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html" },
      { label: "Shanghai guide to linking overseas bank cards with Alipay", href: "https://english.shanghai.gov.cn/en-FAQs-StudyinShanghai/20231211/a58d4c15179f468fb2c5d72b393f1fd4.html" },
    ],
  },
  {
    slug: "can-tourists-use-wechat-pay-in-china",
    href: "/can-tourists-use-wechat-pay-in-china/",
    title: "Can Tourists Use WeChat Pay in China?",
    h1: "Can Tourists Use WeChat Pay in China?",
    eyebrow: "WeChat Pay",
    description:
      "A practical FAQ for tourists using WeChat Pay in China with an overseas card, including setup checks and payment backup planning.",
    summary:
      "Tourists may be able to use WeChat Pay after setting up WeChat, opening the wallet flow, and linking an eligible overseas card. The details can change, so confirm the current app prompts before you rely on it.",
    basics: [
      "Set up WeChat and WeChat Pay before a time-sensitive payment.",
      "Use the app's current card-linking and verification flow for overseas cards.",
      "Keep Alipay and small cash as backups because some wallet features or card-linked transactions may be limited.",
    ],
    steps: [
      { title: "Create and secure your WeChat account", text: "Finish login, phone verification, and account recovery checks before arrival." },
      { title: "Open the payment wallet", text: "Follow the current in-app path to add an overseas card and create the required payment password if prompted." },
      { title: "Check the card and fee prompts", text: "Review card network support, billing verification, transaction limits, and any fee notice in the app." },
      { title: "Test before you need it", text: "Make a small payment or keep WeChat Pay as a backup until you know it works with your card." },
    ],
    commonIssues: [
      "SMS verification and card issuer checks can fail outside your home country.",
      "Some features may require additional identity checks or may not work the same as a local wallet.",
      "Merchant acceptance and card-linked wallet success can vary by scenario.",
      "Do not keep only one phone-based payment option for your first day.",
    ],
    freeChecklist: ["WeChat login works", "Wallet flow visible", "Card linked", "Payment password set", "Small test payment", "Alipay or cash backup"],
    paidPreview: ["WeChat Pay setup flow", "Card-linking checklist", "Verification failure notes", "Backup wallet comparison", "First-day payment plan"],
    related: [
      { label: "How to Pay in China", href: "/how-to-pay-in-china/" },
      { label: "Can foreigners use Alipay?", href: "/can-foreigners-use-alipay-in-china/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "China government payment guide for overseas visitors", href: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html" },
      { label: "Beijing guide to WeChat Pay for foreigners", href: "https://english.beijing.gov.cn/livinginbeijing/finance/mobilepaymentlist/202005/t20200516_1899230.html" },
      { label: "Beijing payment services for inbound visitors", href: "https://english.beijing.gov.cn/specials/paymentservices/" },
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
    basics: ["Foreign passengers can use valid passports for real-name railway tickets.", "Match passport details exactly when booking.", "Check the station name, not only the city name.", "Arrive early enough for security, navigation, and boarding."],
    steps: [
      { title: "Confirm the station", text: "Many cities have multiple rail stations. Save the exact departure station in Chinese and English." },
      { title: "Use passport details consistently", text: "Keep the same name order and document number across booking, ticket collection if needed, and boarding checks." },
      { title: "Plan station arrival time", text: "Build time for security, ticket problems, walking distance, platform access, and possible manual checks." },
      { title: "Save train-day backups", text: "Keep the train number, station, hotel address, and next-city transport plan offline." },
    ],
    commonIssues: ["Wrong station is a common expensive mistake.", "Large stations can take longer than expected.", "Passport-name mismatch can create ticket problems.", "12306 service windows and online service hours may differ by function and day."],
    freeChecklist: ["Exact station name", "Train number", "Passport details", "Arrival buffer", "Next-city hotel address", "12306 account or booking channel"],
    paidPreview: ["Rail booking checklist", "Station transfer templates", "Passport-name troubleshooting", "Missed train backup plan", "First China rail day timeline"],
    related: [
      { label: "Public Transport Guide", href: "/china-public-transport-guide/" },
      { label: "Travel Apps", href: "/travel-prep/apps/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "12306 real-name ticketing FAQ", href: "https://www.12306.cn/en/faq.html" },
      { label: "12306 English website", href: "https://www.12306.cn/en/" },
      { label: "12306 account registration page", href: "https://www.12306.cn/en/register.html" },
    ],
  },
  {
    slug: "how-to-buy-train-tickets-in-china",
    href: "/how-to-buy-train-tickets-in-china/",
    title: "How to Buy Train Tickets in China",
    h1: "How to Buy Train Tickets in China as a Foreigner",
    eyebrow: "Train tickets",
    description:
      "A practical guide to buying China train tickets as a foreign visitor, covering 12306, passport details, station names, and train-day buffers.",
    summary:
      "Foreign visitors should treat China train tickets as a real-name document task. The safest path is to use official 12306 information, match passport details exactly, and leave enough time for station checks.",
    basics: [
      "12306 is the official China Railway ticketing platform.",
      "Use passport details consistently when registering, adding passengers, and booking.",
      "Confirm exact station names because major cities can have multiple railway stations.",
    ],
    steps: [
      { title: "Check 12306 first", text: "Use the official English site or app information as the baseline for train times, registration, and ticketing rules." },
      { title: "Register with passport details", text: "Enter your name and passport information carefully, then complete the identity checks required by the current 12306 flow." },
      { title: "Choose the exact station", text: "Verify departure and arrival station names in Chinese and English before paying." },
      { title: "Save train-day proof", text: "Keep the train number, station, passport, booking confirmation, and next-city address available offline." },
    ],
    commonIssues: [
      "Wrong station selection can ruin a train day.",
      "Passport-name mismatch can cause ticket or boarding problems.",
      "Large stations require time for security, walking, and manual help.",
      "Ticket sale, change, and refund windows can differ by day or function.",
    ],
    freeChecklist: ["12306 account", "Passport details", "Exact station", "Train number", "Arrival buffer", "Offline confirmation"],
    paidPreview: ["12306 booking checklist", "Station-name comparison sheet", "Passport-name troubleshooting", "Missed train backup plan", "First rail day timeline"],
    related: [
      { label: "China High-Speed Rail Guide", href: "/china-high-speed-rail-guide/" },
      { label: "China Public Transport Guide", href: "/china-public-transport-guide/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "12306 English website", href: "https://www.12306.cn/en/" },
      { label: "12306 account registration page", href: "https://www.12306.cn/en/register.html" },
      { label: "12306 real-name ticketing FAQ", href: "https://www.12306.cn/en/faq.html" },
    ],
  },
  {
    slug: "china-travel-apps",
    href: "/travel-prep/apps/",
    title: "Travel Apps",
    h1: "Travel Apps to Set Up Before Your First Trip",
    eyebrow: "Apps",
    description:
      "A simple China travel apps checklist for first-time visitors covering payment, messaging, maps, translation, booking, and offline backups.",
    summary:
      "The right app setup reduces friction, but the real win is redundancy: payments, translation, maps, bookings, and hotel details should not depend on one app working perfectly.",
    basics: ["Install core apps before travel.", "Verify accounts while you still have stable service.", "Save essential travel details outside app-only screens.", "Avoid relying on one app for payments, maps, tickets, and translation."],
    steps: [
      { title: "Set up communication", text: "Prepare messaging and translation options before you need help at a station, hotel, or attraction." },
      { title: "Set up payments", text: "Install wallet apps and add backup payment methods before arrival." },
      { title: "Set up maps and transport", text: "Save Chinese place names, station names, and hotel addresses in your chosen map app." },
      { title: "Set up offline backups", text: "Export or screenshot confirmations, emergency contacts, and address cards." },
    ],
    commonIssues: ["SMS verification may fail abroad or after arrival.", "Some app features depend on identity or payment checks.", "Google services may be unreliable in mainland China without an appropriate network setup.", "Single-app dependency is risky on travel days."],
    freeChecklist: ["Payment wallet", "Messaging", "Translation", "Maps", "Booking app", "Offline screenshots"],
    paidPreview: ["App setup order", "Verification checklist", "Offline backup pack", "Emergency phrase cards", "City-specific app notes"],
    related: [
      { label: "How to Pay in China", href: "/how-to-pay-in-china/" },
      { label: "Ticket Booking Guide", href: "/china-ticket-booking-guide/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "Beijing mobile payment guide", href: "https://english.beijing.gov.cn/specials/aguidetoworkingandlivinginchinaasbusinessexpatriates2024/dailylifeservices/202404/t20240424_3635122.html" },
      { label: "Shanghai payment and travel-app guide", href: "https://english.shanghai.gov.cn/en-BankingServices/20231215/fe3a293d065f40e0a7f740aa88edb050.html" },
    ],
  },
  {
    slug: "china-esim-sim-card-guide",
    href: "/china-esim-sim-card-guide/",
    title: "China eSIM and SIM Card Guide",
    h1: "China eSIM and SIM Card Guide for First-Time Visitors",
    eyebrow: "Internet",
    description:
      "A first-time visitor guide to staying connected in China, comparing roaming, travel eSIMs, local SIM cards, hotel Wi-Fi, and offline backups.",
    summary:
      "Connectivity is part of your arrival setup. Your best choice depends on your phone, home carrier, itinerary, and whether you need a local number, reliable data, or access to specific services.",
    basics: [
      "Check whether your phone supports eSIM before buying a plan.",
      "Decide whether you need data only, voice/SMS, or a Chinese local number for services.",
      "Keep offline address cards and booking screenshots even if you buy an eSIM or SIM.",
    ],
    steps: [
      { title: "Check your phone and carrier", text: "Confirm eSIM support, roaming status, unlock status, and data costs before departure." },
      { title: "Pick a connection strategy", text: "Use roaming for simplicity, travel eSIM for data-first trips, or a local SIM if you need local-number support." },
      { title: "Install before arrival when possible", text: "Download eSIM profiles and instructions before the flight so airport Wi-Fi is not your only setup path." },
      { title: "Prepare offline backups", text: "Save hotel addresses, map pins, tickets, and emergency contacts outside any single online app." },
    ],
    commonIssues: [
      "Some phones do not support eSIM or may be locked to a carrier.",
      "A travel eSIM may not provide a Chinese phone number.",
      "Some local services may require SMS or a local number.",
      "Coverage, app access, hotspot, and speed depend on the provider and plan.",
    ],
    freeChecklist: ["Unlocked phone", "eSIM support checked", "Roaming cost checked", "Offline maps", "Hotel address card", "Backup contact method"],
    paidPreview: ["Arrival connectivity checklist", "eSIM vs SIM decision table", "Offline backup card", "Airport setup plan", "App access risk notes"],
    related: [
      { label: "Travel Apps", href: "/travel-prep/apps/" },
      { label: "China VPN and internet access guide", href: "/china-vpn-internet-access-guide/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "Beijing essential tips for new arrivals", href: "https://english.beijing.gov.cn/latest/specials/essentialtipsfornewarrivals/" },
    ],
  },
  {
    slug: "china-vpn-internet-access-guide",
    href: "/china-vpn-internet-access-guide/",
    title: "China VPN and Internet Access Guide",
    h1: "China VPN and Internet Access Guide for Tourists",
    eyebrow: "Internet access",
    description:
      "A conservative China internet access guide for tourists, focused on practical backups, app availability risk, and lawful provider terms rather than risky workarounds.",
    summary:
      "Internet access in mainland China can differ from what first-time visitors expect. Plan around app availability, map access, messaging, translation, and offline backups before arrival.",
    basics: [
      "Do not assume every home-country app or website will work on mainland China networks.",
      "Check your carrier, roaming, eSIM, workplace, and app provider terms before travel.",
      "Build an offline fallback for addresses, tickets, translation, and emergency contact details.",
    ],
    steps: [
      { title: "List mission-critical apps", text: "Identify which apps you need for maps, messaging, payments, email, work, and ticket access." },
      { title: "Check access before travel", text: "Review provider terms and your organization's travel rules instead of relying on last-minute fixes." },
      { title: "Prepare China-friendly alternatives", text: "Install translation, maps, payment, booking, and messaging options that you can legally and practically use during the trip." },
      { title: "Save offline essentials", text: "Keep addresses, confirmations, emergency notes, and route plans available without live internet." },
    ],
    commonIssues: [
      "Some websites and apps may be unavailable or unreliable on mainland China networks.",
      "Hotel Wi-Fi, airport Wi-Fi, roaming, and local SIM behavior can differ.",
      "Corporate VPNs and personal VPNs may be subject to provider, employer, and local rules.",
      "A connection plan is not a substitute for offline confirmations and Chinese address cards.",
    ],
    freeChecklist: ["Critical apps list", "Roaming or eSIM plan", "China-friendly maps", "Translation app", "Offline documents", "Emergency contact card"],
    paidPreview: ["Internet risk checklist", "Offline address cards", "App backup matrix", "Arrival-day connection plan", "Emergency no-data workflow"],
    related: [
      { label: "China eSIM and SIM Card Guide", href: "/china-esim-sim-card-guide/" },
      { label: "Travel Apps", href: "/travel-prep/apps/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "Beijing essential tips for new arrivals", href: "https://english.beijing.gov.cn/latest/specials/essentialtipsfornewarrivals/" },
    ],
  },
  {
    slug: "china-ticket-booking-guide",
    href: "/china-ticket-booking-guide/",
    title: "China Ticket Booking Guide",
    h1: "China Ticket Booking Guide for Attractions and First-Time Visitors",
    eyebrow: "Tickets",
    description:
      "A practical China attraction ticket booking guide covering passport names, QR codes, booking windows, confirmation screenshots, and quick backup notes.",
    summary:
      "For famous China attractions, ticket friction often comes from timing, passport-name rules, and confirmation details. This free guide keeps the basics visible before you build a full itinerary.",
    basics: ["Book high-demand attractions early when possible.", "Use passport details exactly as required.", "Save confirmation codes and QR screens offline.", "Check each attraction's current official booking channel before travel."],
    steps: [
      { title: "Identify high-demand sights", text: "Treat major attractions like Forbidden City, Great Wall routes, and Terracotta Warriors as planning anchors, not flexible add-ons." },
      { title: "Check passport-name rules", text: "Use the same document details across booking and entry checks." },
      { title: "Save confirmations offline", text: "Do not rely only on live app access at the gate." },
      { title: "Plan a backup sight", text: "Every city day should have a slower backup if tickets, weather, or energy fail." },
    ],
    commonIssues: ["Tickets can sell out.", "Some venues require real-name advance reservations.", "Name or passport mismatch can block entry.", "QR codes and booking screens may need internet or app access."],
    freeChecklist: ["Target attraction", "Official booking channel", "Booking window", "Passport name", "QR code screenshot", "Backup attraction"],
    paidPreview: ["City-by-city booking reminders", "Passport-name checklist", "Ticket failure quick backup notes", "Attraction pairing table", "Downloadable booking tracker"],
    related: [
      { label: "China Travel Checklist", href: "/china-travel-checklist/" },
      { label: "Forbidden City guide", href: "/attractions/forbidden-city/" },
      { label: "Unlock Arrival Pack - $9.90", href: "/unlock/" },
    ],
    officialSources: [
      { label: "Palace Museum visitor reservation notice", href: "https://english.beijing.gov.cn/latest/news/202306/t20230629_3150036.html" },
      { label: "Beijing ticketing guide for attractions", href: "https://english.beijing.gov.cn/specials/ticketing/index.html" },
    ],
  },
];

export const setupGuideBySlug = new Map(setupGuides.map((guide) => [guide.slug, guide]));

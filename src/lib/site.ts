// Single source of truth for the whole site.
// Keep NAP (name / address / phone) IDENTICAL to your Google Business Profile.

export const site = {
  name: "Elegant Glass Films",
  legalName: "Elegant Glass Films",
  tagline: "Window films that command light, heat, and privacy.",
  category: "Glass & mirror shop",
  // Update this to your real domain before deploying.
  url: "https://www.elegantglassfilms.in",
  rating: { value: "5.0", count: 24 },
  founded: 2014,

  phone: {
    display: "093266 25391",
    tel: "+919326625391",
    whatsapp: "919326625391",
  },
  email: "hello@elegantglassfilms.in",

  address: {
    street: "United Co-op Society, 002, Bldg 3a, Vitthalbhai Patel Rd",
    locality: "Andheri West",
    region: "Maharashtra",
    city: "Mumbai",
    postalCode: "400058",
    country: "IN",
    full: "United Co-op Society, 002, Bldg 3a, Andheri, Vitthalbhai Patel Rd, Andheri West, Mumbai, Maharashtra 400058",
  },
  geo: { lat: 19.1197, lng: 72.8464 },

  // GMB shows "Open 24 hours". Realistic, answerable hours convert better and
  // look more trustworthy. Adjust to match how you actually operate.
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], open: "09:30", close: "20:00" },
    { days: ["Sunday"], open: null, close: null },
  ],
  hoursLabel: "Mon–Sat · 9:30 AM – 8:00 PM",

  social: {
    google: "https://www.google.com/maps", // replace with your Maps profile link
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  // Technical readouts — the "instrument" specs of window film.
  specs: { label: string; value: string }[];
  benefits: string[];
  bestFor: string[];
  keyword: string; // primary SEO target
};

export const services: Service[] = [
  {
    slug: "sun-control-film",
    name: "Sun Control Film",
    short: "Cut heat and glare without losing your view.",
    headline: "Block the Mumbai heat, keep the daylight.",
    intro:
      "Sun control film rejects the infrared and ultraviolet energy that turns west-facing rooms into ovens, while letting visible light through. Rooms stay cooler, air conditioning works less, and your furniture and flooring stop fading.",
    specs: [
      { label: "UV rejection", value: "99%" },
      { label: "Heat rejection", value: "up to 78%" },
      { label: "Glare cut", value: "up to 90%" },
    ],
    benefits: [
      "Lower indoor temperature and AC running costs",
      "Stops UV fading on furniture, wood, and fabric",
      "Reduces screen and eye glare",
      "Keeps the outside view clear",
    ],
    bestFor: ["Apartments", "Offices", "West-facing glass", "Glass facades"],
    keyword: "sun control window film Mumbai",
  },
  {
    slug: "frosted-decorative-film",
    name: "Frosted & Decorative Film",
    short: "Etched-glass elegance and privacy on any pane.",
    headline: "Etched-glass looks, at a fraction of the cost.",
    intro:
      "Frosted and decorative films turn plain glass into a private, designed surface. Perfect for cabin partitions, conference rooms, and bathroom glass where you want light to pass but eyes to stop. Custom patterns, logos, and gradients available.",
    specs: [
      { label: "Privacy", value: "Full / partial" },
      { label: "Light pass", value: "Diffused" },
      { label: "Custom design", value: "Yes" },
    ],
    benefits: [
      "Instant privacy without blocking daylight",
      "Branding, logos, and custom cuts",
      "Cheaper and faster than replacing glass",
      "Easy to update when interiors change",
    ],
    bestFor: ["Office cabins", "Conference rooms", "Clinics", "Bathrooms"],
    keyword: "frosted glass film office Mumbai",
  },
  {
    slug: "safety-security-film",
    name: "Safety & Security Film",
    short: "Holds shattered glass together on impact.",
    headline: "When glass breaks, it stays in place.",
    intro:
      "Safety and security film bonds to the glass so that on impact the pane holds together instead of scattering into shards. It slows forced entry, protects against accidental breakage, and adds a layer of defence against storms and theft.",
    specs: [
      { label: "Film grade", value: "100–400 micron" },
      { label: "Shatter hold", value: "Yes" },
      { label: "UV rejection", value: "99%" },
    ],
    benefits: [
      "Reduces injury from broken glass",
      "Slows down break-ins and smash-and-grab",
      "Protects children and elderly at home",
      "Optional clear or tinted finish",
    ],
    bestFor: ["Homes", "Shopfronts", "Schools", "Ground-floor glass"],
    keyword: "safety security window film Mumbai",
  },
  {
    slug: "one-way-privacy-film",
    name: "One-Way Privacy Film",
    short: "See out by day, no one sees in.",
    headline: "Daytime privacy with a mirror finish.",
    intro:
      "One-way reflective film gives you a clear view out during the day while the outside reflects like a mirror, keeping interiors private. Ideal for street-facing flats and cabins that need privacy without curtains.",
    specs: [
      { label: "Daytime privacy", value: "High" },
      { label: "View out", value: "Clear" },
      { label: "Heat rejection", value: "up to 80%" },
    ],
    benefits: [
      "Privacy without losing your view",
      "Cooler interiors from reflective layer",
      "No curtains or blinds needed",
      "Modern mirrored exterior",
    ],
    bestFor: ["Street-facing flats", "Cabins", "Reception areas"],
    keyword: "one way mirror film Mumbai",
  },
  {
    slug: "glass-and-mirror",
    name: "Glass & Mirror Work",
    short: "Supply, cut, and fit for glass and mirrors.",
    headline: "Glass and mirror, measured and fitted right.",
    intro:
      "Beyond film, we supply and install toughened glass, mirrors, partitions, and shower enclosures — measured, cut, and fitted by the same team that handles your film work, so finishes match end to end.",
    specs: [
      { label: "Toughened glass", value: "Yes" },
      { label: "Custom mirrors", value: "Yes" },
      { label: "Site measure", value: "Free" },
    ],
    benefits: [
      "Precise on-site measurement",
      "Toughened and laminated options",
      "Partitions, shower glass, mirrors",
      "Clean, professional installation",
    ],
    bestFor: ["Homes", "Salons", "Offices", "Retail"],
    keyword: "glass and mirror shop Andheri",
  },
  {
    slug: "car-window-tinting",
    name: "Car Window Tinting",
    short: "Legal, heat-rejecting automotive film.",
    headline: "Cooler cabins, sharper looks, less glare.",
    intro:
      "Automotive films cut cabin heat and glare and protect your interior from UV, with finishes that keep your car looking sharp. We fit precision-cut film to windows that holds up to Mumbai sun and traffic.",
    specs: [
      { label: "Heat rejection", value: "up to 70%" },
      { label: "UV rejection", value: "99%" },
      { label: "Finish", value: "Clear / tinted" },
    ],
    benefits: [
      "Cooler cabin in standstill traffic",
      "Less glare while driving",
      "Protects dashboard and seats from UV",
      "Clean, bubble-free fit",
    ],
    bestFor: ["Cars", "SUVs", "Commercial vehicles"],
    keyword: "car window tinting Andheri",
  },
];

export type Area = {
  slug: string;
  name: string;
  blurb: string;
};

// Location pages capture "near me" and area-specific searches.
export const areas: Area[] = [
  { slug: "andheri-west", name: "Andheri West", blurb: "Our home base — same-day site visits across Andheri West and Lokhandwala." },
  { slug: "andheri-east", name: "Andheri East", blurb: "Office and residential glass film across Andheri East, Marol, and SEEPZ." },
  { slug: "bandra", name: "Bandra", blurb: "Privacy and sun control film for Bandra homes, studios, and storefronts." },
  { slug: "juhu", name: "Juhu", blurb: "Sea-facing flats get the most from heat-rejecting and salt-resistant film." },
  { slug: "powai", name: "Powai", blurb: "High-rise and office film for Powai and Hiranandani towers." },
  { slug: "goregaon", name: "Goregaon", blurb: "Residential and commercial film across Goregaon and the film city belt." },
];

export const reviews = [
  { name: "Rohan M.", area: "Andheri West", text: "Got sun control film for our west-facing living room. The drop in afternoon heat is real and the view is still crystal clear. Neat installation." },
  { name: "Priya S.", area: "Bandra", text: "Frosted film on our office cabins looks like proper etched glass. Team measured everything and finished in a day. Highly recommend." },
  { name: "Aakash T.", area: "Powai", text: "One-way film on our street-facing flat — full privacy in the day and we can still see out. Exactly what we wanted." },
  { name: "Sneha K.", area: "Juhu", text: "Safety film on the kids' room glass gives us peace of mind. Honest pricing and no mess left behind." },
];

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
  detail?: string;
  // Technical readouts — exactly 3 items to match SpecReadout grid-cols-3.
  specs: { label: string; value: string }[];
  benefits: string[];
  bestFor: string[];
  process?: string[];
  lifespan?: string;
  maintenance?: string;
  keyword: string; // primary SEO target
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "sun-control-film",
    name: "Sun Control Film",
    short: "Cut heat and glare without losing your view.",
    headline: "Block Mumbai heat. Keep the daylight.",
    intro:
      "Mumbai's west-facing rooms bake from midday to sunset. Sun control window film selectively blocks infrared heat and UV rays while passing visible light — so rooms stay cooler, glare vanishes from screens, and furniture stops fading. Air conditioners run fewer cycles, and most customers see a noticeable drop in cooling costs within the first summer.",
    detail:
      "Premium sun control films use nano-ceramic or sputtered metal technology to achieve high Total Solar Energy Rejection (TSER) without the dark appearance of older reflective films. Modern variants are optically neutral from inside, preserve natural colours, and are nearly invisible once applied. We carry grades from light-neutral films for clear-view applications to high-performance options for glass facades in Bandra, Powai, and Andheri.",
    specs: [
      { label: "UV rejection", value: "99%" },
      { label: "Heat rejection", value: "up to 78%" },
      { label: "Glare reduction", value: "up to 90%" },
    ],
    benefits: [
      "Rooms feel noticeably cooler within days of installation",
      "Furniture, wood floors, and artwork protected from UV fading",
      "Eliminates screen and eye glare in offices and living rooms",
      "Unobstructed outside view preserved",
      "Reduces AC load — typical savings of 15–25% on cooling bills",
      "Works on existing glass with no glass replacement needed",
      "Available in neutral, bronze, grey, and mirror finishes",
    ],
    bestFor: [
      "West-facing apartments",
      "Home offices",
      "IT parks & tech campuses",
      "Commercial glass facades",
      "Conference rooms",
      "Retail storefronts",
    ],
    process: [
      "Free site visit and glass measurement",
      "Film grade selected based on orientation, glass type, and privacy needs",
      "Glass surface professionally cleaned and prepped",
      "Film applied and squeegeed; edges trimmed and sealed",
      "Final inspection before handover",
    ],
    lifespan: "10–15 years for residential; 7–12 years for commercial facades with heavy direct sun.",
    maintenance:
      "Wipe with a soft cloth and mild soap. Avoid abrasive cleaners. Film fully cures within 30 days of installation.",
    keyword: "sun control window film Mumbai",
    faqs: [
      {
        q: "Which is the best sun control film for Mumbai heat?",
        a: "For Mumbai's intense west-facing afternoon sun, we recommend high-TSER nano-ceramic films that reject up to 78% of heat without making rooms dark. They work especially well on glass facades in Andheri, Bandra, and Powai. We'll advise the right grade for your specific orientation during the free site visit.",
      },
      {
        q: "Can sun control film reduce my AC bill?",
        a: "Yes — significantly. By reducing heat entering through glass, your air conditioner runs shorter cycles. Most customers report 15–25% lower cooling costs within the first summer. The savings are most pronounced in west and south-facing rooms and offices with large glass areas.",
      },
      {
        q: "Will sun control film make my room darker?",
        a: "Modern nano-ceramic films are optically neutral — they don't tint your view grey or bronze. Visible light transmission of 50–70% means rooms stay bright while blocking infrared heat and UV. If you also want privacy, we have options that combine both.",
      },
      {
        q: "Does sun control film work on tinted or double-glazed glass?",
        a: "Yes, with care. For tinted or double-glazed units we use films specifically rated for those glass types to avoid thermal stress cracking. We'll assess your glass during the site visit and recommend a compatible film grade.",
      },
      {
        q: "How long does sun control film installation take?",
        a: "A standard 2–3 bedroom apartment is usually complete in one day. Large offices and glass facades are phased to minimise disruption — typically 2–3 days depending on total area.",
      },
      {
        q: "Do you install sun control film across Mumbai?",
        a: "Yes — we cover all of Mumbai including Andheri West and East, Bandra, Juhu, Powai, Goregaon, Malad, Borivali, Thane, and Navi Mumbai. Same-day site visits are available across Andheri.",
      },
    ],
  },
  {
    slug: "one-way-privacy-film",
    name: "One-Way Privacy Film",
    short: "See out clearly by day — outsiders see only a mirror.",
    headline: "Daytime privacy with a clean mirror finish.",
    intro:
      "One-way reflective film works on the principle that light travels from brighter to dimmer. During the day, the metallic coating reflects ambient light outward — passers-by and neighbours see only their own reflection while you keep a clear, unobstructed view from inside. No curtains. No blinds. No privacy compromise.",
    detail:
      "Important: the one-way effect reverses after dark. When interiors are lit and the outside is darker, people outside can see in. For around-the-clock privacy we typically recommend pairing one-way film with frosted or privacy film on lower glass sections. Available in silver mirror, charcoal, and bronze reflective finishes.",
    specs: [
      { label: "Daytime privacy", value: "High" },
      { label: "Heat rejection", value: "up to 80%" },
      { label: "UV rejection", value: "99%" },
    ],
    benefits: [
      "Full privacy from passers-by and neighbours during daylight hours",
      "Unobstructed view out from inside",
      "Eliminates the need for curtains or venetian blinds",
      "High heat rejection — rooms stay significantly cooler",
      "Modern mirrored exterior enhances building aesthetics",
      "Significant reduction in glare on screens and eyes",
    ],
    bestFor: [
      "Street-facing apartments",
      "Ground-floor offices",
      "Reception lobbies",
      "Retail shopfronts",
      "Conference rooms",
      "Studio flats",
    ],
    process: [
      "Site visit to assess orientation and light conditions",
      "Film type and finish selected based on privacy level required",
      "Glass cleaned with professional-grade solution",
      "Film applied and squeegeed; edges trimmed precisely",
      "Post-installation check in both day and evening light",
    ],
    lifespan: "8–12 years with proper care.",
    maintenance:
      "Clean with water and a soft cloth or mild window cleaner. Avoid ammonia-based products and abrasive pads. Do not scrub edges.",
    keyword: "one way mirror film Mumbai",
    faqs: [
      {
        q: "Does one-way film work at night?",
        a: "No — the one-way effect depends on the brightness difference between inside and outside. During the day the exterior is brighter, so the reflective coating blocks the view in. At night, when your interior lights are on and outside is dark, the effect reverses. For 24-hour privacy, pair one-way film on upper glass with frosted film on lower sections.",
      },
      {
        q: "Can I still see clearly from inside with one-way film?",
        a: "Yes — during daylight hours the view from inside remains clear and unobstructed. The reflective layer faces outward, not inward. At night, without strong exterior lighting, visibility from inside may reduce slightly compared to unfilmed glass.",
      },
      {
        q: "Does one-way film help reduce heat?",
        a: "Yes — reflective films are among the highest-performing for heat rejection, blocking up to 80% of solar heat. They're dual-purpose: privacy during the day and significant cooling benefits year-round.",
      },
      {
        q: "What finishes are available for one-way privacy film?",
        a: "We carry silver mirror, charcoal, and bronze reflective finishes. Silver gives the strongest reflective look; charcoal and bronze are more subtle and blend better with darker interiors or premium facades.",
      },
      {
        q: "Is one-way film suitable for home use in Mumbai?",
        a: "Absolutely — it's one of our most popular choices for street-facing apartments in Bandra, Andheri, and Powai. Residents get full daytime privacy without curtains while also reducing afternoon heat significantly.",
      },
      {
        q: "How long does one-way film installation take?",
        a: "For a standard flat, installation is typically completed within a day. We measure and cut film precisely, so there's minimal disruption during fitting.",
      },
    ],
  },
  {
    slug: "frosted-glass-film",
    name: "Frosted Glass Film",
    short: "Instant privacy with a clean, etched-glass aesthetic.",
    headline: "Etched-glass elegance. Applied in hours, not days.",
    intro:
      "Frosted glass film transforms clear glass into a private, diffused surface that looks like acid-etched glass — at a fraction of the cost and without replacing the pane. Light passes through softly; direct vision stops. Ideal for cabin partitions, bathroom glass, clinic doors, and any surface where privacy matters but daylight is still welcome.",
    detail:
      "Unlike actual sandblasting or acid etching, film is reversible and updatable — perfect when interiors are redesigned. We offer full-opaque frosted, gradient (clear-to-frosted), and translucent variants across a range of densities. Custom-cut strips for branding bands, directional strips, and geometric patterns are available for office environments. Applied in a single layer with no visible seams for standard pane widths.",
    specs: [
      { label: "Privacy", value: "Full" },
      { label: "Light", value: "Diffused" },
      { label: "Custom shapes", value: "Yes" },
    ],
    benefits: [
      "Complete visual privacy without blocking natural light",
      "Looks like expensive etched or sandblasted glass",
      "Far cheaper and faster than replacing glass",
      "Reversible — can be removed cleanly if interiors change",
      "Custom-cut to any shape, pattern, or gradient",
      "Works on cabinets, partitions, bathroom glass, and doors",
    ],
    bestFor: [
      "Office cabins and partitions",
      "Bathroom and shower glass",
      "Clinic and hospital doors",
      "Retail display cabinets",
      "Home glass doors",
      "School and college corridors",
    ],
    process: [
      "Measurement of all glass panels to be filmed",
      "Opacity level and finish chosen based on privacy requirement",
      "Glass cleaned and prepped with professional solution",
      "Film applied in precise sections with no visible seams",
      "Edges trimmed cleanly; bubbles worked out before handover",
    ],
    lifespan: "7–12 years for interior glass; longer on protected surfaces.",
    maintenance:
      "Wipe with a damp cloth. Avoid sharp objects near edges. No special cleaning products required.",
    keyword: "frosted glass film office Mumbai",
    faqs: [
      {
        q: "How long does frosted film last?",
        a: "On interior surfaces like partitions and bathroom glass, quality frosted film lasts 7–12 years or more with normal care. The lifespan is longer than exterior films since it's not exposed to direct sun and rain.",
      },
      {
        q: "Does frosted film look like real etched glass?",
        a: "Very closely. Quality frosted film has a smooth, consistent texture that closely resembles acid-etched or sandblasted glass. The main visual difference at close range is the edge where film meets the frame — which we cut cleanly to minimise.",
      },
      {
        q: "Can I get a gradient clear-to-frosted effect?",
        a: "Yes — gradient frosted film is one of our most popular options for conference rooms and office partitions. It fades from fully frosted at eye level to clear at the top, giving privacy where it matters while keeping openness above.",
      },
      {
        q: "Is frosted film removable?",
        a: "Yes — it can be removed cleanly from most glass surfaces without leaving adhesive residue, especially within the first few years. After a decade or more, some residue may remain, which can be cleaned off with a solvent.",
      },
      {
        q: "How much does frosted film cost in Mumbai?",
        a: "Pricing is per square foot and depends on the film grade and any custom-cutting requirements. Frosted film is significantly less expensive than replacing glass with etched alternatives. Call us for a free site visit and written quote.",
      },
      {
        q: "Do you install frosted film in offices across Mumbai?",
        a: "Yes — we work across Andheri, Bandra, Powai, Goregaon, Malad, Borivali, and extend to Thane and Navi Mumbai for larger office projects. Most office partition jobs are completed in a single day.",
      },
    ],
  },
  {
    slug: "decorative-glass-film",
    name: "Decorative Glass Film",
    short: "Custom patterns, logos, and metallic finishes on any glass surface.",
    headline: "Turn plain glass into a branded, designed statement.",
    intro:
      "Decorative glass film lets you apply custom patterns, company logos, geometric motifs, or artistic designs to any glass surface — without cutting, engraving, or replacing it. From subtle textured patterns on hotel lobby glass to full-colour brand graphics on office facades, decorative film delivers visual impact that paint and stickers cannot match.",
    detail:
      "We work with digital printing technology to produce custom designs from brand guidelines, artwork files, or patterns we design together. Matte, glossy, metallic gold, silver, and mirror finishes are available. Film can be layered with sun control or safety backing for combined performance. Common applications include hotel lift lobbies, corporate reception walls, retail shopfronts, and high-end residential interiors across Mumbai.",
    specs: [
      { label: "Finish options", value: "Matte / metallic" },
      { label: "Custom print", value: "Yes" },
      { label: "Safety backing", value: "Optional" },
    ],
    benefits: [
      "Custom logos, patterns, and branding printed and applied",
      "Transforms ordinary glass into a premium design element",
      "Available in metallic gold, silver, matte, and full-colour print",
      "Much cheaper than custom etched or coloured glass",
      "Fully removable and replaceable as branding evolves",
      "Combine with sun control or safety film for dual function",
      "Works on partitions, facades, shopfronts, and lift lobbies",
    ],
    bestFor: [
      "Corporate reception areas",
      "Hotel lobbies",
      "Retail shopfronts",
      "Restaurant and café glass",
      "Office partitions",
      "High-end residential interiors",
    ],
    process: [
      "Design briefing — you share artwork, logo files, or a design brief",
      "We produce a digital proof for your approval",
      "Glass area measured and film printed to exact size",
      "Glass prepped and film applied with professional alignment tools",
      "Final inspection; corrections made before handover",
    ],
    lifespan: "5–10 years depending on sun exposure and placement.",
    maintenance:
      "Wipe gently with a damp cloth. Avoid abrasive cleaners on the printed surface. Keep sharp objects away from edges.",
    keyword: "decorative glass film Mumbai",
    faqs: [
      {
        q: "Can you print our company logo on office glass?",
        a: "Yes — we print full-colour logos, wordmarks, and graphic patterns on film and apply it to your glass. Supply your brand artwork in vector or high-resolution format and we handle sizing, printing, and application.",
      },
      {
        q: "What decorative finishes are available?",
        a: "We offer matte frosted, high-gloss clear, metallic gold, metallic silver, mirror, and full-colour digitally printed film. Each can be cut to custom shapes and patterns, and effects can be layered — for example a frosted base with a metallic logo overlay.",
      },
      {
        q: "How durable is decorative glass film in Indian weather?",
        a: "Interior decorative film typically lasts 7–10 years. Exterior-facing decorative film in direct sun lasts 5–7 years. We use UV-stable printing inks and protective laminates on all exterior applications to maximise longevity.",
      },
      {
        q: "Can decorative film be removed or replaced?",
        a: "Yes — this is a key advantage over engraving or acid etching. Decorative film can be cleanly removed from most glass. When your branding or interior design changes, we remove the old film and apply updated artwork without any damage to the glass.",
      },
      {
        q: "Is decorative glass film suitable for retail shopfronts?",
        a: "Absolutely. Shopfront glass film is one of our most popular commercial applications in Andheri, Bandra, and Powai. A well-designed shopfront graphic draws attention, communicates your brand, and doubles as a window display — without the cost of signage or backlit fascias.",
      },
    ],
  },
  {
    slug: "safety-security-film",
    name: "Safety & Security Film",
    short: "Holds shattered glass together on impact — protecting people and property.",
    headline: "When glass breaks, it stays in place.",
    intro:
      "Safety and security film bonds to the inside surface of glass with a thick, high-strength adhesive. On impact — from an accident, storm, or forced entry — the film holds broken pieces together so glass doesn't scatter into dangerous shards. It significantly slows smash-and-grab theft and adds a layer of protection that your insurer may recognise.",
    detail:
      "Film thickness is measured in microns. Our safety range starts at 100 micron (4 mil) for basic protection and goes up to 400 micron (16 mil) for high-security applications in jewellery stores, banks, and ground-floor commercial glazing. Thicker films also carry bomb-blast protection ratings. All grades are optically clear and nearly invisible once applied.",
    specs: [
      { label: "Film thickness", value: "100–400 micron" },
      { label: "Shatter hold", value: "Yes" },
      { label: "UV rejection", value: "99%" },
    ],
    benefits: [
      "Prevents dangerous glass scatter on impact or breakage",
      "Significantly slows forced entry and smash-and-grab theft",
      "Protects children and elderly from accidental glass injuries",
      "Retains window integrity during storms and high winds",
      "99% UV rejection included as standard on all grades",
      "Optically clear — no change to room appearance",
      "Available in clear and lightly tinted versions",
    ],
    bestFor: [
      "Homes with children or elderly residents",
      "Shopfronts and jewellery stores",
      "Banks and ATM enclosures",
      "Schools and hospitals",
      "Ground-floor commercial glazing",
      "Coastal buildings exposed to storms",
    ],
    process: [
      "Glass assessment — type, thickness, and frame condition evaluated",
      "Film grade selected based on threat level and glass area",
      "Glass surface professionally cleaned and degreased",
      "Film applied top-down and squeegeed flat for maximum adhesion",
      "Edges sealed; film allowed to cure before handover",
    ],
    lifespan: "10–15 years. Thicker films may last longer due to the heavier adhesive layer.",
    maintenance:
      "No special maintenance required. Clean normally with water and a soft cloth. Avoid sharp objects near film edges.",
    keyword: "safety security window film Mumbai",
    faqs: [
      {
        q: "Does safety film prevent glass from breaking?",
        a: "No — safety film doesn't prevent glass from cracking on impact. What it does is hold broken pieces together so they don't scatter into dangerous shards. The pane may crack, but it stays in the frame — dramatically reducing injury risk and slowing forced entry.",
      },
      {
        q: "How thick should safety film be for a home?",
        a: "For residential applications, 100–200 micron (4–8 mil) film provides strong protection against accidental breakage and slows smash-and-grab entry. For shopfronts and high-security areas, we recommend 300–400 micron film with an edge-attachment system for maximum hold.",
      },
      {
        q: "Can safety film stop a break-in?",
        a: "It significantly delays forced entry. Safety film can hold a window intact through multiple impacts, adding 1–3 minutes to the time it takes to breach the glass. Most opportunistic thieves move on when entry takes longer than expected.",
      },
      {
        q: "Is safety film the same as anti-scratch film?",
        a: "No — safety film is a thick structural layer designed to hold glass together under impact. Anti-scratch film is a thin surface coating to protect glass from abrasion. They serve completely different purposes.",
      },
      {
        q: "Is safety window film useful during Mumbai's monsoon?",
        a: "Yes — during Mumbai's intense monsoon, storm-driven debris and high winds can crack windows. Safety film holds cracked glass in place, preventing water ingress and keeping window seals intact until repairs can be made.",
      },
      {
        q: "Do you install safety film in schools and hospitals across Mumbai?",
        a: "Yes — schools, clinics, and hospitals are among our most common safety film clients. We work across Andheri, Powai, Bandra, Malad, Borivali, and Thane for institutional and commercial projects.",
      },
    ],
  },
  {
    slug: "uv-protection-film",
    name: "UV Protection Film",
    short: "Block 99% of UV radiation — protect skin, furniture, and flooring.",
    headline: "Stop UV before it fades your home and health.",
    intro:
      "UV protection film is an optically clear or lightly tinted film that filters out up to 99% of ultraviolet radiation passing through glass. Standard float glass blocks most UVB but lets significant UVA through — the type responsible for furniture fading, hardwood floor bleaching, and long-term skin damage. UV film fills this gap without changing the appearance of your glass or view.",
    detail:
      "UV rays are present even on overcast days and penetrate most residential glass year-round. In Mumbai's climate this means constant UV exposure for any room with significant glazing. Art collectors, premium furniture owners, and health-conscious families all benefit from UV film as a preventive investment. We carry optically clear variants with near-zero visible effect alongside combined sun control + UV rejection films for maximum protection.",
    specs: [
      { label: "UV rejection", value: "up to 99%" },
      { label: "Visible light", value: "Unchanged" },
      { label: "Appearance", value: "Optically clear" },
    ],
    benefits: [
      "Blocks up to 99% of both UVA and UVB radiation through glass",
      "Protects furniture, fabrics, artwork, and flooring from fading",
      "Reduces UV skin exposure in sun-drenched rooms",
      "Virtually invisible — almost no change to room appearance",
      "Works on existing glass with no glass replacement needed",
      "Can be combined with heat control for dual protection",
      "UV penetrates glass even on cloudy days — year-round benefit",
    ],
    bestFor: [
      "Homes with art or premium furniture",
      "Conservatories and sun rooms",
      "Museum and gallery spaces",
      "Showrooms and retail displays",
      "East or west-facing office glass",
      "Residential libraries and study rooms",
    ],
    process: [
      "Consultation on UV exposure level and protection goals",
      "Film type selected — clear UV-only or combined UV + heat",
      "Glass cleaned and measured",
      "Film applied with careful bubble elimination",
      "Post-installation check for full coverage and adhesion",
    ],
    lifespan: "10–15 years. Clear UV films often outlast tinted films as they have no pigment layer to degrade.",
    maintenance:
      "No special maintenance. Clean with a soft cloth and mild soap. Avoid abrasive pads on the film surface.",
    keyword: "UV protection window film Mumbai",
    faqs: [
      {
        q: "Does regular window glass block UV rays?",
        a: "Standard float glass blocks most UVB rays (which cause sunburn) but transmits a significant portion of UVA rays — the longer-wavelength UV that causes skin ageing and fades furniture over time. UV protection film blocks up to 99% of both UVA and UVB.",
      },
      {
        q: "Will UV film make my room darker?",
        a: "Optically clear UV film has very low visible light absorption — the difference is barely perceptible. You get UV protection without making your space feel darker. If you also want heat control, we have combined films that add a slight neutral tint while keeping rooms bright.",
      },
      {
        q: "Can UV film protect my furniture and flooring from fading?",
        a: "Significantly. UV radiation is the primary cause of fading in wood floors, upholstery, curtains, paintings, and photographs. By blocking 99% of UV, the rate of fading slows dramatically — many customers report furniture looking as good as new 5+ years after installation.",
      },
      {
        q: "Is UV film useful even on north-facing windows?",
        a: "Yes — UV radiation reaches all windows, including north-facing ones in Mumbai, given the sun's arc across the sky. The intensity is lower, but UV exposure accumulates over time. For expensive furniture or artwork near any window, UV film is worthwhile.",
      },
      {
        q: "What's the difference between UV protection film and sun control film?",
        a: "UV protection film targets UV radiation and is optically clear — it doesn't significantly reduce heat. Sun control film rejects heat (infrared) and UV together, but usually has a tint that reduces visible light. For maximum protection of both home contents and comfort, we often recommend a combined film.",
      },
    ],
  },
  {
    slug: "office-glass-branding",
    name: "Office Glass Branding Film",
    short: "Professional branding, frosting, and privacy for office partitions and facades.",
    headline: "Make your office glass work for your brand.",
    intro:
      "Office glass branding film covers everything from frosted privacy bands on cabin glass and full-wall logo graphics to floor-to-ceiling patterned partitions. It transforms plain glass into a communication surface — projecting professionalism to visitors while solving practical privacy needs for meeting rooms and executive cabins.",
    detail:
      "We work with your brand team or interior designer to produce design files suited to glass application. Common configurations include frosted bands at eye level with company branding, geometric patterns on corridor glass, and full-colour reception wall graphics. Most office fit-outs are completed in a single day. Available with safety or sun control backing for dual-function glass treatment.",
    specs: [
      { label: "Design", value: "Custom / printed" },
      { label: "Privacy", value: "Partial to full" },
      { label: "Install time", value: "1 day" },
    ],
    benefits: [
      "Projects a professional, branded look to clients and visitors",
      "Custom-printed logos, patterns, and geometric designs",
      "Solves privacy for meeting rooms and executive cabins",
      "Incorporates frosted, metallic, or full-colour elements",
      "Installed without disrupting ongoing office operations",
      "Easily updated when branding or layouts change",
      "Can combine with safety or sun control film",
    ],
    bestFor: [
      "Corporate offices and IT parks",
      "Co-working spaces",
      "Legal and financial firms",
      "Medical and healthcare offices",
      "Executive reception areas",
      "Conference and boardrooms",
    ],
    process: [
      "Briefing — floor plan, glass schedule, and brand assets collected",
      "Design produced and submitted for client approval",
      "Film printed and quality-checked off-site",
      "Office glass prepped and filmed in sections by the team",
      "Walk-through with client before handover",
    ],
    lifespan: "7–10 years for interior applications under office lighting.",
    maintenance:
      "Clean with a damp cloth. Avoid harsh chemicals or scratching the printed surface.",
    keyword: "office glass film branding Mumbai",
    faqs: [
      {
        q: "Can you film office partitions with our company logo?",
        a: "Yes — this is one of our most common office projects. We produce your logo at the exact scale needed for your glass panels, print it on UV-stable film, and apply it precisely. Supply brand files in SVG or high-resolution PDF/PNG and we handle the rest.",
      },
      {
        q: "How long does an office glass branding project take?",
        a: "Design approval typically takes 3–5 business days. Installation for a standard office of 10–20 partitions is completed in one day. Larger fit-outs are phased to avoid disrupting your operations.",
      },
      {
        q: "Can office glass branding film be removed when we relocate?",
        a: "Yes — film is cleanly removable from most glass without leaving adhesive marks, especially within the first 5–7 years. If you're in a leased space this is an important advantage over etching or sandblasting.",
      },
      {
        q: "What types of offices do you work with in Mumbai?",
        a: "We work across all office types — IT and tech companies in Powai and BKC, legal and consulting firms in Nariman Point and Bandra, healthcare clinics in Andheri and Goregaon, and co-working spaces across the city.",
      },
      {
        q: "Can glass branding film also add privacy?",
        a: "Absolutely — most office glass projects combine branding with privacy. Frosted film at eye level with a logo printed in the centre is our most popular configuration. It provides privacy for meetings while displaying the brand professionally to lobby guests.",
      },
    ],
  },
  {
    slug: "residential-window-film",
    name: "Residential Window Film",
    short: "Cooler rooms, better privacy, and lower bills — without replacing your windows.",
    headline: "One investment. Cooler home, lower bills, more privacy.",
    intro:
      "Residential window film addresses the full range of home glass needs in a single installation. Whether the priority is cutting afternoon heat in a west-facing bedroom, giving a street-facing flat daytime privacy, protecting children's rooms from glass breakage, or reducing fading on expensive furniture — there is a film for it. We assess every room and recommend the right solution for each area.",
    detail:
      "Mumbai homes face a specific combination of challenges: intense afternoon sun from the west, monsoon storms, and dense urban living that makes privacy from neighbours a daily concern. We've fitted films across high-rise apartments in Powai and Bandra, independent houses in Juhu and Andheri, and society buildings across the western suburbs. A typical apartment job involves 3–4 film types across different rooms — and is usually done in one day.",
    specs: [
      { label: "Heat rejection", value: "up to 78%" },
      { label: "UV rejection", value: "99%" },
      { label: "Privacy options", value: "Multiple" },
    ],
    benefits: [
      "Cooler rooms without major air conditioning upgrades",
      "Lower electricity bills — cooling costs reduced by 15–25%",
      "Daytime privacy without curtains or blinds",
      "Child-safe glass in bedrooms, bathrooms, and play areas",
      "Protects furniture, wood floors, and artwork from UV fading",
      "Multiple film types combined in a single site visit",
      "Reversible — no permanent change to property",
    ],
    bestFor: [
      "West-facing apartments",
      "Sea-facing flats in Juhu and Bandra",
      "High-rise homes in Powai",
      "Independent houses in Andheri",
      "Ground-floor homes needing privacy",
      "Families with children",
    ],
    process: [
      "Free home visit — every room and orientation assessed",
      "Film recommendations made room by room",
      "Written quote provided before any commitment",
      "Installation scheduled at your convenience",
      "All glass cleaned, filmed, and inspected in one visit",
    ],
    lifespan: "8–15 years depending on film type and sun exposure.",
    maintenance:
      "Standard glass cleaning applies. Use soft cloths and mild soap. Avoid ammonia-based cleaners. Full cure takes 30 days.",
    keyword: "residential window film Mumbai",
    faqs: [
      {
        q: "Which window film is best for a Mumbai apartment?",
        a: "For most Mumbai apartments a combination works best: sun control film on west and south-facing glass to cut afternoon heat; one-way or frosted film on street-facing glass for privacy; and safety film on children's rooms or ground-floor windows. We'll assess your flat and recommend the right film for each area during the free site visit.",
      },
      {
        q: "Can window film be installed in a rented flat?",
        a: "Yes — window film is completely removable, making it ideal for rented properties. Unlike air conditioners or structural changes, film leaves no permanent marks and can be removed when you move out. It's also significantly cheaper than a window AC unit and works all day.",
      },
      {
        q: "How much does residential window film cost in Mumbai?",
        a: "Cost depends on film type and total glass area. Sun control film typically ranges from ₹80–₹180 per sq ft installed, with premium nano-ceramic films at the higher end. We provide a written, itemised quote after the free site visit so there are no surprises.",
      },
      {
        q: "Will window film damage my windows?",
        a: "No — quality window film uses pressure-sensitive adhesive that bonds cleanly to glass without damaging the surface. Professional removal leaves glass in its original condition. We've fitted film in hundreds of Mumbai apartments without any glass damage.",
      },
      {
        q: "Do you serve housing societies in Andheri and Borivali?",
        a: "Yes — we work regularly with housing society managements to film common areas, lobbies, and stairwell glass. For individual flat owners we coordinate with the society office to ensure access. We cover Andheri West and East, Borivali, Malad, Goregaon, Kandivali, and beyond.",
      },
      {
        q: "Is there a warranty on residential window film?",
        a: "Yes. All our films come with a manufacturer's warranty covering defects like delamination, bubbling, and colour fade. Our workmanship is also covered separately. Warranty terms vary by film brand and grade — we'll specify them in your written quote.",
      },
    ],
  },
  {
    slug: "commercial-glass-film",
    name: "Commercial Glass Film Solutions",
    short: "Large-scale glass film for offices, retail, hotels, and commercial buildings.",
    headline: "Professional glass film at commercial scale.",
    intro:
      "Commercial glass film projects require precise project management, minimal business disruption, and a result that reflects a professional standard. We handle large office fit-outs, retail chain rollouts, hotel glass, hospital environments, and multi-storey building facades — maintaining quality and consistency from the first pane to the last.",
    detail:
      "Our commercial clients include corporate offices in BKC and Powai, retail chains across Mumbai, hospitality properties, and healthcare networks. We've completed projects ranging from single-floor office fits to multi-building complexes. All commercial projects are assigned a dedicated project lead who manages scheduling, coordinates with building management, and phases installation to keep operations running. We carry commercial-grade films from 3M, Llumar, and Solar Gard certified to international standards.",
    specs: [
      { label: "Project scale", value: "Any size" },
      { label: "Film brands", value: "3M, Llumar" },
      { label: "Project lead", value: "Dedicated" },
    ],
    benefits: [
      "Handles large-area projects across multiple floors and buildings",
      "Dedicated project manager for scheduling and coordination",
      "Commercial-grade films certified to international standards",
      "Phased installation keeps your business operations running",
      "Consistent finish across all glass surfaces in a project",
      "Post-installation audit and documentation for compliance",
      "Covers sun control, privacy, safety, branding, and decorative film",
    ],
    bestFor: [
      "Corporate offices and tech parks",
      "Hotels and hospitality properties",
      "Hospitals and healthcare facilities",
      "Retail chains and showrooms",
      "Housing societies",
      "Multi-storey commercial buildings",
    ],
    process: [
      "Initial consultation and full site survey",
      "Scope of work documented — glass schedule, film types, area map",
      "Phased installation plan provided and agreed",
      "Installation carried out floor-by-floor or zone-by-zone",
      "Quality inspection at each phase; final sign-off by project lead",
    ],
    lifespan: "7–15 years depending on film type and exposure.",
    maintenance:
      "Commercial properties benefit from annual film inspection. We offer maintenance contracts for large installations.",
    keyword: "commercial window film installation Mumbai",
    faqs: [
      {
        q: "Can you handle large office glass film projects in Mumbai?",
        a: "Yes — we regularly work on large commercial projects including full-floor office fit-outs, multi-storey building facades, and retail chain rollouts across Mumbai. We assign a dedicated project lead who coordinates access, scheduling, and quality checks throughout.",
      },
      {
        q: "What film brands do you use for commercial projects?",
        a: "We work with internationally certified brands including 3M, Llumar, and Solar Gard for commercial projects. These brands offer independently tested performance data, consistent quality across batches, and manufacturer warranties important for compliance documentation.",
      },
      {
        q: "Can installation happen without shutting down the office?",
        a: "Yes — we plan all commercial installations in phases that avoid disrupting business operations. We can work floor by floor, zone by zone, or schedule installation outside business hours. Most offices remain fully operational throughout their glass film project.",
      },
      {
        q: "Do you provide documentation for commercial glass film projects?",
        a: "Yes — commercial clients receive a full project report including glass schedule, film specifications, area measurements, warranty documents, and post-installation photographs. This documentation supports internal records and any green building certification requirements.",
      },
      {
        q: "Do you cover areas beyond Andheri for commercial projects?",
        a: "Yes — commercial projects take us across all of Mumbai: BKC, Nariman Point, Lower Parel, Powai, Goregaon, Malad, Borivali, and out to Thane, Navi Mumbai, and Pune for larger clients.",
      },
    ],
  },
  {
    slug: "glass-and-mirror",
    name: "Glass & Mirror Work",
    short: "Supply, cut, and fit toughened glass, custom mirrors, and glass partitions.",
    headline: "Glass and mirror, measured and fitted right.",
    intro:
      "Beyond film, we supply and install toughened glass panels, custom mirrors, shower enclosures, wardrobe sliding glass, and frameless partitions. Every job is measured on-site, cut precisely, and installed by the same team — so you get a single point of contact from measurement to handover and finishes that match across your glass and film work.",
    detail:
      "Our glass and mirror work complements our film services — many clients who come in for sun control or safety film also commission a new bathroom mirror, sliding wardrobe glass, or office partition. We source toughened and laminated glass from certified manufacturers, cut to size, and deliver fitted in a single visit. We also supply glass shelving, display cabinet glass, and table tops.",
    specs: [
      { label: "Toughened glass", value: "Yes" },
      { label: "Custom mirrors", value: "Yes" },
      { label: "Site measure", value: "Free" },
    ],
    benefits: [
      "Custom glass and mirrors cut to exact dimensions",
      "Toughened and laminated glass for safety applications",
      "Frameless partitions for offices and homes",
      "Shower enclosures and bathroom glass fitted professionally",
      "Wardrobe sliding glass and kitchen cabinet glass",
      "Single-team handover — no coordination between contractors",
      "Free on-site measurement before any commitment",
    ],
    bestFor: [
      "Homes and apartments",
      "Salons and spas",
      "Offices and conference rooms",
      "Hotels and hospitality",
      "Retail stores and showrooms",
      "Restaurants and cafes",
    ],
    process: [
      "Free on-site measurement of all glass and mirror areas",
      "Glass type and thickness recommended",
      "Cut to size in workshop or on-site",
      "Fitted with appropriate hardware and edge finishing",
      "Debris cleared; handover inspection completed",
    ],
    lifespan: "Toughened glass is permanent; mirrors last 10–20+ years with proper edge sealing.",
    maintenance:
      "Clean glass and mirrors with standard glass cleaner and a soft cloth. Avoid water pooling at mirror edges — this causes black edge spots over time.",
    keyword: "glass and mirror shop Andheri",
    faqs: [
      {
        q: "Do you supply and fit custom-sized mirrors in Mumbai?",
        a: "Yes — we cut mirrors to any dimension and fit them with appropriate backing and edge finishing. Common applications include full-length wardrobe mirrors, bathroom vanity mirrors, gym mirrors, and decorative wall mirrors. Call us for a free measurement visit.",
      },
      {
        q: "What types of glass do you supply and install?",
        a: "We supply toughened glass, laminated glass, clear and tinted float glass, and mirror glass. Toughened glass is used for shower enclosures and furniture tops; laminated glass for overhead glazing and security applications.",
      },
      {
        q: "Can you replace a broken glass panel or mirror?",
        a: "Yes — replacement is one of our most frequent jobs. We measure the opening, cut the replacement to size, and fit it with appropriate hardware. For toughened glass panels such as shower doors and table tops, we match the original thickness and edge finish.",
      },
      {
        q: "Do you install glass partitions for offices in Mumbai?",
        a: "Yes — frameless and semi-frameless glass partitions for offices, meeting rooms, and executive cabins are a major part of our work. We can combine partition glass with privacy film, branding film, or safety film in a single project.",
      },
      {
        q: "How long does glass and mirror installation take?",
        a: "Most residential mirror and glass jobs are completed in a half-day to one day. Larger office partition projects are scheduled over 1–3 days. We'll give you an accurate timeline after the free measurement visit.",
      },
    ],
  },
  {
    slug: "car-window-tinting",
    name: "Car Window Tinting",
    short: "Legal, heat-rejecting automotive film for cooler cabins and sharper looks.",
    headline: "Cooler cabin. Less glare. Sharper finish.",
    intro:
      "Mumbai's traffic-locked afternoons turn car cabins into ovens. Automotive window film cuts heat and UV while reducing glare that causes eye strain on long commutes. We precision-cut film for all car models — sedans, SUVs, hatchbacks, and commercial vehicles — using automotive-grade film certified under Indian road standards. Installation is clean, bubble-free, and typically completed in 3–4 hours.",
    detail:
      "We carry a range of automotive films from light-neutral options that comply with road transport regulations to performance-grade ceramic films for maximum heat rejection. Each film is cut using digital templates for the exact car model, ensuring clean, seamless edges on curved rear windows. All installations come with a care instruction card. We also offer re-tinting for cars where old film has bubbled, peeled, or discoloured.",
    specs: [
      { label: "Heat rejection", value: "up to 70%" },
      { label: "UV rejection", value: "99%" },
      { label: "Install time", value: "3–4 hours" },
    ],
    benefits: [
      "Significantly cooler cabin in Mumbai's standstill traffic",
      "Reduces eye strain and glare on the driver",
      "Protects dashboard, upholstery, and seats from UV fading",
      "99% UV protection for all passengers",
      "Clean, bubble-free application with no water marks",
      "Legal shades available for all glass positions",
      "Old/bubbled film removal and re-tinting also available",
    ],
    bestFor: [
      "Cars and SUVs",
      "Commercial vehicles and vans",
      "Luxury and premium cars",
      "Long daily Mumbai commuters",
      "Vehicles with black interiors that overheat",
      "Re-tinting old or bubbled film",
    ],
    process: [
      "Car brought to our Andheri workshop",
      "Glass cleaned and degreased",
      "Film cut digitally for your exact car model",
      "Film applied and squeegeed from inside the glass",
      "Cure period: 3–5 days (avoid rolling windows down during cure)",
    ],
    lifespan: "5–10 years depending on film grade and care.",
    maintenance:
      "Wait 3–5 days before rolling windows down. Clean with a soft cloth and mild cleaner — avoid ammonia-based products on the inside of tinted glass.",
    keyword: "car window tinting Andheri",
    faqs: [
      {
        q: "What is the legal tint limit for car windows in India?",
        a: "The Motor Vehicles Act requires a minimum Visible Light Transmission (VLT) of 70% for front windshields and 50% for front side windows. Rear windows and the rear windshield can be tinted darker in most states. We advise clients on legal shades and only apply road-legal film.",
      },
      {
        q: "How long does car window tinting take in Andheri?",
        a: "Most cars are completed in 3–4 hours at our Andheri workshop. SUVs and larger vehicles with more glass area may take up to 5–6 hours. We typically schedule appointments in the morning so your car is ready the same afternoon.",
      },
      {
        q: "Can you remove old bubbled or peeled car window film?",
        a: "Yes — old film removal and re-tinting is a common request. We remove the old film cleanly, clean off adhesive residue, and apply fresh film. The result looks as good as new. Removal is done the same day as re-tinting in most cases.",
      },
      {
        q: "Does car window tint affect visibility at night?",
        a: "Darker shades can reduce night visibility, especially from rear windows. We recommend lighter shades (50–70% VLT) for daily commuters who drive at night in Mumbai's mixed street lighting. Ceramic films maintain better night visibility at equivalent heat rejection compared to dyed films.",
      },
      {
        q: "Which is better — ceramic or dyed car window film?",
        a: "Ceramic film is higher performance — it rejects more heat without dark dye, maintains better colour stability over time, and doesn't interfere with GPS or mobile signals. Dyed films are more affordable but fade faster. For Mumbai's daily driving conditions, we generally recommend ceramic.",
      },
      {
        q: "How long should I wait to roll down windows after tinting?",
        a: "At least 3–5 days in Mumbai's humidity. Rolling windows down too soon can peel the edges before the adhesive has fully cured. We provide written care instructions with every automotive tinting job.",
      },
    ],
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

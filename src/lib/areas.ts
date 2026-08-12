// Service-area data. Split out of site.ts purely for file size — site.ts
// re-exports `areas` so it stays the single import point for site content.
//
// Every entry must carry genuinely distinct copy. These pages exist to rank for
// "<service> in <locality>" searches, and Google demotes sets of location pages
// that differ only by the place name (its "doorway pages" guidance). Landmarks,
// propertyMix, intro and faqs are what keep each page substantive — do not
// template them.

export type AreaRegion =
  | "Western Suburbs"
  | "South Mumbai"
  | "Central Mumbai"
  | "Eastern Suburbs"
  | "Thane"
  | "Navi Mumbai";

export type Area = {
  slug: string;
  name: string;
  /** Used in <title> where the full name would push it past ~60 chars. */
  shortName?: string;
  region: AreaRegion;
  /** Short line used on cards, the home page and meta descriptions. */
  blurb: string;
  /** 2–3 sentences of area-specific body copy. Unique per area. */
  intro: string;
  /** What the building stock looks like here — drives film recommendations. */
  propertyMix: string;
  /** Real, recognisable local landmarks. Used in copy and for local relevance. */
  landmarks: string[];
  postalCodes: string[];
  /** Service slugs most in demand here, most relevant first. */
  topServices: string[];
  /** Slugs of neighbouring areas, for internal linking. */
  nearby: string[];
  /** Area-specific Q&A — feeds FAQPage schema. Must be unique per area. */
  faqs: { q: string; a: string }[];
  /**
   * Alternate names this page also targets. Used where a locality has no real
   * East/West split (station exits, not separate neighbourhoods) so one strong
   * page covers both search terms instead of two thin ones.
   */
  covers?: string[];
  /** Region hub page — aggregates the areas beneath it. */
  isHub?: boolean;
};

export const areas: Area[] = [
  // ── Hubs ────────────────────────────────────────────────────────────────
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Western Suburbs",
    isHub: true,
    blurb:
      "Window film, glass and mirror work across every Mumbai suburb — from Colaba to Borivali and out to Mulund.",
    intro:
      "We've been fitting window film across Mumbai since 2014, working out of a workshop in Andheri West. That covers sea-facing towers in Worli and Bandra, IT floors in BKC and Powai, clinic and retail glass through the western suburbs, and society buildings from Borivali down to Dadar. Site visits are free anywhere inside the municipal limits.",
    propertyMix:
      "Everything from 1920s Fort-era buildings with steel-framed glazing to fifty-storey towers with structural glass facades — which is why film grade gets chosen per building, not per city.",
    landmarks: [
      "Bandra-Worli Sea Link",
      "Bandra Kurla Complex",
      "Chhatrapati Shivaji Maharaj International Airport",
      "Marine Drive",
    ],
    postalCodes: ["400001", "400058", "400076", "400092"],
    topServices: [
      "sun-control-film",
      "frosted-glass-film",
      "residential-window-film",
      "commercial-glass-film",
    ],
    nearby: ["andheri-west", "bandra-west", "powai", "navi-mumbai", "thane-west"],
    faqs: [
      {
        q: "Which parts of Mumbai do you cover?",
        a: "All of it — South Mumbai, the central belt through Worli, Lower Parel and Dadar, the full western line from Bandra to Borivali, the eastern suburbs including Powai, Ghatkopar and Mulund, plus Thane and Navi Mumbai. Our workshop is in Andheri West, so western-suburb visits are usually same-day.",
      },
      {
        q: "Do you charge for a site visit in Mumbai?",
        a: "No. Measurement and consultation are free anywhere in Mumbai, including Thane and Navi Mumbai. You get a written, itemised quote before committing to anything — there's no obligation to proceed.",
      },
    ],
  },
  {
    slug: "navi-mumbai",
    name: "Navi Mumbai",
    region: "Navi Mumbai",
    isHub: true,
    blurb:
      "Planned-sector homes and IT parks across Vashi, Airoli, Ghansoli and the Thane-Belapur corridor.",
    intro:
      "Navi Mumbai's sector layout means large, uniform glazing runs — rows of identical flats in a society, or full floor plates in the Thane-Belapur IT parks. That works in your favour on pricing, because film can be cut in repeating sizes rather than one-off panes. We cover Vashi, Airoli, Ghansoli and the corridor between them.",
    propertyMix:
      "CIDCO-planned societies with standard window modules, newer Palm Beach Road towers with floor-to-ceiling glass, and IT campuses along Thane-Belapur Road.",
    landmarks: [
      "Palm Beach Road",
      "Mindspace Airoli",
      "Vashi APMC Market",
      "Thane-Belapur Road",
    ],
    postalCodes: ["400703", "400708", "400701"],
    topServices: [
      "sun-control-film",
      "office-glass-branding",
      "residential-window-film",
      "commercial-glass-film",
    ],
    nearby: ["vashi", "airoli", "ghansoli", "thane-west", "mumbai"],
    faqs: [
      {
        q: "Do you travel to Navi Mumbai for a single flat?",
        a: "Yes, though we'll usually schedule it alongside other work in the same node to keep the visit efficient. There's no extra travel charge for Vashi, Airoli or Ghansoli — the quote is the same per square foot as anywhere in Mumbai.",
      },
      {
        q: "Can you film a whole society building in Navi Mumbai?",
        a: "Yes, and CIDCO-era societies are well suited to it. Because the window modules repeat across flats, we can cut film in batches and move floor by floor. We work with society committees on scheduling and provide a single consolidated quote for common areas plus individual flats.",
      },
    ],
  },

  // ── Western Suburbs ─────────────────────────────────────────────────────
  {
    slug: "andheri-west",
    name: "Andheri West",
    region: "Western Suburbs",
    blurb:
      "Our home base — same-day site visits across Andheri West, from Seven Bungalows to the Link Road belt.",
    intro:
      "Our workshop is on Vitthalbhai Patel Road, so Andheri West is the area we reach fastest — often the same day you call. We've filmed everything here from shop fronts along Link Road to cabin partitions in the SV Road office buildings and bathroom glass in the older Society blocks off Yari Road.",
    propertyMix:
      "Dense mix of 1980s society buildings with sliding aluminium windows, newer redevelopment towers, and ground-floor retail with large plate-glass shopfronts.",
    landmarks: [
      "Infiniti Mall Andheri",
      "Andheri Station (West)",
      "Link Road",
      "Seven Bungalows",
    ],
    postalCodes: ["400058", "400053", "400061"],
    topServices: [
      "residential-window-film",
      "frosted-glass-film",
      "sun-control-film",
      "glass-and-mirror",
    ],
    nearby: ["andheri-west-lokhandwala", "versova", "juhu", "andheri-east", "vile-parle-west"],
    faqs: [
      {
        q: "How quickly can you visit in Andheri West?",
        a: "Usually the same day, often within a couple of hours. Our workshop is on Vitthalbhai Patel Road near Andheri West station, so this is the one area where we can turn a call into a measured quote almost immediately.",
      },
      {
        q: "Do you handle shopfront glass on Link Road?",
        a: "Regularly. Link Road retail glass is mostly large plate-glass panes, which suits frosted branding bands, printed decorative film and safety film. We work outside trading hours where a shop can't close, so the display stays up during the day.",
      },
    ],
  },
  {
    slug: "andheri-east",
    name: "Andheri East",
    region: "Western Suburbs",
    blurb:
      "Office and industrial glass film across Marol, MIDC, Chakala and the SEEPZ belt.",
    intro:
      "Andheri East is our busiest commercial area. The MIDC and SEEPZ blocks are full of glass-partitioned floors where frosted privacy bands and printed branding go in as part of a fit-out, and the office towers along the Western Express Highway take a lot of sun control film on their west elevations. Airport-adjacent hotels and clinics form the rest.",
    propertyMix:
      "Corporate floor plates with full-height glass partitions, MIDC industrial units, hotel glazing near the airport, and residential pockets in Chakala and Sakinaka.",
    landmarks: ["SEEPZ", "MIDC Marol", "Chakala", "Mumbai Airport Terminal 2"],
    postalCodes: ["400069", "400059", "400093", "400096"],
    topServices: [
      "office-glass-branding",
      "frosted-glass-film",
      "commercial-glass-film",
      "sun-control-film",
    ],
    nearby: ["andheri-west", "vile-parle-east", "santacruz-east", "powai", "goregaon-east"],
    faqs: [
      {
        q: "Can you film an office in MIDC Andheri East without stopping work?",
        a: "Yes. Partition film goes in zone by zone, usually a few cabins at a time, and a typical floor is done in a day. For larger fit-outs in SEEPZ or MIDC we schedule evenings or weekends so no desk loses a working day.",
      },
      {
        q: "Do you do glass branding for offices near SEEPZ?",
        a: "Frequently — it's one of the most common jobs we get in Andheri East. The usual configuration is a frosted band at eye level across meeting-room glass with the company logo printed at centre. Send us your brand files and glass schedule and we'll produce a proof before printing.",
      },
    ],
  },
  {
    slug: "andheri-west-lokhandwala",
    name: "Lokhandwala, Andheri West",
    region: "Western Suburbs",
    blurb:
      "Privacy film for Lokhandwala Complex flats where towers face each other across narrow gaps.",
    intro:
      "Lokhandwala's density is the reason most of our work here is privacy rather than heat. Buildings sit close enough that living-room and bedroom windows look straight into the flat opposite, so one-way film and frosted lower panels are what people ask for. The Back Road commercial strip adds a steady run of salon and studio glass.",
    propertyMix:
      "High-density residential towers in tight plots, plus ground-floor salons, studios and boutiques along the Lokhandwala market strip.",
    landmarks: [
      "Lokhandwala Complex",
      "Lokhandwala Market",
      "Back Road",
      "Adarsh Nagar",
    ],
    postalCodes: ["400053"],
    topServices: [
      "one-way-privacy-film",
      "frosted-glass-film",
      "residential-window-film",
      "decorative-glass-film",
    ],
    nearby: ["andheri-west", "versova", "juhu", "andheri-east"],
    faqs: [
      {
        q: "My Lokhandwala flat faces another building — what film gives privacy?",
        a: "This is the most common question we get here. One-way reflective film works during daylight, but reverses after dark once your lights are on. For flats that face another tower at close range we usually recommend frosted film on the lower half of the glass with clear or one-way above, which gives round-the-clock privacy at seated eye level while keeping the view and light.",
      },
      {
        q: "Do you work with salons and studios on Back Road?",
        a: "Yes. Salon and studio glass usually needs a mix — frosted or decorative film for treatment-area privacy, and printed branding on the entrance glass. Both can go on in a single visit, typically in under a day for a standard shopfront.",
      },
    ],
  },
  {
    slug: "versova",
    name: "Versova",
    region: "Western Suburbs",
    blurb:
      "Salt-air resistant film for Versova's sea-facing flats along Yari Road and the beach stretch.",
    intro:
      "Versova's proximity to open sea means constant salt-laden air on west-facing glass, which shortens the life of cheaper films and corrodes window hardware. We specify films rated for coastal exposure here and seal edges carefully. Yari Road's studio and production-house glass makes up the commercial side of our work in the area.",
    propertyMix:
      "Sea-facing residential towers, low-rise buildings around the koliwada, and production studios and offices along Yari Road.",
    landmarks: ["Versova Beach", "Yari Road", "Seven Bungalows", "Versova Metro Station"],
    postalCodes: ["400061"],
    topServices: [
      "sun-control-film",
      "uv-protection-film",
      "residential-window-film",
      "safety-security-film",
    ],
    nearby: ["andheri-west", "andheri-west-lokhandwala", "juhu", "malad-west"],
    faqs: [
      {
        q: "Does sea air near Versova Beach damage window film?",
        a: "It shortens the life of low-grade film, yes. Salt deposits attack the adhesive at the edges first, which is where peeling starts. We use films rated for coastal exposure and seal the edges properly — that's the difference between film lasting three years and lasting ten on a sea-facing window here.",
      },
      {
        q: "What film suits a west-facing sea-view flat in Versova?",
        a: "A high-TSER nano-ceramic sun control film. It cuts the afternoon heat coming off the water without the dark or mirrored look that would spoil the view you paid for. We keep visible light transmission high on sea-facing glass for exactly that reason.",
      },
    ],
  },
  {
    slug: "juhu",
    name: "Juhu",
    region: "Western Suburbs",
    blurb:
      "Sea-facing flats and bungalows where heat rejection matters most and the view can't be compromised.",
    intro:
      "Juhu glass takes direct western sun off the water for the whole afternoon, and the flats here tend to have large picture windows that make the heat gain worse. The brief is almost always the same: cut the heat, keep the view exactly as it is. Independent bungalows off Juhu Tara Road bring more glass-and-mirror work than the average area.",
    propertyMix:
      "Sea-facing apartment towers with large picture windows, independent bungalows, and hospitality glazing along the beach stretch.",
    landmarks: ["Juhu Beach", "JW Marriott Juhu", "Prithvi Theatre", "Juhu Tara Road"],
    postalCodes: ["400049"],
    topServices: [
      "sun-control-film",
      "uv-protection-film",
      "glass-and-mirror",
      "residential-window-film",
    ],
    nearby: ["versova", "vile-parle-west", "andheri-west", "santacruz-west", "khar-west"],
    faqs: [
      {
        q: "Will sun control film spoil my Juhu sea view?",
        a: "No, if the right grade is used. Older reflective films darkened rooms and greyed the view — modern nano-ceramic films are optically neutral and pass 50–70% of visible light while blocking the infrared heat. On sea-facing glass we deliberately specify the clearest film that still meets the heat target.",
      },
      {
        q: "Why does UV film matter for a Juhu flat?",
        a: "Because sea-facing rooms get sustained UV exposure across the whole afternoon, and that's what fades hardwood floors, upholstery and artwork. UV film is optically clear, so it protects the contents of a room without changing how the room looks or feels.",
      },
    ],
  },
  {
    slug: "vile-parle-west",
    name: "Vile Parle West",
    region: "Western Suburbs",
    blurb:
      "Film for Irla and Juhu Scheme homes, plus the college and clinic belt around Mithibai.",
    intro:
      "Vile Parle West mixes old Parle family houses with the Juhu Scheme apartment blocks, and the college cluster around Mithibai and NM brings a steady run of institutional glass. Clinics along SV Road are frequent customers for frosted door and partition film, where patient privacy is the requirement.",
    propertyMix:
      "Older low-rise residential with wooden-framed glazing, Juhu Scheme apartment blocks, plus colleges and clinics along SV Road.",
    landmarks: ["Irla", "Mithibai College", "Juhu Scheme", "Cooper Hospital"],
    postalCodes: ["400056", "400049"],
    topServices: [
      "frosted-glass-film",
      "residential-window-film",
      "safety-security-film",
      "glass-and-mirror",
    ],
    nearby: ["vile-parle-east", "juhu", "santacruz-west", "andheri-west"],
    faqs: [
      {
        q: "Can you film glass in older Parle houses with wooden window frames?",
        a: "Yes. Older wooden and steel frames need more careful edge work than modern aluminium sliders, because the glass often sits deeper in the rebate and the putty line is uneven. We trim to the sight line rather than the frame edge so the finish stays clean.",
      },
      {
        q: "Do you do frosted film for clinics in Vile Parle West?",
        a: "Regularly — consulting-room doors and partition glass are among our most common jobs on this stretch of SV Road. Full-opacity frosted film gives complete visual privacy while still passing daylight into rooms that often have no external window.",
      },
    ],
  },
  {
    slug: "vile-parle-east",
    name: "Vile Parle East",
    region: "Western Suburbs",
    blurb:
      "Airport-side homes and offices where Western Express Highway glass takes heat and road noise.",
    intro:
      "Flats facing the Western Express Highway in Vile Parle East deal with sun, dust and traffic glare together. Sun control film handles the first two effects on the glass itself, and we're often asked about safety film as well for highway-facing panes. The Hanuman Road and Nehru Road commercial stretches make up the rest.",
    propertyMix:
      "Highway-facing residential blocks, older Parle-side housing, and small commercial units around Nehru Road and the domestic terminal approach.",
    landmarks: [
      "Western Express Highway",
      "Mumbai Airport Terminal 1",
      "Nehru Road",
      "Parleshwar Temple",
    ],
    postalCodes: ["400057", "400099"],
    topServices: [
      "sun-control-film",
      "safety-security-film",
      "residential-window-film",
      "frosted-glass-film",
    ],
    nearby: ["vile-parle-west", "andheri-east", "santacruz-east", "juhu"],
    faqs: [
      {
        q: "Does window film help with a flat facing the Western Express Highway?",
        a: "For heat, glare and UV, substantially — highway-facing glass in Vile Parle East gets sun for most of the day plus reflected glare off traffic. Film does not reduce noise, though; that needs secondary glazing or a laminated glass unit, which is a glass replacement job rather than a film job.",
      },
      {
        q: "Is safety film worth it on highway-facing windows here?",
        a: "It's worth considering on lower floors. Safety film holds a cracked pane together rather than letting it scatter, which matters where debris or a stone from the road is a realistic risk. It also adds 99% UV rejection as standard.",
      },
    ],
  },
  {
    slug: "santacruz-west",
    name: "Santacruz West",
    region: "Western Suburbs",
    blurb:
      "Linking Road retail glass and residential privacy film through the SV Road and Juhu Circle belt.",
    intro:
      "Santacruz West splits neatly between the Linking Road retail run and quieter residential lanes behind it. Shops want printed branding and frosted display banding; the flats behind mostly want privacy from overlooking buildings. Both are short jobs, and we frequently do a shop and a nearby flat on the same visit.",
    propertyMix:
      "Street-level retail along Linking Road, mid-rise residential in the lanes behind, and a growing number of redevelopment towers.",
    landmarks: ["Linking Road", "Juhu Circle", "SV Road", "Willingdon Gymkhana"],
    postalCodes: ["400054"],
    topServices: [
      "decorative-glass-film",
      "one-way-privacy-film",
      "frosted-glass-film",
      "residential-window-film",
    ],
    nearby: ["santacruz-east", "khar-west", "juhu", "vile-parle-west", "bandra-west"],
    faqs: [
      {
        q: "Can you print shop branding on Linking Road display glass?",
        a: "Yes — printed decorative film is one of our main jobs on this stretch. It's considerably cheaper than a backlit fascia and can be removed and reprinted when a collection or campaign changes, which suits retail cycles here.",
      },
      {
        q: "How do I get privacy in a Santacruz West flat without losing light?",
        a: "Frosted film is the usual answer. It blocks direct sightlines completely while still passing diffused daylight, so a room stays bright. Where you want to keep an outward view, a gradient film that's frosted at the bottom and clear at the top works well.",
      },
    ],
  },
  {
    slug: "santacruz-east",
    name: "Santacruz East",
    region: "Western Suburbs",
    blurb:
      "Kalina campus, Vakola offices and highway-side residential glass across Santacruz East.",
    intro:
      "The Kalina university campus and the office buildings around Vakola drive most of our commercial work in Santacruz East, where frosted partition film and branded glass go in during fit-outs. Residential demand runs to sun control on the highway-facing blocks, which take direct sun with no shading from neighbouring buildings.",
    propertyMix:
      "University and institutional buildings at Kalina, commercial offices around Vakola, and residential colonies facing the Western Express Highway.",
    landmarks: [
      "Mumbai University Kalina Campus",
      "Vakola",
      "Western Express Highway",
      "Air India Colony",
    ],
    postalCodes: ["400055", "400098"],
    topServices: [
      "office-glass-branding",
      "sun-control-film",
      "frosted-glass-film",
      "commercial-glass-film",
    ],
    nearby: ["santacruz-west", "vile-parle-east", "bandra-kurla-complex", "andheri-east"],
    faqs: [
      {
        q: "Do you take on institutional glass work at Kalina?",
        a: "Yes — campus and institutional buildings are regular clients. Typical work is frosted film on staff-room and lab glass for privacy, safety film on corridor and stairwell glazing where breakage is a risk around students, and sun control on west-facing classroom windows.",
      },
      {
        q: "How long does an office partition job take in Vakola?",
        a: "A standard office of 10–20 partition panels is a single day, including cleaning, application and trimming. If the glass needs printed branding, add three to five working days upfront for design approval and printing before the installation date.",
      },
    ],
  },
  {
    slug: "khar-west",
    name: "Khar West",
    region: "Western Suburbs",
    blurb:
      "Boutique retail, restaurants and premium residential glass across Khar's numbered roads.",
    intro:
      "Khar West's numbered roads are full of boutiques, restaurants and design studios where glass is part of the interior concept rather than just a window. That skews our work here toward decorative and printed film — patterned partitions, etched-look logos, metallic finishes — more than plain heat rejection. Carter Road-facing flats are the exception and take sun control.",
    propertyMix:
      "Boutique retail and restaurants on the numbered roads, premium low-rise residential, and sea-facing flats toward Carter Road.",
    landmarks: ["Khar Danda", "Carter Road", "Linking Road", "Khar Gymkhana"],
    postalCodes: ["400052"],
    topServices: [
      "decorative-glass-film",
      "frosted-glass-film",
      "sun-control-film",
      "glass-and-mirror",
    ],
    nearby: ["bandra-west", "santacruz-west", "juhu", "bandra-kurla-complex"],
    faqs: [
      {
        q: "Can you match a specific design or pattern for a Khar boutique?",
        a: "Yes. We print from your artwork or work up a pattern with your designer, produce a digital proof at actual scale, and only print once you've approved it. Matte, gloss, metallic gold, silver and full-colour finishes are all available on the same glass.",
      },
      {
        q: "What do restaurants in Khar usually ask for?",
        a: "Two things: frosted or patterned film on partition glass between dining zones so the space feels divided without closing in, and printed branding on the entrance glass. Both are removable, which matters when a restaurant refreshes its look every few years.",
      },
    ],
  },
  {
    slug: "bandra-west",
    name: "Bandra West",
    region: "Western Suburbs",
    blurb:
      "Sea-facing Bandstand and Carter Road glass, Pali Hill homes, and Hill Road retail film.",
    intro:
      "Bandra West gives us two very different jobs. Sea-facing flats along Bandstand and Carter Road need heat and salt-resistant film on large west windows. Pali Hill and the lanes behind are older bungalows and low-rise blocks where the work is more often decorative glass, mirrors and privacy film. Hill Road and Linking Road retail fills the rest.",
    propertyMix:
      "Sea-facing towers at Bandstand and Carter Road, heritage bungalows and low-rise around Pali Hill, and dense street retail on Hill Road and Linking Road.",
    landmarks: ["Bandstand Promenade", "Carter Road", "Pali Hill", "Mount Mary Church"],
    postalCodes: ["400050"],
    topServices: [
      "sun-control-film",
      "one-way-privacy-film",
      "decorative-glass-film",
      "glass-and-mirror",
    ],
    nearby: ["khar-west", "bandra-kurla-complex", "santacruz-west", "worli", "prabhadevi"],
    faqs: [
      {
        q: "What film works best for a sea-facing flat at Bandstand?",
        a: "A high-TSER nano-ceramic film with high visible light transmission. Sea-facing glass here takes the full western sun off the water, but darkening the view defeats the point of the flat. Ceramic film separates the heat from the light in a way that older dyed or metallic films could not.",
      },
      {
        q: "Do you work on heritage bungalows in Pali Hill?",
        a: "Yes, and they need a lighter touch. Older glazing is often thinner, unevenly set and sometimes original, so we assess thermal stress risk before specifying anything dark — a high-absorption film on old glass can crack it. Usually we go with a clear UV or light heat-rejecting film there.",
      },
    ],
  },
  {
    slug: "bandra-kurla-complex",
    name: "Bandra Kurla Complex (BKC)",
    shortName: "BKC",
    region: "Western Suburbs",
    blurb:
      "Corporate floor plates, banking offices and conference glass across BKC's G and E blocks.",
    intro:
      "BKC is almost entirely commercial, and the work reflects it: full-height glass partitions needing frosted privacy bands, boardroom glass with printed branding, and curtain-wall elevations taking sun control film. Compliance documentation matters more here than anywhere else we work — banks and multinationals need film specs and warranties on record.",
    propertyMix:
      "Grade-A corporate towers with curtain-wall glazing and full-height internal glass partitions, plus hotel and conference glazing.",
    landmarks: [
      "Jio World Centre",
      "BKC G Block",
      "National Stock Exchange",
      "Trident BKC",
    ],
    postalCodes: ["400051", "400098"],
    topServices: [
      "office-glass-branding",
      "commercial-glass-film",
      "frosted-glass-film",
      "safety-security-film",
    ],
    nearby: ["bandra-west", "santacruz-east", "khar-west", "worli", "lower-parel-west"],
    faqs: [
      {
        q: "Do you provide film specifications and warranty documents for BKC offices?",
        a: "Yes — every commercial project gets a full handover pack: glass schedule, film specifications with independently tested performance data, area measurements, manufacturer warranty and post-installation photographs. Facilities teams and green building certification both tend to need it.",
      },
      {
        q: "Can BKC office film be installed outside business hours?",
        a: "That's how most of it gets done. We work evenings and weekends on occupied floors and coordinate access and security clearance with building management ahead of time. A full floor of partition glass typically takes one or two nights.",
      },
    ],
  },
  {
    slug: "goregaon-west",
    name: "Goregaon West",
    region: "Western Suburbs",
    blurb:
      "Society buildings and SV Road retail across Motilal Nagar, Bangur Nagar and Siddharth Nagar.",
    intro:
      "Goregaon West is largely society housing — Motilal Nagar, Bangur Nagar and the colonies around them — where we do a lot of whole-building work rather than single flats. Because the window sizes repeat across a block, filming several flats at once brings the per-flat cost down noticeably.",
    propertyMix:
      "Large planned society colonies with repeating window modules, redevelopment towers on SV Road, and street-level retail.",
    landmarks: ["Motilal Nagar", "Bangur Nagar", "SV Road", "Siddharth Nagar"],
    postalCodes: ["400062", "400104"],
    topServices: [
      "residential-window-film",
      "sun-control-film",
      "frosted-glass-film",
      "safety-security-film",
    ],
    nearby: ["goregaon-east", "malad-west", "andheri-west", "borivali-west"],
    faqs: [
      {
        q: "Can our Goregaon West society get a group rate?",
        a: "Yes, and it's worth organising. When several flats in the same building are filmed together we cut film in batches from the same rolls and complete multiple flats per visit, which reduces the per-flat cost. We're happy to present to the society committee and quote common areas separately.",
      },
      {
        q: "Which film suits a west-facing society flat in Goregaon?",
        a: "Sun control film on the west and south windows is the priority — those are the ones making the flat hot from midday onwards. If the building faces another block closely, adding frosted film on bathroom and bedroom glass covers privacy in the same visit.",
      },
    ],
  },
  {
    slug: "goregaon-east",
    name: "Goregaon East",
    region: "Western Suburbs",
    blurb:
      "Exhibition, studio and corporate glass around Nesco, Film City and Nirlon Knowledge Park.",
    intro:
      "Goregaon East is where our exhibition and studio work concentrates. Nesco stands need short-life printed graphics on glass and acrylic, Film City sets need blackout and frosted treatments at short notice, and the Nirlon and Oberoi office campuses need standard corporate partition film. Turnaround expectations here are tighter than anywhere else we work.",
    propertyMix:
      "Exhibition halls, film and television studios, corporate campuses at Nirlon and Oberoi, plus Aarey-side residential towers.",
    landmarks: [
      "Nesco Bombay Exhibition Centre",
      "Film City",
      "Nirlon Knowledge Park",
      "Oberoi Mall",
    ],
    postalCodes: ["400063", "400065"],
    topServices: [
      "decorative-glass-film",
      "office-glass-branding",
      "commercial-glass-film",
      "frosted-glass-film",
    ],
    nearby: ["goregaon-west", "malad-east", "andheri-east", "powai"],
    faqs: [
      {
        q: "Can you turn around exhibition graphics for a Nesco stand quickly?",
        a: "Usually, if artwork is print-ready. Printing and cutting is typically 48–72 hours, and application on stand glass is a few hours. Tell us the build schedule when you enquire — we plan around hall access windows, which are often overnight.",
      },
      {
        q: "Do you work with production studios in Film City?",
        a: "Yes. Studio work is mostly temporary: frosted or blackout film applied for a shoot and removed afterwards. We use films chosen for clean removal so there's no adhesive residue left on set glass once the production wraps.",
      },
    ],
  },
  {
    slug: "malad-west",
    name: "Malad West",
    region: "Western Suburbs",
    blurb:
      "Mindspace offices, Link Road malls and the residential belt out toward Marve Road.",
    intro:
      "Malad West runs from the Mindspace IT park through the Link Road mall strip out to the quieter Marve Road residential stretch, and each end wants something different. Mindspace floors take partition and branding film; the malls take printed retail graphics; Marve Road homes take heat and privacy film.",
    propertyMix:
      "IT park floor plates at Mindspace, mall and showroom glazing on Link Road, and mid-rise residential toward Marve Road and Malad Chowk.",
    landmarks: ["Mindspace Malad", "Inorbit Mall", "Link Road", "Marve Road"],
    postalCodes: ["400064", "400095"],
    topServices: [
      "office-glass-branding",
      "sun-control-film",
      "decorative-glass-film",
      "residential-window-film",
    ],
    nearby: ["malad-east", "kandivali-west", "goregaon-west", "borivali-west", "versova"],
    faqs: [
      {
        q: "Do you work in the Mindspace office park in Malad?",
        a: "Regularly. IT park fit-outs are a core part of our commercial work — frosted privacy banding on cabin and meeting-room glass, printed logos on reception glass, and sun control on west-facing curtain wall. We coordinate access with park facilities management before starting.",
      },
      {
        q: "Is showroom glass film different from office film?",
        a: "Yes. Showroom glass is about display, so film there is usually printed graphics or a frosted band positioned to hide storage areas without blocking the product view. Office film is about privacy and branding. Different films, different placement logic — we plan showroom work around the sightline a customer has from the street.",
      },
    ],
  },
  {
    slug: "malad-east",
    name: "Malad East",
    region: "Western Suburbs",
    blurb:
      "Highway-side residential and commercial glass through Kurar, Pushpa Park and Rani Sati Marg.",
    intro:
      "Malad East sits against the Western Express Highway, so the dominant problem on glass here is sun plus road dust rather than privacy. Sun control film is the bulk of what we fit. The commercial units along Rani Sati Marg add frosted partition and branding work at a smaller scale than Malad West.",
    propertyMix:
      "Highway-facing residential blocks, older colonies around Kurar and Pushpa Park, and small-to-mid commercial units.",
    landmarks: [
      "Western Express Highway",
      "Kurar Village",
      "Pushpa Park",
      "Rani Sati Marg",
    ],
    postalCodes: ["400097"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "frosted-glass-film",
      "safety-security-film",
    ],
    nearby: ["malad-west", "kandivali-east", "goregaon-east", "borivali-east"],
    faqs: [
      {
        q: "Does road dust affect window film on highway-facing glass?",
        a: "It settles on the surface but doesn't damage the film itself, since the film sits on the inside of the glass. What it does mean is that the outer glass needs cleaning more often. The film surface inside just needs a soft cloth and mild soap — no abrasive pads.",
      },
      {
        q: "How much cooler will sun control film make a Malad East flat?",
        a: "On a west or south-facing room with significant glass, most customers notice the difference within days — the room stops radiating heat in the late afternoon. Measured against the AC bill, typical savings run 15–25% on cooling over a summer, with the biggest effect where glass area is largest.",
      },
    ],
  },
  {
    slug: "kandivali-west",
    name: "Kandivali West",
    region: "Western Suburbs",
    blurb:
      "Charkop and Mahavir Nagar society flats, plus Link Road commercial glass.",
    intro:
      "Kandivali West is mostly family housing across Charkop, Mahavir Nagar and Poisar, and the work here is domestic in scale: bathroom frosting, bedroom privacy film, and sun control on the exposed elevations. Safety film comes up more often than average because a lot of these are families with young children in older buildings.",
    propertyMix:
      "Planned society sectors at Charkop, mid-rise family housing in Mahavir Nagar and Poisar, and neighbourhood retail on Link Road.",
    landmarks: ["Charkop", "Mahavir Nagar", "Poisar", "Link Road"],
    postalCodes: ["400067"],
    topServices: [
      "residential-window-film",
      "safety-security-film",
      "frosted-glass-film",
      "sun-control-film",
    ],
    nearby: ["kandivali-east", "borivali-west", "malad-west", "borivali-east"],
    faqs: [
      {
        q: "Is safety film worth fitting in a flat with small children?",
        a: "It's one of the better-value things you can do. Safety film doesn't stop glass cracking, but it holds the broken pieces in the frame instead of letting them fall as shards — which is the actual injury risk with a child running into a low pane or a balcony door. It's optically clear, so nothing about the room changes.",
      },
      {
        q: "Can you frost just the bottom half of a bathroom window?",
        a: "Yes, and it's a common request in Charkop and Mahavir Nagar flats. Frosting to the height you need gives privacy while leaving the top clear for light and ventilation view. We cut to the line you mark during the site visit.",
      },
    ],
  },
  {
    slug: "kandivali-east",
    name: "Kandivali East",
    region: "Western Suburbs",
    blurb:
      "Thakur Village and Thakur Complex towers, plus Lokhandwala Township residential film.",
    intro:
      "Kandivali East's Thakur Village and Thakur Complex are newer high-rise developments with much larger glass areas than the older Kandivali stock, which changes the brief — heat gain through big windows is the main complaint, and higher floors get unshaded sun all day. Lokhandwala Township adds a similar profile.",
    propertyMix:
      "Newer high-rise townships with large window and balcony glazing, plus commercial units along the Western Express Highway approach.",
    landmarks: [
      "Thakur Village",
      "Thakur Complex",
      "Lokhandwala Township Kandivali",
      "Samta Nagar",
    ],
    postalCodes: ["400101"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "uv-protection-film",
      "safety-security-film",
    ],
    nearby: ["kandivali-west", "borivali-east", "malad-east", "borivali-west"],
    faqs: [
      {
        q: "Do higher floors in Thakur Village need stronger film?",
        a: "Often, yes. Upper floors get unshaded sun for far longer than lower floors that neighbouring buildings shade for part of the day, so we usually specify a higher heat-rejection grade above the tenth floor or so. We assess floor by floor rather than quoting one film for the whole building.",
      },
      {
        q: "Can film go on balcony sliding doors?",
        a: "Yes — large sliding glass doors are among the biggest heat sources in these towers, and they're straightforward to film. The one thing to note is the cure period: leave the doors as they are for a few days after fitting so the edges bond fully before the panels slide against each other.",
      },
    ],
  },
  {
    slug: "borivali-west",
    name: "Borivali West",
    region: "Western Suburbs",
    blurb:
      "IC Colony, Chandavarkar Road and Gorai-side homes at the western end of the suburban line.",
    intro:
      "Borivali West runs from the station stretch out toward Gorai and Eksar, with a mix of older buildings and recent redevelopment. IC Colony and the LT Road belt bring a steady run of residential jobs, and the Chandavarkar Road shops take retail film. Being at the far end of the line, we usually batch Borivali visits across a day.",
    propertyMix:
      "Older residential buildings around IC Colony and Eksar, redevelopment towers near the station, and dense neighbourhood retail on Chandavarkar Road.",
    landmarks: ["IC Colony", "Chandavarkar Road", "LT Road", "Gorai"],
    postalCodes: ["400091", "400092", "400103"],
    topServices: [
      "residential-window-film",
      "sun-control-film",
      "glass-and-mirror",
      "frosted-glass-film",
    ],
    nearby: ["borivali-east", "kandivali-west", "malad-west", "kandivali-east"],
    faqs: [
      {
        q: "Do you charge extra to come out to Borivali?",
        a: "No — the rate per square foot is the same as anywhere in Mumbai. We do tend to group Borivali appointments into the same day for efficiency, so there may be a day or two of scheduling flexibility involved rather than an immediate visit.",
      },
      {
        q: "Can you supply and fit mirrors in Borivali West?",
        a: "Yes. Custom-cut wardrobe mirrors, bathroom vanity mirrors and full-length wall mirrors are a regular part of our work here. We measure on site, cut to your dimensions and fit with the right backing and edge finish in the same visit where the size allows.",
      },
    ],
  },
  {
    slug: "borivali-east",
    name: "Borivali East",
    region: "Western Suburbs",
    blurb:
      "Highway-side towers and national-park-adjacent homes across Magathane and Rajendra Nagar.",
    intro:
      "Borivali East backs onto Sanjay Gandhi National Park, so the eastern-facing flats here get early direct sun and a lot of morning glare. The Western Express Highway side is the opposite problem — exposed, unshaded and dusty. We specify differently for each side of the same building here more often than in most areas.",
    propertyMix:
      "Highway-facing residential towers, mid-rise blocks in Magathane and Rajendra Nagar, and park-adjacent low-rise.",
    landmarks: [
      "Sanjay Gandhi National Park",
      "Magathane",
      "Rajendra Nagar",
      "Western Express Highway",
    ],
    postalCodes: ["400066"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "uv-protection-film",
      "safety-security-film",
    ],
    nearby: ["borivali-west", "kandivali-east", "malad-east", "kandivali-west"],
    faqs: [
      {
        q: "Does east-facing glass need sun control film too?",
        a: "It benefits from it, though for a different reason than west-facing glass. East-facing windows in Borivali East get intense morning glare rather than sustained afternoon heat, so we often specify a film weighted toward glare reduction and UV rather than maximum heat rejection.",
      },
      {
        q: "Can different flats in the same building need different film?",
        a: "Frequently, and it's worth getting right. A west-facing flat and an east-facing flat in the same tower have completely different sun exposure, and quoting one film for both means one of them is over-specified and the other under-specified. We assess orientation per flat during the visit.",
      },
    ],
  },

  // ── South Mumbai ────────────────────────────────────────────────────────
  {
    slug: "colaba",
    name: "Colaba",
    region: "South Mumbai",
    blurb:
      "Heritage buildings, Causeway retail and Cuffe Parade sea-facing towers at Mumbai's southern tip.",
    intro:
      "Colaba's building stock is the oldest we work with, and heritage glazing needs assessment before anything goes on it — old glass is thinner, unevenly annealed and more prone to thermal stress. Causeway retail is the commercial side, and the Cuffe Parade towers are conventional modern sun control work.",
    propertyMix:
      "Colonial-era heritage buildings with original glazing, Causeway street retail, and 1970s–2000s sea-facing towers at Cuffe Parade.",
    landmarks: [
      "Gateway of India",
      "Colaba Causeway",
      "Cuffe Parade",
      "Taj Mahal Palace",
    ],
    postalCodes: ["400001", "400005"],
    topServices: [
      "uv-protection-film",
      "safety-security-film",
      "sun-control-film",
      "decorative-glass-film",
    ],
    nearby: ["churchgate", "marine-lines", "malabar-hill", "nagpada"],
    faqs: [
      {
        q: "Can window film be applied to heritage building glass in Colaba?",
        a: "Usually, but it needs assessment first. Old glass is often thinner and unevenly annealed, which makes it vulnerable to thermal stress cracking if you fit a dark, high-absorption film. On heritage glazing we normally specify a clear UV or low-absorption film, and we check the pane condition and frame before quoting.",
      },
      {
        q: "Do you need heritage committee permission for film in Colaba?",
        a: "For interior-applied film that doesn't change the external appearance, generally not — but buildings inside the heritage precinct have their own rules, and reflective or mirrored film that alters how the facade reads from the street can require approval. We'll flag it if your building falls in that category, and recommend a neutral film instead.",
      },
    ],
  },
  {
    slug: "churchgate",
    name: "Churchgate",
    region: "South Mumbai",
    covers: ["Churchgate East", "Churchgate West"],
    blurb:
      "Corporate offices, colleges and Marine Drive-facing glass around Churchgate station.",
    intro:
      "Churchgate is compact and almost entirely commercial and institutional — offices along Veer Nariman Road, the college belt around the Oval, and Marine Drive-facing floors that take the full western sun off the bay. We cover both sides of the station; the locality is small enough that it reads as one area rather than an east and a west.",
    propertyMix:
      "Art Deco and mid-century office buildings, college and institutional glazing, and sea-facing upper floors along Marine Drive.",
    landmarks: [
      "Churchgate Station",
      "Marine Drive",
      "Oval Maidan",
      "Veer Nariman Road",
    ],
    postalCodes: ["400020"],
    topServices: [
      "sun-control-film",
      "office-glass-branding",
      "frosted-glass-film",
      "uv-protection-film",
    ],
    nearby: ["marine-lines", "colaba", "charni-road", "malabar-hill"],
    faqs: [
      {
        q: "Do you cover both sides of Churchgate station?",
        a: "Yes — Churchgate is compact enough that we treat it as a single area rather than separate east and west localities. Whether your building is toward Marine Drive, the Oval or Veer Nariman Road, it's the same visit and the same rate.",
      },
      {
        q: "What film suits a Marine Drive-facing office floor?",
        a: "High heat rejection with minimal tint. These floors get sustained western sun off the bay from midday onwards, and the glare on screens is usually the complaint that prompts the call. A nano-ceramic film cuts both heat and glare while keeping the bay view, which is the whole point of the address.",
      },
    ],
  },
  {
    slug: "marine-lines",
    name: "Marine Lines",
    region: "South Mumbai",
    covers: ["Marine Lines East", "Marine Lines West"],
    blurb:
      "Hospital, office and Marine Drive residential glass along the Marine Lines stretch.",
    intro:
      "Marine Lines mixes the hospital and clinical cluster around Bombay Hospital with the Marine Drive residential frontage and the commercial blocks behind it. Clinical glass wants frosted privacy film and safety film; the sea-facing residential wants heat control. We cover the whole stretch on both sides of the line as one area.",
    propertyMix:
      "Hospital and clinic buildings, mid-century Marine Drive residential frontage, and commercial blocks toward the Metro junction.",
    landmarks: [
      "Marine Drive",
      "Bombay Hospital",
      "Wankhede Stadium",
      "Metro Junction",
    ],
    postalCodes: ["400002", "400020"],
    topServices: [
      "frosted-glass-film",
      "safety-security-film",
      "sun-control-film",
      "uv-protection-film",
    ],
    nearby: ["churchgate", "charni-road", "colaba", "grant-road-west"],
    faqs: [
      {
        q: "Do you do frosted film for hospitals and clinics near Marine Lines?",
        a: "Yes — clinical glass is a regular job here. Consulting-room doors, ward partitions and reception glass typically take full-opacity frosted film for patient privacy, and corridor or stairwell glazing often gets safety film. Both are easy to clean and hold up to routine disinfection.",
      },
      {
        q: "Is Marine Lines treated as one area or split east and west?",
        a: "One area. The east and west sides here are station exits rather than separate neighbourhoods, so we cover the whole stretch — Marine Drive frontage, the hospital cluster and the blocks behind — under a single service area.",
      },
    ],
  },
  {
    slug: "charni-road",
    name: "Charni Road",
    region: "South Mumbai",
    covers: ["Charni Road East", "Charni Road West"],
    blurb:
      "Girgaon and Opera House buildings, jewellery retail and Chowpatty-facing residential.",
    intro:
      "Charni Road covers the Girgaon side and the Chowpatty frontage, and the standout requirement here is the jewellery trade around Opera House, where security film on display and shopfront glass is a genuine need rather than a nice-to-have. Residential work runs to the older Girgaon chawls and buildings with small, deep-set windows.",
    propertyMix:
      "Older Girgaon residential buildings with deep-set glazing, jewellery and trade retail around Opera House, and Chowpatty-facing flats.",
    landmarks: [
      "Girgaon Chowpatty",
      "Opera House",
      "Wilson College",
      "Thakurdwar",
    ],
    postalCodes: ["400004", "400007"],
    topServices: [
      "safety-security-film",
      "frosted-glass-film",
      "sun-control-film",
      "glass-and-mirror",
    ],
    nearby: ["grant-road-west", "marine-lines", "malabar-hill", "churchgate"],
    faqs: [
      {
        q: "What security film do jewellery shops near Opera House need?",
        a: "For retail display and shopfront glass we recommend 300–400 micron film, ideally with an edge-attachment system that bonds the film to the frame as well as the glass. That combination can hold a pane through repeated impacts, adding minutes to a forced entry — usually enough that an opportunistic attempt is abandoned.",
      },
      {
        q: "Can you film small deep-set windows in old Girgaon buildings?",
        a: "Yes. Deep reveals and uneven putty lines take more time to cut around than modern frames, but the result is the same. We trim to the sight line rather than the frame edge so you don't get a visible film border sitting proud of the glass.",
      },
    ],
  },
  {
    slug: "grant-road-west",
    name: "Grant Road West",
    region: "South Mumbai",
    blurb:
      "Nana Chowk, Tardeo and Gamdevi buildings, plus the hospital and retail belt.",
    intro:
      "Grant Road West covers Nana Chowk through Tardeo and Gamdevi — dense, mixed-use, and full of older buildings where the flat above a shop is the norm. Privacy film sells here because windows open onto busy streets at close range, and the hospital cluster around Bhatia brings clinical frosting work.",
    propertyMix:
      "Mixed-use buildings with retail below and residential above, hospital and clinic glazing, and older Gamdevi housing stock.",
    landmarks: [
      "Nana Chowk",
      "Tardeo",
      "Bhatia Hospital",
      "August Kranti Maidan",
    ],
    postalCodes: ["400007", "400036"],
    topServices: [
      "one-way-privacy-film",
      "frosted-glass-film",
      "safety-security-film",
      "residential-window-film",
    ],
    nearby: ["charni-road", "peddar-road", "mumbai-central-west", "malabar-hill"],
    faqs: [
      {
        q: "My Grant Road flat window opens onto a busy street — what helps?",
        a: "Frosted film on the lower section is the most reliable fix, because it works day and night. One-way reflective film gives you a clear outward view during the day, but reverses once your lights are on after dark — on a street this close and this busy, that matters.",
      },
      {
        q: "Do you work in mixed-use buildings with shops below?",
        a: "Yes, and it's most of what we do on this stretch. We can film the shopfront and the flats above in the same visit. Shop glass usually needs branding or safety film; the flats need privacy — different films, one appointment.",
      },
    ],
  },
  {
    slug: "malabar-hill",
    name: "Malabar Hill",
    region: "South Mumbai",
    blurb:
      "Premium sea-facing residences around Walkeshwar, Hanging Gardens and Banganga.",
    intro:
      "Malabar Hill work is almost entirely high-end residential, and the priorities differ from most areas: protecting art, hardwood and furnishings from UV usually outranks cutting heat, and nothing can visibly alter the facade or the view. Optically clear UV film and neutral ceramic film are what we fit here most.",
    propertyMix:
      "Premium sea-facing apartments and older private residences, many with large picture windows and significant interior furnishing value.",
    landmarks: [
      "Hanging Gardens",
      "Walkeshwar",
      "Banganga Tank",
      "Kamala Nehru Park",
    ],
    postalCodes: ["400006"],
    topServices: [
      "uv-protection-film",
      "sun-control-film",
      "safety-security-film",
      "glass-and-mirror",
    ],
    nearby: ["breach-candy", "peddar-road", "charni-road", "colaba"],
    faqs: [
      {
        q: "Will UV film protect artwork and furniture in a Malabar Hill flat?",
        a: "Substantially. UV is the primary cause of fading in artwork, silk, upholstery and hardwood, and standard glass lets a lot of UVA through. Optically clear UV film blocks up to 99% of it with almost no visible change to the glass — which is usually the deciding factor for clients here.",
      },
      {
        q: "Is there a film that doesn't change how the building looks from outside?",
        a: "Yes. Clear UV and neutral nano-ceramic films are effectively invisible from the street — no mirror effect, no colour shift. That matters in buildings where the society restricts anything that alters facade uniformity, and it's what we default to on Malabar Hill.",
      },
    ],
  },
  {
    slug: "breach-candy",
    name: "Breach Candy",
    region: "South Mumbai",
    blurb:
      "Sea-facing residences and clinical glass along Bhulabhai Desai Road and Warden Road.",
    intro:
      "Breach Candy's sea-facing flats along Bhulabhai Desai Road take direct western sun with nothing in front of them, so heat rejection here has to be high without darkening the view. The hospital and clinic cluster is the other half of our work in the area, where frosted privacy film and safety glazing are the standard requirements.",
    propertyMix:
      "Sea-facing residential towers with large west-facing glazing, plus hospital and clinic buildings along Warden Road.",
    landmarks: [
      "Breach Candy Hospital",
      "Bhulabhai Desai Road",
      "Warden Road",
      "Amarsons Garden",
    ],
    postalCodes: ["400026"],
    topServices: [
      "sun-control-film",
      "uv-protection-film",
      "frosted-glass-film",
      "safety-security-film",
    ],
    nearby: ["peddar-road", "malabar-hill", "worli", "grant-road-west"],
    faqs: [
      {
        q: "How much heat can film cut on a west-facing Breach Candy flat?",
        a: "A high-performance nano-ceramic film rejects up to about 78% of total solar energy. On an unshaded west-facing sea view — which is most of Bhulabhai Desai Road — that's the difference between a room being unusable from 3pm and being comfortable, without the glass going dark.",
      },
      {
        q: "Do you install film in hospitals and clinics here?",
        a: "Yes. Clinical work usually combines frosted film on consulting and treatment room glass for patient privacy with safety film on corridor and waiting-area glazing. Both surfaces stand up to routine cleaning and disinfection without degrading.",
      },
    ],
  },
  {
    slug: "peddar-road",
    name: "Peddar Road",
    region: "South Mumbai",
    blurb:
      "Premium residences and medical consulting rooms around Kemps Corner and Jaslok.",
    intro:
      "Peddar Road is a narrow band of premium residential and medical practices, and the two need opposite things from glass. Residences want protection with no visible change; consulting rooms and clinics around Jaslok want complete visual privacy. We fit clear UV film for one and full-opacity frosted for the other, often in the same building.",
    propertyMix:
      "Premium apartment buildings, doctors' consulting rooms and small private clinics, and Kemps Corner retail.",
    landmarks: ["Jaslok Hospital", "Kemps Corner", "Peddar Road", "Sophia College"],
    postalCodes: ["400026"],
    topServices: [
      "frosted-glass-film",
      "uv-protection-film",
      "sun-control-film",
      "decorative-glass-film",
    ],
    nearby: ["breach-candy", "malabar-hill", "grant-road-west", "worli"],
    faqs: [
      {
        q: "What film do doctors' consulting rooms usually need?",
        a: "Full-opacity frosted film on door and partition glass. It gives complete visual privacy while still passing daylight into rooms that often have no external window — which matters in the older Peddar Road buildings where consulting rooms are carved out of larger flats.",
      },
      {
        q: "Can you add a clinic name or logo to frosted door glass?",
        a: "Yes, and it's the most common configuration we fit for practices here — frosted base film with the practice name, timings and contact details printed over it. One panel does both jobs: privacy for the room and signage for the corridor.",
      },
    ],
  },
  {
    slug: "nagpada",
    name: "Nagpada",
    region: "South Mumbai",
    blurb:
      "Trade, hospital and older residential glass around Nagpada Junction and Bellasis Road.",
    intro:
      "Nagpada is dense, commercial and old. Trade premises and small workshops around the junction take safety and security film on street-facing glass, the JJ Hospital cluster brings clinical work, and the residential buildings are older stock with small windows where privacy from close neighbours is the recurring ask.",
    propertyMix:
      "Trade and workshop premises, hospital buildings around JJ, and older high-density residential with small window openings.",
    landmarks: ["Nagpada Junction", "JJ Hospital", "Bellasis Road", "Madanpura"],
    postalCodes: ["400008"],
    topServices: [
      "safety-security-film",
      "frosted-glass-film",
      "one-way-privacy-film",
      "glass-and-mirror",
    ],
    nearby: ["mumbai-central-east", "mumbai-central-west", "grant-road-west", "colaba"],
    faqs: [
      {
        q: "Is security film worth it for a shop at Nagpada Junction?",
        a: "For street-facing glass at ground level, yes. Security film won't stop a determined break-in, but it holds the pane together through repeated impacts and turns a fast smash-and-grab into a slow, loud one. That delay is usually what deters an opportunistic attempt.",
      },
      {
        q: "Do you work on older buildings with small windows here?",
        a: "Regularly. Small panes and deep reveals take longer per square foot than large modern glazing because there's more cutting and edge work relative to the area, but the job is straightforward and usually done within a few hours for a whole flat.",
      },
    ],
  },
  {
    slug: "mumbai-central-west",
    name: "Mumbai Central West",
    region: "South Mumbai",
    blurb:
      "Tardeo-side offices, hospital glass and residential blocks west of Mumbai Central.",
    intro:
      "The western side of Mumbai Central runs toward Tardeo and Bellasis Road, mixing office buildings, the Nair Hospital cluster and older residential blocks. Commercial glass here takes frosted partition and branding film; the hospital side takes clinical frosting; residential takes privacy film against close street frontage.",
    propertyMix:
      "Office buildings toward Tardeo, hospital and institutional glazing, and older residential blocks fronting busy roads.",
    landmarks: [
      "Mumbai Central Terminus",
      "Bellasis Road",
      "Nair Hospital",
      "Tardeo",
    ],
    postalCodes: ["400008", "400011", "400034"],
    topServices: [
      "frosted-glass-film",
      "office-glass-branding",
      "safety-security-film",
      "sun-control-film",
    ],
    nearby: ["mumbai-central-east", "grant-road-west", "worli", "nagpada"],
    faqs: [
      {
        q: "What's the difference between Mumbai Central West and East for you?",
        a: "Mostly the building mix. The west side toward Tardeo is more office and hospital work — frosted partitions, branding, clinical privacy film. The east side toward Agripada and Byculla is denser residential and trade premises, where privacy and security film dominate. Same rates, different typical job.",
      },
      {
        q: "Can you film office partitions without closing the office?",
        a: "Yes. Partition film goes in cabin by cabin, so a floor stays operational while we work through it. A standard office of 10–20 panels is a single day. Where a business can't have any disruption at all, we schedule the work for an evening or weekend.",
      },
    ],
  },
  {
    slug: "mumbai-central-east",
    name: "Mumbai Central East",
    region: "South Mumbai",
    blurb:
      "Agripada and Byculla-side residential and trade premises east of the terminus.",
    intro:
      "East of Mumbai Central the character shifts to dense residential around Agripada and the trade premises running toward Byculla. Buildings sit close together with windows facing each other at short range, so privacy film is the bulk of the residential work, and ground-floor trade glass takes safety film.",
    propertyMix:
      "High-density older residential around Agripada, trade and wholesale premises, and mixed-use buildings toward Byculla.",
    landmarks: ["Agripada", "Byculla", "Jacob Circle", "Mumbai Central Terminus"],
    postalCodes: ["400008", "400011", "400027"],
    topServices: [
      "one-way-privacy-film",
      "frosted-glass-film",
      "safety-security-film",
      "residential-window-film",
    ],
    nearby: ["mumbai-central-west", "nagpada", "worli", "lower-parel-east"],
    faqs: [
      {
        q: "Buildings here are very close together — will film actually give privacy?",
        a: "Frosted film will, completely and at any hour. One-way film is the one to be careful with at close range: it works well in daylight but reverses after dark, and when the building opposite is only a few metres away that's a real limitation. For close-facing windows we recommend frosted.",
      },
      {
        q: "Do you film wholesale and trade premises?",
        a: "Yes. Trade premises usually want two things — safety or security film on street-facing glass to slow forced entry, and frosted film on any office or cabin glass inside. Both can be done in one visit, typically outside trading hours.",
      },
    ],
  },

  // ── Central Mumbai ──────────────────────────────────────────────────────
  {
    slug: "worli",
    name: "Worli",
    region: "Central Mumbai",
    blurb:
      "Sea Face towers, corporate offices and Sea Link-facing glass across Worli.",
    intro:
      "Worli's high-rises have some of the largest glass areas we work with — floor-to-ceiling glazing facing the sea and the Sea Link, which looks superb and gains a great deal of heat. Sun control film on these towers is our most common Worli job, alongside corporate office work in the commercial blocks inland.",
    propertyMix:
      "Tall residential towers with floor-to-ceiling sea-facing glazing, corporate offices, and older Worli Village low-rise.",
    landmarks: [
      "Worli Sea Face",
      "Bandra-Worli Sea Link",
      "Nehru Planetarium",
      "Worli Village",
    ],
    postalCodes: ["400018", "400025", "400030"],
    topServices: [
      "sun-control-film",
      "uv-protection-film",
      "office-glass-branding",
      "commercial-glass-film",
    ],
    nearby: ["prabhadevi", "lower-parel-west", "bandra-west", "breach-candy", "dadar-west"],
    faqs: [
      {
        q: "Is film effective on floor-to-ceiling glass in a Worli tower?",
        a: "It's where film makes the biggest difference, because the glass area per room is so large that heat gain dominates the room's comfort. On unshaded sea-facing elevations a high-TSER ceramic film can take a room from unusable in the afternoon to comfortable, without darkening the view down the coast.",
      },
      {
        q: "Do high-rise societies in Worli need committee approval for film?",
        a: "Many do, where the film would change the external appearance of the facade. Neutral and clear films generally pass without issue since they read as ordinary glass from outside; mirrored and reflective films are the ones that get refused. We can supply film specifications and a sample for the committee before you commit.",
      },
    ],
  },
  {
    slug: "prabhadevi",
    name: "Prabhadevi",
    region: "Central Mumbai",
    covers: ["Prabhadevi East", "Prabhadevi West"],
    blurb:
      "Sea-facing residential and commercial glass between Siddhivinayak and Dadar Chowpatty.",
    intro:
      "Prabhadevi sits between Worli and Dadar, with sea-facing residential toward Dadar Chowpatty and a commercial strip around Century Bazaar. Heat rejection dominates on the western frontage. We cover the whole locality as a single area — the east and west labels here refer to sides of the road rather than separate neighbourhoods.",
    propertyMix:
      "Sea-facing residential towers, mid-rise housing inland, and commercial and showroom units around Century Bazaar.",
    landmarks: [
      "Siddhivinayak Temple",
      "Dadar Chowpatty",
      "Century Bazaar",
      "Ravindra Natya Mandir",
    ],
    postalCodes: ["400025", "400028"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "decorative-glass-film",
      "uv-protection-film",
    ],
    nearby: ["worli", "dadar-west", "lower-parel-west", "matunga-west"],
    faqs: [
      {
        q: "Do you treat Prabhadevi as one service area?",
        a: "Yes. Prabhadevi is a single compact locality — the east and west references people use here are sides of the main road rather than distinct neighbourhoods the way Dadar East and West are. One visit covers the whole area at the same rate.",
      },
      {
        q: "What suits a sea-facing flat toward Dadar Chowpatty?",
        a: "Sun control film with high visible light transmission on the western glass, and UV film elsewhere if you have furnishings or artwork worth protecting. The western frontage here gets the full afternoon sun off the water with nothing to shade it.",
      },
    ],
  },
  {
    slug: "lower-parel-west",
    name: "Lower Parel West",
    region: "Central Mumbai",
    blurb:
      "Kamala Mills and Phoenix-side corporate glass, restaurants and mill-conversion offices.",
    intro:
      "Lower Parel West is our densest commercial patch after BKC. The mill conversions around Kamala Mills and Todi have vast glazed floor plates that need partition frosting and branded glass, and the restaurant and bar cluster inside them takes decorative and printed film. Peninsula-side corporate towers add curtain-wall sun control work.",
    propertyMix:
      "Converted mill compounds with large glazed floor plates, corporate towers, and a dense restaurant and retail cluster.",
    landmarks: [
      "Kamala Mills",
      "High Street Phoenix",
      "Peninsula Corporate Park",
      "Todi Mills",
    ],
    postalCodes: ["400013"],
    topServices: [
      "office-glass-branding",
      "frosted-glass-film",
      "decorative-glass-film",
      "commercial-glass-film",
    ],
    nearby: ["lower-parel-east", "worli", "prabhadevi", "dadar-west", "bandra-kurla-complex"],
    faqs: [
      {
        q: "Can you film a whole office floor in Kamala Mills?",
        a: "Yes — full-floor partition work is standard for us here. A typical floor of meeting rooms and cabins is one to two days depending on panel count. If branding is printed rather than plain frosted, allow three to five working days beforehand for proofing and printing.",
      },
      {
        q: "What film works for restaurants and bars in Lower Parel?",
        a: "Decorative and patterned film on partition glass, which divides a room visually without walling it off, plus printed branding on entrance glass. Because it's removable and reprintable, it suits venues that refresh their look every few years — considerably cheaper than replacing glass or re-etching.",
      },
    ],
  },
  {
    slug: "lower-parel-east",
    name: "Lower Parel East",
    region: "Central Mumbai",
    blurb:
      "Currey Road-side residential towers and commercial units east of the mill district.",
    intro:
      "East of the railway line, Lower Parel is more residential than the mill-district side — tall redevelopment towers around Currey Road and Chinchpokli with large balcony glazing, plus older buildings and trade premises. Sun control on upper floors and privacy film on lower ones is the usual split.",
    propertyMix:
      "New residential towers with large balcony glazing, older mid-rise housing, and trade and commercial premises toward Chinchpokli.",
    landmarks: [
      "Currey Road",
      "Chinchpokli",
      "Dr Ambedkar Road",
      "Eastern Freeway approach",
    ],
    postalCodes: ["400012", "400013"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "one-way-privacy-film",
      "safety-security-film",
    ],
    nearby: ["lower-parel-west", "dadar-east", "mumbai-central-east", "worli"],
    faqs: [
      {
        q: "Why do lower floors and upper floors get different film here?",
        a: "Because they have different problems. Upper floors in these towers get unshaded sun and want heat rejection. Lower floors are overlooked by neighbouring buildings and the road, so privacy matters more than heat. Quoting one film for a whole flat stack usually means someone is paying for the wrong thing.",
      },
      {
        q: "Can film go on balcony glass and railings?",
        a: "Yes — balcony glazing and glass railings both take film. Railing glass is often toughened, which is fine for film, and frosted film on it is a common request where a balcony is overlooked from the side. We check the glass type during the site visit before specifying.",
      },
    ],
  },
  {
    slug: "dadar-west",
    name: "Dadar West",
    region: "Central Mumbai",
    blurb:
      "Shivaji Park homes, Ranade Road retail and the older residential belt of Dadar West.",
    intro:
      "Dadar West is established, mostly residential, and full of buildings from the 1950s to 1980s with steel-framed windows that need careful edge work. Shivaji Park-facing flats want heat and glare control; Ranade Road and the market streets bring retail film work, including a lot of small shopfronts.",
    propertyMix:
      "Mid-century residential buildings with steel-framed glazing, Shivaji Park-facing flats, and dense small-format retail on Ranade Road.",
    landmarks: [
      "Shivaji Park",
      "Ranade Road",
      "Dadar Flower Market",
      "Portuguese Church",
    ],
    postalCodes: ["400028"],
    topServices: [
      "residential-window-film",
      "sun-control-film",
      "frosted-glass-film",
      "glass-and-mirror",
    ],
    nearby: ["dadar-east", "prabhadevi", "matunga-west", "worli", "lower-parel-west"],
    faqs: [
      {
        q: "Can you film steel-framed windows in older Dadar buildings?",
        a: "Yes — most of the residential stock here has them. Steel frames hold glass in smaller panes with narrow sight lines, so there's more cutting per square foot than on a modern slider, but the finish is clean once trimmed. It adds a little time, not cost per square foot.",
      },
      {
        q: "Do you do small shopfronts on Ranade Road?",
        a: "Regularly. Small shops usually want a frosted band with the shop name printed on it, or full printed graphics on the display glass. For a single shopfront it's a half-day job, and we work around trading hours where the shop can't close.",
      },
    ],
  },
  {
    slug: "dadar-east",
    name: "Dadar East",
    region: "Central Mumbai",
    blurb:
      "Hindmata-side commercial glass, Dadar TT residential and the Central line belt.",
    intro:
      "Dadar East is the commercial counterweight to Dadar West — Hindmata's trade premises, the offices around Dadar TT, and residential blocks fronting Dr Ambedkar Road. Traffic-facing glass here takes glare and dust, so sun control and safety film are the common specifications.",
    propertyMix:
      "Trade and commercial premises around Hindmata, offices near Dadar TT, and road-facing residential on Dr Ambedkar Road.",
    landmarks: [
      "Dadar TT Circle",
      "Hindmata",
      "Pritam Hotel",
      "Dr Ambedkar Road",
    ],
    postalCodes: ["400014"],
    topServices: [
      "sun-control-film",
      "safety-security-film",
      "frosted-glass-film",
      "commercial-glass-film",
    ],
    nearby: ["dadar-west", "matunga-central", "lower-parel-east", "prabhadevi"],
    faqs: [
      {
        q: "Does film help with glare from traffic on Dr Ambedkar Road?",
        a: "Yes — glare reduction of up to about 90% is achievable, and on a road-facing flat or office that's usually the most noticeable improvement day to day. It cuts both direct sun and headlight and windscreen reflection off the traffic below.",
      },
      {
        q: "Do you film trade premises around Hindmata?",
        a: "Yes. The usual combination is safety or security film on street-level display glass and frosted film on any internal office glass. We work outside trading hours where a shutdown isn't practical, which for this market usually means early morning.",
      },
    ],
  },
  {
    slug: "matunga-west",
    name: "Matunga West",
    region: "Central Mumbai",
    blurb:
      "Matunga Road-side residential and the college belt toward Shivaji Park.",
    intro:
      "Matunga West runs along the Western line around Matunga Road station, mostly older residential buildings and the college cluster, sitting between Dadar West and Mahim. Work here is domestic in scale — bathroom frosting, bedroom privacy film, and glare control on road-facing flats — plus institutional glass at the colleges.",
    propertyMix:
      "Older residential buildings with small-pane glazing, college and institutional buildings, and neighbourhood retail.",
    landmarks: [
      "Matunga Road Station",
      "Kirti College",
      "Gokhale Road",
      "Shivaji Park periphery",
    ],
    postalCodes: ["400016"],
    topServices: [
      "frosted-glass-film",
      "residential-window-film",
      "safety-security-film",
      "glass-and-mirror",
    ],
    nearby: ["matunga-central", "dadar-west", "prabhadevi", "dadar-east"],
    faqs: [
      {
        q: "What's the difference between Matunga West and Matunga Central?",
        a: "They're on different railway lines and function as separate neighbourhoods. Matunga West sits on the Western line around Matunga Road station toward Mahim and Shivaji Park. Matunga Central is on the Central line around King's Circle and Five Gardens. We cover both, but they're genuinely distinct areas rather than two sides of one station.",
      },
      {
        q: "Do you do institutional glass work for colleges here?",
        a: "Yes. Typical college work is safety film on corridor and stairwell glazing where breakage around students is a risk, frosted film on staff rooms and labs, and sun control on classroom windows that face west.",
      },
    ],
  },
  {
    slug: "matunga-central",
    name: "Matunga Central",
    region: "Central Mumbai",
    blurb:
      "King's Circle, Five Gardens and Ruia-side buildings on the Central line.",
    intro:
      "Matunga Central covers the King's Circle and Five Gardens area on the Central line, with its distinctive low-rise buildings and tree-lined streets. The glass here is mostly older and smaller-paned, and the tree cover means heat is less of an issue than in most areas — privacy and safety film are what people actually ask for.",
    propertyMix:
      "Low-rise older residential with small-pane glazing, the Ruia and Podar college cluster, and neighbourhood retail around King's Circle.",
    landmarks: ["Five Gardens", "King's Circle", "Ruia College", "Matunga Market"],
    postalCodes: ["400019"],
    topServices: [
      "frosted-glass-film",
      "safety-security-film",
      "residential-window-film",
      "glass-and-mirror",
    ],
    nearby: ["matunga-west", "dadar-east", "chembur-west", "dadar-west"],
    faqs: [
      {
        q: "Is sun control film worth it on a tree-shaded street in Matunga?",
        a: "Often not, and we'll say so. Where mature tree cover already shades the glass for most of the day, heat gain is low and sun control film is money spent on a problem you don't have. UV film still makes sense if you're protecting furnishings, and privacy film if you're overlooked — but we won't sell heat rejection where there's no heat.",
      },
      {
        q: "Can film go on old small-pane windows around Five Gardens?",
        a: "Yes. Each pane is filmed individually, so more panes means more cutting time, but the material cost tracks the glass area rather than the pane count. A typical flat here is still a single-visit job.",
      },
    ],
  },

  // ── Eastern Suburbs ─────────────────────────────────────────────────────
  {
    slug: "powai",
    name: "Powai",
    region: "Eastern Suburbs",
    blurb:
      "Hiranandani towers, lake-facing flats and the IT campuses around Powai's tech belt.",
    intro:
      "Powai splits between the Hiranandani residential towers, lake-facing flats with large picture windows, and the IT campuses that ring the area. The towers take sun control and UV film; the tech offices take partition frosting and branded glass. It's one of the few areas where we do roughly equal residential and commercial volume.",
    propertyMix:
      "High-rise residential at Hiranandani Gardens, lake-facing apartments, and IT and corporate campuses with large glazed elevations.",
    landmarks: ["Hiranandani Gardens", "IIT Bombay", "Powai Lake", "Galleria"],
    postalCodes: ["400076"],
    topServices: [
      "sun-control-film",
      "office-glass-branding",
      "residential-window-film",
      "commercial-glass-film",
    ],
    nearby: ["vikhroli-west", "ghatkopar-west", "andheri-east", "goregaon-east", "mulund-west"],
    faqs: [
      {
        q: "What film suits a lake-facing flat in Hiranandani?",
        a: "A neutral, high-clarity sun control film. Lake-facing glass gets strong reflected light off the water on top of direct sun, so glare is usually the complaint — but darkening the glass would cost you the view. Nano-ceramic film cuts glare and heat while staying optically neutral.",
      },
      {
        q: "Do you work with IT offices in Powai?",
        a: "Yes, it's a large part of our Powai work. Standard scope is frosted privacy banding on meeting-room and cabin glass, printed branding on reception and boardroom glass, and sun control on west-facing elevations. We can phase installation across floors so no team loses a working day.",
      },
    ],
  },
  {
    slug: "chembur-west",
    name: "Chembur West",
    region: "Eastern Suburbs",
    blurb:
      "Amar Mahal and Sion-Trombay Road residential, plus the Chembur Naka commercial belt.",
    intro:
      "Chembur West runs from Amar Mahal Junction down Sion-Trombay Road, mixing established residential colonies with roadside commercial units. Road-facing glass takes sun and traffic glare, so sun control film leads; the quieter interior colonies mostly want privacy and bathroom frosting.",
    propertyMix:
      "Established residential colonies, road-facing mid-rise blocks along Sion-Trombay Road, and neighbourhood commercial at Chembur Naka.",
    landmarks: [
      "Amar Mahal Junction",
      "Sion-Trombay Road",
      "Chembur Naka",
      "Chembur Gymkhana",
    ],
    postalCodes: ["400071"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "frosted-glass-film",
      "safety-security-film",
    ],
    nearby: ["chembur-east", "ghatkopar-west", "matunga-central", "vikhroli-west"],
    faqs: [
      {
        q: "Do you cover Chembur from your Andheri base?",
        a: "Yes. Chembur is a longer run than the western suburbs, so we typically schedule eastern-suburb visits together rather than same-day, but there's no travel surcharge — the rate per square foot is identical.",
      },
      {
        q: "What helps with traffic glare on Sion-Trombay Road?",
        a: "Sun control film cuts glare by up to about 90%, which covers both direct afternoon sun and the reflected glare off traffic. On a road-facing flat it's usually more noticeable than the temperature drop, particularly if anyone works from home facing that side.",
      },
    ],
  },
  {
    slug: "chembur-east",
    name: "Chembur East",
    region: "Eastern Suburbs",
    blurb:
      "Diamond Garden and Basant Park homes, plus institutional glass toward Deonar.",
    intro:
      "Chembur East around Diamond Garden and Basant Park is quieter and greener than the west side, with more independent housing and low-rise society blocks. Institutional and campus glazing toward Deonar and the BARC belt makes up the commercial work, where safety film on corridor glass is a standard requirement.",
    propertyMix:
      "Low-rise society blocks and independent housing around Diamond Garden, plus institutional and campus buildings toward Deonar.",
    landmarks: ["Diamond Garden", "Basant Park", "Deonar", "Swastik Park"],
    postalCodes: ["400071", "400074", "400088"],
    topServices: [
      "residential-window-film",
      "safety-security-film",
      "frosted-glass-film",
      "sun-control-film",
    ],
    nearby: ["chembur-west", "ghatkopar-east", "vikhroli-east", "vashi"],
    faqs: [
      {
        q: "Do you handle institutional campus glass in the Deonar belt?",
        a: "Yes. Campus work is usually safety film on corridor, stairwell and common-area glazing, frosted film on offices and labs, and sun control on west-facing teaching spaces. We can phase it across a term break so buildings stay in use.",
      },
      {
        q: "Can you film independent houses rather than flats?",
        a: "Yes, and Chembur East has more of them than most areas we cover. Houses often have a wider mix of glass types — ventilators, skylights, French windows, glass doors — so the site visit takes a bit longer, but the work itself is the same and usually completes in a day.",
      },
    ],
  },
  {
    slug: "ghatkopar-west",
    name: "Ghatkopar West",
    region: "Eastern Suburbs",
    blurb:
      "LBS Marg commercial glass, R City-side retail and Amrut Nagar residential.",
    intro:
      "Ghatkopar West's LBS Marg corridor is commercial and busy, with retail and office glass taking most of our attention here. The mall and showroom belt around R City brings printed decorative work, while Amrut Nagar and the residential streets behind ask for the usual privacy and heat combination.",
    propertyMix:
      "Commercial and retail frontage along LBS Marg, mall and showroom glazing, and mid-rise residential in Amrut Nagar.",
    landmarks: ["LBS Marg", "R City Mall", "Amrut Nagar", "Ghatkopar Metro Station"],
    postalCodes: ["400086"],
    topServices: [
      "decorative-glass-film",
      "sun-control-film",
      "office-glass-branding",
      "residential-window-film",
    ],
    nearby: ["ghatkopar-east", "vikhroli-west", "powai", "chembur-west"],
    faqs: [
      {
        q: "Can you do showroom graphics on LBS Marg?",
        a: "Yes — printed decorative film on showroom and shopfront glass is one of our regular jobs on this corridor. It's much cheaper than a fabricated fascia, and it can be stripped and reprinted when a campaign or brand identity changes.",
      },
      {
        q: "How long does retail glass film take to install?",
        a: "A single shopfront is a half-day. A larger showroom with multiple bays is usually a full day. Where a store can't close, we work early morning or after closing so the display glass is ready before trading starts.",
      },
    ],
  },
  {
    slug: "ghatkopar-east",
    name: "Ghatkopar East",
    region: "Eastern Suburbs",
    blurb:
      "Pant Nagar, Garodia Nagar and Rajawadi residential, plus the Vidyavihar campus belt.",
    intro:
      "Ghatkopar East is more residential than the west side — Pant Nagar, Garodia Nagar and Rajawadi are established colonies with a lot of family housing, where safety film and bathroom frosting are steady work. The Somaiya campus at Vidyavihar adds institutional glazing to the mix.",
    propertyMix:
      "Established residential colonies with mid-rise blocks, plus college and institutional buildings toward Vidyavihar.",
    landmarks: ["Pant Nagar", "Garodia Nagar", "Rajawadi", "Somaiya Campus"],
    postalCodes: ["400077"],
    topServices: [
      "residential-window-film",
      "safety-security-film",
      "frosted-glass-film",
      "sun-control-film",
    ],
    nearby: ["ghatkopar-west", "vikhroli-east", "chembur-east", "powai"],
    faqs: [
      {
        q: "Can a whole colony building in Pant Nagar be filmed together?",
        a: "Yes, and it's the efficient way to do it. Window sizes repeat across flats in these colony blocks, so film can be cut in batches and several flats completed per visit — which brings the per-flat cost down compared with filming one flat in isolation.",
      },
      {
        q: "Do you film college and hostel glass at Vidyavihar?",
        a: "Yes. Hostel and campus glazing usually calls for safety film, since breakage risk is higher in high-traffic student areas and the priority is keeping broken glass out of circulation rather than heat or privacy. Frosted film goes on staff and administrative glass.",
      },
    ],
  },
  {
    slug: "vikhroli-west",
    name: "Vikhroli West",
    region: "Eastern Suburbs",
    blurb:
      "Parksite and Surya Nagar residential plus LBS Marg commercial glass.",
    intro:
      "Vikhroli West covers Parksite, Surya Nagar and the LBS Marg frontage — a mix of older colony housing and newer redevelopment. Sun control on the highway and LBS-facing blocks is the main residential ask, and small commercial units along the road take frosted and branded film.",
    propertyMix:
      "Older colony housing at Parksite and Surya Nagar, redevelopment towers, and roadside commercial along LBS Marg.",
    landmarks: ["Vikhroli Parksite", "Surya Nagar", "LBS Marg", "Kailash Complex"],
    postalCodes: ["400079", "400083"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "frosted-glass-film",
      "safety-security-film",
    ],
    nearby: ["vikhroli-east", "powai", "ghatkopar-west", "mulund-west"],
    faqs: [
      {
        q: "Is it worth filming a flat that's being redeveloped soon?",
        a: "Probably not, and we'd rather tell you that upfront. Film pays back over years through cooling savings and comfort — if the building is due for redevelopment within a year or two, you won't recover it. Better to wait and film the new flat, where we can specify for the actual glass.",
      },
      {
        q: "Which windows should be filmed first if the budget is limited?",
        a: "West and south-facing glass, and whichever room you use most during the afternoon. Those windows account for the bulk of the heat gain. Filming two rooms properly beats filming a whole flat with the cheapest available film.",
      },
    ],
  },
  {
    slug: "vikhroli-east",
    name: "Vikhroli East",
    region: "Eastern Suburbs",
    blurb:
      "Godrej colony housing, Kannamwar Nagar and Eastern Express Highway-facing glass.",
    intro:
      "Vikhroli East is dominated by the Godrej estate and the Kannamwar Nagar and Tagore Nagar colonies — large planned housing with consistent window modules, which suits batch work well. Highway-facing blocks take sun and dust, so sun control film leads there.",
    propertyMix:
      "Large planned colony housing with repeating window modules, industrial and corporate premises on the Godrej estate, and highway-facing blocks.",
    landmarks: [
      "Godrej Colony",
      "Kannamwar Nagar",
      "Tagore Nagar",
      "Eastern Express Highway",
    ],
    postalCodes: ["400079"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "commercial-glass-film",
      "safety-security-film",
    ],
    nearby: ["vikhroli-west", "ghatkopar-east", "mulund-east", "powai"],
    faqs: [
      {
        q: "Do colony flats in Kannamwar Nagar qualify for group pricing?",
        a: "Yes. These colonies have standardised window sizes across blocks, which lets us cut film in repeating dimensions and complete several flats per visit. Organise a group of neighbours and the per-flat cost drops meaningfully compared with a single booking.",
      },
      {
        q: "Do you take on industrial and factory glazing?",
        a: "Yes. Industrial work is usually safety film on ground-level and workshop glazing, plus sun control on office blocks within the estate. We assess the glass type first — wired and patterned industrial glass behaves differently under film than standard float glass.",
      },
    ],
  },
  {
    slug: "mulund-west",
    name: "Mulund West",
    region: "Eastern Suburbs",
    blurb:
      "Check Naka and Nirmal Lifestyle-side residential, retail and showroom glass.",
    intro:
      "Mulund West is a well-established residential suburb with an active retail strip around Check Naka and the mall belt. Family housing dominates, so safety film and bathroom frosting are steady work, and the showroom and retail glass along LBS Marg brings printed decorative jobs.",
    propertyMix:
      "Established mid-rise residential, newer redevelopment towers, and retail and showroom frontage around Check Naka and LBS Marg.",
    landmarks: [
      "Mulund Check Naka",
      "Nirmal Lifestyle",
      "R Mall Mulund",
      "LBS Marg",
    ],
    postalCodes: ["400080"],
    topServices: [
      "residential-window-film",
      "sun-control-film",
      "decorative-glass-film",
      "glass-and-mirror",
    ],
    nearby: ["mulund-east", "thane-west", "vikhroli-west", "powai"],
    faqs: [
      {
        q: "Do you travel to Mulund from Andheri West?",
        a: "Yes, at the same rates. Mulund sits at the far end of our coverage, so we group appointments there rather than offering same-day visits — expect a couple of days of scheduling flexibility rather than an immediate slot.",
      },
      {
        q: "Can you fit wardrobe and bathroom mirrors in Mulund?",
        a: "Yes. Custom-cut mirrors are a regular part of our work — full-length wardrobe mirrors, bathroom vanity mirrors and wall mirrors, measured on site and fitted with proper edge sealing. Sealed edges matter in bathrooms; that's what prevents the black spotting mirrors develop over time.",
      },
    ],
  },
  {
    slug: "mulund-east",
    name: "Mulund East",
    region: "Eastern Suburbs",
    blurb:
      "Gavanpada and Mulund Colony housing plus Eastern Express Highway-facing towers.",
    intro:
      "Mulund East is quieter and greener than the west side, backing toward the hills, with colony housing around Gavanpada and Mulund Colony. The Eastern Express Highway frontage is the exception — exposed, unshaded and dusty, and where most of the sun control film in this area goes.",
    propertyMix:
      "Colony housing and mid-rise blocks, hill-facing low-rise, and highway-facing residential towers.",
    landmarks: [
      "Gavanpada",
      "Mulund Colony",
      "Eastern Express Highway",
      "Amar Nagar",
    ],
    postalCodes: ["400081"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "uv-protection-film",
      "safety-security-film",
    ],
    nearby: ["mulund-west", "thane-east", "vikhroli-east", "thane-west"],
    faqs: [
      {
        q: "Does a hill-facing flat in Mulund East need sun control film?",
        a: "Less than a highway-facing one. Hill-facing glass here gets softer, more diffused light and often some natural shading, so heat gain is lower. UV film is still worth it for protecting furnishings, but we wouldn't push high-grade heat rejection on a window that doesn't take direct sun.",
      },
      {
        q: "What's the practical difference between Mulund East and West for film?",
        a: "The exposure. Mulund West is denser, with more retail and neighbouring buildings providing mutual shading. Mulund East has the Eastern Express Highway frontage on one side and open hill-facing aspect on the other, so specifications vary far more building to building.",
      },
    ],
  },

  // ── Thane ───────────────────────────────────────────────────────────────
  {
    slug: "thane-west",
    name: "Thane West",
    region: "Thane",
    blurb:
      "Ghodbunder Road towers, Hiranandani Estate flats and the Viviana-side commercial belt.",
    intro:
      "Thane West is where the newest large-format housing in our coverage sits — Ghodbunder Road and Hiranandani Estate towers with floor-to-ceiling glazing and balcony glass on a scale the older suburbs don't have. Heat gain through that much glass is the dominant complaint, and the Wagle Estate commercial belt adds office and industrial work.",
    propertyMix:
      "New high-rise townships with floor-to-ceiling glazing along Ghodbunder Road, plus commercial and industrial premises at Wagle Estate.",
    landmarks: [
      "Ghodbunder Road",
      "Viviana Mall",
      "Hiranandani Estate Thane",
      "Upvan Lake",
    ],
    postalCodes: ["400601", "400607", "400610"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "office-glass-branding",
      "commercial-glass-film",
    ],
    nearby: ["thane-east", "mulund-west", "airoli", "ghansoli", "mulund-east"],
    faqs: [
      {
        q: "Is a Ghodbunder Road tower flat worth filming?",
        a: "These are among the best candidates we see. The new towers have very large glass-to-floor ratios, often with west or south-west exposure and nothing shading them, which makes for significant heat gain. Sun control film on that much glass produces a bigger comfort change than in an older flat with small windows.",
      },
      {
        q: "Do you cover Wagle Estate for commercial work?",
        a: "Yes. Wagle Estate work is a mix of office partition film and branding for the corporate units, and safety film on industrial and workshop glazing. We provide the same documentation pack — specs, warranty, measurements — as for any commercial project.",
      },
    ],
  },
  {
    slug: "thane-east",
    name: "Thane East",
    region: "Thane",
    blurb:
      "Kopri and Chendani residential plus Eastern Express Highway-facing glass.",
    intro:
      "Thane East around Kopri and Chendani is older and denser than the Ghodbunder side, with established colony housing rather than new towers. Buildings sit close together, so privacy film outsells heat rejection here — the reverse of Thane West. Highway-facing blocks are the exception.",
    propertyMix:
      "Established colony housing and older mid-rise blocks, with highway-facing residential along the Eastern Express Highway.",
    landmarks: [
      "Kopri",
      "Chendani Koliwada",
      "Eastern Express Highway",
      "Thane East Station",
    ],
    postalCodes: ["400603"],
    topServices: [
      "one-way-privacy-film",
      "frosted-glass-film",
      "residential-window-film",
      "sun-control-film",
    ],
    nearby: ["thane-west", "mulund-east", "airoli", "ghansoli"],
    faqs: [
      {
        q: "How is Thane East different from Thane West for window film?",
        a: "Almost the opposite brief. Thane West is new towers with huge glass areas where heat is the problem. Thane East is older, denser colony housing where buildings overlook each other at close range and privacy matters more. We rarely specify the same film for both.",
      },
      {
        q: "What gives privacy in a Kopri flat overlooked by the next building?",
        a: "Frosted film on the lower half of the glass. It works day and night, unlike one-way reflective film which reverses after dark — and at the distances between buildings in Kopri, that night-time reversal is a real issue rather than a technicality.",
      },
    ],
  },

  // ── Navi Mumbai ─────────────────────────────────────────────────────────
  {
    slug: "vashi",
    name: "Vashi",
    region: "Navi Mumbai",
    covers: ["Vashi East", "Vashi West"],
    blurb:
      "Sector housing, Palm Beach Road towers and APMC trade premises across Vashi.",
    intro:
      "Vashi's sector layout means predictable, repeating window modules across society buildings — good for batch pricing. Palm Beach Road towers are the exception, with large sea-facing glazing that takes serious heat. APMC's trade premises add commercial security and frosted work. We cover both sides of the station as one area.",
    propertyMix:
      "CIDCO sector housing with standard window modules, Palm Beach Road towers with large glazing, and APMC trade and wholesale premises.",
    landmarks: [
      "Vashi Station",
      "Palm Beach Road",
      "APMC Market",
      "Inorbit Mall Vashi",
    ],
    postalCodes: ["400703", "400705"],
    topServices: [
      "sun-control-film",
      "residential-window-film",
      "safety-security-film",
      "frosted-glass-film",
    ],
    nearby: ["ghansoli", "airoli", "chembur-east", "navi-mumbai"],
    faqs: [
      {
        q: "Do you treat Vashi East and West separately?",
        a: "No — Vashi is addressed by sector rather than by station side, so we cover the whole node as one area. Tell us your sector number when you enquire and that's enough for us to plan the visit.",
      },
      {
        q: "What suits a Palm Beach Road sea-facing flat?",
        a: "High heat rejection with high visible light transmission. These towers have large west-facing glass with an open aspect over the creek and nothing to shade them, so heat gain is substantial — but the view is the reason for the address, so darkening the glass is the wrong trade.",
      },
    ],
  },
  {
    slug: "airoli",
    name: "Airoli",
    region: "Navi Mumbai",
    covers: ["Airoli East", "Airoli West"],
    blurb:
      "IT park floor plates at Mindspace and sector housing across the Airoli node.",
    intro:
      "Airoli is our most office-weighted Navi Mumbai area. The Mindspace and Knowledge Park campuses have large glazed floor plates that take partition frosting and branded glass during fit-outs, and the sector housing around them is standard CIDCO stock. We cover the whole node rather than splitting by station side.",
    propertyMix:
      "IT campus floor plates with full-height glass partitions and curtain-wall elevations, plus CIDCO sector housing.",
    landmarks: [
      "Mindspace Airoli",
      "Airoli Knowledge Park",
      "Airoli Bridge",
      "Thane-Belapur Road",
    ],
    postalCodes: ["400708"],
    topServices: [
      "office-glass-branding",
      "frosted-glass-film",
      "commercial-glass-film",
      "sun-control-film",
    ],
    nearby: ["ghansoli", "vashi", "thane-west", "navi-mumbai"],
    faqs: [
      {
        q: "Can you do a full office fit-out in Mindspace Airoli?",
        a: "Yes. Standard scope is frosted privacy banding on cabin and meeting-room glass, printed branding on reception and boardroom panels, and sun control on west-facing curtain wall. We coordinate access and security clearance with park facilities management before the first day on site.",
      },
      {
        q: "How far ahead do you need artwork for printed office branding?",
        a: "Three to five working days before the installation date. That covers proofing, your approval and printing. Plain frosted film without printing needs no lead time — we can measure and fit in the same week.",
      },
    ],
  },
  {
    slug: "ghansoli",
    name: "Ghansoli",
    region: "Navi Mumbai",
    covers: ["Ghansoli East", "Ghansoli West"],
    blurb:
      "Corporate campuses and sector housing along the Thane-Belapur corridor.",
    intro:
      "Ghansoli sits mid-corridor between Airoli and Vashi, with large corporate campuses on the Thane-Belapur side and CIDCO sector housing inland. Campus work here runs to full-floor partition film and facade sun control; residential work is standard sector housing at group rates. Both station sides are covered as one area.",
    propertyMix:
      "Large corporate campuses with curtain-wall glazing, plus CIDCO sector housing with standard window modules.",
    landmarks: [
      "Ghansoli Station",
      "Thane-Belapur Road",
      "Reliance Corporate Park",
      "Talavali",
    ],
    postalCodes: ["400701"],
    topServices: [
      "commercial-glass-film",
      "office-glass-branding",
      "sun-control-film",
      "residential-window-film",
    ],
    nearby: ["airoli", "vashi", "thane-west", "navi-mumbai"],
    faqs: [
      {
        q: "Do you handle large corporate campus glass in Ghansoli?",
        a: "Yes — multi-floor and multi-building projects are within scope. Each gets a dedicated project lead who handles scheduling, building management coordination and phased installation, plus a documentation pack at handover covering glass schedule, film specs and warranties.",
      },
      {
        q: "Is it worth filming a Ghansoli sector flat?",
        a: "If it faces west or south, yes — the corridor here is open and unshaded, so afternoon heat gain is significant. Sector housing also prices well as a group booking, since the window modules repeat and film can be cut in batches across several flats.",
      },
    ],
  },
];

/** Areas grouped by region, in display order. Used by the /areas index. */
export const AREA_REGIONS: AreaRegion[] = [
  "Western Suburbs",
  "South Mumbai",
  "Central Mumbai",
  "Eastern Suburbs",
  "Thane",
  "Navi Mumbai",
];

export function areasByRegion(region: AreaRegion): Area[] {
  return areas.filter((a) => a.region === region && !a.isHub);
}

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

/**
 * Every locality name this site claims to serve, including the alternate
 * East/West names folded into combined pages. Feeds `areaServed` in the
 * LocalBusiness schema.
 */
export const servedLocalities: string[] = areas.flatMap((a) => [
  a.name,
  ...(a.covers ?? []),
]);

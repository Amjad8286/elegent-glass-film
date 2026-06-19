export type GalleryCategory =
  | "Frosted Glass Films"
  | "Privacy Films"
  | "One-Way Vision Films"
  | "Sun Control Films"
  | "Decorative Films"
  | "Safety & Security Films"
  | "Office Glass Solutions"
  | "Residential Glass Solutions"
  | "Car Window Tinting";

export interface GalleryProject {
  src: string;
  alt: string;
  title: string;
  area: string;
  category: GalleryCategory;
  description: string;
}

export const GALLERY_CATEGORIES: ["All Projects", ...GalleryCategory[]] = [
  "All Projects",
  "Frosted Glass Films",
  "Privacy Films",
  "One-Way Vision Films",
  "Sun Control Films",
  "Decorative Films",
  "Safety & Security Films",
  "Office Glass Solutions",
  "Residential Glass Solutions",
  "Car Window Tinting",
];

export const galleryProjects: GalleryProject[] = [
  // ── Frosted Glass Films ─────────────────────────────────────────────────
  {
    src: "/gallery/frosted/frosted-1.jpg",
    alt: "Frosted glass film applied to office partition in Andheri, Mumbai",
    title: "Frosted Office Partition Film",
    area: "Andheri West",
    category: "Frosted Glass Films",
    description:
      "Applied premium frosted film to glass cabin partitions in a commercial office in Andheri West. The film delivers complete seated privacy while retaining a light, open atmosphere — a clean, modern replacement for venetian blinds with no maintenance required and a five-year warranty against peeling or bubbling.",
  },
  {
    src: "/gallery/frosted/frosted-2.jpg",
    alt: "Frosted window film on bathroom window in Mumbai apartment, Bandra West",
    title: "Frosted Film for Bathroom Window",
    area: "Bandra West",
    category: "Frosted Glass Films",
    description:
      "Translucent frosted film installed on bathroom windows in a Bandra West apartment, replacing the need for curtains. Eliminates direct sightlines from adjacent buildings without blocking daylight. Scratch-resistant surface wipes clean easily; installed in under ninety minutes with zero structural changes.",
  },
  {
    src: "/gallery/frosted/frosted-3.jpg",
    alt: "Frosted glass film on residential sliding window for bedroom privacy in Juhu Mumbai",
    title: "Frosted Film for Bedroom Privacy",
    area: "Juhu",
    category: "Frosted Glass Films",
    description:
      "Frosted privacy film on large sliding windows in a seafront Juhu residence. Blocks street-level sightlines completely while maintaining a warm, diffused glow throughout the room. Film was precision-cut for each pane with no edge gaps for a fully fitted, bespoke look.",
  },
  {
    src: "/gallery/frosted/frosted-4.jpg",
    alt: "Gradient frosted band film on drawing room window in Powai high-rise Mumbai",
    title: "Gradient Frosted Band on Living Room Windows",
    area: "Powai",
    category: "Frosted Glass Films",
    description:
      "Gradient frosted band film applied to drawing-room windows in a Powai high-rise. The lower three feet are fully frosted for seated privacy; the upper pane stays clear for an unobstructed lake view. Professionally measured and cut for a seamless result on tilt-and-turn aluminium frames.",
  },

  // ── Office Glass Solutions ──────────────────────────────────────────────
  {
    src: "/gallery/frosted/frosted-5.jpg",
    alt: "Frosted film on HR cabin glass partition in corporate office, Goregaon East Mumbai",
    title: "Frosted Film on HR Cabin Partition",
    area: "Goregaon East",
    category: "Office Glass Solutions",
    description:
      "Frosted window film on the HR cabin glass wall of a Goregaon East corporate office. Ensures confidentiality during appraisals and interviews without creating a dark, enclosed feel. Applied outside business hours to avoid any disruption to the working day.",
  },
  {
    src: "/gallery/frosted/frosted-6.jpg",
    alt: "Frosted glass film on conference room glass doors, Lower Parel Mumbai office",
    title: "Frosted Film on Conference Room Glass Doors",
    area: "Lower Parel",
    category: "Office Glass Solutions",
    description:
      "Full-height frosted film on frameless glass conference room doors in a Lower Parel co-working space. The continuous frosted panel eliminates corridor distractions during presentations and gives the glass a sleek, branded appearance. Applied with a precision squeegee for a bubble-free, optically flat surface.",
  },
  {
    src: "/gallery/frosted/frosted-7.jpg",
    alt: "Frosted film with custom logo cutout on reception area glass wall, Malad West Mumbai",
    title: "Frosted Reception Glass Wall with Logo Cutout",
    area: "Malad West",
    category: "Office Glass Solutions",
    description:
      "Reception glass wall fitted with frosted film and a custom clear logo cut-out in a Malad West corporate office. The frosted base maintains an open lobby feel while screening the front desk from the main entrance. Brand logo precision-etched in clear vinyl over the frosted surface.",
  },
  {
    src: "/gallery/frosted/frosted-8.jpg",
    alt: "Anti-glare frosted film on office cabin windows facing south in Vile Parle East Mumbai",
    title: "Anti-Glare Frosted Film on Office Windows",
    area: "Vile Parle East",
    category: "Office Glass Solutions",
    description:
      "Anti-glare frosted film applied to four south-facing cabin windows in a Vile Parle East insurance office. Eliminates screen glare for staff while maintaining above 55% visible light transmission. Cleaner, lower-maintenance alternative to venetian blinds on glass partitions.",
  },
  {
    src: "/gallery/frosted/frosted-9.jpg",
    alt: "Cost-effective frosted glass film installation for small CPA office, Kandivali West Mumbai",
    title: "Frosted Film for Small Office — Kandivali",
    area: "Kandivali West",
    category: "Office Glass Solutions",
    description:
      "Affordable frosted film installed across two cabin glass walls and an entry door panel in a Kandivali West accountancy firm. A practical, budget-friendly solution to create visual privacy without replacing glass. Five-year warranty on adhesive and film integrity included.",
  },

  // ── Privacy Films ───────────────────────────────────────────────────────
  {
    src: "/gallery/privacy/privacy-1.jpg",
    alt: "Privacy window film on ground-floor living room windows, Santacruz West Mumbai",
    title: "Privacy Film for Ground-Floor Living Room",
    area: "Santacruz West",
    category: "Privacy Films",
    description:
      "Daytime one-way privacy film on full-length living room windows in a ground-floor Santacruz West flat. Maintains clear outward visibility from inside while blocking street-level sightlines into the home. Combines privacy with an unobstructed garden view — no curtains needed during daylight.",
  },
  {
    src: "/gallery/privacy/privacy-2.jpg",
    alt: "Privacy film on dermatology clinic consultation room glass partition, Andheri East Mumbai",
    title: "Privacy Film for Clinic Consultation Room",
    area: "Andheri East",
    category: "Privacy Films",
    description:
      "Privacy film on glass partitions of a dermatology clinic consultation room in Andheri East. Patients inside see the waiting area clearly, but sightlines from the waiting area are blocked completely. A patient-comfort solution aligned with privacy regulations for healthcare interiors.",
  },
  {
    src: "/gallery/privacy/privacy-3.jpg",
    alt: "Privacy window film on floor-to-ceiling windows of luxury high-rise, Worli Mumbai",
    title: "Privacy Film on Luxury High-Rise Windows",
    area: "Worli",
    category: "Privacy Films",
    description:
      "Full-height privacy film on floor-to-ceiling windows in a Worli luxury high-rise. Despite being on the 14th floor, the apartment faced a hotel tower at close range. The film eliminates cross-building sightlines without affecting sea views from the corner windows — 120 sq ft completed in a single day.",
  },
  {
    src: "/gallery/privacy/privacy-4.jpg",
    alt: "Privacy film on shopfront glass of apparel store, Andheri West Mumbai",
    title: "Privacy Film for Retail Shopfront",
    area: "Andheri West",
    category: "Privacy Films",
    description:
      "Privacy film on the shopfront glass of a branded apparel store in Andheri West. Applied from waist height to ceiling to conceal the fitting-room area from passersby. Cleanly removable without adhesive residue — important for leased commercial premises.",
  },
  {
    src: "/gallery/privacy/privacy-5.jpg",
    alt: "Privacy window film on bedroom windows facing pedestrian bridge in Powai high-rise Mumbai",
    title: "Privacy Film for Bedroom Facing Walkway",
    area: "Powai",
    category: "Privacy Films",
    description:
      "Privacy film on jalousie-style bedroom windows in a Powai high-rise directly facing a busy pedestrian bridge. Eliminates the need for heavy curtains while maintaining natural ventilation through open louvers. Applied to six window panes in under two hours.",
  },

  // ── One-Way Vision Films ────────────────────────────────────────────────
  {
    src: "/gallery/one-way/one-way-1.jpg",
    alt: "One-way mirror film on glass-walled manager cabin in BKC tech office Mumbai",
    title: "One-Way Mirror Film for Manager's Cabin",
    area: "Bandra Kurla Complex",
    category: "One-Way Vision Films",
    description:
      "One-way vision film on a glass-walled senior manager's cabin in a BKC technology firm. The reflective outer surface mirrors the open office floor during daylight, giving complete visual privacy inside while maintaining a clear outward view for the occupant. Eliminates distracting eye-contact across the floor.",
  },
  {
    src: "/gallery/one-way/one-way-2.jpg",
    alt: "One-way vision film on full-width storefront glass of designer boutique, Bandra West Mumbai",
    title: "One-Way Vision Film for Designer Boutique",
    area: "Bandra West",
    category: "One-Way Vision Films",
    description:
      "One-way vision film applied to the full-width storefront glass of a designer boutique in Bandra West. Staff and customers see clearly outside; passersby see only a polished mirror reflection. Also reduces solar heat gain by up to 40%, significantly lowering the air-conditioning load.",
  },
  {
    src: "/gallery/one-way/one-way-3.jpg",
    alt: "One-way privacy film on drawing room windows of ground-floor apartment, Versova Andheri West Mumbai",
    title: "One-Way Privacy Film for Ground-Floor Flat",
    area: "Versova, Andheri West",
    category: "One-Way Vision Films",
    description:
      "One-way vision film on drawing-room windows of a ground-floor Versova apartment. Natural light floods in and outward visibility is maintained throughout the day while blocking incoming sightlines from the lane. Paired with internal roller blinds for complete night-time privacy.",
  },
  {
    src: "/gallery/one-way/one-way-4.jpg",
    alt: "One-way mirror film on frameless glass office entrance doors, Thane West",
    title: "One-Way Mirror Film on Glass Office Doors",
    area: "Thane West",
    category: "One-Way Vision Films",
    description:
      "One-way mirror film on frameless glass office doors in a Thane West corporate park. The mirrored exterior gives the entrance a premium, contemporary appearance. Installed on 12mm glass panels with edge-to-edge coverage and invisible seams at each joint.",
  },
  {
    src: "/gallery/one-way/one-way-5.jpg",
    alt: "One-way vision film on private office suite glass walls in co-working space, Kurla Mumbai",
    title: "One-Way Vision Film for Private Office Suites",
    area: "Kurla",
    category: "One-Way Vision Films",
    description:
      "One-way vision film on glass walls of private office suites in a Kurla co-working facility. Members see out to the common area clearly while sightlines from outside the suite are blocked — essential for confidential video calls and client meetings. 180 sq ft installed in a single session.",
  },

  // ── Sun Control Films ───────────────────────────────────────────────────
  {
    src: "/gallery/sun-control/sun-1.jpg",
    alt: "Solar control window film on west-facing floor-to-ceiling office windows, Andheri West Mumbai",
    title: "Solar Control Film · West-Facing Office",
    area: "Andheri West",
    category: "Sun Control Films",
    description:
      "High-performance solar control film on west-facing floor-to-ceiling windows of an Andheri West software office. Reduces visible glare by 65% and heat gain by 55%, cutting the afternoon AC load significantly. Neutral exterior appearance preserves the building's architectural profile.",
  },
  {
    src: "/gallery/sun-control/sun-2.jpg",
    alt: "Heat-reducing solar window film on corner flat with large windows, Bandra West Mumbai",
    title: "Heat-Reducing Solar Film for Corner Flat",
    area: "Bandra West",
    category: "Sun Control Films",
    description:
      "Solar film applied to the large corner windows of a Bandra West apartment receiving harsh afternoon sun. Reduces interior temperature by 4–6°C and protects wooden furniture from sun bleaching. Near-invisible from outside; does not alter the apartment's external appearance.",
  },
  {
    src: "/gallery/sun-control/sun-3.jpg",
    alt: "Sun control film on display windows of textile showroom, Ghatkopar East Mumbai",
    title: "Sun Control Film for Textile Showroom",
    area: "Ghatkopar East",
    category: "Sun Control Films",
    description:
      "Sun control film on large display windows of a textile showroom in Ghatkopar East. Prevents fabric colours from fading under direct sunlight while keeping merchandise clearly visible from the street. Anti-glare surface also improves the readability of window displays in bright conditions.",
  },
  {
    src: "/gallery/sun-control/sun-4.jpg",
    alt: "Solar window film on south-facing open-plan office floor in Lower Parel Mumbai",
    title: "Solar Film on South-Facing Open-Plan Office",
    area: "Lower Parel",
    category: "Sun Control Films",
    description:
      "Solar window film across the full south-facing glazing of a Lower Parel editorial office. Reduces screen glare for 40-plus workstations without perceptibly darkening the space. Total coverage: 600 sq ft; installed over a single weekend to avoid business disruption.",
  },
  {
    src: "/gallery/sun-control/sun-5.jpg",
    alt: "Lightly tinted solar film on architect design studio windows, Juhu Mumbai",
    title: "Lightly Tinted Solar Film for Design Studio",
    area: "Juhu",
    category: "Sun Control Films",
    description:
      "Lightly tinted solar film on the studio windows of an architecture practice in Juhu. The client needed glare control on drawing boards without significantly altering daylight quality. A 35% VLT neutral film was selected — visually subtle but effective at cutting direct sun and blocking UV.",
  },
  {
    src: "/gallery/sun-control/sun-6.jpg",
    alt: "Sun control window film on ground-floor commercial complex facade, Andheri Mumbai",
    title: "Sun Control Film · Commercial Complex",
    area: "Andheri",
    category: "Sun Control Films",
    description:
      "Sun control film installed across the ground-floor glass façade of a mixed-use commercial complex in Andheri. Reduces interior heat in retail units on the sun-facing side and extends the life of display merchandise. A neutral reflective film was selected to maintain a consistent exterior look.",
  },
  {
    src: "/gallery/sun-control/sun-7.jpg",
    alt: "Anti-glare sun control film on east-facing windows of IT office, Andheri East Mumbai",
    title: "Anti-Glare Sun Film for IT Office",
    area: "Andheri East",
    category: "Sun Control Films",
    description:
      "Anti-glare solar film on east-facing windows of an IT services office in Andheri East. Staff reported heavy screen glare during morning hours; the film reduced glare complaints to near zero without introducing a perceptible tint. Installed without disrupting the 24×7 operations team.",
  },
  {
    src: "/gallery/sun-control/sun-8.jpg",
    alt: "High-rejection solar film on rooftop penthouse wrap-around windows, Powai Mumbai",
    title: "Solar Film for Rooftop Penthouse",
    area: "Powai",
    category: "Sun Control Films",
    description:
      "High-rejection solar film on the wrap-around windows of a Powai penthouse on the 22nd floor. Full sun exposure on three sides made the space unbearably hot by midday. Post-installation, the client reported a substantial temperature reduction and near-elimination of afternoon AC usage.",
  },
  {
    src: "/gallery/sun-control/sun-9.jpg",
    alt: "Heat rejection window film on hospital outpatient waiting area glass, Santacruz West Mumbai",
    title: "Heat Rejection Film for Hospital Waiting Area",
    area: "Santacruz West",
    category: "Sun Control Films",
    description:
      "Heat rejection window film on the glass walls of a hospital outpatient waiting area in Santacruz West. Keeps the space cooler for patients without additional AC units. Also blocks 99% of UV radiation, protecting patients' skin during extended waiting periods.",
  },
  {
    src: "/gallery/sun-control/sun-10.jpg",
    alt: "Heat rejection film on picture windows in duplex apartment, Borivali West Mumbai",
    title: "Heat Rejection Film for Residential Duplex",
    area: "Borivali West",
    category: "Sun Control Films",
    description:
      "Heat rejection film applied to large picture windows on both floors of a Borivali West residential duplex. West-facing windows were a major source of evening heat. The film cuts solar heat gain by over 50% while keeping rooms bright and the outdoor view unobstructed.",
  },
  {
    src: "/gallery/sun-control/sun-11.jpg",
    alt: "Heat rejection film on classroom windows of primary school, Malad West Mumbai",
    title: "Heat Rejection Film for School Classrooms",
    area: "Malad West",
    category: "Sun Control Films",
    description:
      "Heat rejection film across the classroom windows of a primary school in Malad West. Reduces afternoon temperatures during the hot season, improving student concentration. Child-safe specification ensures the film also adds a shatter-retention layer to older single-pane glass.",
  },
  {
    src: "/gallery/sun-control/sun-12.jpg",
    alt: "UV-blocking museum-grade window film on art gallery windows, Colaba Mumbai",
    title: "UV Protection Film for Art Gallery",
    area: "Colaba",
    category: "Sun Control Films",
    description:
      "Museum-grade UV-blocking film applied to gallery windows of a Colaba art space. Blocks 99.9% of UV radiation to prevent fading of paintings and mixed-media works on display. Optically clear film preserves natural colour rendering without any perceptible shift in gallery lighting.",
  },
  {
    src: "/gallery/sun-control/sun-13.jpg",
    alt: "UV protection film on archival exhibition room windows, Fort South Mumbai",
    title: "UV-Blocking Film for Museum Exhibition Room",
    area: "Fort, South Mumbai",
    category: "Sun Control Films",
    description:
      "UV protection film on skylight-adjacent windows in an archival exhibition room in Fort, South Mumbai. Protects historic documents and photographs from UV degradation while allowing curators to use natural light for viewing. Specification rated to museum-grade light-stabilisation standards.",
  },
  {
    src: "/gallery/sun-control/sun-14.jpg",
    alt: "UV-blocking solar film on living room windows to protect furniture, Goregaon West Mumbai",
    title: "UV Protection Film for Living Room",
    area: "Goregaon West",
    category: "Sun Control Films",
    description:
      "UV-blocking solar film on the living room glass of a Goregaon West apartment. Installed to prevent fading of imported upholstery and hardwood flooring exposed to direct afternoon sun. Near-clear film with 99% UV rejection — invisible to the eye but highly effective long-term.",
  },
  {
    src: "/gallery/sun-control/sun-15.jpg",
    alt: "Deep tint solar film on corporate headquarters glass facade, BKC Mumbai",
    title: "Glass Tinting Film · Corporate Headquarters",
    area: "Bandra Kurla Complex",
    category: "Sun Control Films",
    description:
      "Deep tint solar film on the full glass façade of a corporate headquarters building in BKC. The bronze-toned film reduces solar heat gain by 60% and gives the building a uniform, professional exterior appearance. Applied to over 2,000 sq ft of curtain wall glazing across three floors.",
  },
  {
    src: "/gallery/sun-control/sun-16.jpg",
    alt: "Neutral-grey solar tinting film on panoramic lobby windows of boutique hotel, Juhu Mumbai",
    title: "Glass Tinting Film for Hotel Lobby",
    area: "Juhu",
    category: "Sun Control Films",
    description:
      "Neutral-grey solar tinting film on the panoramic lobby windows of a boutique Juhu hotel. Reduces glare on the white marble interior during the busy morning check-in period. Film was selected for its colour neutrality, ensuring no shift in the warm-toned ambient lighting.",
  },
  {
    src: "/gallery/sun-control/sun-17.jpg",
    alt: "Solar tinting film on glazed shopfront of electronics retail showroom, Mulund West Mumbai",
    title: "Window Tinting Film for Electronics Showroom",
    area: "Mulund West",
    category: "Sun Control Films",
    description:
      "Solar tinting film on the glazed shopfront of an electronics retail showroom in Mulund West. Reduces display-screen glare caused by sunlight, improving visibility of demo units for customers. Also reduces the air-conditioning burden during peak afternoon selling hours.",
  },
  {
    src: "/gallery/sun-control/sun-18.jpg",
    alt: "Solar tinting film on glass walls of tech park office campus, Thane",
    title: "Glass Tinting Film · Tech Park Campus",
    area: "Thane",
    category: "Sun Control Films",
    description:
      "Solar tinting film applied to glass walls of a large tech park campus in Thane. The spectrally selective tint balances daylighting with heat rejection across multiple floors. Installed by a certified team over three days with advance approval from building management.",
  },

  // ── Reflective Films (Sun Control sub-type) ─────────────────────────────
  {
    src: "/gallery/reflective/ref-1.jpg",
    alt: "Silver reflective mirror film on commercial office tower exterior glass, BKC Mumbai",
    title: "Reflective Mirror Film · Commercial Building",
    area: "Bandra Kurla Complex",
    category: "Sun Control Films",
    description:
      "Silver reflective film applied to the outer glass of a commercial office tower in BKC. The mirror-finish exterior dramatically reduces solar heat intake for interior offices while giving the façade a sleek high-rise appearance. Total heat rejection: 65%; measurable reduction in year-round HVAC costs.",
  },
  {
    src: "/gallery/reflective/ref-2.jpg",
    alt: "High-performance reflective film on south and west faces of office tower, Lower Parel Mumbai",
    title: "Reflective Solar Film for Office Tower",
    area: "Lower Parel",
    category: "Sun Control Films",
    description:
      "High-performance reflective film on the south and west faces of an office tower in Lower Parel. The film mirrors sky and surroundings for a striking architectural effect while blocking over 60% of solar energy. Building engineer reported measurable improvements in floor-level temperatures within two weeks.",
  },
  {
    src: "/gallery/reflective/ref-3.jpg",
    alt: "Mirror-finish reflective window film on corporate office glass frontage, Andheri Mumbai",
    title: "Mirror-Finish Reflective Film · Office",
    area: "Andheri",
    category: "Sun Control Films",
    description:
      "Mirror-finish reflective window film on the full glass frontage of a corporate office in Andheri. During daylight hours, the exterior shows a clean mirror reflection while occupants maintain full outward visibility. Ideal for offices that want both privacy and strong solar heat control in a single film.",
  },

  // ── Decorative Films ────────────────────────────────────────────────────
  {
    src: "/gallery/decorative/deco-1.jpg",
    alt: "Custom-cut geometric frosted decorative film on glass partition, Vile Parle West Mumbai",
    title: "Custom Pattern Decorative Frosted Film",
    area: "Vile Parle West",
    category: "Decorative Films",
    description:
      "Custom-cut decorative frosted film with a geometric pattern applied to a glass partition in a Vile Parle West interior design studio. Transforms functional glass into a branded feature wall. Design laser-cut from a client-supplied artwork file and applied without gaps or misalignment.",
  },
  {
    src: "/gallery/decorative/deco-2.jpg",
    alt: "Stained-glass effect multi-colour decorative window film on cafe entrance glass, Bandra West Mumbai",
    title: "Stained Glass Effect Decorative Film",
    area: "Bandra West",
    category: "Decorative Films",
    description:
      "Stained-glass-effect decorative film on the entrance glass panel of a Bandra West café. The vibrant multi-colour pattern creates an eye-catching frontage and acts as a privacy screen for the counter area. Applied to a single 3×6 ft panel cleanly in under an hour.",
  },
  {
    src: "/gallery/decorative/deco-3.jpg",
    alt: "Etched-look decorative film on glass lobby panels in corporate office, Lower Parel Mumbai",
    title: "Etched-Pattern Decorative Film for Office Lobby",
    area: "Lower Parel",
    category: "Decorative Films",
    description:
      "Etched-look decorative film applied to glass lobby panels of a Lower Parel corporate office. The repeating geometric motif adds a textured, architectural quality to standard clear glass. Cost-effective alternative to sandblasted or chemically etched glass — removable and replaceable for future rebranding.",
  },
  {
    src: "/gallery/decorative/deco-4.jpg",
    alt: "Decorative frosted film on curved glass balustrades of spiral staircase in villa, Juhu Mumbai",
    title: "Decorative Film on Glass Staircase Railing",
    area: "Juhu",
    category: "Decorative Films",
    description:
      "Decorative frosted film applied to the glass balustrades of a spiral staircase in a Juhu villa. The repeating pattern adds privacy from the ground floor and gives the staircase a designer edge. Precision-cut to match the curved glass panels on each tread.",
  },
  {
    src: "/gallery/decorative/deco-5.jpg",
    alt: "Bold geometric decorative film on glass office partitions in creative agency, Goregaon Mumbai",
    title: "Geometric Decorative Film for Office Partition",
    area: "Goregaon",
    category: "Decorative Films",
    description:
      "Bold geometric decorative film applied to glass partitions in a Goregaon creative agency. The pattern doubles as a subtle company branding element and also reduces the number of collisions with glass — a surprisingly common safety issue in open-plan offices with transparent partitions.",
  },

  // ── Safety & Security Films ─────────────────────────────────────────────
  {
    src: "/gallery/safety/safety-1.jpg",
    alt: "Anti-shatter safety window film on full-glass entrance door of residential home, Borivali East Mumbai",
    title: "Safety Film on Residential Glass Door",
    area: "Borivali East",
    category: "Safety & Security Films",
    description:
      "Anti-shatter safety film applied to the full-glass entrance door of a Borivali East residence. If the glass breaks — accidentally or by forced entry — the film holds all fragments together, preventing injuries and reducing intrusion risk. 200-micron film on the interior surface for maximum retention.",
  },
  {
    src: "/gallery/safety/safety-2.jpg",
    alt: "Child-safety window film on primary school classroom windows, Malad West Mumbai",
    title: "Safety Film for School Classroom Windows",
    area: "Malad West",
    category: "Safety & Security Films",
    description:
      "Child-safety window film installed on all classroom windows of a primary school in Malad West. Holds glass shards in place if a window is hit by a ball or accidentally broken, protecting students from laceration injuries. Complies with IS 2553 safety glazing recommendations.",
  },
  {
    src: "/gallery/safety/safety-3.jpg",
    alt: "Anti-shatter safety film on glass shopfront of pharmacy, Andheri East Mumbai",
    title: "Anti-Shatter Safety Film for Retail Shop",
    area: "Andheri East",
    category: "Safety & Security Films",
    description:
      "Anti-shatter safety film on the glass frontage of a pharmacy in Andheri East. The heavy-duty film significantly delays forced-entry attempts, buying time for the alarm system to respond. Also protects the owner from injury liability if the glass breaks due to street-level accidents.",
  },
  {
    src: "/gallery/safety/safety-4.jpg",
    alt: "Safety film on frameless glass shower enclosure interior in Bandra apartment Mumbai",
    title: "Safety Film on Frameless Glass Shower",
    area: "Bandra",
    category: "Safety & Security Films",
    description:
      "Safety film applied to the interior of a frameless glass shower enclosure in a Bandra apartment. If the toughened glass ever fails, the film holds all fragments in place, preventing falls and injuries in the wet area. Crystal-clear film preserves the bathroom's open, minimalist look.",
  },
  {
    src: "/gallery/safety/safety-5.jpg",
    alt: "Safety window film on glass balcony balustrades in high-rise, Worli Mumbai",
    title: "Safety Film on Glass Balcony Railing",
    area: "Worli",
    category: "Safety & Security Films",
    description:
      "Safety window film on the glass balcony balustrades on the 18th floor of a Worli high-rise. Retains glass fragments if a panel cracks due to thermal stress — a real risk with older glazing installations. Applied to four panels of 10mm toughened glass in a single visit.",
  },
  {
    src: "/gallery/safety/safety-6.jpg",
    alt: "Heavy-duty security window film on bank branch glass counter and entrance, Santacruz East Mumbai",
    title: "Security Film for Bank Branch",
    area: "Santacruz East",
    category: "Safety & Security Films",
    description:
      "Heavy-duty security film on the glass counter panels and entrance of a bank branch in Santacruz East. The 400-micron film is rated to delay forced entry significantly, buying critical time for alarm response. Applied to both interior and exterior faces of each glass panel for maximum performance.",
  },
  {
    src: "/gallery/safety/safety-7.jpg",
    alt: "Smash-and-grab resistant security film on jewellery store display windows, Ghatkopar Mumbai",
    title: "Security Film for Jewellery Store",
    area: "Ghatkopar",
    category: "Safety & Security Films",
    description:
      "Smash-and-grab resistant security film on the display windows of a jewellery store in Ghatkopar. The film dramatically increases the time needed to breach the glass during a forced entry attempt, allowing security systems and emergency responders to react. Combined with a perimeter alarm upgrade.",
  },
  {
    src: "/gallery/safety/safety-8.jpg",
    alt: "Anti-burglary security film on ATM glass kiosk enclosure in Thane Mumbai",
    title: "Security Film for ATM Glass Enclosure",
    area: "Thane",
    category: "Safety & Security Films",
    description:
      "Anti-burglary security film on the glass panels of a standalone ATM kiosk in Thane. Reduces the risk of smash-and-grab attacks and protects users inside from glass injury if the kiosk is struck. Specification reviewed and approved by the bank's security engineering team.",
  },
  {
    src: "/gallery/safety/safety-9.jpg",
    alt: "Security glass film on pharmaceutical distribution centre frontage, Kandivali West Mumbai",
    title: "Security Film for Pharmaceutical Store",
    area: "Kandivali West",
    category: "Safety & Security Films",
    description:
      "Security window film on the glass façade of a pharmaceutical distribution centre in Kandivali West. Retail-security specification film delays forced entry by several minutes and holds all glass debris on the film surface. Installed across the full street-facing elevation in a single day.",
  },

  // ── Residential Glass Solutions ─────────────────────────────────────────
  {
    src: "/gallery/residential/res-1.jpg",
    alt: "Full-apartment window film installation in 3BHK flat, Powai Mumbai",
    title: "Full-Apartment Window Film · 3BHK",
    area: "Powai",
    category: "Residential Glass Solutions",
    description:
      "Full-apartment window film installation in a Powai 3BHK: sun control film in the living room, privacy film in bedrooms, frosted film in bathrooms. All three film types installed in a single visit — turnkey service from consultation and measurement to final squeegee-off.",
  },
  {
    src: "/gallery/residential/res-2.jpg",
    alt: "Solar and privacy window film on sliding balcony glass doors in Borivali West high-rise Mumbai",
    title: "Film for Sliding Balcony Glass Doors",
    area: "Borivali West",
    category: "Residential Glass Solutions",
    description:
      "Solar and privacy film applied to wide sliding balcony glass doors in a Borivali West high-rise. Solar control film on the outer face, decorative frosted band on the lower section for a clean, layered look. Tackles balcony heat and neighbours' sightlines in a single installation.",
  },
  {
    src: "/gallery/residential/res-3.jpg",
    alt: "Solar film with low internal reflectance on drawing room windows of Juhu bungalow Mumbai",
    title: "Glass Film for Drawing Room Windows",
    area: "Juhu",
    category: "Residential Glass Solutions",
    description:
      "Solar film with low internal reflectance applied to drawing-room windows of a Juhu bungalow. Preserves interior colour accuracy and the sea view while cutting afternoon heat gain by half. Film selected after an on-site consultation and solar-angle assessment of the property.",
  },
  {
    src: "/gallery/residential/res-4.jpg",
    alt: "Window film supply and installation for 2BHK home in Andheri West Mumbai",
    title: "Window Film Service · 2BHK, Andheri West",
    area: "Andheri West",
    category: "Residential Glass Solutions",
    description:
      "Complete window film supply and installation for a 2BHK home in Andheri West. Solar control film for the main windows and decorative film for the pooja room glass panel. Total project time: 3 hours. All film supplied from Elegant Glass Films' in-house Mumbai stock.",
  },
  {
    src: "/gallery/residential/res-5.jpg",
    alt: "Window film installation across all eight windows of independent house, Versova Andheri West Mumbai",
    title: "Window Film for Independent House",
    area: "Versova, Andheri West",
    category: "Residential Glass Solutions",
    description:
      "Window film installed across all eight windows of an independent house in Versova, Andheri West. A mix of solar tint on the main windows and frosted film on ground-floor panes for privacy. Clean, bubble-free result with all edges trimmed flush to the frame.",
  },
  {
    src: "/gallery/residential/res-6.jpg",
    alt: "Premium solar and privacy window film installation in large villa, Andheri West Mumbai",
    title: "Premium Window Film Package for Villa",
    area: "Andheri West",
    category: "Residential Glass Solutions",
    description:
      "Premium film installation for a large villa in Andheri West: sun control film on 14 windows, frosted film on 6 bathroom panes, and one-way vision film on all street-facing ground-floor glass. Completed over two days by a two-person specialist team.",
  },

  // ── Car Window Tinting ──────────────────────────────────────────────────
  {
    src: "/gallery/car/car-1.jpg",
    alt: "Professional ceramic car window tinting film on sedan in Andheri Mumbai",
    title: "Car Window Tinting Film · Sedan",
    area: "Andheri",
    category: "Car Window Tinting",
    description:
      "Professional car window tinting applied to a sedan in Andheri using high-quality ceramic tint film. Reduces interior heat, blocks UV radiation, and gives the car a sleek, polished appearance. Installed in a dust-free indoor environment for a flawless, bubble-free finish.",
  },
  {
    src: "/gallery/car/car-2.jpg",
    alt: "Ceramic car window tint film installation on SUV in Goregaon Mumbai",
    title: "Ceramic Tint Film · SUV",
    area: "Goregaon",
    category: "Car Window Tinting",
    description:
      "Ceramic car window tint film on a mid-size SUV in Goregaon. Superior heat rejection compared to conventional dyed films; does not interfere with GPS, mobile signals, or toll tags. Visible light transmission: 35% for all side and rear windows.",
  },
  {
    src: "/gallery/car/car-3.jpg",
    alt: "Premium ceramic car window film on luxury sedan in Bandra Mumbai",
    title: "Premium Car Tint Film · Luxury Sedan",
    area: "Bandra",
    category: "Car Window Tinting",
    description:
      "Premium ceramic car window film applied to a luxury sedan in Bandra. Maintains colour accuracy of the vehicle's interior trim while reducing solar heat gain by up to 50%. Film warranty covers delamination, colour change, and bubbling for five years.",
  },
  {
    src: "/gallery/car/car-4.jpg",
    alt: "Dark charcoal car side window tinting film installation in Juhu Mumbai",
    title: "Car Side Window Tinting Film",
    area: "Juhu",
    category: "Car Window Tinting",
    description:
      "Side window tinting film on a hatchback in Juhu. Dark charcoal tint provides privacy for rear passengers without affecting the driver's rear sightlines beyond legal limits. Installed using a heat-shrink technique for a precise, wrinkle-free fit on curved rear quarters.",
  },
  {
    src: "/gallery/car/car-5.jpg",
    alt: "Car windshield sun control and glare reduction film installed in Andheri West Mumbai",
    title: "Car Windshield Sun Control Film",
    area: "Andheri West",
    category: "Car Window Tinting",
    description:
      "Windshield sun control film applied to a car in Andheri West. A visor-band film reduces solar glare without obstructing the driver's field of view. Optically clear solar film below the visor line provides full sun protection for the driver and front passenger.",
  },

  // ── Installation ────────────────────────────────────────────────────────
  {
    src: "/gallery/installation/install-1.jpg",
    alt: "Professional window film installation process on residential windows, Andheri West Mumbai",
    title: "Professional Window Film Installation",
    area: "Andheri West",
    category: "Residential Glass Solutions",
    description:
      "Elegant Glass Films installation team at work on a residential project in Andheri West. Every job follows a three-step process: pre-cleaning with a lint-free cloth, wet application for accurate positioning, and precision squeegee-off to eliminate all air and water pockets — resulting in an optically flat, bubble-free finish.",
  },
  {
    src: "/gallery/installation/install-2.jpg",
    alt: "Glass film installation team applying solar film on commercial office glazing, BKC Mumbai",
    title: "Office Glass Film Installation · BKC",
    area: "Bandra Kurla Complex",
    category: "Office Glass Solutions",
    description:
      "Commercial film installation at a BKC corporate headquarters. Our certified team installed solar control and frosted films across 1,800 sq ft of office glazing over a single weekend — no business disruption, no adhesive residue on frames, everything signed off before Monday morning.",
  },
  {
    src: "/gallery/installation/install-3.jpg",
    alt: "Window film fitting process on high-rise residential tower, Lower Parel Mumbai",
    title: "Window Film Fitting · Mumbai High-Rise",
    area: "Lower Parel",
    category: "Residential Glass Solutions",
    description:
      "High-rise window film installation in a Lower Parel residential tower, 24th floor. Working with full safety harness compliance, our team applied solar control film to all exterior-facing windows of a 4BHK apartment. Scheduling coordinated tightly with building management for lift and terrace access.",
  },
];

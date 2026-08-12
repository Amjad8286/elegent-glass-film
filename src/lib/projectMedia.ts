/**
 * Gallery entries generated from the shot library in `elegent-glass-film/`.
 *
 * Every field below was written after viewing the actual frame (videos were
 * sampled at multiple timestamps), never from the filename alone. WhatsApp
 * filenames carry no project context, so they were used only to group shots
 * captured seconds apart at the same site.
 *
 * `sourceFile` maps each entry back to its original file. `src`/`poster` are the
 * proposed public paths — run `scripts/import-project-media.sh` to copy and
 * rename the originals into `public/gallery/media/` before shipping.
 *
 * Files that could not be classified from their visual content are NOT invented
 * into projects; they are listed in `unclassifiedMedia` at the bottom with the
 * reason.
 */

export type ProjectMediaCategory =
  | "Frosted Glass Films"
  | "Decorative Films"
  | "Sun Control Films"
  | "Office Glass Solutions"
  | "Branded Graphics & Signage"
  | "Installation Process"
  | "Film Samples";

export interface ProjectMediaItem {
  /** Public path once the original has been imported into /public. */
  src: string;
  /** Poster frame for video entries. */
  poster?: string;
  mediaType: "image" | "video";
  alt: string;
  title: string;
  /** Space type shown in the frame. */
  area: string;
  category: ProjectMediaCategory;
  description: string;
  /** Original filename in `elegent-glass-film/`. */
  sourceFile: string;
  /** Set where something in the entry is inferred and needs a human check. */
  review?: string;
}

export const PROJECT_MEDIA_CATEGORIES: [
  "All Projects",
  ...ProjectMediaCategory[],
] = [
  "All Projects",
  "Frosted Glass Films",
  "Decorative Films",
  "Sun Control Films",
  "Office Glass Solutions",
  "Branded Graphics & Signage",
  "Installation Process",
  "Film Samples",
];

export const projectMedia: ProjectMediaItem[] = [
  // ── Ground-floor consultancy office, glass frontage ──────────────────────
  {
    src: "/gallery/media/office-entrance-door-01.jpeg",
    mediaType: "image",
    alt: "Frameless glass entrance door of a ground-floor office, with a frosted-glass internal door and reception desk visible inside",
    title: "Frameless Glass Office Entrance",
    area: "Office Entrance Door",
    category: "Office Glass Solutions",
    description:
      "Ground-floor office unit fronted by a frameless toughened glass door on patch fittings. The internal door behind it carries a full-panel frosted finish, screening the rear cabin while the front glazing stays clear for walk-in visibility.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.36 (1).jpeg",
  },
  {
    src: "/gallery/media/office-shopfront-night-01.jpeg",
    mediaType: "image",
    alt: "Glass shopfront of a risk advisory office lit at night, showing the full-height glazed frontage and signage board",
    title: "Glazed Office Shopfront at Night",
    area: "Shopfront Glazing",
    category: "Office Glass Solutions",
    description:
      "The same consultancy unit photographed after dark, showing how the full-height glazed frontage reads from the street once the interior lights are on — the reference shot for deciding how much privacy film the front elevation needs.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.36.jpeg",
  },

  // ── Residential high-rise, living room sliding windows ───────────────────
  {
    src: "/gallery/media/sun-living-sliding-01.jpeg",
    mediaType: "image",
    alt: "Three-track aluminium sliding windows in a Mumbai flat during window film application, with squeegee, blade and spray bottle on the sill",
    title: "Sun Control Film on Living Room Sliding Windows",
    area: "Living Room Sliding Windows",
    category: "Sun Control Films",
    description:
      "Wide three-track sliding windows in a mid-rise flat, mid-application. Application solution, squeegee, trim blade and pressure sprayer are laid out on the granite sill; the outer panes are being worked one leaf at a time against a hard afternoon sun.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.37.jpeg",
  },
  {
    src: "/gallery/media/sun-living-sliding-02.mp4",
    poster: "/gallery/media/sun-living-sliding-02.jpg",
    mediaType: "video",
    alt: "Video panning across sliding windows of a high-rise flat during solar film installation, tools resting on the window sill",
    title: "Living Room Window Film — Work in Progress",
    area: "Living Room Sliding Windows",
    category: "Sun Control Films",
    description:
      "Short pan across the same living room glazing, showing the full run of glass being treated and the planted balcony grille beyond. Useful for showing scale of a single-room job.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.31.58.mp4",
  },

  // ── Kitchen window, residential ──────────────────────────────────────────
  {
    src: "/gallery/media/kitchen-window-before-01.jpeg",
    mediaType: "image",
    alt: "Untreated black-framed kitchen window overlooking a neighbouring building and lane before window film is applied",
    title: "Kitchen Window Before Film",
    area: "Kitchen Window",
    category: "Installation Process",
    description:
      "Reference shot taken before work started: a black-framed kitchen window with direct sightlines into the neighbouring building's balcony and the service lane below.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.49.jpeg",
  },
  {
    src: "/gallery/media/kitchen-window-application-01.jpeg",
    mediaType: "image",
    alt: "Kitchen window glass wet with application solution during film installation, film offcuts and a pressure sprayer on the floor",
    title: "Wet Application on Kitchen Window",
    area: "Kitchen Window",
    category: "Installation Process",
    description:
      "The same window during wet application — glass flooded with slip solution so the film can be positioned before squeegee-off. Film offcuts, sprayer and trim tools are visible on the protected floor.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.50.jpeg",
  },

  // ── Reeded / fluted glass partitions ─────────────────────────────────────
  {
    src: "/gallery/media/reeded-partition-bay-01.jpeg",
    mediaType: "image",
    alt: "Row of black-framed reeded glass partition panels marked with protective white tape crosses on a fit-out site",
    title: "Reeded Glass Partition Bay",
    area: "Office Partition Screen",
    category: "Decorative Films",
    description:
      "A run of slim black-framed panels finished in a vertical reeded texture, taped with protective crosses while the surrounding fit-out continues. The ribbed surface breaks up sightlines into the workspace without darkening it.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.59.jpeg",
    review:
      "Reeded effect is unmistakable, but whether it is applied film or factory reeded glass cannot be confirmed from this frame.",
  },
  {
    src: "/gallery/media/reeded-office-partition-01.jpeg",
    mediaType: "image",
    alt: "Full-height reeded translucent film on an office partition screening a workstation area, wall fan and desks beyond",
    title: "Full-Height Reeded Partition Screen",
    area: "Office Partition Screen",
    category: "Decorative Films",
    description:
      "A floor-to-ceiling partition finished in fine vertical reeding, dividing a workstation bay from the walkway. Silhouettes stay soft and light passes through, so the inner desks keep their borrowed daylight.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.57.jpeg",
  },
  {
    src: "/gallery/media/reeded-sliding-doors-01.mp4",
    poster: "/gallery/media/reeded-sliding-doors-01.jpg",
    mediaType: "video",
    alt: "Close video pan across reeded translucent film on tall sliding glass doors with dark frames",
    title: "Reeded Film on Sliding Glass Doors",
    area: "Sliding Glass Doors",
    category: "Decorative Films",
    description:
      "Close pan along dark-framed sliding doors finished in reeded film, showing how the ribs catch daylight and dissolve everything behind them into vertical bands.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.35.mp4",
  },
  {
    src: "/gallery/media/reeded-door-detail-01.mp4",
    poster: "/gallery/media/reeded-door-detail-01.jpg",
    mediaType: "video",
    alt: "Detail video of vertical reeded film texture filling a single glass door leaf",
    title: "Reeded Film Texture Detail",
    area: "Glass Door Leaf",
    category: "Decorative Films",
    description:
      "Tight detail of a single door leaf, filmed close enough to read the individual ribs and the even, bubble-free lay of the material across the full height.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.04 (1).mp4",
  },
  {
    src: "/gallery/media/reeded-cabinet-glass-01.mp4",
    poster: "/gallery/media/reeded-cabinet-glass-01.jpg",
    mediaType: "video",
    alt: "Reeded film applied to the glazed doors of a white kitchen crockery unit above a marble counter",
    title: "Reeded Film on Crockery Unit Glass",
    area: "Kitchen Cabinet Glass",
    category: "Decorative Films",
    description:
      "Reeded film taken off the partition and onto joinery — the glazed doors of a white crockery unit. Contents read as soft shapes only, which keeps a busy shelf looking tidy from the room.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.06 (1).mp4",
  },
  {
    src: "/gallery/media/reeded-partition-detail-01.mp4",
    poster: "/gallery/media/reeded-partition-detail-01.jpg",
    mediaType: "video",
    alt: "Video detail of sunlight raking across reeded film on a framed glass partition, casting striped shadows",
    title: "Sunlight Across a Reeded Partition",
    area: "Office Partition Screen",
    category: "Decorative Films",
    description:
      "Raking afternoon light across a reeded partition, throwing striped shadows onto the panel behind. Shot to show the texture's behaviour in direct sun rather than flat interior light.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.07 (1).mp4",
  },
  {
    src: "/gallery/media/reeded-partition-panels-01.mp4",
    poster: "/gallery/media/reeded-partition-panels-01.jpg",
    mediaType: "video",
    alt: "Video walking past a run of reeded film panels in a slim-framed partition on an unfinished fit-out floor",
    title: "Reeded Panel Run on a Fit-Out Floor",
    area: "Corridor Glass Partition",
    category: "Decorative Films",
    description:
      "Walk-past of a completed reeded partition run while the surrounding floor is still under construction — scaffold and debris in shot, glass already finished and protected.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.08 (1).mp4",
  },
  {
    src: "/gallery/media/reeded-partition-install-01.mp4",
    poster: "/gallery/media/reeded-partition-install-01.jpg",
    mediaType: "video",
    alt: "Reeded film partition panels mid-installation with discarded release liner covering the floor and a ladder in place",
    title: "Reeded Partition Install in Progress",
    area: "Office Partition Screen",
    category: "Installation Process",
    description:
      "Mid-job footage of a reeded partition run: peeled release liner littering the floor, ladder still against the frame, panels going up one bay at a time.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.36 (1).mp4",
  },

  // ── Commercial floor, frosted partition corridor ─────────────────────────
  {
    src: "/gallery/media/frosted-corridor-partition-01.jpeg",
    mediaType: "image",
    alt: "Long run of frosted film on full-height glass partitions along a commercial office corridor, protective sheeting on the floor",
    title: "Frosted Partition Wall — Office Corridor",
    area: "Corridor Glass Partition",
    category: "Frosted Glass Films",
    description:
      "A continuous frosted run along a commercial corridor, filmed from the walkway side. Floor is sheeted and the crew is still working at the far end — the panels closest to camera are already squeegeed flat and clear of edge gaps.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.45 (1).jpeg",
  },
  {
    src: "/gallery/media/frosted-corridor-partition-02.jpeg",
    mediaType: "image",
    alt: "Frosted glass partition beside an office corridor with a worker walking past and packing material on the floor",
    title: "Frosted Partition Run — Corridor View",
    area: "Corridor Glass Partition",
    category: "Frosted Glass Films",
    description:
      "Second angle on the same corridor, showing the transition between filmed and unfilmed bays and how completely the frosted panels close off the desks behind them.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.45 (2).jpeg",
  },
  {
    src: "/gallery/media/frosted-office-corridor-01.mp4",
    poster: "/gallery/media/frosted-office-corridor-01.jpg",
    mediaType: "video",
    alt: "Video of a frosted glass partition and door in an office corridor during fit-out, protective sheeting on the floor",
    title: "Frosted Corridor Partition and Door",
    area: "Corridor Glass Partition",
    category: "Frosted Glass Films",
    description:
      "Walkthrough past a frosted partition and its matching glass door, still on floor-spring fittings with the site sheeting down.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.43 (1).mp4",
  },
  {
    src: "/gallery/media/frosted-commercial-corridor-01.mp4",
    poster: "/gallery/media/frosted-commercial-corridor-01.jpg",
    mediaType: "video",
    alt: "Video walking a commercial fit-out corridor lined with frosted glass partitions over blue floor protection",
    title: "Frosted Partitions — Commercial Fit-Out",
    area: "Commercial Floor Partitions",
    category: "Office Glass Solutions",
    description:
      "Long walk down a commercial floor under fit-out, frosted partitions running the length of the corridor over blue floor protection, with counters and LED trims already installed beyond the glass.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.06.mp4",
  },
  {
    src: "/gallery/media/glass-partition-showroom-01.mp4",
    poster: "/gallery/media/glass-partition-showroom-01.jpg",
    mediaType: "video",
    alt: "Video of a clear glass partition wall in a retail fit-out reflecting neon trims and display counters",
    title: "Glass Partition Wall — Retail Fit-Out",
    area: "Showroom Glass Partition",
    category: "Office Glass Solutions",
    description:
      "Clear glazed partition separating a display floor from the service corridor, filmed before treatment. Neon trims and counter lighting reflect across the full panel — the condition that drove the frosting on the adjacent bays.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.07 (2).mp4",
  },
  {
    src: "/gallery/media/frosted-commercial-fitout-01.mp4",
    poster: "/gallery/media/frosted-commercial-fitout-01.jpg",
    mediaType: "video",
    alt: "Video of frosted glass partitions in a large commercial fit-out with bamboo scaffolding and floor protection in place",
    title: "Frosted Partitions Around Live Scaffolding",
    area: "Commercial Floor Partitions",
    category: "Office Glass Solutions",
    description:
      "Frosted partition bays completed while scaffolding and ceiling work continue around them — the film goes on without holding up the rest of the trades on the floor.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.08.mp4",
  },

  // ── Diamond-lattice etched pattern ───────────────────────────────────────
  {
    src: "/gallery/media/lattice-meeting-partition-01.jpeg",
    mediaType: "image",
    alt: "Frosted film with a diamond lattice pattern on a meeting room glass partition, chairs and whiteboard visible",
    title: "Diamond-Lattice Film on Meeting Room Glass",
    area: "Meeting Room Partition",
    category: "Decorative Films",
    description:
      "Frosted film cut with a criss-cross diamond lattice across a meeting room's glass wall. The clear lines through the pattern keep the room from feeling boxed in while blocking a direct read of the table.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.46.jpeg",
  },
  {
    src: "/gallery/media/lattice-partition-install-01.jpeg",
    mediaType: "image",
    alt: "Diamond lattice frosted film being fitted to a glass partition and door, cutting table and tape roll in the foreground",
    title: "Lattice Film Fitting — Cabin Partition",
    area: "Cabin Partition & Door",
    category: "Decorative Films",
    description:
      "The lattice pattern going up across a cabin partition and its door leaf. Blue backing still shows on the last panel; the cutting table and tape sit in the foreground.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.33.00 (2).jpeg",
  },
  {
    src: "/gallery/media/lattice-office-door-01.mp4",
    poster: "/gallery/media/lattice-office-door-01.jpg",
    mediaType: "video",
    alt: "Video of a frosted glass office door with diamond lattice pattern and a PULL sign above the steel handle",
    title: "Lattice Frosted Door with Pull Signage",
    area: "Office Door",
    category: "Decorative Films",
    description:
      "Frosted door leaf carrying the diamond lattice, finished with a steel ladder handle and a PULL plate. Filmed close so the crisp cut edges of the pattern are visible.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.09.mp4",
  },
  {
    src: "/gallery/media/lattice-storeroom-door-01.mp4",
    poster: "/gallery/media/lattice-storeroom-door-01.jpg",
    mediaType: "video",
    alt: "Frosted glass store room door with diamond lattice film, STORE ROOM nameplate and PUSH sign",
    title: "Store Room Door in Lattice Frosted Film",
    area: "Store Room Door",
    category: "Decorative Films",
    description:
      "Store room entrance treated in the same lattice film as the rest of the suite, with a STORE ROOM nameplate applied above the handle so the door reads as back-of-house.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.10.mp4",
  },
  {
    src: "/gallery/media/lattice-office-door-02.mp4",
    poster: "/gallery/media/lattice-office-door-02.jpg",
    mediaType: "video",
    alt: "Frameless frosted glass door with diamond lattice film on floor-spring fittings in a newly finished office",
    title: "Frameless Lattice Door — New Office Suite",
    area: "Office Door",
    category: "Decorative Films",
    description:
      "Frameless lattice-filmed door on floor-spring fittings, shot in a suite that is still being handed over. The pattern repeats seamlessly from the fixed panel onto the moving leaf.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.11 (1).mp4",
  },
  {
    src: "/gallery/media/lattice-door-detail-01.mp4",
    poster: "/gallery/media/lattice-door-detail-01.jpg",
    mediaType: "video",
    alt: "Close video of diamond lattice frosted film beside a steel door handle and PUSH sign",
    title: "Lattice Pattern Detail at the Handle",
    area: "Office Door",
    category: "Decorative Films",
    description:
      "Detail at handle height, where the lattice meets the PUSH plate — the join to watch on a patterned door, and the reason each leaf is measured and cut individually.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.11.mp4",
  },

  // ── Office fit-out: half-height frosting + wall graphics ─────────────────
  {
    src: "/gallery/media/frosted-cabin-inprogress-01.jpeg",
    mediaType: "image",
    alt: "Half-height frosted film on a glass cabin partition while a worker on a ladder applies a blue printed wall graphic behind",
    title: "Half-Height Frosted Film on Cabin Partition",
    area: "Cabin Partition",
    category: "Installation Process",
    description:
      "Frosted band applied to the lower half of a cabin partition — seated privacy without losing the top light. Behind it, the same crew is putting up the client's printed wall graphic.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.47 (2).jpeg",
  },
  {
    src: "/gallery/media/wall-graphic-install-01.jpeg",
    mediaType: "image",
    alt: "Two installers smoothing a large printed corporate culture wall graphic onto an office wall from a ladder",
    title: "Printed Culture Wall Graphic Install",
    area: "Office Wall",
    category: "Branded Graphics & Signage",
    description:
      "Two-person application of a large-format printed wall graphic carrying the client's culture statements. Same wet-application and squeegee discipline as glass film, on a plastered wall.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.49 (3).jpeg",
  },

  // ── Frosted doors and cabin partitions, general office ───────────────────
  {
    src: "/gallery/media/frosted-frameless-door-01.jpeg",
    mediaType: "image",
    alt: "Full-height frameless glass door finished in frosted film, mounted on floor-spring patch fittings in an office lobby",
    title: "Full-Height Frosted Glass Door",
    area: "Frameless Glass Door",
    category: "Frosted Glass Films",
    description:
      "A single frameless leaf frosted edge to edge and hung on floor-spring patch fittings. Solid privacy from a door that still reads as glass rather than a blank shutter.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.48 (1).jpeg",
  },
  {
    src: "/gallery/media/frosted-cabin-door-01.jpeg",
    mediaType: "image",
    alt: "Frosted glass cabin partition and door with clear horizontal vision strips, office desks visible on either side",
    title: "Frosted Cabin Partition with Vision Strips",
    area: "Cabin Partition & Door",
    category: "Office Glass Solutions",
    description:
      "Frosted cabin enclosure broken by two clear horizontal strips at eye and desk height — enough to see movement in the corridor without exposing the desk. Door leaf carries the same setting-out so the lines run through.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.50 (2).jpeg",
  },
  {
    src: "/gallery/media/gradient-frosted-partition-01.jpeg",
    mediaType: "image",
    alt: "Gradient frosted film fading from opaque to clear on a tall office partition next to a frameless glass door",
    title: "Gradient Frosted Film on Cabin Partition",
    area: "Cabin Partition",
    category: "Decorative Films",
    description:
      "Gradient film running dense at eye level and fading toward the floor and head. Screens the working level of the cabin while the fade keeps the partition light and stops it reading as a solid wall.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.51 (3).jpeg",
  },
  {
    src: "/gallery/media/frosted-cabin-partition-01.jpeg",
    mediaType: "image",
    alt: "Frosted film on an office cabin's glass partition and matching double glass doors with a slim vertical handle",
    title: "Frosted Cabin Enclosure with Glass Doors",
    area: "Office Cabin Partition",
    category: "Frosted Glass Films",
    description:
      "Full frosted treatment across a corner cabin — return partition and both door leaves — giving a closed meeting space inside an otherwise open floor plate.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.51.jpeg",
  },
  {
    src: "/gallery/media/frosted-cabin-partition-02.mp4",
    poster: "/gallery/media/frosted-cabin-partition-02.jpg",
    mediaType: "video",
    alt: "Video of a frosted glass partition and door in a newly built office cabin, floor still under finishing",
    title: "Frosted Cabin Partition — Handover Walkthrough",
    area: "Cabin Partition & Door",
    category: "Frosted Glass Films",
    description:
      "Walkthrough of a completed frosted cabin before the floor finishes go down, showing the full return and the door aligned to the partition's frost line.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.04.mp4",
  },
  {
    src: "/gallery/media/frosted-partition-construction-01.mp4",
    poster: "/gallery/media/frosted-partition-construction-01.jpg",
    mediaType: "video",
    alt: "Video of a frosted glass partition and door with steel ladder handles on an unfinished concrete floor",
    title: "Frosted Partition on an Unfinished Floor",
    area: "Office Partition & Door",
    category: "Frosted Glass Films",
    description:
      "Frosted partition and twin-handle door completed on a bare screed floor. Filming the glass at this stage confirms coverage and edge trim before finishes hide the frames.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.05.mp4",
  },
  {
    src: "/gallery/media/frosted-partition-highrise-01.mp4",
    poster: "/gallery/media/frosted-partition-highrise-01.jpg",
    mediaType: "video",
    alt: "Video of frosted glass partitions in a high-rise office under construction, city skyline visible through the far window",
    title: "Frosted Partitions — High-Rise Office Shell",
    area: "Office Partition & Door",
    category: "Frosted Glass Films",
    description:
      "Frosted partitions and door installed in a high-rise shell, with the skyline visible through the untreated perimeter glazing beyond. Shows a full cabin cluster completed in one visit.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.10 (1).mp4",
  },

  // ── Internal grid partition, residential/office unit ─────────────────────
  {
    src: "/gallery/media/grid-partition-before-01.jpeg",
    mediaType: "image",
    alt: "White-framed internal glass grid partition with untreated clear panes in an empty unit",
    title: "Grid Partition Before Filming",
    area: "Internal Glass Partition",
    category: "Installation Process",
    description:
      "White-framed grid partition with clear panes, photographed before any film went on — the storage area and its clutter are fully visible through the glass.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.50.jpeg",
    review:
      "Read as the 'before' state of the frosted grid partition shots from the same site; confirm before publishing as a pair.",
  },
  {
    src: "/gallery/media/frosted-grid-partition-01.jpeg",
    mediaType: "image",
    alt: "Frosted film on the panes of a white-framed internal glass partition, dark doorway visible through an untreated pane",
    title: "Frosted Film on Internal Grid Partition",
    area: "Internal Glass Partition",
    category: "Frosted Glass Films",
    description:
      "Frosted film cut pane by pane into a white-framed grid partition. Each square is trimmed to the bead so the grid pattern still reads crisply from both sides.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.49.jpeg",
  },
  {
    src: "/gallery/media/frosted-grid-partition-02.jpeg",
    mediaType: "image",
    alt: "Frosted panes in a white grid partition seen from a work area, trestle table and installer visible beyond",
    title: "Grid Partition Frosted from the Work Side",
    area: "Internal Glass Partition",
    category: "Frosted Glass Films",
    description:
      "The frosted grid seen from the opposite side, with the crew's trestle table beyond. Only shape and movement carry through the treated panes.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.53.jpeg",
  },
  {
    src: "/gallery/media/frosted-grid-partition-progress-01.jpeg",
    mediaType: "image",
    alt: "Glass grid partition part-way through filming, with frosted panes on the left bay and clear panes on the right",
    title: "Grid Partition Part-Filmed",
    area: "Internal Glass Partition",
    category: "Installation Process",
    description:
      "Direct side-by-side within one partition: the left bay finished in frosted film, the right bay still clear. The clearest single frame in the set for showing what the film actually changes.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.33.01 (2).jpeg",
  },
  {
    src: "/gallery/media/frosted-grid-partition-03.mp4",
    poster: "/gallery/media/frosted-grid-partition-03.jpg",
    mediaType: "video",
    alt: "Video panning across a white-framed grid partition with frosted panes in an empty unit",
    title: "Grid Partition Walk-Past",
    area: "Internal Glass Partition",
    category: "Frosted Glass Films",
    description:
      "Pan along the finished grid partition showing the full run of frosted panes and the clear glazed door at the end of it.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.44.mp4",
  },
  {
    src: "/gallery/media/night-fitout-walkthrough-01.mp4",
    poster: "/gallery/media/night-fitout-walkthrough-01.jpg",
    mediaType: "video",
    alt: "Night video walkthrough of a fit-out showing high-rise glazing with city lights and an internal white grid partition",
    title: "Night Walkthrough — Glazing and Grid Partition",
    area: "Perimeter Glazing & Partition",
    category: "Installation Process",
    description:
      "Long night walkthrough of the same unit, moving from the perimeter glazing with the city lit up outside to the internal grid partition and the crew's cutting table.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.42.mp4",
    review:
      "Very low light for most of its length; usable mainly as behind-the-scenes footage, not as a finish showcase.",
  },

  // ── Branded glass: clinics and offices ───────────────────────────────────
  {
    src: "/gallery/media/branded-dental-door-01.jpeg",
    mediaType: "image",
    alt: "Frosted glass clinic door printed with a dental practice logo, service list, QR code, opening hours and phone number",
    title: "Printed Frosted Branding on Clinic Door",
    area: "Clinic Entrance Door",
    category: "Branded Graphics & Signage",
    description:
      "Frosted base film overprinted with the practice's full door identity — logo, services line, scannable QR, opening hours and contact number. The frost gives waiting-room privacy; the print does the signage job on the same panel.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.39.jpeg",
  },
  {
    src: "/gallery/media/branded-cabin-band-01.jpeg",
    mediaType: "image",
    alt: "Before and after comparison of an office cabin partition, after showing a frosted band printed with a company logo and client marks",
    title: "Branded Frosted Band on Cabin Partition",
    area: "Cabin Partition",
    category: "Branded Graphics & Signage",
    description:
      "Client-supplied before/after of a cabin partition: clear glass on the left, and on the right a frosted band carrying the company logo, service line and client marks at seated eye level.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.45.jpeg",
    review: "Composite before/after image rather than a single photograph.",
  },
  {
    src: "/gallery/media/branded-coutloot-door-01.jpeg",
    mediaType: "image",
    alt: "Frosted glass office door with a colour company logo decal applied at eye level beside a black bar handle",
    title: "Logo Decal on Frosted Office Door",
    area: "Office Entrance Door",
    category: "Branded Graphics & Signage",
    description:
      "Frosted door leaf with the tenant's colour logo applied as a clear-backed decal at eye level — a light-touch identity that leaves the rest of the panel doing its privacy job.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.52 (1).jpeg",
  },
  {
    src: "/gallery/media/branded-coutloot-door-02.jpeg",
    mediaType: "image",
    alt: "Wide view of a frosted glass office entrance door with company logo decal, lift lobby visible to the left",
    title: "Frosted Office Entrance from the Lift Lobby",
    area: "Office Entrance Door",
    category: "Branded Graphics & Signage",
    description:
      "The same entrance from the lift lobby, showing how the frosted leaf and its logo read as the tenant's front door on a shared floor.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.59 (2).jpeg",
  },
  {
    src: "/gallery/media/branded-dente-doors-01.jpeg",
    mediaType: "image",
    alt: "Frameless glass double doors of a dental clinic with a frosted upper band, clear vision strip and black vinyl logo",
    title: "Dental Clinic Doors — Frosted Band and Logo",
    area: "Clinic Entrance Doors",
    category: "Branded Graphics & Signage",
    description:
      "Frameless double doors with a textured frosted band across the top, a clear vision strip at seated height, and the clinic's tooth mark and wordmark cut in black vinyl across both leaves.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.52 (2).jpeg",
  },
  {
    src: "/gallery/media/branded-dente-reception-01.jpeg",
    mediaType: "image",
    alt: "Dental clinic reception seen through a glass partition with a frosted lower panel carrying a metallic-look clinic logo",
    title: "Clinic Reception Partition with Etched Logo",
    area: "Clinic Reception Partition",
    category: "Branded Graphics & Signage",
    description:
      "Reception partition frosted from counter height down and carrying the clinic logo in a brushed metallic finish, so patients at the desk are screened from the waiting chairs.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.53 (1).jpeg",
  },
  {
    src: "/gallery/media/reeded-dente-partition-01.jpeg",
    mediaType: "image",
    alt: "Black-framed clinic partition with reeded translucent panes screening the treatment area from the waiting room",
    title: "Reeded Partition — Clinic Waiting Room",
    area: "Clinic Partition",
    category: "Decorative Films",
    description:
      "Black-framed clinic partition with reeded panes at seated level and clear glass above, separating the waiting chairs from the treatment bay without shutting out the reception light.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.59 (1).jpeg",
  },
  {
    src: "/gallery/media/reeded-dente-partition-02.mp4",
    poster: "/gallery/media/reeded-dente-partition-02.jpg",
    mediaType: "video",
    alt: "Video panning across a black-framed clinic partition with reeded panes and a clear upper row",
    title: "Clinic Partition Walkthrough",
    area: "Clinic Partition",
    category: "Decorative Films",
    description:
      "Pan across the finished clinic partition, showing how the reeded band tracks the seated sightline and where the clear panes were deliberately left.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.31.48.mp4",
  },
  {
    src: "/gallery/media/cafeteria-graphics-lattice-doors-01.mp4",
    poster: "/gallery/media/cafeteria-graphics-lattice-doors-01.jpg",
    mediaType: "video",
    alt: "Video of an office cafeteria with a printed coffee-themed wall graphic and lattice-patterned frosted glass doors",
    title: "Cafeteria Wall Graphic and Lattice Doors",
    area: "Office Cafeteria",
    category: "Branded Graphics & Signage",
    description:
      "Office cafeteria finished with a printed coffee-themed wall wrap and the same lattice-frosted glass doors used across the suite — wall graphics and glass film delivered as one package.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.12.mp4",
  },

  // ── Decorative films, residential ────────────────────────────────────────
  {
    src: "/gallery/media/damask-decorative-film-01.jpeg",
    mediaType: "image",
    alt: "Close view of decorative window film with an etched baroque leaf and scroll pattern catching daylight",
    title: "Baroque Etched-Pattern Decorative Film",
    area: "Window Panel",
    category: "Decorative Films",
    description:
      "Detail of a heavily patterned decorative film — etched baroque scrollwork that refracts daylight into faint colour along the leaf edges. Full-obscure privacy with an ornamental face.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.49 (2).jpeg",
  },
  {
    src: "/gallery/media/bedroom-window-before-01.jpeg",
    mediaType: "image",
    alt: "Untreated sliding window with safety grille in a purple-walled room, looking onto neighbouring foliage and a walkway",
    title: "Bedroom Window Before Film",
    area: "Bedroom Window",
    category: "Installation Process",
    description:
      "Before state of a purple-walled bedroom: clear sliding panes with an open sightline to the shared walkway and the neighbouring plot.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.57 (1).jpeg",
  },
  {
    src: "/gallery/media/bedroom-window-before-02.mp4",
    poster: "/gallery/media/bedroom-window-before-02.jpg",
    mediaType: "video",
    alt: "Video of an untreated sliding bedroom window with grille in a purple-walled room before film application",
    title: "Bedroom Window Survey Clip",
    area: "Bedroom Window",
    category: "Installation Process",
    description:
      "Survey clip of the same untreated window, taken to record pane sizes and the sightline problem before quoting the job.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.37 (1).mp4",
  },
  {
    src: "/gallery/media/crystal-pattern-bedroom-01.mp4",
    poster: "/gallery/media/crystal-pattern-bedroom-01.jpg",
    mediaType: "video",
    alt: "Video of corner bedroom windows covered in textured crystal-pattern privacy film, glowing with diffused daylight",
    title: "Crystal-Pattern Privacy Film on Bedroom Windows",
    area: "Bedroom Corner Windows",
    category: "Decorative Films",
    description:
      "The finished result across both corner windows: a textured crystal-pattern film that fills the panes with diffused light and removes the walkway sightline completely, with no curtains needed.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.43.mp4",
  },
  {
    src: "/gallery/media/crystal-pattern-bedroom-02.mp4",
    poster: "/gallery/media/crystal-pattern-bedroom-02.jpg",
    mediaType: "video",
    alt: "Video of a single sliding bedroom window finished in crystal-pattern privacy film, offcut sheeting on the table below",
    title: "Crystal-Pattern Film — Single Window Close-Up",
    area: "Bedroom Window",
    category: "Decorative Films",
    description:
      "Close clip of one finished pane with the offcuts still on the table, showing the pattern's density and how evenly it sits across both sliding leaves.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.02 (1).mp4",
  },

  // ── Staircase balustrade, residence ──────────────────────────────────────
  {
    src: "/gallery/media/frosted-stair-balustrade-01.jpeg",
    mediaType: "image",
    alt: "Frosted glass balustrade beside an LED-lit marble staircase, spray bottle resting on a tread during installation",
    title: "Frosted Film on Staircase Glass Balustrade",
    area: "Staircase Glass Balustrade",
    category: "Frosted Glass Films",
    description:
      "Frosted film on the glass balustrade of an LED-lit marble stair. The frost softens the strip lighting into a glow and hides the underside of the flight from the room below.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.56.jpeg",
  },
  {
    src: "/gallery/media/frosted-stair-balustrade-02.mp4",
    poster: "/gallery/media/frosted-stair-balustrade-02.jpg",
    mediaType: "video",
    alt: "Video of a frosted glass balustrade panel alongside an illuminated marble staircase in a residence",
    title: "Stair Balustrade — Finished Panel",
    area: "Staircase Glass Balustrade",
    category: "Frosted Glass Films",
    description:
      "Clip of the finished balustrade panel with the stair lighting on, showing the even frost across a single large pane and the clean line where it meets the stringer.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.05 (1).mp4",
  },
  {
    src: "/gallery/media/stair-balustrade-install-01.mp4",
    poster: "/gallery/media/stair-balustrade-install-01.jpg",
    mediaType: "video",
    alt: "Video of a marble staircase covered in protective sheeting with a spray bottle and squeegee during balustrade film work",
    title: "Protecting the Stair During Balustrade Work",
    area: "Staircase",
    category: "Installation Process",
    description:
      "Sheeting laid over polished marble treads before the balustrade glass is wet-applied — the prep step that keeps solution off a finished stone stair.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.10 (2).mp4",
  },

  // ── Sun control / tinting ────────────────────────────────────────────────
  {
    src: "/gallery/media/solar-office-window-night-01.jpeg",
    mediaType: "image",
    alt: "Dark tinted office window viewed at night from outside, with the lit interior and desks visible through the glass",
    title: "Dark Solar Film on Office Window",
    area: "Office Window",
    category: "Sun Control Films",
    description:
      "Dark-tinted office glazing photographed after dark, when interior light beats the film and the desks read through. The daytime effect is the reverse — which is exactly the point worth explaining to clients.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.51 (2).jpeg",
    review:
      "Cannot tell from a night frame whether this is a plain dark tint or a dual-reflective film.",
  },
  {
    src: "/gallery/media/solar-bedroom-window-night-01.jpeg",
    mediaType: "image",
    alt: "Tinted sliding bedroom window in a high-rise flat at night, city lights visible through the darkened glass",
    title: "Tinted Bedroom Glazing — High-Rise Flat",
    area: "Bedroom Sliding Window",
    category: "Sun Control Films",
    description:
      "Full-height sliding bedroom glazing treated for heat and glare in a high-rise flat, with the city lights still reading clearly through it from inside.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.54 (1).jpeg",
  },
  {
    src: "/gallery/media/solar-balcony-door-night-01.mp4",
    poster: "/gallery/media/solar-balcony-door-night-01.jpg",
    mediaType: "video",
    alt: "Night video of an installer finishing solar film on a bedroom balcony sliding door in a high-rise flat",
    title: "Balcony Door Film — Evening Installation",
    area: "Balcony Sliding Door",
    category: "Sun Control Films",
    description:
      "Evening install on a bedroom balcony door, the fitter working the bottom edge down while the occupied flat carries on around him. Filmed to show out-of-hours working in a lived-in home.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.06 (2).mp4",
    review: "Low light; the film shade itself is hard to judge from this clip.",
  },
  {
    src: "/gallery/media/solar-storefront-reflective-01.jpeg",
    mediaType: "image",
    alt: "Commercial storefront glazing finished in dark reflective solar film, mirroring the sky and street under bright sun",
    title: "Dark Reflective Film on Storefront Glazing",
    area: "Commercial Storefront Glazing",
    category: "Sun Control Films",
    description:
      "Full storefront elevation in a dark reflective film under direct sun — the glass reads as a mirror from the pavement while staff keep a clear outward view and a much lower heat load.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.33.01 (1).jpeg",
  },
  {
    src: "/gallery/media/highrise-install-station-01.mp4",
    poster: "/gallery/media/highrise-install-station-01.jpg",
    mediaType: "video",
    alt: "Video of a film cutting table with squeegee and blade set up beside high-rise perimeter glazing and a glass balcony",
    title: "Cutting Station at High-Rise Glazing",
    area: "High-Rise Perimeter Glazing",
    category: "Installation Process",
    description:
      "The cutting table set up beside the perimeter glazing it serves — squeegee, hook blade and offcuts laid out, glass balustrade and skyline behind. How a high-rise job is staged.",
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.09 (1).mp4",
  },

  // ── Film samples and technical literature ───────────────────────────────
  {
    src: "/gallery/media/sample-helios-dual-reflective.jpeg",
    mediaType: "image",
    alt: "Open film sample binder showing a dual reflective solar film swatch beside its printed benefits sheet",
    title: "Dual Reflective Solar Film Sample",
    area: "Sample Binder",
    category: "Film Samples",
    description:
      "Dual reflective exterior-grade solar film in the sample binder, opposite its benefits sheet — daytime one-way privacy, high heat and glare rejection, UV block. The swatch clients handle before choosing a shade.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.50 (1).jpeg",
  },
  {
    src: "/gallery/media/sample-performance-data.jpeg",
    mediaType: "image",
    alt: "Film sample binder open to a performance data page listing solar energy, visible light and U-value figures",
    title: "Film Performance Data Sheet",
    area: "Sample Binder",
    category: "Film Samples",
    description:
      "The performance page behind a swatch: solar energy rejection, visible light transmission and reflectance, UV transmission, shading coefficient and U-value — the numbers a specification is actually written from.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.51 (1).jpeg",
  },
  {
    src: "/gallery/media/sample-garware-reflective-fan.jpeg",
    mediaType: "image",
    alt: "Fanned set of reflective solar film swatches in bronze, gold, blue, green, silver and charcoal beside their catalogue",
    title: "Reflective Solar Film Swatch Range",
    area: "Sample Set",
    category: "Film Samples",
    description:
      "The reflective metallic range fanned out — bronze, gold, blue, green, silver and charcoal — beside its catalogue. Shade choice changes both the building's exterior look and its heat numbers.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.54.jpeg",
  },
  {
    src: "/gallery/media/sample-sunbrella-charcoal.jpeg",
    mediaType: "image",
    alt: "Film sample book open to a charcoal non-reflective solar film page listing 50 percent light transmission and over 99 percent UV rejection",
    title: "Charcoal Non-Reflective Film Sample",
    area: "Sample Book",
    category: "Film Samples",
    description:
      "A charcoal non-reflective solar film page from the swatch book: 50% visible light transmission, over 99% UV rejected, 44% glare reduction. The neutral option where a mirrored exterior is not wanted.",
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.57 (2).jpeg",
  },
];

/**
 * Files that were inspected but deliberately NOT turned into project entries.
 * Each one is either a stock/marketing creative that is not our own work, a
 * frame with nothing identifiable in it, or a shot where the glass treatment
 * cannot be determined without asking the client.
 */
export const unclassifiedMedia: {
  sourceFile: string;
  mediaType: "image" | "video";
  reason: string;
}[] = [
  // Stock, licensed or promotional creatives — not photographs of our projects
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.43.jpeg",
    mediaType: "image",
    reason:
      "Marketing creative: split '5% BLACK TINT' inside/outside comparison graphic with burnt-in captions.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.44 (2).jpeg",
    mediaType: "image",
    reason:
      "Stock BEFORE/AFTER graphic of a frosted-band office partition; not a site photograph.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.44.jpeg",
    mediaType: "image",
    reason:
      "Stock interior photograph of a night office with patterned glass; carries a third-party watermark.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.47.jpeg",
    mediaType: "image",
    reason:
      "Shutterstock-watermarked stock photo of a house exterior. Cannot be published.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.46 (1).jpeg",
    mediaType: "image",
    reason:
      "Stock photo of an installer frosting an office partition; studio-lit, not one of our sites.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.55.jpeg",
    mediaType: "image",
    reason: "Duplicate of the same stock installer photograph.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.47 (1).jpeg",
    mediaType: "image",
    reason:
      "Stock photo: installer applying wave-pattern film to a conference room; same stock set as the frames below.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.58 (1).jpeg",
    mediaType: "image",
    reason: "Stock photo from the same wave-pattern conference room set.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.59.jpeg",
    mediaType: "image",
    reason: "Stock photo from the same wave-pattern conference room set.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.55 (2).jpeg",
    mediaType: "image",
    reason:
      "Generated/stock image of an installer squeegeeing glass; lighting and hands do not survive close inspection.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.56 (2).jpeg",
    mediaType: "image",
    reason:
      "Generated/stock image of a team frosting a partition while onlookers watch.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.52.jpeg",
    mediaType: "image",
    reason:
      "Promotional render of a crew filming high-rise glazing over a Mumbai skyline; branded carton in shot but not verifiable as our own job.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.54 (2).jpeg",
    mediaType: "image",
    reason: "Marketing render with a burnt-in 'AFTER' badge.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.55 (1).jpeg",
    mediaType: "image",
    reason:
      "Marketing BEFORE/AFTER render of a glare-lit office; captions burnt in.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.33.00 (1).jpeg",
    mediaType: "image",
    reason:
      "Marketing BEFORE/AFTER composite of a partition install with burnt-in captions.",
  },

  // No glass treatment visible / not a project shot
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.48.jpeg",
    mediaType: "image",
    reason:
      "Street photo of a commercial building entrance and parked scooters. Location context only, no glass work in frame.",
  },
  {
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.05 (2).mp4",
    mediaType: "video",
    reason:
      "Site prep footage: door handles, hardware and tool boxes on the floor. No glass treatment visible.",
  },

  // Ambiguous — glass condition cannot be determined
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.38.jpeg",
    mediaType: "image",
    reason:
      "Bedroom window with a roller blind. Glass appears untreated; cannot tell whether this is a before shot or an unrelated photo.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.31.40.jpeg",
    mediaType: "image",
    reason:
      "View out through a ground-floor window onto greenery. No visible film, tint or pattern to classify.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.49 (1).jpeg",
    mediaType: "image",
    reason:
      "Dark mirrored glass panel leaning in an outdoor workshop. Could be a tinted door leaf or plain fabricated glass; not determinable.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.56 (1).jpeg",
    mediaType: "image",
    reason:
      "Residential balcony sliding doors with apparently clear glass. No treatment identifiable.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.32.58.jpeg",
    mediaType: "image",
    reason:
      "Dark office cabin with a glass partition and window; too underexposed to judge whether any film is present.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.33.00.jpeg",
    mediaType: "image",
    reason:
      "Night shot through a grid window at a city skyline. Too dark to identify any glass treatment.",
  },
  {
    sourceFile: "WhatsApp Image 2026-06-19 at 23.33.01.jpeg",
    mediaType: "image",
    reason:
      "Residential window looking onto trees, glass apparently clear. Nothing to classify.",
  },
  {
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.07.mp4",
    mediaType: "video",
    reason:
      "Empty flat with full-height grid glazing, glass apparently untreated throughout.",
  },

  // Unusable footage
  {
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.36.mp4",
    mediaType: "video",
    reason:
      "Underexposed and out of focus for its full length; no frame is usable.",
  },
  {
    sourceFile: "WhatsApp Video 2026-06-19 at 23.32.37.mp4",
    mediaType: "video",
    reason: "Three seconds of near-black frames.",
  },
  {
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.01.mp4",
    mediaType: "video",
    reason: "Two seconds of black frames.",
  },
  {
    sourceFile: "WhatsApp Video 2026-06-19 at 23.33.02.mp4",
    mediaType: "video",
    reason: "Pans across a blank wall and ceiling; nothing identifiable.",
  },
];

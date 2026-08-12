# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (requires internet — fetches Google Fonts once)
npm run lint     # ESLint via next lint
npm start        # serve the production build
```

No test suite is configured.

## Architecture

This is a fully static Next.js 14 App Router site for a local business (Elegant Glass Films, Andheri West, Mumbai). All pages are SSG — there is no runtime server or database.

### Single source of truth: `src/lib/site.ts`

All business data lives here: NAP (name/address/phone), hours, `services[]`, `areas[]`, and `reviews[]`. **Keep NAP identical to the Google Business Profile** — it feeds the JSON-LD schema and the sitemap, so a mismatch hurts local SEO. When adding or changing content (new service, updated hours, new review), this is the only file to edit.

`areas[]` is the exception to "one file": the data is long enough to live in `src/lib/areas.ts` and is re-exported from `site.ts`, so `@/lib/site` remains the single import point. Import area data from `site.ts`, not `areas.ts`.

### Service areas: `src/lib/areas.ts`

~55 locality pages across Mumbai, Thane and Navi Mumbai. Each `Area` carries unique `blurb`, `intro`, `propertyMix`, `landmarks`, `postalCodes`, `topServices`, `nearby` and two area-specific `faqs`.

**These fields must stay genuinely distinct per area.** Google demotes sets of location pages that differ only by place name (its "doorway pages" guidance), so templated copy would actively harm rankings rather than just being lazy. Adding an area means writing real local detail for it.

Other conventions:
- `covers?: string[]` — used where a locality has no real East/West split (Churchgate, Marine Lines, Charni Road, Prabhadevi, and the Navi Mumbai nodes). One page targets both search terms instead of two thin ones.
- `isHub: true` — region landing pages (`mumbai`, `navi-mumbai`), excluded from region listings on `/areas`.
- `nearby[]` must reference valid slugs; it drives internal linking between area pages.
- `shortName?` — only for names long enough to push `<title>` past ~60 chars.
- `featuredAreaSlugs` in `site.ts` controls which areas appear on the home page and in the footer. Rendering all ~55 in the footer would read as link spam.

### Structured data: `src/lib/schema.ts`

Exports functions (`localBusinessSchema`, `serviceSchema`, `areaServiceSchema`, `faqSchema`, `breadcrumbSchema`) that consume `site.ts` data and return JSON-LD objects.

`localBusinessSchema` is injected on **every** page via the root layout, so keep it small — its `areaServed` stays at region level deliberately. Per-locality `areaServed` belongs in `areaServiceSchema`, which is emitted once on its own area page.

Page `title` metadata must **not** include the brand: the root layout sets `title.template` to `%s · Elegant Glass Films` and appends it. `openGraph.title` is the exception — it has no template inheritance, so it states the brand in full. These are injected via the `<JsonLd>` component. New page types that need structured data should add a helper here rather than inlining schema objects in page files.

### Dynamic routes

- `src/app/services/[slug]/page.tsx` — iterates `services[]` from `site.ts`; `generateStaticParams` returns all slugs.
- `src/app/areas/[slug]/page.tsx` — same pattern for `areas[]`.
- `src/app/areas/page.tsx` — the area index, grouped by `AreaRegion`. Required: with ~55 area pages, this is the crawl path that keeps them from being orphaned.

Adding a new service or area only requires adding an entry to the data file; the route pages, sitemap and index pick it up automatically.

### Components (`src/components/`)

Shared UI only — `Header`, `Footer`, `MobileCTA` (sticky call/WhatsApp bar on mobile), `Section` (layout wrapper), `ServiceCard`, `ReviewCard`, `SpecReadout` (displays film technical specs), `CTABand`, `JsonLd`. No state management library; all components are server components unless otherwise marked.

### Fonts

Three self-hosted Google Fonts loaded via `next/font`: Fraunces (display/headings), Inter (body), IBM Plex Mono (spec readouts). CSS variables `--font-display`, `--font-body`, `--font-mono` are set on `<html>` in `layout.tsx` and referenced in Tailwind config.

### SEO / meta

- `src/app/sitemap.ts` and `src/app/robots.ts` — auto-generated from `site.url`
- `src/app/layout.tsx` — root `<Metadata>` with OG tags; per-page metadata is defined in each `page.tsx`
- Canonical URL and `metadataBase` derive from `site.url` — update that before going live

### Gallery

`src/app/gallery/page.tsx` currently uses gradient placeholders. Real images should be dropped into `/public` and swapped in with `next/image`.

### Pre-launch checklist (from README)

- Set `site.url` to the real domain
- Replace `site.social.google` with the actual Google Maps Business Profile URL
- Add `/public/og.png` (1200×630 OG image)
- Swap gallery placeholders with real photos
- Submit sitemap to Google Search Console

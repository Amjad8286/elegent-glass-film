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

### Structured data: `src/lib/schema.ts`

Exports functions (`localBusinessSchema`, `serviceSchema`, `faqSchema`, `breadcrumbSchema`) that consume `site.ts` data and return JSON-LD objects. These are injected via the `<JsonLd>` component. New page types that need structured data should add a helper here rather than inlining schema objects in page files.

### Dynamic routes

- `src/app/services/[slug]/page.tsx` — iterates `services[]` from `site.ts`; `generateStaticParams` returns all slugs.
- `src/app/areas/[slug]/page.tsx` — same pattern for `areas[]`.

Adding a new service or area only requires adding an entry to `site.ts`; the route pages pick it up automatically.

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

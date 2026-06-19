# Elegant Glass Films — Website

SEO-optimised marketing site for **Elegant Glass Films**, a glass & mirror / window-film
shop in Andheri West, Mumbai. Built with **Next.js (App Router) + TypeScript + Tailwind CSS**,
statically generated for speed, and wired with structured data that matches your Google
Business Profile.

## Tech stack

- **Next.js 14** (App Router, fully static / SSG)
- **TypeScript**
- **Tailwind CSS**
- **next/font** (self-hosted Fraunces · Inter · IBM Plex Mono — no layout shift)
- Built-in **sitemap.xml** + **robots.txt** routes
- **JSON-LD** structured data: `LocalBusiness`, `Service`, `FAQPage`, `Review`, `Breadcrumb`

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

> Note: `npm run build` downloads the Google fonts once at build time, so the build
> machine needs internet access (Vercel handles this automatically).

## What to change before going live

Everything business-specific lives in **`src/lib/site.ts`** — edit that one file.

1. **`site.url`** — set your real domain (used for canonical URLs, sitemap, schema).
2. **`site.social.google`** — paste your actual Google Maps / Business Profile link.
   This is what ties the site's `sameAs` schema to your GMB listing.
3. **Hours** — currently set to realistic Mon–Sat hours instead of GMB's "Open 24 hours".
   Update if you really do operate differently.
4. **Phone / address** — already filled from your GMB. Keep these **identical** to the
   Google listing (NAP consistency is a major local-ranking factor).
5. **Real photos** — the gallery (`src/app/gallery/page.tsx`) uses gradient placeholders.
   Drop real before/after JPGs into `/public` and swap the tiles for `next/image`.
6. **`/public/og.png`** — add a 1200×630 social-share image (referenced in schema/OG tags).

## Deploy

Easiest is **Vercel** (zero config):

```bash
npm i -g vercel
vercel
```

Then add your custom domain in the Vercel dashboard. Cloudflare Pages or any Node host
works too (`npm run build` + `npm start`).

## SEO checklist after launch

- [ ] Submit `https://yourdomain/sitemap.xml` in Google Search Console
- [ ] Add your live website URL to your Google Business Profile (the missing "Website" button)
- [ ] Confirm NAP on the site exactly matches the GMB listing
- [ ] Replace gallery placeholders with real project photos
- [ ] Add an `og.png` share image
- [ ] Validate structured data at https://search.google.com/test/rich-results

## Page structure

```
/                        Home — hero, specs, services, reviews, areas
/services                All services
/services/[slug]         6 service pages (sun control, frosted, safety,
                         one-way, glass & mirror, car tint) + FAQ schema
/areas/[slug]            6 area pages (Andheri West/East, Bandra, Juhu,
                         Powai, Goregaon) for local "near me" search
/gallery                 Project showcase
/reviews                 5.0 ★ reviews + AggregateRating schema
/about                   About + NAP
/contact                 Call / WhatsApp / map / directions
```

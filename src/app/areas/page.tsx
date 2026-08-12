import type { Metadata } from "next";
import Link from "next/link";
import {
  AREA_REGIONS,
  areas,
  areasByRegion,
  servedLocalities,
  site,
} from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  // Brand omitted — the root layout's title template appends it.
  title: "Areas We Serve Across Mumbai",
  description:
    "Window film, frosted glass and mirror work across Mumbai — Andheri, Bandra, Worli, Dadar, Borivali, Powai, Chembur, Mulund, Thane and Navi Mumbai. Free site visit anywhere we cover.",
  alternates: { canonical: "/areas" },
  openGraph: {
    title: "Areas We Serve — Elegant Glass Films Mumbai",
    description:
      "Every Mumbai locality we cover, from Colaba to Borivali and out to Thane and Navi Mumbai.",
    url: `${site.url}/areas`,
  },
};

export default function AreasPage() {
  const hubs = areas.filter((a) => a.isHub);
  // Locality names, not page count — some pages cover both an East and a West.
  const total = servedLocalities.length;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Areas We Serve", url: `${site.url}/areas` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Areas served by Elegant Glass Films",
          numberOfItems: areas.length,
          itemListElement: areas.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.name,
            url: `${site.url}/areas/${a.slug}`,
          })),
        }}
      />

      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Where we work</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Window film across Mumbai, Thane &amp; Navi Mumbai
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-muted">
          We work out of Andheri West and cover {total} localities across the
          city — from heritage glazing in Colaba to new towers on Ghodbunder
          Road. Site visits and written quotes are free everywhere on this list.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hubs.map((h) => (
            <Link
              key={h.slug}
              href={`/areas/${h.slug}`}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-frost transition-colors hover:bg-glass-deep"
            >
              {h.name}
            </Link>
          ))}
        </div>
      </Section>

      {AREA_REGIONS.map((region) => {
        const list = areasByRegion(region);
        if (list.length === 0) return null;

        return (
          <Section key={region} className="mt-16">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              {region}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="group rounded-2xl border border-frost-deep bg-white/60 p-5 transition-colors hover:border-glass"
                >
                  <p className="font-display text-base font-semibold text-ink group-hover:text-glass-deep">
                    {a.name}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-muted">
                    {a.blurb}
                  </p>
                  {a.covers && (
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-slate-mute2">
                      Covers {a.covers.join(" · ")}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

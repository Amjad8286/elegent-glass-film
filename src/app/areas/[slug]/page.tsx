import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areas, services, site } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArea(params.slug);
  if (!a) return {};
  return {
    title: `Window Film in ${a.name}, Mumbai`,
    description: `${a.blurb} Sun control, frosted, safety, and privacy film fitted by Elegant Glass Films. Free site visit in ${a.name}.`,
    alternates: { canonical: `/areas/${a.slug}` },
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const a = getArea(params.slug);
  if (!a) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: a.name, url: `${site.url}/areas/${a.slug}` },
        ])}
      />

      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Service area · Mumbai</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Window film &amp; glass work in {a.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-muted">{a.blurb}</p>
        <p className="mt-4 max-w-xl text-[15px] text-slate-muted">
          From our base in Andheri West we cover {a.name} for sun control, frosted privacy,
          safety, and one-way film — measured on site and fitted by our own team.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phone.tel}`}
            className="rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-frost transition-colors hover:bg-glass-deep"
          >
            Call {site.phone.display}
          </a>
          <Link
            href="/services"
            className="rounded-full border border-ink/15 px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-glass hover:text-glass-deep"
          >
            View films
          </Link>
        </div>
      </Section>

      <Section className="mt-16">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Popular in {a.name}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      <Section className="mt-16">
        <p className="eyebrow">Other areas</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {areas
            .filter((x) => x.slug !== a.slug)
            .map((x) => (
              <Link
                key={x.slug}
                href={`/areas/${x.slug}`}
                className="rounded-full border border-frost-deep bg-white/60 px-5 py-2.5 text-sm text-ink transition-colors hover:border-glass hover:text-glass-deep"
              >
                {x.name}
              </Link>
            ))}
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areas, getArea, services, site } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { areaServiceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArea(params.slug);
  if (!a) return {};

  // The root layout's title template already appends "· Elegant Glass Films",
  // so the brand must not be repeated here. shortName keeps the handful of long
  // locality names inside the ~60 char SERP truncation limit.
  const title = `Window Film in ${a.shortName ?? a.name}`;

  return {
    title,
    description: `${a.blurb} Sun control, frosted, safety and privacy film fitted by Elegant Glass Films. Free site visit in ${a.name}.`,
    alternates: { canonical: `/areas/${a.slug}` },
    openGraph: {
      // OG has no template inheritance here, so the brand is stated in full.
      title: `${title} — ${site.name}`,
      description: a.blurb,
      url: `${site.url}/areas/${a.slug}`,
      type: "website",
    },
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const a = getArea(params.slug);
  if (!a) notFound();

  const topServices = a.topServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const nearby = a.nearby
    .map((slug) => getArea(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Areas We Serve", url: `${site.url}/areas` },
          { name: a.name, url: `${site.url}/areas/${a.slug}` },
        ])}
      />
      <JsonLd data={areaServiceSchema(a)} />
      <JsonLd data={faqSchema(a.faqs)} />

      <Section className="pt-14 sm:pt-20">
        <Eyebrow>{a.region}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Window film &amp; glass work in {a.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-muted">{a.intro}</p>

        {a.covers && (
          <p className="mt-4 max-w-2xl text-[15px] text-slate-muted">
            This page covers {a.covers.join(" and ")} — {a.name} is a single
            locality rather than two separate neighbourhoods, so one team covers
            all of it.
          </p>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phone.tel}`}
            className="rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-frost transition-colors hover:bg-glass-deep"
          >
            Call {site.phone.display}
          </a>
          <a
            href={`https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(
              `Hi, I'd like a quote for window film in ${a.name}.`,
            )}`}
            className="rounded-full border border-ink/15 px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-glass hover:text-glass-deep"
          >
            WhatsApp for a quote
          </a>
        </div>
      </Section>

      {/* Local context — the substance that keeps these pages distinct */}
      <Section className="mt-16">
        <div className="grid gap-8 rounded-2xl border border-frost-deep bg-white/60 p-6 sm:p-8 md:grid-cols-3">
          <div>
            <p className="eyebrow text-glass-deep">Buildings here</p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-muted">
              {a.propertyMix}
            </p>
          </div>
          <div>
            <p className="eyebrow text-glass-deep">Around {a.name}</p>
            <ul className="mt-3 space-y-1.5 text-[15px] text-slate-muted">
              {a.landmarks.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-glass-deep">Coverage</p>
            <p className="mt-3 font-mono text-[13px] uppercase tracking-wide text-slate-muted">
              {a.postalCodes.join(" · ")}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-muted">
              Free site visit and written quote. Fitted by our own team from
              Andheri West.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mt-16">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Most requested in {a.name}
        </h2>
        <p className="mt-3 max-w-2xl text-slate-muted">
          Based on the glass and building types we actually see here.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topServices.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      <Section className="mt-16">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          {a.name} questions
        </h2>
        <dl className="mt-8 max-w-3xl divide-y divide-frost-deep border-y border-frost-deep">
          {a.faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="font-display text-lg font-semibold text-ink">
                {f.q}
              </dt>
              <dd className="mt-2 leading-relaxed text-slate-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="mt-16">
        <p className="eyebrow">Nearby areas</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {nearby.map((x) => (
            <Link
              key={x.slug}
              href={`/areas/${x.slug}`}
              className="rounded-full border border-frost-deep bg-white/60 px-5 py-2.5 text-sm text-ink transition-colors hover:border-glass hover:text-glass-deep"
            >
              {x.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-muted">
          <Link href="/areas" className="text-glass-deep underline underline-offset-4">
            See every area we cover across Mumbai
          </Link>
        </p>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

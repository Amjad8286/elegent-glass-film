import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { SpecReadout } from "@/components/SpecReadout";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

// Pre-render every service page at build time (SSG).
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    // Brand omitted — the root layout's title template appends it.
    title: `${s.name} in Mumbai`,
    description: s.intro.slice(0, 155),
    alternates: { canonical: `/services/${s.slug}` },
    keywords: [s.keyword, `${s.name} Mumbai`, "glass film installation Mumbai", "window film Mumbai"],
    openGraph: {
      title: `${s.name} in Mumbai — ${site.name}`,
      description: s.short,
    },
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: s.name, url: `${site.url}/services/${s.slug}` },
        ])}
      />

      <Section className="pt-14 sm:pt-20">
        <nav className="mb-8 text-sm text-slate-muted">
          <Link href="/services" className="hover:text-glass-deep">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{s.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>{s.name}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {s.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-muted">{s.intro}</p>

            {s.detail && (
              <p className="mt-4 text-[15px] leading-relaxed text-slate-muted">{s.detail}</p>
            )}

            <h2 className="mt-10 font-display text-xl font-semibold">Why people choose it</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] text-ink/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glass" />
                  {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-xl font-semibold">Best for</h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {s.bestFor.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-frost-deep bg-white/60 px-4 py-1.5 text-sm text-ink"
                >
                  {b}
                </span>
              ))}
            </div>

            {s.process && s.process.length > 0 && (
              <>
                <h2 className="mt-10 font-display text-xl font-semibold">How installation works</h2>
                <ol className="mt-4 space-y-3">
                  {s.process.map((step, i) => (
                    <li key={step} className="flex gap-3 text-[15px] text-ink/85">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glass/10 font-mono text-[11px] font-medium text-glass-deep">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>

          <aside className="lg:pt-12">
            <div className="rounded-3xl border border-frost-deep bg-white/70 p-6">
              <p className="eyebrow">Performance</p>
              <div className="mt-4">
                <SpecReadout specs={s.specs} />
              </div>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-6 block rounded-full bg-ink py-3 text-center text-sm font-medium text-frost transition-colors hover:bg-glass-deep"
              >
                Get a quote · {site.phone.display}
              </a>
              <a
                href={`https://wa.me/${site.phone.whatsapp}`}
                className="mt-3 block rounded-full border border-ink/15 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-glass hover:text-glass-deep"
              >
                Ask on WhatsApp
              </a>

              {(s.lifespan || s.maintenance) && (
                <div className="mt-5 border-t border-frost-deep pt-5 space-y-3">
                  {s.lifespan && (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-eyebrow text-slate-muted">
                        Expected lifespan
                      </p>
                      <p className="mt-1 text-sm text-ink/85">{s.lifespan}</p>
                    </div>
                  )}
                  {s.maintenance && (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-eyebrow text-slate-muted">
                        Maintenance
                      </p>
                      <p className="mt-1 text-sm text-ink/85">{s.maintenance}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      </Section>

      {/* FAQ — also emitted as FAQPage schema above for rich results. */}
      <Section className="mt-20">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Common questions</h2>
        <div className="mt-8 divide-y divide-frost-deep border-y border-frost-deep">
          {s.faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none font-medium text-ink marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-glass-deep transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

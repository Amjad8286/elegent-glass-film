import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Call, WhatsApp, or visit Elegant Glass Films in Andheri West, Mumbai. Free site visits across the western suburbs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(`${site.name}, ${site.address.full}`);
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Get in touch</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Book a free site visit
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-muted">
          Tell us your glass area and what you need — heat, privacy, safety, or a fresh look —
          and we&apos;ll measure and quote, free of charge.
        </p>
      </Section>

      <Section className="mt-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-frost-deep bg-white/70 p-7">
            <dl className="space-y-6">
              <div>
                <dt className="eyebrow">Call or WhatsApp</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="font-display text-2xl font-semibold text-ink hover:text-glass-deep"
                  >
                    {site.phone.display}
                  </a>
                </dd>
                <dd className="mt-3 flex gap-3">
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-frost hover:bg-glass-deep"
                  >
                    Call now
                  </a>
                  <a
                    href={`https://wa.me/${site.phone.whatsapp}`}
                    className="rounded-full bg-glass-deep px-5 py-2.5 text-sm font-medium text-frost hover:bg-glass-dark"
                  >
                    WhatsApp
                  </a>
                </dd>
              </div>

              <div className="glass-edge w-full" />

              <div>
                <dt className="eyebrow">Address</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink">{site.address.full}</dd>
                <dd className="mt-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-glass-deep hover:underline"
                  >
                    Get directions →
                  </a>
                </dd>
              </div>

              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-2 text-[15px] text-ink">{site.hoursLabel}</dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-3xl border border-frost-deep">
            <iframe
              title="Map to Elegant Glass Films"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

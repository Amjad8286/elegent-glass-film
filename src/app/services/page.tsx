import type { Metadata } from "next";
import { services } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Window Film Services in Mumbai | Elegant Glass Films",
  description:
    "Sun control, frosted glass, one-way privacy, safety, UV protection, decorative, office branding, residential, and car window tinting across Mumbai. Fitted by Elegant Glass Films, Andheri West.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Glass Film Services in Mumbai — Elegant Glass Films",
    description:
      "Professional window film installation across Mumbai homes, offices, and commercial buildings. Sun control, privacy, safety, UV protection, and more.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Every film type, professionally fitted across Mumbai
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-muted">
          From cutting afternoon heat and blocking UV to creating private office cabins
          and securing shopfront glass — here is the complete range we supply and
          install for homes, offices, and commercial buildings across Mumbai.
        </p>
      </Section>

      <Section className="mt-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

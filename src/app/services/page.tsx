import type { Metadata } from "next";
import { services } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Window Film Services in Mumbai",
  description:
    "Sun control, frosted, safety, one-way privacy, car tint, and glass & mirror work across Mumbai. Fitted by Elegant Glass Films, Andheri West.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Every film, fitted to the pane it protects
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-muted">
          From heat and glare to privacy and safety, here is the full range we supply and
          install across Mumbai.
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

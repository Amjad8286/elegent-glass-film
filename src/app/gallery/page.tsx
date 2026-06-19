import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryProjects } from "@/lib/galleryProjects";

export const metadata: Metadata = {
  title: "Gallery — Window Film Projects in Mumbai | Elegant Glass Films",
  description:
    "Browse frosted glass, sun control, privacy, one-way, decorative, and safety film projects installed by Elegant Glass Films across Mumbai homes and offices.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Window Film Projects Gallery — Elegant Glass Films Mumbai",
    description:
      "Real projects across Mumbai: frosted office partitions, sun control film for apartments, one-way privacy film for homes, and decorative glass film for interiors.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Our work</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Glass we&apos;ve transformed across Mumbai
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-muted">
          A curated look at frosted, sun control, privacy, one-way vision,
          decorative, and safety film projects installed in homes and offices
          across Mumbai. Filter by film type or scroll to explore.
        </p>
      </Section>

      <Section className="mt-10">
        <GalleryGrid projects={galleryProjects} />
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

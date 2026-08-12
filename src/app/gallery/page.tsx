import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { ProjectMediaGallery } from "@/components/ProjectMediaGallery";
import { projectMedia } from "@/lib/projectMedia";

export const metadata: Metadata = {
  // Brand omitted — the root layout's title template appends it.
  title: "Window Film Project Gallery, Mumbai",
  description:
    "Photos and video from frosted, reeded, decorative, sun control and branded glass film projects installed by Elegant Glass Films across Mumbai homes, offices and clinics.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Window Film Projects Gallery — Elegant Glass Films Mumbai",
    description:
      "Real projects across Mumbai: frosted office partitions, reeded glass screens, decorative privacy film for homes, branded clinic doors, and sun control film.",
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
          Photos and site video from frosted partitions, reeded glass screens,
          decorative privacy film, branded clinic and office doors, and sun
          control film fitted across Mumbai. Filter by film type, or tap any
          item to view it full size.
        </p>
      </Section>

      <Section className="mt-10">
        <ProjectMediaGallery items={projectMedia} />
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

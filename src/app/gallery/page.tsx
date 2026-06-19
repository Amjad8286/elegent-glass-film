import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Our Work — Window Film Projects in Mumbai",
  description:
    "A look at sun control, frosted, and privacy film projects fitted by Elegant Glass Films across Mumbai homes and offices.",
  alternates: { canonical: "/gallery" },
};

// Placeholder tiles. Drop real photos into /public and swap these for
// <Image> components — before/after shots convert best for this trade.
const projects = [
  { title: "Frosted office cabins", area: "Andheri", tone: "from-glass-deep to-glass" },
  { title: "Sun control · west-facing flat", area: "Bandra", tone: "from-glass to-sun" },
  { title: "One-way privacy film", area: "Powai", tone: "from-ink-soft to-glass-deep" },
  { title: "Safety film · home glass", area: "Juhu", tone: "from-glass-dark to-glass" },
  { title: "Decorative logo etch", area: "Goregaon", tone: "from-sun-deep to-sun" },
  { title: "Shopfront privacy", area: "Andheri East", tone: "from-glass-deep to-ink-soft" },
];

export default function GalleryPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Our work</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Glass we&apos;ve transformed across Mumbai
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-muted">
          A selection of recent film and glass projects. Want to see work similar to your
          space? Ask us for references in your area.
        </p>
      </Section>

      <Section className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-frost-deep"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.tone}`} />
              <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-ink/0" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5">
                <p className="font-display text-lg font-semibold text-frost">{p.title}</p>
                <p className="font-mono text-[11px] uppercase tracking-eyebrow text-frost/80">
                  {p.area}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-muted">
          Placeholder tiles — replace with real before/after project photos in{" "}
          <code className="font-mono">/public</code>.
        </p>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

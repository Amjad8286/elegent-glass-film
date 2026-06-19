import type { Metadata } from "next";
import { site, reviews } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { ReviewCard } from "@/components/ReviewCard";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Reviews — 5.0 ★ on Google",
  description:
    "Read what Mumbai customers say about Elegant Glass Films — rated 5.0 across 24 Google reviews for window film and glass work.",
  alternates: { canonical: "/reviews" },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.text,
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewSchema} />

      <Section className="pt-14 sm:pt-20 text-center">
        <Eyebrow>Reviews</Eyebrow>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Rated {site.rating.value} ★ across {site.rating.count} Google reviews
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-muted">
          We let the work speak. Here is a sample of what Mumbai customers have said.
        </p>
        <a
          href={site.social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink hover:border-glass hover:text-glass-deep"
        >
          Read all reviews on Google →
        </a>
      </Section>

      <Section className="mt-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

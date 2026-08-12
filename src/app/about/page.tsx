import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  // Brand omitted — the root layout's title template appends it.
  title: "About Us — Window Film Fitters in Andheri West",
  description:
    "Elegant Glass Films is a window film and glass shop in Andheri West, Mumbai, rated 5.0 across 24 Google reviews.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>About us</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          A Mumbai glass-film shop built on clean, honest work
        </h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-lg leading-relaxed text-slate-muted">
            <p>
              Elegant Glass Films has been fitting window film, glass, and mirrors across
              Mumbai for over a decade. We work out of Andheri West and cover homes, offices,
              clinics, and shopfronts throughout the western suburbs.
            </p>
            <p>
              Our approach is simple: measure properly, recommend the film that actually
              suits your glass and your problem, and finish the job cleanly. No upselling, no
              mess left behind — which is why our customers consistently rate us{" "}
              <span className="font-medium text-ink">5.0 on Google</span>.
            </p>
            <p>
              Whether you need to cut afternoon heat, add privacy to a cabin, or protect glass
              from breaking, we handle supply and installation end to end.
            </p>
          </div>

          <aside className="rounded-3xl border border-frost-deep bg-white/70 p-7">
            <p className="eyebrow">Visit or call</p>
            <p className="mt-4 text-sm leading-relaxed text-ink">{site.address.full}</p>
            <div className="glass-edge my-5 w-full" />
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-slate-muted">Phone</dt>
                <dd>
                  <a href={`tel:${site.phone.tel}`} className="font-medium text-glass-deep">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-muted">Hours</dt>
                <dd className="text-ink">{site.hoursLabel}</dd>
              </div>
              <div>
                <dt className="text-slate-muted">Rating</dt>
                <dd className="text-ink">
                  {site.rating.value} ★ · {site.rating.count} reviews
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}

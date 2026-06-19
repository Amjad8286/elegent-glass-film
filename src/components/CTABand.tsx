import { site } from "@/lib/site";

export function CTABand() {
  return (
    <div className="relative overflow-hidden rounded-3xl light-gradient px-6 py-12 text-center sm:px-12 sm:py-16">
      <div className="absolute inset-0 animate-sheen bg-white/20 blur-md" />
      <div className="relative">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Book a free site visit
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/90">
          We measure, recommend the right film, and give you a clear quote — no obligation.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${site.phone.tel}`}
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-frost transition-colors hover:bg-ink-soft"
          >
            Call {site.phone.display}
          </a>
          <a
            href={`https://wa.me/${site.phone.whatsapp}`}
            className="rounded-full bg-white/95 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { site, services, areas, featuredAreaSlugs } from "@/lib/site";

// The full area list is far too long for a footer — link the highest-intent
// ones and send the rest through /areas.
const footerAreas = featuredAreaSlugs
  .map((slug) => areas.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-line bg-ink text-frost">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">Elegant Glass Films</p>
          <p className="mt-3 max-w-xs text-sm text-slate-mute2">{site.tagline}</p>
          <p className="mt-6 text-sm text-slate-mute2">{site.address.full}</p>
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a href={`tel:${site.phone.tel}`} className="text-frost hover:text-glass">
              {site.phone.display}
            </a>
            <span className="text-slate-mute2">{site.hoursLabel}</span>
          </div>
        </div>

        <div>
          <p className="eyebrow text-glass">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-slate-mute2 hover:text-frost">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-glass">Areas we serve</p>
          <ul className="mt-4 space-y-2 text-sm">
            {footerAreas.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="text-slate-mute2 hover:text-frost">
                  {a.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className="text-frost hover:text-glass">
                All {areas.length} areas →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-6 text-xs text-slate-mute2 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Elegant Glass Films. Andheri West, Mumbai.</p>
          <p>Rated {site.rating.value} ★ across {site.rating.count} Google reviews.</p>
        </div>
      </div>
    </footer>
  );
}

import { site, services, type Service, type Area } from "./site";

// LocalBusiness JSON-LD — connects the site to your Google profile.
// NAP here MUST match the Google Business Profile exactly.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    image: `${site.url}/og.png`,
    url: site.url,
    telephone: site.phone.tel,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.open,
        closes: h.close,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    sameAs: [site.social.google, site.social.instagram, site.social.facebook],
    // Kept at region level deliberately. This schema is injected on every page
    // via the root layout, so enumerating all ~70 localities here would repeat
    // them site-wide. The specific localities are declared once each, on their
    // own area page via areaServiceSchema, and listed on /areas.
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Navi Mumbai" },
      {
        "@type": "AdministrativeArea",
        name: "Mumbai Metropolitan Region, Maharashtra",
      },
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.intro,
    provider: { "@id": `${site.url}/#business` },
    areaServed: "Mumbai, Maharashtra",
    url: `${site.url}/services/${s.slug}`,
  };
}

/**
 * Service schema scoped to one locality. This is what tells search engines the
 * area page is a real service offering in that place rather than a duplicate of
 * the parent service page.
 */
export function areaServiceSchema(a: Area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Window Film & Glass Services in ${a.name}`,
    description: a.blurb,
    provider: { "@id": `${site.url}/#business` },
    url: `${site.url}/areas/${a.slug}`,
    areaServed: [a.name, ...(a.covers ?? [])].map((name) => ({
      "@type": "City",
      name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Mumbai Metropolitan Region, Maharashtra",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Films fitted in ${a.name}`,
      itemListElement: a.topServices
        .map((slug) => services.find((s) => s.slug === slug))
        .filter((s): s is Service => Boolean(s))
        .map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            url: `${site.url}/services/${s.slug}`,
          },
        })),
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

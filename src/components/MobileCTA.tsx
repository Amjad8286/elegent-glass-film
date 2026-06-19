import { site } from "@/lib/site";

// Sticky bottom bar on mobile — calls convert far better than forms for
// a local service business, so make the phone always one tap away.
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-ink-line md:hidden">
      <a
        href={`tel:${site.phone.tel}`}
        className="flex items-center justify-center gap-2 bg-ink py-4 text-sm font-medium text-frost"
      >
        Call now
      </a>
      <a
        href={`https://wa.me/${site.phone.whatsapp}`}
        className="flex items-center justify-center gap-2 bg-glass-deep py-4 text-sm font-medium text-frost"
      >
        WhatsApp
      </a>
    </div>
  );
}

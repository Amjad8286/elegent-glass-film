import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Work" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-frost-deep/70 bg-frost/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative block h-7 w-7 overflow-hidden rounded-[7px] light-gradient">
            <span className="absolute inset-0 animate-sheen bg-white/40 blur-[2px]" />
          </span>
          <span className="font-display text-lg font-semibold leading-none tracking-tight">
            Elegant Glass Films
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-ink/70 transition-colors hover:text-glass-deep"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${site.phone.tel}`}
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-frost transition-colors hover:bg-glass-deep md:inline-block"
        >
          {site.phone.display}
        </a>
      </div>
    </header>
  );
}

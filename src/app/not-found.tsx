import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="py-28 text-center">
      <p className="font-mono text-sm uppercase tracking-eyebrow text-glass-deep">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">This page is clear glass</h1>
      <p className="mt-3 text-slate-muted">There&apos;s nothing here — let&apos;s get you back.</p>
      <Link
        href="/"
        className="mt-7 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-frost hover:bg-glass-deep"
      >
        Back to home
      </Link>
    </Section>
  );
}

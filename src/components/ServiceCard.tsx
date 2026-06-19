import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-frost-deep bg-white/70 p-6 transition-all hover:-translate-y-0.5 hover:border-glass/50 hover:shadow-[0_18px_40px_-24px_rgba(12,124,117,0.5)]"
    >
      <div className="glass-edge mb-5 w-12 opacity-70" />
      <h3 className="font-display text-xl font-semibold text-ink">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-muted">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-glass-deep">
        Explore
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

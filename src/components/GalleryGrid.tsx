"use client";

import Image from "next/image";
import { useState } from "react";
import {
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryProject,
} from "@/lib/galleryProjects";

type ActiveCategory = "All Projects" | GalleryCategory;

export function GalleryGrid({ projects }: { projects: GalleryProject[] }) {
  const [active, setActive] = useState<ActiveCategory>("All Projects");

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter tabs */}
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2"
      >
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat as ActiveCategory)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass ${
              active === cat
                ? "bg-ink text-frost"
                : "bg-frost-deep text-slate-muted hover:bg-glass/10 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project count */}
      <p className="mt-4 text-sm text-slate-muted">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {active !== "All Projects" ? ` · ${active}` : ""}
      </p>

      {/* Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <figure
            key={p.src}
            className="group overflow-hidden rounded-2xl border border-frost-deep bg-white"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-frost-deep">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Caption */}
            <figcaption className="p-4">
              <span className="eyebrow inline-block rounded-full bg-glass/10 px-2.5 py-0.5 text-[10px]">
                {p.category}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-eyebrow text-slate-mute2">
                {p.area} · Mumbai
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted line-clamp-3">
                {p.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-slate-muted">
          No projects in this category yet.
        </p>
      )}
    </>
  );
}

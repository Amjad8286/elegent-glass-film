"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { MediaLightbox } from "@/components/MediaLightbox";
import {
  PROJECT_MEDIA_CATEGORIES,
  type ProjectMediaCategory,
  type ProjectMediaItem,
} from "@/lib/projectMedia";

type ActiveCategory = "All Projects" | ProjectMediaCategory;

export function ProjectMediaGallery({ items }: { items: ProjectMediaItem[] }) {
  const [active, setActive] = useState<ActiveCategory>("All Projects");
  // Index into `filtered`, or null when the viewer is closed.
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // The card that opened the viewer, so focus can go back to it on close.
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(
    () =>
      active === "All Projects"
        ? items
        : items.filter((item) => item.category === active),
    [active, items],
  );

  // Only show tabs for categories that actually have items.
  const categories = useMemo(
    () =>
      PROJECT_MEDIA_CATEGORIES.filter(
        (category) =>
          category === "All Projects" ||
          items.some((item) => item.category === category),
      ),
    [items],
  );

  const openAt = (index: number, trigger: HTMLButtonElement) => {
    openerRef.current = trigger;
    setSelectedIndex(index);
  };

  const close = () => {
    setSelectedIndex(null);
    // Return focus to the card that was clicked.
    openerRef.current?.focus();
    openerRef.current = null;
  };

  const selectCategory = (category: ActiveCategory) => {
    setActive(category);
    // The viewer indexes into the filtered list, so never leave it open across
    // a filter change.
    setSelectedIndex(null);
  };

  return (
    <>
      {/* Category filter tabs */}
      <div
        role="tablist"
        aria-label="Filter projects by film type"
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            type="button"
            aria-selected={active === category}
            onClick={() => selectCategory(category as ActiveCategory)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass ${
              active === category
                ? "bg-ink text-frost"
                : "bg-frost-deep text-slate-muted hover:bg-glass/10 hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-muted">
        {filtered.length} item{filtered.length !== 1 ? "s" : ""}
        {active !== "All Projects" ? ` · ${active}` : ""}
      </p>

      {/* Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item, index) => {
          const isVideo = item.mediaType === "video";
          const thumbnail = isVideo ? item.poster : item.src;

          return (
            <button
              key={item.src}
              type="button"
              onClick={(event) => openAt(index, event.currentTarget)}
              aria-label={`Open ${item.title}${isVideo ? " (video)" : ""}`}
              className="group overflow-hidden rounded-2xl border border-frost-deep bg-white text-left transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass focus-visible:ring-offset-2"
            >
              {/* Fixed ratio keeps the grid stable while images stream in */}
              <div className="relative aspect-[4/3] overflow-hidden bg-frost-deep">
                {thumbnail && (
                  <Image
                    src={thumbnail}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {isVideo && (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 text-frost backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-0.5 h-6 w-6"
                        fill="currentColor"
                      >
                        <path d="M8 5.5v13l11-6.5-11-6.5z" />
                      </svg>
                    </span>
                    <span className="eyebrow pointer-events-none absolute bottom-3 left-3 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] text-frost">
                      Video
                    </span>
                  </>
                )}
              </div>

              <div className="p-4">
                <span className="eyebrow inline-block rounded-full bg-glass/10 px-2.5 py-0.5 text-[10px]">
                  {item.category}
                </span>
                <span className="mt-2 block font-display text-base font-semibold leading-snug text-ink">
                  {item.title}
                </span>
                <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-eyebrow text-slate-mute2">
                  {item.area}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-slate-muted">
          No projects in this category yet.
        </p>
      )}

      {selectedIndex !== null && (
        <MediaLightbox
          items={filtered}
          index={selectedIndex}
          onNavigate={setSelectedIndex}
          onClose={close}
        />
      )}
    </>
  );
}

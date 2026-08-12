"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectMediaItem } from "@/lib/projectMedia";

interface MediaLightboxProps {
  items: ProjectMediaItem[];
  /** Index into `items` of the item being shown. */
  index: number;
  onNavigate: (nextIndex: number) => void;
  onClose: () => void;
}

/** Elements inside the dialog that can hold focus, for the focus trap. */
const FOCUSABLE =
  'button:not([disabled]), [href], video[controls], [tabindex]:not([tabindex="-1"])';

/** Horizontal travel (px) needed before a touch counts as a swipe. */
const SWIPE_THRESHOLD = 48;

export function MediaLightbox({
  items,
  index,
  onNavigate,
  onClose,
}: MediaLightboxProps) {
  const item = items[index];

  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  // True only when the pointer went down on the backdrop itself, so a drag
  // that starts on the caption and ends outside does not close the viewer.
  const pressedBackdrop = useRef(false);

  // Which way the last navigation went, so the incoming item slides in from
  // the correct side.
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [mediaReady, setMediaReady] = useState(false);

  const goTo = useCallback(
    (delta: 1 | -1) => {
      setDirection(delta === 1 ? "next" : "prev");
      setMediaReady(false);
      // Wrap in both directions.
      onNavigate((index + delta + items.length) % items.length);
    },
    [index, items.length, onNavigate],
  );

  // Esc to close, arrows to navigate.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, onClose]);

  // Lock the page behind the dialog. Compensating for the scrollbar keeps the
  // page underneath from shifting sideways as it disappears.
  useEffect(() => {
    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, []);

  // Move focus into the dialog on open. The caller restores it on close.
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Warm the neighbouring stills so next/prev feels instant.
  useEffect(() => {
    for (const delta of [1, -1]) {
      const neighbour = items[(index + delta + items.length) % items.length];
      if (!neighbour) continue;
      const href =
        neighbour.mediaType === "video" ? neighbour.poster : neighbour.src;
      if (!href) continue;
      const img = new window.Image();
      img.src = href;
    }
  }, [index, items]);

  const onPanelKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panelRef.current) return;

    const focusable = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
    ).filter((el) => el.offsetParent !== null);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    // Let the video's own controls handle touches that land on them.
    if ((event.target as HTMLElement).closest("video")) return;
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    // Ignore mostly-vertical drags so scrolling the caption still works.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    goTo(dx < 0 ? 1 : -1);
  };

  if (!item) return null;

  const slideIn =
    direction === "next"
      ? "animate-slide-from-right"
      : "animate-slide-from-left";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — item ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-ink/95 p-3 backdrop-blur-sm motion-reduce:animate-none sm:p-6"
      onKeyDown={onPanelKeyDown}
      onMouseDown={(event) => {
        pressedBackdrop.current = event.target === event.currentTarget;
      }}
      // Close only when the click both starts and ends on the backdrop.
      onClick={(event) => {
        if (pressedBackdrop.current && event.target === event.currentTarget) {
          onClose();
        }
        pressedBackdrop.current = false;
      }}
    >
      <div
        ref={panelRef}
        className="flex max-h-full w-full max-w-5xl animate-zoom-in flex-col motion-reduce:animate-none"
      >
        {/* Top bar: counter + close */}
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-frost/60">
            {index + 1} / {items.length}
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close gallery viewer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-frost/10 text-frost transition-colors hover:bg-frost/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Media stage — fixed height so swapping items never shifts layout */}
        <div
          className="relative flex h-[46vh] items-center justify-center overflow-hidden rounded-2xl bg-black/40 sm:h-[58vh] lg:h-[64vh]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Placeholder shimmer until the media reports it is ready */}
          {!mediaReady && (
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse bg-frost/5 motion-reduce:animate-none"
            />
          )}

          {/* Keyed by src so the previous <video> unmounts and stops playing */}
          <div
            key={item.src}
            className={`relative h-full w-full ${slideIn} motion-reduce:animate-none`}
          >
            {item.mediaType === "video" ? (
              <video
                // eslint-disable-next-line jsx-a11y/media-has-caption
                src={item.src}
                poster={item.poster}
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                aria-label={item.alt}
                onLoadedData={() => setMediaReady(true)}
                className="h-full w-full object-contain"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
                onLoad={() => setMediaReady(true)}
                className="object-contain"
              />
            )}
          </div>

          {/* Prev / next */}
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Previous item"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-frost backdrop-blur transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass sm:left-4"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Next item"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-frost backdrop-blur transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass sm:right-4"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        <div
          key={`caption-${item.src}`}
          className={`mt-4 shrink-0 overflow-y-auto ${slideIn} motion-reduce:animate-none`}
          aria-live="polite"
        >
          <span className="eyebrow inline-block rounded-full bg-glass/20 px-2.5 py-0.5 text-[10px] text-frost">
            {item.category}
          </span>
          <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-frost sm:text-2xl">
            {item.title}
          </h2>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-eyebrow text-frost/50">
            {item.area}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-frost/70">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

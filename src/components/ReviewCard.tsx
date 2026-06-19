export function ReviewCard({
  name,
  area,
  text,
}: {
  name: string;
  area: string;
  text: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-frost-deep bg-white/70 p-6">
      <div className="font-mono text-sm tracking-wide text-sun-deep">★★★★★</div>
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/85">
        “{text}”
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-medium text-ink">{name}</span>
        <span className="text-slate-muted"> · {area}</span>
      </figcaption>
    </figure>
  );
}

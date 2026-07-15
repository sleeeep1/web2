import clsx from "clsx";

const HEX_CLIP = "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

export function DimensionCard({
  index,
  title,
  note,
  description,
  indicators,
  accent = "blue",
}: {
  index: number;
  title: string;
  note?: string;
  description: string;
  indicators: readonly string[];
  accent?: "blue" | "orange";
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03]">
      <div
        className={clsx(
          "flex h-12 w-12 items-center justify-center text-sm font-bold text-white",
          accent === "blue" ? "bg-brand-blue" : "bg-brand-orange-deep"
        )}
        style={{ clipPath: HEX_CLIP }}
      >
        {index}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <h3 className="font-heading text-base font-semibold text-ink">{title}</h3>
        {note && (
          <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-[10px] font-medium text-brand-orange-deep">
            {note}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-ink-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {indicators.map((indicator) => (
          <span
            key={indicator}
            className="rounded-full bg-surface-subtle px-2.5 py-1 text-xs text-ink-muted"
          >
            {indicator}
          </span>
        ))}
      </div>
    </div>
  );
}

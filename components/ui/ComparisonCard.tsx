import { Check, X } from "lucide-react";
import clsx from "clsx";

type ComparisonItem = {
  title: string;
  description: string;
};

export function ComparisonCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly ComparisonItem[];
  tone: "muted" | "brand";
}) {
  const isBrand = tone === "brand";

  return (
    <div
      className={clsx(
        "rounded-2xl border p-8",
        isBrand
          ? "border-brand-blue/20 bg-brand-blue/5"
          : "border-black/5 bg-surface-subtle"
      )}
    >
      <h3
        className={clsx(
          "font-heading text-xl font-semibold",
          isBrand ? "text-brand-blue" : "text-ink-muted"
        )}
      >
        {title}
      </h3>
      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <span
              className={clsx(
                "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full",
                isBrand ? "bg-brand-orange-deep text-white" : "bg-ink-muted/15 text-ink-muted"
              )}
            >
              {isBrand ? <Check size={13} strokeWidth={3} /> : <X size={13} strokeWidth={3} />}
            </span>
            <span>
              <span className={clsx("block text-sm font-medium", isBrand ? "text-ink" : "text-ink-muted")}>
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs text-ink-muted">
                {item.description}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

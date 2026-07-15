import { type ReactNode } from "react";
import clsx from "clsx";

export function FeatureCard({
  index,
  icon,
  title,
  description,
  accent = "blue",
}: {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  accent?: "blue" | "orange";
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03]">
      <div
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-xl motion-safe:animate-pulse-soft",
          accent === "blue" ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-orange/10 text-brand-orange-deep"
        )}
      >
        {icon}
      </div>
      <div className="mt-5 flex items-center gap-2">
        <span className="text-xs font-semibold text-ink-muted">
          0{index}
        </span>
        <h3 className="font-heading text-base font-semibold text-ink">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}

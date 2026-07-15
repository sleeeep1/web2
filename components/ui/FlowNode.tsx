import { type ReactNode } from "react";
import clsx from "clsx";

export function FlowNode({
  index,
  icon,
  title,
  short,
  accent = "orange",
}: {
  index: number;
  icon: ReactNode;
  title: string;
  short: string;
  accent?: "orange" | "blue";
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03]">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
          {index}
        </span>
        <span className={clsx(accent === "orange" ? "text-brand-orange-deep" : "text-brand-blue")}>
          {icon}
        </span>
      </div>
      <h3 className="mt-4 font-heading text-base font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{short}</p>
    </div>
  );
}

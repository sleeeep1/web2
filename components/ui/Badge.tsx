import { type ReactNode } from "react";
import clsx from "clsx";

export function Badge({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "neutral";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium",
        tone === "brand" && "bg-brand-blue/8 text-brand-blue",
        tone === "neutral" && "bg-ink/5 text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

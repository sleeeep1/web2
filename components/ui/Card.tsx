import { type ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03]",
        className
      )}
    >
      {children}
    </div>
  );
}

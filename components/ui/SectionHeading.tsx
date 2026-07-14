import { type ReactNode } from "react";
import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

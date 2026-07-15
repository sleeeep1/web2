"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import clsx from "clsx";
import { FeatureIllustration } from "@/components/ui/FeatureIllustration";

export function FeatureDetailRow({
  icon,
  title,
  description,
  mapsTo,
  highlights,
  illustrationLabel,
  accent,
  reversed,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  mapsTo: string;
  highlights: readonly string[];
  illustrationLabel: string;
  accent: "blue" | "orange";
  reversed: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="grid items-center gap-10 py-14 lg:grid-cols-2"
    >
      <div className={clsx(reversed && "lg:order-2")}>
        <FeatureIllustration icon={icon} label={illustrationLabel} accent={accent} />
      </div>
      <div className={clsx(reversed && "lg:order-1")}>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-deep">
          {mapsTo}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>
        <ul className="mt-5 space-y-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

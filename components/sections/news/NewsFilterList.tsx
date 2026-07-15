"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

const tagStyles: Record<string, string> = {
  MILESTONE: "bg-brand-blue/10 text-brand-blue",
  TECH: "bg-brand-orange/10 text-brand-orange",
  UPCOMING: "bg-ink-muted/10 text-ink-muted",
};

export function NewsFilterList() {
  const { t } = useTranslation();
  const np = t.newsPage;
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(np.items.map((item) => item.tag))),
    [np.items]
  );

  const filteredItems = activeTag ? np.items.filter((item) => item.tag === activeTag) : np.items;

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto flex max-w-2xl items-start gap-2 rounded-xl bg-surface-subtle px-4 py-3 text-xs text-ink-muted">
          <Info size={14} className="mt-0.5 flex-none" />
          <span>{np.placeholderNotice}</span>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={clsx(
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
              activeTag === null
                ? "bg-brand-blue text-white"
                : "bg-surface-subtle text-ink-muted hover:text-brand-blue"
            )}
          >
            {np.filterAllLabel}
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={clsx(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                activeTag === tag
                  ? "bg-brand-blue text-white"
                  : "bg-surface-subtle text-ink-muted hover:text-brand-blue"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl divide-y divide-black/5">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="w-28 flex-none text-sm text-ink-muted">{item.date}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={clsx(
                      "inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                      tagStyles[item.tag]
                    )}
                  >
                    {item.tag}
                  </span>
                  <span className="text-sm font-medium text-ink">{item.title}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const tagStyles: Record<string, string> = {
  MILESTONE: "bg-brand-blue/10 text-brand-blue",
  TECH: "bg-brand-orange/10 text-brand-orange",
  UPCOMING: "bg-ink-muted/10 text-ink-muted",
};

export function NewsPreview() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading eyebrow={t.news.eyebrow} title={t.news.title} />

        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-2 rounded-xl bg-surface-subtle px-4 py-3 text-xs text-ink-muted">
          <Info size={14} className="mt-0.5 flex-none" />
          <span>{t.news.placeholderNotice}</span>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-black/5">
          {t.news.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="w-28 flex-none text-sm text-ink-muted">{item.date}</span>
              <span
                className={clsx(
                  "inline-flex w-fit flex-none items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                  tagStyles[item.tag]
                )}
              >
                {item.tag}
              </span>
              <span className="text-sm font-medium text-ink">{item.title}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/news" variant="text">
            {t.news.cta} →
          </Button>
        </div>
      </Container>
    </section>
  );
}

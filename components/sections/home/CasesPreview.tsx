"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlaceholderLogo } from "@/components/ui/PlaceholderLogo";

export function CasesPreview() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-subtle py-24">
      <Container>
        <SectionHeading
          eyebrow={t.cases.eyebrow}
          title={t.cases.title}
          description={t.cases.description}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="h-full">
              <h3 className="font-heading text-lg font-semibold text-ink">
                {t.cases.narrativeTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {t.cases.narrativeText}
              </p>

              <div className="mt-6 rounded-xl border border-black/5 bg-surface-subtle p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-ink-muted">
                    {t.cases.dataPanelLabel}
                  </p>
                  <Badge tone="neutral">{t.common.placeholderNotice}</Badge>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {t.cases.dataPanelMetrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="font-heading text-xl font-bold text-brand-blue">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs text-ink-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-2"
          >
            {/* TODO: 替换为真实数据,数据来源需项目团队确认 */}
            <Card className="flex h-full flex-col justify-center">
              <p className="text-xs font-medium text-ink-muted">{t.cases.statsTitle}</p>
              <div className="mt-4 space-y-4">
                {t.cases.stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between border-b border-black/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-ink-muted">{stat.label}</span>
                    <span className="font-heading text-lg font-bold text-brand-orange-deep">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <p className="text-center text-xs font-medium uppercase tracking-wide text-ink-muted">
            {t.cases.partnersTitle}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <PlaceholderLogo key={i} />
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-ink-muted">{t.cases.partnersNote}</p>
        </div>

        <div className="mt-12 text-center">
          <Button href="/cases" variant="secondary">
            {t.cases.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}

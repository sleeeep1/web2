"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// 示意柱状图数据,非真实任务记录,仅用于演示数据面板样式
const illustrativeBars = [22, 35, 48, 58, 72, 88];

export function DataPanel() {
  const { t } = useTranslation();
  const cp = t.casesPage;

  return (
    <section className="bg-surface-subtle py-20">
      <Container>
        <Card className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-heading text-lg font-semibold text-ink">
              {cp.dataPanelTitle}
            </h3>
            <Badge tone="neutral">{cp.dataPanelBadge}</Badge>
          </div>
          <p className="mt-1 text-xs text-ink-muted">{cp.dataPanelNote}</p>

          <div className="mt-8 flex h-40 items-end gap-3">
            {illustrativeBars.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-brand-blue"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-ink-muted">{cp.chartLabel}</p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/5 pt-6">
            {cp.dataPanelMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-heading text-xl font-bold text-brand-blue">{metric.value}</p>
                <p className="mt-1 text-xs text-ink-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}

"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function TechnicalIntro() {
  const { t } = useTranslation();
  const tp = t.technicalPage;

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
              {tp.gradeProgressionLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tp.gradeProgression.map((grade, index) => (
                <Badge key={grade} tone={index === 1 ? "brand" : "neutral"}>
                  {grade}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
              {tp.taskChainLabel}
            </p>
            <ol className="mt-4 space-y-3">
              {tp.taskChain.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-ink-muted">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-orange/10 text-xs font-semibold text-brand-orange-deep">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

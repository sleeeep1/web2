"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function TheoryFoundation() {
  const { t } = useTranslation();
  const tp = t.technicalPage;

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            {tp.theorySectionTitle}
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {tp.theories.map((theory) => (
            <Card key={theory.name}>
              <h3 className="font-heading text-base font-semibold text-brand-blue">
                {theory.name}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{theory.description}</p>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-muted">
          {tp.theoryDisclaimer}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-ink-muted">
          {t.techRoute.academicSupport}
        </p>
      </Container>
    </section>
  );
}

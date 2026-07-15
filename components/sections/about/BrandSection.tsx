"use client";

import zh from "@/content/zh.json";
import en from "@/content/en.json";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/ui/Logo";

export function BrandSection() {
  const { t } = useTranslation();
  const ap = t.aboutPage;

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            {ap.brandTitle}
          </h2>
          <p className="mt-3 text-sm text-ink-muted">{ap.brandDescription}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          <Card className="flex flex-col items-center gap-4 py-10 text-center">
            <Logo size={64} />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                {ap.brandZhLabel}
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-ink">
                {zh.meta.siteName}
              </p>
            </div>
          </Card>
          <Card className="flex flex-col items-center gap-4 py-10 text-center">
            <Logo size={64} />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                {ap.brandEnLabel}
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-ink">
                {en.meta.siteName}
              </p>
            </div>
          </Card>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-muted">
          {ap.brandNote}
        </p>
      </Container>
    </section>
  );
}

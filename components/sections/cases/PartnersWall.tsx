"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { PlaceholderLogo } from "@/components/ui/PlaceholderLogo";

export function PartnersWall() {
  const { t } = useTranslation();
  const cp = t.casesPage;

  return (
    <section className="bg-surface-subtle py-20">
      <Container>
        <p className="text-center text-xs font-medium uppercase tracking-wide text-ink-muted">
          {cp.partnersTitle}
        </p>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <PlaceholderLogo key={index} />
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink-muted">{cp.partnersNote}</p>
      </Container>
    </section>
  );
}

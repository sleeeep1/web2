"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export function LegalPlaceholder({ titleKey }: { titleKey: "privacyTitle" | "termsTitle" }) {
  const { t } = useTranslation();
  const lp = t.legalPlaceholder;

  return (
    <>
      <PageHero eyebrow={lp.eyebrow} title={lp[titleKey]} />
      <Container className="py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-surface-subtle p-8 text-center text-sm text-ink-muted">
          {lp.notice}
        </div>
      </Container>
    </>
  );
}

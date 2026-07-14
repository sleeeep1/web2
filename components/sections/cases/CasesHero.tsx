"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";

export function CasesHero() {
  const { t } = useTranslation();

  return (
    <PageHero
      eyebrow={t.casesPage.heroEyebrow}
      title={t.casesPage.heroTitle}
      description={t.casesPage.heroDescription}
    />
  );
}

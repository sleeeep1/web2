"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";

export function TechnicalHero() {
  const { t } = useTranslation();

  return (
    <PageHero
      eyebrow={t.technicalPage.heroEyebrow}
      title={t.technicalPage.heroTitle}
      description={t.technicalPage.heroDescription}
    />
  );
}

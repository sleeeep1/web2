"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";

export function SolutionsHero() {
  const { t } = useTranslation();

  return (
    <PageHero
      eyebrow={t.solutionsPage.heroEyebrow}
      title={t.solutionsPage.heroTitle}
      description={t.solutionsPage.heroDescription}
    />
  );
}

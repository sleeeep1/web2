"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";

export function FeaturesHero() {
  const { t } = useTranslation();

  return (
    <PageHero
      eyebrow={t.featuresPage.heroEyebrow}
      title={t.featuresPage.heroTitle}
      description={t.featuresPage.heroDescription}
    />
  );
}

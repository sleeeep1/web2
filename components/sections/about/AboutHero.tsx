"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <PageHero
      eyebrow={t.aboutPage.heroEyebrow}
      title={t.aboutPage.heroTitle}
      description={t.aboutPage.heroDescription}
    />
  );
}

"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";

export function NewsHero() {
  const { t } = useTranslation();

  return (
    <PageHero
      eyebrow={t.newsPage.heroEyebrow}
      title={t.newsPage.heroTitle}
      description={t.newsPage.heroDescription}
    />
  );
}

"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { PageHero } from "@/components/ui/PageHero";

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <PageHero
      eyebrow={t.contactPage.heroEyebrow}
      title={t.contactPage.heroTitle}
      description={t.contactPage.heroDescription}
    />
  );
}

"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { CtaBanner } from "@/components/ui/CtaBanner";

export function AboutCta() {
  const { t } = useTranslation();
  const ap = t.aboutPage;

  return (
    <CtaBanner
      title={ap.ctaTitle}
      description={ap.ctaDescription}
      primaryLabel={ap.ctaPrimary}
      primaryHref="/solutions"
      secondaryLabel={ap.ctaSecondary}
      secondaryHref="/contact"
    />
  );
}

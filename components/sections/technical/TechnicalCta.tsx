"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { CtaBanner } from "@/components/ui/CtaBanner";

export function TechnicalCta() {
  const { t } = useTranslation();
  const tp = t.technicalPage;

  return (
    <CtaBanner
      title={tp.ctaTitle}
      description={tp.ctaDescription}
      primaryLabel={tp.ctaPrimary}
      primaryHref="/solutions"
      secondaryLabel={tp.ctaSecondary}
      secondaryHref="/contact"
    />
  );
}

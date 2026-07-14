"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { CtaBanner } from "@/components/ui/CtaBanner";

export function FeaturesCta() {
  const { t } = useTranslation();
  const fp = t.featuresPage;

  return (
    <CtaBanner
      title={fp.ctaTitle}
      description={fp.ctaDescription}
      primaryLabel={fp.cta}
      primaryHref="/technical"
    />
  );
}

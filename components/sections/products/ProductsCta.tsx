"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { CtaBanner } from "@/components/ui/CtaBanner";

export function ProductsCta() {
  const { t } = useTranslation();
  const pp = t.productsPage;

  return (
    <CtaBanner
      title={pp.ctaTitle}
      description={pp.ctaDescription}
      primaryLabel={pp.ctaPrimary}
      primaryHref="/solutions"
      secondaryLabel={pp.ctaSecondary}
      secondaryHref="/contact"
    />
  );
}

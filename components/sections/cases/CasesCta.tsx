"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { CtaBanner } from "@/components/ui/CtaBanner";

export function CasesCta() {
  const { t } = useTranslation();
  const cp = t.casesPage;

  return (
    <CtaBanner
      title={cp.ctaTitle}
      description={cp.ctaDescription}
      primaryLabel={cp.ctaPrimary}
      primaryHref="/contact"
      secondaryLabel={cp.ctaSecondary}
      secondaryHref="/solutions"
    />
  );
}

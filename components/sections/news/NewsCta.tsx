"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { CtaBanner } from "@/components/ui/CtaBanner";

export function NewsCta() {
  const { t } = useTranslation();
  const np = t.newsPage;

  return (
    <CtaBanner
      title={np.ctaTitle}
      description={np.ctaDescription}
      primaryLabel={np.cta}
      primaryHref="/contact"
    />
  );
}

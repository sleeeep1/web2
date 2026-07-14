"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function LanguageToggle({ className }: { className?: string }) {
  const { t, toggleLocale } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={
        "rounded-full border border-black/10 px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand-blue/40 hover:text-brand-blue " +
        (className ?? "")
      }
      aria-label="Switch language"
    >
      {t.nav.languageToggle}
    </button>
  );
}

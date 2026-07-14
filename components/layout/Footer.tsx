"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-surface-subtle">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            {/* TODO: 待替换为正式商标图(中英文双语版本待项目团队提供) */}
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue font-heading text-sm font-bold text-white">
                创
              </span>
              <span className="font-heading text-base font-semibold text-ink">
                {t.meta.siteName}
              </span>
            </div>
            <p className="text-sm text-ink-muted">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-ink-muted">
            <Link href="/privacy" className="hover:text-brand-blue">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="hover:text-brand-blue">
              {t.footer.termsOfService}
            </Link>
            <Link href="/solutions" className="hover:text-brand-blue">
              {t.nav.solutions}
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-black/5 pt-6 text-xs text-ink-muted">
          <p>{t.footer.partners}</p>
          {/* TODO: ICP 备案号待项目团队提供,当前为占位 */}
          <p>{t.footer.icpPlaceholder}</p>
          <p>{t.footer.copyright.replace("{year}", String(year))}</p>
        </div>
      </Container>
    </footer>
  );
}

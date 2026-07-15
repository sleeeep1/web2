"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="mb-3 flex items-center gap-2">
              <Logo size={32} />
              <span className="font-heading text-base font-semibold text-white">
                {t.meta.siteName}
              </span>
            </div>
            <p className="text-sm text-white/60">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-brand-orange">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="hover:text-brand-orange">
              {t.footer.termsOfService}
            </Link>
            <Link href="/solutions" className="hover:text-brand-orange">
              {t.nav.solutions}
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>{t.footer.partners}</p>
          {/* TODO: ICP 备案号待项目团队提供,当前为占位 */}
          <p>{t.footer.icpPlaceholder}</p>
          <p>{t.footer.copyright.replace("{year}", String(year))}</p>
        </div>
      </Container>
    </footer>
  );
}

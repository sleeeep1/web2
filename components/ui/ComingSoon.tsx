"use client";

import { useTranslation, type Dictionary } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

type NavKey = keyof Dictionary["nav"];

/**
 * 路由占位页面,后续批次会替换为该模块的正式 section 组件。
 */
export function ComingSoon({ navKey }: { navKey: NavKey }) {
  const { t } = useTranslation();

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {t.nav[navKey]}
      </h1>
      <p className="mt-4 text-base text-ink-muted">{t.common.comingSoon}</p>
    </Container>
  );
}

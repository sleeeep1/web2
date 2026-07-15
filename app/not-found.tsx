"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-heading text-6xl font-bold text-brand-blue">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-ink">{t.notFound.title}</h1>
      <p className="mt-3 text-sm text-ink-muted">{t.notFound.description}</p>
      <Button href="/" className="mt-8">
        {t.notFound.cta}
      </Button>
    </Container>
  );
}

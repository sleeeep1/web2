"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export function FaqSection() {
  const { t, pricing } = useTranslation();
  const sp = t.solutionsPage;

  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-center font-heading text-2xl font-semibold text-ink sm:text-3xl">
          {sp.faqTitle}
        </h2>
        <div className="mx-auto mt-10 max-w-2xl">
          <FaqAccordion items={pricing.faq} />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-muted">{sp.faqNote}</p>
      </Container>
    </section>
  );
}

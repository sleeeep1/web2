"use client";

import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

export function MissionSection() {
  const { t } = useTranslation();
  const ap = t.aboutPage;

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            {ap.missionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{ap.missionText}</p>
        </div>
      </Container>
    </section>
  );
}

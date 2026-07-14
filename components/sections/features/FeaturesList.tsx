"use client";

import { Target, Activity, Hexagon, Brain, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FeatureDetailRow } from "@/components/sections/features/FeatureDetailRow";

const icons = [Target, Activity, Hexagon, Brain, Sparkles];

export function FeaturesList() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-10">
      <Container>
        <div className="mx-auto max-w-4xl divide-y divide-black/5">
          {t.featuresPage.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <FeatureDetailRow
                key={item.id}
                icon={<Icon size={32} />}
                title={item.title}
                description={item.description}
                mapsTo={item.mapsTo}
                highlights={item.highlights}
                illustrationLabel={t.featuresPage.illustrationLabel}
                accent={index % 2 === 0 ? "blue" : "orange"}
                reversed={index % 2 === 1}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

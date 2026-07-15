"use client";

import { motion } from "framer-motion";
import { Compass, Activity, TrendingUp, Brain, Sparkles, Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

const icons = [Compass, Activity, TrendingUp, Brain, Sparkles];

export function StageTimeline() {
  const { t } = useTranslation();
  const stages = t.techRoute.nodes;
  const featuresMap: Record<string, readonly string[]> = t.technicalPage.stageFeatures;

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          {stages.map((stage, index) => {
            const Icon = icons[index];
            const features = featuresMap[stage.id];
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative flex gap-6 pb-14 last:pb-0"
              >
                <div className="flex flex-none flex-col items-center">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-blue text-white">
                    <Icon size={20} />
                  </span>
                  {index < stages.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-black/10" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                    {t.technicalPage.stageLabel} {index + 1}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {stage.detail}
                  </p>
                  {features && (
                    <ul className="mt-4 space-y-2">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-ink">
                          <Check size={15} className="mt-0.5 flex-none text-brand-blue" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

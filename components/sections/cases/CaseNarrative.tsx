"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function CaseNarrative() {
  const { t } = useTranslation();
  const cp = t.casesPage;

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
              {cp.narrativeTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{cp.narrativeText}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
              {cp.processTitle}
            </p>
            <div className="mt-4 space-y-3">
              {cp.processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="flex items-start gap-3 p-4">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">{step.title}</span>
                      <span className="mt-0.5 block text-xs text-ink-muted">
                        {step.description}
                      </span>
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

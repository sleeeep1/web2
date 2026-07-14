"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { DimensionCard } from "@/components/ui/DimensionCard";

export function DimensionsSection() {
  const { t } = useTranslation();
  const pp = t.productsPage;

  return (
    <section className="bg-surface-subtle py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            {pp.dimensionsTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">{pp.dimensionsIntro}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pp.dimensions.map((dimension, index) => (
            <motion.div
              key={dimension.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <DimensionCard
                index={index + 1}
                title={dimension.title}
                note={"note" in dimension ? dimension.note : undefined}
                description={dimension.description}
                indicators={dimension.indicators}
                accent={index % 2 === 0 ? "blue" : "orange"}
              />
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-muted">
          {pp.dimensionsDisclaimer}
        </p>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { HeroBackground } from "@/components/ui/HeroBackground";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white">
      <HeroBackground />

      <Container className="relative py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>{t.hero.badge}</Badge>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {t.hero.titlePrefix}
            <span className="text-brand-orange">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-6 text-lg text-ink-muted sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/products" variant="text" size="lg">
              {t.hero.ctaSecondary} →
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {t.hero.stats.map((stat) => {
            const numeric = Number(stat.value);
            const isNumeric = !Number.isNaN(numeric);
            return (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-3xl font-bold text-brand-blue sm:text-4xl">
                  {isNumeric ? <StatCounter value={numeric} /> : stat.value}
                </dd>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            );
          })}
        </motion.dl>
      </Container>
    </section>
  );
}

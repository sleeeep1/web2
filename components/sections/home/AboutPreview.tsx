"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-subtle py-24">
      <Container>
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {t.about.teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <GraduationCap size={22} />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                  {team.name}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{team.affiliation}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-2 rounded-xl border border-brand-blue/20 bg-white px-4 py-3 text-sm text-ink-muted">
          <ShieldCheck size={16} className="mt-0.5 flex-none text-brand-blue" />
          <span>
            <Link href="/#security" className="text-brand-blue hover:underline">
              {t.about.securityNote}
            </Link>
          </span>
        </div>

        <div className="mt-10 text-center">
          <Button href="/about" variant="secondary">
            {t.about.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}

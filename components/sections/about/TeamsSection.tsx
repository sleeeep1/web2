"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function TeamsSection() {
  const { t } = useTranslation();
  const ap = t.aboutPage;

  return (
    <section className="bg-surface-subtle py-20">
      <Container>
        <h2 className="text-center font-heading text-2xl font-semibold text-ink sm:text-3xl">
          {ap.teamsTitle}
        </h2>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {ap.teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <GraduationCap size={22} />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                  {team.name}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{team.affiliation}</p>
                <p className="mt-3 text-xs text-ink-muted">{team.focus}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-muted">
          {ap.teamsNote}
        </p>
      </Container>
    </section>
  );
}

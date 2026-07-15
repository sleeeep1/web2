import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { TechnicalHero } from "@/components/sections/technical/TechnicalHero";
import { TechnicalIntro } from "@/components/sections/technical/TechnicalIntro";
import { StageTimeline } from "@/components/sections/technical/StageTimeline";
import { GovernanceCallout } from "@/components/sections/technical/GovernanceCallout";
import { TheoryFoundation } from "@/components/sections/technical/TheoryFoundation";
import { TechnicalCta } from "@/components/sections/technical/TechnicalCta";

export const metadata: Metadata = {
  title: zh.nav.technical,
  description: zh.technicalPage.heroDescription,
};

export default function TechnicalPage() {
  return (
    <>
      <TechnicalHero />
      <TechnicalIntro />
      <StageTimeline />
      <GovernanceCallout />
      <TheoryFoundation />
      <TechnicalCta />
    </>
  );
}

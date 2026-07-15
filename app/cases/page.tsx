import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { CasesHero } from "@/components/sections/cases/CasesHero";
import { CaseNarrative } from "@/components/sections/cases/CaseNarrative";
import { DataPanel } from "@/components/sections/cases/DataPanel";
import { CaseStats } from "@/components/sections/cases/CaseStats";
import { PartnersWall } from "@/components/sections/cases/PartnersWall";
import { CasesCta } from "@/components/sections/cases/CasesCta";

export const metadata: Metadata = {
  title: zh.nav.cases,
  description: zh.casesPage.heroDescription,
};

export default function CasesPage() {
  return (
    <>
      <CasesHero />
      <CaseNarrative />
      <DataPanel />
      <CaseStats />
      <PartnersWall />
      <CasesCta />
    </>
  );
}

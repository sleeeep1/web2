import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionSection } from "@/components/sections/about/MissionSection";
import { TeamsSection } from "@/components/sections/about/TeamsSection";
import { BrandSection } from "@/components/sections/about/BrandSection";
import { SecurityReaffirm } from "@/components/sections/about/SecurityReaffirm";
import { AboutCta } from "@/components/sections/about/AboutCta";

export const metadata: Metadata = {
  title: zh.nav.about,
  description: zh.aboutPage.heroDescription,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TeamsSection />
      <BrandSection />
      <SecurityReaffirm />
      <AboutCta />
    </>
  );
}

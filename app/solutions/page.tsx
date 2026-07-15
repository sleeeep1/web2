import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { PricingGrid } from "@/components/sections/solutions/PricingGrid";
import { FaqSection } from "@/components/sections/solutions/FaqSection";

export const metadata: Metadata = {
  title: zh.nav.solutions,
  description: zh.solutionsPage.heroDescription,
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <PricingGrid />
      <FaqSection />
    </>
  );
}

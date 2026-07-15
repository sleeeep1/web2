import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { FeaturesHero } from "@/components/sections/features/FeaturesHero";
import { FeaturesList } from "@/components/sections/features/FeaturesList";
import { FeaturesCta } from "@/components/sections/features/FeaturesCta";

export const metadata: Metadata = {
  title: zh.nav.features,
  description: zh.featuresPage.heroDescription,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesList />
      <FeaturesCta />
    </>
  );
}

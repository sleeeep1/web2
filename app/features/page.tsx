import { FeaturesHero } from "@/components/sections/features/FeaturesHero";
import { FeaturesList } from "@/components/sections/features/FeaturesList";
import { FeaturesCta } from "@/components/sections/features/FeaturesCta";

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesList />
      <FeaturesCta />
    </>
  );
}

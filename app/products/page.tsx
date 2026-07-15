import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { ProductsHero } from "@/components/sections/products/ProductsHero";
import { AudienceSection } from "@/components/sections/products/AudienceSection";
import { DimensionsSection } from "@/components/sections/products/DimensionsSection";
import { WhitepaperSection } from "@/components/sections/products/WhitepaperSection";
import { ProductsCta } from "@/components/sections/products/ProductsCta";

export const metadata: Metadata = {
  title: zh.nav.products,
  description: zh.productsPage.heroDescription,
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <AudienceSection />
      <DimensionsSection />
      <WhitepaperSection />
      <ProductsCta />
    </>
  );
}

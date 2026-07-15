import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { NewsHero } from "@/components/sections/news/NewsHero";
import { NewsFilterList } from "@/components/sections/news/NewsFilterList";
import { NewsCta } from "@/components/sections/news/NewsCta";

export const metadata: Metadata = {
  title: zh.nav.news,
  description: zh.newsPage.heroDescription,
};

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsFilterList />
      <NewsCta />
    </>
  );
}

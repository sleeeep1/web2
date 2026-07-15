import { NewsHero } from "@/components/sections/news/NewsHero";
import { NewsFilterList } from "@/components/sections/news/NewsFilterList";
import { NewsCta } from "@/components/sections/news/NewsCta";

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsFilterList />
      <NewsCta />
    </>
  );
}

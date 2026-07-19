import type { MetadataRoute } from "next";
import { siteUrl as baseUrl } from "@/lib/site-url";

const routes = [
  "",
  "/products",
  "/technical",
  "/features",
  "/cases",
  "/news",
  "/about",
  "/contact",
  "/solutions",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

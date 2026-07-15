import type { MetadataRoute } from "next";

// TODO: 替换为正式上线域名
const baseUrl = "https://example.com";

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

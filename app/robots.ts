import type { MetadataRoute } from "next";

// TODO: 替换为正式上线域名
const baseUrl = "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

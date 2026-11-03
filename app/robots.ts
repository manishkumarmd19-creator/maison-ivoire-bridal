import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://maisonivoire.in/sitemap.xml",
    host: "https://maisonivoire.in",
  };
}

import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/components/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: new URL(page.path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8
  }));
}

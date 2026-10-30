import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Bumped when page content changes; a literal keeps the route statically prerendered. */
const LAST_MODIFIED = "2026-10-30";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

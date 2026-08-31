import type { MetadataRoute } from "next";
import { isDemo, siteUrl } from "@/lib/site";

// A demo re-hosts IBM Peru's own name, history, and photos. Indexed, it would
// compete with ibmperu.org for their own name.
export default function robots(): MetadataRoute.Robots {
  if (isDemo) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

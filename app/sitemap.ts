import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

import { getResources } from "@/lib/resources";

const siteUrl = "https://www.seogirl.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/apps", "/blog", "/research", "/workbooks", "/case-studies", "/case-studies/post-update-recovery", "/case-studies/international-lead-growth", "/case-studies/iskl-admissions-concept", "/case-studies/christmas-travel-concept"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
  const posts = getAllPosts().map(({ slug }) => ({
    url: `${siteUrl}/blog/${slug}`,
  }));

  const resources = (["research", "workbooks"] as const).flatMap(kind => getResources(kind).map(({ slug }) => ({ url: `${siteUrl}/${kind}/${slug}` })));
  const tools = getResources("research").flatMap(entry => entry.tool ? [{ url: `${siteUrl}/apps/${entry.tool.slug}` }] : []);
  return [...pages, ...posts, ...resources, ...tools];
}


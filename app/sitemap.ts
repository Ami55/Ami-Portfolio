import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://www.seogirl.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/apps", "/blog"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
  const posts = getAllPosts().map(({ slug }) => ({
    url: `${siteUrl}/blog/${slug}`,
  }));

  return [...pages, ...posts];
}

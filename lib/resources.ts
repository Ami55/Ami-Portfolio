import fs from "node:fs";
import path from "node:path";

export type ResourceKind = "research" | "workbooks";
export type Resource = {
  slug: string; title: string; status: "draft" | "published";
  publishedDate: string; topic: string; description: string;
  pages: number | null; pdf: string | null; cover: string | null;
  stats: { value: string; label: string }[];
  sections: { heading: string; body: string }[];
  methodology: string; limitations: string;
  tool?: { slug: string; name: string; description: string };
};
export function getResources(kind: ResourceKind): Resource[] {
  const directory = path.join(process.cwd(), "content", kind);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter(name => /^[a-z0-9]+(?:-[a-z0-9]+)*\.json$/.test(name))
    .map(name => ({ ...JSON.parse(fs.readFileSync(path.join(directory, name), "utf8")), slug: name.slice(0, -5) } as Resource))
    .filter(entry => entry.status === "published")
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate) || a.title.localeCompare(b.title));
}
export function getResource(kind: ResourceKind, slug: string) {
  return getResources(kind).find(entry => entry.slug === slug);
}


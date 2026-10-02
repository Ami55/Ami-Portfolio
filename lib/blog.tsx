import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { parse as parseYaml } from "yaml";

export type BlogPost = {
  number: number;
  title: string;
  metaTitle: string;
  description: string;
  slug: string;
  targetQuery: string;
  wordCount: number;
  category: string;
  date: string;
  dateISO: string;
  body: string;
  headings: { id: string; text: string }[];
};

const blogDir = path.join(process.cwd(), "content", "blog");

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getAllPosts(): BlogPost[] {
  const posts = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md")).map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
    if (!match) throw new Error(`Missing blog metadata: ${file}`);
    const fields = parseYaml(match[1]);
    if (fields.status !== "published") return null;
    const slug = file.slice(0, -3);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid blog URL: ${file}`);
    const dateISO = String(fields.publishedDate || "");
    const date = new Date(`${dateISO}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== dateISO) {
      throw new Error(`Invalid publication date: ${file}`);
    }
    const title = String(fields.title || "").trim();
    const description = String(fields.description || "").trim();
    if (!title || !description) throw new Error(`Missing title or description: ${file}`);
    const body = match[2].trim();
    return {
      number: 0,
      title,
      metaTitle: String(fields.metaTitle || title),
      description,
      slug,
      targetQuery: String(fields.targetQuery || "SEO strategy"),
      wordCount: Number(fields.wordCount) || body.split(/\s+/).length,
      category: String(fields.category || "SEMANTIC SEO"),
      dateISO,
      date: new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(date),
      body,
      headings: [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => ({ text: match[1], id: slugify(match[1]) })),
    };
  }).filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO) || a.slug.localeCompare(b.slug));
  return posts.map((post, index) => ({ ...post, number: posts.length - index }));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function readingTime(post: BlogPost) {
  return `${Math.max(4, Math.ceil(post.wordCount / 210))} min read`;
}

export type RelatedApp = { name: string; url: string; description: string };

export function relatedAppFor(post: BlogPost): RelatedApp | null {
  const text = `${post.slug} ${post.title} ${post.targetQuery}`.toLowerCase();
  if (text.includes("sitemap")) return { name: "Sitemap Auditor", url: "https://seogirl-sitemap-auditor.vercel.app/", description: "Compare site inventory, sitemap coverage, crawling, and indexation to uncover missing pages." };
  if (text.includes("search intent") || text.includes("intent drift")) return { name: "Search Intent Drift Detector", url: "https://seogirl-search-intent-drift-detector.vercel.app/", description: "Compare changing search results and page intent to spot when content is quietly losing alignment with the SERP." };
  if (text.includes("clearer decision") || text.includes("seo data") || text.includes("dashboard")) return { name: "SemanticMapper; GSC SEO Dashboard", url: "https://seogirl-seo-dashboard.vercel.app/", description: "Classify URLs and turn Search Console metrics into category views that support clearer SEO decisions." };
  if (text.includes("information gain") || text.includes("first hand") || text.includes("first-hand") || text.includes("experience vs expertise")) return { name: "First-Hand Experience & Information-Gain Miner", url: "https://seogirl-first-hand-information-gain-miner.vercel.app/", description: "Turn generic content into an evidence-led plan built around original experience and verifiable information." };
  if (text.includes("expert content") || text.includes("expert quote") || text.includes("company knowledge")) return { name: "Expert Quote & Evidence Vault", url: "https://seogirl-expert-quote-evidence-vault.vercel.app/", description: "Capture expert contributions, evidence, source context, permissions, and review dates before useful knowledge disappears." };
  if (text.includes("query fan-out") || text.includes("query refinement") || text.includes("follow-up question")) return { name: "Query Fan-out Explorer", url: "https://seogirl-query-fanout-ai-coverage-auditor.vercel.app/", description: "Explore how one search expands into sub-queries, sources, entities, and content opportunities." };
  if (text.includes("citation") || text.includes("llm readability")) return { name: "LLM Citation Tracker", url: "https://seogirl-llm-citation-tracker.vercel.app/", description: "Track brand citations, sources, competitor coverage, and opportunities across major LLMs." };
  if (text.includes("schema")) return { name: "Schema Entity Markup Auditor", url: "https://seogirl-schema-entity-markup-auditor.vercel.app/", description: "Review entity markup, structured relationships, and schema gaps that weaken machine understanding." };
  if (text.includes("named entity") || text.includes("part of speech") || text.includes("sentiment") || text.includes("natural language") || text.includes("nlp")) return { name: "Named Entity Recognition, Salience, Sentiment & N-Gram Collocation Engine", url: "https://seogirl-natural-language-inspector.vercel.app/", description: "Inspect entities, salience, sentiment, language structure, and phrase patterns in one workspace." };
  if (text.includes("entity") || text.includes("semantic") || text.includes("topical authority") || text.includes("knowledge graph")) return { name: "Topical Authority Mapping & Entity SEO Diagnostics Engine", url: "https://seogirl-semantic-content-mapper.vercel.app/", description: "Map entities, topical relationships, semantic gaps, and internal-link opportunities across a site." };
  if (text.includes("ai search") || text.includes("rag") || text.includes("geo") || text.includes("e-e-a-t") || text.includes("eeat")) return { name: "Search & LLM Citations Research Platform", url: "https://seogirl-ai-visibility-auditor.vercel.app/", description: "Research brand entities, retrieval readiness, authority signals, and AI-search citation opportunities." };
  return null;
}

export function inlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target={link[2].startsWith("http") ? "_blank" : undefined} rel="noreferrer">{link[1]}</a>;
    return part;
  });
}

type Block = { type: "heading" | "paragraph" | "image" | "quote" | "list"; text?: string; level?: number; alt?: string; src?: string; items?: string[] };

export function parseBlocks(body: string) {
  const lines = body.split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  const flush = () => {
    if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") });
    if (list.length) blocks.push({ type: "list", items: [...list] });
    paragraph = []; list = [];
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    const item = line.match(/^[-*]\s+(.+)$/);
    if (image) { flush(); blocks.push({ type: "image", alt: image[1], src: `/blog/images/${path.basename(image[2])}` }); }
    else if (heading) { flush(); blocks.push({ type: "heading", level: heading[1].length, text: heading[2] }); }
    else if (line.startsWith("> ")) { flush(); blocks.push({ type: "quote", text: line.slice(2) }); }
    else if (item) { if (paragraph.length) flush(); list.push(item[1]); }
    else { if (list.length) flush(); paragraph.push(line); }
  }
  flush();
  return blocks;
}

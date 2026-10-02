import { collection, config, fields } from "@keystatic/core";

const cloudProject = process.env.NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT;

export default config({
  storage: process.env.NODE_ENV === "development" && !cloudProject
    ? { kind: "local" }
    : { kind: "cloud" },
  cloud: { project: cloudProject || "seo-girl/portfolio" },
  ui: { brand: { name: "SEO Girl" } },
  collections: {
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "status", "publishedDate"],
      schema: {
        title: fields.slug({
          name: { label: "Article title", validation: { isRequired: true } },
          slug: {
            label: "URL slug",
            description: "Appears after /blog/. Keep existing URLs unchanged to preserve links.",
            validation: { pattern: { regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/, message: "Use lowercase letters, numbers, and hyphens." } },
          },
        }),
        status: fields.select({
          label: "Publication status",
          description: "Drafts stay off the website. Published posts go live after Vercel finishes deploying. Your GitHub repository is public, so saved drafts are visible there.",
          options: [{ label: "Draft", value: "draft" }, { label: "Published", value: "published" }],
          defaultValue: "draft",
        }),
        publishedDate: fields.date({ label: "Publication date", validation: { isRequired: true }, description: "The date shown on the article. This does not schedule publication." }),
        metaTitle: fields.text({ label: "SEO title", description: "Leave blank to use the article title." }),
        description: fields.text({ label: "Description", multiline: true, description: "Used in search metadata, article cards, and the article introduction.", validation: { isRequired: true } }),
        category: fields.select({
          label: "Category",
          options: ["ENTITY SEO", "AI VISIBILITY", "SEMANTIC SEO", "TECHNICAL SEO", "NLP", "E-E-A-T", "FIELD NOTES", "PERSONAL NOTES", "INDUSTRY NOTES", "APP ORIGINS", "EXPERIENCE & EXPERTISE"].map((value) => ({ label: value, value })),
          defaultValue: "SEMANTIC SEO",
        }),
        targetQuery: fields.text({ label: "Main topic or search query", description: "Also used in the FAQ heading when the article has a Frequently Asked Questions section." }),
        wordCount: fields.integer({ label: "Reading-time word count (optional)", description: "Leave empty to calculate from the article. Existing articles keep their previous estimate.", validation: { min: 0 } }),
        content: fields.markdoc({
          label: "Article body",
          extension: "md",
          options: {
            heading: [2, 3], bold: true, code: true, link: true,
            blockquote: true, unorderedList: true,
            italic: true, strikethrough: true, orderedList: true,
            table: true, divider: true, codeBlock: true,
            image: { directory: "public/blog/images", publicPath: "/blog/images/", schema: { alt: fields.text({ label: "Image description (alt text)", validation: { isRequired: true } }) } },
          },
        }),
      },
    }),
  },
});

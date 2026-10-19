export const SITE_URL = "https://www.seogirl.ca";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function serializeSchema(value: unknown) {
  // Prevent CMS text from closing the JSON-LD script element.
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Ami Saeednia",
  alternateName: "Ameneh Saeednia",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/ami-saeednia-profile-bw.png`,
  jobTitle: "SEO / GEO Strategist",
  sameAs: [
    "https://www.linkedin.com/in/ameneh-saeednia/",
    "https://orcid.org/0000-0002-8812-2306",
    "https://protectedbyalfie.com/team/ameneh-saeednia",
  ],
};

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    {
      "@type": "WebSite", "@id": WEBSITE_ID,
      url: SITE_URL, name: "SEO Girl", alternateName: "SEOGirl",
      inLanguage: "en", publisher: { "@id": PERSON_ID },
    },
  ],
};

export const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Ami Saeednia",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { ...person },
};

type ArticleData = {
  slug: string; title: string; description: string;
  dateISO: string; category: string;
};

export function articleSchema(post: ArticleData, images: string[] = []) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": `${url}#article`,
        url, headline: post.title, description: post.description,
        datePublished: post.dateISO,
        // The CMS does not track modification dates; do not invent one.
        author: { ...person },
        publisher: { "@id": PERSON_ID },
        mainEntityOfPage: { "@id": `${url}#webpage` },
        isPartOf: { "@id": `${SITE_URL}/blog#blog` },
        articleSection: post.category, inLanguage: "en",
        ...(images.length ? { image: [...new Set(images)] } : {}),
      },
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url,
        name: post.title, isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": `${url}#article` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

export const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage", "@id": `${SITE_URL}/blog#webpage`,
      url: `${SITE_URL}/blog`, name: "SEO & AI Search Insights",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": `${SITE_URL}/blog#blog` },
    },
    {
      "@type": "Blog", "@id": `${SITE_URL}/blog#blog`,
      url: `${SITE_URL}/blog`, name: "SEO & AI Search Insights",
      author: { "@id": PERSON_ID }, publisher: { "@id": PERSON_ID },
      inLanguage: "en",
    },
  ],
};

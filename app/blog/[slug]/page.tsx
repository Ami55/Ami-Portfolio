import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { getAllPosts, getPost, inlineMarkdown, parseBlocks, readingTime, relatedAppFor } from "@/lib/blog";
import ArticleToc from "./article-toc";

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: post.metaTitle, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const posts = getAllPosts();
  const next = posts[(posts.findIndex((item) => item.slug === post.slug) + 1) % posts.length];
  const related = [...posts.filter((item) => item.slug !== post.slug && item.category === post.category), ...posts.filter((item) => item.slug !== post.slug && item.category !== post.category)].slice(0, 3);
  const relatedApp = relatedAppFor(post);
  const faqStart = post.body.search(/^## Frequently Asked Questions\s*$/m);
  const articleBody = faqStart >= 0 ? post.body.slice(0, faqStart) : post.body;
  const faqBody = faqStart >= 0 ? post.body.slice(faqStart).replace(/^## Frequently Asked Questions\s*/m, "") : "";
  const faqs = [...faqBody.matchAll(/\*\*([^*]+)\*\*\s*\n([\s\S]*?)(?=\n\s*\*\*[^*]+\*\*|$)/g)].map((match) => ({ question: match[1], answer: match[2].trim().replace(/\n+/g, " ") }));
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: post.title,
    description: post.description, datePublished: post.dateISO, dateModified: post.dateISO,
    author: { "@type": "Person", name: "Ami Saeednia", url: "https://www.linkedin.com/in/ameneh-saeednia/" },
  };
  const faqSchema = faqs.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;
  const tocHeadings = post.headings.filter((heading) => heading.text !== "Frequently Asked Questions").concat(faqs.length ? [{ id: "faq", text: "Frequently asked questions" }] : []);
  return <main>
    <header className="nav wrap"><Link className="logo" href="/">SEO<span>Girl</span></Link><nav><Link href="/#work">Selected Work</Link><Link href="/apps">Tools</Link><Link className="activeNav" href="/blog">Insights</Link><Link href="/about">About</Link></nav></header>
    <article className="articlePage">
      <header className="articleHero wrap">
        <div className="articleHeroKicker"><Link href="/blog"><ArrowLeft size={16}/> All insights</Link><span className="articleCategory">{post.category}</span></div>
        <h1>{post.title}</h1><p>{post.description}</p>
        <div className="articleByline"><div><b>AS</b><span><strong>Ami Saeednia</strong><small>SEO / GEO Strategist</small></span></div><div><span>{post.date}</span><span><Clock3 size={14}/>{readingTime(post)}</span></div></div>
      </header>
      <div className="articleBody wrap">
        <ArticleToc headings={tocHeadings}/>
        <div className="articleProse">
          {parseBlocks(articleBody).map((block, index) => {
            if (block.type === "heading") { const id = block.text!.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""); return block.level === 3 ? <h3 id={id} key={index}>{block.text}</h3> : <h2 id={id} key={index}>{block.text}</h2>; }
            if (block.type === "image") return <figure className="articleFigure" key={index}><Image src={block.src!} alt={block.alt!} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 720px"/><figcaption>{block.alt}</figcaption></figure>;
            if (block.type === "quote") return <blockquote key={index}>{inlineMarkdown(block.text!)}</blockquote>;
            if (block.type === "list") return <ul key={index}>{block.items!.map((item) => <li key={item}>{inlineMarkdown(item)}</li>)}</ul>;
            return <p key={index}>{inlineMarkdown(block.text!)}</p>;
          })}
          {faqs.length > 0 && <section className="articleFaq" id="faq"><span>FREQUENTLY ASKED QUESTIONS</span><h2>Questions about {post.targetQuery}</h2>{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}</summary><p>{inlineMarkdown(faq.answer)}</p></details>)}</section>}
          {relatedApp && <aside className="relatedTool"><div><span>RELATED SEO APP</span><h2>{relatedApp.name}</h2><p>{relatedApp.description}</p></div><a href={relatedApp.url} target="_blank" rel="noreferrer">Explore the live tool <ArrowUpRight size={17}/></a></aside>}
        </div>
      </div>
    </article>
    <section className="articleAuthor wrap" aria-label="About the author">
      <img src="/ami-saeednia-profile-bw.png" alt="Ami Saeednia"/>
      <div><span>WRITTEN BY</span><h2>Ami Saeednia</h2><strong>SEO / GEO Strategist · Search systems · AI visibility</strong><p>I turn technical SEO, entity strategy, content systems, and AI-search research into focused decisions and practical tools teams can use.</p><div><Link href="/about">About Ami <ArrowUpRight size={16}/></Link><a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a></div></div>
    </section>
    <section className="relatedInsights"><div className="wrap"><span className="mini">RELATED INSIGHTS</span><div className="relatedHeader"><h2>Continue exploring.</h2><Link href="/blog">View all insights →</Link></div><div className="relatedGrid">{related.map((item) => <article key={item.slug}><span className="articleCategory">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><Link href={`/blog/${item.slug}`}>Read article <ArrowUpRight size={16}/></Link></article>)}</div></div></section>
    <section className="nextArticle"><div className="wrap"><span>NEXT INSIGHT</span><h2>{next.title}</h2><Link href={`/blog/${next.slug}`}>Read next insight →</Link></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>{faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>} 
  </main>;
}

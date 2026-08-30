import Link from "next/link";
import { ArrowUpRight, Clock3, Sparkles } from "lucide-react";
import { getAllPosts, readingTime } from "@/lib/blog";
import BlogGrid from "./blog-grid";

export const metadata = { title: "SEO & AI Search Insights | Ami Saeednia", description: "Practical research on entity SEO, NLP, AI visibility, E-E-A-T, semantic search, and content systems." };

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.slug === "query-fan-out-explained") || posts[0];
  const articles = posts.filter((post) => post.slug !== featured.slug);
  return <main>
    <header className="nav wrap"><Link className="logo" href="/">SEO<span>Girl</span></Link><nav><Link href="/#work">Selected Work</Link><Link href="/apps">Tools</Link><Link className="activeNav" href="/blog">Insights</Link><Link href="/about">About</Link></nav></header>
    <section className="blogHero wrap"><div><span className="status"><i/> SEO STRATEGY × PRACTICAL RESEARCH</span><h1>Search thinking,<br/><em>made useful.</em></h1></div><p>Field notes on entity SEO, natural language processing, AI visibility, E-E-A-T, semantic systems, and the decisions behind sustainable search growth.</p></section>
    <section className="featuredArticle wrap"><div className="featureVisual" aria-hidden="true"><span>{String(featured.number).padStart(2,"0")}</span><Sparkles size={46}/><b>AI</b><div className="signalLines"><i/><i/><i/></div></div><article><span className="articleCategory">{featured.category}</span><h2>{featured.title}</h2><p>{featured.description}</p><div className="articleMeta"><span>{featured.date}</span><span><Clock3 size={14}/>{readingTime(featured)}</span></div><Link href={`/blog/${featured.slug}`}>Read the article <ArrowUpRight size={17}/></Link></article></section>
    <section className="blogIndex wrap"><div className="blogToolbar"><div><span className="mini">{posts.length} PUBLISHED INSIGHTS</span><h2>Ideas you can act on.</h2></div><div className="topicPills"><span>Entity SEO</span><span>NLP</span><span>AI visibility</span><span>E-E-A-T</span></div></div>
      <BlogGrid posts={articles.map((post) => ({ ...post, read: readingTime(post) }))}/>
    </section>
    <section className="blogCta"><div className="wrap"><span className="mini">NOTES WORTH KEEPING</span><h2>Clearer search decisions;<br/><em>shared regularly.</em></h2><p>No noise. Just practical observations about search systems, AI visibility, and content that earns attention.</p><a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noreferrer">Follow me on LinkedIn <ArrowUpRight size={17}/></a></div></section>
    <footer><div className="wrap"><div><span className="mini">AMI SAEEDNIA · SEO / GEO STRATEGIST</span><h2>Let’s build something<br/>search can understand.</h2></div><div className="footerLinks"><a href="mailto:ameneh.saeednia@gmail.com">ameneh.saeednia@gmail.com ↗</a><a href="https://www.linkedin.com/in/ameneh-saeednia/">LinkedIn ↗</a><Link href="/apps">App library ↗</Link></div></div></footer>
  </main>;
}

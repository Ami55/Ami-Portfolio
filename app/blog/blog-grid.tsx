"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3, Network, Search } from "lucide-react";
import { useState } from "react";

type Post = { number: number; slug: string; title: string; description: string; category: string; read: string; date: string };

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredPosts = normalizedQuery ? posts.filter((post) => `${post.title} ${post.description} ${post.category}`.toLocaleLowerCase().includes(normalizedQuery)) : posts;
  const visiblePosts = normalizedQuery || expanded ? filteredPosts : filteredPosts.slice(0, 6);
  return <>
    <div className="blogSearch">
      <Search size={20} aria-hidden="true"/>
      <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search insights, topics, or categories" aria-label="Search blog articles"/>
      {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear blog search">Clear</button>}
    </div>
    {normalizedQuery && <p className="blogSearchCount">{filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found</p>}
    <div className="articleGrid">{visiblePosts.map((post) => <article className="articleCard" key={post.slug}>
      <div className="articleCardTop"><span>{String(post.number).padStart(2,"0")}</span>{post.category === "ENTITY SEO" ? <Network size={21}/> : <Search size={21}/>}</div>
      <span className="articleCategory">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p>
      <div className="articleMeta"><span>{post.date}</span><span><Clock3 size={14}/>{post.read}</span></div>
      <Link href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16}/></Link>
    </article>)}</div>
    {filteredPosts.length === 0 && <div className="blogSearchEmpty"><Search size={28}/><h3>No matching insights</h3><p>Try a broader topic such as entity SEO, sitemaps, AI visibility, or field notes.</p></div>}
    {!normalizedQuery && posts.length > 6 && <div className="moreInsights"><button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>{expanded ? "Show fewer insights" : `See more insights · ${posts.length - 6}`}</button></div>}
  </>;
}

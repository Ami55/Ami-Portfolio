import Link from "next/link";
import type { ReactNode } from "react";
import { getResources, type Resource, type ResourceKind } from "@/lib/resources";
import s from "./resources.module.css";

export const labels = { research: "Research", workbooks: "Workbooks" };
export function ResourceShell({ kind, children }: { kind: ResourceKind; children: ReactNode }) {
  return <div className={s.shell}><header className={s.header}>
    <Link className={s.logo} href="/">SEO<span>Girl</span></Link>
    <nav className={s.nav} aria-label="Main navigation">{[["/", "Portfolio"], ["/case-studies", "Case studies"], ["/research", "Research"], ["/workbooks", "Workbooks"], ["/apps", "Tools"], ["/blog", "Insights"], ["/about", "About"]].map(([href, label]) => <Link key={href} href={href} aria-current={href === `/${kind}` ? "page" : undefined}>{label}</Link>)}</nav>
  </header><main className={s.wrap}>{children}</main><footer className={s.footer}><p>SEO Girl · Ameneh Saeednia</p><Link href="mailto:ameneh.saeednia@gmail.com">Let’s talk about your search challenges</Link></footer></div>;
}
export function ResourceCard({ entry, kind }: { entry: Resource; kind: ResourceKind }) {
  return <article className={s.card}>
    <Link href={`/${kind}/${entry.slug}`} className={s.coverLink} aria-label={`Read ${entry.title}`}>
      {entry.cover ? <img src={entry.cover} alt="" width="600" height="780" loading="lazy" className={s.cover} /> : <span className={s.coverFallback}>{labels[kind]}</span>}
      <span className={s.badge}>{kind === "research" ? "Independent study" : "Practical workbook"}</span>
    </Link><div className={s.cardBody}><p className={s.eyebrow}>{entry.topic}</p><h2><Link href={`/${kind}/${entry.slug}`}>{entry.title}</Link></h2><p>{entry.description}</p><div className={s.cardBottom}><span>{entry.pages ? `${entry.pages} pages · PDF` : "PDF resource"}</span><Link href={`/${kind}/${entry.slug}`}>{kind === "research" ? "Explore study" : "Open workbook"} </Link></div></div>
  </article>;
}
export function ResourceIndex({ kind }: { kind: ResourceKind }) {
  const entries = getResources(kind);
  const research = kind === "research";
  return <ResourceShell kind={kind}><section className={s.hero}><div><p className={s.eyebrow}>{research ? "Independent research" : "From insight to action"}</p><h1>{research ? <>A closer look at<br />how search works.</> : <>Make the thinking<br />practical.</>}</h1><p className={s.intro}>{research ? "Small, focused studies of AI visibility, brand identity and the evidence behind search decisions. The observations, methods and limits are here to explore." : "Workbooks for turning search questions into a clear plan. Choose a focus, work through the exercises, and leave with something you can use."}</p></div><aside className={s.heroNote}><span className={s.noteNumber}>{String(entries.length).padStart(2, "0")}</span><p>{research ? "studies. Different questions. Transparent methods." : "workbook to start. More room to build."}</p><span>{research ? "Original observations · October 2026" : "Download · Work through · Apply"}</span></aside></section>
    <section className={s.collection} aria-labelledby="collection-title"><div className={s.sectionHeading}><h2 id="collection-title">{research ? "Explore the studies" : "The workbook shelf"}</h2><p>{research ? "Independent analysis, separate from client case studies." : "Free PDFs. No sign-up required."}</p></div><div className={s.grid}>{entries.map(entry => <ResourceCard key={entry.slug} entry={entry} kind={kind} />)}</div>{entries.length === 0 && <p>New resources are on the way.</p>}</section>
    <section className={s.crossLink}><div><p className={s.eyebrow}>{research ? "Put it into practice" : "Explore the evidence"}</p><h2>{research ? "A framework you can work through." : "See where the questions come from."}</h2></div><Link href={research ? "/workbooks" : "/research"}>{research ? "Explore workbooks" : "Explore research"}</Link></section>
  </ResourceShell>;
}
export function ResourceDetail({ entry, kind }: { entry: Resource; kind: ResourceKind }) {
  return <ResourceShell kind={kind}><nav className={s.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`/${kind}`}>{labels[kind]}</Link><span>/</span><span>{entry.title}</span></nav>
    <section className={s.detailHero}><div><p className={s.eyebrow}>{kind === "research" ? "Independent study" : "Practical workbook"} · {entry.topic}</p><h1>{entry.title}</h1><p className={s.intro}>{entry.description}</p><p className={s.meta}>By Ameneh Saeednia · <time dateTime={entry.publishedDate}>{new Date(entry.publishedDate + "T12:00:00Z").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time>{entry.pages ? ` · ${entry.pages} pages` : ""}</p>{entry.pdf && <a className={s.button} href={entry.pdf} download>Download {kind === "research" ? "study" : "workbook"} <span>PDF</span></a>}</div>{entry.cover && <div className={s.bookFrame}><img src={entry.cover} alt={`Cover of ${entry.title}`} width="600" height="780" className={s.detailCover} /></div>}</section>
    {entry.stats.length > 0 && <div className={s.stats}>{entry.stats.map((stat, i) => <div key={i}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>}
    <div className={s.contentGrid}><article className={s.article}><p className={s.eyebrow}>{kind === "research" ? "Inside the research" : "Inside the workbook"}</p>{entry.sections.map((section, i) => <section key={i}><h2>{section.heading}</h2>{section.body.split(/\n\s*\n/).map((paragraph, j) => <p key={j}>{paragraph}</p>)}</section>)}</article><aside className={s.method}><section><h2>{kind === "research" ? "How I approached it" : "How to use it"}</h2><p>{entry.methodology}</p></section><section><h2>Scope & limitations</h2><p>{entry.limitations}</p></section><p className={s.independent}>Independent work by SEO Girl. The brands discussed are research subjects, not clients or endorsers of these studies.</p>{entry.pdf && <a href={entry.pdf} target="_blank" rel="noopener noreferrer">Read the full PDF</a>}</aside></div>
    <section className={s.crossLink}><h2>Keep exploring.</h2><Link href={`/${kind}`}>All {labels[kind].toLowerCase()}</Link><Link href={kind === "research" ? "/workbooks" : "/research"}>{kind === "research" ? "Practical workbooks" : "Independent research"}</Link></section>
  </ResourceShell>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResources } from "@/lib/resources";
import { apps } from "../app-data";
import { ResourceShell } from "../../resources/components";
import s from "../../resources/resources.module.css";

type Props = { params: Promise<{ slug: string }> };
function getStudy(slug: string) { return getResources("research").find(study => study.tool?.slug === slug); }
export function generateStaticParams() { return getResources("research").flatMap(study => study.tool ? [{ slug: study.tool.slug }] : []); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study?.tool) return { title: "Tool not found" };
  return { title: `${study.tool.name} | SEO Girl`, description: study.tool.description, alternates: { canonical: `https://www.seogirl.ca/apps/${slug}` } };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study?.tool) notFound();
  const tool = study.tool;
  const app = apps.find(item => item.title === tool.name);
  if (!app) notFound();
  return <ResourceShell kind="apps">
    <nav className={s.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/apps">Tools</Link><span>/</span><span>{tool.name}</span></nav>
    <section className={s.detailHero}><div><p className={s.eyebrow}>Built by Ameneh Saeednia · Research tool</p><h1>{tool.name}</h1><p className={s.intro}>{tool.description}</p><a className={s.button} href={app.url} target="_blank" rel="noopener noreferrer">Launch app</a></div><aside className={s.heroNote}><p>Built to investigate a real search question.</p><span>My tool. Documented observations. Transparent limits.</span></aside></section>
    <div className={s.contentGrid}><article className={s.article}><section><h2>What I used it for</h2><p>{study.methodology}</p></section><section><h2>Read the study</h2><h3><Link href={`/research/${study.slug}`}>{study.title}</Link></h3><p>{study.description}</p><Link href={`/research/${study.slug}`}>Explore the findings and download the PDF</Link></section></article><aside className={s.method}><section><h2>What the output tells us</h2><p>The study uses searches and citation data reported through Gemini with Google Search grounding. These are observations from this setup, not access to every internal retrieval step or a measurement of every AI-search product.</p></section><section><h2>Study limits</h2><p>{study.limitations}</p></section></aside></div>
    <section className={s.crossLink}><h2>Keep exploring.</h2><Link href="/apps">All tools</Link><Link href="/research">Independent research</Link></section>
  </ResourceShell>;
}

import Link from "next/link";
import {Boxes,Grid3X3,Target} from "lucide-react";
import AppLibrary from "./library-client";
import {apps, categories, liveAppCount} from "./app-data";

export const metadata={title:"SEO App Library; Ami Saeednia",description:"A growing collection of SEO strategy, AI visibility, content, local search, SERP research, and reporting tools."};

export default function AppsPage(){return <main>
  <header className="nav wrap">
    <Link className="logo" href="/">SEO<span>Girl</span></Link>
    <nav><Link href="/case-studies">Case studies</Link><Link href="/">Portfolio</Link><Link href="/research">Research</Link><Link href="/workbooks">Workbooks</Link><Link href="/blog">Insights</Link><Link href="/about">About</Link></nav>
  </header>
  <section className="libraryHero wrap">
    <div className="status"><i/> SEO STRATEGY × AI PRODUCT LAB</div>
    <h1>Tools built around <span>real search problems.</span></h1>
    <p>Explore {apps.length} apps by problem area, with {liveAppCount} live previews and {apps.length-liveAppCount} source projects. Each one turns a repeatable methodology into a practical workflow, diagnostic, or decision tool.</p>
  </section>
  <section className="libraryStatsSection wrap" aria-label="App library overview">
    {([[String(apps.length),"Apps in the collection",Boxes],[String(categories.length-1),"Problem spaces",Grid3X3],["01","Goal: clearer action",Target]] as const).map(([value,label,Icon])=><div key={String(label)}><i aria-hidden="true"><Icon size={21} strokeWidth={1.8}/></i><p><b>{value}</b><span>{label}</span></p></div>)}
  </section>
  <AppLibrary/>
  <footer className="compact"><div className="wrap"><div><span className="mini">AMI SAEEDNIA · SEO STRATEGIST</span><h2>Have a search problem worth solving?</h2></div><div className="footerLinks"><a href="mailto:ameneh.saeednia@gmail.com">ameneh.saeednia@gmail.com</a><Link href="/about">About Ami</Link><Link href="/">Back to portfolio</Link></div></div></footer>
</main>}

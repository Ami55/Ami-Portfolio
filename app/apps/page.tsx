import { SiteLogo } from "../site-logo";
import { SiteFooter } from "../resources/site-footer";
import { SiteNavigation } from "../site-navigation";
import Link from "next/link";
import {Boxes,Grid3X3,Target} from "lucide-react";
import AppLibrary from "./library-client";
import {apps, categories, liveAppCount} from "./app-data";

export const metadata={title:"SEO App Library; Ami Saeednia",description:"A growing collection of SEO strategy, AI visibility, content, local search, SERP research, and reporting tools."};

export default function AppsPage(){return <main>
  <header className="nav wrap">
    <Link className="logo" href="/"><SiteLogo /></Link>
    <SiteNavigation />
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
  <SiteFooter variant="full" heading="Have a search problem worth solving?" />
</main>}


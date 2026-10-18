import Link from "next/link";
import {ArrowUpRight,BookOpen,BrainCircuit,BriefcaseBusiness,Code2,Compass,Globe2,GraduationCap,Search,ShoppingCart,TrendingUp} from "lucide-react";

export const metadata={title:"About Ami Saeednia; SEO Strategist",description:"The journey from computer science and e-commerce to international SEO, AI visibility, and search product thinking."};

const journey=[
  {period:"September 2007",place:"QIAU",role:"B.Sc. Computer Science",copy:"Built the technical foundation for understanding websites, systems, data, and how digital products work.",Icon:Code2},
  {period:"March 2015",place:"SBU",role:"M.Sc. IT Management; E-Commerce",copy:"Connected technology with business strategy, customer journeys, and the commercial role of digital experiences.",Icon:GraduationCap},
  {period:"June 2017 · December 2019",place:"Narsense",role:"E-Commerce SEO Specialist",copy:"Owned SEO across large product and category catalogues; improving crawlability, indexation, site architecture, PLP and PDP templates, internal linking, and performance.",Icon:ShoppingCart},
  {period:"July 2020 · October 2022",place:"IMPACT Marketing International",role:"International SEO & Marketing Manager",copy:"Led international SEO across 15+ markets and multilingual journeys. Built content systems that increased qualified organic leads by about 50%, organic conversions by about 20%, and engagement by about 30%.",Icon:Globe2},
  {period:"October 2022 · April 2024",place:"Resulta",role:"Senior SEO Specialist",copy:"Delivered hands-on SEO across high-competition iGaming properties; producing 15%+ quarterly growth, restoring about 100% of lost visibility after algorithm updates, and strengthening technical health, schema, topical authority, and internal linking.",Icon:Search},
  {period:"April 2024 · May 2025",place:"Resulta · Promoted",role:"SEO Strategist",copy:"Promoted to lead organic growth strategy across multiple brands. Developed technical, entity, E-E-A-T, and AI-search roadmaps while advising leaders and aligning content, product, UX, and engineering teams.",Icon:TrendingUp},
  {period:"July 2025 · April 2026",place:"Nexy",role:"AI SEO & Content Consultant",copy:"Established the search foundation for an early-stage B2B startup; combining entity modelling, structured data, information gain, semantic clustering, AI-assisted briefs, and brand trust signals.",Icon:BrainCircuit},
  {period:"May 2026 · Present",place:"ToursByLocals",role:"SEO / GEO Strategist",copy:"Work across a global travel marketplace; identifying 40K+ pages missing from sitemaps, improving LCP, strengthening crawl and indexation systems, and creating entity-led descriptions for tours, attractions, destinations, and guide experiences.",Icon:Compass}
];

const strengths=[
  {title:"Technical foundations",copy:"Crawl health, indexation, sitemaps, Core Web Vitals, structured data, migrations, and international SEO.",Icon:Code2},
  {title:"Semantic strategy",copy:"Entity modelling, topical architecture, internal linking, search intent, information gain, and E-E-A-T.",Icon:BrainCircuit},
  {title:"AI visibility",copy:"AI Overviews, LLM retrieval, citation research, GEO diagnostics, prompt-led discovery, and brand readiness.",Icon:Search},
  {title:"Usable systems",copy:"Clear roadmaps, content workflows, QA standards, reporting views, playbooks, and practical SEO applications.",Icon:Compass}
];

export default function AboutPage(){return <main>
  <header className="nav wrap"><Link className="logo" href="/">SEO<span>Girl</span></Link><nav><Link href="/">Portfolio</Link><Link href="/apps">Tools</Link><Link href="/blog">Insights</Link></nav></header>
  <section className="aboutHero aboutHeroRepaired wrap">
    <figure className="aboutPortrait aboutPortraitBw"><img src="/ami-saeednia-profile.jpg" alt="Ami Saeednia, SEO and GEO Strategist"/></figure>
    <div className="aboutHeroHeading"><h1 className="helloTitle"><span className="helloLead">Hello, I’m</span><span className="aboutName">Ami Saeednia</span></h1><p className="heroRole">SEO / GEO Strategist · Search systems · AI visibility</p></div>
    <div className="aboutHeroCopy"><p>I began in computer science, moved into e-commerce and marketing, and found the work that brings those disciplines together: search.</p><p>Over more than nine years, I’ve worked across retail, international education, iGaming, startups, and global travel. The environments changed; the thread stayed the same. I make complex search systems easier to understand, prioritize, and use.</p><div className="aboutHeroLinks"><a href="mailto:ameneh.saeednia@gmail.com">Email me <ArrowUpRight size={17}/></a><a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17}/></a><a href="https://orcid.org/0000-0002-8812-2306" target="_blank" rel="noreferrer">ORCID <ArrowUpRight size={17}/></a></div></div>
  </section>
  <section className="aboutCollaborations wrap" aria-labelledby="collaborations-title">
    <span className="mini">COLLABORATION &amp; CONVERSATION</span>
    <h2 id="collaborations-title">Exploring what comes next in search.</h2>
    <div className="collaborationGrid">
      <article><span className="mini">COLLABORATION</span><h3>Protected by ALFIE</h3><p>I collaborate with Protected by ALFIE on semantic SEO, entity relationships, and E-E-A-T strategy, helping connect brand information with the way search and AI systems understand it.</p><a href="https://protectedbyalfie.com/team/ameneh-saeednia" target="_blank" rel="noreferrer">My ALFIE profile <ArrowUpRight size={17}/></a></article>
      <article><span className="mini">PODCAST CO-HOST</span><h3>Reimagining Digital</h3><p>I co-host Reimagining Digital with Donna Rougeau, discussing information gain, semantic search, E-E-A-T, and how content is retrieved and understood in AI search.</p><a href="https://protectedbyalfie.com/podcast" target="_blank" rel="noreferrer">Explore the podcast <ArrowUpRight size={17}/></a><a href="https://www.youtube.com/@ReimaginingDigital" target="_blank" rel="noreferrer">Watch on YouTube <ArrowUpRight size={17}/></a></article>
    </div>
  </section>
  <section className="aboutStatement wrap"><span className="mini">THE THREAD THROUGH THE WORK</span><blockquote>“I turn search knowledge into systems that help people make clearer decisions.”</blockquote><p>That can mean finding an indexation gap across tens of thousands of pages, rebuilding visibility after an algorithm update, designing a multilingual content architecture, or turning a repeatable methodology into an application.</p></section>
  <section className="journeySection"><div className="wrap"><div className="journeyIntro"><span className="mini">THE ROAD HERE</span><h2>From studying systems<br/>to shaping search.</h2></div><div className="journeyRoad">{journey.map((step,index)=><article className="journeyStop" key={step.place+step.period}><div className="journeyMarker"><span>{String(index+1).padStart(2,"0")}</span><i aria-hidden="true"><step.Icon size={26} strokeWidth={1.7}/></i></div><div className="journeyContent"><div className="journeyMeta"><span>{step.period}</span><strong>{step.place}</strong></div><h3>{step.role}</h3><p>{step.copy}</p></div></article>)}</div></div></section>
  <section className="strengths wrap"><div className="strengthIntro"><span className="mini">HOW I WORK NOW</span><h2>Strategy that connects<br/>the whole system.</h2><p>My work sits at the intersection of technical SEO, content, information retrieval, product thinking, and AI discovery.</p></div><div className="strengthGrid">{strengths.map(({title,copy,Icon},index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><i aria-hidden="true"><Icon size={25} strokeWidth={1.8}/></i><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className="aboutNumbers wrap" aria-label="Career highlights">{([["9+","Years in SEO",BriefcaseBusiness],["15+","International markets",Globe2],["40K+","Sitemap gaps identified",Search],["37","Live methodology apps",BookOpen]] as const).map(([value,label,Icon])=><div key={String(label)}><i aria-hidden="true"><Icon size={25} strokeWidth={1.8}/></i><b>{value}</b><span>{label}</span></div>)}</section>
  <footer className="compact"><div className="wrap"><div><span className="mini">AMI SAEEDNIA · SEO STRATEGIST</span><h2>Let’s make complex search work usable.</h2></div><div className="footerLinks"><a href="mailto:ameneh.saeednia@gmail.com">ameneh.saeednia@gmail.com ↗</a><a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link href="/apps">Explore the tools ↗</Link></div></div></footer>
</main>}

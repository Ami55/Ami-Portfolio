"use client";

import Link from "next/link";
import {useMemo, useState} from "react";
import {Activity,Archive,BadgeCheck,BarChart3,Box,Braces,Clock,Compass,FileText,FlaskConical,Grid3X3,Image,Landmark,Layers3,LineChart,Link2,Map,MapPin,Microscope,Network,Newspaper,PanelsTopLeft,PenLine,Quote,ScanLine,ScanSearch,Search,SearchCheck,ShieldCheck,Tags,Waypoints,Workflow} from "lucide-react";

import {apps, filters} from "./app-data";
import styles from "./library-tags.module.css";


const appIcons:Record<string,typeof Search>={
  "Searchlight Campaign Studio":FlaskConical,
  "Paid Media Intelligence":BarChart3,
  "Search Compass":Compass,
  "Signal Atlas":Activity,
  "Prompt Visibility Tracker":BarChart3,
  "Follow-Up Query Studio":Network,
  "Citation Source Replacement Finder":Quote,
  "Entity E-E-A-T & AI Visibility — No. 1":ShieldCheck,
  "Entity E-E-A-T & AI Visibility — No. 2":BadgeCheck,
  "AI Search Opportunity Explorer":Search,
  "Neighbourhood Studio":MapPin,
  "Reframe":Box,
  "Locale Image Finder":Image,
  "Adobe Image Extractor":Image,
  "Travel Itinerary Planner — Version 2":Box,
  "AI Link Opportunity Studio":Link2,
  "ALFIE Outreach":Box,
  "Affiliate Lab":LineChart,
  "Orbit Campaign Studio":Workflow,
  "Searchlight — Search Campaign Planner":SearchCheck,
  "Chronos Manager":Clock,
  "Search & LLM Citations Research Platform":Search,
  "AI Visibility Auditor Pro":ScanSearch,
  "LLM Citation Tracker":Quote,
  "AI Answer Change Monitor":Activity,
  "AI Citation Experiment Lab":FlaskConical,
  "AI Citation Reverse Engineering":Box,
  "AI Hallucination & Brand Fact Checker":ShieldCheck,
  "Query Fan-out Explorer":Network,
  "Topical Authority Mapping & Entity SEO Diagnostics Engine":Map,
  "Topical Map & Content Gap Analysis":Grid3X3,
  "Site Content Architecture & Gap Auditor":Workflow,
  "Entity SEO & Internal Linking Platform":Link2,
  "Evidence-Led Content Brief & Outline Builder":FileText,
  "First-Hand Experience & Information-Gain Miner":Microscope,
  "Expert Quote & Evidence Vault":Archive,
  "IG-Elevator: RAG-Ready Content Architect":Layers3,
  "AI SEO Blog Refresh Engine":Box,
  "Bulk AI SEO Blog Refresh Engine":Box,
  "Blog Content Rewriter":PenLine,
  "Attraction Content Writer":Landmark,
  "Content Decay & Fact Expiry Radar":Clock,
  "Lumina NER Engine":ScanLine,
  "Named Entity Recognition, Salience, Sentiment & N-Gram Collocation Engine":Tags,
  "Schema & Entity Markup Auditor":Braces,
  "Search Quality Rater Pro":BadgeCheck,
  "SERP Intelligence Analyst":SearchCheck,
  "SERP Layout GEO Citation Analyzer":PanelsTopLeft,
  "Search Intent Drift Detector":Box,
  "SEMrush Position Analysis":LineChart,
  "GSC SEO Dashboard":BarChart3,
  "SEO Morning Brief":Newspaper,
  "Sitemap Auditor":Waypoints,
  "Indexing & Publishing Control Centre":Box,
  "Visual Search & Multimodal SEO Auditor":Image,
  "GBP Audit Pro":MapPin,
  "Travel Blueprint":Compass,
  "Travel Itinerary Planner":Box,
};

const researchTools: Record<string,string> = {"Follow-Up Query Studio":"follow-up-query-studio", "Query Fan-out Explorer":"query-fan-out-explorer"};

function AppSymbol({title}:{title:string}){const Icon=appIcons[title]||Box;return <Icon size={25} strokeWidth={1.8}/>}



export default function AppLibrary(){
  const[active,setActive]=useState("All");const[expanded,setExpanded]=useState(false);
  const shown=useMemo(()=>apps.filter(app=>active==="All"||app.category===active||app.tags?.includes(active)),[active]);
  const isFiltered=active!=="All";const visibleApps=isFiltered||expanded?shown:shown.slice(0,9);
  return <section className="appLibrary wrap" id="library"><div className="libraryTools"><div className="filters" aria-label="Filter by category or tag">{filters.map(category=><button className={active===category?"active":""} onClick={()=>setActive(category)} aria-pressed={active===category} key={category}>{category}</button>)}</div></div><div className="resultMeta"><span>{visibleApps.length===shown.length?`${shown.length} documented ${shown.length===1?"app":"apps"}`:`Showing ${visibleApps.length} of ${shown.length} documented apps`}</span><span>{apps.length} apps in the collection</span></div><div className="libraryGrid" id="app-library-grid">{visibleApps.map((app,index)=><article className="libraryCard" key={app.title}><div className="cardHead"><span>{String(index+1).padStart(2,"0")}</span><small className="live-build">{app.sourceOnly?"Source project":"Live preview"}</small></div><div className="appIcon" aria-hidden="true"><AppSymbol title={app.title}/></div><span className="appCategory">{app.category} · {app.focus}</span><h2>{researchTools[app.title] ? <Link href={`/apps/${researchTools[app.title]}`} style={{color:"inherit",textDecoration:"none"}}>{app.title}</Link> : app.title}</h2>{app.tags&&<div className={styles.tags} aria-label="App tags">{app.tags.map(tag=><span key={tag}>{tag}</span>)}</div>}<div className="appFunction"><span>What it does</span><p className="appDescription">{app.description}</p></div><dl className="appDetails"><div><dt>Outcome</dt><dd>{app.goal}</dd></div><div><dt>Why it matters</dt><dd>{app.problem}</dd></div></dl><div className="cardFoot">{researchTools[app.title] && <Link href={`/apps/${researchTools[app.title]}`}>Tool & research</Link>}<a href={app.url} target="_blank" rel="noreferrer">{app.sourceOnly?"View source":"Open app"} </a></div></article>)}</div>{!isFiltered&&shown.length>9&&<div className="libraryExpand"><button onClick={()=>setExpanded(value=>!value)} aria-expanded={expanded} aria-controls="app-library-grid">{expanded?"Show fewer":`See all ${shown.length} apps`} </button><p>{expanded?"Collapse the collection":"Explore the complete app library"}</p></div>}{shown.length===0&&<div className="empty"><h2>No tools found</h2><p>Choose another category.</p><button onClick={()=>setActive("All")}>Clear filters</button></div>}</section>;
}



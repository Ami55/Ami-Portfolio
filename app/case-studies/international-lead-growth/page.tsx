import type { Metadata } from "next";
import Link from "next/link";
import s from "../case-studies.module.css";
import { JourneyVisual, MarketVisual } from "../visuals";

export const metadata: Metadata = {
  title: "International SEO Lead Growth | Ami Saeednia",
  description: "International SEO and localized content frameworks that supported qualified organic lead growth across 15 plus markets.",
};

export default function InternationalLeadCaseStudy() {
  return (
    <main className={s.wrap + " " + s.detail}>
      <div className={s.breadcrumb}><Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case studies</Link><span>/</span><span>International lead growth</span></div>
      <section className={s.detailHero}>
        <div>
          <span className={s.eyebrow}>IMPACT MARKETING INTERNATIONAL · JULY 2020–OCTOBER 2022</span>
          <h1>Turning international search into qualified enrollment leads</h1>
          <p className={s.detailLead}>Building a search program that could support local relevance across international markets while staying connected to school enrollment goals.</p>
          <div className={s.metaGrid}>
            <div className={s.metaBox}><span>My role</span><b>International SEO & Marketing Manager</b></div>
            <div className={s.metaBox}><span>Scope</span><b>15+ markets</b></div>
            <div className={s.metaBox}><span>Focus</span><b>Organic lead generation</b></div>
          </div>
        </div>
        <aside className={s.metricPanel}>
          <span>Qualified organic leads</span>
          <strong>Approximately 50% growth</strong>
          <p>Reported project outcome from the international SEO and inbound program.</p>
        </aside>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>THE CHALLENGE</span>
        <h2>Make a multi-market program useful to local families.</h2>
        <p>International schools need to reach families with different search behaviors, languages, and enrollment questions. The program needed scalable SEO foundations while allowing content to reflect local context and enrollment priorities.</p>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>THE STRATEGY</span>
        <h2>Connect market coverage to the enrollment journey</h2>
        <div className={s.marketPanel}>
          <MarketVisual />
          <p>International SEO across 15+ markets combined multilingual architecture, hreflang, localized content, and pillar-and-cluster planning. The shared framework helped organize work while keeping each market connected to its own audience and enrollment goals.</p>
        </div>
        <JourneyVisual />
      </section>

      <section className={s.detailSection}>
        <div className={s.sectionGrid}>
          <div><span className={s.eyebrow}>MY CONTRIBUTION</span><h2>Build the system, then align the work</h2></div>
          <div>
            <p>I led international SEO across markets, built pillar-and-cluster content frameworks, and supported multilingual site architecture and localized content planning. I also aligned SEO priorities with enrollment goals and worked alongside inbound marketing and conversion optimization.</p>
            <p>The wider inbound and CRO initiatives supported an approximately 20% increase in lead conversions. That result is presented as a broader program outcome, not attributed to SEO alone.</p>
          </div>
        </div>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>THE OUTCOME</span>
        <h2>Qualified organic leads grew by about 50%.</h2>
        <p>The result reflected a connected program: international SEO foundations, localized content, and alignment with the enrollment journey. The conversion improvement came from wider inbound and CRO work.</p>
      </section>

      <section className={s.cta}>
        <div><h2>Explore the other case studies</h2><p>See how I investigated organic losses and led a recovery strategy.</p></div>
        <Link className={s.ctaLink} href="/case-studies">All case studies </Link>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import s from "../case-studies.module.css";
import { CommerceVisual } from "../visuals";

export const metadata: Metadata = {
  title: "Independent E-commerce SEO Review | Ami Saeednia",
  description: "A public-data opportunity review of MEC rain-jacket category, buying-guide, and product-page connections.",
};

export default function EcommerceReview() {
  return (
    <main className={s.wrap + " " + s.detail}>
      <div className={s.breadcrumb}><Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case studies</Link><span>/</span><span>E-commerce review</span></div>
      <section className={s.detailHero}>
        <div>
          <span className={s.eyebrow}>INDEPENDENT PUBLIC-DATA ANALYSIS · OUTDOOR E-COMMERCE</span>
          <h1>Helping shoppers choose the right rain jacket</h1>
          <p className={s.detailLead}>A public-page review of how category, buying-guide, and product pages can work together to answer shopper questions and support product selection.</p>
          <div className={s.metaGrid}>
            <div className={s.metaBox}><span>Type</span><b>Independent analysis</b></div>
            <div className={s.metaBox}><span>Scope</span><b>Rainwear category and guide</b></div>
            <div className={s.metaBox}><span>Reviewed</span><b>October 2026</b></div>
          </div>
        </div>
        <aside className={s.metricPanel}>
          <span>What this is</span>
          <strong>Strategy analysis, not a client-results story</strong>
          <p>Public pages only. No access to analytics, product feeds, or internal search data.</p>
        </aside>
      </section>

      <section className={s.detailSection}>
        <div className={s.note + " " + s.independentNote}>This is an independent analysis of public pages. I have no affiliation with MEC and did not access its private analytics or systems. The recommendations are hypotheses to validate, not measured results.</div>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>THE OPPORTUNITY</span>
        <h2>Connect advice with product facts.</h2>
        <p>The public men's rain-jacket category presents shoppers with a product listing, filters, and sorting. MEC's rain-jacket guide helps shoppers understand product construction and layers, and directs them toward technical specifications.</p>
        <p>That creates an opportunity to connect selection advice with comparable, verified attributes on category and product pages.</p>
        <div className={s.cardArt}><CommerceVisual /></div>
        <div className={s.evidenceList}>
          <a className={s.evidenceLink} href="https://www.mec.ca/en/products/clothing/jackets/rain-jackets/mens" target="_blank" rel="noreferrer">Public men's rain-jacket category page <span aria-hidden="true">↗</span></a>
          <a className={s.evidenceLink} href="https://www.mec.ca/en/explore/how-to-choose-a-rain-jacket" target="_blank" rel="noreferrer">Public rain-jacket buying guide <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>RECOMMENDED PRIORITIES</span>
        <h2>Make comparison easier across the journey.</h2>
        <div className={s.phaseGrid}>
          <article className={s.phase}><span className={s.phaseNum}>01</span><h3>Map questions</h3><p>Organize shopper questions by use case and purchase stage.</p></article>
          <article className={s.phase}><span className={s.phaseNum}>02</span><h3>Verify attributes</h3><p>Identify which product facts answer each question and confirm their source.</p></article>
          <article className={s.phase}><span className={s.phaseNum}>03</span><h3>Connect pages</h3><p>Link guidance to relevant categories and product details with clear context.</p></article>
          <article className={s.phase}><span className={s.phaseNum}>04</span><h3>Measure paths</h3><p>Review guide-to-product journeys and validate opportunities with analytics.</p></article>
        </div>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>HOW I WOULD VALIDATE IT</span>
        <h2>Measure the questions and the next steps.</h2>
        <p>I would compare organic impressions and clicks for the guide and category pages, review internal-search and customer-support questions, and measure movement from educational content to relevant products. Conversion impact would only be reported after access to analytics and an agreed measurement window.</p>
      </section>

      <section className={s.cta}>
        <div><h2>See the client-project case studies</h2><p>Explore the post-update SEO recovery and international lead-generation work.</p></div>
        <Link className={s.ctaLink} href="/case-studies">All case studies <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

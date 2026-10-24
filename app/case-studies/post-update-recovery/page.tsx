import type { Metadata } from "next";
import Link from "next/link";
import s from "../case-studies.module.css";
import { RecoveryVisual } from "../visuals";

export const metadata: Metadata = {
  title: "Post-Update SEO Recovery | Ami Saeednia",
  description: "How I investigated post-update organic losses and led a content and semantic SEO recovery plan for an anonymized iGaming site.",
};

const phases = [
  ["01", "Diagnose the loss", "Review affected areas and look for patterns in visibility changes, content overlap, and semantic gaps."],
  ["02", "Consolidate content", "Clarify which pages should serve distinct search needs and reduce unnecessary overlap."],
  ["03", "Improve relevance", "Strengthen the relationship between topics, page purpose, and search intent."],
  ["04", "Reinforce trust", "Support content recommendations with trust signals and technical requirements that teams can implement."],
];

export default function RecoveryCaseStudy() {
  return (
    <main className={s.wrap + " " + s.detail}>
      <div className={s.breadcrumb}><Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case studies</Link><span>/</span><span>SEO recovery</span></div>
      <section className={s.detailHero}>
        <div>
          <span className={s.eyebrow}>CLIENT PROJECT · IGAMING · CLIENT NAME WITHHELD</span>
          <h1>Rebuilding organic visibility after a Google update</h1>
          <p className={s.detailLead}>A recovery effort focused on understanding why visibility fell and fixing the content and structural issues behind the loss, rather than treating each URL as an isolated problem.</p>
          <div className={s.metaGrid}>
            <div className={s.metaBox}><span>My role</span><b>Senior SEO Specialist → SEO Strategist</b></div>
            <div className={s.metaBox}><span>Work</span><b>Technical and content SEO</b></div>
            <div className={s.metaBox}><span>Agency</span><b>Resulta</b></div>
          </div>
        </div>
        <aside className={s.metricPanel}>
          <span>Reported outcome</span>
          <strong>Nearly all lost organic traffic recovered</strong>
          <p>The exact reporting window is omitted here; the original notes contain different measurement periods.</p>
        </aside>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>THE CHALLENGE</span>
        <h2>Find the underlying pattern before choosing the fix.</h2>
        <p>Following Google Helpful Content Updates, the site experienced a significant decline in organic visibility. The first task was to understand how the affected pages related to one another and where the site no longer met the needs behind important searches.</p>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>THE RECOVERY PLAN</span>
        <h2>A sequence of connected improvements</h2>
        <p>I investigated update-related losses, semantic gaps, and content cannibalization, then translated the findings into a coordinated recovery plan.</p>
        <RecoveryVisual />
        <div className={s.phaseGrid}>
          {phases.map(([number, title, description]) => (
            <article className={s.phase} key={number}><span className={s.phaseNum}>{number}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className={s.detailSection}>
        <div className={s.sectionGrid}>
          <div><span className={s.eyebrow}>WHAT CHANGED</span><h2>From isolated page edits to a site-level response</h2></div>
          <div>
            <p>Content was consolidated and restructured where pages overlapped. Semantic improvements clarified topic coverage and page purpose. Technical findings were converted into implementation requirements, and trust signals were reinforced through E-E-A-T-aligned recommendations.</p>
            <p>The work combined analysis with practical prioritization so content and technical teams could act on the same diagnosis.</p>
          </div>
        </div>
      </section>

      <section className={s.detailSection}>
        <span className={s.eyebrow}>THE OUTCOME</span>
        <h2>Organic performance recovered and revenue stabilized.</h2>
        <p>Historical project reporting described a near-full recovery of lost organic traffic. I have not added a time-based chart or a precise recovery percentage here because the reporting window needs to be confirmed before publishing one.</p>
        <div className={s.note}>Client identity and identifying site details are withheld. No client domain, screenshots, or internal data are included.</div>
      </section>

      <section className={s.cta}>
        <div><h2>See the full case-study collection</h2><p>Explore international lead generation and an independent e-commerce review.</p></div>
        <Link className={s.ctaLink} href="/case-studies">All case studies <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

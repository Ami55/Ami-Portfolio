import type { Metadata } from "next";
import Link from "next/link";
import s from "./case-studies.module.css";
import { CampaignCards } from "./campaign-concepts";
import { MarketVisual, RecoveryVisual } from "./visuals";

export const metadata: Metadata = {
  title: "SEO Case Studies | Ami Saeednia",
  description: "Selected SEO work in organic recovery, international lead generation, and multilingual content strategy.",
};

export default function CaseStudiesPage() {
  return (
    <main className={s.indexMain}>
      <section className={s.hero + " " + s.wrap}>
        <div className={s.heroCopy}>
          <span className={s.kicker}><i className={s.kickerDot} />Selected work · Strategy in practice</span>
          <h1>Case studies that show the thinking behind the result.</h1>
          <p className={s.heroLead}>A closer look at how I diagnose search problems, connect evidence, and shape work around business goals.</p>
          <div className={s.heroLinks}>
            <a className={s.button} href="#case-library">Explore the case studies </a>
            <Link className={s.textLink} href="/">Back to portfolio </Link>
          </div>
        </div>
        <div className={s.heroArt} aria-hidden="true">
          <div className={s.artPanel}>
            <div className={s.artTop}><span>SEO STRATEGY / FIELD NOTES</span><i /></div>
            <div className={s.artMetric}>Evidence into action</div>
            <div className={s.artCaption}>A repeatable path from diagnosis to decision</div>
            <div className={s.artFlow}><span/><span/><span/><span/></div>
          </div>
        </div>
      </section>

      <section className={s.wrap} id="case-library">
        <div className={s.sectionHead}>
          <div><span className={s.eyebrow}>TWO SELECTED PROJECTS</span><h2>Different search problems.<br/>One evidence-led approach.</h2></div>
          <p>From recovering organic visibility to connecting international search with enrollment goals.</p>
        </div>
        <div className={s.caseGrid}>
          <Link className={s.card + " " + s.caseRow} href="/case-studies/post-update-recovery">
            <div className={s.cardArt}><RecoveryVisual /></div>
            <div>
              <div className={s.cardHead}><span className={s.cardLabel}>01 · RESULTA / IGAMING</span><span className={s.badge}>Client project</span></div>
              <h3>Rebuilding organic visibility after a Google update</h3>
              <strong className={s.cardMetric}>Nearly all lost organic traffic recovered</strong>
              <p>Investigating the causes of the decline, then addressing content overlap, semantic gaps, and trust signals through a focused recovery plan.</p>
              <div className={s.chipRow}><span className={s.chip}>SEO recovery</span><span className={s.chip}>Content structure</span><span className={s.chip}>Entity relevance</span></div>
              <span className={s.cardLink}>Read the case study </span>
            </div>
          </Link>

          <Link className={s.card + " " + s.caseRow} href="/case-studies/international-lead-growth">
            <div className={s.cardArt}><MarketVisual /></div>
            <div>
              <div className={s.cardHead}><span className={s.cardLabel}>02 · IMPACT / EDUCATION</span><span className={s.badge}>Client project</span></div>
              <h3>Turning international search into qualified leads</h3>
              <strong className={s.cardMetric}>~50% growth in qualified organic leads</strong>
              <p>Connecting multilingual search architecture, localized content, and enrollment goals across 15+ markets.</p>
              <div className={s.chipRow}><span className={s.chip}>International SEO</span><span className={s.chip}>Lead generation</span></div>
              <span className={s.cardLink}>Read the case study</span>
            </div>
          </Link>

        </div>
      </section>

      <CampaignCards />

      <section className={s.wrap}>
        <div className={s.cta}>
          <div><h2>Want to see more of my work?</h2><p>Explore the tools and workflows I have built around recurring SEO problems.</p></div>
          <Link className={s.ctaLink} href="/apps">Explore the app library </Link>
        </div>
      </section>
    </main>
  );
}

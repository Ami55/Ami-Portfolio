import Link from "next/link";
import type { ReactNode } from "react";
import s from "./case-studies.module.css";

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (
    <div className={s.shell}>
      <header className={s.wrap + " " + s.topBar}>
        <Link className={s.brand} href="/">SEO<span>Girl</span></Link>
        <nav className={s.nav} aria-label="Main navigation">
          <Link href="/">Portfolio</Link>
          <Link href="/case-studies" aria-current="page">Case studies</Link>
          <Link href="/apps">Tools</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      {children}
      <footer className={s.siteFooter}>
        <div className={s.wrap + " " + s.footerInner}>
          <Link href="/" className={s.footerName}>AMI SAEEDNIA · SEO STRATEGIST</Link>
          <nav className={s.footerLinks} aria-label="Footer navigation">
            <a href="mailto:ameneh.saeednia@gmail.com">Email Ami ↗</a>
            <a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <Link href="/">Back to portfolio ↑</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

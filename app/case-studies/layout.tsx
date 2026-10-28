import Link from "next/link";
import type { ReactNode } from "react";
import s from "./case-studies.module.css";
import { SiteFooter } from "../resources/site-footer";

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (
    <div className={s.shell}>
      <header className={s.wrap + " " + s.topBar}>
        <Link className={s.brand} href="/">SEO<span>Girl</span></Link>
        <nav className={s.nav} aria-label="Main navigation">
          <Link href="/">Portfolio</Link>
          <Link href="/case-studies" aria-current="page">Case studies</Link>
          <Link href="/research">Research</Link><Link href="/workbooks">Workbooks</Link><Link href="/apps">Tools</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      {children}
      <SiteFooter />
    </div>
  );
}

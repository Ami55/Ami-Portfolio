import { SiteLogo } from "../site-logo";
import { SiteNavigation } from "../site-navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import s from "./case-studies.module.css";
import { SiteFooter } from "../resources/site-footer";

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (
    <div className={s.shell}>
      <header className={s.wrap + " " + s.topBar}>
        <Link className={s.brand} href="/"><SiteLogo /></Link>
        <SiteNavigation />
      </header>
      {children}
      <SiteFooter />
    </div>
  );
}


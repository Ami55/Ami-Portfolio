import Link from "next/link";
import type { ReactNode } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import s from "./site-footer.module.css";

const resources = [["/apps", "App library"], ["/case-studies", "Case studies"], ["/research", "Research"], ["/workbooks", "Workbooks"]];

export function SiteFooter({ variant = "compact", heading }: { variant?: "full" | "compact"; heading?: ReactNode }) {
  return <footer className={`${s.footer} ${variant === "full" ? s.full : ""}`}>
    <div className={s.inner}>
      <div className={s.top}>
        <div className={s.identity}>
          {variant === "full" ? <><p className={s.eyebrow}>AMI SAEEDNIA · SEO STRATEGIST</p><h2>{heading || <>Let’s build something<br />search can understand.</>}</h2></> : <><Link href="/" className={s.brand} aria-label="SEO Girl home">SEO<span>Girl</span></Link><p>Search strategy, made practical.</p></>}
        </div>
        <nav aria-label="Contact and social links" className={s.socials}>
          <a href="mailto:ameneh.saeednia@gmail.com" aria-label="Email Ami Saeednia" title="Email Ami Saeednia"><Mail aria-hidden="true" /><span>Email</span></a>
          <a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noopener noreferrer" aria-label="Ami Saeednia on LinkedIn" title="LinkedIn"><Linkedin aria-hidden="true" /><span>LinkedIn</span></a>
          <a href="https://github.com/Ami55" target="_blank" rel="noopener noreferrer" aria-label="Ami Saeednia on GitHub" title="GitHub"><Github aria-hidden="true" /><span>GitHub</span></a>
        </nav>
      </div>
      <nav aria-label="Footer resources" className={s.resources}>{resources.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className={s.bottom}><span>© 2026 Ameneh Saeednia</span><span>Independent thinking. Practical work.</span></div>
    </div>
  </footer>;
}


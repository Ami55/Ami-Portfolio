import Link from "next/link";
import type { ReactNode } from "react";
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
          <a href="mailto:ameneh.saeednia@gmail.com" aria-label="Email Ami Saeednia" title="Email Ami Saeednia"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg><span>Email</span></a>
          <a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noopener noreferrer" aria-label="Ami Saeednia on LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z" /></svg><span>LinkedIn</span></a>
          <a href="https://github.com/Ami55" target="_blank" rel="noopener noreferrer" aria-label="Ami Saeednia on GitHub" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" /></svg><span>GitHub</span></a>
        </nav>
      </div>
      <nav aria-label="Footer resources" className={s.resources}>{resources.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className={s.bottom}><span>© 2026 Ameneh Saeednia</span><span>Independent thinking. Practical work.</span></div>
    </div>
  </footer>;
}


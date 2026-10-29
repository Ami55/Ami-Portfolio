import Link from "next/link";
import s from "./site-footer.module.css";

const links = [["/", "Portfolio"], ["/case-studies", "Case studies"], ["/research", "Research"], ["/workbooks", "Workbooks"], ["/apps", "Tools"], ["/blog", "Insights"], ["/about", "About"]];

export function SiteFooter() {
  return <footer className={s.footer}>
    <div className={s.inner}>
      <div className={s.top}>
        <div className={s.identity}>
          <Link href="/" className={s.brand} aria-label="SEO Girl home">SEO<span>Girl</span></Link>
          <p>Search strategy, made practical.</p>
          <span>SEO · AI visibility · Content systems</span>
        </div>
        <nav aria-label="Footer navigation" className={s.explore}>
          <p className={s.label}>Explore</p>
          <div className={s.links}>{links.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </nav>
        <div className={s.contact}>
          <p className={s.label}>Get in touch</p>
          <a href="mailto:ameneh.saeednia@gmail.com" className={s.email}>Email</a>
          <a href="https://www.linkedin.com/in/ameneh-saeednia/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className={s.bottom}><span>© 2026 Ameneh Saeednia</span><span>SEO Girl · Independent thinking. Practical work.</span></div>
    </div>
  </footer>;
}

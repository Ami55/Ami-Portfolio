"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import s from "./site-navigation.module.css";

const workLinks = [
  { href: "/case-studies", label: "Case Studies", description: "Client projects and campaign concepts" },
  { href: "/research", label: "Research", description: "Independent studies and findings" },
  { href: "/workbooks", label: "Workbooks", description: "Practical downloadable resources" },
];
export function SiteNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const group = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const active = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!group.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [open]);
  return <nav className={s.navigation} aria-label="Main navigation">
    <Link className={s.topLink} href="/" aria-current={active("/") ? "page" : undefined}>Home</Link>
    <div ref={group} className={`${s.group} ${open ? s.open : ""}`} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false); }}>
      <button ref={trigger} type="button" className={`${s.trigger} ${workLinks.some(link => active(link.href)) ? s.selected : ""}`} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)}>My Work</button>
      <div id={panelId} className={s.panel} hidden={!open}>
        {workLinks.map(link => <Link className={s.workLink} key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => setOpen(false)}><span>{link.label}</span><small>{link.description}</small></Link>)}
      </div>
    </div>
    {[["/apps", "Tools"], ["/blog", "Insights"], ["/about", "About"]].map(([href, label]) => <Link className={s.topLink} key={href} href={href} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}
  </nav>;
}

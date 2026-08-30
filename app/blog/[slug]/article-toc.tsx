"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Heading = { id: string; text: string };

export default function ArticleToc({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id || "");

  useEffect(() => {
    const updateActiveHeading = () => {
      const marker = window.scrollY + Math.min(220, window.innerHeight * 0.3);
      let current = headings[0]?.id || "";
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top + window.scrollY <= marker) current = heading.id;
      }
      setActiveId(current);
    };
    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);
    return () => {
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  return <aside className="articleToc" aria-label="Article sections" style={{ "--toc-count": headings.length } as CSSProperties}>
    <span>IN THIS ARTICLE</span>
    <div className="tocTrack" aria-hidden="true"><i style={{ transform: `translateY(${Math.max(0, headings.findIndex((heading) => heading.id === activeId)) * 100}%)` }}/></div>
    {headings.map((heading) => <a
      className={heading.id === activeId ? "active" : undefined}
      href={`#${heading.id}`}
      key={heading.id}
      onClick={() => setActiveId(heading.id)}
    >{heading.text}</a>)}
  </aside>;
}

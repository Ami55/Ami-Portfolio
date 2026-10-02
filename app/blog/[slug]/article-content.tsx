import Markdoc from "@markdoc/markdoc";
import Image from "next/image";
import React from "react";
import type { ReactNode } from "react";

function ArticleImage({ src, alt = "" }: { src: string; alt?: string }) {
  const source = src.startsWith("images/") ? `/blog/${src}` : src;
  if (!source.startsWith("/blog/images/")) return null;
  return <figure className="articleFigure"><Image src={source} alt={alt} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 720px"/><figcaption>{alt}</figcaption></figure>;
}

function ArticleLink({ href, children }: { href: string; children: ReactNode }) {
  if (!/^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(href)) return <>{children}</>;
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{children}</a>;
}

export default function ArticleContent({ body }: { body: string }) {
  const ast = Markdoc.parse(body);
  const content = Markdoc.transform(ast, {
    nodes: {
      document: { render: "ArticleDocument" },
      image: { render: "ArticleImage", attributes: { src: { type: String, required: true }, alt: { type: String }, title: { type: String } } },
      link: { render: "ArticleLink", attributes: { href: { type: String, required: true } } },
      heading: {
        transform(node, config) {
          const text = [...node.walk()].filter((child) => child.type === "text").map((child) => child.attributes.content).join("");
          const id = text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return new Markdoc.Tag(node.attributes.level === 3 ? "h3" : "h2", { id }, node.transformChildren(config));
        },
      },
      paragraph: {
        transform(node, config) {
          const children = node.transformChildren(config);
          if (children.length === 1 && Markdoc.Tag.isTag(children[0]) && children[0].name === "ArticleImage") return children[0];
          return new Markdoc.Tag("p", {}, children);
        },
      },
    },
  });
  return Markdoc.renderers.react(content, React, {
    components: { ArticleDocument: ({ children }: { children: ReactNode }) => <>{children}</>, ArticleImage, ArticleLink },
  });
}

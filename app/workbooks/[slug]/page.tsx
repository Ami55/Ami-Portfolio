import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResource, getResources } from "@/lib/resources";
import { ResourceDetail } from "../../resources/components";
export function generateStaticParams() { return getResources("workbooks").map(entry => ({ slug: entry.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getResource("workbooks", slug);
  if (!entry) return { title: "Resource not found" };
  return { title: `${entry.title} | SEO Girl`, description: entry.description, alternates: { canonical: `https://www.seogirl.ca/workbooks/${slug}` }, openGraph: { title: entry.title, description: entry.description, ...(entry.cover ? { images: [entry.cover] } : {}) } };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const entry = getResource("workbooks", slug);
  if (!entry) notFound();
  return <ResourceDetail entry={entry} kind="workbooks" />;
}

import type { Metadata } from "next";
import { ResourceIndex } from "../resources/components";
export const metadata: Metadata = { title: "Workbooks | SEO Girl", description: "Practical semantic SEO workbooks with downloadable exercises and action plans.", alternates: { canonical: "https://www.seogirl.ca/workbooks" } };
export default function Page() { return <ResourceIndex kind="workbooks" />; }

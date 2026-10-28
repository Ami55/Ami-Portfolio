import type { Metadata } from "next";
import { ResourceIndex } from "../resources/components";
export const metadata: Metadata = { title: "Research | SEO Girl", description: "Independent studies of AI visibility, brand identity and trust evidence.", alternates: { canonical: "https://www.seogirl.ca/research" } };
export default function Page() { return <ResourceIndex kind="research" />; }

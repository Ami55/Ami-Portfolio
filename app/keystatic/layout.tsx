import type { Metadata } from "next";
import KeystaticApp from "./keystatic";

export const metadata: Metadata = {
  title: "Blog editor | SEO Girl",
  robots: { index: false, follow: false },
};

export default function Layout() {
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT) {
    return <main style={{ maxWidth: 640, margin: "80px auto", padding: 24 }}><h1>Blog editor setup</h1><p>The editor is waiting for its Keystatic connection. Your published website is available as usual.</p></main>;
  }
  return <KeystaticApp />;
}

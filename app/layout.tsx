import type {Metadata} from "next";import "./globals.css";
import { SITE_URL, siteSchema, serializeSchema } from "@/lib/schema";
export const metadata:Metadata={metadataBase:new URL(SITE_URL),title:"Ami Saeednia; SEO Strategist",description:"SEO strategist connecting technical SEO, content systems, AI visibility, and product thinking to create clear paths to organic growth.",icons:{icon:"/favicon.ico",apple:"/apple-touch-icon.png"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeSchema(siteSchema)}}/></body></html>}

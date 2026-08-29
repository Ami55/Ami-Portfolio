import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Ami Saeednia; SEO Strategist",description:"SEO strategist connecting technical SEO, content systems, AI visibility, and product thinking to create clear paths to organic growth.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

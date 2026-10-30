import Image from "next/image";

/** Original vector wordmark supplied by the brand owner. */
export function SiteLogo({ dark = false }: { dark?: boolean }) {
  return <Image src={`/brand/seogirl-${dark ? "dark" : "light"}.svg`} alt="SEOgirl" width={146} height={48} style={{ display: "block", width: 146, maxWidth: "100%", height: "auto" }} priority />;
}

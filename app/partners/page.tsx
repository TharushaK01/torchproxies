import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";

export const metadata: Metadata = {
  title: "Partners",
  alternates: {
  canonical: "/partners",
  },  
  openGraph: {
    title: "Partners | Torch Proxies ",
  }
}
export default function Page() {
  return <PartnersClient />;
}

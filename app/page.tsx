// import dynamic from "next/dynamic";
// import HeroSection from "@/components/home/HeroSection";
// import GlobalNetwork from "@/components/home/GlobalNetworkLazy";
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'ISP & Residential Proxies for Automation | Torch Proxies',
//   description: 'Start your own proxy business in 24 hours with Proxy API. We provide everything - Fully branded dashboard and 80M+ IPs. No coding needed. Scale fast!',
//   openGraph: {
//     title: 'Home | Start Your Proxy Business in 24 Hours with Proxy API ',
//     description: 'Start your own proxy business in 24 hours with Proxy API. We provide everything - Fully branded dashboard and 80M+ IPs. No coding needed. Scale fast!',
//     images: ['/images/og-image.png'],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     images: ['/images/og-image.png'],
//   },
// };

// const SectionFallback = () => <div className="min-h-[400px] w-full" />;

// const PricingSection = dynamic(() => import("@/components/home/PricingSection"), { loading: SectionFallback });
// const LocationsSection = dynamic(() => import("@/components/home/LocationsSection"), { loading: SectionFallback });
// const FeaturesGrid = dynamic(() => import("@/components/home/FeaturesGrid"), { loading: SectionFallback });
// const ClientManagement = dynamic(() => import("@/components/home/ClientManagement"), { loading: SectionFallback });
// const UseCasesSection = dynamic(() => import("@/components/home/UseCasesSection"), { loading: SectionFallback });
// const CtaBanner = dynamic(() => import("@/components/home/CtaBanner"), { loading: SectionFallback });
// const ContactSection = dynamic(() => import("@/components/home/ContactSection"), { loading: SectionFallback });

// export default async function Home() {
//   const res = await fetch(`https://torchproxies.com/wp-json/wp/v2/posts`);
//   const data = await res.json();
//   console.log(data);

//   return (
//     <main className="bg-[#0a0a0a] min-h-screen">
//       <HeroSection />
//       <PricingSection />
//       <LocationsSection />
//       <FeaturesGrid />
//       <ClientManagement />
//       <UseCasesSection />
//       <GlobalNetwork />
//       <CtaBanner />
//       <ContactSection />
//     </main>
//   );
// }

import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import GlobalNetwork from "@/components/home/GlobalNetworkLazy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISP & Residential Proxies for Automation | Torch Proxies",
  description:
    "Start your own proxy business in 24 hours with Proxy API. We provide everything - Fully branded dashboard and 80M+ IPs. No coding needed. Scale fast!",
  openGraph: {
    title: "Home | Start Your Proxy Business in 24 Hours with Proxy API ",
    description:
      "Start your own proxy business in 24 hours with Proxy API. We provide everything - Fully branded dashboard and 80M+ IPs. No coding needed. Scale fast!",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
};

const SectionFallback = () => <div className="min-h-[400px] w-full" />;

const PricingSection = dynamic(
  () => import("@/components/home/PricingSection"),
  { loading: SectionFallback },
);
const LocationsSection = dynamic(
  () => import("@/components/home/LocationsSection"),
  { loading: SectionFallback },
);
const FeaturesGrid = dynamic(() => import("@/components/home/FeaturesGrid"), {
  loading: SectionFallback,
});
const ClientManagement = dynamic(
  () => import("@/components/home/ClientManagement"),
  { loading: SectionFallback },
);
const UseCasesSection = dynamic(
  () => import("@/components/home/UseCasesSection"),
  { loading: SectionFallback },
);
const CtaBanner = dynamic(() => import("@/components/home/CtaBanner"), {
  loading: SectionFallback,
});
const ContactSection = dynamic(
  () => import("@/components/home/ContactSection"),
  { loading: SectionFallback },
);

export default async function Home() {
  let data = [];

  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
      "https://cms.torchproxies.com/wp-json/wp/v2";

    const fetchData = async () => {
      const res = await fetch(`${apiUrl}/posts`, {
        next: { revalidate: 3600 },
      });

      if (res.ok) {
        data = await res.json();
      }
    };

    fetchData();
  } catch (error) {
    console.error("Failed to fetch posts on Home page:", error);
  }

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <HeroSection />
      <PricingSection />
      <LocationsSection />
      <FeaturesGrid />
      <ClientManagement />
      <UseCasesSection />
      <GlobalNetwork />
      <CtaBanner />
      <ContactSection />
    </main>
  );
}

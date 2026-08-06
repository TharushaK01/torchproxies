import HeroSection from "@/components/home/HeroSection";
import PricingSection    from "@/components/home/PricingSection";
import LocationsSection  from "@/components/home/LocationsSection";
import FeaturesGrid      from "@/components/home/FeaturesGrid";
import ClientManagement  from "@/components/home/ClientManagement";
import UseCasesSection   from "@/components/home/UseCasesSection";
import GlobalNetwork     from "@/components/home/GlobalNetwork";
import CtaBanner         from "@/components/home/CtaBanner";
import ContactSection    from "@/components/home/ContactSection";

export default async function Home() {

  
const res = await fetch(
	`https://torchproxies.com/wp-json/wp/v2/posts`
);
const data = await res.json();
console.log(data);

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

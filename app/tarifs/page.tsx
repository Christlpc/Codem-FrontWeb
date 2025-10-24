import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { PricingSection } from "@/components/pricing/pricing-section";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";

export const metadata = {
  title: "Tarifs - CODEM Congo",
  description: "Découvrez nos tarifs transparents pour tous types de déménagement au Congo",
};

export default function TarifsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <PricingSection />
        <PricingCalculator />
      </div>
      <Footer />
    </main>
  );
}


import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ServicesDetailSection } from "@/components/services/services-detail-section";
import { TestimonialsSection } from "@/components/services/testimonials-section";

export const metadata = {
  title: "Nos Services - CODEM Congo",
  description: "Découvrez tous nos services de déménagement professionnel au Congo",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ServicesDetailSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  );
}


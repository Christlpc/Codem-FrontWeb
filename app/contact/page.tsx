import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata = {
  title: "Contact - CODEM Congo",
  description: "Contactez-nous pour toute question ou demande de devis au Congo",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}


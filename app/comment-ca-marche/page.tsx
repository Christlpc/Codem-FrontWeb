import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { HowItWorksDetail } from "@/components/how-it-works/how-it-works-detail";

export const metadata = {
  title: "Comment ça marche - CODEM Congo",
  description: "Découvrez le processus simple de réservation et de déménagement avec CODEM au Congo",
};

export default function CommentCaMarchePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <HowItWorksDetail />
      </div>
      <Footer />
    </main>
  );
}


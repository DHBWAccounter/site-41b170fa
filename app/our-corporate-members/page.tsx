import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PreFooter } from "@/components/pre-footer";
import { CorporateMembersContent } from "@/components/corporate-members-content";

export default function OurCorporateMembersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <CorporateMembersContent />
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PreFooter } from "@/components/pre-footer";
import { ArchiveContent } from "@/components/archive-content";

export default function ArchivePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-white py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:w-48 flex-shrink-0">
              <div className="sticky top-8">
                <Link
                  href="https://www.bitcoinassociation.ch/bitcoin-association-switzerland"
                  className="text-[#3D9991] text-lg font-bold block mb-2"
                >
                  News
                </Link>
                <p className="text-xs text-[#999999] uppercase tracking-wider mb-3">NEWS</p>
                <p className="text-xs text-[#1f1f1f] font-semibold uppercase tracking-wider">ARCHIVE</p>
              </div>
            </aside>

            {/* Archive Content */}
            <div className="flex-1">
              <ArchiveContent />
            </div>
          </div>
        </div>
      </main>

      {/* Pre-Footer */}
      <PreFooter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

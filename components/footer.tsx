"use client";

import Link from "next/link";
import { ChevronUp } from "lucide-react";

const footerLinks = [
  { name: "Privacy Policy", href: "https://www.bitcoinassociation.ch/privacy" },
  { name: "Terms and Conditions", href: "https://www.bitcoinassociation.ch/terms" },
];

export function Footer() {
  return (
    <footer className="bg-[#1f1f1f] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Top */}
        <div className="flex justify-center mb-6">
          <Link
            href="#header"
            className="text-xs text-white uppercase tracking-wider hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            <ChevronUp className="w-4 h-4" />
            Back to Top
          </Link>
        </div>

        {/* Footer Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs text-white uppercase tracking-wider hover:text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

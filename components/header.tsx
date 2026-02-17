"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "News",
    href: "#",
    children: [
      { name: "News", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland" },
      { name: "Archive", href: "https://www.bitcoinassociation.ch/archive" },
    ],
  },
  {
    name: "Events",
    href: "#",
    children: [
      { name: "Roadshow 2025", href: "https://www.bitcoinassociation.ch/roadshow-2025" },
      { name: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { name: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { name: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { name: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { name: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    name: "Membership",
    href: "#",
    children: [
      { name: "Private", href: "https://www.bitcoinassociation.ch/private" },
      { name: "Corporate", href: "https://www.bitcoinassociation.ch/corporate" },
      { name: "Our Corporate Members", href: "https://www.bitcoinassociation.ch/our-corporate-members" },
    ],
  },
  {
    name: "Participate",
    href: "#",
    children: [
      { name: "Meetups & Events", href: "https://www.bitcoinassociation.ch/meetups-events" },
    ],
  },
  {
    name: "About",
    href: "#",
    children: [
      { name: "About", href: "https://www.bitcoinassociation.ch/about-1" },
      { name: "Board", href: "https://www.bitcoinassociation.ch/board" },
      { name: "Finances", href: "https://www.bitcoinassociation.ch/finances" },
      { name: "Statutes", href: "https://www.bitcoinassociation.ch/statutes" },
      { name: "Media Kit", href: "https://www.bitcoinassociation.ch/media-kit" },
      { name: "Contact", href: "https://www.bitcoinassociation.ch/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
            alt="Bitcoin Association Switzerland"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button className="nav-link flex items-center gap-1">
                    {item.name.toUpperCase()}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 py-2 w-56 bg-white shadow-lg">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2 text-sm text-[#1f1f1f] hover:bg-gray-100"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="nav-link">
                  {item.name.toUpperCase()}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1f1f1f] px-4 py-4">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      className="text-white font-bold uppercase text-sm tracking-wider flex items-center gap-1 w-full text-left"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block text-sm text-gray-300 hover:text-white"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white font-bold uppercase text-sm tracking-wider block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

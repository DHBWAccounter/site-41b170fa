"use client";

import Image from "next/image";
import Link from "next/link";

// Corporate Members data - 5 per row
const corporateMembers = [
  { name: "BitBox", href: "https://shiftcrypto.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1596551209231-6DTNGQPKB6CHPIPF3GRS/02b+db-BitBox+margin+bkg-transparent.png?format=300w" },
  { name: "Bitcoin Suisse", href: "https://www.bitcoinsuisse.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1539339845417-XB6KMLWHKWCXKYOIDQLL/full_logo_new.png?format=300w" },
  { name: "Blockchain Source", href: "https://blockchainsource.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728027563887-9D9OLHIZYI2BQQB4XUNH/logo-354x59.png?format=300w" },
  { name: "Crypto Finance", href: "https://www.cryptofinance.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1556548120132-FDRR0QNN1G4YMFDGJHJO/Crypto-Finance-logo.jpg?format=300w" },
  { name: "21 Analytics", href: "https://www.21analytics.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1594364557839-RTANLGKYTOHNW3W7DWNB/Logo.png?format=300w" },
  { name: "Tatoshi Services", href: "https://tatoshi-services.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727654250834-4V6KRLIF5N1AROCN4JT1/Logo+Tatoshi+Services.png?format=300w" },
  { name: "Apps with love", href: "https://appswithlove.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624207019607-RBOKOAIK9P121899L034/Awl_Logo_17_black_rgb.png?format=100w" },
  { name: "Hodling", href: "https://hodling.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624369670385-FICD1IXHLKO0KISG37QF/hodling-logo.png?format=300w" },
  { name: "Alephium", href: "https://alephium.org/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636130674575-E9EBWE86QJOH1R038Z47/image_2021-11-01_09-39-50.png?format=300w" },
  { name: "Aktionariat", href: "https://aktionariat.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636188901843-LKE49EDOBMHBW0NQLD2V/Aktionariat.jpg?format=300w" },
  { name: "21 Lectures", href: "https://www.21lectures.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1681299724574-ROJH85FPQ8DDD36W8MKJ/yellow_black.png?format=300w" },
  { name: "Incore", href: "https://incorebank.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1765804013568-ON3P0X10SFU43PP1GCK9/InC_Logotype_rgb-hex-1749C6_0724.jpg?format=300w" },
  { name: "Pocket", href: "", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1738872657909-DN85KSD3N76MHRTHKACR/pocket-light.png?format=300w" },
  { name: "House of Satoshi", href: "https://www.house-of-satoshi.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920586590-25CR1IXKQRR83AL62VQG/HoS.jpg?format=300w" },
  { name: "Berglinde", href: "https://www.berglinde.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920800707-V2WQ0NY7MCAMG4F5W79I/Berglinde.jpg?format=300w" },
  { name: "Infinity21", href: "https://infinity21.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726921284073-GBCP6S64DOUMQOIC4OQL/Infintiy21_com.jpg?format=300w" },
  { name: "SayNode", href: "https://www.saynode.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568467135-P6HCSME3M25YDVSLY0BS/Logo+Saynode+B+transparent+%282%29.png?format=100w" },
  { name: "NYM", href: "https://nymtech.net/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728216316012-B4YYGCSVJ9I6K23GTI9R/nym_1200x630-2dfd28cf.png?format=300w" },
  { name: "Zeus ATM", href: "https://zeusatm.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568701020-HLH119V9BFJEPE1P3GM3/Zeus+Logo+ohne+Claim%403x.png?format=300w" },
  { name: "bitcoin-schweiz.ch", href: "https://bitcoin-schweiz.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727571196505-TICAF3KK9275JC9NJGRW/Logo+bitcoin-schweiz.ch.jpg?format=300w" },
  { name: "Lamassu", href: "https://lamassu.is/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1730642437107-NM6E7FDWMOGHSA5DJ1H9/logo-atms-colored-b-320px.png?format=300w" },
  { name: "Scholarium", href: "http://scholarium.at/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734428968346-05XILAMCMAT5R1B5GQ4C/scholarium-logo.png?format=300w" },
  { name: "House of Test", href: "https://www.houseoftest.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734444147758-EDKRGTOED8C3F698QV1L/hot-logotype-black-rebels.png?format=300w" },
  { name: "Relai", href: "https://relai.app/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1736800666643-VZ8Z4HLZQD4QEZN5FGMM/Relai_Julian+Liniger_.png?format=300w" },
  { name: "Nakamochi", href: "https://nakamochi.io/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1741777487636-80VAQDB2JONCFEZ3M4XW/nakamochi-logo-black.png?format=300w" },
  { name: "Bittr", href: "https://getbittr.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742559399401-2H32H2A9OV1BSDEZ0MF9/Bittr+Logo+%281%29.png?format=300w" },
  { name: "Unita", href: "https://unitafinance.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742910303034-A4PS8AGV0RLXQ0RU5EC7/unita.jpg?format=300w" },
  { name: "NiceHash", href: "https://www.nicehash.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1744446762941-RQH7Y2A8OZXB8Z1ESJH9/logo_big_light.png?format=300w" },
  { name: "Pandora Prime", href: "https://pandoraprime.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1752831944031-GC9P7Z15VHE0EPSRTKU5/logo.png?format=300w" },
  { name: "BitVault", href: "https://www.bitvault.sv/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1755722769067-OPN83O8PS2ETJIW4LY2G/BitVault-logo_transparent.png?format=300w" },
];

// Partner Organisations - 4 per row
const partnerOrganisations = [
  { name: "University of Basel", href: "https://cif.unibas.ch/en/home/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520356559322-8UKNRYQO16Z2GTXPRAML/Uni-Basel.png?format=300w" },
  { name: "SICTIC", href: "https://www.sictic.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1540280919184-RH9SE12KSTY2777PXEUT/sictic_logo.png?format=300w" },
  { name: "Swiss Blockchain Federation", href: "https://blockchainfederation.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1569996178809-N8448S1PPEBRDGJHT0E9/sbf.png?format=300w" },
  { name: "avalBit", href: "https://avalbit.org/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506741-Y72G6ITZERNQ8UOVVZLZ/a.png?format=300w" },
  { name: "Hayekianer", href: "https://hayekianer.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506913-WWZRVR2S1AD9U92L462X/hayek.png?format=300w" },
  { name: "Swiss Finance Startups", href: "https://www.swissfinancestartups.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506935-BS73Y360VY3M5S58P3UC/sfs.png?format=300w" },
  { name: "Swiss Fintech", href: "https://swissfinte.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506110586651-SVS7P6PJWLFNRMGH85OK/sfta-logo-tiny.png?format=300w" },
  { name: "Blockchain for Europe", href: "https://www.blockchain4europe.eu/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1618314774016-HWBC7ALLQEVOIVV6IXOD/logo_B4E_titre_Plan+de+travail+1+%284%29.png?format=300w" },
];

// Location Partners - 3 per row
const locationPartners = [
  { name: "Trust Square", href: "https://www.trustsquare.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1526644625552-BW81AAI2VT3SK71SIQPF/tr.jpg?format=300w" },
  { name: "CV Labs", href: "https://www.cvlabs.com/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1537969038775-2CPBS6A53NYZK5B0HW1Y/CV_Labs_Logo.png?format=300w" },
  { name: "Finance 2.0", href: "https://finance20.ch/", src: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1597070217402-M7RUREYX7Q9I7SLT7PVY/unnamed.jpg?format=300w" },
];

// Generous Donors
const generousDonors = [
  { name: "Daniel Gutenberg", href: "http://www.gutenberg.ch/" },
  { name: "William Taborda", href: null },
  { name: "Andre Drommershausen", href: null },
  { name: "Thierry Fragniere", href: "https://thierryfragniere.ch/" },
];

interface LogoGridProps {
  items: { name: string; href: string; src: string }[];
  columns: 3 | 4 | 5;
}

function LogoGrid({ items, columns }: LogoGridProps) {
  const gridCols = {
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 lg:gap-8`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center p-4">
          {item.href ? (
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
          ) : (
            <div className="relative w-full h-16 flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function CorporateMembersContent() {
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left sidebar navigation */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:w-48 flex-shrink-0">
            <nav className="space-y-2">
              <p className="text-[#3D9991] text-sm font-medium mb-4">membership</p>
              <Link
                href="https://www.bitcoinassociation.ch/private"
                className="block text-xs uppercase tracking-wider text-[#666666] hover:text-[#3D9991] transition-colors py-1"
              >
                Private
              </Link>
              <Link
                href="https://www.bitcoinassociation.ch/corporate"
                className="block text-xs uppercase tracking-wider text-[#666666] hover:text-[#3D9991] transition-colors py-1"
              >
                Corporate
              </Link>
              <Link
                href="https://www.bitcoinassociation.ch/our-corporate-members"
                className="block text-xs uppercase tracking-wider text-[#1f1f1f] font-bold py-1"
              >
                Our Corporate Members
              </Link>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Corporate Members Section */}
            <section className="mb-16">
              <h1 className="font-heading text-3xl lg:text-4xl text-center text-[#1f1f1f] mb-6">
                Corporate Members
              </h1>
              <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
                <p className="text-[#666666] text-sm leading-relaxed">
                  The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) financially, through a corporate membership.
                </p>
                <p className="text-[#666666] text-sm leading-relaxed">
                  The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
                </p>
              </div>
              <LogoGrid items={corporateMembers} columns={5} />
            </section>

            {/* Partner Organisations Section */}
            <section className="mb-16">
              <h2 className="font-heading text-2xl lg:text-3xl text-center text-[#1f1f1f] mb-6">
                Partner Organisations
              </h2>
              <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
                <p className="text-[#666666] text-sm leading-relaxed">
                  The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) through various means and services, other than a corporate membership..
                </p>
                <p className="text-[#666666] text-sm leading-relaxed">
                  The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
                </p>
              </div>
              <LogoGrid items={partnerOrganisations} columns={4} />
            </section>

            {/* Location Partners Section */}
            <section className="mb-16">
              <h2 className="font-heading text-2xl lg:text-3xl text-center text-[#1f1f1f] mb-6">
                Location Partners
              </h2>
              <LogoGrid items={locationPartners} columns={3} />
            </section>

            {/* Generous Donors Section */}
            <section>
              <h2 className="font-heading text-2xl lg:text-3xl text-center text-[#1f1f1f] mb-6">
                Generous Donors
              </h2>
              <p className="text-[#666666] text-sm text-center mb-6">
                The following individuals donated 1 Bitcoin or more to support our mission:
              </p>
              <div className="space-y-3 text-center">
                {generousDonors.map((donor, index) => (
                  <p key={index}>
                    {donor.href ? (
                      <Link
                        href={donor.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3D9991] font-bold text-sm hover:underline"
                      >
                        {donor.name}
                      </Link>
                    ) : (
                      <span className="text-[#1f1f1f] font-bold text-sm">{donor.name}</span>
                    )}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

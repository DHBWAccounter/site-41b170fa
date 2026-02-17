"use client";

import Link from "next/link";

interface ArchiveItem {
  date: string;
  title: string;
  href: string;
}

interface ArchiveGroup {
  monthYear: string;
  href: string;
  items: ArchiveItem[];
}

const archiveData: ArchiveGroup[] = [
  {
    monthYear: "December 2025",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2025",
    items: [
      { date: "Dec 9, 2025", title: "Bitcoin in 10vor10", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10" },
      { date: "Dec 9, 2025", title: "Marc Faber points readers to Bitcoin", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin" },
    ],
  },
  {
    monthYear: "May 2025",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2025",
    items: [
      { date: "May 31, 2025", title: "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/-" },
    ],
  },
  {
    monthYear: "February 2025",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=02-2025",
    items: [
      { date: "Feb 28, 2025", title: "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation" },
    ],
  },
  {
    monthYear: "November 2024",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=11-2024",
    items: [
      { date: "Nov 13, 2024", title: "Bitcoin Association Switzerland appoints new board, sets bold vision for the future", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future" },
    ],
  },
  {
    monthYear: "October 2024",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=10-2024",
    items: [
      { date: "Oct 27, 2024", title: "Announcement from the Board of the Bitcoin Association Switzerland", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland" },
    ],
  },
  {
    monthYear: "August 2022",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=08-2022",
    items: [
      { date: "Aug 10, 2022", title: "Prudential Treatment of Cryptoasset Exposures II", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii" },
    ],
  },
  {
    monthYear: "June 2021",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2021",
    items: [
      { date: "Jun 27, 2021", title: "Prudential Treatment of Cryptoasset Exposures", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance" },
    ],
  },
  {
    monthYear: "April 2021",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=04-2021",
    items: [
      { date: "Apr 20, 2021", title: "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2021/6/23/01ts1e8cggntafbag86wvwbztvudvh" },
    ],
  },
  {
    monthYear: "June 2020",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2020",
    items: [
      { date: "Jun 20, 2020", title: "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board" },
    ],
  },
  {
    monthYear: "April 2020",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=04-2020",
    items: [
      { date: "Apr 9, 2020", title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia" },
    ],
  },
  {
    monthYear: "March 2020",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=03-2020",
    items: [
      { date: "Mar 13, 2020", title: "Our Comment on \"Designing a prudential treatment for cryptoassets\" of the Basel Committee on Banking Supervision", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision" },
    ],
  },
  {
    monthYear: "December 2019",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2019",
    items: [
      { date: "Dec 3, 2019", title: "Crypto Valley Association Issues Questionable Recommendations", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations" },
    ],
  },
  {
    monthYear: "June 2019",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2019",
    items: [
      { date: "Jun 27, 2019", title: "Our Comment on the Swiss Blockchain Law", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law" },
    ],
  },
  {
    monthYear: "December 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2018",
    items: [
      { date: "Dec 14, 2018", title: "On the Federal Council Report", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report" },
    ],
  },
  {
    monthYear: "September 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=09-2018",
    items: [
      { date: "Sep 26, 2018", title: "Is the Ethereum system a legal subject?", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject" },
    ],
  },
  {
    monthYear: "June 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2018",
    items: [
      { date: "Jun 1, 2018", title: "Why storing Bitcoins for clients does not make you a bank", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank" },
    ],
  },
  {
    monthYear: "May 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2018",
    items: [
      { date: "May 17, 2018", title: "Bitcoin Association Switzerland 2018: General Assembly", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly" },
    ],
  },
  {
    monthYear: "April 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=04-2018",
    items: [
      { date: "Apr 19, 2018", title: "Better legal protection for clients of Bitcoin firms coming?", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming" },
    ],
  },
  {
    monthYear: "March 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=03-2018",
    items: [
      { date: "Mar 3, 2018", title: "The Latest Regulatory Threat", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat" },
    ],
  },
  {
    monthYear: "October 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=10-2017",
    items: [
      { date: "Oct 31, 2017", title: "Bitcoin Gold - Do we need it and if yes, how many?", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj" },
      { date: "Oct 2, 2017", title: "Tone Vays Meetup in Zurich September 2017", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017" },
    ],
  },
  {
    monthYear: "August 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=08-2017",
    items: [
      { date: "Aug 9, 2017", title: "Self-made", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/8/8/lakeside-partners-joins-the-bitcoin-association-switzerland" },
    ],
  },
  {
    monthYear: "July 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=07-2017",
    items: [
      { date: "Jul 15, 2017", title: "Op Ed: Proof of Work, not Proof of Stake", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake" },
    ],
  },
  {
    monthYear: "June 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2017",
    items: [
      { date: "Jun 10, 2017", title: "How to participate in the local Bitcoin community", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community" },
    ],
  },
  {
    monthYear: "May 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2017",
    items: [
      { date: "May 15, 2017", title: "Our Regulatory Comment on the new Fintech-Regulation", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung" },
      { date: "May 14, 2017", title: "Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv" },
      { date: "May 13, 2017", title: "Welcoming new board members", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members" },
    ],
  },
  {
    monthYear: "August 2016",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=08-2016",
    items: [
      { date: "Aug 5, 2016", title: "FinTech Made in Switzerland", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland" },
    ],
  },
  {
    monthYear: "June 2016",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2016",
    items: [
      { date: "Jun 20, 2016", title: "Swiss Move to Reduce Blockchain Regulation", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation" },
    ],
  },
  {
    monthYear: "December 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2014",
    items: [
      { date: "Dec 5, 2014", title: "Talk at SIPUG day", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day" },
    ],
  },
  {
    monthYear: "June 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2014",
    items: [
      { date: "Jun 25, 2014", title: "Federal Council report: No special regulation needed", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed" },
      { date: "Jun 15, 2014", title: "Miner's \"luck smoothing\" excuse does not hold up to scrutiny", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny" },
    ],
  },
  {
    monthYear: "May 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2014",
    items: [
      { date: "May 7, 2014", title: "Finma comments on Bitcoin", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin" },
    ],
  },
  {
    monthYear: "February 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=02-2014",
    items: [
      { date: "Feb 25, 2014", title: "The MtGox debacle would not have happened in a free market", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market" },
      { date: "Feb 17, 2014", title: "General Assembly 2014", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/02/17/general-assembly-2014" },
    ],
  },
  {
    monthYear: "December 2013",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2013",
    items: [
      { date: "Dec 4, 2013", title: "Bitcoin in Echo der Zeit", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit" },
    ],
  },
  {
    monthYear: "November 2013",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=11-2013",
    items: [
      { date: "Nov 8, 2013", title: "General Discussion Meetup", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup" },
      { date: "Nov 7, 2013", title: "Bitcoin on RTS and Euronews", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews" },
    ],
  },
];

function ArchiveGroup({ group }: { group: ArchiveGroup }) {
  return (
    <div className="mb-10">
      <Link
        href={group.href}
        className="text-[#1f1f1f] text-lg font-serif font-normal hover:underline block mb-4"
      >
        {group.monthYear}
      </Link>
      <ul className="space-y-4">
        {group.items.map((item, index) => (
          <li key={index} className="text-sm">
            <span className="text-[#999999] text-xs block mb-1">{item.date}</span>
            <Link
              href={item.href}
              className="text-[#1f1f1f] hover:text-[#c41212] transition-colors leading-relaxed block"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArchiveContent() {
  // Split data into two columns - roughly balanced
  const midpoint = Math.ceil(archiveData.length / 2);
  const leftColumn = archiveData.slice(0, midpoint);
  const rightColumn = archiveData.slice(midpoint);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
      {/* Left Column */}
      <div>
        {leftColumn.map((group) => (
          <ArchiveGroup key={group.monthYear} group={group} />
        ))}
      </div>

      {/* Right Column */}
      <div>
        {rightColumn.map((group) => (
          <ArchiveGroup key={group.monthYear} group={group} />
        ))}
      </div>
    </div>
  );
}

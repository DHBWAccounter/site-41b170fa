"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cards() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* About Card */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="Bitcoin community event"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-[#3D9991] text-lg font-bold uppercase tracking-wider mb-3">
              <Link href="https://www.bitcoinassociation.ch/about-1" className="hover:underline">
                About
              </Link>
            </h3>
            <p className="text-[#666666] text-base mb-4">
              Find out about our organization and mission.
            </p>
            <Link
              href="https://www.bitcoinassociation.ch/about-1"
              className="inline-flex items-center text-[#3D9991] hover:text-[#2d7a73] text-sm font-medium"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Join Us Card */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Bitcoin Association meeting"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-[#3D9991] text-lg font-bold uppercase tracking-wider mb-3">
              <Link href="https://www.bitcoinassociation.ch/meetups-events" className="hover:underline">
                Join Us
              </Link>
            </h3>
            <p className="text-[#666666] text-base mb-4">
              You can become a contributor to our cause, or participate yourself.
            </p>
            <Link
              href="https://www.bitcoinassociation.ch/meetups-events"
              className="inline-flex items-center text-[#3D9991] hover:text-[#2d7a73] text-sm font-medium"
            >
              Find Out How
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export function LogoSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-xs mx-auto px-4 text-center">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
          alt="Bitcoin Association Switzerland Logo"
          width={227}
          height={238}
          className="mx-auto w-auto h-auto"
        />
        <div className="mt-4">
          <h2 className="text-[#c41212] text-xl font-heading">
            Bitcoin Association
          </h2>
          <h2 className="text-[#c41212] text-xl font-heading">
            Switzerland
          </h2>
        </div>
      </div>
    </section>
  );
}

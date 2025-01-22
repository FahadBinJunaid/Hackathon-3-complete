'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      {/* Outer Container */}
      <div className="w-full md:w-[88%] h-full md:h-[83%] flex flex-col md:flex-row">
        {/* Purple Section */}
        <div className="w-full md:w-[65.5%] h-[50%] md:h-full bg-[#2A254B] flex flex-col justify-center px-6 md:px-12">
          {/* Title */}
          <h1 className="text-[28px] md:text-[44px] text-white leading-tight mb-6 md:mb-12">
            The furniture brand for the future, with timeless designs
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[500px] mb-6">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand
            offering tasteful colors and a modern display using cutting-edge web technologies.
          </p>

          {/* View Collection Button */}
          <button className="w-[180px] h-[48px] md:h-[56px] bg-white/10 text-white font-medium text-sm md:text-base hover:bg-white/20 transition-all">
            View Collection
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[38%] h-[50%] md:h-full flex items-center justify-center bg-[#2A254B] md:bg-transparent">
          <div className="relative w-[80%] h-[80%] md:w-full md:h-full">
            <Image
              src="/Parent.png"
              alt="Modern chair"
              fill
              className="object-cover md:object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
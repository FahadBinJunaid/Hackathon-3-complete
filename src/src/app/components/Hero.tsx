'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-br from-[#2A254B] to-[#4B3A6B] text-white overflow-hidden pt-16 mt-16">
            {/* Light Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_10%,_transparent_70%)]" />

            {/* Hero Content */}
            <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row-reverse items-center py-16 sm:py-24 lg:py-16 px-6 lg:px-11">

                {/* Image Section - Fully Responsive */}
                <div className="lg:w-[60%] sm:w-full flex justify-center items-center mb-6 lg:mb-6">
                    <div className="relative w-full sm:w-[60%] md:w-[70%] lg:w-[70%] h-auto flex justify-center">
                        <Image
                            src="/Parent.png"
                            alt="Luxury Chair"
                            width={350}  // Reduced width for small screens
                            height={250} // Reduced height for small screens
                            className="object-contain rounded-lg shadow-md"
                            priority
                        />
                    </div>
                </div>

                {/* Text Content (Purple Section) */}
                <div className="lg:w-[40%] w-full text-center lg:text-left space-y-4 lg:pr-8 lg:pl-10">
                    <h1 className="text-2xl sm:text-3xl font-bold leading-snug tracking-wide">
                        Elevate Your Space with Timeless Furniture
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Experience high-quality, eco-friendly designs that redefine modern elegance.
                    </p>
                    <a href='/allProducts' >
                        <button className="mt-5 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-full bg-white text-[#2A254B] shadow-md hover:bg-gray-200 transition">
                            Product Collection
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

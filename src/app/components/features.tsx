'use client';

const Features = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-[24px] md:text-[32px] text-center mb-12 md:mb-16">
          What makes our brand different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Next day delivery */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mb-4" // Added mb-4 here
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <h3 className="text-[20px] mb-2">Next day as standard</h3>
            <p className="text-[16px] text-neutral-600 leading-[150%]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          {/* Made by true artisans */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mb-4" // Added mb-4 here
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="text-[20px] mb-2">Made by true artisans</h3>
            <p className="text-[16px] text-neutral-600 leading-[150%]">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          {/* Unbeatable prices */}
          <div>
            <svg className="w-6 h-6 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-[20px] mb-2">Unbeatable prices</h3>
            <p className="text-[16px] text-neutral-600 leading-[150%]">
              For our materials and quality you won't find better prices anywhere
            </p>
          </div>

          {/* Recycled packaging */}
          <div>
            <svg className="w-6 h-6 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-[20px] mb-2">Recycled packaging</h3>
            <p className="text-[16px] text-neutral-600 leading-[150%]">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
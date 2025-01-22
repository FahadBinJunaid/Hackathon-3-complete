

import { useState } from 'react';

const DeliveryIcon = () => (
  <svg 
    className="w-5 h-5" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" 
    />
  </svg>
);

export default function Header() {
  return (
    <div className="bg-[#2A254B] w-full">
      <div className="h-auto min-h-[48px] px-4 py-2 flex flex-col sm:flex-row items-center justify-between text-white text-sm">
        {/* Centered Message */}
        <div className="text-center flex-grow sm:flex sm:justify-center sm:items-center mt-2 sm:mt-0">
          <span className="whitespace-normal sm:whitespace-nowrap overflow-visible sm:overflow-hidden text-ellipsis block flex items-center gap-2">
            <DeliveryIcon />
            <span className="text-xs sm:text-sm">
              Free delivery on all orders over £50 with code easter checkout
            </span>
          </span>
        </div>

        {/* Language Dropdown - Adjusted for mobile */}
        <div className="flex items-center space-x-2 sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
          {/* Your existing dropdown content */}
        </div>
      </div>
    </div>
  );
}
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white w-full">
      <div className="px-4 py-6 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Menu Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-2">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/allProducts" className="text-sm hover:underline">New arrivals</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Best sellers</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Recently viewed</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Popular this week</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">All products</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/allProducts" className="text-sm hover:underline">Crockery</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Furniture</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Homeware</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Plant pots</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Chairs</Link></li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-2">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/AboutUs" className="text-sm hover:underline">About us</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Vacancies</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Privacy policy</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">Returns policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-lg font-bold mb-2">Join our mailing list</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-[40px] px-4 text-black rounded-md"
              />
              <button className="h-[40px] px-6 bg-white text-[#2A254B] hover:bg-gray-100 transition-colors rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="mt-6 flex justify-center gap-4 text-white">
          <a href="#" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="#" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Skype">
            <SkypeIcon />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="#" aria-label="Pinterest">
            <PinterestIcon />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-sm text-center sm:text-left">
            Copyright 2024 Avion LTD
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social Media Icons Components (already optimized)
const LinkedInIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z"/>
  </svg>
);

const SkypeIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.474 6.676c-.07-.478-.177-.952-.31-1.414-.079-.276-.17-.548-.274-.823a5.647 5.647 0 00-1.595-2.059c-.293-.278-.621-.54-.961-.79-1.522-.44-3.124-.775-4.746-.775-1.467 0-2.903.36-4.242 1.05-.325.146-.633.311-.936.474-.722-.837-1.497-1.646-2.306-2.418-.429-.44-.873-.873-1.334-1.285-.715-.679-.787-1.573-.274-2.302 2.38-3.424 4.774-3.57 7.165-1.54a3.944 3.944 0 011.665 2.195c.244-.105.497-.203.751-.311 1.687-.65 3.497-1.38 5.221-.707.717.278 1.31.758 1.684 1.379.463.861.682 1.81.636 2.787.04 1.182-.159 2.375-.474 3.501-.176.642-.423 1.255-.712 1.847-.479.951-.935 1.885-1.377 2.831-.202-.601-.471-1.198-.798-1.788z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.23 5.924c-.812.36-1.682.603-2.58.713.926-.554 1.632-1.432 1.97-2.472-.866.513-1.826.87-2.846 1.066-.814-.868-1.984-1.404-3.28-1.404-2.488 0-4.5 2.016-4.5 4.5 0 .352.048.694.141 1.024-3.742-.188-7.062-1.979-9.274-4.694-.39.668-.614 1.44-.614 2.263 0 1.564.798 2.941 2.018 3.744-.745-.023-1.445-.229-2.05-.571v.057c0 2.181 1.55 4.02 3.614 4.433-.377.102-.775.155-1.175.155-.288 0-.568-.029-.844-.083.567 1.767 2.184 3.062 4.1 3.094-1.5 1.18-3.384 1.888-5.424 1.888-.35 0-.698-.021-1.043-.065 1.929 1.235 4.212 1.957 6.674 1.957 8.006 0 12.41-6.64 12.41-12.4 0-.19-.004-.378-.012-.567.85-.611 1.594-1.369 2.183-2.257z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c5.517 0 10 4.483 10 10s-4.483 10-10 10-10-4.483-10-10 4.483-10 10-10zm-.5 14c-.44 0-.778-.31-.897-.742-.23-.957-.435-1.753-.632-2.758-.193-.987-.365-2.098-.547-3.179-.246 1.007-.541 2.03-.79 3.04-.233.964-.609 1.719-1.146 2.524-.268-.441-.401-.879-.401-1.402 0-2.032 2.15-3.154 3.568-4.476 1.17-1.089 2.016-1.939 2.554-2.666 1.509-2.497.585-5.582-1.824-5.934-1.206-.184-2.122.07-2.994.964-.603.641-.878 1.479-1.153 2.249-.623-.144-1.285-.27-1.917-.396-3.19-.443-4.727 2.171-4.229 4.717.548 2.542 2.472 4.207 4.678 3.491 2.055-.478 2.372-3.124 2.557-4.592.352-.784.582-1.625.866-2.427z"/>
  </svg>
);
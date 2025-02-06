'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Category {
  name: string;
  slug: string;
}

export default function Footer() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/category');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();

        const normalizedCategories = data.map((item: any) => ({
          name: item.category.name,
          slug: item.category.slug.current,
        }));

        const uniqueCategories = normalizedCategories.filter(
          (category: Category, index: number, self: Category[]) =>
            index === self.findIndex((c) => c.slug === category.slug)
        );

        setCategories(uniqueCategories);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="bg-[#2A254B] text-white w-full">
      <div className="px-4 py-6 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Menu Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-2">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/newArrivals" className="text-sm hover:underline">New arrivals</Link></li>
              <li><Link href="/PopularThisWeek" className="text-sm hover:underline">Popular this week</Link></li>
              <li><Link href="/allProducts" className="text-sm hover:underline">All products</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul className="space-y-2">
              {isLoading ? (
                <p>Loading categories...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                categories.map((category) => (
                  <li key={category.slug}>
                    <Link href={`/category/${category.slug}`} className="text-sm hover:underline">
                      {category.name}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Our Company Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-2">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/AboutUs" className="text-sm hover:underline">About us</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>

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
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428-.047-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.065.218-1.79.465-2.428a4.904 4.904 0 011.153-1.772c.637-.247 1.363-.415 2.428-.465 1.066-.05 1.405-.06 4.122-.06zm0 1.8c-2.667 0-3.005.01-4.06.059-.881.04-1.462.213-1.856.45-.369.226-.679.536-.905.905-.237.395-.411.974-.451 1.856-.047 1.056-.059 1.396-.059 4.059 0 2.663.01 3.005.059 4.059.04.881.213 1.462.45 1.856.226.369.536.679.905.905.395.237.974.411 1.856.451 1.056.048 1.396.059 4.059.059 4.122 0-2.122-.01-2.563-.059-4.122-.04-.881-.214-1.462-.451-1.856-.226-.369-.536-.679-.905-.905-.395-.237-.974-.411-1.856-.451-1.056-.047-1.396-.059-4.122-.059z"/>
  </svg>
);

const SkypeIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10.398 0C4.662 0 0 4.663 0 10.4c0 5.727 3.82 10.515 9.14 11.723-.048.344-.228.879-.383 1.22-.42.842-.925 1.436-1.496 1.809-.078.055-.294.246-.08.155 1.53.545 3.162.636 4.724-.173a5.788 5.788 0 001.145-.741c-.674.488-.568-.629-.333-1.097.471-.998 1.13-1.69 2.015-1.43 1.592.354 2.12-2.233 2.74-2.582 1.47-.65 3.024-2.421 3.488-4.186.465-1.764-.004-3.853-.579-4.617-.333-.57-.827-.98-1.445-.941.125-.636.27-.978.412-1.34-.446-.217-1.022-.561-1.678-.846-.601.29-.757.93-1.292 1.194a7.365 7.365 0 01-1.785-.416c1.743-.145 3.052-.908 4.46-2.445a4.73 4.73 0 00-.15-.716c-.052-.256-.231-.363-.473-.417-.348.107-.822.299-.922-.114z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.016-.608 1.794-1.57 2.163-2.724-.95.556-2.004.959-3.127 1.17-.896-.954-2.174-1.549-3.588-1.549-3.452 0-6.248 3.055-5.624 6.496-4.498-.225-8.486-2.387-11.14-5.674-.464.796-.732 1.707-.732 2.68 0 1.849.93 3.474 2.344 4.428-.863-.027-1.68-.264-2.397-.658-.557 1.732 1.115 3.558 2.91 3.672-1.529.878-3.286 1.408-4.967 1.095 1.399 1.17 3.106 1.857 5.111 1.857 6.098 0 10.132-4.643 10.132-8.467 0-.13-.005-.258-.014-.386.69-.504 1.335-.937 2.021-1.498z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-6 h-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.274 3.642 9.74 8.44 11.37-.118-.75-.16-1.63-.094-2.47.451-3.85 2.642-7.48 6.07-8.99-1.548-.256-2.652-.92-3.542-2.181-1.026-1.217-.25-3.01 1.488-3.29 1.9-.224 3.29 1.544 3.29 3.61 0 .754-.258 1.448-.678 2.014-1.296-.483-2.578-.722-3.986-.723-1.698 0-3.36.487-4.605 1.458-1.009 1.077-.95 2.829-.57 4.244 1.197 1.75 3.151 1.595 4.51-.07-.365 2.365-.81 4.857-1.742 7.08-2.164-2.254-4.271-4.214-4.271-6.353z"/>
  </svg>
);

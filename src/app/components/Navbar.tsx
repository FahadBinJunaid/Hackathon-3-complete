'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

interface Category {
  name: string;
  slug: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { items } = useCart();

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/category'); // Replace with your API endpoint
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
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo on mobile */}
          <div className="w-1/3 flex items-center">
            <div className="md:hidden">
              <Link href="/" className="text-2xl font-bold">
                Avion
              </Link>
            </div>
          </div>

          {/* Center - Logo for desktop only */}
          <div className="hidden md:flex w-1/3 justify-center">
            <Link href="/" className="text-2xl font-bold">
              Avion
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-1/3 flex items-center justify-end gap-4">
            {/* Cart and Profile Icons - Desktop only */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/cart" className="p-2">
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
              <Link href="/Account" className="p-2">
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
            </div>

            {/* Menu Button - Mobile only */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed inset-0 bg-white z-50`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold">
              Avion
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {isLoading ? (
              <p>Loading categories...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="text-sm text-neutral-600 hover:text-black"
                >
                  {category.name}
                </Link>
              ))
            )}

            {/* Add Cart and Profile icons to mobile menu */}
            <div className="flex flex-col gap-4 mt-6">
              <Link href="/cart" className="p-2">
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
              <Link href="/Account" className="p-2">
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:block border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {isLoading ? (
              <p>Loading categories...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="text-sm text-neutral-600 hover:text-black"
                >
                  {category.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

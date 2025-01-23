'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import {
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface Category {
  name: string;
  slug: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cartItemCount, setCartItemCount] = useState<number>(0); // Dynamic cart item count

  const { items } = useCart();  // Get cart items from context

  // Update cart item count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        const totalItems = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
        setCartItemCount(totalItems);
      } else {
        setCartItemCount(0);
      }
    };

    // Call the function initially to set the cart count
    updateCartCount();

    // Use an interval to update the cart count every second
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

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
              <Link href="/" className="text-2xl font-bold text-black">
                Avion
              </Link>
            </div>
          </div>

          {/* Center - Logo for desktop only */}
          <div className="hidden md:flex w-1/3 justify-center">
            <Link href="/" className="text-2xl font-bold text-black">
              Avion
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-1/3 flex items-center justify-end gap-4">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/AboutUs" className="text-sm text-neutral-600 hover:text-black">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-neutral-600 hover:text-black">
                Contact Us
              </Link>
              <Link href="/cart" className="p-2 relative">
                <ShoppingCartIcon className="w-5 h-5 text-neutral-600" />
                {/* Cart Item Count */}
                <span className="absolute top-0 right-0 inline-block w-5 h-5 text-xs text-white bg-red-500 rounded-full text-center">
                  {cartItemCount > 0 ? cartItemCount : 0}
                </span>
              </Link>
              <Link href="/Account" className="p-2">
                <UserIcon className="w-5 h-5 text-neutral-600" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                <Bars3Icon className="w-5 h-5 text-neutral-600" />
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
            <Link href="/" className="text-2xl font-bold text-black">
              Avion
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
            >
              <XMarkIcon className="w-6 h-6" />
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

            {/* Add "About Us" and "Contact Us" Links in Mobile Menu */}
            <Link href="/AboutUs" className="text-sm text-neutral-600 hover:text-black">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-neutral-600 hover:text-black">
              Contact Us
            </Link>

            {/* Add Cart and Profile icons to mobile menu */}
            <div className="flex flex-col gap-4 mt-6">
              <Link href="/cart" className="p-2 relative">
                <ShoppingCartIcon className="w-5 h-5 text-neutral-600" />
                <span className="absolute top-0 right-0 inline-block w-5 h-5 text-xs text-white bg-red-500 rounded-full text-center">
                  {cartItemCount > 0 ? cartItemCount : 0}
                </span>
              </Link>
              <Link href="/Account" className="p-2">
                <UserIcon className="w-5 h-5 text-neutral-600" />
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

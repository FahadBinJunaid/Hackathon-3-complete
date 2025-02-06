'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';

interface Category {
  name: string;
  slug: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cartItemCount, setCartItemCount] = useState<number>(0); 

  const { items } = useCart();  

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

    updateCartCount();
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#2A254B] to-[#4B3A6B] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="w-1/3 flex items-center">
            <div className="md:hidden">
              <Link href="/" className="text-2xl font-bold text-white">
                Avion
              </Link>
            </div>
          </div>

          <div className="hidden md:flex w-1/3 justify-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Avion
            </Link>
          </div>

          <div className="w-1/3 flex items-center justify-end gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/AboutUs" className="text-sm text-white hover:text-gray-300">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-white hover:text-gray-300">
                Contact Us
              </Link>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <Link href="/cart" className="p-2 relative">
                <ShoppingCartIcon className="w-5 h-5 text-white" />
                <span className="absolute top-0 right-0 inline-block w-5 h-5 text-xs text-white bg-red-500 rounded-full text-center">
                  {cartItemCount > 0 ? cartItemCount : 0}
                </span>
              </Link>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                <Bars3Icon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed inset-0 bg-gradient-to-br from-[#2A254B] to-[#4B3A6B] text-white z-50`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Avion
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
            >
              <XMarkIcon className="w-6 h-6 text-white" />
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
                  className="text-sm text-white hover:text-gray-300"
                >
                  {category.name}
                </Link>
              ))
            )}

            <Link href="/AboutUs" className="text-sm text-white hover:text-gray-300">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-white hover:text-gray-300">
              Contact Us
            </Link>

            <div className="flex flex-col gap-4 mt-6">
              <Link href="/cart" className="p-2 relative">
                <ShoppingCartIcon className="w-5 h-5 text-white" />
                <span className="absolute top-0 right-0 inline-block w-5 h-5 text-xs text-white bg-red-500 rounded-full text-center">
                  {cartItemCount > 0 ? cartItemCount : 0}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3">
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
                  className="text-sm text-white hover:text-gray-300"
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

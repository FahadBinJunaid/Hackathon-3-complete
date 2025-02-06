'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Product } from '../allProducts/page';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [heading, setHeading] = useState('New arrivals');

  useEffect(() => {
    // Update heading dynamically based on page
    if (window.location.pathname.startsWith('/product/')) {
      setHeading('You Might Also Like');
    }

    // Fetch products asynchronously
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Limit the products displayed to the first 4
  const limitedProducts = products.slice(8, 12);

  return (
    <div className="py-8 md:py-12">
      <Navbar />
      
      {/* Dynamic Heading */}
      <h2 className="text-[24px] sm:text-[32px] font-clash-display mb-8 px-4 sm:px-6 lg:px-8 pt-16 mt-16">
        {heading}
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mb-8">
        {limitedProducts.map((product) => (
          <div key={product._id} className="group cursor-pointer mb-8">
            <Link
              href={{
                pathname: `/product/${product._id && product.slug?.current}`,
                query: {
                  name: product.name,
                  price: product.price,
                  image: product.image.asset.url,
                  description: product.description,
                },
              }}
            >
              <div className="aspect-square mb-4 relative overflow-hidden w-full">
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-[20px] mb-2">{product.name}</h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-neutral-600">£{product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* "View All Products" Button */}
      <div className="flex justify-center items-center mb-8">
        <a href="/allProducts">
          <button className="px-8 py-3 bg-[#2A254B] text-white rounded-md hover:bg-[#393452] transition-colors">
            View All Products
          </button>
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default NewArrivals;

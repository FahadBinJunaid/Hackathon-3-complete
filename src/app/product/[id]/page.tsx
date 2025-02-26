'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import NewCeramics from '@/app/components/NewCeramics';
import Features from '@/app/components/features';
import EmailSignUp from '@/app/components/EmailSignUp';

// Define the type for cart items
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const ProductDetail = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');  // Get name from query parameters
  const price = parseFloat(searchParams.get('price') || '0');  // Get price from query parameters
  const image = searchParams.get('image');  // Get image from query parameters
  const description = searchParams.get('description') || 'No description provided';  // Get description from query parameters, with fallback

  const [num, setNum] = useState(1);

  // Increase function
  const increase = () => setNum((prev) => prev + 1);

  // Decrease function
  const decrease = () => setNum((prev) => (prev > 1 ? prev - 1 : 1));

  // Add to cart function
  const addToCart = () => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the item already exists in the cart
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      // Update quantity of existing item
      existingItem.quantity += num;
    } else {
      // Add new item to the cart
      cart.push({
        id: Date.now(), // Unique ID for the cart item
        name: name || 'Unknown Product',
        description: description, // Use the dynamic description
        price,
        image: image || '/placeholder.png',
        quantity: num,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12  pt-16 mt-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Product Image */}
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src={image || '/placeholder.png'}
              alt={name || 'Product Image'}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold">{name || 'Product Name'}</p>
              <p className="py-2 text-xl sm:text-2xl font-medium text-[#2A254B]">£{price.toFixed(2)}</p>
            </div>

            <div className="text-[#505977] text-sm sm:text-base mt-6">
              <h1 className="font-semibold text-lg">Description</h1>
              <p className="mt-4 leading-relaxed text-base sm:text-lg">
                {description || 'No description provided'}
              </p>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-8">
              <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold">Amount:</h1>
                <div className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2 items-center">
                  <span className="cursor-pointer text-lg font-bold" onClick={decrease}>
                    -
                  </span>
                  <span className="text-lg font-semibold">{num}</span>
                  <span className="cursor-pointer text-lg font-bold" onClick={increase}>
                    +
                  </span>
                </div>
              </div>
              
              <button
                onClick={addToCart}
                className="w-full md:w-[146px] h-[56px] bg-[#2A254B] hover:bg-[#2A114C] text-white mt-4 md:mt-0 font-semibold text-lg rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Recommendations Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <NewCeramics />
        <Features />
      </div>
      <EmailSignUp />
      <Footer />
    </div>
  );
};

export default ProductDetail;
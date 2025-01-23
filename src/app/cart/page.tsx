'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-12 flex-grow">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center text-center py-16">
            <p className="text-[24px] font-semibold mb-4">Your cart is empty</p>
            <p className="text-neutral-600 mb-8">
              Add items to your cart to see them here. Start shopping now!
            </p>
            <Link href="/allProducts">
              <button className="px-8 py-3 bg-[#2A254B] text-white rounded-md hover:bg-[#393452] transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-[2fr,1fr,1fr] gap-8 pb-4 border-b border-neutral-200">
              <div>Product</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid md:grid-cols-[2fr,1fr,1fr] gap-8 py-8 border-b border-neutral-200"
              >
                <div className="flex gap-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[80px] h-[80px] md:w-[124px] md:h-[124px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-[16px] md:text-[20px] font-medium mb-1 md:mb-2">
                      {item.name}
                    </h3>
                    <p className="text-neutral-600 text-[14px] md:text-[16px] mb-2 md:mb-4">
                      {item.description}
                    </p>
                    <p className="font-semibold text-[14px] md:text-[16px]">
                      £{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-start mt-4 md:mt-0">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-12 md:w-16 text-center py-1"
                  />
                </div>

                <div className=" hidden text-right font-semibold mt-4 md:mt-0">
                  £{(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="md:flex justify-end mt-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm ronded text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-end mt-8">
              <div className="w-full md:w-[400px]">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">£{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-neutral-600 mb-8">
                  Taxes and shipping are calculated at checkout
                </p>
                <Link
                href="/checkoutDetails"
                >
                <button className="w-full bg-[#2A254B] text-white py-4 hover:bg-[#393452] transition-colors rounded-md">
                  Go to checkout
                </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
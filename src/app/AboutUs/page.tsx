import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmailSignUp from '../components/EmailSignUp';
import Features from '../components/features';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      
      {/* Brand Banner - Made responsive */}
      <div className="w-full bg-[#FFFFFF] py-12 sm:py-16 lg:py-20 pt-16 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <h1 className="text-[32px] sm:text-[48px] leading-[120%] max-w-[736px]">
            A brand built on the love of craftmanship, quality and outstanding customer service
          </h1>
          <button className="text-neutral-600 hover:text-black whitespace-nowrap">
            View our products
          </button>
        </div>
      </div>

      {/* Small Idea Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="bg-[#2A254B] text-white p-8 sm:p-12 lg:p-16">
            <h2 className="text-[32px] font-clash-display leading-[120%] mb-8">
              It started with a small idea
            </h2>
            <p className="text-base leading-[150%] mb-12">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
            <button className="bg-[rgba(249,249,249,0.15)] hover:bg-[rgba(249,249,249,0.25)] transition-colors text-white px-8 py-4">
              View collection
            </button>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/3] lg:aspect-[4/3]">
            <Image
              src="/Image Block.png"
              alt="Modern yellow chair"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="relative aspect-[6/5]">
            <Image
              src="/Image (1).png"
              alt="Modern sofa"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-[32px] font-clash-display leading-[120%] mb-8">
              Our service is not just personal, its actually hyper personally exquisite
            </h2>
            <p className="text-base text-neutral-600 mb-6">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="text-base text-neutral-600 mb-12">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <button className="text-neutral-600 hover:text-black border border-neutral-600 px-8 py-4 w-fit">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmailSignUp />
      </div>
      
      <Footer />
    </div>
  );
}
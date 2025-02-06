'use client';

import EmailSignUp from './components/EmailSignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/features';
import NewCeramics from './components/NewCeramics';
import PopularProducts from './components/PopularProducts';
import StudioLondon from './components/StudioLondon';;

function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <Features />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <NewCeramics />
        <PopularProducts />
      </div>

      <EmailSignUp />
      
      <div className="container mx-auto px-4 mb-20 sm:px-6 lg:px-8">
        <StudioLondon />
      </div>

      <Footer />
    </div>
  );
}

export default Home;